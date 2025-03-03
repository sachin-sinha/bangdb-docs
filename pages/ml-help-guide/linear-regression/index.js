import React from "react";
import Head from "next/head";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import NextPageButton from "../../../components/NextPageButton/NextPageButton";

export default function LinearRegression() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Linear Regression - BangDB</title>
        <meta
          name="description"
          content="Learn about Linear Regression and its parameters in BangDB."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Linear Regression - BangDB" />
        <meta
          property="og:description"
          content="Learn about Linear Regression and its parameters in BangDB."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Linear Regression - BangDB" />
        <meta
          name="twitter:description"
          content="Learn about Linear Regression and its parameters in BangDB."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>
      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Linear Regression</h1>
        <div className="article-body">
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <th colSpan="4" rowSpan="1">
                    <h2 style={{ textAlign: "center", margin: "26px 0" }}>
                      LINEAR REGRESSION
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
                  <td colSpan="2" rowSpan="1">
                    <p>
                      <span>Definition</span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="3">
                    <p>
                      <span>Solver</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>11 - L2-regularized L2-loss SVR primal</span>
                    </p>
                  </td>
                  <td colSpan="2" rowSpan="3">
                    <p>
                      <span>
                        We have 3 linear Regression solvers, by combining
                        several types of loss functions and regularization
                        schemes. The regularization can be L1 or L2, and the
                        losses can be the regular L2-loss for SVM (hinge loss),
                        or L1-loss for SVM. The default value for type is 11.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>12 - L2-regularized L2-loss SVR dual</span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>13 - L2-regularized L1-loss SVR dual</span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Cost (C)</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="2" rowSpan="1">
                    <p>
                      <span>
                        The parameter C, trades off misclassification of
                        training examples against simplicity of the decision
                        surface. A low C makes the decision surface smooth,
                        while a high C aims at classifying all training examples
                        correctly. As C increases, tendency to misclassification
                        decreases on train data (may lead to overfitting).
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Epsilon_SVR (P)</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="2" rowSpan="1">
                    <p>
                      <span>
                        Epsilon in the epsilon-SVR model. It specifies the
                        epsilon-tube within which no penalty is associated in
                        the training loss function with points predicted within
                        a distance epsilon from the actual value.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Termination Criterion</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="2" rowSpan="1">
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
                      <span>Folds</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="2" rowSpan="1">
                    <p>
                      <span>
                        V-fold for Cross Validation. In v-fold cross-validation,
                        we first divide the training set into v subsets of equal
                        size. Sequentially one subset is tested using the
                        classifier trained on the remaining v − 1 subsets. Thus,
                        each instance of the whole training set is predicted
                        once so the cross-validation accuracy is the percentage
                        of data which are correctly classified.
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
