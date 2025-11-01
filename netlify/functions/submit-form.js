const https = require('https')

const makeRequest = (url, options) => {
  return new Promise((resolve, reject) => {
    const req = https.request(url, options, (res) => {
      let data = ''
      res.on('data', (chunk) => { data += chunk })
      res.on('end', () => {
        resolve({ ok: res.statusCode >= 200 && res.statusCode < 300, data })
      })
    })
    req.on('error', reject)
    if (options.body) req.write(options.body)
    req.end()
  })
}

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    }
  }

  try {
    // Parse form data
    const formData = new URLSearchParams(event.body)
    const data = {}
    for (const [key, value] of formData.entries()) {
      data[key] = value
    }

    // Send to Slack
    const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL
    if (slackWebhookUrl) {
      const slackMessage = {
        text: '新しいお問い合わせがありました',
        blocks: [
          {
            type: 'header',
            text: {
              type: 'plain_text',
              text: '📧 新しいお問い合わせ',
              emoji: true
            }
          },
          {
            type: 'section',
            fields: [
              {
                type: 'mrkdwn',
                text: `*名前:*\n${data.firstname || ''} ${data.lastname || ''}`
              },
              {
                type: 'mrkdwn',
                text: `*会社名:*\n${data.companyName || ''}`
              },
              {
                type: 'mrkdwn',
                text: `*メールアドレス:*\n${data.emailAddress || ''}`
              },
              {
                type: 'mrkdwn',
                text: `*お問い合わせ種類:*\n${data.type || ''}`
              }
            ]
          },
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: `*メッセージ:*\n${data.message || ''}`
            }
          }
        ]
      }

      if (data.newsletter === 'on') {
        slackMessage.blocks.push({
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: '✅ ニュースレター購読希望'
          }
        })
      }

      await makeRequest(slackWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(JSON.stringify(slackMessage))
        },
        body: JSON.stringify(slackMessage)
      })
    }

    // Submit to Netlify Forms for spam filtering and form management
    const netlifyFormData = new URLSearchParams()
    netlifyFormData.append('form-name', data['form-name'])

    // Add all form fields
    for (const [key, value] of Object.entries(data)) {
      netlifyFormData.append(key, value)
    }

    const formDataString = netlifyFormData.toString()
    await makeRequest('https://blocco2024.netlify.app/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(formDataString)
      },
      body: formDataString
    })

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    }
  } catch (error) {
    console.error('Error:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to submit form' })
    }
  }
}
