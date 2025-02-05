import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../../../components/Breadcrumb";

export default function LinkPosts() {
  return (
    <React.Fragment>
      <Head>
        <title>Link Posts - BangDB</title>
        <meta
          name="description"
          content="Step-by-step guide to link posts in BangDB."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Link Posts - BangDB" />
        <meta
          property="og:description"
          content="Learn how to link posts in BangDB with this guide."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Link Posts - BangDB" />
        <meta
          name="twitter:description"
          content="Learn how to link posts in BangDB with this guide."
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
              <Breadcrumb text="Link Posts" url="/bangdb-link-posts" />
              <h1 className="article-title">Link Posts</h1>
              <div className="article-body">
                <ol>
                  <li>
                    <p>
                      Click on <strong>Manage Post</strong>.
                    </p>
                    <img
                      alt="Manage Post"
                      width="95%"
                      height="auto"
                      src="/assets/apps/forum/manage-post.jpg"
                    />
                  </li>
                  <li>
                    <p>
                      Click on any channel from <strong>My Channel List</strong>
                      .
                    </p>
                    <img
                      alt="Select Channel"
                      width="95%"
                      height="auto"
                      src="/assets/apps/forum/select-channel.jpg"
                    />
                  </li>
                  <li>
                    <p>Open any post from the list.</p>
                    <img
                      alt="Open Post"
                      width="95%"
                      height="auto"
                      src="/assets/apps/forum/open-post.jpg"
                    />
                  </li>
                  <li>
                    <p>
                      Click on the <strong>Link</strong> button from the post
                      detail page.
                    </p>
                    <img
                      alt="Click Link Button"
                      width="95%"
                      height="auto"
                      src="/assets/apps/forum/click-link-button.jpg"
                    />
                  </li>
                  <li>
                    <p>
                      After clicking, it will open the <strong>Link</strong>{" "}
                      popup.
                    </p>
                    <img
                      alt="Link Popup"
                      width="95%"
                      height="auto"
                      src="/assets/apps/forum/link-popup.jpg"
                    />
                  </li>
                  <li>
                    <p>
                      Select the <strong>Link Type</strong> from the dropdown,
                      group, pipeline ID, and manually add the post ID. You can
                      also add a comment.
                    </p>
                    <img
                      alt="Fill Link Details"
                      width="95%"
                      height="auto"
                      src="/assets/apps/forum/fill-link-details.jpg"
                    />
                  </li>
                  <li>
                    <p>
                      Fill in all the required details for linking the post in
                      the popup.
                    </p>
                    <img
                      alt="Fill Link Details"
                      width="95%"
                      height="auto"
                      src="/assets/apps/forum/fill-link-details1.jpg"
                    />
                  </li>
                  <li>
                    <p>
                      Click on the <strong>Submit</strong> button.
                    </p>
                    <img
                      alt="Submit Link"
                      width="95%"
                      height="auto"
                      src="/assets/apps/forum/submit-link.jpg"
                    />
                  </li>
                  <li>
                    <p>
                      After submitting, you will receive a confirmation message:
                      <strong> "Link Added Successfully" </strong>.
                    </p>
                    <img
                      alt="Link Added Confirmation"
                      width="95%"
                      height="auto"
                      src="/assets/apps/forum/link-added-success.jpg"
                    />
                  </li>
                  <li>
                    <p>
                      Click on the linked post from the post detail page to view
                      details.
                    </p>
                    <img
                      alt="View Linked Post"
                      width="95%"
                      height="auto"
                      src="/assets/apps/forum/view-linked-post.jpg"
                    />
                  </li>
                  <li>
                    <p>
                      Clicking the linked post will open a popup displaying the
                      linked details.
                    </p>
                    <img
                      alt="Linked Post Details"
                      width="95%"
                      height="auto"
                      src="/assets/apps/forum/linked-post-details.jpg"
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
    props: { forum_sidebar: true },
  };
}
