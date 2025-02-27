import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import Image from "next/image";
import NextPageButton from "../../../components/NextPageButton/NextPageButton";

export default function AIMLInBangDB() {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ontology Extraction – Basic Components</title>
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
        <h1 className="article-title">
          Ontology Extraction – Basic Components
        </h1>
        <div className="article-body">
          <section className="section">
            <ul className="section-list">
              <li>
                Take all the existing product/support documents for [ex:
                <a href="https://www.cisco.com/c/en/us/support/docs/voice-unified-communications/unified-communications-manager-callmanager/43622-config-7920.html">
                  https://www.cisco.com/c/en/us/support/docs/voice-unified-communications/unified-communications-manager-callmanager/43622-config-7920.html
                </a>
                ].
              </li>
              <li>Train the knowledge base for product and support</li>
              <li>Find and understand relevant parts</li>
              <li>Gather info, relate and organize</li>
              <li>
                Produce a structured representation in semantically precise
                format
              </li>
              <li>Allow other algorithms to make inferences</li>
            </ul>
          </section>

          <section className="section">
            <div className="image-grid">
              <Image
                src="/assets/docs/nine.jpg"
                alt="Deep Learning Diagram"
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
