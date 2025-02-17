import React from "react";
import Head from "next/head";
import Breadcrumb from "../../components/Breadcrumb";
import DocArticle from "../../components/DocArticle";

export default function RecommendationSystemOverview() {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Recommendation System</title>
        <meta
          name="description"
          content="Overview of the Recommendation System - A platform offering financial, insurance, and healthcare products with personalized recommendations."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Solution Overview - Recommendation System"
        />
        <meta
          property="og:description"
          content="Overview of the Recommendation System - A platform offering financial, insurance, and healthcare products with personalized recommendations."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Solution Overview - Recommendation System"
        />
        <meta
          name="twitter:description"
          content="Overview of the Recommendation System - A platform offering financial, insurance, and healthcare products with personalized recommendations."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Recommendation System</h1>
        <div className="article-body">
          <h2>Introduction</h2>
          <p>
            Recommendation System is a platform which offers various financial,
            insurance and healthcare/wellness products and solutions to the
            customers/users. The discussion in the document is limited to the
            recommendation system which will help the Recommendation System in
            serving customers and users in much better/personalized ways. It
            will also aid the platform in achieving continuously improving and
            lasting relationships with the customers
          </p>
          <h2>The goal of the system is as follow:</h2>
          <ul>
            <li>
              • Recommend one or more new/appropriate product/solutions to the
              customers, largely based on customers’ profile, behavior, trends,
              tendencies, desires, and discovery. At the same time, it should
              also leverage entities, their relationships, similarities within
              the context.
            </li>
            <li>
              It should use Graph, ML, CEP, and continuous stream data analysis
              techniques for the recommendation purposes.
            </li>
            <li>
              Should be the unified data source for customer profile, behavior,
              and other details and allow queries on the same in different ways.
            </li>
            <li>
              Should be able to assess, learn and improve using past data and
              outcomes.
            </li>
            <li>
              It should be an independent scalable service which will cater to
              the Recommendation System platform and other applications/services
              as required.
            </li>
            <li>
              It should manage the data itself for storage, computations,
              recommendations, query, and analysis purposes.
            </li>
            <li>
              It should allow working with the data that is made available to
              it. And at the same time, it allows future additions/editions to
              be ingested and processed smoothly (largely autonomous).
            </li>
            <li>
              It should be configurable as much as possible; such that different
              processing logic could be added/edited as and when necessary.
            </li>
            <li>
              It should be linearly scalable to deliver the expected level of
              performance.
            </li>
            <li>It can be deployed on cloud or on-prem as desired.</li>
            <li>
              The entire project is quite large in scope and hence we should be
              able to add and release in a staggered manner over a period.
            </li>
          </ul>
          <p>
            The backbone of the recommendation system is in the understanding of
            the customers. And based on this we must construct a set of
            mechanisms to serve them better. There are some basic unit-level
            constructs that we define which form the base for rest of the
            discussion
          </p>
          <ul>
            <li>Customer profile</li>
            <li>Customer behavior</li>
          </ul>
          <p>
            There are many other entities here, but the majority of computations
            happen on these two items.
          </p>
          <h2>Customer profile </h2>
          <p>
            The following three broad groups would be created using customer
            profiles.
          </p>
          <ul>
            <li>Demographic</li>
            <li>Geographic</li>
            <li>Psychographic</li>
          </ul>
          <p>
            Based on these broad groups, we will create several segments that
            could be used at run time and/or for other processing
          </p>
          <h2>Segments for customer profile groups based on </h2>
          <ul>
            <li>Age</li>
            <li>Family structure</li>
            <li>Monthly Income</li>
            <li>Family life cycle</li>
            <li>Geo-location</li>
            <li>Interests/hobbies</li>
          </ul>

          <h2>Customer Behavior</h2>
          <p>
            Following data would be used for behavior computations. We will
            maintain an entity table for the same as well for ready usage of the
            continuous pre-aggregated data. Most of these data will be part of
            the Graph itself with different set of relationships between the
            nodes
          </p>
          <ul>
            <li>Product (APP) usage history</li>
            <li>Purchase history</li>
          </ul>
          <h2>Patterns for customer behaviors for various computations</h2>
          <ul>
            <li>Engagement</li>
            <li>RFM</li>
            <li>Survey</li>
            <li>Loyalty Index</li>
            <li>Seasonality</li>
            <li>Lifetime value</li>
            <li>Nurture index</li>
          </ul>
          <h2>Structuring of data</h2>
          <p>
            We are basically dealing with several entities and some interactions
            between those entities with different properties. While recommending
            the products or solutions, we must ensure that we improve the
            customer’s/user’s experience. Therefore, it’s imperative that we
            have a solid understanding of not just the entities but also the
            context in which they exist. Hence when it comes to storing the
            data, we need to ensure that
          </p>
          <ul>
            <li>
              We have the context also stored in an efficient manner along with
              entities [ isolated non-related structure is not sufficient, need
              relations]
            </li>
            <li>
              We need relationships or linking of entities but at the same time
              we need to have scalable and flexible model [ Can’t use RDMBS,
              need to break the cold coupling]
            </li>
            <li>
              We should be able to add as many links (relations) as required
              without changing anything which is existing
            </li>
            <li>
              We should be able to query the database using these relationships
              along with various other constraints related to entities and
              relations properties
            </li>
            <li>
              We should be able to pre-compute several properties and attach
              these entities so that we could query and use them at run time
            </li>
            <li>
              The structure should keep evolving as more and more entities and
              relations arrives
            </li>
            <li>
              We should be able to find related entities given a set of entities
              and set of relationships
            </li>
            <li>
              we should be able to find similarities between any given set of
              entities and use that for recommendation
            </li>
            <li>
              We should be able to discover link two isolated entities in an
              efficient manner
            </li>
            <li>
              We should be able to find the complex symmetry or asymmetry
              between given set of entities
            </li>
            <li>
              We should be able to do time series data ingestion and processing
              for continuously update and evolve the structure and keep
              continuous statistics / aggregation happening for run time
              efficiency
            </li>
            <li>
              We should be able to maintain and continuously update the
              long-term data for entities such that these could be leveraged at
              run time
            </li>
            <li>
              We should be able to train models on the data existing within the
              structure such that the models keep updating itself in continual
              manner and update the existing structure automatically.
            </li>
          </ul>
          <ul>
            <li>
              Customer Profile - Demographic, Geographic, and Psychographic
              segmentation.
            </li>
            <li>
              Customer Behavior - Purchase history, engagement levels, and
              loyalty metrics.
            </li>
            <li>
              Graph-based Structuring - Leveraging entity relationships for
              better recommendations.
            </li>
            <li>
              Continuous Event Processing - Real-time data transformation and
              enrichment.
            </li>
            <li>
              Machine Learning Models - Clustering, classification, and
              collaborative filtering.
            </li>
          </ul>
          <p>Therefore, we will have to use a combination of the following.</p>
          <ul>
            <li>
              Graph store for entities and relationships along with various
              other defined or computed properties along with ML integration for
              prediction (batch or runtime)
            </li>
            <li>
              Stream processing for ETL, continuous aggregation, running
              statistics, complex event processing, data-enriching, and
              long-term entity based pre-aggregated data
            </li>
          </ul>
          <h2>Graph Store</h2>
          <p>
            The graph store will have entities and they will be connected
            through relationships. Entities – immutable id, with
            flexible/updateable properties Relations – fluid, flexible,
            directional, dynamic
          </p>
          <p>
            There are two basic aspects to the graph structure, raw data graph
            and computed data graph
          </p>
          <ul>
            <li>
              Basic entities and its relations with several other dissimilar
              existing entities
            </li>
            <li>
              Entities and relations with other set of other entities with
              existing relations
            </li>
            <li>Entities and relations with several computed entities</li>
            <li>
              Entities and relations with other set of entities with computed
              relations
            </li>
            <li>
              Entities and their relations with similar entities with
              appropriate strengths
            </li>
            <li>
              Entities and their groupings based on many different sets of
              dimensions
            </li>
            <li>Entities and the clusters</li>
          </ul>
          <p>
            While (a) & (b) are mostly driven by the input data (the raw data).
            Whereas (c), (d), (e) etc. are data enriched by several mechanisms,
            like “catr”, “join” etc. by event processing, clustering,
            similarity, common groupings, community detection through label
            propagation, path finding, centrality etc. in graph processing along
            with bringing the whole set of ML algos to the Graph and Event
            processing as required.
          </p>
          <p>
            Let’s look at the graph structure (subject to change (most likely it
            will by 20-30%)) which depicts largely (a) & (b) as defined above
          </p>
          <img
            src="/assets/docs/graph.png"
            alt="Graph
              Analysis"
            style={{ width: "100%", height: "auto" }}
          />
          <h2>
            ETL, running stats, continuous analysis using “Event processing”
          </h2>
          <p>
            One of the most difficult and heavy tasks for such processing is ETL
            and it’s widely recognized that sometimes we spend the majority of
            our time in ETL to try to get it right, otherwise a heavy penalty
            awaits if even a minor thing goes wrong at the beginning. BangDB
            avoids this process to great extent by implementing continuous data
            ingestion mechanism along with processing that could be done to
            extract and transform what we need at any given time. Here are some
            of the benefits of using this for the project
          </p>
          <h2>Data Processing and Analysis</h2>
          <p>
            The system integrates Graph Store and Stream Processing for
            efficient data handling. Graph structures are enriched with computed
            relationships and analyzed using ML techniques like clustering,
            association rule mining, and collaborative filtering.
          </p>
          <ul>
            <li>
              Load data in batch or event manner, as it is, without requiring
              changing anything in the data.
            </li>
            <li>
              Transform the data using schema config (“catr”, computed
              attribute). There are dozens of built-in default functions to
              leverage for such transformation. Further we can write our own
              UDFs for custom transformations as required. Going beyond, we can
              simply attach an ML model to add predicted value as part of the
              event
            </li>
            <li>
              We can run CEP to find interesting patterns (in absolute manner)
              and send the data to another stream, graph as needed. This hugely
              enriches the data structure.
            </li>
            <li>
              We can join, refer, and filter events based on queries,
              conditions, and state to enrich the data structure.
            </li>
            <li>
              Continuously update the underlying Graph Store as data arrives.
              Since we have plenty of methods to add/transform the data within
              the event processing framework, the graph receives a lot more
              enriched data along with raw events which makes the structure way
              more valuable.
            </li>
            <li>
              Running statistics could be simply used for different attributes
              and aggregated over different dimensions for as low as second
              granularity (to min, hour, and any length of time). These can be
              further rolled up as we need and used for various queries. Note
              that, doing this on a normal database is a super costly affair,
              but it’s extremely fast and efficient due to continuous processing
              vs batch processing (SQL or MapR) .
            </li>
            <li>
              Stream maintains even entity table for long term aggregated data
              along many different dimensions which are readily available for
              consumption, which otherwise takes hours and days to compute .
            </li>
            <li>
              Time-series analysis of data is natural and inbuilt by default,
              and platform supports taking auto actions as configured
            </li>
          </ul>
          <h2>Concepts and algorithm</h2>
          <h3>
            1. Entities cluster Analysis within Graph and similarity scores.
            This is template for similarity based on feature set X
          </h3>
          <ul>
            <li>
              The entities along with relationships and properties in many
              different combinations will be used to find out the clusters
              within the data using K-means
            </li>
            <li>
              Then further similarity scores will be computed based on various
              assigned centroids and distance from them, frequency, and
              aggregations of various features along with few configurable
              inputs
            </li>
            <li>
              These scores would further be stored in the graph for run time
              usage for various computations
            </li>
            <li>
              The entire processes would be continual in nature, and it will
              self-adjust the scores as more data arrives
            </li>
            <img
              src="/assets/docs/algo1.png"
              alt="algo
              Analysis"
              style={{ width: "100%", height: "auto" }}
            />
          </ul>
          <h3>2. Association rule mining using natural Graph properties</h3>
          <ul>
            <li>
              Association rule mining is used to identify the relationships
              among the set of items/entities within the database. These
              associations are based on cooccurrence of the data items.
              Therefore, main purpose of the association rules is to find out
              the synchronous relationships by analyzing the data and use this
              as reference during decision making
            </li>
            <li>
              Collection of items, A =&#123;a1, a2, &#8230;&#125; and group of
              transactions T = &#123;t1, t2, &#8230;&#125; (Set of items) would
              be stored in the graph as entities and relations such that the
              value Conf is computed and stored in the graph for the purpose of
              finding if X is purchased, then Y can also be purchased with the
              confidence Conf. The confidence is a measure of the number of
              evidence of the events when X is bought then Y is also bought.
            </li>
            <li>
              The scores/Conf will be stored in the graph itself such that these
              can be used at run time for decision making. Again, this will also
              be self-maintaining as we will schedule the computations for
              re-eval and update
            </li>
            <li>
              Further we will attach model trained using Apriori algorithm
              within the graph for run time predictions
            </li>
            <img
              src="/assets/docs/algo2.png"
              alt="Graph
              Analysis"
              style={{ width: "100%", height: "auto" }}
            />
          </ul>
          <h3>3. Customer segmentation based on cluster analysis</h3>
          <ul>
            <li>
              Customer segmentation is the process of grouping customers
              together based on common characteristics. The natural graph
              structuring will provide a much richer feature set for the
              training purposes where the entire effort of feature selection,
              cleaning, correlation, etc. will be avoided. Further models could
              be trained automatically with defined frequencies and linked
              within the graph for run time predictions as well
            </li>
            <li>
              Graph inbuilt clustering mechanisms, groups identifications should
              be leveraged for this as these are evolving continuously and very
              fast in nature. We can also train ML models explicitly using the
              set of the features already pre-baked in the graph .
            </li>
            <li>
              For recommendation engine_1 we are planning to cluster users based
              on their Language, Gender, Age, City, State, dependency, Marriage
              status, and education. The result of clustering will be given to
              the collaborative filtering recommendation system.
            </li>
            <li>
              Mix of Centroid-based K-means Clustering, Centroid-based
              Mini-Batch K-means Clustering and Distribution-based Gaussian
              mixture model will be used
            </li>
            <img
              src="/assets/docs/algo3.png"
              alt="Cluster Analysis"
              style={{ width: "100%", height: "auto" }}
            />
          </ul>
          <h2>
            4. Collaborative filtering for set of features which has fixed and
            limited set of values to identify similar users – coupled with graph
            it makes it very effective
          </h2>
          <ul>
            <li>
              Collaborative filtering filters information by using the
              interactions and data collected by the system from other users.
              It's based on the idea that people like things similar to other
              things they like, and things that are liked by other people with
              similar taste. Graph query will be used for the larger purposes
              however for certain cases we will also train models and use that
              for finding the similar profiles
            </li>
            <li>
              The Collaborative filter technique works by building a matrix for
              attributes of the user. The matrix is then used to match users
              with relevant interests and preferences by calculating
              similarities between user profiles. A group of such users is
              called a neighbourhood. A user receives recommendations for
              products that have been brought by the neighbourhood.
            </li>
            <li>
              Without the presence of graphs, collaborative based recommenders
              take time to learn about new users and their relationships with
              each other or with other entities. Graph provides the data in
              pre-baked manner for it to be efficient from the start
            </li>
          </ul>
          <h3>5. Classification model</h3>
          <ul>
            <li>
              For Loan recommendation we will be using a Classification model to
              predict the probability of a customer to apply for a loan. They
              will recommend a loan based on the probability value from the
              model.
            </li>
            <li>
              For the dataset we know that approx. 1.5 % of the customers apply
              for a loan. The dataset is small and highly imbalanced. Therefore,
              for the classification model will use
            </li>
            <li>
              Logistic Regression - simple and efficient algorithm. Provides
              probability score for observations
            </li>
            <li>
              Naive Bayes - performs better on less training data, very fast
            </li>
            <li>SVM - can work well on small data and very efficient</li>
            <li>Decision Tree</li>
          </ul>
          <h3>6. Popularity based / Trend based</h3>
          <ul>
            <li>
              It is a type of recommendation system which works on the principle
              of popularity and or anything which is in trend. These systems
              check about the products which are in trend or are most popular
              among the users and directly recommend them.
            </li>
            <li>
              With a graph and entity table in stream, we can provide the list
              of products with a high number of sales, views, engagements
              group-by geo-loc, age range groups etc. These data could be
              leveraged directly
            </li>
            <li>
              Further we will train set of models for predicting the
              recommendations. To make it a little personalized we will use
              demographic information as part of the feature set as well .
            </li>
          </ul>
          <h3>7. Seasonal based</h3>
          <ul>
            <li>
              Need to use the aggregated data on the week/month wise purchases
              from the stream entity table and then store these in the graph
              with additional relations (and their properties)
            </li>
            <li>
              Graph query to retrieve the data with filters based on current
              season/month/week for users who made transactions previously
            </li>
          </ul>
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
