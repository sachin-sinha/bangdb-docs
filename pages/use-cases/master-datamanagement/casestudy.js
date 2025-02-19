import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import HighlightedCpp from "../../../components/HighlightedCpp";
import DownloadPDFButton from "../../../components/DownloadPDFButton";

export default function mastedatamanagementcasestudy() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/case-study/BangDB_BenchmarkForStreamoid.pdf";
    link.download = "BangDB_BenchmarkForStreamoid.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <React.Fragment>
      <Head>
        <meta charSet="UTF-8" /> {/* Use `charSet` instead of `charset` */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />{" "}
        {/* Use `httpEquiv` instead of `http-equiv` */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title> BangDB Benchmark for Streamoid</title>
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
        <DownloadPDFButton onClick={handleDownload} />
        <div id="article-content">
          <h1 className="article-title-new"> BangDB Benchmark for Streamoid</h1>
          <div className="article-body">
            <h2>Introduction</h2>
            <p>
              The benchmark is specific to the use case of the Streamoid’s
              product Catalogix on MongoDB. The Catalogix is a platform for
              managing ecommerce product catalog for several stores,
              marketplaces etc. for world’s best retailers providing them with
              AI automations built for retail.
            </p>
            <p>
              As part of POC, BangDB has been deployed to bring in the
              convergence of various elements for more efficient storage of data
              and processing. The major goals for the POC are to assess the
              improvement in performance vis-à-vis current implementations and
              reduction in operational (both dev and management) overhead. To
              achieve this BangDB has implemented a Schema which defines the
              logic for ingestion of events/data, processing of various
              elements, some running stats, ETL etc. as part of the stream
              processing. Further it also defines the logic for auto-updating
              the underlying graph to maintain the sub-pred-obj triple to allow
              query to leverage the natural relationships for query and avoid
              the run time joins etc. There are many other aspects which we have
              not yet implemented and integrated namely ML of stream,
              pattern/anomaly detection, actions, etc. which could be later
              augmented as required.
            </p>
            <p>
              Further, to evaluate this in an interactive manner, a test portal
              has been created on Ampere mimicking the UI flow of the Catalogix
              (from query perspective and not from look-n-feel)
            </p>
            <h2>Setup</h2>
            <h3>Data</h3>
            <ul>
              <p>
                Streamoid: Around 25GB database on Prod on MongoDB, so we tried
                to use 3X overall of this size on BangDB
              </p>
              <p>
                1. BangDB:Around 77 GB for Graph and Stream (Overall size 137GB)
                <br></br>2. [ extra 60GB document, BRS, Logs, stats, entities
                etc.]
                <br></br>
                3. 1M max product in any store<br></br>
                4. 1900 stores<br></br>
                5. 650K SMP_Parent, images, status<br></br>
                6. 9.3M marketplace data<br></br>
                7. Around 3X+ data as compared to Streamoid Production Database
              </p>
            </ul>
            <h2>Machine</h2>
            <ul>
              Cloud: GCP <br></br>VM: c2-standard-16 ,<br></br>RAM: 64GB{" "}
              <br></br>
              CPU: 8 Core, 16vCPU<br></br> Disk: 500GB SSD Persistent disk
              <br></br> OS: Ubuntu 18.04 LTS<br></br>Arch: x86/64, AMD
            </ul>
            <h2>Client</h2>
            <ul>
              <p>
                All tests are done using REST APIs. The C++, Java clients could
                be used for far better performance, but the Catalogix works
                using REST API hence we used the same.
              </p>
              <p>
                Protocol: HTTP 1.1<br></br>
                Methods: HEAD, GET, POST, PUT, DELETE
              </p>
              <p>Supported Headers</p>
              <ul>
                <li>
                  Content-Type: application/json, Content-Type: text/plain
                </li>
                <li>Connection: keep-alive</li>
                <li>Access-Control-Allow-Origin: *</li>
                <li>Access-Control-Allow-Methods: *</li>
                <li>Access-Control-Allow-Headers:*</li>
                <li>Vary :*</li>
                <li>Access-Control-Max-Age:3600</li>
                <li>x-bang-api-key: {"<api_key>"}</li>
              </ul>
              <p>
                Binary data or object should be passed with base64 encoding
                using Content-Type: text/plain
              </p>
              <p>
                There is a separate document which describes the queries and API
                details, attached with this doc
              </p>
            </ul>
            <p>
              Below are several sections detailing the different runs for
              performance benchmark.
            </p>
            <h2>Queries [ Read Operations ]</h2>
            <p>
              The queries used are the ones that are run on Catalogix all the
              time for various interactions. To compare the performance numbers
              for these queries with Catalogix and BangDB, following dataset was
              used.
            </p>
            <ul>
              Catalogix 200 Store with 134K products<br></br>
              BangDB 200 Store with 134K products<br></br>
              BangDB POC Store with 1M products
            </ul>
            <p>
              The queries and their execution time in milli-sec (excluding the
              Network time) are as follows;
            </p>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Num</th>
                    <th>Query</th>
                    <th>MongoDB 134K Products</th>
                    <th>BangDB 134K Products</th>
                    <th>BangDB 1M Products</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Get variation, style and total products for a store</td>
                    <td>275</td>
                    <td>316</td>
                    <td>318</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Get 50 products for a given store - UI first query</td>
                    <td>15000</td>
                    <td>402</td>
                    <td>601</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Get custom and marketplace data for a given product</td>
                    <td>500</td>
                    <td>309</td>
                    <td>347</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>List product for a store in ascending modified date</td>
                    <td>17000</td>
                    <td>976</td>
                    <td>1300</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Fetch select attributes for product of a store</td>
                    <td>15000</td>
                    <td>238</td>
                    <td>277</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <img
              src="/assets/docs/stremoid.png"
              alt="image
              Analysis"
              style={{ width: "100%", height: "auto" }}
            />
            <p>
              Since we had only these queries being used at Catalogix, so we ran
              more queries on BangDB and below are their performance numbers
              (time in milli sec)
            </p>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Num</th>
                    <th>Query</th>
                    <th>134K Products</th>
                    <th>1M Products</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>query 1</td>
                    <td>Get variation, style and total products for a store</td>
                    <td>316</td>
                    <td>318</td>
                  </tr>
                  <tr>
                    <td>query 2</td>
                    <td>Get 50 products for a given store - UI first query</td>
                    <td>402</td>
                    <td>601</td>
                  </tr>
                  <tr>
                    <td>query 3</td>
                    <td>Get custom and marketplace data for a given product</td>
                    <td>309</td>
                    <td>347</td>
                  </tr>
                  <tr>
                    <td>query 4</td>
                    <td>List product for a store in ascending modified date</td>
                    <td>976</td>
                    <td>1360</td>
                  </tr>
                  <tr>
                    <td>query 5</td>
                    <td>Fetch all attributes for product of a store</td>
                    <td>238</td>
                    <td>277</td>
                  </tr>
                  <tr>
                    <td>query 6</td>
                    <td>Fetch select attributes for product of a store</td>
                    <td>489</td>
                    <td>1200</td>
                  </tr>
                  <tr>
                    <td>query 7</td>
                    <td>Fetch data in rel with conditions</td>
                    <td>390</td>
                    <td>1090</td>
                  </tr>
                  <tr>
                    <td>query 8</td>
                    <td>Fetch product groups (SMP_Parent) for a store</td>
                    <td>410</td>
                    <td>987</td>
                  </tr>
                  <tr>
                    <td>query 9</td>
                    <td>Count total product_groups for a store</td>
                    <td>511</td>
                    <td>1360</td>
                  </tr>
                  <tr>
                    <td>query10</td>
                    <td>Chain query to get store, product and SMP data</td>
                    <td>560</td>
                    <td>996</td>
                  </tr>
                  <tr>
                    <td>query11</td>
                    <td>Required fields and SMP fields</td>
                    <td>334</td>
                    <td>365</td>
                  </tr>
                  <tr>
                    <td>query12</td>
                    <td>Query for total stores count</td>
                    <td>217</td>
                    <td>287</td>
                  </tr>
                  <tr>
                    <td>query13</td>
                    <td>
                      Fetch all data for a store node (can have config file and
                      other attribute level details as node properties)
                    </td>
                    <td>284</td>
                    <td>517</td>
                  </tr>
                  <tr>
                    <td>query14</td>
                    <td>Fetch details for a particular store</td>
                    <td>316</td>
                    <td>330</td>
                  </tr>
                  <tr>
                    <td>query15</td>
                    <td>Count for related stores</td>
                    <td>309</td>
                    <td>347</td>
                  </tr>
                  <tr>
                    <td>query16</td>
                    <td>Fetch shared stores SMP data</td>
                    <td>298</td>
                    <td>770</td>
                  </tr>
                  <tr>
                    <td>query17</td>
                    <td>Get total num of products</td>
                    <td>276</td>
                    <td>668</td>
                  </tr>
                  <tr>
                    <td>query18</td>
                    <td>Fetching 50 random products</td>
                    <td>430</td>
                    <td>495</td>
                  </tr>
                  <tr>
                    <td>query19</td>
                    <td>Fetch all product related to a group</td>
                    <td>1190</td>
                    <td>1360</td>
                  </tr>
                  <tr>
                    <td>query20</td>
                    <td>
                      Filter condition on chain query - returns selected fields
                    </td>
                    <td>674</td>
                    <td>1010</td>
                  </tr>
                  <tr>
                    <td>query21</td>
                    <td>
                      Fetch selected data for all images related to a store
                    </td>
                    <td>329</td>
                    <td>659</td>
                  </tr>
                  <tr>
                    <td>query22</td>
                    <td>Get all images nodes</td>
                    <td>456</td>
                    <td>1060</td>
                  </tr>
                  <tr>
                    <td>query23</td>
                    <td>
                      Fetch status and product_group (SMP_parent) details for a
                      store
                    </td>
                    <td>324</td>
                    <td>560</td>
                  </tr>
                  <tr>
                    <td>query24</td>
                    <td>Fetch product details and status details</td>
                    <td>453</td>
                    <td>760</td>
                  </tr>
                  <tr>
                    <td>query25</td>
                    <td>Fetch given marketplace data for a store</td>
                    <td>265</td>
                    <td>364</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <img
              src="/assets/docs/stremoid1.png"
              alt="image
              Analysis"
              style={{ width: "100%", height: "auto" }}
            />
            <p>
              The above were numbers for read operations, now in next section,
              we will go into write performances.
            </p>
            <h2>Write Operations</h2>
            <p>
              This section will cover the write operations and its throughput,
              performance numbers while data ingestions, insert, and updates.
              Following are the details for the test.
            </p>
            <p>
              The benchmark test for write was done for Product data,
              Marketplace data and Status data. The test was run with following
              details.
            </p>
            <ul>
              Num of parallel simultaneous connections: 8 [ DB used 8 threads]
              <br></br>
              Method: POST, REST
            </ul>
            <p>
              We selected these data for various reasons. Product data write is
              heavy as it involves 13 write operations and 9 read operations to
              insert just one record. Whereas Marketplace data is moderate, and
              it requires just 13 write operations and no read at all. Finally,
              status data is light weight since it involves only 2 write
              operations and no read for inserting one status record.
            </p>
            <p>
              The data was split into multiple parts and the summary of each
              part as mentioned in the appendix.
            </p>
            <h3>Product data</h3>
            <HighlightedCpp
              code={`
1. product_details_1_1.json - 224.6MB
2. product_details_1_2.json - 224 MB
3. product_details_1_3.json - 111.8 MB
4. product_details_1_4.json - 111.8 MB
5. product_details_1_5.json - 111.9 MB
6. product_details_1_6.json - 111.9 MB
7. product_details_1_7.json - 111.9 MB
8. product_details_1_8.json - 111.9 `}
            />
            <h3>Market place data</h3>
            <HighlightedCpp
              code={`
1. amazon_1.json - 219.9 MB
2. marketplace_1.json - 188.5 MB
3. marketplace_1_3.json - 181.8 MB
4. marketplace_1_4.json - 36.4 MB
5. marketplace_1_5.json - 92.6 MB
6. marketplace_1_6.json - 92.6 MB
7. marketplace_1_7.json - 181.8 MB
8. marketplace_1_8.json - 36.3 MB`}
            />

            <h3>status data</h3>
            <HighlightedCpp
              code={`
1. status_details_1.json - 10.1 MB
2. status_details_1_2.json - 10.1 MB
3. status_details_1_3.json - 6 MB
4. status_details_1_4.json - 9.4 MB
5. status_details_1_5.json - 6 MB
6. status_details_1_6.json - 4 MB
7. status_details_1_7.json - 6 MB
8. status_details_1_8.json - 4 MB`}
            />
            <h3>Following are the summary of the test.</h3>

            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Data</th>
                    <th>Num of rows</th>
                    <th>Size (MB)</th>
                    <th>Time (Sec)</th>
                    <th>IO ops per record</th>
                    <th>Event/sec</th>
                    <th>IOPS</th>
                    <th>MB/sec</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Product</td>
                    <td>1000000</td>
                    <td>1068</td>
                    <td>728</td>
                    <td>22</td>
                    <td>1374</td>
                    <td>30220</td>
                    <td>1.47</td>
                  </tr>
                  <tr>
                    <td>MarketPlace</td>
                    <td>760000</td>
                    <td>982</td>
                    <td>172</td>
                    <td>13</td>
                    <td>4419</td>
                    <td>57442</td>
                    <td>5.71</td>
                  </tr>
                  <tr>
                    <td>Status</td>
                    <td>260000</td>
                    <td>54</td>
                    <td>11</td>
                    <td>2</td>
                    <td>23636</td>
                    <td>47273</td>
                    <td>4.91</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Below are the charts depicting the behaviour of the operations
              from beginning to end.
            </p>
            <h2>Product Data</h2>
            <img
              src="/assets/docs/stremoid3.png"
              alt="image
              Analysis"
              style={{ width: "100%", height: "auto" }}
            />
            <p></p>
            <img
              src="/assets/docs/stremoid4.png"
              alt="image
              Analysis"
              style={{ width: "100%", height: "auto" }}
            />
            <h3>MarketPlace data</h3>
            <img
              src="/assets/docs/market.png"
              alt="image
              Analysis"
              style={{ width: "100%", height: "auto" }}
            />
            <p></p>
            <img
              src="/assets/docs/market2.png"
              alt="image
              Analysis"
              style={{ width: "100%", height: "auto" }}
            />
            <h3>Status data</h3>
            <img
              src="/assets/docs/status2.png"
              alt="image
              Analysis"
              style={{ width: "100%", height: "auto" }}
            />
            <p></p>
            <img
              src="/assets/docs/status1.png"
              alt="image
              Analysis"
              style={{ width: "100%", height: "auto" }}
            />
            <h2>Summary</h2>
            <ul>
              <li>
                For Catalogix use case perspective, BangDB eliminates the
                bottleneck of low performance as it’s ~10-15X faster on an
                average for slower queries over there.
              </li>
              <li>
                BangDB also eliminates the middle app layer where various
                computations happen, reason for the low performance as app was
                doing the DB job.
              </li>
              <li>
                For read query, BangDB performs and scales well for even 3X of
                prod size data.
              </li>
              <li>
                BangDB allows data to grow beyond memory and still work
                efficiently. This may allow user to maintain and scale
                gracefully.
              </li>
              <li>
                The write operations with mixed reads as well, scales well. It
                provides high IOPS for concurrent write of different kind of
                data in continuous manner. Therefore, it will allow users to
                perform read and write in random and mixed manner with high
                performance.
              </li>
              <li>
                Catalogix integration should be simple as there are only 5
                queries for which it needs to make changes at the FE level.
              </li>
              <li>
                There are more features withing BangDB that could be utilized in
                coming days. Verifications, ETL, Filter, running join, CEP, auto
                ML etc. are few for example.
              </li>
              <li>
                There are quite a few scope of improvements in the
                implementation too, but we can optimize later.
              </li>
            </ul>
          </div>
        </div>
      </DocArticle>
    </React.Fragment>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { useCasesSidebar: true },
  };
}
