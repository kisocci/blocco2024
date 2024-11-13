---
template: SinglePost
title: RFIDタグによる「拾う」インタフェース @芸術工学会
slug: blog/kougakukai1
status: Published
date: '2008-09-06'
featuredImage: '/blog/rfid/r0010768.JPG'
excerpt: >-
  芸術工学会2009春季大会（沖縄）での出展
categories:
  - category: Experiment
meta:
  description: 芸術工学会2009春季大会（沖縄）での出展
  title: RFIDタグによる「拾う」インタフェース @芸術工学会
---

![](/blog/rfid/r0010768.JPG)

#### Abstract

芸術工学会2009春季大会in沖縄にて出展を行いました。
「日々流れている情報を拾う行為。」一日の新聞の誌面は文庫本２冊相当の文字量
私たちのまわりには、情報があふれています。それらすべてを、拾い、理解することはとてもできません。今回は、非接触センサーを用いて、拾いきれない情報を毎日流れるニュース記事になぞらえてインタラクティブ作品の形にしてみました。

#### 作品概要

記事の切り抜き一枚一枚にRFIDタグを貼付けて折り畳み、100枚ほど作ります。RFIDタグのID番号はデータベース化し、そのRFIDタグを貼付けた記事と同じ本文のテキスト情報もあわせてデータベースに格納してあります。 別途、古新聞のように積み上げた新聞の内側をくり抜き、さらに上部には水平にループ状のRFIDアンテナを仕込んであります。RFIDをつけた記事片をその底に積み上げておきます。記事を拾い上げると、その拾い上げられたRFIDタグIDが読み取られ、該当するテキストが目の前でリアルタイムに映写されるという仕組みです。3,4枚の記事は同時に読み取ることができます。

#### 関連リンク

- [沖縄大学マルチメディア教育研究センター紀要 2010年](https://ci.nii.ac.jp/naid/40017386399)

- [自動認識2010年5月号](/blog/rfid)

#### 技術概要

本作品ではRFIDシステムを使用しています。

RFID(Radio Frequency IDentification)
ID情報を記録したトランスポンダ（タグ）に対し、電磁誘導もしくは電波を介して非接触で読み取り書き込みする技術。
ここではトランスポンダに電池を使用しない電磁誘導によるパッシブ方式のRFIDシステムを採用しています[1]。リーダー機のアンテナに流れる送信波から電磁誘導によりトランスポンダ内に電力を発生させてICを駆動します。電力を得たトランスポンダはICに記録されたID情報をリーダー機のアンテナに反射波として送り返します[Fig.1]。EdyやSuicaなどの非接触ICカードと同じ動作原理です。
![Fig.1 RFID](/blog/rfid/adobe-illustrator-cs3screensnapz001.png)

#### Contents

RFIDリーダーで読み取ったID番号はシリアルケーブルを介してPCに送信されます[2]。PC内では、シリアルプロキシを介してシリアル通信をIPソケット通信に変換し、Adobe FlashコンテンツでID番号を受信します。Flashコンテンツでは受信したIDコードに応じた映像処理をリアルタイムで行っています。

#### Materials

- RFID Reader

  RFIDリーダーモジュール（Texas Instruments S6350 Midrange Reader Module 13.56MHz）

  ループアンテナ（自作[3][4][5]）

  エナメル線　径0.4mm 長さ74cm（22cm x 15cm 角形）

  コンデンサー 100pF

  トリマーコンデンサー　45pF 2コ

  抵抗　2.2kΩ

  同軸ケーブル 50Ω 50cm）

- News Pieces(RFTags)

  RFID Transponder（Texas Instruments RI-I03-114A-01 RECT IN-LAY 13.56MHz）100コ

  琉球新報記事 100件

- PC

  PC（Shuttle X27D Intel Atom330）
  
  プロジェクター（PLUS U7-132SF）


![Making](/blog/rfid/r0010626.JPG)
![Making](/blog/rfid/r0010631.JPG)
![Making](/blog/rfid/r0010638.JPG)
![Making](/blog/rfid/r0010640.JPG)
![Making](/blog/rfid/r0010683.JPG)
![Making](/blog/rfid/r0011153.JPG)
![Making](/blog/rfid/r0010742.JPG)

#### References
[1] Texas Instruments Incorporated 2001. HF Reader System Series 6000 S6350 Midrange Reader Module
http://www.ti.com/rfid/docs/manuals/pdfSpecs/RI-STU-TRDC-02.pdf

[2] Texas Instruments Incorporated 2002. HF Reader System Series 6000 S6350 Midrange Reader Module RI-STU-TRDC-02 Reference Guide
http://www.ti.com/rfid/docs/manuals/refmanuals/RI-STU-TRDCrefGuide.pdf

[3] Texas Instruments Incorporated 2003. HF Antenna Design Notes Technical Application Report
http://www.ti.com/rfid/docs/manuals/appNotes/HFAntennaDesignNotes.pdf

[4] Koji Tsukada 2005. RFIDを使ってみよう実践編2
Software Design 2005 Feb. Gijutsu-Hyohron Co., Ltd., 76-85
http://mobiquitous.com/pub/sd200502-3.html

[5] 苅部 浩 2005. 非接触ICカード設計入門
日刊工業新聞社 ISBN4-526-05535-2

#### Special Thanks

Hajime Touma – Oscilloscope

Takamori Yamashiro(blocco deli architects Inc.) – News Pieces, Database

Takanori Koyama(blocco deli architects Inc.) – News Pieces

Tadashi Yoseyama(blocco deli architects Inc.) – News Pieces

Kai Taira(blocco deli architects Inc.) – Illustration
