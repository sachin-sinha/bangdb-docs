import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import DownloadPDFButton from "../../../components/DownloadPDFButton";

export default function Recommendationsystem() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Recommendation System</title>
        <meta
          name="description"
          content="Introduction to IOT vehicle monitoring use case - Checkout the detailed demo video or read well-written documentation of this use case."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Introduction to IOT vehicle monitoring use case"
        />
        <meta
          property="og:description"
          content="Introduction to IOT vehicle monitoring use case - Checkout the detailed demo video or read well-written documentation of this use case."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Introduction to IOT vehicle monitoring use case"
        />
        <meta
          name="twitter:description"
          content="Introduction to IOT vehicle monitoring use case - Checkout the detailed demo video or read well-written documentation of this use case."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <DownloadPDFButton /> {/* Add the download button */}
        <div id="article-content">
          <h1 className="article-title-new">Introduction</h1>
          <p>
            Real-time recommendations are becoming more important than ever. But
            this requires the ability to correlate product information, customer
            inventory, past customer behaviour, current supplier information,
            logistics, and even social data such as ads clicked and products
            explored via social media. This is extremely difficult for certain
            kinds of databases. .
          </p>
          <p>
            The technology for collecting all of this data and forming
            connections to gain speedy insight into customer needs and product
            trends—and then to provide real-time . <br></br>recommendations—is
            the graph database. In fact, many large corporations rely upon graph
            analytics to provide their recommendations because the relationships
            are already laid out, and analysis of these relationships to provide
            recommendations is very fast. AI allows Graph to train and deploy
            models automatically without prior manual intervention. Inherent
            topologies, connections forms natural groups, cliques to find
            similarities for more contextual and personalized recommendations
          </p>
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
