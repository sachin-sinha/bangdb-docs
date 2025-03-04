import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import Codebox from "../../../components/Codebox";
import { AiSidebarData } from "../../../components/Sidebars/AiSidebarData";
import NextPageButton from "../../../components/NextPageButton/NextPageButton";

export default function trainingifrastructure() {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Training Infrastructure</title>
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
        <h1 className="article-title">Training Infrastructure</h1>
        <div className="article-body">
          <h2>Training Infrastructure</h2>
          <p>There are three components of the BangDB ML infra, namely</p>
          <ul>
            <li>Training</li>
            <li>Prediction</li>
            <li>BRS (Resource Server)</li>
          </ul>
          <p>
            The entire infrastructure could be deployed in following 3 different
            combinations
          </p>
          <ul>
            <li>Training, Prediction and BRS all in 3 different servers</li>
            <li>Training and Prediction in 1 server, BRS in another one</li>
            <li>All 3 in single server</li>
          </ul>
          <p>
            While option (c) is good for test/dev purpose, scenario (a) should
            be the mostly used one in production environment
          </p>
          <p>
            We should be able to define the structure of the infra using
            following.
          </p>
          <ul>
            <li>bangdb.config - BANGDB_ML_SERVER_TYPE</li>
            <li>
              train_pred_brs_info, structure which basically takes IP:port for
              each 3 servers
            </li>
          </ul>
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
