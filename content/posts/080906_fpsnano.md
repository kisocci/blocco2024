---
template: SinglePost
title: XBee搭載のiPhone nano !?
slug: blog/fpsnano
status: Published
date: '2008-09-06'
featuredImage: '../images/blog/fpsnano/nano2.jpg'
excerpt: >-
  2008年9月。大阪で行われた、Flash Power Sessionに木曽が参加しました。iPhone nano。
categories:
  - category: Experiment
meta:
  description: 2008年9月。大阪で行われた、Flash Power Sessionに木曽が参加しました。iPhone nano。
  title: XBee搭載のiPhone nano !?
---

![](/blog/fpsnano/fps0.jpg)

<iframe width="560" height="315" src="https://www.youtube.com/embed/W5TVuk7sc7M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>



#### Abstract

　2008年9月。大阪で行われた、Flash Power Sessionに木曽が参加しました。FRISKの空き箱に、加速度センサーとXBeeを搭載したiPhone nanoを制作、披露しました。

加速度センサーでケースの傾き具合を常時検出しXBeeで親機へ無線送信。
親機のPCでは、受信した傾き情報をもとにFlashとPapervision3Dでリアルタイムに3DCGを描画します。
![通信図](/blog/fpsnano/flash1.png)

#### 筐体制作

準備するもの
![frisk](/blog/fpsnano/nano1.jpg)

特別付録！「iPhone nano画像データ」写真用紙に印刷してFRISKに貼るとiPhone nanoの完成です！
![frisk](/blog/fpsnano/iphonenano_seal.png)

iPhone 3Gと！
![frisk](/blog/fpsnano/nano2.jpg)

通話はできません。
![frisk](/blog/fpsnano/nano3.jpg)

#### ハードウェア制作

XBee Starter Kit – XB24-DKSJ　（購入先：アルファ電子）
![XBee iPhone nano](/blog/fpsnano/fps1.jpg)

3軸加速度センサーモジュール – KXM52-1050　（購入先：秋月電子通商）
![加速度センサー](/blog/fpsnano/fps2.jpg)

- 2mmピッチピンソケット
- 2mmピッチユニバーサル基盤
- ボタン電池ソケット
- ボタン電池 – CR2032

これらをFRISKのケースにいれれば、iPhone nanoのできあがり！
![回路図](/blog/fpsnano/xbee3.jpg)

さて、もう少し詳しく。
ボタン電池と3軸加速度センサーとXBeeとを基盤上で接続します。
この回路図のように、電池ケースと各素子のVCC,GNDを直結。
3軸加速度センサーのX,Y,Z出力を、XBeeのAD0/DIO0,1,2にそれぞれ接続します。
3軸加速度センサーのSelfTestはGNDに落としておきます。
XBeeのVREF端子(14番)がADCのリファレンスとなりますので、VCC3Vに接続します。
![回路図](/blog/fpsnano/circuit.png)
![基盤](/blog/fpsnano/xbee0.jpg)

>注意：XBeeの端子のピッチが2mmでして、一般のインチ系（2.54mmピッチ）の基盤では合いません。基盤のピッチにはご注意ください。また、同様に一般的なブレッドボードもちょっと使えませんので、とりあえず2mmピッチのピンソケットを購入しいろいろ自作する必要があると思います。

>追記20081031：XBeeのピッチ変換基盤がSparkfunから発売されています（BOB-08276）。また、スイッチサイエンスではピンソケットをセットにして販売しています。XBeeをブレッドボードで使う場合は便利です。

#### XBeeのコンフィギュレーション
XBeeの動作設定を行います。
XBeeを評価ボードを介してUSB/Serial接続します。xbee1
キットに付属の「X-CTU ソフトウェア(Windows版のみ)」を起動します。
「Modem Configuration」タブをクリックし、各パラメータを入力します。

ポイントは、iPhone nano側のXBeeのDIO0〜2ピンを[2:ADC]としてアナログ入力＋ADCとして設定するところでしょうか。

XBeeのシリアル設定
```
Speed: 38400bps
FlowControl: None
DataBits: 8
Parity: None
StopBit: 1
PCホスト側XBeeの設定
XB24_15_4_10A5.mxi
FE
0
231
10A5
0
[A]CH=C
[A]ID=3332
[A]DH=0
[A]DL=5678
[A]MY=1234
[A]RR=0
[A]RN=0
[A]MM=0
[A]NT=19
[A]CE=0
[A]SC=1FFE
[A]SD=4
[A]A1=0
[A]A2=0
[A]EE=0
[A]NI= 
[A]PL=4
[A]CA=2C
[A]SM=0
[A]ST=1388
[A]SP=0
[A]DP=3E8
[A]BD=5
[A]RO=3
[A]AP=0
[A]PR=FF
[A]D8=0
[A]D7=1
[A]D6=0
[A]D5=1
[A]D4=0
[A]D3=0
[A]D2=0
[A]D1=0
[A]D0=0
[A]IU=1
[A]IT=1
[A]IC=0
[A]IR=0
[A]IA=5678
[A]T0=FF
[A]T1=FF
[A]T2=FF
[A]T3=FF
[A]T4=FF
[A]T5=FF
[A]T6=FF
[A]T7=FF
[A]P0=2
[A]P1=2
[A]PT=FF
[A]RP=28
[A]CT=64
[A]GT=3E8
[A]CC=2B
```

iPhone nano側XBeeの設定
```
XB24_15_4_10A5.mxi
FE
0
231
10A5
0
[A]CH=C
[A]ID=3332
[A]DH=0
[A]DL=1234
[A]MY=5678
[A]RR=0
[A]RN=0
[A]MM=0
[A]NT=19
[A]CE=0
[A]SC=1FFE
[A]SD=4
[A]A1=0
[A]A2=0
[A]EE=0
[A]NI= 
[A]PL=4
[A]CA=2C
[A]SM=0
[A]ST=1388
[A]SP=0
[A]DP=3E8
[A]BD=5
[A]RO=3
[A]AP=0
[A]PR=FF
[A]D8=0
[A]D7=1
[A]D6=0
[A]D5=1
[A]D4=0
[A]D3=0
[A]D2=2 [2:ADCに設定しています]
[A]D1=2 [2:ADCに設定しています]
[A]D0=2 [2:ADCに設定しています]
[A]IU=1
[A]IT=1
[A]IC=0
[A]IR=19
[A]IA=FFFFFFFFFFFFFFFF
[A]T0=FF
[A]T1=FF
[A]T2=FF
[A]T3=FF
[A]T4=FF
[A]T5=FF
[A]T6=FF
[A]T7=FF
[A]P0=1
[A]P1=0
[A]PT=FF
[A]RP=28
[A]CT=64
[A]GT=3E8
[A]CC=2B
```

#### 加速度センサーの値を料理する
加速度データを受け、実際に画面上にiPhone nanoの3Dイメージを描画するのはFlashの担当となります。

iPhone nanoからの加速度データはXBeeを経由し、シリアル経路上をバイナリデータとして送出されてきます。
PC上でSerialProxyというプログラムを用いてシリアルをTCPに変換し、それをFlashのSocketクラスで受け取るようにします。

データはバイナリで届きますが、データの先頭が00 01 1E 00となりますので、それをトリガーにして、続くの6バイトを2バイトずつx,y,zの値として取得します。XBeeは10bit ADCを搭載するため、値の範囲は0x0000〜0x03FFとなります。Flashではこの値からG値を復元しています。

（計算）電源は3Vですので0Gの時、ADCの出力電圧は1.5V。
出力電圧は1Gあたり660mV振れますので（@3.3Vですが）、-1Gであれば0.84V、+1Gであれば1.16Vの出力電圧となります。
前述のようにXBee内蔵のADCは10bitのサンプリングをします。リファレンスをVCCにしましたので、入力＝VCCの時0x3FFの出力、入力＝VCC/2の時0x200あたりの出力が得られることになります。また比で考えますと、660mVは0xCCに相当するとみまして、
Gx = (ADCx – 0x200) / 0xCC
として加速度(G)の値を算出しています。1G以上（もしくは-1G以下）の加速度が感知された場合は、1Gに丸めてしまい±1Gに収まるようにしています。

あとは、iPhone Flashと同様です。
基本的に傾きを
iphonenano.rotationX = Math.atan(accY/accZ)*180/Math.PI;（手前に倒れる角度）
として求めて、Papervision3Dでモデルを傾けています（軸回転させています）。

実際には座標系（回転の原点（０度の位置））を調整して、現物の傾きとあわせています。

```
if (accZ>0) {
  iphonenano.rotationX = 90 - Math.atan(accY/-accZ)*180/Math.PI;
} else {
   iphonenano.rotationX = 270 - Math.atan(accY/-accZ)*180/Math.PI;
}
if (accY>0) {
   iphonenano.rotationZ =  (-1)* Math.atan(accX/accY)*180/Math.PI;
} else {
   iphonenano.rotationZ =  Math.atan(accX/accY)*180/Math.PI;
}
```





#### Event

Flash Power Session(FPS)は2001年、日常的なネットでの情報交換だけでは収まりきれない「実際に体験するFlash」と「メンバーの交流」を目的に企画され、完全なユーザー手作りイベントとしてスタートしました。2001年は大阪、2002年にはFlash-Japan のパートナーコミュニティである F-site主催で東京にて、2004年に大阪にて開催、それぞれ300人前後のFlashユーザーが日本全国から集結しました。

その後ウェブ2.0をはじめとするインターネットコミュニケーションの変革時期に入り、MacromediaもAdobeと合併することによって、クリエイティブを支える環境も大きく発展しようとしています。

4回目となる今回は、関西にて活動している様々な新鋭コミュニティとともに、プロアマ、職種（デザイナー/プログラマー等）を問わず、Flashの様々な事例や情報交換、人的な交流を行いました。


#### おまけ

もともとはiPhone 3Gで実装
<iframe width="560" height="315" src="https://www.youtube.com/embed/j6UJ_Qybq6g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>