import React from "react";
import Head from "next/head";
import Link from "next/link";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import NextPageButton from "../../../components/NextPageButton/NextPageButton";

export default function Regression() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Regression - BangDB</title>
        <meta
          name="description"
          content="Scaling before applying ML algorithms is very important. The main advantage of scaling is to avoid attributes."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Regression - BangDB" />
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
        <meta name="twitter:title" content="Regression - BangDB" />
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
        <h1 className="article-title">Regression</h1>
        <div className="article-body">
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <th colSpan="5" rowSpan="1">
                    <h2 style={{ textAlign: "center", margin: "26px 0" }}>
                      REGRESSION
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
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Tips</span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="2">
                    <p>
                      <span>SVM_Type</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>3 - Epsilon-SVR</span>
                    </p>
                  </td>
                  <td colSpan="2" rowSpan="2">
                    <p>
                      <span>
                        The Nu parameter in Nu-SVM can be used to control the
                        amount of support vectors in the resulting model.
                        However, in ϵ-SVR you have no control on how many data
                        vectors from the dataset become support vectors, it
                        could be a few, it could be many. Nonetheless, you will
                        have total control of how much error you will allow your
                        model to have, and anything beyond the specified ϵ will
                        be penalized in proportion to C, which is the
                        regularization parameter.
                      </span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="2">
                    <p></p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>4 - Nu-SVR</span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="4">
                    <p>
                      <span>Kernel Type</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>0 - Linear</span>
                    </p>
                  </td>
                  <td colSpan="2" rowSpan="1">
                    <p>
                      <span>linear: u&apos;*v</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="4">
                    <p>
                      <span>
                        Radial Basis Function is a general purpose kernel, used
                        when there is no prior knowledge about the data because
                      </span>
                    </p>
                    <p>
                      <span>
                        1. The linear kernel is a special case of RBF since the
                        linear kernel with a penalty parameter C has the same
                        performance as the RBF kernel with some parameters (C,
                        gamma)
                      </span>
                    </p>
                    <p>
                      <span>
                        2. The second reason is the number of hyperparameters
                        which influences the complexity of model selection. The
                        polynomial kernel has more hyperparameters than
                      </span>
                    </p>
                    <p>
                      <span>the RBF kernel.</span>
                    </p>
                    <p>
                      <span>
                        There are some situations where the RBF kernel is not
                        suitable. In particular, when the number of features is
                        very large, one may just use the linear kernel.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>1 - Polynomial</span>
                    </p>
                  </td>
                  <td colSpan="2" rowSpan="1">
                    <p>
                      <span>polynomial: (gamma*u&apos;*v + coef0)^degree</span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>2 - RBF</span>
                    </p>
                  </td>
                  <td colSpan="2" rowSpan="1">
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
                    <p>
                      <span>3 - Sigmoid</span>
                    </p>
                  </td>
                  <td colSpan="2" rowSpan="1">
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
                    <p>
                      <span>[0.000122,8]</span>
                    </p>
                  </td>
                  <td colSpan="2" rowSpan="1">
                    <p>
                      <span>
                        gamma defines how much influence a single training
                        example has. The larger gamma is, the closer other
                        examples must be to be affected.
                      </span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
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
                  <td colSpan="2" rowSpan="1">
                    <p>
                      <span>
                        Degree of the polynomial kernel function. Ignored by all
                        other kernels.
                      </span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
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
                  <td colSpan="2" rowSpan="1">
                    <p>
                      <span>
                        Independent term in kernel function. It is only
                        significant in ‘polynomial&apos; and ‘sigmoid&apos;.
                      </span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Cost (C)</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>[0.031250,8192]</span>
                    </p>
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
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>
                        C is 1 by default and it&apos;s a reasonable default
                        choice. If you have a lot of noisy observations you
                        should decrease it: decreasing C corresponds to more
                        regularization.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>NU</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>(0,1]</span>
                    </p>
                  </td>
                  <td colSpan="2" rowSpan="1">
                    <p>
                      <span>
                        It&apos;s a hyperparameter for nu-SVC, one-className SVM
                        and nu-SVR. It is similar to C. nu is upper bound on the
                        fraction of errors and lower bound on the fraction of
                        number of support vectors( number of support vectors
                        determine the run time).
                      </span>
                    </p>
                    <p>
                      <span>
                        Example: if we want error to be less than 1% then nu is
                        0.01 and the number of supported vectors will be more
                        than 1% of the total records.
                      </span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>
                        Nu approximates value = the fraction of training errors
                        and support vectors.
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
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Cachesize</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="2" rowSpan="1">
                    <p>
                      <span>
                        For C-SVC, Epsilon-SVR, NuSVC and NuSVR, the size of the
                        kernel cache has a strong impact on run times for larger
                        problems.
                      </span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>
                        If you have enough RAM available, it is recommended to
                        set cache size to a higher value than the default of
                        200(MB), such as 500(MB) or 1000(MB).
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
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Shrinking</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="2" rowSpan="1">
                    <p>
                      <span>
                        The shrinking are there to save the training time.They
                        sometimes help, and sometimes they do not. It&apos;s a
                        matter of runtime, rather than convergence. If the
                        number of iterations is large, then shrinking can
                        shorten the training time.
                      </span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>
                        We found that if the number of iterations is large, then
                        shrinking can shorten the training time.
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>
                      <span>Probability_Estimates</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
                  </td>
                  <td colSpan="2" rowSpan="1">
                    <p>
                      <span>Whether to enable probability estimates.</span>
                    </p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p></p>
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
