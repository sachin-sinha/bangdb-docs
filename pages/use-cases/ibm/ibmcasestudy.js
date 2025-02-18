import React from "react";
import Head from "next/head";
import Breadcrumb from "../../../components/Breadcrumb";
import DocArticle from "../../../components/DocArticle";
import Link from "next/link";

export default function ibmcasestudy() {
  return (
    <React.Fragment>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Health care and system data</title>
        <meta
          name="description"
          content="Introduction to Fraud detection use case - Traditional methods of fraud detection play an important role in minimizing losses. However, they alone are unable to cope up with the increasing sophistication in frauds."
        />
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Introduction to Fraud detection use case"
        />
        <meta
          property="og:description"
          content="Introduction to Fraud detection use case - Traditional methods of fraud detection play an important role in minimizing losses. However, they alone are unable to cope up with the increasing sophistication in frauds."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta
          name="twitter:title"
          content="Introduction to Fraud detection use case"
        />
        <meta
          name="twitter:description"
          content="Introduction to Fraud detection use case - Traditional methods of fraud detection play an important role in minimizing losses. However, they alone are unable to cope up with the increasing sophistication in frauds."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <DocArticle>
        <Breadcrumb text="Stream in BangDB" url="/stream" />
        <h1 className="article-title">Healthcare</h1>
        <div className="article-body">
          <p>
            Patient tracker and composite healthcare for NHS using hl7 data
            integration
          </p>
          <h2>Introduction</h2>
          <p>
            Various hospitals and government health care entities capture their
            patient’s health records and logs. The data traditionally sits in
            different systems and in different formats. There has been a need
            for sharing the records or interoperate with different systems,
            hospitals, clinics, doctors or event government organizations. Hl7
            standard has been there for some time which opens a door for such
            possibilities through a software system and set of APIs. However,
            this is quite a challenging piece of work and there are complexities
            involved which need to be solved thoroughly before such a system can
            be designed.{" "}
          </p>
          <ul>
            <li>
              Health care data follows hl7 standard and it is extremely complex
              in nature. Most of the existing systems find it very hard to
              process the data. Look at an example of hl7 data
            </li>
            <li>
              The data is nested, there are whole set of structuring and
              constraints that need to be followed as per hl7 guidelines. It is
              very hard to process such data.
            </li>
            <li>Following is the high-level requirement for such system</li>
            <ul>
              <li>
                The data is connected and potential of improving the
                intelligence is huge - therefore Graph structuring is required
                for most of the data apart from document, and text data
                processing
              </li>
              <li>
                Data moves in real-time, therefore, we need to capture, process,
                act and store in real-time in continuous manner. Need for
                real-time stream/timeseries processing is needed
              </li>
              <li>
                Large data or binary data should also be stored and indexed.
                Secondary and Reverse indexing is required for high-speed
                retrieval or query
              </li>
              <li>
                Vector indexing is needed for similarity (semantic) use cases –
                which is extremely important for various reasons in the system
              </li>
              <li>
                High performance, huge scale, privacy, security, encryption,
                disaster recovery, replication etc. are first set of
                requirements for such system
              </li>
              <li>
                User interfaces with charts, dashboards and interactive UI
                workflows for performance several actions
              </li>
              <li>
                REST API for integration with other systems. Cloud or om-prem or
                hybrid deployments
              </li>
            </ul>
          </ul>
          <h2>What is hl7 standard?</h2>
          <p>
            HL7 stands for Health Level Seven International. It's a set of
            international standards for the exchange, integration, sharing, and
            retrieval of electronic health information. These standards define a
            framework for the exchange, management, and integration of
            electronic health information between various healthcare systems.
            HL7 standards are widely used in healthcare IT systems to ensure
            interoperability and facilitate the exchange of clinical and
            administrative data between different healthcare organizations and
            systems.
          </p>
          <h2>Why hl7 standard?</h2>
          <ul>
            <li>
              Interoperability: HL7 standards provide a common framework for
              structuring and exchanging healthcare information, regardless of
              the systems or applications used by different healthcare
              organizations. This interoperability is essential for improving
              care coordination, enhancing patient safety, and supporting
              clinical decision-making
            </li>
            <li>
              Data Exchange: HL7 enables the exchange of a wide range of
              healthcare data, including patient demographics, clinical
              observations, laboratory results, medications, and administrative
              information. This data exchange is vital for facilitating
              communication between different healthcare providers, such as
              hospitals, clinics, laboratories, pharmacies, and public health
              agencies.
            </li>
            <li>
              Standardization: HL7 promotes standardized formats and protocols
              for representing and transmitting healthcare information. By
              adhering to these standards, healthcare organizations can ensure
              consistency in data exchange, reduce errors, and improve the
              efficiency of healthcare processes
            </li>
            <li>
              Integration: HL7 standards support the integration of disparate
              healthcare systems and applications, allowing them to work
              together seamlessly. This integration enables healthcare providers
              to access and share patient information across different systems,
              improving workflow efficiency and continuity of care.
            </li>
            <li>
              Regulatory Compliance: HL7 standards are often required or
              recommended by regulatory bodies and healthcare organizations to
              ensure compliance with healthcare IT regulations and standards.
              Adhering to HL7 standards can help healthcare organizations meet
              regulatory requirements related to data exchange,
              interoperability, and patient privacy and security.
            </li>
            <li>
              Facilitating Innovation: By providing a standardized framework for
              exchanging healthcare information, HL7 encourages innovation in
              healthcare IT solutions and interoperable healthcare systems.
              Developers can build applications and solutions that leverage HL7
              standards, enabling new capabilities and functionalities to
              improve patient care and healthcare delivery.
            </li>
          </ul>
          <h2>The problem</h2>
          <p>
            Data exchange between different systems in healthcare is a complex
            subject. The widespread adoption of EHR systems and the
            digitalization of administrative processes within many healthcare
            organizations has resulted in large amounts of data.
          </p>
          <p>
            Managing such a vast and intricate volume of data posed a
            significant challenge for existing systems. Moreover, retrieving the
            necessary information became an even more daunting task atop this
            complexity.
          </p>
          <h2>Challenges</h2>
          <ul>
            <li>
              <strong> Complexity:</strong> HL7 data is inherently complex, with
              numerous interdependencies between data elements. We must contend
              with parsing and interpreting this intricate data structure
              accurately.
            </li>
            <li>
              <strong>Scalability:</strong> As the volume of HL7 data continues
              to grow, we must ensure that its systems can scale effectively to
              handle the increasing data load without sacrificing performance or
              reliability.
            </li>
            <li>
              <strong>Interoperability:</strong> HL7 data often needs to be
              integrated with various other systems and formats within
              healthcare environments. we must ensure seamless interoperability
              between HL7 data and other data formats or standards to facilitate
              smooth data exchange and workflows.
            </li>
            <li>
              <strong>Security and Privacy:</strong> Healthcare data, including
              HL7 messages, is subject to stringent security and privacy
              regulations. We must implement robust security measures to
              safeguard HL7 data from unauthorized access, breaches, or data
              leaks.
            </li>
            <li>
              <strong>Data Quality:</strong> Maintaining the quality and
              integrity of HL7 data is crucial for accurate clinical
              decisionmaking and patient care. We must implement data validation
              and cleansing processes to ensure that HL7 data is accurate,
              complete, and consistent.
            </li>
            <li>
              <strong>Performance:</strong> Processing HL7 data in real-time or
              near real-time to support critical healthcare workflows requires
              high-performance computing infrastructure and optimized
              algorithms. we must continually optimize its systems and
              algorithms to deliver timely and responsive HL7 data processing
              capabilities.
            </li>
          </ul>
          <h2>Why are existing systems not enough?</h2>
          <p>
            With the inherent complexity of HL7 data, existing systems face
            challenges in storage and processing. The sheer volume and intricate
            interconnections within this data pose significant hurdles.
            Executing data operations or running complex queries demands
            substantial time and resources.
          </p>
          <p>
            Consequently, developing a user interface atop such a system becomes
            time-consuming, and crafting queries to extract necessary data adds
            further complexity.
          </p>
          <h2>Solution</h2>
          <p>
            Hl7 data demonstrates a high degree of interconnectedness and
            complexity, adopting a graph-based storage model, composed of nodes
            and relationships, offers a superior representation of the data.
            This approach enhances both the storage efficiency and the
            comprehension of the dataset's structure and interrelations.
          </p>
          <h2>Benefits</h2>
          <ul>
            <li>
              <strong>Interconnectedness and Complexity:</strong> HL7 data, are
              characterized by intricate relationships and dependencies among
              various data elements. Storing such data in traditional formats
              may lead to inefficiencies and difficulties in understanding the
              underlying connections.
            </li>
            <li>
              <strong>Graph-based Storage:</strong> By organizing the data as a
              graph, where nodes represent individual data points and
              relationships denote the connections between them, the inherent
              complexity of the dataset can be captured more accurately. This
              model provides a visual and intuitive representation of the data's
              interconnections.
            </li>
            <li>
              <strong>Storage and Understanding:</strong> Storing the data as
              nodes and relations within a graph not only optimizes storage
              space but also enhances data comprehension. The graphical
              representation allows analysts and stakeholders to visualize the
              relationships between different data points, facilitating a deeper
              understanding of the dataset's structure and dynamics.
            </li>
            <li>
              <strong>Query Complexity:</strong> By organizing data in this
              graph format, querying becomes more straightforward as it aligns
              with the inherent structure of the information, making it easier
              to traverse and extract relevant data points.
            </li>
            <li>
              <strong>Retrieval time:</strong> Retrieval time for data is
              notably reduced compared to traditional storage methods, as the
              graph structure enables more efficient navigation through
              interconnected data elements
            </li>
            <li>
              <strong>Data Accuracy:</strong> The adoption of this storage
              approach not only improves operational efficiency but also
              enhances the accuracy of the data by preserving its inherent
              relationships and dependencies.
            </li>
            <li>
              <strong>Flexibility:</strong> Graph databases are schema-less or
              have flexible schemas, allowing for dynamic changes in data
              structure without requiring a predefined schema. This flexibility
              is advantageous for accommodating the evolving nature of HL7
              standards and healthcare data.
            </li>
            <li>
              <strong>Efficient Querying:</strong> Graph databases excel at
              traversing relationships between data entities, making complex
              queries more efficient and performant. This capability is
              particularly valuable for healthcare applications where queries
              often involve navigating through interconnected data elements.
            </li>
            <li>
              <strong> Real-Time Insights:</strong> Graph databases enable
              real-time analysis and insights by providing fast query response
              times, even with large and interconnected datasets. This rapid
              querying capability is crucial for supporting decision-making
              processes in healthcare environments where timely information is
              critical.
            </li>
            <li>
              <strong>Interoperability:</strong> HL7 data often needs to be
              integrated with data from other sources, such as electronic health
              records (EHRs) or medical imaging systems. Graph databases
              facilitate seamless integration by providing a unified platform
              for storing and querying heterogeneous healthcare data.
            </li>
            <li>
              <strong>Scalability:</strong> Graph databases are inherently
              scalable, capable of handling growing volumes of HL7 data with
              ease. As healthcare data continues to proliferate, the scalability
              of graph databases ensures that performance remains consistent
              even as the dataset size increases.
            </li>
          </ul>
          <h2>Solution Details</h2>
          <p>Entities</p>
          <img
            src="/assets/docs/ibm.png"
            alt="image
              Analysis"
            style={{ width: "100%", height: "auto" }}
          />
          <h2>Patient Tracker</h2>
          <p>
            As a user, we should be able to view list of patients that are
            related to
          </p>
          <ul>
            <li>Me</li>
            <li>My hospital service</li>
            <li>A schedule MDT</li>
            <ul>
              <li>That is related to me (my MDT’s) or my hospital service</li>
            </ul>
            <li>
              For each of the patients, we should be able to see the status of
              their ordered procedures, grouped by hospital service
            </li>
          </ul>
          <p>
            A computed field is needed that determines the % of the ordered
            procedures that related to the specific order and diagnostic
            department/hospital service that have the status F or COMPLETE
          </p>
          <p>
            For each of the patient also we need to be able to view following
          </p>
          <ul>
            <li>Full name</li>
            <li>Patient id</li>
            <li>Birth date</li>
            <li>Address</li>
            <li>Primary care practitioner (GP)</li>
          </ul>
          <p>
            For each Patient,we also need to have Pathway information
            asitrelatesto the User’srelationship with patient
          </p>
          <ul>
            <li>Date of Admittance or Referral</li>
            <li>Reason for Admittance or Referral</li>,
            <li>PreviousMDT"date"</li>
            <ul>
              <li>Scheduled for MDT "date"</li>
              <li>Key Practitionersthat are involved (by Role).</li>
            </ul>
          </ul>
          <p>For each patient, we also need to have key observations</p>
          <ul>
            <li>Height</li>
            <li>Weight</li>
            <li>BMI</li>
          </ul>
          <h2>Patient Tracker - Orders and Results - Line Item modal</h2>
          <p>
            1. When I click on the individualstatuses ofthe ”aggregated status",
            I need to see/accessthe line item (can these line items be
            expandable assome ofthisis only needed ifthere is an exception)
          </p>
          <ul>
            <li>Ordered Procedures,</li>
            <li>Their Status,</li>
            <li>The ordered date</li>
            <li>Last updated</li>
            <li>
              Practitioners by Role (Technician, Principal Result Interpreter.
              Assistant Result Interpreter, Responsible Observer)
            </li>
          </ul>
          <p>2. Create schedule and slots future event</p>
          <ul>
            <li>
              As a user, I need to be able to create future eventslike clinic's,
              MDT's etc and to be able to add dates, start and finish times, as
              well asthe number of available slots.
            </li>
            <li>
              I also need to be able to add detailslike the location and URL
              forthe online meeting.
            </li>
            <li>
              I also need to be to add Practitioners and attendeesfroma list
              ofsystem users/ user groups.
            </li>
          </ul>
          <p>3. Patient Tracker Add to future event</p>
          <ul>
            <li>
              As auser,” whenI click theAddto future event, open amodaltoallowme
              toadd the patient to a scheduled (future) event via a Calendar
              view or a filterable drop down"
            </li>
          </ul>
          <p>4. Patient Tracker - Future event Dashboard</p>
          <ul>
            <p>
              As a user, I need to be able toviewupcoming MDT's(that are related
              tome/my hospital service) and the aggregated value of howmany
              patients are ”ready for event"
            </p>
            <li>
              For example, in MDT'sitsthe % of completed
              tests/results/appointments
            </li>
            <li>
              For othersituations, it could be the number of patientswho have
              responded to an invitation to book an appointment
            </li>
          </ul>
          <p>5. Patient Tracker - Referral Management</p>
          <ul>
            <p>
              As auserIneedtobe able toviewa list ofreferralsthat are related to
            </p>
            <li>me</li>
            <li>my hospital service,</li>
            <p>For eachPatient alsoneedto be able toviewtheir properties</p>
            <li>Full Name</li>
            <li>Patient Id</li>
            <li>Date of birth</li>
            <li>
              Address-unlessthe patient hasthe Consent Type "LocationHiding"
              {">"} =1. Ifthe patient has this consent type then
              address/phone/email etc fields should not be returned.
            </li>
            <li>
              PhoneNumber - unlessthe patient hastheConsent Type
              "LocationHiding" {">"}=1. Ifthe patient hasthis consent type then
              address/phone/email etc fieldsshould not be return
            </li>
            <li>
              Their Primary Care Practitioner (GP) - Consent Type "Location
              Hiding" {">"}=1. If the patient has this consent type then GP
              should not be returned.
            </li>
          </ul>
          <p>
            For each Patient,we also need to have Pathway information
            asitrelatesto the user’s relationship with patient
          </p>
          <ul>
            <li>Date of referral</li>
            <li>Reason for referral</li>
            <li>Referral priority</li>
            <li>Key Practitionersthat are involved (by Role)</li>
          </ul>
          <p>
            As a user I need to be able accept, reject or reassign the referral
            or request additional information from the referring doctor.
          </p>
          <h2>Composite care record</h2>
          <p>All information related to the patient and their history</p>
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
