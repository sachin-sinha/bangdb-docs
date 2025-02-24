import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import Image from "next/image";
import Codebox from "../../../components/Codebox";

export default function AIMLInBangDB() {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>ML Infra – Training Server in BangDB</title>
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
        <h1 className="article-title">ML Infra – Training Server in BangDB</h1>
        <div className="article-body">
          <section className="section"></section>
          <section className="section">
            <ul className="section-list">
              <li>Training server actually runs in BangDB server framework</li>
              <li>Train stage will do training locally</li>
              <li>The servers could be behind LB (Logical)</li>
              <li>Train stage gets training data from BRS</li>
              <li>
                Training server keeps the training related metadata at BRS as
                well (BangDB)
                <ul>
                  <li>Param & Model info, Size of model</li>
                  <li>Algo used, Time took to create model</li>
                  <li>Last updated timestamp, versions</li>
                  <li>Model location, Model</li>
                  <li>Training & other files etc.</li>
                </ul>
              </li>
              <li>
                Train stage may also be part of server where store stage is RS +
                Data source
              </li>
              <li>Native integration ensures data comes from DB</li>
            </ul>
          </section>

          <section className="section">
            <div className="image-grid">
              <Image
                src="/assets/docs/fifth.jpg"
                alt="Deep Learning Diagram"
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
