import React from "react";
import Head from "next/head";
import Image from "next/image";
import Breadcrumb from "../../components/Breadcrumb";
import HighlightedCpp from "../../components/HighlightedCpp";
import NextPageButton from "../../components/NextPageButton/NextPageButton";

export default function ComplexEventProcessing() {
  return (
    <React.Fragment>
      <Head>
        <title>Complex Event Processing - BangDB</title>
        <meta
          name="description"
          content="Complex Event Processing (CEP) requires stream processing but adds more complex tasks for finding interesting events."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Complex Event Processing - BangDB" />
        <meta
          property="og:description"
          content="Complex Event Processing (CEP) requires stream processing but adds more complex tasks for finding interesting events."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Complex Event Processing - BangDB"
        />
        <meta
          name="twitter:description"
          content="Complex Event Processing (CEP) requires stream processing but adds more complex tasks for finding interesting events."
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
              <Breadcrumb
                text="Complex Event Processing"
                url="/complex-event-processing"
              />
              <h1 className="article-title">Complex Event Processing</h1>
              <div className="article-body">
                <p>
                  With more and more data being generated by devices, the
                  emphasis on real-time event processing in streaming manner is
                  only increasing. A large class of both existing and emerging
                  applications can best be described as event monitoring
                  applications. These include supply chain management for RFID
                  tagged products, real-time stock trading, monitoring of large
                  computing systems or applications to detect malfunctioning or
                  attacks, and monitoring of sensor networks, devices for IOT
                  and surveillances etc.
                </p>
                <figure style={{ width: "50%", margin: "0 auto" }}>
                  <Image
                    alt="BangDB CEP (Complex Event Processing)"
                    src="https://bangdb.com/wp-content/uploads/2021/12/BangDb_cep.png"
                    width={317}
                    height={118}
                  />
                </figure>
                <p>
                  Event processing requires stream processing but adds more
                  complex tasks for finding interesting events. State based,
                  windowed, concurrent and low latency queries are important for
                  event processing, which is very hard for typical stream
                  processing systems and almost not feasible for other database
                  systems.
                </p>
                <p>Let&apos;s break it down for clarity.</p>
                <h2>State based</h2>
                <p>
                  Most of the queries require the system to maintain the states
                  (persists or store series of interesting events) for some
                  period of time. Hence CEP queries are not single point based
                  query but instead it continuously runs on a moving set of
                  events.
                </p>
                <h2>Windowed</h2>
                <p>
                  Complex Event Processing (CEP) tries to find interesting set
                  of events which occur over a series of events and also it
                  tries to do so continuously. The event may trigger the pattern
                  or not based on the actual set of data, but if it doesn&apos;t
                  then the previous states for the events should be cleared.
                  Also it is a continuous process which keeps moving event by
                  event. Hence we need a sliding window concept to handle such
                  scenario.
                </p>
                <h2>Concurrent queries</h2>
                <p>
                  Most of the Complex Event Processing (CEP) systems registers
                  large number of such queries and all of these should run in
                  parallel to find different patterns for the streaming set of
                  events. This means system should be able to process large of
                  amount of data, in many different ways at the same time.
                </p>
                <h2>Low latency</h2>
                <p>
                  Most of Complex Event Processing (CEP) queries have extremely
                  low latency requirements therefore most of the processing
                  happen before data hits the disk or is persisted. This is
                  quite opposite to Map-Reduce or typical SQL queries. Here the
                  processing, querying, joining with other previous events etc.
                  all happen before even is persisted. High throughput, low
                  latency, concurrent use of all CPUs, optimal memory management
                  etc. are few of the requirements for running efficient CEP
                  queries.
                </p>
                <p>
                  BangDB&apos;s Complex Event Processing (CEP) is very powerful
                  and high performance compared to many other in the market.
                  BangDB has written CEP module within the Stream Processing
                  system. It is a lot more practical, high performance and
                  productive implementation of CEP than to serve as theoretical
                  reference.
                </p>
                <p>
                  BangDB leverages continuous sliding window to keep the events,
                  buffer pool/ page cache for keeping the required data pages in
                  the memory backed by the file system, IO Layer to optimize
                  disk read/write IO for high performance, fully concurrent db
                  operations and several structures to correlate, join, filter
                  and manage the events as required by the query. And it does
                  all of these before events are written to the disk. Further,
                  BangDB can take actions as well when a event pattern is
                  identified, thereby making the entire system automated.
                </p>
                <h2>CEP Query Model</h2>
                <p>
                  Complex Event Processing (CEP) and stream processing for
                  BangDB uses JSON as language for configuration and query. It
                  makes things lot more simpler for users/developers to define
                  various configurations, processing logic and query. At the
                  same time, it remains flexible, extensible easy to understand
                  format. An example of CEP query. The query does following.
                </p>
                <p>
                  Find the event where speed of a particular car is more than
                  50km/h, continuously for 3 sensor events in less than 1000
                  second within the temporal locality of 3000 sec with the speed
                  continuously increasing, and send such events to a stream
                  &quot;high_speed_inc_pattern&quot;.
                </p>
                <p>
                  This is a difficult query where, we need to run the continuous
                  query for all the cars all time to find the pattern. Here is
                  the query for the same, as you see it&apos;s self-explanatory.
                </p>
                <HighlightedCpp
                  code={`{

"name":"cep1",

"type":1,

"tloc":3000,

"ratr":[

   "speed",

   "car"

],

"rstm":"sensor",

"iatr":[

   "speed",

   "car"

],

"fqry":{

   "type":1,

   "name":"{\"qtype\":2,\"query\":[{\"key\":\"speed\",\"cmp_op\":0,\"val\":50}]}"

},

"jqry":{

   "cond":[

      "speed",

      "carid"

   ],

   "opid":11,

   "args":[

      "speed",

      "carid"

   ],

   "cmp":[

      "LT",

      "EQ"

   ]

},

"cond":[

   {

      "name":"NUMT",

      "val":3,

      "opid":1

   },

   {

      "name":"DUR",

      "val":1000,

      "opid":0

   }

],

"ostm":"high_speed_inc_pattern"

}`}
                />
              </div>
            </article>
            <NextPageButton />
          </div>
        </main>
      </section>
    </React.Fragment>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { streamSidebar: true },
  };
}
