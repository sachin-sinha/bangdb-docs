import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedOutput from "../../../components/HighlightedOutput";
import HighlightedJava from "../../../components/HighlightedJava";
import NextPageButton from "../../../components/NextPageButton/NextPageButton";

export default function OpenAnExistingGraphTable() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Open an existing graph table - BangDB REST API</title>
        <meta
          name="description"
          content="Learn how to open an existing graph table using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Open an existing graph table - BangDB REST API"
        />
        <meta
          property="og:description"
          content="Learn how to open an existing graph table using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Open an existing graph table - BangDB REST API"
        />
        <meta
          name="twitter:description"
          content="Learn how to open an existing graph table using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>
      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Open an existing graph table</h1>
        <div className="article-body">
          <p>To open an existing graph table:</p>
          <p>
            <strong>Method</strong> : GET
          </p>
          <p>
            <strong>URI</strong> : /graph/&lt;graph_table_name&gt;
          </p>
          <p>Example</p>
          <HighlightedJava
            code={`curl -X GET http://192.168.1.105:18080/graph/mygraph`}
          />
          <p>Response</p>
          <HighlightedOutput
            code={`{
   "msg": "success"
}`}
          />
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
