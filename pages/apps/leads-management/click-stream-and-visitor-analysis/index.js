import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "../../../../components/Breadcrumb";

export default function Motivation() {
  return (
    <React.Fragment>
      <Head>
        <title>Overview</title>
        <meta
          name="description"
          content="Motivation - Why BangDB?. The motivation behind BangDB."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Motivation - Why BangDB?" />
        <meta
          property="og:description"
          content="Motivation - Why BangDB?. The motivation behind BangDB."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Motivation - Why BangDB?" />
        <meta
          name="twitter:description"
          content="Motivation - Why BangDB?. The motivation behind BangDB."
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
              <h1 className="article-title">Clickstream & visitor analysis</h1>
              <div className="article-body">
                <p>
                  From the top header, Click on
                  <strong> &quot;Clickstream Analysis&quot; </strong>. After
                  that choose the click stream.
                </p>

                <p>
                  Here you can see all the Clickstream & visitor related data
                  for the clickstream that you selected.
                </p>

                <img
                  alt="Click on crm settings - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/leads-management/clickstream_stats.jpg"
                />

                <h2>Location based Traffic</h2>

                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/click-stream/location-based-traffic.jpg"
                />

                <h2>Real-Time Stats</h2>

                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/click-stream/real-time-stats.jpg"
                />

                <h2>Visit Trends</h2>

                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/click-stream/visit-trends.jpg"
                />

                <h2>Page Stats</h2>

                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/click-stream/page-stats.jpg"
                />

                <h2>Page Event Analysis</h2>

                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/click-stream/page-event-analysis.jpg"
                />

                <h2>Traffic Analysis</h2>

                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/click-stream/traffic-analysis.jpg"
                />

                <h2>Demographic Analysis</h2>

                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/click-stream/demographic-analysis.jpg"
                />

                <h2>Visitor Stats</h2>

                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/click-stream/visitor-stats.jpg"
                />

                <h2>Visitor Segmentations</h2>

                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/click-stream/visitor-segmentations.jpg"
                />

                <h2>Session Analysis</h2>

                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/click-stream/session-analysis.jpg"
                />

                <h2>Cross Website Visits</h2>

                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/click-stream/cross-website-visits.jpg"
                />

                <h2>REAN Indexes</h2>

                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/click-stream/rean-indexes.jpg"
                />

                <h2>Lead / Campaign Analysis</h2>

                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/click-stream/lead-campaign-analysis.jpg"
                />

                <h3>Campaign Data</h3>

                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/click-stream/campaign-data.jpg"
                />

                <h3>Non Campaign Data</h3>

                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/click-stream/non-campaign-data.jpg"
                />

                <h3>Call Analysis Table</h3>

                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/click-stream/call-analysis-table.jpg"
                />

                <h3>Call Button Clicked Data</h3>

                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/click-stream/call-button-clicked-data.jpg"
                />

                <h3>Form-field lead stats</h3>

                <img
                  alt="Click on manage company - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/click-stream/form-field-lead-stats.jpg"
                />
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
