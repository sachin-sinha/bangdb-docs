import React from "react";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";
import NextPageButton from "../../components/NextPageButton/NextPageButton";

export default function LeadsInBangDBCRM() {
  return (
    <React.Fragment>
      <Head>
        <title>Lead and Premium Lead in BangDB CRM</title>
        <meta
          name="description"
          content="Learn about Lead and Premium Lead classification in BangDB CRM."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Lead and Premium Lead in BangDB CRM"
        />
        <meta
          property="og:description"
          content="Learn about Lead and Premium Lead classification in BangDB CRM."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Lead and Premium Lead in BangDB CRM"
        />
        <meta
          name="twitter:description"
          content="Learn about Lead and Premium Lead classification in BangDB CRM."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <section className="main-container">
        <main className="container">
          <div className="article-content">
            <article className="article">
              <Breadcrumb text="Introduction" url="/bangdb-introduction" />
              <h1 className="article-title">
                Lead and Premium Lead in BangDB CRM
              </h1>
              <div className="article-body">
                <p>
                  BangDB captures leads automatically when visitors visit and
                  perform some actions. There could be few leads which are a bit
                  more likely to convert than the others. Therefore, it makes
                  sense to differentiate between them.
                </p>
                <p>
                  BangDB designates some of the leads as{" "}
                  <strong>premium leads</strong> based on certain logic which is
                  configurable. The default logic is as follows:
                </p>

                <h2>1. Lead</h2>
                <p>
                  When a visitor submits a form. BangDB captures all form data
                  submitted by users on websites combined with the other
                  clickstream data and stores these in <strong>Lead CRM</strong>
                  .
                </p>

                <h2>2. Premium Lead</h2>
                <p>
                  When a visitor performs sequential actions on the website.
                  Such as the default logic is when a visitor submits a form and
                  within <strong>90 seconds</strong> (configurable) clicks on
                  the call button and makes a call. Clearly, this visitor is
                  more likely a premium than a normal lead, therefore BangDB
                  stores such leads in the <strong>"PremiumLead CRM"</strong>.
                </p>

                <h2>Note:</h2>
                <p>
                  You can customize these logic for different use cases to
                  generate Premium Leads based on specific user actions or time
                  frames.
                </p>
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { leads_management_sidebar: true },
  };
}
