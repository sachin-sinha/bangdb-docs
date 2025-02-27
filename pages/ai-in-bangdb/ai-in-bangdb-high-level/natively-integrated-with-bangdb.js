import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import Image from "next/image";
import Codebox from "../../../components/Codebox";
import NextPageButton from "../../../components/NextPageButton/NextPageButton";

export default function AIMLInBangDB() {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>AI and Machine Learning in BangDB</title>
        <meta
          name="description"
          content="AI and Machine Learning infrastructure in BangDB, including model training, prediction, and information extraction."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="AI and Machine Learning in BangDB" />
        <meta
          property="og:description"
          content="AI and Machine Learning infrastructure in BangDB, including model training, prediction, and information extraction."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="AI and Machine Learning in BangDB"
        />
        <meta
          name="twitter:description"
          content="AI and Machine Learning infrastructure in BangDB, including model training, prediction, and information extraction."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>
      <DocArticle>
        <Breadcrumb text="AI in BangDB" url="/ai" />
        <h1 className="article-title">AI for BangDB</h1>
        <div className="article-body">
          <section className="section">
            <h2 className="section-title">
              ML Infra: Natively Integrated with BangDB
            </h2>
            <ul className="section-list">
              <li>Embdd - need to take it to devices</li>
              <li>CS – For master, slave model</li>
              <li>P2P – Fully distributed, CH & CHORD</li>
            </ul>
            <div className="image-grid">
              <Image
                src="/assets/docs/firstpic.jpg"
                alt="ML Infrastructure Diagram"
                width={800}
                height={500}
                layout="responsive"
              />
            </div>
            <ul className="section-list">
              <li>Opaque and document is supported</li>
              <li>Absolute analytic is supported</li>
              <li>Need to add probabilistic – hence ML Infra</li>
              <li>Streaming – Handle data in streaming way</li>
            </ul>
          </section>

          <section className="section">
            <div className="image-grid">
              <Image
                src="/assets/docs/secound.jpg"
                alt="ML Infrastructure Diagram"
                width={800}
                height={500}
                layout="responsive"
              />
            </div>
            <NextPageButton />
          </section>
        </div>
      </DocArticle>
    </React.Fragment>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { aisidebar: true },
  };
}
