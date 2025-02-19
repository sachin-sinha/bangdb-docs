import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";

export default function LeadManagementCaseStudy() {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Enhancing Lead Management with BangDB Lead Sell App</title>
        <meta
          name="description"
          content="Discover how BangDB Lead Sell App transformed lead management with automation, insights, and CRM integration."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Enhancing Lead Management with BangDB Lead Sell App"
        />
        <meta
          property="og:description"
          content="Discover how BangDB Lead Sell App transformed lead management with automation, insights, and CRM integration."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Enhancing Lead Management with BangDB Lead Sell App"
        />
        <meta
          name="twitter:description"
          content="Discover how BangDB Lead Sell App transformed lead management with automation, insights, and CRM integration."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Case Studies" url="/case-studies" />
        <h1 className="article-title">
          Enhancing Lead Management with BangDB Lead Sell App
        </h1>
        <div className="article-body">
          <h2>Client Overview</h2>
          <p>
            Our client, a business owner, faced significant challenges in
            managing and collecting leads from their website. The primary issues
            included:
          </p>
          <ul>
            <li>Inefficient lead collection methods.</li>
            <li>Lack of proper organization and insights into leads.</li>
            <li>
              Difficulty in categorizing and transferring premium leads to a
              CRM.
            </li>
            <li>Inability to resell or distribute leads efficiently.</li>
          </ul>

          <h2>Challenges Faced</h2>
          <ul>
            <li>
              Lead Collection Inefficiency: The client struggled to gather and
              organize leads from various sources, including website forms and
              user interactions.
            </li>
            <li>
              Data Organization & Insights: There was no proper system to track
              user sessions, IP data, and form analytics.
            </li>
            <li>
              Premium Lead Categorization: Users filling out forms and clicking
              the call button were not being categorized effectively as premium
              leads.
            </li>
            <li>
              Lead Reselling & Distribution: The client wanted an easy way to
              resell leads via email, WhatsApp, or through a dedicated platform.
            </li>
          </ul>

          <h2>Solution: BangDB Lead Sell App</h2>
          <h3>1. Website Integration & Lead Collection</h3>
          <ul>
            <li>
              The client integrated their website with the BangDB Lead Sell App.
            </li>
            <li>
              By using Tag Manager, the app automatically collected form
              submissions and user data.
            </li>
            <li>Real-time lead capture ensured no lead was lost.</li>
          </ul>

          <h3>2. Advanced Lead Insights & Data Tracking</h3>
          <ul>
            <li>
              Full insights into user sessions, IP addresses, contact details,
              and email information.
            </li>
            <li>
              Form Field Analysis: Identifying which fields users interacted
              with the most.
            </li>
            <li>
              Session & Page Event Analysis: Understanding visitor behavior
              across different pages.
            </li>
            <li>
              Campaign & Non-Campaign Data: Tracking the source of leads and
              user engagement.
            </li>
            <li>
              Call Button Click Data: Capturing user intent based on call button
              interactions.
            </li>
          </ul>

          <h3>3. Premium Lead Categorization & CRM Integration</h3>
          <ul>
            <li>
              Implemented a time-based logic to classify leads as premium.
            </li>
            <li>
              If a user clicked the call button within a specified time after
              form submission, they were marked as premium leads.
            </li>
            <li>
              These leads were automatically pushed to the client’s CRM for
              quick follow-up.
            </li>
          </ul>

          <h3>4. Lead Management & Reselling</h3>
          <ul>
            <li>
              Leads were stored within the BangDB CRM for easy management.
            </li>
            <li>
              The client could resell leads by creating a platform within the
              Lead Sell App.
            </li>
            <li>
              Lead distribution via email and WhatsApp enabled faster
              transactions and monetization.
            </li>
          </ul>

          <h2>Results & Impact</h2>
          <ul>
            <li>100% automated lead collection reduced manual effort.</li>
            <li>Improved lead insights led to better conversion strategies.</li>
            <li>Premium lead tracking increased high-value conversions.</li>
            <li>
              Efficient lead reselling provided new revenue streams for the
              client.
            </li>
            <li>
              Data-driven decision-making through in-depth analytics and
              reports.
            </li>
          </ul>

          <h2>Conclusion</h2>
          <p>
            By implementing the BangDB Lead Sell App, our client transformed
            their lead management process, resulting in streamlined operations,
            increased efficiency, and new business opportunities. The
            combination of automation, real-time tracking, and seamless CRM
            integration empowered the client to make data-driven decisions and
            maximize their lead potential.
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
