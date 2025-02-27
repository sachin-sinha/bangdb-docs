import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import NextPageButton from "../../../components/NextPageButton/NextPageButton";

export default function crm() {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CRM, Customer Experience</title>
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
        <h1 className="article-title">CRM, Customer Experience</h1>
        <div className="article-body">
          <div>
            <p>
              Customer experience can be immensely enhanced by combining
              different data in a single place, creating relationships, building
              ontologies on top of it for auto correlation and real-time stream
              processing for higher and predictive intelligence.
            </p>
          </div>
          <div>
            <p>
              When it comes to customer experience, the company needs to be
              proactive in addressing the concerns and issue resolution. While
              every company has all the different data related to the customer
              and their interactions, purchases etc. But these are not
              correlated in a fashion where anomalies, issues and problems could
              be predicted or identified in real-time for any resolution.
              Further, a single pane of glass is needed for the customer care
              team to respond to the customer queries in a satisfactory and
              timely manner.
            </p>
            <p>
              Automation and joining across different data is required. Graph
              and/or Ontology need to be created. Real-time messages,
              interactions, and other clickstream data need to be ingested,
              processed and analysed for further actions. This requires a
              platform which streams data into the system for real-time
              processing but at the same time stores the data in a graph store
              for various linking and correlation and finding patterns etc.
              Further, several AI models need to be trained in a continuous and
              automated manner. Therefore, a converged data platform is needed
              where Stream Processing, Graph Store, AI and multi model data
              processing and analysis support is available out of the box
            </p>
          </div>
        </div>
        <NextPageButton />
      </DocArticle>
    </React.Fragment>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { useCasesSidebar: true },
  };
}
