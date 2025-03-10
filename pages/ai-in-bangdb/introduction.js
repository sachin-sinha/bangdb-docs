import React from "react";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";
import DocArticle from "../../components/DocArticle";
import Codebox from "../../components/Codebox";
import { AiSidebarData } from "../../components/Sidebars/AiSidebarData";
import NextPageButton from "../../components/NextPageButton/NextPageButton";

export default function Aiontologyandrelationgraph() {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Overview</title>
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
        <h1 className="article-title">Overview</h1>
        <div className="article-body">
          <div>
            <p>
              The document is about the AI for BangDB. There are two aspects to
              it, one is the Machine Learning part which deals with the training
              of models within BangDB and other one is for the vector indexing
              and RAG workflows and auto bots’ creation. Let’s investigate the
              ML part first
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
    props: { aisidebar: true },
  };
}
