import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import NextPageButton from "../../../components/NextPageButton/NextPageButton";

export default function AIMLInBangDB() {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Memory and Large Data</title>
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
        <h1 className="article-title">Memory and Large Data</h1>
        <div className="article-body">
          <section className="section">
            <ul className="section-list">
              <h3 className="sub-section-title">LRU</h3>
              <ul>
                <li>
                  Abstraction for LRU for any item (template based), models or
                  files
                </li>
                <li>
                  Training and prediction works within allocated memory budget
                </li>
                <li>
                  If budget is breached, then expires least used item and loads
                  another one
                </li>
              </ul>
              <h3 className="sub-section-title">Large Data Operations</h3>
              <ul>
                <li>
                  Large data operation support for models, training or test
                  files
                </li>
                <li>Gets and puts large data in the db in chunks</li>
                <li>Provides simple consistent API to do so</li>
                <li>Supports scan on the keys as well</li>
              </ul>
            </ul>
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
