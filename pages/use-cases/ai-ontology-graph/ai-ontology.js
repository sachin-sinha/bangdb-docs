import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import DownloadPDFButton from "../../../components/DownloadPDFButton";

export default function Aiontology() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/case-study/Cisco-Case-study-by-IQLect.pdf";
    link.download = "Cisco-Case-study-by-IQLect.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <React.Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>AI, Ontology and Relation Graph</title>
        <meta
          name="description"
          content="Real-Time Data/Log Analysis, monitoring, root cause – continuous and predictive analysis."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Real-Time Data/Log Analysis" />
        <meta
          property="og:description"
          content="Real-Time Data/Log Analysis, monitoring, root cause – continuous and predictive analysis."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Real-Time Data/Log Analysis" />
        <meta
          name="twitter:description"
          content="Real-Time Data/Log Analysis, monitoring, root cause – continuous and predictive analysis."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <DownloadPDFButton onClick={handleDownload} />
        <div id="article-content">
          <h1 className="article-title-new">AI, Ontology and Relation Graph</h1>
          <div className="article-body">
            <h2>
              How IQLECT enhanced Cisco's Customer Experience (CX) and Sales
              team efficiency by building an Ontology for their CRM.
            </h2>
            <h3>BUSINESS CHALLENGE</h3>
            <div>
              <p>
                The CRM team at Cisco had a tough time handling the number of
                issues raised by their customers regarding configuration and
                compatibility. They believed that the majority of such issues
                could be resolved by suggesting the right parameters to their
                customers as soon as they start typing the issue-related
                details.
              </p>
              <h2>Stream Layer</h2>
              <img
                src="/assets/docs/cico.png"
                alt="Analysis"
                style={{ width: "100%", height: "auto" }}
                loading="lazy" // Add lazy loading for better performance
              />
              <h2>Batch Layer</h2>
              <img
                src="/assets/docs/cico1.png"
                alt="Analysis"
                style={{ width: "100%", height: "auto" }}
                loading="lazy" // Add lazy loading for better performance
              />
            </div>
            <h2>About</h2>
            <img
              src="/assets/docs/about1.png"
              alt="Analysis"
              style={{ width: "100%", height: "auto" }}
              loading="lazy" // Add lazy loading for better performance
            />
            <div>
              <h2>SOLUTION</h2>
              <p>
                To address the second challenge,Cisco chose to use IQLECT‘s
                ontology creation app which provided a readable interpretation
                for router-based issues using ontology graphs based on domain
                knowledge. As ontology graphs are interconnected and
                interoperable, they play an integral role in addressing the
                challenges of accessing and querying data in large organizations
                like Cisco.
              </p>
              <img
                src="/assets/docs/archit.png"
                alt="Analysis"
                style={{ width: "100%", height: "auto" }}
                loading="lazy" // Add lazy loading for better performance
              />
              <p></p>
              <br></br>
              <img
                src="/assets/docs/review.png"
                alt="Analysis"
                style={{ width: "100%", height: "auto" }}
                loading="lazy" // Add lazy loading for better performance
              />
            </div>
            <h2>A few reasons why Cisco chose IQLECT:</h2>
            <ul>
              <li>
                The platform enabled entity extraction from unstructured or
                semi-structured texts.
              </li>
              <li>
                IQLECT kept BangDB into action which is a multi-flavored,
                distributed, transactional, high performance NoSQL database
                suitable for heavy lifting.
              </li>
              <li>
                Presence of ML/IE layer to perform sentiment analysis which
                helps in suggesting a relevant solution to a user who is facing
                compatibility or configuration related issues by monitoring
                customer information.
              </li>
              <li>
                Use of dual machine learning models such as CRF and SSVM for
                collecting relevant information from the product and support
                documents and produce a structured representation in a
                semantically precise format.
              </li>
            </ul>
            <h2>Measures taken by IQLECT to solve Cisco's ontology problem:</h2>
            <ul>
              <li>
                We created a repository of all the existing product/support
                documents of Cisco.
              </li>
              <li>
                We have kept the machines learning at work and train the
                knowledge base for product and support.
              </li>
              <li>We let the ML find and understand relevant parts.</li>
              <li>
                This enabled gathering of information, finding relationships
                between the entities and organising it in a structured manner.
              </li>
              <li>
                Produce a structured representation in semantically precise
                format - which is easily understandable and accessible.
              </li>
              <li>Allow other algorithms to make inferences.</li>
            </ul>
            <h2>CLIENT SPEAKS</h2>
            <p>
              “We were first introduced to IQLECT as part of the 2016 Cisco
              LaunchPad event where we collaborated on an additional use-case.
              We have been associated with them since early 2017.We realized
              their potential fairly early after which we on-boarded them under
              formal contract as vendor somewhere around Q2-2017.
            </p>
            <p>
              IQLECT has worked on initial ontology project for Cisco product
              and support pages to help automate processes in the CRM team.
              Together we deployed the platform along with solution within Cisco
              in Q3 2017 and we are exploring deeper integration with the
              platform for more use cases. This has also been presented to Cisco
              leadership who are very impressed with their overall work.Our
              experience working with IQLECT has been very good, we value their
              product and offerings and based on our experience we’ve also
              offered their services to other service entities within Cisco who
              are looking towards solving similar business challenges.
            </p>
            <p>
              Their approach towards solving data related problem is unique and
              that combined with their home-grown converged platform only allows
              users to enable complex use cases effectively and in short period
              of time. An integrated ML/IE layer gives our solution a
              much-needed edge.
            </p>
            <p>
              The entire IQlect team has been very supportive so far and our
              experience working with them is very positive. We foresee lots of
              potential going forward and look forward to a much deeper
              engagement with them.
            </p>
            <div>
              <p>
                Because graphs enable lightning-fast answers to queries and
                because they expand access to data, they have become a popular
                technology in the realm of real-time fraud detection. When
                investigating transactions with graph technology, it’s not only
                the transactions that can be modelled in graphs. Graphs are
                extremely flexible, which means the heterogeneous surrounding
                information can also be modelled. For example, client IP
                addresses, ATM geolocation, card numbers, and account IDs can
                all become vertices, and the connections can all become edges.
              </p>
              <p>
                <strong>Amit D</strong> <br></br>Manager,<br></br> Technical
                Services, <br></br>Cisco
              </p>
            </div>
          </div>
        </div>
      </DocArticle>
    </React.Fragment>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { useCasesSidebar: true },
  };
}
