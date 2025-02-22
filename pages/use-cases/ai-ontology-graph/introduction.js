import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";

export default function Aiontologyandrelationgraph() {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>AI, Ontology and Relation Graph</title>
        <meta
          name="description"
          content="Real-Time Data/Log Analysis, monitoring, root cause – continuous and predictive analysis."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Real-Time Data/Log Analysis" />
        <meta
          property="og:description"
          content="Real-Time Data/Log Analysis, monitoring, root cause – continuous and predictive analysis."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Real-Time Data/Log Analysis" />
        <meta
          name="twitter:description"
          content="Real-Time Data/Log Analysis, monitoring, root cause – continuous and predictive analysis."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">AI, Ontology and Relation Graph</h1>
        <div className="article-body">
          <h3>Graph Neural networks</h3>
          <div>
            <p>
              AI and machine learning are commonly seen as areas of great
              interest because of their promise in improving business results
              and creating new impact. Graph can be used to augment data science
              in a few key ways.
            </p>
          </div>
          <div>
            <p>
              Most commonly, features for machine learning can be created via
              graph by running graph algorithms on a dataset that has been
              loaded into a graph database, and creating enriched data which can
              then be used for machine learning. This step of feature
              engineering provides the machine learning model with more
              comprehensive, useful information.
            </p>
            <p>
              Many data scientists are starting to become interested in graph
              neural networks, which can capture the graph itself as an input of
              machine learning and neural networks. The graph can potentially
              hold more information than standard tables because of the
              flexibility of the model. Machine learning models with information
              captured from graphs often provide better performance than machine
              learning based on table shape input.
            </p>
          </div>
        </div>
      </DocArticle>
    </React.Fragment>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { useCasesSidebar: true },
  };
}
