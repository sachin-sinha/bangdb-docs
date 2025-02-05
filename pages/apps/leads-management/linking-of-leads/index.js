import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../../components/Breadcrumb";

export default function LinkingLeads() {
  return (
    <React.Fragment>
      <Head>
        <title>Linking of Leads</title>
        <meta
          name="description"
          content="Step-by-step guide on linking leads in BangDB."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Linking of Leads - BangDB" />
        <meta
          property="og:description"
          content="Step-by-step guide on linking leads in BangDB."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Linking of Leads - BangDB" />
        <meta
          name="twitter:description"
          content="Step-by-step guide on linking leads in BangDB."
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
              <Breadcrumb
                text="Leads Management"
                url="/bangdb-leads-management"
              />
              <h1 className="article-title">Linking of Leads</h1>
              <div className="article-body">
                <p>Follow these steps to link a lead successfully:</p>
                <ol>
                  <li>
                    Click on the <strong>Get Started</strong> tab.
                  </li>
                  <img
                    alt="Get Started tab - BangDB"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/leads-management/get-started.jpg"
                  />
                  <li>
                    Click on <strong>My Lead Pipelines</strong>.
                  </li>
                  <img
                    alt="My Lead Pipelines - BangDB"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/leads-management/my-lead-pipelines.jpg"
                  />
                  <li>Select any project from the list.</li>
                  <img
                    alt="Select Project - BangDB"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/leads-management/select-project.jpg"
                  />
                  <li>Select any lead from the list.</li>
                  <img
                    alt="Select Lead - BangDB"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/leads-management/select-lead.jpg"
                  />
                  <li>
                    Click on the <strong>Link</strong> button from the Lead
                    Detail Page.
                  </li>
                  <img
                    alt="Click Link Button - BangDB"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/leads-management/click-link-button.jpg"
                  />
                  <li>
                    After clicking, a <strong>Link Popup</strong> will appear.
                  </li>
                  <img
                    alt="Link Popup - BangDB"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/leads-management/link-popup.jpg"
                  />
                  <li>Fill in all required details in the Linking Popup.</li>
                  <img
                    alt="Fill Details - BangDB"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/leads-management/fill-details.jpg"
                  />
                  <li>
                    Click on the <strong>Submit</strong> button.
                  </li>
                  <img
                    alt="Submit Button - BangDB"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/leads-management/submit-button.jpg"
                  />
                  <li>
                    Upon submission, you will see a confirmation message:{" "}
                    <em>"Link Added Successfully"</em>.
                  </li>
                  <img
                    alt="Link Added Successfully - BangDB"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/leads-management/link-added-success.jpg"
                  />
                  <li>
                    To view linked lead details, click on the linked lead from
                    the Lead Detail Page.
                  </li>
                  <img
                    alt="View Linked Lead - BangDB"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/leads-management/view-linked-lead.jpg"
                  />
                  <li>A popup will open displaying the linked lead details.</li>
                  <img
                    alt="Linked Lead Details Popup - BangDB"
                    width={"95%"}
                    height={"auto"}
                    src="/assets/apps/leads-management/linked-lead-popup.jpg"
                  />
                </ol>
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
