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
        <title>Supported ML Algo</title>
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
        <h1 className="article-title">Supported ML Algo</h1>
        <div className="article-body">
          <section className="section">
            <ul className="section-list">
              <li>Classification - Single, multi-label - class & value</li>
              <li>Regression - Linear & Logistic</li>
              <li>Knowledge base training - any given domain</li>
              <li>NER model - Named Entity Recognition model</li>
              <li>Relation models - set of models for all relations</li>
              <li>Ontology</li>
              <li>K-means</li>
              <li>Random Forest</li>
              <li>
                Kernel Ridge Regression - also find the right function, etc.
              </li>
              <li>Naïve Bayes, Gaussian Mixture, Dynamic Bayesian Network</li>
              <li>Gradient Boosting Algorithm</li>
            </ul>
          </section>

          <section className="section">
            <h2 className="section-title">Deep Learning Algo [Built-in]</h2>
            <p>
              BangDB supports following deep learning features out of the box:
            </p>
            <ul className="section-list">
              <li>✔️ Deep and Convolutional Neural Network</li>
              <li>✔️ ResNet – Multi-layer residual</li>
              <li>✔️ Object marker and detector</li>
              <li>✔️ Shape detector</li>
              <li>✔️ LeNet</li>
              <li>✔️ Video / Image indexing and search</li>
              <li>✔️ Grep within image</li>
              <li>✔️ fHOG and feature extraction</li>
              <li>✔️ Deep homography estimations</li>
              <li>✔️ Semantic Segmentation</li>
            </ul>
            <NextPageButton />
          </section>
          {/* Right-Aligned Learn More Section with Small Button */}
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
