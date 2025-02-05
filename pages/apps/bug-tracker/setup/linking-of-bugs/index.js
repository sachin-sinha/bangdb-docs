import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../../../components/Breadcrumb";

export default function LinkingBugs() {
  return (
    <React.Fragment>
      <Head>
        <title>Linking Of Bugs</title>
        <meta name="description" content="Steps to link bugs in the project." />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Linking Of Bugs" />
        <meta
          property="og:description"
          content="Step-by-step guide to linking bugs in BangDB."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Linking Of Bugs" />
        <meta
          name="twitter:description"
          content="Step-by-step guide to linking bugs in BangDB."
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
              <h1 className="article-title">Linking Of Bugs</h1>
              <div className="article-body">
                <p>Follow the steps below to link bugs in the system.</p>

                <h2>Step 1: Click On Home Tab</h2>
                <p>Navigate to the home page.</p>
                <img
                  alt="Click on Home Tab - BangDB"
                  width="95%"
                  height="auto"
                  src="/assets/apps/bug-tracker/click-on-home.jpg"
                />

                <h2>Step 2: Select a Project</h2>
                <p>Select the project where you need to link the bugs.</p>
                <img
                  alt="Select a Project - BangDB"
                  width="95%"
                  height="auto"
                  src="/assets/apps/bug-tracker/select-project.jpg"
                />

                <h2>Step 3: Select Bugs to Link</h2>
                <p>Choose the bugs that need to be linked.</p>
                <img
                  alt="Select Bugs - BangDB"
                  width="95%"
                  height="auto"
                  src="/assets/apps/bug-tracker/select-bugs.jpg"
                />

                <h2>Step 4: Click on the Link Button</h2>
                <p>Open the Bug Detail Page and click on the Link button.</p>
                <img
                  alt="Click on Link Button - BangDB"
                  width="95%"
                  height="auto"
                  src="/assets/apps/bug-tracker/click-link-button.jpg"
                />

                <h2>Step 5: Link Popup Opens</h2>
                <p>The Link popup will appear.</p>
                <img
                  alt="Link Popup - BangDB"
                  width="95%"
                  height="auto"
                  src="/assets/apps/bug-tracker/link-popup.jpg"
                />

                <h2>Step 6: Select Link Type and Details</h2>
                <p>
                  Select the Link Type from the dropdown, choose the group and
                  project, manually enter the Bug ID, and add a comment.
                </p>
                <img
                  alt="Select Link Type - BangDB"
                  width="95%"
                  height="auto"
                  src="/assets/apps/bug-tracker/select-link-type.jpg"
                />

                <h2>Step 7: Click Submit</h2>
                <p>
                  After filling in all the details, click on the Submit button.
                </p>
                <img
                  alt="Submit Link - BangDB"
                  width="95%"
                  height="auto"
                  src="/assets/apps/bug-tracker/submit-link.jpg"
                />

                <h2>Step 8: Confirmation Message</h2>
                <p>
                  Once submitted, a confirmation message like "Link Added
                  Successfully" will appear.
                </p>
                <img
                  alt="Confirmation Message - BangDB"
                  width="95%"
                  height="auto"
                  src="/assets/apps/bug-tracker/link-success.jpg"
                />
                <h2>Step 9: View Linked Bug Details</h2>
                <p>
                  After linking, you can view the details of the linked bug by
                  clicking on the linked bug from the Bug Detail Page.
                </p>
                <img
                  alt="View Linked Bug - BangDB"
                  width="95%"
                  height="auto"
                  src="/assets/apps/bug-tracker/click-linked-bug.jpg"
                />
                <h2>Step 10: Linked Details Popup</h2>
                <p>
                  After clicking on the linked bug, a popup will open displaying
                  the linked bug details.
                </p>
                <img
                  alt="Linked Bug Details Popup - BangDB"
                  width="95%"
                  height="auto"
                  src="/assets/apps/bug-tracker/linked-bug-popup.jpg"
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
    props: { bugt_sidebar: true },
  };
}
