import React from 'react'
import { MapPin, Smartphone, Mail, Box } from 'react-feather'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import FormSimpleAjax from '../components/FormSimpleAjax'
import Content from '../components/Content'
import GoogleMap from '../components/GoogleMap'
import Layout from '../components/Layout'
import './ContactPage.css'

// Export Template for use in CMS preview
export const ContactPageTemplate = ({
  body,
  title,
  subtitle,
  featuredImage,
  address,
  address_ja,
  company,
  company_ja,
  establishedIn,
  phone,
  email,
  locations
}) => (
  <main className="Contact">
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />
    <section className="section Contact--Section1">
      <div className="container Contact--Section1--Container">
        <div>
          <Content source={body} />
          <div className="Contact--Details">
            <a className="Contact--Details--Item Contact--Details--Cursor" href="javascript:void(0);"><Box />{company_ja}</a>
            {address && (
              <a
                className="Contact--Details--Item"
                href={`https://www.google.com.au/maps/search/${encodeURI(
                  address_ja
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin /> {address_ja}
              </a>
            )}
            {email && (
              <a className="Contact--Details--Item" href={`mailto:${email}`}>
                <Mail /> {email}
              </a>
            )}
            {phone && (
              <a className="Contact--Details--Item" href={`tel:${phone}`}>
                <Smartphone /> {phone} <small>※お電話がとれない場合がございます。<br/>　Eメールでお問い合わせください。</small>
              </a>
            )}
            <hr class="Contact--Details-hr"/>
            <a className="Contact--Details--Item Contact--Details--Cursor" href="javascript:void(0);"><Box /><b class="Contact--Details--HItem-4">設立　</b>2001年12月10日</a>
            <a className="Contact--Details--Item Contact--Details--Cursor" href="javascript:void(0);"><Box /><b class="Contact--Details--HItem-3">代表者　</b>取締役社長　木曽 隆</a>
            <a className="Contact--Details--Item Contact--Details--Cursor" href="javascript:void(0);"><Box /><b class="Contact--Details--HItem-2">取引銀行　</b>沖縄銀行 本店営業部</a>
            <a className="Contact--Details--Item Contact--Details--Cursor" href="javascript:void(0);"><Box /><b class="Contact--Details--HItem-1">主要取引先　</b>ファイバーキャストジャパン株式会社、株式会社ハヤテ</a>
            
          </div>
        </div>

        <div>
          <FormSimpleAjax name="bloccoContact" />
        </div>
      </div>
    </section>

    <GoogleMap locations={locations} />
  </main>
)

const ContactPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <ContactPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)

export default ContactPage

export const pageQuery = graphql`
  query ContactPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        template
        subtitle
        featuredImage
        address
        address_ja
        company
        company_ja
        establishedIn
        phone
        email
        locations {
          mapLink
          lat
          lng
        }
      }
    }
  }
`
