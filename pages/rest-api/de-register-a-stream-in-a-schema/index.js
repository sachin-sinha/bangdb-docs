import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedOutput from "../../../components/HighlightedOutput";
import HighlightedJava from "../../../components/HighlightedJava";
import NextPageButton from "../../../components/NextPageButton/NextPageButton";

export default function DeRegisterAStreamInASchema() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>De-register a stream in a schema - BangDB REST API</title>
        <meta
          name="description"
          content="Learn how to de-register a stream in a schema using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="De-register a stream in a schema - BangDB REST API"
        />
        <meta
          property="og:description"
          content="Learn how to de-register a stream in a schema using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="De-register a stream in a schema - BangDB REST API"
        />
        <meta
          name="twitter:description"
          content="Learn how to de-register a stream in a schema using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>
      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">De-register a stream in a schema</h1>
        <div className="article-body">
          <p>
            <strong>Method</strong> : DELETE
          </p>
          <p>
            <strong>URI</strong> :
            /stream/&lt;schema_name&gt;/&lt;stream_name&gt;
          </p>
          <p>All ML API URI starts with /ml .</p>
        </div>
        <NextPageButton />
      </DocArticle>
    </React.Fragment>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { apiSidebar: true },
  };
}
