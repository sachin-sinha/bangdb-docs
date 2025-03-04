import React from "react";
import Head from "next/head";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import NextPageButton from "../../../components/NextPageButton/NextPageButton";

export default function LinearClassification() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Linear Classification - BangDB</title>
        <meta
          name="description"
          content="Learn about Linear Classification and its parameters in BangDB."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Linear Classification - BangDB" />
        <meta
          property="og:description"
          content="Learn about Linear Classification and its parameters in BangDB."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Linear Classification - BangDB" />
        <meta
          name="twitter:description"
          content="Learn about Linear Classification and its parameters in BangDB."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>
      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Linear Classification</h1>
        <div className="article-body">
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <th colSpan="4" rowSpan="1">
                    <h2 style={{ textAlign: "center", margin: "26px 0" }}>
                      LINEAR CLASSIFICATION
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
                      <span>
                        0 - L2-regularized logistic regression primal,
                      </span>
                      <span>1 - L2-regularized L2-loss SVC dual,</span>
                      <span>2 - L2-regularized L2-loss SVC primal ,</span>
                      <span>3 - L2-regularized L1-loss SVC dual,</span>
                    </p>
                  </td>
                  <td colSpan="2" rowSpan="3">
                    <p>
                      <span>
                        We have 8 linear Classification solvers, by combining
                        several types of loss functions and regularization
                        schemes. The regularization can be L1 or L2, and the
                        losses can be the regular L2-loss for SVM (hinge loss),
                        L1-loss for SVM, or the logistic loss for logistic
                        regression. The default value for type is 0.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>
                        4 - Support Vector Classification by Crammer and Singer
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>5 - L1-regularized L2-loss SVC</span>
                      <span>6 - L1-regularized Logistic regression ,</span>
                      <span>7 - L2-regularized Logistic regression dual</span>
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
                        Regularization parameter. The strength of the
                        regularization is inversely proportional to C. Must be
                        strictly positive. The penalty is a squared l2 penalty.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Bias</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="2" rowSpan="1">
                    <p>
                      <span>
                        Consider: w_1 * x_1 + w_2 * x_2 + w_3 * x_3 + … + w_bias
                        * x_bias = 0, Here x are the feature values and w are
                        the trained “weights”. The additional feature x_bias is
                        a constant, whose value is equal to the bias.
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
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>nr_weight</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="2" rowSpan="1">
                    <p>
                      <span>
                        nr_weight is the number of elements in the array
                        weight_label and weight. Each weight[i] corresponds to
                        weight_label[i], meaning that the penalty of className
                        weight_label[i] is scaled by a factor of weight[i].
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Weight (wi)</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="2" rowSpan="1">
                    <p>
                      <span>
                        Set the parameter C of className i to weight*C, for
                        C-SVC.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Weight_Label</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="2" rowSpan="1">
                    <p>
                      <span>
                        These weights are used to change the penalty for
                        specific labels (classes). If the weight for a label is
                        not changed, it is set to 1.0.
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
