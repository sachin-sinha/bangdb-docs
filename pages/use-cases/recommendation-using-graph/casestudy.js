import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import DownloadPDFButton from "../../../components/DownloadPDFButton";

export default function casestudyrecomondation() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/case-study/Tvam Graph Document_v1.1.pdf";
    link.download = "Tvam Graph Document_v1.1.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Recommendation System</title>
        <meta
          name="description"
          content="Introduction to IOT vehicle monitoring use case - Checkout the detailed demo video or read well-written documentation of this use case."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Introduction to IOT vehicle monitoring use case"
        />
        <meta
          property="og:description"
          content="Introduction to IOT vehicle monitoring use case - Checkout the detailed demo video or read well-written documentation of this use case."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Introduction to IOT vehicle monitoring use case"
        />
        <meta
          name="twitter:description"
          content="Introduction to IOT vehicle monitoring use case - Checkout the detailed demo video or read well-written documentation of this use case."
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
          <h1 className="article-title-new">Introduction</h1>
          <div className="article-body">
            <p>
              The document contains the details of Graph implementation for Tvam
              within BangDB. The following details are covered in the document
            </p>
            <ul>
              <li>The Entities and their properties</li>
              <li>The relationship between entities and their properties</li>
              <li>Efficiency of this Graph model</li>
              <li>
                Flexibility and how to edit/update the graph model for future
                changes
              </li>
              <li>
                Cluster and Similarities, and the properties used for creating
                them
              </li>
              <li>Query templates and examples</li>
              <li>
                Query benchmarking for ~300K data in the schema [ using REST
                QUERY]
              </li>
            </ul>
            <p>
              The document provides a detail for each entity and relation with
              several properties that are attached to these. Sample view of the
              part of the graph is also given everywhere. In the end the overall
              graph is also printed.
            </p>
            <p>
              The graph structure needs to be flexible and extensible in nature
              with logical hierarchy also preserved as far as possible. And
              above this, it is also very important that the graph scales well
              and performance for both read and write is high. Further, we must
              also ensure that data preserves the natural groups, cliques,
              segments etc. Finally, we must also ensure that the Graph uses
              nomenclatures which is natural to the domain and aligns with RDF
              models.
            </p>
            <p>
              To ensure that, these flexibilities are there in the structure,
              the document also lists several queries that might be performed in
              production and to enable the use cases. The queries are
              benchmarked for REST call (which is most conservative and would
              kind of provide the baseline). The results of the queries are also
              depicted pictorially for clarity. Further, these queries can be
              extended or more can be added as needed. As of now it lists over
              40 such query templates with over 100 possible variations for
              different permutations and combinations for different contexts.
              This is to ensure that there is enough flexibility in the
              structure to query in many ways.
            </p>
            <p>
              Note: The Graph, and related details (including queries) are
              subject to the receipt and test on actual data. These may change
              once we get the data, but the current structure should take care
              of the change easily
            </p>
            <h2>Entities, relationships, and their properties</h2>
            <ul>1. Person</ul>
            <ul>
              <li>CustRefID (Customer ID and TvamCustRefID): Node</li>
            </ul>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Nullable</th>
                    <th>No</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Properties</td>
                    <td>
                      LangType, Gender, DOB, AgeAtRegistration, RegistrationDay,
                      RegistrationMonth, RegistrationYear, CreatedDate
                    </td>
                  </tr>
                  <tr>
                    <td>Node Modifiability</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td>Property Modifiability</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Property Extensibility</td>
                    <td>Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>MemberID (FamilyMemberID and FamilyMemID): Node</p>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Nullable</th>
                    <th>No</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Properties</td>
                    <td>Gender, DOB</td>
                  </tr>
                  <tr>
                    <td>Node Modifiability</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td>Property Modifiability</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Property Extensibility</td>
                    <td>Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>HAS_FAMILY_MEMBER: Relation between CustRefID and MemberID</p>
          </div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Properties</th>
                  <th>RelationType</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Modifiability</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Extensibility</td>
                  <td>Yes</td>
                </tr>
              </tbody>
            </table>
            <img
              src="/assets/docs/graph3.png"
              alt="image
              Analysis"
              style={{ width: "100%", height: "auto" }}
            />
            <p>IS_IN_STATE: Relation between CustRefID to State</p>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Properties</th>
                    <th>RelationType</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Modifiability</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td>Extensibility</td>
                    <td>Yes</td>
                  </tr>
                </tbody>
              </table>
              <img
                src="/assets/docs/graph3.png"
                alt="image
              Analysis"
                style={{ width: "100%", height: "auto" }}
              />
              <p>IS_IN_STATE: Relation between CustRefID to State</p>
            </div>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Properties</th>
                    <th>District</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Modifiability</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td>Extensibility</td>
                    <td>Yes</td>
                  </tr>
                </tbody>
              </table>
              <br></br>
              <p>HAS_PINCODE: Relation between CustRefID to Pincode</p>
            </div>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Properties</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Modifiability</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td>Extensibility</td>
                    <td>Yes</td>
                  </tr>
                </tbody>
              </table>
              <img
                src="/assets/docs/graph11.png"
                alt="image
              Analysis"
                style={{ width: "100%", height: "auto" }}
              />
              <p>
                Few important queries [ detail queries are at the end of the
                document]
              </p>
              <ul>
                <li>a. Find all members of the family for a given person</li>
                <li>
                  b. Find all customers in a given cluster/area
                  (city/taluk/geo-loc)/similar customers
                </li>
                <li>
                  c. Find relative (fathers/mothers…) of all the registered
                  customer in a given cluster/area (city/taluk/geo-loc)/similar
                  customers
                </li>
                <li>
                  d. Find all 1st/2nd degree connections for a given customer
                </li>
                <li>
                  e. Add further filters in above queries (age range, gender,
                  education etc.)
                </li>
              </ul>
              <h3>2. Address</h3>
              <uL>
                <li>AddRefID: Node</li>
              </uL>
              c
              <p>
                There is a node for every AddRefID because a customer can have
                more than one address (such as HOME, OFFICE) and for every
                address we will have latitude and longitude associated with it.
              </p>
              <br></br>
              <ul>
                HAS_ADDRESS: Relation between CustRefID (Person) and AddRefID
                (Address Node)
              </ul>
              <div class="table-container">
                <table border="1">
                  <thead>
                    <tr>
                      <th>Nullable</th>
                      <th>No</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Properties</td>
                      <td>AddressType</td>
                    </tr>
                    <tr>
                      <td>Modifiability</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Extensibility</td>
                      <td>Yes</td>
                    </tr>
                  </tbody>
                </table>
                <img
                  src="/assets/docs/grpah19.png"
                  alt="image
              Analysis"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <p>
                Few important queries [ detail queries are at the end of the
                document]
              </p>
              <ul>
                <li>
                  f. Find all addresses for a given customer. Or find an office
                  address for a customer.
                </li>
                <li> g. Find all customers for a given office address?</li>
                <li>
                  h. Find all customers whose office and home addresses are same
                </li>
                <li>
                  i. Find all customers whose office addresses are missing
                </li>
                <li>
                  j. Find all customer living in a given radius for a given pair
                  of Lat, Lon
                </li>
              </ul>
              <br></br>
              <h3>3. Locality</h3>
              <ul>Locality (Ex: Village name): Node</ul>
              <div class="table-container">
                <table border="1">
                  <tbody>
                    <tr>
                      <th>Nullable</th>
                      <th>Yes</th>
                    </tr>
                    <tr>
                      <td>Properties</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Node Modifiability</td>
                      <td>No</td>
                    </tr>
                    <tr>
                      <td>Property Modifiability</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>Property Extensibility</td>
                      <td>Yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>HAS_LOCALITY: Relation between CustRefID and Localitys</p>
              <div class="table-container">
                <table border="1">
                  <tbody>
                    <tr>
                      <th>Properties</th>
                      <th></th>
                    </tr>
                    <tr>
                      <td>Modifiability</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>Extensibility</td>
                      <td>Yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <img
                src="/assets/docs/grpah20.png"
                alt="image
              Analysis"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <p>
              Few important queries [ detail queries are at the end of the
              document]
            </p>
            <ul>
              <li>k. Find all customers for a given Locality</li>
              <li>l. Find all customers for whom Locality is not given</li>
            </ul>
            <h3>4. Pincode</h3>
            <ul>PinCode: Node</ul>
            <div class="table-container">
              <table border="1">
                <tbody>
                  <tr>
                    <th>Nullable</th>
                    <th>Yes</th>
                  </tr>
                  <tr>
                    <td>Properties</td>
                    <td>Taluk</td>
                  </tr>
                  <tr>
                    <td>Node Modifiability</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Property Modifiability</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Property Extensibility</td>
                    <td>Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>HAS_PINCODE: Relation from AddRefID and Locality to Pincode</p>
            <div class="table-container">
              <table border="1">
                <tbody>
                  <tr>
                    <th>Properties</th>
                    <th></th>
                  </tr>
                  <tr>
                    <td>Modifiability</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Extensibility</td>
                    <td>Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              The “taluk” is used as a property of node Pincode and not as
              individual node due to following reasons
            </p>
            <ul>
              <li>One taluk can have more than one Pincode</li>
              <li>Not every customer provides taluk.</li>
              <li>
                The taluk is a local administration unit consisting of a few
                villages or a few wards (taluk’s definition differs from state
                to state). So, using it as a property is better than as a node.
              </li>
            </ul>
            <img
              src="/assets/docs/grpah112.png"
              alt="image
              Analysis"
              style={{ width: "100%", height: "auto" }}
            />
            <p>How to handle null pincode?</p>
            <p>
              Pincode node will be created, and this will be linked with state.
              The node will have Taluk as property. Since the pincode was null,
              therefore we will use “Lat, Lon” to figure out the pincode. If
              “Lat, Lon” is also null, then we can use “taluk” info for the
              same. If “taluk” is also null, then we may use the central pin of
              the city/district. Since pincode is editable/updateable node,
              therefore this can be updated whenever we are able to get it or
              compute it.
            </p>
            <p>
              Few important queries [ detail queries are at the end of the
              document]
            </p>
            <ul>
              <li>m. Find all customers for a given pincode</li>
              <li>n. Find all customers within a X radius of given pincode</li>
              <li>
                o. Find all customers who has purchased a product (or a given
                product) for a given pincode or within radius of X KM for a
                pincode
              </li>
              <li>
                p. Find similar people (based on any criteria) for a
                neighborhood of a given pincode
              </li>
            </ul>
            <br></br>
            <h3>5. State</h3>
            <ul>
              <br></br>
              <li>• State: Node</li>
            </ul>
            <div class="table-container">
              <table border="1">
                <tbody>
                  <tr>
                    <th>Nullable</th>
                    <th>No</th>
                  </tr>
                  <tr>
                    <td>Properties</td>
                    <td>Country</td>
                  </tr>
                  <tr>
                    <td>Node Modifiability</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Property Modifiability</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Property Extensibility</td>
                    <td>Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <ul>
              <li>IS_IN_STATE: Relation from Pincode to State [ Inversion]</li>
            </ul>
            <div class="table-container">
              <table border="1">
                <tbody>
                  <tr>
                    <th>Properties</th>
                    <th>District, City</th>
                  </tr>
                  <tr>
                    <td>Modifiability</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Extensibility</td>
                    <td>Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>• IS_IN_STATE: Relation from Pincode to State [ Inversion]</p>
            <div class="table-container">
              <table border="1">
                <tbody>
                  <tr>
                    <th>Properties</th>
                    <th>District, City</th>
                  </tr>
                  <tr>
                    <td>Modifiability</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Extensibility</td>
                    <td>Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>• IS_IN_STATE: Relation from CustRefID to State</p>
            <div class="table-container">
              <table border="1">
                <tbody>
                  <tr>
                    <th>Properties</th>
                    <th>District</th>
                  </tr>
                  <tr>
                    <td>Modifiability</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Extensibility</td>
                    <td>Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <img
              src="/assets/docs/graph1a.png"
              alt="image
              Analysis"
              style={{ width: "100%", height: "auto" }}
            />
            <p>
              Few important queries [ detail queries are at the end of the
              document]
            </p>
            <ul>
              <li>q. Find all active pin codes for a given state</li>
              <li>
                r. Find all customers for a given state (who has or hasn’t
                purchased any product)
              </li>
              <li>
                s. Find all similar profile people (based on any criteria) who
                are in a given state
              </li>
            </ul>
            <p>6. Profile</p>
            <ul>
              <li>• CustProfile: Node</li>
            </ul>
            <div class="table-container">
              <table border="1">
                <tbody>
                  <tr>
                    <th>Nullable</th>
                    <th>No</th>
                  </tr>
                  <tr>
                    <td>Properties</td>
                    <td>
                      Family Structure, Education, Profession, Marital Status,
                      Children, SchoolGoingKids, NoOfSeniorCitizen, Dependent,
                      Income, Business Category, Updated Date
                    </td>
                  </tr>
                  <tr>
                    <td>Node Modifiability</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Property Modifiability</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Property Extensibility</td>
                    <td>Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              CustProfile as a separate node to represent a customer’s general
              information which we get from surveys (Question Response), and we
              know that not every customer takes surveys so it’s better to have
              a node that represents a customer profile.
            </p>
            <ul>
              <li>PurchaseProfile: Node</li>
            </ul>
            <div class="table-container">
              <table border="1">
                <tbody>
                  <tr>
                    <th>Nullable</th>
                    <th>No</th>
                  </tr>
                  <tr>
                    <td>Properties</td>
                    <td>
                      InsuranceCount, TotalInsuranceSpend, PersonalLoans,
                      LoanAmount, UPIPayments, UPICount, UPIAmount
                    </td>
                  </tr>
                  <tr>
                    <td>Node Modifiability</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Property Modifiability</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Property Extensibility</td>
                    <td>Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <li>
              • HAS_PROFILE: Relation between CustRefID node and CustProfile nod
            </li>
            <div class="table-container">
              <table border="1">
                <tbody>
                  <tr>
                    <th>Properties</th>
                    <th></th>
                  </tr>
                  <tr>
                    <td>Modifiability</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Extensibility</td>
                    <td>Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <ul>
              <p>
                HAS_PURCHASE_PROFILE: Relation between CustRefID node and
                PruchaseProfile node
              </p>
            </ul>
            <img
              src="/assets/docs/graphs1q.png"
              alt="image
              Analysis"
              style={{ width: "100%", height: "auto" }}
            />
            <p>
              Few important queries [ detail queries are at the end of the
              document]
            </p>
            <ul>
              <li>
                t. Find all people similar to given profile (uses profile-based
                similarity)
              </li>
              <li>
                u. Find all people who has their profile similar to a given
                person (same as above except it takes PersonID)
              </li>
              <li>v. Add various filters (edu, prof, etc.)</li>
            </ul>
            <p>7. DoctorConsultation</p>
            <ul>
              <li>• TvamRefNo: Node</li>
            </ul>
            <div class="table-container">
              <table border="1">
                <tbody>
                  <tr>
                    <th>Nullable</th>
                    <th>No</th>
                  </tr>
                  <tr>
                    <td>Properties</td>
                    <td>
                      AgeAtEC, ConsultationDate, PaymentStatus,
                      TvamConsultationId, ConsultationFee, ECregistrationDay,
                      ECregistrationMonth, ECregistrationYear, Status,
                      CreatedDate
                    </td>
                  </tr>
                  <tr>
                    <td>Node Modifiability</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Property Modifiability</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Property Extensibility</td>
                    <td>Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              TvamRefNo is used as node instead of ConsultationId because there
              can be cases where ConsultationId is not present.
            </p>
            <ul>
              <li>CONSULTS: Relation between CustRefID and TvamRefID</li>
            </ul>
            <div class="table-container">
              <table border="1">
                <tbody>
                  <tr>
                    <th>Properties</th>
                    <th></th>
                  </tr>
                  <tr>
                    <td>Modifiability</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Extensibility</td>
                    <td>Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <img
              src="/assets/docs/grpah1a.png"
              alt="image
              Analysis"
              style={{ width: "100%", height: "auto" }}
            />
            <p>
              Few important queries [ detail queries are at the end of the
              document]
            </p>
            <ul>
              <li>
                w. Find all persons who have consulted doctors (and num of times
                for each)
              </li>
              <li>
                x. Find all persons who have consulted doctors (and num of times
                for each) in a given geoloc (city, taluk or even pincode)
              </li>
              <li>
                y. Find all persons who have booked the consultations but not
                yet consulted
              </li>
              <li>
                z. Find all persons who have consulted Doctors but not yet
                purchased insurance
              </li>
              <li>
                aa. Find persons similar to a given person who has consulted
                doctor but not purchased insurance yet
              </li>
              <li>
                bb. Find different policies for insurances and their providers
                where people have consulted the Doctors most (top 3 or 5)
              </li>
              <li>
                cc. Find all aging fathers (different relatives) of persons
                similar to a given person in an area who has taken insurance
              </li>
            </ul>
            <h3>8. Doctor</h3>
            <ul>
              <li>DoctorID: Node</li>
            </ul>
            <div class="table-container">
              <table border="1">
                <tbody>
                  <tr>
                    <th>Nullable</th>
                    <th>No</th>
                  </tr>
                  <tr>
                    <td>Properties</td>
                    <td>DoctorName</td>
                  </tr>
                  <tr>
                    <td>Node Modifiability</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Property Modifiability</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Property Extensibility</td>
                    <td>Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <ul>
              <li>• ADVICES: Relation between DoctorID and TvamRefNo</li>
            </ul>
            <div class="table-container">
              <table border="1">
                <tbody>
                  <tr>
                    <th>Properties</th>
                    <th></th>
                  </tr>
                  <tr>
                    <td>Modifiability</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Extensibility</td>
                    <td>Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <img
              src="/assets/docs/graph1s.png"
              alt="image
              Analysis"
              style={{ width: "100%", height: "auto" }}
            />
            <p>9. PolicyVendor</p>
            <ul>
              <li>VendorID: Node</li>
            </ul>
            <div class="table-container">
              <table border="1">
                <tbody>
                  <tr>
                    <th>Nullable</th>
                    <th>No</th>
                  </tr>
                  <tr>
                    <td>Properties</td>
                    <td>VendorCode</td>
                  </tr>
                  <tr>
                    <td>Node Modifiability</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Property Modifiability</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Property Extensibility</td>
                    <td>Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>PolicyID: Node</h3>
            <div class="table-container">
              <table border="1">
                <tbody>
                  <tr>
                    <th>Nullable</th>
                    <th>No</th>
                  </tr>
                  <tr>
                    <td>Properties</td>
                    <td>
                      CreatedDate, Insurance Type, Cover Type, Sum Insured,
                      Premium Amount, MaxMembers, Policy Tenure Type, Policy
                      Tenure Values, Policy Region, MinMembers, Allowed
                      Relationships
                    </td>
                  </tr>
                  <tr>
                    <td>Node Modifiability</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Property Modifiability</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Property Extensibility</td>
                    <td>Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>• PROVIDED_BY: Relation between PolicyID and VendorID</p>
            <div class="table-container">
              <table border="1">
                <tbody>
                  <tr>
                    <th>Properties</th>
                    <th>Modifiability</th>
                    <th>Extensibility</th>
                  </tr>
                  <tr>
                    <td>Property 1</td>
                    <td>Yes</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Property 2</td>
                    <td>Yes</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Property 3</td>
                    <td>Yes</td>
                    <td>Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <img
              src="/assets/docs/graph1b.png"
              alt="image
              Analysis"
              style={{ width: "100%", height: "auto" }}
            />
            <h3>11. Insurance • InsuranceI</h3>
            <ul>
              <li>• InsuranceID: Node (for all Insurances)</li>
            </ul>
            <div class="table-container">
              <table border="1">
                <tbody>
                  <tr>
                    <th>Nullable</th>
                    <th>No</th>
                  </tr>
                  <tr>
                    <td>Properties</td>
                    <td>
                      AgeAtInsurance, Policy Type, Policy Status, Policy
                      Creation Month, Policy Creation Year, Policy Maturity
                      Month, Policy Maturity Year
                    </td>
                  </tr>
                  <tr>
                    <td>Node Modifiability</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Property Modifiability</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Property Extensibility</td>
                    <td>Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              There is a node for every insurance purchased. This node is
              connected to the customer and the policy.
            </p>
            <ul>
              <li>COVERS: Relation between InsuranceID and MemberID</li>
            </ul>
            <div class="table-container">
              <table border="1">
                <tbody>
                  <tr>
                    <td>Properties</td>
                    <td>Modifiability</td>
                    <td>Extensibility</td>
                  </tr>
                  <tr>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <ul>
              <li>IS_FOR_POLICY: Relation between InsuranceID and PolicyID</li>
            </ul>
            <div class="table-container">
              <table border="1">
                <tbody>
                  <tr>
                    <th>Properties</th>
                    <th>Modifiability</th>
                    <th>Extensibility</th>
                  </tr>
                  <tr>
                    <td>Properties</td>
                    <td>Yes</td>
                    <td>Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>• IS_IN_STATE: Relation between InsuranceID and State</p>
            <div class="table-container">
              <table border="1">
                <tbody>
                  <tr>
                    <td>Properties</td>
                    <td>Modifiability</td>
                    <td>Extensibility</td>
                  </tr>
                  <tr>
                    <td>District</td>
                    <td>Yes</td>
                    <td>Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>HAS_PINCODE: Relation between InsuranceId to Pincode</p>
            <div class="table-container">
              <table border="1">
                <tbody>
                  <tr>
                    <td>Properties</td>
                    <td>District</td>
                  </tr>
                  <tr>
                    <td>Modifiability</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Extensibility</td>
                    <td>Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <img
              src="/assets/docs/graph1as.png"
              alt="image
              Analysis"
              style={{ width: "100%", height: "auto" }}
            />
            <h3>12. Loan</h3>
            <ul>
              <li>LoanApplicationId: Node (For all Types of Loans)</li>
            </ul>
            <div class="table-container">
              <table border="1">
                <tbody>
                  <tr>
                    <th>Nullable</th>
                    <th>No</th>
                  </tr>
                  <tr>
                    <td>Properties</td>
                    <td>
                      AgeAtLoanRegistration, DateOfBirth, Gender, Marital
                      Status, Education Qualification, Purpose of Loan, Related
                      Loan Details, Employment Details, Loan Registration Day,
                      Month, and Year
                    </td>
                  </tr>
                  <tr>
                    <td>Node Modifiability</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Property Modifiability</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Property Extensibility</td>
                    <td>Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>We have 2 types of loans</p>
            <ul>
              <li>Personal and,</li>
              <li>Business Loan</li>
            </ul>
            <p>
              There is a node for every loan application type. These nodes are
              updated when Loan application status changes.
            </p>
            <p>
              Since the Tvam app customer and actual loan customer may be
              different therefore, we have Gender, Marital Status, and DOB as
              node properties.
            </p>
            <ul>
              <li>
                APPLIES_FOR: Relation between CustRefID and LoanApplicationID
              </li>
            </ul>
            <div class="table-container">
              <table border="1">
                <tbody>
                  <tr>
                    <td>Properties</td>
                    <td>Modifiability</td>
                    <td>Extensibility</td>
                  </tr>
                  <tr>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <ul>
              <li>IS_IN_STATE: LoanApplicationId to State</li>
            </ul>
            <div class="table-container">
              <table border="1">
                <tbody>
                  <tr>
                    <td>Properties</td>
                    <td>District</td>
                  </tr>
                  <tr>
                    <td>Modifiability</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Extensibility</td>
                    <td>Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <ul>
              <li>HAS_ADDRESS: LoanApplicationId to AddressId</li>
            </ul>
            <div class="table-container">
              <table border="1">
                <tbody>
                  <tr>
                    <td>Properties</td>
                    <td>Modifiability</td>
                    <td>Extensibility</td>
                  </tr>
                  <tr>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <img
              src="/assets/docs/graph1m.png"
              alt="image
              Analysis"
              style={{ width: "100%", height: "auto" }}
            />
            <p>
              Few important queries [ detail queries are at the end of the
              document]
            </p>
            <ul>
              <li>
                Find all persons who have taken loans in a given area (pincode,
                geo-loc, city, taluk, state)
              </li>
              <li>
                Find all persons who similar to persons who have taken loan in a
                given area
              </li>
              <li>
                ff. Find all ageing fathers (or any relative) of persons similar
                to a given person in an area who has taken loan (may add filters
                like loan-amount {">"} X or duration{"< "} Y years etc.)
              </li>
            </ul>
            <br></br>
            <h3>13. FinancialInstitute</h3>
            <ul>
              <li>• BankName: Node</li>
            </ul>
            <div class="table-container">
              <table border="1">
                <tbody>
                  <tr>
                    <th>Nullable</th>
                    <th>No</th>
                  </tr>
                  <tr>
                    <td>Properties</td>
                    <td> </td>
                  </tr>
                  <tr>
                    <td>Node Modifiability</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Property Modifiability</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Property Extensibility</td>
                    <td>Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <br></br>
            <p>
              FROM_INSTITUTION: Relation between LoanApplicationId to BankName
            </p>
            <br></br>
            <p>APPLIES_FOR: Relation between CustRefID and LoanApplicationId</p>
            <div class="table-container">
              <table border="1">
                <tbody>
                  <tr>
                    <td>Properties</td>
                    <td>Modifiability</td>
                    <td>Extensibility</td>
                  </tr>
                  <tr>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <img
              src="/assets/docs/graphsan.png"
              alt="image
              Analysis"
              style={{ width: "100%", height: "auto" }}
            />
            <p>
              Few important queries [ detail queries are at the end of the
              document]
            </p>
            <ul>
              <li>
                gg. Find all customers who have applied for a loan (for any
                INSTITUTION or a given one) from a given
                geo-loc/area/Locality/pincode/geo-distance (further filter for
                customer profile like age, loan amount etc.)
              </li>
              <li>
                hh. Top K banks who have offered loans to customers in a given
                area (further ass filter like, loan amount more than X etc.)
              </li>
            </ul>
            <h3>14. Transaction</h3>
            <ul>
              <li>TransactionId: Node (For MPR, UPI transfers)</li>
            </ul>
            <div class="table-container">
              <table border="1">
                <tbody>
                  <tr>
                    <th>Nullable</th>
                    <th>No</th>
                  </tr>
                  <tr>
                    <td>Properties</td>
                    <td>
                      Amount, Payment Type, Transaction Type,
                      PaymentTypeCategory, PayeePaymentAddress, MerchantCatCode,
                      TransactionHr, TransactionDay, TransactionMonth,
                      TransactionYear, TransactionDate
                    </td>
                  </tr>
                  <tr>
                    <td>Node Modifiability</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Property Modifiability</td>
                    <td>Yes</td>
                  </tr>
                  <tr>
                    <td>Property Extensibility</td>
                    <td>Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>Note: Properties differ a little in the case of MPR (How?)</p>
            <ul>
              <li>PAYS_FOR: Relation between CustRefID and TransactionId</li>
              <li>PAYS_TO: Relation between TransactionId and Operator</li>
            </ul>

            <div class="table-container">
              <table border="1">
                <tbody>
                  <tr>
                    <td>Properties</td>
                    <td>Modifiability</td>
                    <td>Extensibility</td>
                  </tr>
                  <tr>
                    <td>Yes</td>
                    <td>Yes</td>
                    <td>Yes</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <img
              src="/assets/docs/graph12n.png"
              alt="image
              Analysis"
              style={{ width: "100%", height: "auto" }}
            />

            <h2>Graph Diagram</h2>
            <img
              src="/assets/docs/graph13c.png"
              alt="image
              Analysis"
              style={{ width: "100%", height: "auto" }}
            />
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
