import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import Image from "next/image";

export default function AIMLInBangDB() {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ML in BangDB</title>
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
        <h1 className="article-title">ML in BangDB</h1>
        <div className="article-body">
          <section className="section">
            <h2 className="section-title">ML in BangDB</h2>
            <p>BangDb Also supports:</p>
            <ul className="section-list">
              <li>Model training, evaluation</li>
              <li>Model versioning & deployment</li>
              <li>Model release and update process</li>
              <li>A/B testing framework</li>
              <li>Model monitoring – for performance, efficacy, degradation</li>
              <li>Logging, alerting</li>
              <li>AutoML</li>
            </ul>
          </section>

          <section className="section">
            <h2 className="section-title">
              Architecture – How does it fit in within BangDB
            </h2>
            <div className="image-grid">
              <Image
                src="/assets/docs/fourth.jpg"
                alt="ML Infrastructure Diagram"
                width={800}
                height={500}
                layout="responsive"
              />
            </div>
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
