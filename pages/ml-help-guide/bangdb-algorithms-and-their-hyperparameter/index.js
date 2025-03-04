import React from "react";
import Head from "next/head";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import NextPageButton from "../../../components/NextPageButton/NextPageButton";

export default function AlgorithmsAndTheirHyperParameter() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Algorithms and Parameters - BangDB</title>
        <meta
          name="description"
          content="Scaling before applying ML algorithms is very important. The main advantage of scaling is to avoid attributes."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Algorithms and Parameters - BangDB"
        />
        <meta
          property="og:description"
          content="Scaling before applying ML algorithms is very important. The main advantage of scaling is to avoid attributes."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Algorithms and Parameters - BangDB"
        />
        <meta
          name="twitter:description"
          content="Scaling before applying ML algorithms is very important. The main advantage of scaling is to avoid attributes."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>
      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Algorithms and their HyperParameters</h1>
        <div className="article-body">
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <th colSpan="5" rowSpan="1">
                    <h2
                      style={{
                        textAlign: "center",
                        margin: "26px 0",
                      }}
                    >
                      ALGORITHMS and PARAMETERS
                    </h2>
                  </th>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Scaling</span>
                    </p>
                  </td>
                  <td colSpan="4" rowSpan="1">
                    <p>
                      <span>
                        Scaling before applying{" "}
                        <span>
                          <Link href="/examples-tryout-yourself">ML</Link>
                        </span>{" "}
                        algorithms is very important. The main advantage of
                        scaling is to avoid attributes in greater numeric ranges
                        dominating those in smaller numeric ranges and to avoid
                        numerical difficulties during the calculation.
                      </span>
                    </p>
                    <p>
                      <span>
                        we perform linear scaling that is scale range [-1,1].
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Tune Param</span>
                    </p>
                  </td>
                  <td colSpan="4" rowSpan="1">
                    <p>
                      <span>
                        Proper choice of C and gamma is critical to the
                        SVM&apos;s performance. The user is advised to select
                        Tune Param .
                      </span>
                    </p>
                    <p>
                      <span>
                        On selecting Tune Param - you are performing
                        cross-validation and Grid Search. You can consider speed
                        as step length between two consecutive values C and
                        gamma.
                      </span>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
            <NextPageButton />
          </div>
        </div>
      </DocArticle>
    </React.Fragment>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { aisidebar: true },
  };
}
