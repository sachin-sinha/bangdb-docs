import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import Codeboxs from "../../../components/Codebox";
import { AiSidebarData } from "../../../components/Sidebars/AiSidebarData";
import NextPageButton from "../../../components/NextPageButton/NextPageButton";
import Codebox from "../../../components/Codebox";

export default function algo() {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Algo</title>
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
        <h1 className="article-title">Algo</h1>
        <div className="article-body">
          <ol>
            <li>Classification - Single, multi-label - class & value - Done</li>
            <li>Regression - Linear & Logistic - Done</li>
            <li>Knowledge base training - any given domain - Done</li>
            <li>NER model - name entity model - Done</li>
            <li>Relation models - set of models for all relations - Done</li>
            <li>Ontology - Done</li>
            <li>Kmeans - Done, portal integration pending</li>
            <li>Random Forest</li>
            <li>Kernel ridge regression - also find the right function etc</li>
            <li>N Bayes, GM, Dynamic Bayesian Network - PA</li>
            <li>Gradient Boosting Algorithm</li>
            <li>DNN, Convolutional Neural Network</li>
            <li>ResNet, loss and metric</li>
            <li>Semantic segmentation</li>
            <li>FHOG, BR</li>
            <li>Image search, face search</li>
          </ol>
          <h3>Param Tuning</h3>
          <p>
            One of the limitations with previous implementation was not able to
            tune the params. We know that for same data and algo, if params are
            tuned properly then efficacy could be increased from 20% to 95%+.
            Therefore, it's important that we must allow user to tune params.
            However, this is optional, and user may switch on / off the tuning
            part as needed. Default is on. It's recommended that it must be on
          </p>
          <h3>Data Normalization</h3>
          <p>
            For the same data file, different fields could have different
            dimensions. Therefore, applying singular dimension would be
            defeating and yield poor results. We can now switch on the
            normalization option when we send request. It's highly recommended
            to do that
          </p>
          <h3>Memory Budget</h3>
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
          <h3>Conventions</h3>
          <p>
            A. Any file name must have model_name and account_id associated with
            it. For ex; model key would be following.
          </p>
          <ul>model_name__account_id [ joined by two underscores "__" ]</ul>
          <br></br>
          <ul>
            Training file name would be; <br></br>
            model_name__account_id__training_file_name
          </ul>
          <p>
            B. Training or prediction uses local dir /tmp/BRS_DATA for dealing
            with temporary files. We must create this folder on the server else
            training or prediction will fail
          </p>
          <p>
            C. Training request returns immediately. This allows training to be
            non-blocking for client server case. However, training is blocking
            for embedded case since it should force user to wait.
          </p>
          <p>
            D. Since the training is async and returns immediately therefore we
            must need mechanism to get the state of the training any given time.
            State of the training requests are maintained and could be queried
            by calling get_status api (as described above). Following are the
            states that ML infra would maintain within BangDB, these are self
            explanatory
          </p>
          <Codebox
            code={`  enum ML_BANGDB_TRAINING_STATE
    {
        ML_BANGDB_TRAINING_STATE_INVALID_INPUT = 10,
        ML_BANGDB_TRAINING_STATE_NOT_PRSENT,
        ML_BANGDB_TRAINING_STATE_ERROR_PARSE,
        ML_BANGDB_TRAINING_STATE_ERROR_FORMAT,
        ML_BANGDB_TRAINING_STATE_ERROR_BRS,
        ML_BANGDB_TRAINING_STATE_ERROR_TUNE,
        ML_BANGDB_TRAINING_STATE_ERROR_TRAIN,
        ML_BANGDB_TRAINING_STATE_LIMBO,
        ML_BANGDB_TRAINING_STATE_BRS_GET_PENDING,
        ML_BANGDB_TRAINING_STATE_BRS_GET_DONE,
        ML_BANGDB_TRAINING_STATE_REFORMAT_DONE,
        ML_BANGDB_TRAINING_STATE_SCALE_TUNING_DONE,
        ML_BANGDB_TRAINING_STATE_BRS_MODEL_UPLOAD_PENDING,
        ML_BANGDB_TRAINING_STATE_TRAINING_DONE,
        ML_BANGDB_TRAINING_STATE_DEPRICATED,
     };
`}
          />
          <p>
            E. User should use the helper class (bangdb_ml_helper) to deal with
            all sorts of things including uploading, downloading files etc. User
            should not use BRS for uploading or downloading files, BangDB model
            manager is aware of this and it takes care of all BRS interactions.
            Therefore it's very simple to just use 7-9 APIs given in the
            bangdb_ml_helper class and not worry about what to use etc.
          </p>
          <p>F. Training request format for SVM</p>
          <Codebox
            code={`API - char *train_model(char *param_list);

  param_list = 
        {
          "account_id:id,
          "algo_type": "SVM",
          "algo_param": {"svm_type": 1, "kernel": 2, "degree": 3, "gamma": 0.2, "cost": 1.1, "cache_size": 50, 
          "probability": 0, "termination_criteria": 0.001, "nu": 0.5, "coef0": 0.1},
          "attr_list":[{"name":"a1", "position":1}, {"name":"a2", "position":2} ... ],
          "training_details":{"training_source": infile, "training_source_type": FILE, "file_size_mb": 110},
          "scale":Y/N,
          "tune_param": Y/N,
          "attr_type" : NUM/STR,
          "re_format":JSON,
          "model_name" :"my_model1"
        }
`}
          />
          <p>G. Prediction request for SVM</p>
          <Codebox
            code={`   API - char *predict(char *str, void *arg = NULL);

        str =

        ex1: {account_id, attr_type: NUM, data_type:event, re_arrange:N, re_format:N, model_name: model_name, 
              data:"1 1:1.2 2:3.2 3:1.1"}
        ex2; {account_id, attr_type: NUM, data_typee:FILE, re_arrange:N, re_format:N, model_name: model_name, 
              data:inputfile}
        ex3; {account_id, attr_type: NUM, data_type:event, re_arrange:N, re_format:JSON, model_name: model_name, 
              data:{k1:v1, k2:v2, k3:v3}}
              etc...
`}
          />
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
