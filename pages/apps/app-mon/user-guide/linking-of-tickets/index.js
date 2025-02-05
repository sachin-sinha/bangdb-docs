import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../../../components/Breadcrumb";

export default function LinkingTickets() {
  return (
    <React.Fragment>
      <Head>
        <title>Linking of Tickets</title>
        <meta
          name="description"
          content="Step-by-step guide to link tickets in the application."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Linking of Tickets" />
        <meta
          property="og:description"
          content="Learn how to link tickets in the application with this guide."
        />
        <meta
          property="og:image"
          content="/assets/images/linking-tickets.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Linking of Tickets" />
        <meta
          name="twitter:description"
          content="Learn how to link tickets in the application with this guide."
        />
        <meta
          name="twitter:image"
          content="/assets/images/linking-tickets.jpg"
        />
      </Head>

      <section className="main-container">
        <main className="container">
          <div className="article-content">
            <article className="article">
              <Breadcrumb text="Linking of Tickets" url="/linking-tickets" />
              <h1 className="article-title">Linking of Tickets</h1>
              <div className="article-body">
                <ol>
                  <li>
                    <p>
                      Click on the <strong>Tickets</strong> tab.
                    </p>
                    <img
                      alt="Click on Tickets Tab"
                      width="95%"
                      height="auto"
                      src="/assets/apps/app-mon/click_tickets_tab.jpg"
                    />
                  </li>
                  <li>
                    <p>Open any ticket which you want to link.</p>
                    <img
                      alt="Open a Ticket"
                      width="95%"
                      height="auto"
                      src="/assets/apps/app-mon/open_ticket.jpg"
                    />
                  </li>
                  <li>
                    <p>
                      Click on the <strong>Link</strong> button on the ticket
                      details page.
                    </p>
                    <img
                      alt="Click on Link Button"
                      width="95%"
                      height="auto"
                      src="/assets/apps/app-mon/click_link_button.jpg"
                    />
                  </li>
                  <li>
                    <p>
                      After clicking on the link button, it will open the Link
                      popup.
                    </p>
                    <img
                      alt="Link Popup"
                      width="95%"
                      height="auto"
                      src="/assets/apps/app-mon/link_popup.jpg"
                    />
                  </li>
                  <li>
                    <p>
                      Select the <strong>Link Type</strong> from the dropdown,
                      group, and Ticket pipeline. Enter the{" "}
                      <strong>Ticket ID</strong> manually, select it, and add a
                      comment.
                    </p>
                    <img
                      alt="Select Link Type"
                      width="95%"
                      height="auto"
                      src="/assets/apps/app-mon/select_link_type.jpg"
                    />
                  </li>
                  <li>
                    <p>
                      Fill in all the required details for linking the ticket in
                      the Linking Popup.
                    </p>
                    <img
                      alt="Fill Details"
                      width="95%"
                      height="auto"
                      src="/assets/apps/app-mon/fill_details.jpg"
                    />
                  </li>
                  <li>
                    <p>
                      After filling in the details, click on the{" "}
                      <strong>Submit</strong> button.
                    </p>
                    <img
                      alt="Click Submit"
                      width="95%"
                      height="auto"
                      src="/assets/apps/app-mon/click_submit.jpg"
                    />
                  </li>
                  <li>
                    <p>
                      Once submitted, you will receive a confirmation message:{" "}
                      <strong>"Link Added Successfully"</strong>.
                    </p>
                    <img
                      alt="Confirmation Message"
                      width="95%"
                      height="auto"
                      src="/assets/apps/app-mon/confirmation_message.jpg"
                    />
                  </li>
                  <li>
                    <p>
                      After linking, view the linked ticket details by clicking
                      on the linked ticket from the Ticket detail page.
                    </p>
                    <img
                      alt="View Linked Ticket"
                      width="95%"
                      height="auto"
                      src="/assets/apps/app-mon/view_linked_ticket.jpg"
                    />
                  </li>
                  <li>
                    <p>
                      After clicking, a popup will open showing the linked
                      details.
                    </p>
                    <img
                      alt="Linked Ticket Details Popup"
                      width="95%"
                      height="auto"
                      src="/assets/apps/app-mon/linked_ticket_details_popup.jpg"
                    />
                  </li>
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
    props: { app_mon_sidebar: true },
  };
}
