import React from "react";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";
import NextPageButton from "../../components/NextPageButton/NextPageButton";
export default function CreateApiKeyAmpere() {
  return (
    <React.Fragment>
      <Head>
        <title>Regenerate or Create API Key</title>
        <meta
          name="description"
          content="Step-by-step guide for regenerating or creating a new API key from Ampere."
        />
        <meta property="og:site_name" content="Ampere Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Regenerate or Create API Key from Ampere"
        />
        <meta
          property="og:description"
          content="Step-by-step guide for regenerating or creating a new API key from Ampere."
        />
        <meta
          property="og:image"
          content="https://ampere.com/assets/logo.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Ampere" />
        <meta
          name="twitter:title"
          content="Regenerate or Create API Key from Ampere"
        />
        <meta
          name="twitter:description"
          content="Step-by-step guide for regenerating or creating a new API key from Ampere."
        />
        <meta
          name="twitter:image"
          content="https://ampere.com/assets/logo.png"
        />
      </Head>

      <section className="main-container">
        <main className="container">
          <div className="article-content">
            <article className="article">
              <Breadcrumb text="API Key Creation" url="/create-api-key" />
              <h1 className="article-title">
                Regenerate or Create API Key from Ampere
              </h1>
              <div className="article-body">
                <h2>Step 1: Click on My Profile</h2>
                <p>
                  If you are logged in, go to your dashboard and click on the
                  <strong> My Profile</strong> button to access your profile.
                </p>
                <img
                  alt="My Profile Button"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/api-key/my-profile.jpg"
                />

                <h2>Step 2: Click on Edit Profile</h2>
                <p>
                  Once you're in your profile, click on the{" "}
                  <strong>Edit Profile</strong> button to proceed.
                </p>
                <img
                  alt="Edit Profile Button"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/api-key/edit-profile.jpg"
                />

                <h2>Step 3: Find the Create API Key Section</h2>
                <p>
                  After clicking on <strong>Edit Profile</strong>, look for the
                  section labeled <strong>Create API Key</strong>. You will find
                  an option there to create a new API key.
                </p>
                <img
                  alt="Create API Key Section"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/api-key/create-api-key-section.jpg"
                />

                <h2>Step 4: Add User ID and Password</h2>
                <p>
                  In the <strong>Create API Key</strong> section, enter your{" "}
                  <strong>User ID</strong> and <strong>Password</strong>, and
                  then click the <strong>Create a New API Key</strong> button.
                  Once you do so, you will receive a confirmation message.
                </p>
                <img
                  alt="Create API Key Form"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/api-key/create-api-key-form.jpg"
                />

                <h2>Step 5: Confirmation</h2>
                <p>
                  After successfully creating the API key, you will see a
                  confirmation message on the screen confirming that the API key
                  has been created successfully.
                </p>
                <img
                  alt="API Key Creation Confirmation"
                  width={"95%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/api-key/api-key-confirmation.jpg"
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
    props: { faqsidebar: true },
  };
}
