import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "../../../components/Breadcrumb";
import NextPageButton from "../../../components/NextPageButton/NextPageButton";

export default function WhatsBangDB() {
  // Use useEffect for client-side only code
  useEffect(() => {
    console.log("Component mounted on the client");
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>What&apos;s BangDB?</title>
        <meta
          name="description"
          content="What's BangDB? The motivation behind BangDB."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="What's BangDB?" />
        <meta
          property="og:description"
          content="Motivation - Why BangDB? The motivation behind BangDB."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="What's BangDB?" />
        <meta
          name="twitter:description"
          content="Motivation - Why BangDB? The motivation behind BangDB."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <section className="main-container">
        <main className="container">
          <div className="article-content">
            <article className="article">
              <Breadcrumb text="Introduction" url="/bangdb-introduction" />
              <h1 className="article-title">What&apos;s BangDB?</h1>
              <div className="article-body">
                <p>
                  BangDB is a converged multi-model and multi-flavor database
                  platform for building modern applications which require
                  handling different kinds of data and requirements in a single
                  space. BangDB has been created from the ground up, written
                  from scratch to align with the data trend fully and make it
                  ready for future needs as well. Some of the key design goals
                  of the database were established before the development phase.
                </p>

                <h2>Key Design Goals</h2>
                <ul>
                  <li>
                    Align with the upcoming data trend and build a future-ready
                    database for creating solutions.
                  </li>
                  <li>
                    Store, query, link, and join different kinds of data in the
                    same database in a very simple manner.
                  </li>
                  <li>
                    Stream and event processing as part of the ingestion
                    construct for continuous intelligence.
                  </li>
                  <li>
                    Graph should be linked with the different aspects of data
                    processing to leverage context.
                  </li>
                  <li>
                    AI should be integrated with data such that implicit and
                    autoML are part of the operation.
                  </li>
                  <li>
                    High performance, full read/write concurrency, best hardware
                    utilization, and avoid resource bloating.
                  </li>
                  <li>
                    Break in-memory-only concept - Durability and overflow to
                    disk with predictable performance.
                  </li>
                  <li>
                    Event-driven design for handling tens of thousands of
                    concurrent connections on a single server.
                  </li>
                  <li>
                    Database should be deployable within micro-processors,
                    commodity hardware, or in the cloud.
                  </li>
                  <li>
                    Provide a no-code platform to users on the cloud to let them
                    focus on use cases and their business.
                  </li>
                </ul>

                <p>
                  And the need for several core database-level features and
                  more…
                </p>

                <ul>
                  <li>
                    Need to have a buffer pool and page cache - to get total
                    control over every single byte.
                  </li>
                  <li>
                    Should leverage the server's infrastructure fully - read and
                    write both fully concurrent.
                  </li>
                  <li>
                    Transaction (OCC) for data consistency - for selected data
                    sets.
                  </li>
                  <li>
                    Write-ahead logging for data durability, crash recovery, and
                    backup.
                  </li>
                  <li>
                    Auto-balancing and managed cluster with cluster-aware
                    replica.
                  </li>
                  <li>
                    Every instance to be a TCP and HTTP(S) server - no proxy or
                    another layer in front.
                  </li>
                  <li>
                    Consistent access model across different deployments and all
                    connected - embedded, cluster.
                  </li>
                  <li>
                    Slotted aggregations, stats for ZERO post-processing for
                    stream-related processing and queries.
                  </li>
                  <li>
                    All the different elements should be able to run in a single
                    process - This is a must-have.
                  </li>
                  <li>
                    Connect to the database by any means - clients, CLI, REST
                    API.
                  </li>
                </ul>

                <p>
                  The above goals are quite comprehensive and required a fresh
                  thought, innovative approach, and a shift in the way NoSQLs
                  were designed and implemented.
                </p>

                <h2>Need for Convergence</h2>
                <p>
                  It becomes obvious from the problem descriptions and
                  challenges that the problem space, due to the current data
                  trend, is converging too many requirements into a singular
                  space. For example, dealing with multiple kinds of data,
                  stream processing with graph linking and storage, AI as part
                  of query and ETL, etc. Therefore, to counter this convergence
                  at the problem space, we must also converge at the solution
                  level. And if we can do this, then it will be a
                  straightforward task to deal with the emerging and current use
                  cases properly.
                </p>

                <div className="flex items-center gap-x-8">
                  <div>
                    <p>
                      The problem space has a convergence of varied requirements
                      at the core.
                    </p>
                    <p>
                      We must converge the solution space to counter the same.
                    </p>
                    <p>
                      Converge at the system level, data level, and deployment
                      level. Converge to create a unit of compute that scales
                      linearly.
                    </p>
                  </div>
                  <Image
                    src="/assets/about/14.png" // Ensure this path is correct
                    alt="Converged Database - BangDB"
                    width={350}
                    height={470}
                  />
                </div>

                <h2>Benefits of Convergence</h2>
                <Image
                  src="/assets/about/15.png" // Ensure this path is correct
                  alt="Benefits of Convergence - BangDB"
                  width={493}
                  height={470}
                />

                <h2>Architectural Shift</h2>
                <p>
                  The most important decision was to move away from the
                  traditional 3-tier or n-tier model towards creating a unit of
                  compute by converging the elements and letting that unit of
                  compute scale linearly. One of the biggest issues with the
                  model where we split the system into multiple parts and
                  distribute those parts over the network is that we finally
                  combine the results to throw the output to the client.
                </p>
                <p>
                  This is a typical micro-service-oriented approach, which
                  doesn&apos;t fit well with a system like this. This has
                  several issues, which are discussed above in detail. But apart
                  from the mentioned issues like it&apos;s a costly affair,
                  resource-intensive approach, takes too much time to build and
                  ship, the app layer becomes brittle leading to a huge loss of
                  the team&apos;s productivity, etc., there are core issues as
                  well with this approach.
                </p>
                <p>
                  Siloed (semi-siloed) architecture forces too many network hops
                  along with too many copies of data.
                  <ul>
                    <li>
                      The same data gets copied multiple times within and across
                      silos.
                    </li>
                    <li>
                      Several network hops across the layers to process a single
                      event/data.
                    </li>
                  </ul>
                  With this siloed approach, performance takes a beating,
                  efficiency goes down, network bandwidth reduces, and overall
                  cost also goes up.
                </p>

                <div className="flex items-center justify-center">
                  <Image
                    src="/assets/about/16.png" // Ensure this path is correct
                    alt="Architectural Shift - BangDB"
                    width={493}
                    height={470}
                  />
                </div>

                <p>
                  With convergence, we avoid these issues as well. Once data
                  reaches a node, all computations happen there. This also
                  allows us to handle way more client requests for the same
                  configuration, which reduces cost, complexity, and improves
                  performance. Managing such a converged system is easy, and it
                  doesn&apos;t even require a dedicated set of resources for the
                  same.
                </p>

                <h2>Event-Driven (SEDA)</h2>
                <p>
                  Staged Event-Driven Architecture (SEDA) is at the core to meet
                  a big part of the architectural constraint. Basically, we deal
                  with FSM (finite state machine) within the unit of compute for
                  managing the subsystems with boundaries. The entire
                  structuring of the stages within the node is also
                  configurable. We can create different structures for stages
                  and how they would work together based on requirements. Even
                  the worker-level details are configurable. Which means each
                  node type could be configured for our needs. BangDB
                  pre-configures all these, which works best in most cases.
                </p>

                <div className="flex items-center justify-center">
                  <Image
                    src="/assets/about/17.png" // Ensure this path is correct
                    alt="Event-Driven (SEDA) - BangDB"
                    width={493}
                    height={470}
                  />
                </div>

                <p>
                  There are more than 100 configurations that could be tweaked
                  as needed. But 80-90% are not required to be changed most of
                  the time as they work best in most regular cases.
                </p>

                <h2>Deployment Flavors</h2>
                <p>
                  BangDB comes in different flavors in which it could be
                  deployed or used. BangDB can be deployed within a
                  microprocessor. This is required from an IoT perspective. To
                  truly manage edge computing, the system should be within
                  devices as well.
                </p>
                <p>
                  Then BangDB cluster can be deployed in client/server models
                  for the majority of use cases with replicas attached. BangDB
                  can be distributed further by creating a unit cluster
                  consisting of Core database, training, resource server, and
                  user service. This suits most of the use cases and
                  requirements.
                </p>
                <p>
                  Finally, BangDB can be deployed in P2P mode as well, where
                  there is no master or slave. This is an auto-managed
                  distributed ring where nodes join or leave at will, and
                  distribution is managed on its own. BangDB is going to launch
                  this version by Sep 2024. More on this when we launch.
                </p>

                <div className="flex items-center justify-center">
                  <img
                    src="/assets/about/18.png" // Ensure this path is correct
                    alt="Deployment Flavors - BangDB"
                    width={450}
                    height={470}
                  />
                </div>
                <NextPageButton />
              </div>
            </article>
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { aboutSidebar: true },
  };
}
