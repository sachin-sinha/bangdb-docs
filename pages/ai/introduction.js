import React from "react";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";
import DocArticle from "../../components/DocArticle";
import Image from "next/image";
import Codebox from "../../components/Codebox";

export default function AIMLInBangDB() {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>AI and Machine Learning in BangDB</title>
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
        <h1 className="article-title">AI for BangDB</h1>
        <div className="article-body">
          <section className="section">
            <h2 className="section-title">
              ML Infra: Natively Integrated with BangDB
            </h2>
            <ul className="section-list">
              <li>Embdd - need to take it to devices</li>
              <li>CS – For master, slave model</li>
              <li>P2P – Fully distributed, CH & CHORD</li>
            </ul>
            <div className="image-grid">
              <Image
                src="/assets/docs/firstpic.jpg"
                alt="ML Infrastructure Diagram"
                width={800}
                height={500}
                layout="responsive"
              />
            </div>
            <ul className="section-list">
              <li>Opaque and document is supported</li>
              <li>Absolute analytic is supported</li>
              <li>Need to add probabilistic – hence ML Infra</li>
              <li>Streaming – Handle data in streaming way</li>
            </ul>
          </section>

          <section className="section">
            <div className="image-grid">
              <Image
                src="/assets/docs/secound.jpg"
                alt="ML Infrastructure Diagram"
                width={800}
                height={500}
                layout="responsive"
              />
            </div>
            <h2 className="section-title">
              ML Infra – Train, Store, Deploy and Predict
            </h2>
            <ul className="section-list">
              <li>Scalable training and prediction servers</li>
              <li>Can be done in any language to come with different params</li>
              <li>Natively integrated with DB</li>
              <li>Bring your own code, models etc.</li>
              <li>Automated, repeatable, scalable</li>
            </ul>
          </section>

          <section className="section">
            <div className="image-grid">
              <Image
                src="/assets/docs/third.jpg"
                alt="ML Infrastructure Diagram"
                width={800}
                height={500}
                layout="responsive"
              />
            </div>
            <h2 className="section-title">ML in BangDB</h2>
            <p>Also supported:</p>
            <ul className="section-list">
              <li>Model training, evaluation</li>
              <li>Model versioning & deployment</li>
              <li>Model release and update process</li>
              <li>A/B testing framework</li>
              <li>Model monitoring – for performance, efficacy, degradation</li>
              <li>Logging, alerting</li>
              <li>AutoML</li>
            </ul>
          </section>

          <section className="section">
            <h2 className="section-title">
              Architecture – How does it fit in within BangDB
            </h2>
            <div className="image-grid">
              <Image
                src="/assets/docs/fourth.jpg"
                alt="ML Infrastructure Diagram"
                width={800}
                height={500}
                layout="responsive"
              />
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">
              ML Infra – Training Server in BangDB
            </h2>
            <ul className="section-list">
              <li>Training server actually runs in BangDB server framework</li>
              <li>Train stage will do training locally</li>
              <li>The servers could be behind LB (Logical)</li>
              <li>Train stage gets training data from BRS</li>
              <li>
                Training server keeps the training related metadata at BRS as
                well (BangDB)
                <ul>
                  <li>Param & Model info, Size of model</li>
                  <li>Algo used, Time took to create model</li>
                  <li>Last updated timestamp, versions</li>
                  <li>Model location, Model</li>
                  <li>Training & other files etc.</li>
                </ul>
              </li>
              <li>
                Train stage may also be part of server where store stage is RS +
                Data source
              </li>
              <li>Native integration ensures data comes from DB</li>
            </ul>
          </section>

          <section className="section">
            <div className="image-grid">
              <Image
                src="/assets/docs/fifth.jpg"
                alt="Deep Learning Diagram"
                width={800}
                height={500}
                layout="responsive"
              />
            </div>
            <p className="note">
              <strong>NOTE:</strong> R Server is similar, except it doesn’t run
              with BangDB server framework. Also, it reads data from BangDB
              only.
            </p>
          </section>

          <section className="section">
            <h2 className="section-title">
              ML Infra – Prediction Engine in BangDB
            </h2>
            <ul className="section-list">
              <li>
                PE (prediction engine) as part of store stage or separate stage
              </li>
              <li>PE could predict locally as well – Convergence Intact</li>
              <li>PE could call remote PE server for prediction</li>
              <li>Remote PE servers could run behind load balancer</li>
              <li>PE interacts with BRS (Resource Server) to fetch model</li>
              <li>Models should be assigned to unique remote PE server</li>
            </ul>
          </section>

          <section className="section">
            <div className="image-grid">
              <Image
                src="/assets/docs/sixth.jpg"
                alt="Deep Learning Diagram"
                width={800}
                height={500}
                layout="responsive"
              />
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">
              ML Infra - Prediction Engine Implementation
            </h2>
            <ul className="section-list">
              <li>
                PE is available as part of db as well, like swtable, topk,
                count, notification etc
              </li>
              <li>Interface for PE defines minimum set of public functions</li>
              <li>
                There would be different implementations of the interface for
                different algo /sdk etc
              </li>
              <li>
                There would be PEManager, who would create these individual PE
              </li>
              <li>
                PEManager would store the metadata related to PE in PE table in
                BangDB
              </li>
              <li>
                The output of PE may be stored in DB based on stream definition,
                PEManager to do the same
              </li>
            </ul>
          </section>

          <section className="section">
            <div className="image-grid">
              <Image
                src="/assets/docs/seven.jpg"
                alt="Deep Learning Diagram"
                width={800}
                height={500}
                layout="responsive"
              />
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">ML Infra - BangDB Resource Server</h2>
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

          <section className="section">
            <h2 className="section-title">ML Infra - Memory and Large Data</h2>
            <ul className="section-list">
              <h3 className="sub-section-title">LRU</h3>
              <ul>
                <li>
                  Abstraction for LRU for any item (template based), models or
                  files
                </li>
                <li>
                  Training and prediction works within allocated memory budget
                </li>
                <li>
                  If budget is breached, then expires least used item and loads
                  another one
                </li>
              </ul>
              <h3 className="sub-section-title">Large Data Operations</h3>
              <ul>
                <li>
                  Large data operation support for models, training or test
                  files
                </li>
                <li>Gets and puts large data in the db in chunks</li>
                <li>Provides simple consistent API to do so</li>
                <li>Supports scan on the keys as well</li>
              </ul>
            </ul>
          </section>

          <section className="section">
            <h2 className="section-title">
              IE for BangDB [Information Extraction and Ontology]
            </h2>
            <h3 className="sub-section-title">Information Extraction - Goal</h3>
            <p>
              Given a log file or line, product description URL or any related
              documents, create entity ontology graph using domain knowledge and
              store it for future retrieval and search.
            </p>
            <ul className="section-list">
              <li>
                Input – URL or any other doc in any format (pdf, doc, mail,
                etc.)
              </li>
              <li>Output – json string containing ontology graph</li>
            </ul>
            <p>Also do sentiment analysis for given text.</p>
          </section>

          <section className="section">
            <h2 className="section-title">
              Information Extraction - High Level Items
            </h2>
            <ul className="section-list">
              <li>
                Semantic entity extraction from unstructured or semi-structured
                texts
              </li>
              <li>Linking of entities for annotation & ontology evolution</li>
              <li>
                Train the knowledge base – domain specific [entities, classes
                etc.]
              </li>
              <li>
                For generic text, leverage publicly available knowledge base
                [Freebase, Dbpedia etc.]
              </li>
              <li>
                Dual algorithm model for better ontology results [CRF and SSVM]
              </li>
              <li>
                Training and ontology creation Infrastructure – Should be
                available as service hosted on premise or on cloud
              </li>
              <li>
                Various miscellaneous items – detail discussion in next slides
              </li>
            </ul>
          </section>

          <section className="section">
            <h2 className="section-title">Information Extraction - Design</h2>
            <div className="image-grid">
              <Image
                src="/assets/docs/eight.jpg"
                alt="Deep Learning Diagram"
                width={800}
                height={500}
                layout="responsive"
              />
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">
              Ontology Extraction – Basic Components
            </h2>
            <ul className="section-list">
              <li>
                Take all the existing product/support documents for [ex:
                <a href="https://www.cisco.com/c/en/us/support/docs/voice-unified-communications/unified-communications-manager-callmanager/43622-config-7920.html">
                  https://www.cisco.com/c/en/us/support/docs/voice-unified-communications/unified-communications-manager-callmanager/43622-config-7920.html
                </a>
                ].
              </li>
              <li>Train the knowledge base for product and support</li>
              <li>Find and understand relevant parts</li>
              <li>Gather info, relate and organize</li>
              <li>
                Produce a structured representation in semantically precise
                format
              </li>
              <li>Allow other algorithms to make inferences</li>
            </ul>
          </section>

          <section className="section">
            <div className="image-grid">
              <Image
                src="/assets/docs/nine.jpg"
                alt="Deep Learning Diagram"
                width={800}
                height={500}
                layout="responsive"
              />
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">Machine Learning Algo [Built-in]</h2>
            <ul className="section-list">
              <li>Classification - Single, multi-label - class & value</li>
              <li>Regression - Linear & Logistic</li>
              <li>Knowledge base training - any given domain</li>
              <li>NER model - Named Entity Recognition model</li>
              <li>Relation models - set of models for all relations</li>
              <li>Ontology</li>
              <li>K-means</li>
              <li>Random Forest</li>
              <li>
                Kernel Ridge Regression - also find the right function, etc.
              </li>
              <li>Naïve Bayes, Gaussian Mixture, Dynamic Bayesian Network</li>
              <li>Gradient Boosting Algorithm</li>
            </ul>
          </section>

          <section className="section">
            <h2 className="section-title">Deep Learning Algo [Built-in]</h2>
            <p>
              BangDB supports following deep learning features out of the box:
            </p>
            <ul className="section-list">
              <li>✔️ Deep and Convolutional Neural Network</li>
              <li>✔️ ResNet – Multi-layer residual</li>
              <li>✔️ Object marker and detector</li>
              <li>✔️ Shape detector</li>
              <li>✔️ LeNet</li>
              <li>✔️ Video / Image indexing and search</li>
              <li>✔️ Grep within image</li>
              <li>✔️ fHOG and feature extraction</li>
              <li>✔️ Deep homography estimations</li>
              <li>✔️ Semantic Segmentation</li>
            </ul>
          </section>

          <section className="section">
            <h2 className="section-title">Overview:</h2>
            <ul className="section-list">
              <li>
                BangDB integrated with R to provide insights in an ad hoc manner
                to understand patterns and to select suitable machine learning
                model that should be a good fit for the data.
              </li>
              <li>
                It allows users to select from set of pre-defined functions.
              </li>
              <li>
                The functionality will be extended allowing users to run their
                own analysis down the line.
              </li>
            </ul>
          </section>

          <section className="section">
            <h2 className="section-title">How it works?</h2>
            <ul className="section-list">
              <li>
                The user selects a function and source of the data along with
                time granularity.
              </li>
              <li>
                R picks up the data from the selected source within DB, does the
                computation and stores the results on BRS.
              </li>
              <li>
                Once the task is completed, user can view the result. The user
                is allowed to run the same function time-to-time and can compare
                the results with the previous ones.
              </li>
            </ul>
          </section>

          <section className="section">
            <div className="image-grid">
              <Image
                src="/assets/docs/ten.jpg"
                alt="Deep Learning Diagram"
                width={800}
                height={500}
                layout="responsive"
              />
            </div>
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
