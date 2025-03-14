import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedOutput from "../../../components/HighlightedOutput";
import HighlightedJava from "../../../components/HighlightedJava";
import NextPageButton from "../../../components/NextPageButton/NextPageButton";

export default function DeleteABucket() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Delete a bucket - BangDB REST API</title>
        <meta
          name="description"
          content="Learn how to delete a bucket and all of it's contents/files/objects using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Delete a bucket - BangDB REST API" />
        <meta
          property="og:description"
          content="Learn how to delete a bucket and all of it's contents/files/objects using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Delete a bucket - BangDB REST API"
        />
        <meta
          name="twitter:description"
          content="Learn how to delete a bucket and all of it's contents/files/objects using BangDB 2.0 REST API. Read the docs to know more about BangDB 2.0 REST API."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>
      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Delete a bucket</h1>
        <div className="article-body">
          <p>
            To delete a bucket and all of it&apos;s contents/files/objects :
          </p>
          <p>
            <strong>Method</strong> : POST
          </p>
          <p>
            <strong>URI</strong> : /brs/bucket/delete
          </p>
          <p>
            <strong>Body</strong> :
          </p>
          <HighlightedJava code={`{"bucket_name":"<bucket_name>"}`} />
          <p>Response</p>
          <HighlightedOutput
            code={`{
   "success": 0
}`}
          />
          <aside className="doc-note">
            <strong>Note: </strong>All Graph APIs URI starts with graph.
          </aside>
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
