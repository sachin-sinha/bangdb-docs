import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../../components/Breadcrumb";
import NextPageButton from "../../../../components/NextPageButton/NextPageButton";

export default function LinkingLeads() {
  return (
    <React.Fragment>
      <Head>
        <title>Linking of Leads</title>
        <meta
          name="description"
          content="Step-by-step guide to linking leads in the application."
        />
        <meta property="og:site_name" content="Lead Sell App" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Linking of Leads" />
        <meta
          property="og:description"
          content="Learn how to link leads effectively in the application."
        />
        <meta property="og:image" content="/assets/images/linking-leads.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@LeadSellApp" />
        <meta name="twitter:title" content="Linking of Leads" />
        <meta
          name="twitter:description"
          content="Learn how to link leads effectively in the application."
        />
        <meta name="twitter:image" content="/assets/images/linking-leads.jpg" />
      </Head>

      <section className="main-container">
        <main className="container">
          <div className="article-content">
            <article className="article">
              <Breadcrumb text="Linking of Leads" url="/linking-leads" />
              <h1 className="article-title">Linking of Leads</h1>
              <div className="article-body">
                <ol>
                  <li>
                    <p>
                      Click on the <strong>Get Started</strong> tab.
                    </p>
                    <img
                      alt="Get Started Tab"
                      width="95%"
                      height="auto"
                      src="/assets/apps/leads-management/get_started.jpg"
                    />
                  </li>
                  <li>
                    <p>
                      Click on <strong>My Lead Pipelines</strong>.
                    </p>
                    <img
                      alt="My Lead Pipelines"
                      width="95%"
                      height="auto"
                      src="/assets/apps/leads-management/my_lead_pipelines.jpg"
                    />
                  </li>
                  <li>
                    <p>Select any project from the list.</p>
                    <img
                      alt="Select Project"
                      width="95%"
                      height="auto"
                      src="/assets/apps/leads-management/select_project.jpg"
                    />
                  </li>
                  <li>
                    <p>Select any Lead from the list.</p>
                    <img
                      alt="Select Lead"
                      width="95%"
                      height="auto"
                      src="/assets/apps/leads-management/select_lead.jpg"
                    />
                  </li>
                  <li>
                    <p>
                      Click on the <strong>Link</strong> button from the Lead
                      Detail Page.
                    </p>
                    <img
                      alt="Click Link Button"
                      width="95%"
                      height="auto"
                      src="/assets/apps/leads-management/click_link_button.jpg"
                    />
                  </li>
                  <li>
                    <p>After clicking, it will open the Link popup.</p>
                    <img
                      alt="Link Popup"
                      width="95%"
                      height="auto"
                      src="/assets/apps/leads-management/link_popup.jpg"
                    />
                  </li>
                  <li>
                    <p>
                      Fill in all the details required for linking the Lead.
                    </p>
                    <img
                      alt="Fill Link Details"
                      width="95%"
                      height="auto"
                      src="/assets/apps/leads-management/fill_link_details.jpg"
                    />
                  </li>
                  <li>
                    <p>
                      Click on the <strong>Submit</strong> button.
                    </p>
                    <img
                      alt="Click Submit"
                      width="95%"
                      height="auto"
                      src="/assets/apps/leads-management/click_submit.jpg"
                    />
                  </li>
                  <li>
                    <p>
                      Once submitted, you will see a confirmation message like{" "}
                      <strong>“Link Added Successfully”</strong>.
                    </p>
                    <img
                      alt="Link Added Successfully"
                      width="95%"
                      height="auto"
                      src="/assets/apps/leads-management/link_added_successfully.jpg"
                    />
                  </li>
                  <li>
                    <p>
                      After linking, you can view the details of the linked Lead
                      by clicking on the linked Lead from the Lead Detail Page.
                    </p>
                    <img
                      alt="View Linked Lead"
                      width="95%"
                      height="auto"
                      src="/assets/apps/leads-management/view_linked_lead.jpg"
                    />
                  </li>
                  <li>
                    <p>
                      Clicking the button will open a popup showing the linked
                      details.
                    </p>
                    <img
                      alt="Linked Details Popup"
                      width="95%"
                      height="auto"
                      src="/assets/apps/leads-management/linked_details_popup.jpg"
                    />
                  </li>
                </ol>
              </div>
            </article>
            <NextPageButton />
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
