import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import Link from "next/link";
import NextPageButton from "../../../components/NextPageButton/NextPageButton";

export default function FDintro() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Introduction to Fraud detection use case</title>
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
            Banks and insurance companies globally are seeing an increasing
            trend in scams as fraudsters are becoming more sophisticated and can
            quickly change and adapt their approaches. Traditional methods of
            fraud detection play an important role in minimizing losses.
            However, they alone are unable to cope up with the increasing
            sophistication in frauds.
          </p>
          <p>
            Even though we know that no method is perfect, Banks need to be
            agile to respond to threats and embrace new approaches and
            technologies to predict and prevent fraud.
          </p>
          <p>
            One of the methods for Improvement fraud detection systems can be
            achieved by looking beyond the individual data points, to the
            connections that link them. Oftentimes these connections go
            unnoticed until it is too late, something that is unfortunate, as
            these connections.
          </p>
          <p>
            Oftentimes hold the best clues. Understanding the connections
            between data, and deriving meaning from these links, doesn&apos;t
            necessarily mean gathering new data. Significant insights can be
            drawn from one&apos;s existing data, simply by reframing the problem
            and looking at it in a new way: as a graph.
          </p>
          <p>
            Graphs uncovering fraud rings and other sophisticated scams with a
            high-level of accuracy, and are capable of stopping advanced fraud
            scenarios in real-time.
          </p>
          <p>
            Here, we will discuss some of the common patterns that appear in
            three of the most common damaging types of fraud.
          </p>
          <ol>
            <li>First-party bank Fraud</li>
            <li>Insurance Fraud</li>
            <li>Ecommerce Fraud</li>
          </ol>
          <h2>
            Real Time Fraud Detection with Stream and Graph with integrated AI
          </h2>
          <p>
            Financial criminals are linked by relationships—whether it’s
            relationships to other criminals, locations, or of course, bank
            accounts. Graph technology takes advantage of this fact to unfold
            new possibilities in the financial services world
          </p>
          <p>
            To make fraud detection simpler, users can create a graph from
            transactions between entities as well as entities that share some
            information, including the email addresses, passwords, addresses,
            and more. Once a graph is created, running a simple query will find
            all customers with accounts who have similar information, and reveal
            which accounts are sending money to each other.
          </p>
          <p>
            Because graphs enable lightning-fast answers to queries and because
            they expand access to data, they have become a popular technology in
            the realm of real-time fraud detection. When investigating
            transactions with graph technology, it’s not only the transactions
            that can be modelled in graphs. Graphs are extremely flexible, which
            means the heterogeneous surrounding information can also be
            modelled. For example, client IP addresses, ATM geolocation, card
            numbers, and account IDs can all become vertices, and the
            connections can all become edges.
          </p>
        </div>
        <NextPageButton />
      </DocArticle>
    </React.Fragment>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { mlSidebar: true },
  };
}
