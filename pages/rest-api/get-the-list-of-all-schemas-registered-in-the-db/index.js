import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedOutput from "../../../components/HighlightedOutput";
import Codebox from "../../../components/Codebox";
import NextPageButton from "../../../components/NextPageButton/NextPageButton";

export default function GetTheListOfAllSchemasRegisteredInTheDB() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Get the list of all schemas registered - BangDB REST API</title>
        <meta
          name="description"
          content="Learn how to get the list of all schemas registered in the database using BangDB 2.0 REST API. Read the documentation to know more about BangDB 2.0 REST API."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Get the list of all schemas registered - BangDB REST API"
        />
        <meta
          property="og:description"
          content="Learn how to get the list of all schemas registered in the database using BangDB 2.0 REST API. Read the documentation to know more about BangDB 2.0 REST API."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Get the list of all schemas registered - BangDB REST API"
        />
        <meta
          name="twitter:description"
          content="Learn how to get the list of all schemas registered in the database using BangDB 2.0 REST API. Read the documentation to know more about BangDB 2.0 REST API."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>
      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">
          Get the list of all schemas registered
        </h1>
        <div className="article-body">
          <p>To get the list of all schemas registered in the db:</p>
          <p>
            <strong>Method</strong> : GET
          </p>
          <p>
            <strong>URI</strong> : /stream/list
          </p>
          <p>Example</p>
          <Codebox
            code={`curl -X GET http://192.168.1.105:18080/stream/list`}
          />
          <p>Response</p>
          <HighlightedOutput
            code={`{
   "errcode":0,
   "num_schemas":1,
   "schemas":[
      {
         "name":"ecomm",
         "state":1,
         "num_streams":1
      }
   ],
   "notif_count_total":0,
   "notif_count_day":0,
   "notif_count_prev_day":0
}`}
          />
          <p>
            As you note, it returns list of schemas and their streams, apart
            from some more important info around notifications.
          </p>
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
