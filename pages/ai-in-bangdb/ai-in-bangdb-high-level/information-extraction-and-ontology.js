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
        <title>IE for BangDB [Information Extraction and Ontology]</title>
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
          IE for BangDB [Information Extraction and Ontology]
        </h1>
        <div className="article-body">
          <section className="section">
            <h3 className="sub-section-title">Information Extraction - Goal</h3>
            <p>
              Given a log file or line, product description URL or any related
              documents, create entity ontology graph using domain knowledge and
              store it for future retrieval and search.
            </p>
            <ul className="section-list">
              <li>
                Input – URL or any other doc in any format (pdf, doc, mail,
                etc.)
              </li>
              <li>Output – json string containing ontology graph</li>
            </ul>
            <p>Also do sentiment analysis for given text.</p>
          </section>

          <section className="section">
            <h2 className="section-title">
              Information Extraction - High Level Items
            </h2>
            <ul className="section-list">
              <li>
                Semantic entity extraction from unstructured or semi-structured
                texts
              </li>
              <li>Linking of entities for annotation & ontology evolution</li>
              <li>
                Train the knowledge base – domain specific [entities, classes
                etc.]
              </li>
              <li>
                For generic text, leverage publicly available knowledge base
                [Freebase, Dbpedia etc.]
              </li>
              <li>
                Dual algorithm model for better ontology results [CRF and SSVM]
              </li>
              <li>
                Training and ontology creation Infrastructure – Should be
                available as service hosted on premise or on cloud
              </li>
              <li>
                Various miscellaneous items – detail discussion in next slides
              </li>
            </ul>
          </section>

          <section className="section">
            <h2 className="section-title">Information Extraction - Design</h2>
            <div className="image-grid">
              <Image
                src="/assets/docs/eight.jpg"
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
