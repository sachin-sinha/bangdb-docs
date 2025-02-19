import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";

export default function mastedatamanagement() {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="UTF-8" /> {/* Use `charSet` instead of `charset` */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />{" "}
        {/* Use `httpEquiv` instead of `http-equiv` */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> Master Data Management</title>
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
        <h1 className="article-title"> Master Data Management</h1>
        <div className="article-body">
          <p>
            RDF graphs are good for modelling different components and utilizing
            the relationships and connections they have with each other. RDF
            graphs use all of this information to create a metadata layer that
            helps determine whether different names indicate the same item,
            whether the items are related, and even indicate whether different
            items can be used interchangeably because of their similarities.
            This is used in the pharmaceutical world as well, for identifying
            different chemicals, medicines, and generic names.
          </p>
          <p>
            Without an RDF graph, applications usually embed logic to help find
            the correct items. But this logic doesn’t always work across all
            databases, as each one often has different naming conventions. And
            if the DBA who created that application logic leaves the company,
            then the logic often gets lost.
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
