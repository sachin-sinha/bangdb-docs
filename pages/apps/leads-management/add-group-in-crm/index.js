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
              <h1 className="article-title">Add group in CRM</h1>
              <div className="article-body">
                <aside className="doc-note">
                  <strong>Note: </strong>
                  You need to be CRM admin in order to access the CRM level
                  settings.
                </aside>

                <p>
                  In order to add group in the CRM, Go to the
                  <strong> &quot;CRM Settings&quot; </strong>
                </p>

                <img
                  alt="Click on crm settings - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/leads-management/click_on_crm_settings.jpg"
                />

                <p>Click on &quot;Setup CRM&quot;</p>

                <img
                  alt="Click on setup crm - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/leads-management/click_on_setup_crm.jpg"
                />

                <p>
                  Here, add the group name along with group description and
                  click on <strong>Add</strong>.
                </p>

                <img
                  alt="Click on setup crm - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/leads-management/add_group.jpg"
                />

                <p>
                  Once you&apos;re done with your changes. Click on{" "}
                  <strong>Save</strong>
                </p>

                <img
                  alt="Click on setup crm - BangDB"
                  width={"95%"}
                  height={"auto"}
                  src="/assets/apps/leads-management/save_group.png"
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
