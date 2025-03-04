import React from "react";
import Head from "next/head";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";

export default function KMeans() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>K-Means - BangDB</title>
        <meta
          name="description"
          content="K-Means clustering algorithm and its parameters in BangDB."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="K-Means - BangDB" />
        <meta
          property="og:description"
          content="K-Means clustering algorithm and its parameters in BangDB."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="K-Means - BangDB" />
        <meta
          name="twitter:description"
          content="K-Means clustering algorithm and its parameters in BangDB."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>
      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">K-Means</h1>
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
                      K-MEANS
                    </h2>
                  </th>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Parameters</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>values</span>
                    </p>
                  </td>
                  <td colSpan="3" rowSpan="1">
                    <p>
                      <span>Definition</span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Kernel Type</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>0. LINEAR</span>
                    </p>
                  </td>
                  <td colSpan="3" rowSpan="1">
                    <p>
                      <span>linear: u&apos;*v</span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>1. POLYNOMIAL</span>
                    </p>
                  </td>
                  <td colSpan="3" rowSpan="1">
                    <p>
                      <span>polynomial: (gamma*u&apos;*v + coef0)^degree</span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>2. RBF</span>
                    </p>
                  </td>
                  <td colSpan="3" rowSpan="1">
                    <p>
                      <span>radial basis function: exp(-gamma*|u-v|^2)</span>
                    </p>
                    <p>
                      <span>
                        This kernel nonlinearly maps samples into a higher
                        dimensional space so it, unlike the linear kernel, can
                        handle the case when the relation between className
                        labels and attributes is nonlinear.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>3. SIGMOID</span>
                    </p>
                  </td>
                  <td colSpan="3" rowSpan="1">
                    <p>
                      <span>sigmoid: tanh(gamma*u&apos;*v + coef0)</span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Gamma</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="3" rowSpan="1">
                    <p>
                      <span>
                        gamma defines how much influence a single training
                        example has. The larger gamma is, the closer other
                        examples must be to be affected.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Coef0</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="3" rowSpan="1">
                    <p>
                      <span>
                        Degree of the polynomial kernel function. Ignored by all
                        other kernels.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Degree</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="3" rowSpan="1">
                    <p>
                      <span>
                        Independent term in kernel function. It is only
                        significant in &apos;polynomial&apos; and
                        &apos;sigmoid&apos;.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Dimension (Number of Attributes)</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="3" rowSpan="1">
                    <p>
                      <span>
                        Number of input attributes / columns in the training
                        data set
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Number of Centers</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="3" rowSpan="1">
                    <p>
                      <span>Number of clusters</span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Stopping Criteria</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="3" rowSpan="1">
                    <p>
                      <span>
                        Tolerance for stopping criterion. The stopping tolerance
                        affects the number of iterations used when optimizing
                        the model.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Number of Rows</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="3" rowSpan="1">
                    <p>
                      <span>
                        Total number of records / rows in the training data
                      </span>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
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
