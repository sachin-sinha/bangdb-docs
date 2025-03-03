import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import Codebox from "../../../components/Codebox";
import NextPageButton from "../../../components/NextPageButton/NextPageButton";

export default function interfacesapi() {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Interfaces & APIs</title>
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
        <h1 className="article-title">Interfaces and APIs</h1>
        <div className="article-body">
          <h2>Interfaces & APIs</h2>
          <p>Following basic interface is available from user's perspective</p>
          <h3>client_ml_helper</h3>

          <ul>
            <li>
              <p>
                {` //creates bucket`}
                <br></br>
                {`i/p - {"bucket_name":"myname", "access_key":"akey", "secret_key":"skey"`}
                <br></br>
                {` int create_bucket(char *bucket_info);**`}
              </p>
            </li>
            <li>
              {` //sets bucket - which bucket to use for any operation within this class
`}
              <br></br>
              {` //i/p - {"bucket_name":"myname", "access_key":"akey", "secret_key":"skey"}`}
              <br></br>
              {`     void set_bucket(char *bucket_info);
`}
            </li>
            <li>
              //key is the key of the file using which the brs will store it
              <br></br>
              //fpath is full path of the file on local fs, iop is flag for
              operation put <br></br>int upload_file(char *key, char *fpath,
              insert_options iop);
            </li>
            <li>
              //train req : It depends on what kind of algo is requested. Format
              changes for different types<br></br>
              int train_model(char *req);
            </li>
            <li>
              {`  //req : {"account_id":"AACCEEGGIILLNN", "model_name":"my_model1"}`}
              <br></br>
              {`char *get_model_status(char *req);
`}
            </li>
            <li>
              {` //{"account_id":, "model_name":}
`}
              <br></br> int del_model(char *req);
            </li>
            <li>
              {`//{"account_id":, "model_name":}
`}
              <br></br>
              int del_train_request(char *req);
            </li>
            <li>
              {`//req : depends on algo etc, user ought to provide the right one`}
              <br></br>
              char *predict(char *req);
            </li>
            <li>
              //get training requests for a given account - all training
              requests <br></br>
              {` //req : {account_id:"aacid"}
`}
              <br></br>
              resultset *get_training_requests(char *req);
            </li>
            <li>
              //count models for a given account, all the models
              <br></br>
              {`//req : {account_id:"aacid"}
`}
              <br></br>
              long count_models(char *req);
            </li>
            <li>
              //This is to re-init the model data manager in case we would like
              to change the
              <br></br>
              //IP:PORT info for BRS, useful because BRS mostly will be separate
              and mostly static <br></br>
              //but may change due to load etc, as BRS can scale linearly
              <br></br>
              {`   //req : {"bucket_info", "brs_ip", "brs_port"}
`}
              <br></br>
              int reinit_mdm(char *req);
            </li>
            <li>
              //how many objects are using this reference
              <br></br>
              int get_ref_count();
            </li>
            <li>
              //get the handle of BRS - useful only for embd as client should
              never bother about this
              <br></br>
              bangdb_resource_manager *get_brs();
            </li>
            <li>
              //this is to test if brs is local to the BE server DB bool
              is_brs_local();
            </li>
            <li>void clean_ml_helper();</li>
          </ul>
          <h3>For developer, we have following interfaces</h3>
          <h2>Development Interfaces, classes</h2>
          <ul>
            <li>iq_train_predict</li>
            <li>model_data_manager</li>
            <li>pred_housekeep</li>
            <li>iqconvert</li>
            <li>ml_bangdb</li>
          </ul>
          <p>
            Out of these, iq_train_predict is the interface which we need to
            implement for every new algo we add. For ex, we have
            svm_train_predict for svm, similarly ie_train_predict for IE etc.
          </p>
          <p>
            iq_convert is for converting the format of a file from f1 to f2.
          </p>
          <p>
            pred_housekeep keeps the state of any request, training info etc. It
            also provides locking apis for safely handling of parallel trainings
            or predictions
          </p>
          <p>
            model_data_manager manages the models. It interfaces with BRS to get
            or put data (any data)
          </p>
          <p>
            Finlly ml_bangdb or ie_bangdb are collections of helper functions
          </p>
          <p>Details of these would be defined below.</p>
          <h4>iq_train_predicit</h4>
          <Codebox
            code={`    void set_housekeep(void *hkeep);
              char *train_model(char *param_list);
              char *predict(char *str, void *arg = NULL);
              char *get_status(char *model_detail);
              void close_trainer();
          `}
          />
          <p>We just need to implement above five APIs to add any new algo</p>
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
