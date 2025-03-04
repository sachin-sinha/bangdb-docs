import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import Codebox from "../../../components/Codebox";
import { AiSidebarData } from "../../../components/Sidebars/AiSidebarData";
import NextPageButton from "../../../components/NextPageButton/NextPageButton";

export default function pythonsuppot() {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Python Support</title>
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
        <h1 className="article-title">Python Support</h1>
        <div className="article-body">
          <h2>Python Support</h2>
          <p>
            Given that python is leading language for ML and many new
            interesting supports is coming from the language, therefore it was
            needed that we have built in support for such python code execution.
            However, following are the conditions that we wanted to apply.
          </p>
          <ul>
            <li>
              Python runs in single threaded manner, but we like parallel
              execution
            </li>
            <li>
              Run python code in separate process. If process creation fails
              then run in thread
            </li>
            <li>Read return data from python process</li>
            <li>Keep status of the process for reporting</li>
            <li>Python 2.7 and 3 support</li>
            <li>
              BangDB should compile and run with or without python - provide a
              switch
            </li>
          </ul>
          <p>
            Currently the SVM doesn't require python, but IE may need it.
            Therefore, need to compile BangDB accordingly
          </p>
          <h3>Input file format</h3>
          <p>
            For training and even for prediction, user may like to send data in
            different formats. Therefore, we needed simple mechanism to handle
            this. We have separate interface "iqconvert" defined, which has
            following APIs
          </p>
          <ul>
            <Codebox code={`int convert(char *infile, char *outfile);`} />
            <Codebox
              code={` int convert(FILE *finfile, FILE *foutfile);
`}
            />
          </ul>
          <p>
            Currently it's implemented for csv and json to libsvm format
            converters. Developer should implement this for new conversion logic
            as appropriate
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
