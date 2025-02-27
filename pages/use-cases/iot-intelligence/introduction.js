import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import NextPageButton from "../../../components/NextPageButton/NextPageButton";

export default function RealTimeDataLogAnalysis() {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="UTF-8" /> {/* Use `charSet` instead of `charset` */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />{" "}
        {/* Use `httpEquiv` instead of `http-equiv` */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> IOT ops intelligence, log analysis</title>
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
        <h1 className="article-title"> IOT ops intelligence, log analysis</h1>
        <div className="article-body">
          <p>
            Data/Log analysis, monitoring, root cause – real-time, continuous,
            and predictive.
          </p>
          <ul>
            <li>
              <strong>Categorize data rapidly:</strong> Logs can be seen as
              textual data, which means that NLP techniques can be applied to
              gather the same logs in an organized manner, making it possible to
              search for specific types of logs.
            </li>
            <li>
              <strong>Automatically identify issues:</strong> One of the
              benefits of ML is that it detects issues and problems
              automatically, even if there’s a huge number of logs.
            </li>
            <li>
              <strong>Alert critical information:</strong> Stream processing for
              logs would allow users to enable continuous time-series analysis
              for log data. With ML, it’s possible to be alerted when there’s
              something that deserves attention. Complex patterns could be
              detected and actions can be automated.
            </li>
            <li>
              <strong>Early anomaly detection, auto root cause:</strong> In most
              disastrous events, there’s always an initial anomaly that wasn’t
              detected. Machine learning can detect this anomaly before it
              creates a major problem.
            </li>
            <li>
              <p>
                IOT/Manufacturing is all about relationships and dependencies,
                which makes graph technologies a perfect fit for discovering
                more information in a speedy manner.
              </p>
            </li>
            <li>
              <p>
                Real-time analytics solutions based on the streaming database,
                support complex query and analysis operations in a continuous
                and predictive manner: Network monitoring, Predictive
                maintenance, Vehicle telematics, Better customer experience etc.
              </p>
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
    props: { useCasesSidebar: true },
  };
}
