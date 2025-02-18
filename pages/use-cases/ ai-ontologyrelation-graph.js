import React from "react";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";
import DocArticle from "../../components/DocArticle";

export default function Aiontologyandrelationgraph() {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>AI, Ontology and Relation Graph</title>
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
        <h1 className="article-title">AI, Ontology and Relation Graph</h1>
        <div className="article-body">
          <h2>
            How IQLECT enhanced Cisco's Customer Experience (CX) and Sales team
            efficiency by building an Ontology for their CRM.
          </h2>
          <div>
            <p>
              Financial criminals are linked by relationships—whether it’s
              relationships to other criminals, locations, or of course, bank
              accounts. Graph technology takes advantage of this fact to unfold
              new possibilities in the financial services world.
            </p>
          </div>
          <div>
            <p>
              To make fraud detection simpler, users can create a graph from
              transactions between entities as well as entities that share some
              information, including the email addresses, passwords, addresses,
              and more. Once a graph is created, running a simple query will
              find all customers with accounts who have similar information, and
              reveal which accounts are sending money to each other.
            </p>
          </div>
          <div>
            <p>
              Because graphs enable lightning-fast answers to queries and
              because they expand access to data, they have become a popular
              technology in the realm of real-time fraud detection. When
              investigating transactions with graph technology, it’s not only
              the transactions that can be modelled in graphs. Graphs are
              extremely flexible, which means the heterogeneous surrounding
              information can also be modelled. For example, client IP
              addresses, ATM geolocation, card numbers, and account IDs can all
              become vertices, and the connections can all become edges.
            </p>
          </div>
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
