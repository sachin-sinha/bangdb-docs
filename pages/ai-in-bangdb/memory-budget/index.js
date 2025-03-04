import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import Codebox from "../../../components/Codebox";
import { AiSidebarData } from "../../../components/Sidebars/AiSidebarData";
import NextPageButton from "../../../components/NextPageButton/NextPageButton";

export default function memorybudget() {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Memory Budget</title>
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
        <h1 className="article-title">Memory Budget</h1>
        <div className="article-body">
          <p>
            We know that training esp is memory intensive and server may crash
            if not handled properly. Similarly, when we run prediction server,
            to be able to handle prediction faster, we must have models loaded
            in the memory. But again, how many models? what if we need more than
            we can handle given amount of memory? etc. To address all these, we
            have memory budget concept implemented in the ML infra.
          </p>
          <p>
            1. Training happens in given memory budget. It never exceeds the
            given amount. In future we may add speed as param for training and
            accordingly can adjust the memory. As of now user needs to
            explicitly define the memory budget <br></br>
            <br></br>2. The model manager also works within memory budget. It
            manages all required models with the given amount
          </p>
          <h3>LRU for ensuring memory budget constraints</h3>
          <p>
            When we have more objects to deal with than the given memory, we
            must have ways to de-allocate few objects in favor of newer ones.
            Therefore, BangDB ML Infra implements its own LRU which keeps
            objects in-memory as much as possible, however when it requires
            more, it will de-allocate or invalidate the ones which were accessed
            earliest. Which means it tries to keep the recently accessed objects
            in-memory as much as possible. This is very light weight
            implementation, but performance is high and its thread safe
          </p>
          <h3>BRS Integration</h3>
          <p>
            Now we don't have dependency on S3 and it's removed completely. We
            have BRS for the same purpose. The ML Infra is seamlessly integrated
            with BRS.
          </p>
          <h3>BSM Integration</h3>
          <p>
            For BSM, not much has changed from outside and we still use
            svm_predictor and most of the APIs are same. However, there are
            subtle changes internally, which basically aligns with the new
            implementation. Therefore, in BSM we don't have any impact from
            caller or usage perspective. Existing code for Get, Put, scan etc.
            should just work as they used to
          </p>
        </div>
        <NextPageButton />
      </DocArticle>
    </React.Fragment>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { aisidebar: true },
  };
}
