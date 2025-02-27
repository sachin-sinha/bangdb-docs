import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../../../components/Breadcrumb";

export default function Overview() {
  return (
    <React.Fragment>
      <Head>
        <title>Setup Overview</title>
        <meta name="description" content="Setup web forms"></meta>
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
              <h1 className="article-title">Filter bugs</h1>
              <div className="article-body">
                <p>
                  Go to the
                  <strong> &quot;Home&quot; </strong> page and choose a project.
                </p>

                <img
                  alt="Click on settings - BangDB Forum"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/bug-tracker/click-on-project.jpg"
                />

                <p>Click on the filter icon.</p>

                <img
                  alt="Post types setup - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/bug-tracker/click-on-filter-bugs.jpg"
                />

                <p>
                  Add the filters, and click on{" "}
                  <strong>&quot;Find All&quot;</strong>. ( For this example - we
                  are adding the filter which will only list the bugs assigned
                  to &quot;nidhish@iqlect.com&quot; ).
                </p>

                <img
                  alt="Post types setup - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/bug-tracker/click-on-find-all.jpg"
                />

                <p>The bugs will get filtered.</p>
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
    props: { bugt_sidebar: true },
  };
}
