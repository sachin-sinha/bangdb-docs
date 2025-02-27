import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "../../../../../components/Breadcrumb";
import NextPageButton from "../../../../../components/NextPageButton/NextPageButton";

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
              <h1 className="article-title">Add / Edit a cluster</h1>
              <div className="article-body">
                <h2>Add Cluster</h2>

                <p>
                  In order to add a new cluster, Navigate to the
                  <strong> &quot;Clusters&quot; </strong> page.
                </p>

                <img
                  alt="Click on crm settings - BangDB"
                  width={"90%"}
                  height={"auto"}
                  src="/assets/apps/app-mon/go-to-clusters-page.jpg"
                />

                <p>
                  Click on <strong>&quot;Add Cluster&quot;</strong> button.
                </p>

                <img
                  alt="Click on manage company - BangDB"
                  width={"90%"}
                  height={"auto"}
                  src="/assets/apps/app-mon/click-on-add-cluster.jpg"
                />

                <p>
                  Now enter the Cluster ID and description and click on{" "}
                  <strong>&quot;Add cluster&quot;</strong>
                </p>

                <img
                  alt="Click on manage company - BangDB"
                  width={"90%"}
                  height={"auto"}
                  src="/assets/apps/app-mon/add-cluster-form.jpg"
                />

                <p>The cluster will get added.</p>

                <h2>Edit Cluster</h2>

                <p>
                  In order to edit an existing cluster, Navigate to the
                  <strong> &quot;Clusters&quot; </strong> page.
                </p>

                <img
                  alt="Click on crm settings - BangDB"
                  width={"90%"}
                  height={"auto"}
                  src="/assets/apps/app-mon/go-to-clusters-page.jpg"
                />

                <p>
                  Click on <strong>&quot;Edit Cluster&quot;</strong> icon for
                  the cluster that you want to edit.
                </p>

                <img
                  alt="Click on manage company - BangDB"
                  width={"90%"}
                  height={"auto"}
                  src="/assets/apps/app-mon/click-on-edit-cluster.jpg"
                />

                <aside className="doc-note">
                  <strong>Note: </strong>
                  Cluster ID can not be edited.
                </aside>

                <p>
                  Now edit the cluster as per your requirement and click on{" "}
                  <strong>&quot;Update cluster&quot;</strong>
                </p>

                <img
                  alt="Click on manage company - BangDB"
                  width={"90%"}
                  height={"auto"}
                  src="/assets/apps/app-mon/edit-cluster-form.jpg"
                />

                <p>The cluster will get edited.</p>
              </div>
            </article>
          </div>
        </main>
      </section>

      {/* Fixed-position gif container */}
      <div
        style={{
          position: "fixed",
          top: "80px",
          right: "10px",
          width: "550px",
          maxWidth: "100%",
          zIndex: 1000, // Keeps it above other elements
          background: "#fff",
          padding: "10px",
          boxShadow: "0px 4px 10px rgba(8, 0, 0, 0.58)",
          borderRadius: "8px",
        }}
      >
        <img
          src="/assets/gif/how_to_add_cluster.gif"
          alt="How to add cluster"
          width="100%"
        />
      </div>
      <NextPageButton />
    </React.Fragment>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { app_mon_sidebar: true },
  };
}
