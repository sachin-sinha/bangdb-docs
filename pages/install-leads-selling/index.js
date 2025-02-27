import React from "react";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";
import NextPageButton from "../../components/NextPageButton/NextPageButton";

export default function LeadsAppsInstall() {
  return (
    <React.Fragment>
      <Head>
        <title>
          Lead Management and Lead Selling/Distribution App Installation Guide
        </title>
        <meta
          name="description"
          content="Step-by-step guide for installing the Lead Management and Lead Selling/Distribution apps from BangDB Appstore."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Lead Management and Lead Selling/Distribution App Installation Guide"
        />
        <meta
          property="og:description"
          content="Step-by-step guide for installing the Lead Management and Lead Selling/Distribution apps from BangDB Appstore."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Lead Management and Lead Selling/Distribution App Installation Guide"
        />
        <meta
          name="twitter:description"
          content="Step-by-step guide for installing the Lead Management and Lead Selling/Distribution apps from BangDB Appstore."
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
              <h1 className="article-title">
                Lead Management and Lead Selling/<br></br>Distribution App
                Installation Guide
              </h1>
              <div className="article-body">
                <h2>Step 1: Visit BangDB Appstore</h2>
                <p>
                  Navigate to the BangDB Appstore using this{" "}
                  <a
                    href="https://appstore.bangdb.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    link
                  </a>{" "}
                  or paste the URL in your browser:
                  <strong>https://appstore.bangdb.com/</strong>.
                </p>
                <img
                  alt="BangDB Appstore Home"
                  width="90%"
                  height="auto"
                  className="mt-5 shadow"
                  src="/assets/apps/leads-management/appstore_page.jpg"
                />

                <h2>Step 2: Search for Desired App</h2>
                <p>
                  Use the search functionality to find either the{" "}
                  <strong>Lead Management</strong> or{" "}
                  <strong>Lead Selling/Distribution</strong> application.
                </p>
                <img
                  alt="Search for Leads Apps"
                  width="90%"
                  height="auto"
                  className="mt-5 shadow"
                  src="/assets/apps/lead-selling/lead_sell.jpg"
                />

                <h2>Step 3: Open App Details</h2>
                <p>
                  Click on the app card or <strong>View Details</strong> for
                  your chosen app.
                </p>
                <img
                  alt="View App Details"
                  width="90%"
                  height="auto"
                  className="mt-5 shadow"
                  src="/assets/apps/lead-selling/view_details.jpg"
                />

                <h2>Step 4: Choose Free Trial or Purchase</h2>
                <p>
                  BangDB offers a <strong>7-day free trial</strong> or direct
                  purchase option for both apps. Enable the trial checkbox and
                  click <strong>Install</strong> or proceed<br></br> to
                  purchase.
                </p>
                <img
                  alt="Free Trial or Purchase"
                  width="90%"
                  height="auto"
                  className="mt-5 shadow"
                  src="/assets/apps/lead-selling/free_trial.jpg"
                />

                <h2>Step 5: Complete Installation</h2>
                <p>
                  Follow the steps to install the app, including account signup,
                  payment method selection, and confirmation. These steps are
                  similar<br></br> for both apps.
                </p>
                <img
                  alt="Install Leads Apps"
                  width="90%"
                  height="auto"
                  className="mt-5 shadow"
                  src="/assets/apps/lead-selling/install_btn.jpg"
                />

                <h2>Step 6: Signup Popup</h2>
                <p>
                  After clicking Install, a signup popup will appear. Fill in
                  the required details to create your account.
                </p>
                <img
                  alt="Signup Popup"
                  width={"90%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/apps/lead-selling/signu_up_popup.jpg"
                />

                <h2>Step 7: Submit Signup Details</h2>
                <p>
                  Click the <strong>Sign Up</strong> button after providing the
                  necessary details.
                </p>
                <img
                  alt="Submit Signup Details"
                  width={"90%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/apps/lead-selling/signup_button_click.jpg"
                />

                <h2>Step 8: Select Payment Method</h2>
                <p>
                  Choose a payment method: <strong>manual</strong> or{" "}
                  <strong>subscription</strong>.
                </p>
                <img
                  alt="Select Payment Method"
                  width={"90%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/apps/lead-selling/payment_sub_manual.jpg"
                />

                <h2>Step 9: Payment Details</h2>
                <p>
                  Select the quantity and toggle between USD and INR to see the
                  respective prices.
                </p>
                <img
                  alt="Payment Details"
                  width={"90%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/apps/lead-selling/qnty_update.jpg"
                />

                <h2>Step 10: Confirm Purchase</h2>
                <p>
                  Click on <strong>Get Started</strong> to proceed.
                </p>
                <img
                  alt="Confirm Purchase"
                  width={"90%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/apps/lead-selling/get_started.jpg"
                />

                <h2>Step 11: Razorpay Payment</h2>
                <p>
                  The Razorpay popup will open. Complete your payment by
                  entering the required details.
                </p>
                <img
                  alt="Razorpay Payment"
                  width={"90%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/apps/lead-selling/razorpay_popup.jpg"
                />

                <h2>Step 12: Payment Success</h2>
                <p>
                  After the payment is successful, a message will confirm your
                  transaction.
                </p>
                <img
                  alt="Payment Success"
                  width={"90%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/apps/lead-selling/paymemt_conformed_popup.jpg"
                />

                <h2>Step 13: Installation Progress</h2>
                <p>
                  The installation process begins, showing a progress bar with
                  estimated time and steps.
                </p>
                <img
                  alt="Installation Progress"
                  width={"90%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/apps/lead-selling/app_installation progress.jpg"
                />

                <h2>Step 14: Installation Success</h2>
                <p>
                  A success message will appear along with the Ampere link for
                  accessing your purchased app.
                </p>
                <img
                  alt="Installation Success"
                  width={"90%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/apps/lead-selling/steps_completion_ampere_link.jpg"
                />

                <h2>Step 15: Credentials and Invoice</h2>
                <p>
                  Your login credentials (User ID and Password) and invoice will
                  be sent to the email you provided during signup.
                </p>
                <img
                  alt="Credentials and Invoice Email"
                  width={"90%"}
                  height={"auto"}
                  className="mt-5 shadow"
                  src="/assets/apps/lead-selling/sample_email.jpg"
                />
              </div>
            </article>
          </div>
        </main>
      </section>

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
          src="/assets/gif/leadsmanagementhowtoinstall1.gif"
          alt="How to add cluster"
          width="100%"
        />
      </div>
    </React.Fragment>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { leads_management_sidebar: true },
  };
}
