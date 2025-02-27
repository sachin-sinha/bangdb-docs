import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedOutput from "../../../components/HighlightedOutput";
import Codebox from "../../../components/Codebox";
import NextPageButton from "../../../components/NextPageButton/NextPageButton";

export default function DeleteATable() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Delete a table - BangDB REST API</title>
        <meta
          name="description"
          content="Learn how to delete a table using BangDB 2.0 REST API. Read the documentation to know more about BangDB 2.0 REST API."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Delete a table - BangDB REST API" />
        <meta
          property="og:description"
          content="Learn how to delete a table using BangDB 2.0 REST API. Read the documentation to know more about BangDB 2.0 REST API."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Delete a table - BangDB REST API" />
        <meta
          name="twitter:description"
          content="Learn how to delete a table using BangDB 2.0 REST API. Read the documentation to know more about BangDB 2.0 REST API."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>
      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Delete a table</h1>
        <div className="article-body">
          <p>
            <strong>Method</strong> : DELETE
          </p>
          <p>
            <strong>URI</strong> : /db/&lt;dbname&gt;/&lt;table_name&gt;
          </p>
          <p>Example</p>
          <Codebox
            code={`curl -X DELETE http://192.168.1.105:18080/db/mydb/my_table_test`}
          />
          <p>Response</p>
          <HighlightedOutput
            code={`{
   "msg": "successfully dropped the table"
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
