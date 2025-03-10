import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import DocArticle from "../../components/DocArticle";
import Breadcrumb from "../../components/Breadcrumb";
import HighlightedJava from "../../components/HighlightedJava";
import NextPageButton from "../../components/NextPageButton/NextPageButton";

export default function GraphAndCypher() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Graph and Cypher - BangDB</title>
        <meta
          name="description"
          content="Graph and Cypher in BangDB is quite powerful & allows native machine learning and stream processing with Graph which enables complex use cases."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Graph and Cypher - BangDB" />
        <meta
          property="og:description"
          content="Graph and Cypher in BangDB is quite powerful & allows native machine learning and stream processing with Graph which enables complex use cases."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Graph and Cypher - BangDB" />
        <meta
          name="twitter:description"
          content="Graph and Cypher in BangDB is quite powerful & allows native machine learning and stream processing with Graph which enables complex use cases."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Graph and Cypher</h1>
        <div className="article-body">
          <p>
            Graph and Cypher in BangDB is quite powerful and allows users to
            deal with modern and complex use cases. BangDB natively integrates
            Graph with Stream, which makes in possible to ingest data in stream
            and keep growing Graph as well. With native AI integration, the data
            science becomes natural element for Graph. With simple Cypher
            queries, user can do much more and in real-time for several use
            cases.
          </p>
          <p>
            Data in a graph table for BangDB is defined as triples. A triple
            contains subject, object and relationship (predicate) between them.
            All data is stored as triple within the DB. BangDB does clever
            arrangements and housekeeping to store the data such that various
            queries can be written and run efficiently.
          </p>
          <p>
            The structure of the query is very similar to “Cypher”. BangDB uses
            Cypher-like queries to process the data. The basic structures look
            like following:
          </p>
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <th>Query</th>
                  <th>Description</th>
                </tr>
                <tr>
                  <td>CREATE()-[]-&gt;()</td>
                  <td>for creating node or triple</td>
                </tr>
                <tr>
                  <td>S=&gt;()-[]-&gt;()</td>
                  <td>for querying data</td>
                </tr>
                <tr>
                  <td>
                    &lt;op USING attr1 SORT_DESC attr2 LIMIT n&gt; query1 ++
                    query2
                  </td>
                  <td>operation on disjoint sets of queries</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            The &quot;()&quot; denotes subject or object and &quot;[]&quot;
            denotes relation (predicate) with &quot;-&gt;&quot; defining the
            direction. The arrangement is always{" "}
            <em>&quot;Subject Predicate Object&quot;</em>.
          </p>
          <p>
            The node has a label associated with it. Every node is written as
            &quot;label:name&quot;.
          </p>
          <p>
            There are basically following keywords associated with all the
            queries.
          </p>
          <h2>Node, entity creation</h2>
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <th>Query</th>
                  <th>Description</th>
                </tr>
                <tr>
                  <td>CREATE</td>
                  <td>to create a single node, or triple</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2>Running query and selecting data</h2>
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <th>Query</th>
                  <th>Description</th>
                </tr>
                <tr>
                  <td>S=&gt;</td>
                  <td>namespace for the unit of query</td>
                </tr>
                <tr>
                  <td>RETURN</td>
                  <td>selecting attributes for any query</td>
                </tr>
                <tr>
                  <td>WHERE</td>
                  <td>conditions for the query</td>
                </tr>
                <tr>
                  <td>AS</td>
                  <td>selecting columns/attributes with alias</td>
                </tr>
                <tr>
                  <td>DATAQUERY</td>
                  <td>
                    for filtering within node and relations for properties
                  </td>
                </tr>
                <tr>
                  <td>SORT_DESC</td>
                  <td>for sorting in descending order</td>
                </tr>
                <tr>
                  <td>SORT_ASC</td>
                  <td>for sorting in ascending order</td>
                </tr>
                <tr>
                  <td>LIMIT</td>
                  <td>for limiting number of selections</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2>Statistics</h2>
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <th>Query</th>
                  <th>Description</th>
                </tr>
                <tr>
                  <td>COUNT</td>
                  <td>
                    count a particular entity using COUNT(attribute) or just
                    number of rows using COUNT(*)
                  </td>
                </tr>
                <tr>
                  <td>UCOUNT</td>
                  <td>
                    unique counting using probabilistic method (using
                    hyperloglog)
                  </td>
                </tr>
                <tr>
                  <td>UCOUNT_ABS</td>
                  <td>unique counting in absolute manner</td>
                </tr>
                <tr>
                  <td>AVG</td>
                  <td>average of any attribute</td>
                </tr>
                <tr>
                  <td>MIN</td>
                  <td>min value</td>
                </tr>
                <tr>
                  <td>MAX</td>
                  <td>max value</td>
                </tr>
                <tr>
                  <td>STD</td>
                  <td>standard deviation</td>
                </tr>
                <tr>
                  <td>SUM</td>
                  <td>sum</td>
                </tr>
                <tr>
                  <td>EXKURT</td>
                  <td>ex-kurtosis</td>
                </tr>
                <tr>
                  <td>SKEW</td>
                  <td>skewness</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2>Functional properties</h2>
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <th>Query</th>
                  <th>Description</th>
                </tr>
                <tr>
                  <td>SYMM</td>
                  <td>symmetric relations</td>
                </tr>
                <tr>
                  <td>ASYMM</td>
                  <td>asymmetric relations</td>
                </tr>
                <tr>
                  <td>DISTINCT</td>
                  <td>To get results for distinct key</td>
                </tr>
                <tr>
                  <td>UNIQUE</td>
                  <td>unique pair wise [ sub and obj pair, for their ids ]</td>
                </tr>
                <tr>
                  <td>UNIQUE_IN_CONTEXT</td>
                  <td>unique for given sub and obj, based on selection</td>
                </tr>
                <tr>
                  <td>UNIQUE_SELECT</td>
                  <td>unique for all selected attributes, taken together</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2>Graph algos</h2>
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <th>Query</th>
                  <th>Description</th>
                </tr>
                <tr>
                  <td>ALL_PATH</td>
                  <td>all paths between any two given nodes</td>
                </tr>
                <tr>
                  <td>SHORT_PATH</td>
                  <td>shortest path between any two given nodes</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2>Set operations</h2>
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <th
                    style={{
                      width: "20%",
                    }}
                  >
                    Query
                  </th>
                  <th
                    style={{
                      width: "45%",
                    }}
                  >
                    Description
                  </th>
                  <th
                    style={{
                      width: "35%",
                    }}
                  >
                    Venn diagram
                  </th>
                </tr>
                <tr>
                  <td>ADD</td>
                  <td>adding two or more sets ( UNION )</td>
                  <td>
                    <Image
                      src="https://bangdb.com/wp-content/uploads/2023/01/a.svg"
                      alt="add (union)"
                      width="80"
                      height="80"
                    />
                  </td>
                </tr>
                <tr>
                  <td>SUBTRACT</td>
                  <td>difference of two sets ( DIFFERENCE )</td>
                  <td>
                    <Image
                      src="https://bangdb.com/wp-content/uploads/2023/01/sub.svg"
                      alt="substract"
                      width="80"
                      height="80"
                    />
                  </td>
                </tr>
                <tr>
                  <td>DIFFERENCE</td>
                  <td>difference of sets</td>
                  <td>
                    <Image
                      src="https://bangdb.com/wp-content/uploads/2023/01/Difference-query.svg"
                      alt="difference"
                      width="80"
                      height="80"
                    />
                  </td>
                </tr>
                <tr>
                  <td>JOIN or CROSS</td>
                  <td>join product of two sets ( INTERSECT )</td>
                  <td>
                    <Image
                      src="https://bangdb.com/wp-content/uploads/2023/01/join.svg"
                      alt="difference"
                      width="80"
                      height="80"
                    />
                  </td>
                </tr>
                <tr>
                  <td>LEFT_JOIN</td>
                  <td>left set and values of joined part of second set</td>
                  <td>
                    <Image
                      src="https://bangdb.com/wp-content/uploads/2023/01/left_join.svg"
                      alt="left-join"
                      width="80"
                      height="80"
                    />
                  </td>
                </tr>
                <tr>
                  <td>RIGHT_JOIN</td>
                  <td>right set and values of joined part of first set</td>
                  <td>
                    <Image
                      src="https://bangdb.com/wp-content/uploads/2023/01/right_join.svg"
                      alt="right-join"
                      width="80"
                      height="80"
                    />
                  </td>
                </tr>
                <tr>
                  <td>APPEND</td>
                  <td>append two sets row wise</td>
                  <td>
                    <Image
                      src="https://bangdb.com/wp-content/uploads/2023/01/a.svg"
                      alt="append"
                      width="80"
                      height="80"
                    />
                  </td>
                </tr>
                <tr>
                  <td>PIPE</td>
                  <td>
                    for piping (or sending) the first list to the second query
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2>Data Science</h2>
          <div className="table-container">
            <table>
              <tbody>
                <tr>
                  <th>Query</th>
                  <th>Description</th>
                </tr>
                <tr>
                  <td>SIMILARITY</td>
                  <td>
                    compute similarities among set of nodes based on various
                    data
                  </td>
                </tr>
                <tr>
                  <td>CLUSTER</td>
                  <td>to find and natural clusters</td>
                </tr>
                <tr>
                  <td>CENTRALITY</td>
                  <td>finding the node centrality</td>
                </tr>
                <tr>
                  <td>COMMUNITY_DETECTION</td>
                  <td>for detecting several communities within graph</td>
                </tr>
                <tr>
                  <td>GROUPS</td>
                  <td>finding several groups given properties</td>
                </tr>
                <tr>
                  <td>ML_ALGO</td>
                  <td>
                    this brings entire ML algorithms to the Graph, model name is
                    supplied as well
                  </td>
                </tr>
                <tr>
                  <td>Deep Learning*</td>
                  <td>DNN, RNN, ResNet. Embeddable within graph</td>
                </tr>
                <tr>
                  <td>Information Extraction*</td>
                  <td>Ontologies or triple generation through IE</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Data is processed from left to right. There could be several triples
            chained to form a query, like.
          </p>
          <p>S1=&gt;()-[]-&gt;()-[]-&gt;() …</p>
          <p>
            Here in the above example, the first triple will intermediate-output
            a set of results, these intermediate-output will become input from
            subsequent processing etc. Therefore, it will keep evaluating from
            left to right using the intermediate results. The subject for
            subsequent chained query will be the intermediate result of the
            previous triple and so on.
          </p>
          <p>
            In some cases, we would like to keep subject of the first triple as
            subject for the subsequent triple, then we can use the structure
            like following. This in contrast with the chain query, where object
            of the first triple becomes the subject of the second one and so on
          </p>
          <p>S2=&gt;[S1=&gt;()-[]-&gt;()]-[]-&gt;() …</p>
          <p>We will see the examples for these in subsequent sections.</p>
          <h2>Merger nodes (deep merge)</h2>
          <p>
            MERGE function allows us to merge two nodes deeply. Which means all
            the relationships (in or out) and properties of relationships,
            properties on node are all merged.
          </p>
          <p>
            Secondary node is finally deleted and all relationships pointing
            towards and out of secondary nodes are also moved completely.
          </p>
          <p>
            Primary node is the node in which the secondary node will get
            merged. Arrow (&apos;&lt;-&apos;) points towards primary node.
          </p>
          <p>To merge node (label:id2) into (label:id1)</p>
          <HighlightedJava code={`MERGE (label:id1)<-[*]-(label:id2)`} />
          <p>To merge node (label:id1) into (label:id2)</p>
          <HighlightedJava code={`MERGE (label:id1)-[*]->(label:id2)`} />
          <p>
            <strong>&apos;*&apos;</strong> could be replaced with{" "}
            <strong>;</strong>
          </p>
          <p>
            KEEP_PRIM_PROP = same as &apos;*&apos;, means keep the property of
            primary node in case of duplicate key
          </p>
          <p>KEEP_SEC_PROP = keep secondary node property in case of clash</p>
          <p>
            KEEP_BOTH = keep duplicate properties (both primary and secondary)
          </p>
          <h2>Delete node</h2>
          <p>
            DELETE function allows us to delete a node deeply. Which means all
            the relationships (in or out) and properties of relationships,
            properties on node are all deleted.
          </p>
          <p>To delete node (label:id)</p>
          <HighlightedJava code={`DELETE (label:id)`} />
          <p>
            We will use BangDB CLI to perform these exercises. But before we go
            there, let&apos;s see how BangDB Cypher is different from the
            original Cypher.
          </p>

          <p>
            Checkout a sample use cases{" "}
            <Link
              href={`https://github.com/sachin-sinha/BangDB/tree/master/usecases/call_graph`}
              className="external"
              target="_blank"
            >
              here
            </Link>{" "}
            to learn bit more about Graph and Cypher in BangDB.
          </p>
          <p>
            Checkout the graph document{" "}
            <Link
              target="_blank"
              href={`https://bangdb.com/wp-content/uploads/2022/10/Graph-and-Cypher-BangDB-2.0.pdf`}
            >
              here
            </Link>
            .
          </p>
        </div>
        <NextPageButton />
      </DocArticle>
    </React.Fragment>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { graphSidebar: true },
  };
}
