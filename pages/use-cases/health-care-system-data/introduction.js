import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import Link from "next/link";
import NextPageButton from "../../../components/NextPageButton/NextPageButton";

export default function Ibm() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Health care and system data</title>
        <meta
          name="description"
          content="Introduction to Fraud detection use case - Traditional methods of fraud detection play an important role in minimizing losses. However, they alone are unable to cope up with the increasing sophistication in frauds."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Introduction to Fraud detection use case"
        />
        <meta
          property="og:description"
          content="Introduction to Fraud detection use case - Traditional methods of fraud detection play an important role in minimizing losses. However, they alone are unable to cope up with the increasing sophistication in frauds."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Introduction to Fraud detection use case"
        />
        <meta
          name="twitter:description"
          content="Introduction to Fraud detection use case - Traditional methods of fraud detection play an important role in minimizing losses. However, they alone are unable to cope up with the increasing sophistication in frauds."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>
      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Introduction</h1>
        <div className="article-body">
          <p>
            Health care data follows the hl7 standard and it is extremely
            complex in nature. It also is real time data along with requirements
            for BI. The data is connected and the potential of improving
            intelligence is huge. Most of the existing systems find it very hard
            to process the data.
          </p>
          <p>
            BangDB ingests the hl7 data in real time streaming manner, it then
            pushes the data to Graph automatically and builds all necessary
            connections along with ready to use ML for various use cases which
            are otherwise almost impossible to build using traditional databases
            or set of tools. This along with CEP enables to require automated
            actions as defined for different use cases
          </p>
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
