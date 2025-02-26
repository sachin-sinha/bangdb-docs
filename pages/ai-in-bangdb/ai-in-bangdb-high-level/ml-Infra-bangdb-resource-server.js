import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import Codebox from "../../../components/Codebox";

export default function AIMLInBangDB() {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>BangDB Resource Server</title>
        <meta
          name="description"
          content="AI and Machine Learning infrastructure in BangDB, including model training, prediction, and information extraction."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="AI and Machine Learning in BangDB" />
        <meta
          property="og:description"
          content="AI and Machine Learning infrastructure in BangDB, including model training, prediction, and information extraction."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="AI and Machine Learning in BangDB"
        />
        <meta
          name="twitter:description"
          content="AI and Machine Learning infrastructure in BangDB, including model training, prediction, and information extraction."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="AI in BangDB" url="/ai" />
        <h1 className="article-title">BangDB Resource Server</h1>
        <div className="article-body">
          <section className="section">
            <h2 className="section-title">BangDB Resource Server</h2>
            <ul className="section-list">
              <li>It keeps all models, files, any other data for ML</li>
              <li>
                Implements S3 like interface, API mimics S3 API such that we
                have consistent user code
              </li>
              <li>In other scenario, BRS could be simply S3</li>
              <li>Users are able to create buckets and put data in it</li>
              <li>Access_key, secret_key based access</li>
              <li>
                Allows user and DB to keep ML related files in BRS which are
                typically large files
              </li>
              <li>No limit to the size of files that could be stored</li>
            </ul>
            <h3 className="sub-section-title">Buckets</h3>
            <Codebox
              code={`Int create_bucket(char*bucket_info); 
char*list_buckets(char*user_info);
Int del_bucket(char*bucket_info);
`}
            />
            <h3 className="sub-section-title">Operation</h3>
            <Codebox
              code={`put_object(bucket_name, key, data, datlen);
get_object(bucket_name, key, *data, *datlen);
delete_object(bucket_name, key);
Int upload_file(char*bucket_info, char*key, char*fpath);
Int download_file(char*buc_info, char*key, char*fname,  char*fpath);
`}
            />
          </section>
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
