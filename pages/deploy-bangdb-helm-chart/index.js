import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import Codebox from "../../components/Codebox";

export default function UsingHelmChart() {
  return (
    <React.Fragment>
      <Head>
        <title>Using the helm chart - BangDB</title>
        <meta
          name="description"
          content="There are 2 methods to deploy BangDB on openshift - Learn more about deploying BangDB on an Openshift using the helm chart."
        ></meta>
        <meta property="og:site_name" content="BangDB Docs" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Using the helm chart - BangDB" />
        <meta
          property="og:description"
          content="There are 2 methods to deploy BangDB on openshift - Learn more about deploying BangDB on an Openshift using the helm chart."
        />
        <meta
          property="og:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@IQLECT" />
        <meta name="twitter:title" content="Using the helm chart - BangDB" />
        <meta
          name="twitter:description"
          content="There are 2 methods to deploy BangDB on openshift - Learn more about deploying BangDB on an Openshift using the helm chart."
        />
        <meta
          name="twitter:image"
          content="https://bangdb.com/wp-content/uploads/2021/05/BangDBLogo_nowhite.png"
        />
      </Head>

      <MainWrapper>
        <Main>
          <DocContent>
            <DocArticle>
              <DocBreadCrumb>
                <DocBreadCrumbList>
                  <DocBreadCrumbItem>
                    <DocBreadCrumbLink
                      href={"https://bangdb.com/"}
                      target={"_blank"}
                    >
                      BangDB
                    </DocBreadCrumbLink>
                  </DocBreadCrumbItem>
                  <DocBreadCrumbItem>
                    <div style={{ margin: "0 4px" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="18px"
                        viewBox="0 0 24 24"
                        width="18px"
                        fill="#5f6368"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
                      </svg>
                    </div>
                    <DocBreadCrumbLink href={"/"}>Docs</DocBreadCrumbLink>
                  </DocBreadCrumbItem>
                  <DocBreadCrumbItem>
                    <div style={{ margin: "0 4px" }}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="18px"
                        viewBox="0 0 24 24"
                        width="18px"
                        fill="#5f6368"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
                      </svg>
                    </div>
                    <DocBreadCrumbLink href={"/server-getting-started"}>
                      Getting Started
                    </DocBreadCrumbLink>
                  </DocBreadCrumbItem>
                </DocBreadCrumbList>
              </DocBreadCrumb>
              <DocTitle>Using Helm chart</DocTitle>
              <div className="article-body">
                <h2>Introduction</h2>
                <p>
                  This page contains the information to install Bangdb using a
                  Helm chart. It assumes that the Linux distribution being used
                  to deploy the chart is Ubuntu, but the steps being used will
                  work on any other Linux flavor also(RHEL/Fedora). This chart
                  deploys the Bangdb as a StatefulSet Object with Persistent
                  Volumes.
                </p>
                <h2>Prerequisites</h2>
                <p>
                  Before using a helm chart, please ensure you have the
                  following prerequisites installed before continuing :
                </p>
                <ol>
                  <li>Kubernetes 1.12+</li>
                  <li>Helm 2.11+ or Helm 3.0-beta3+</li>
                  <li>
                    PV provisioner support in the underlying infrastructure
                  </li>
                </ol>
                <h2>Installation</h2>
                <ol>
                  <li>
                    First we need to fetch the helm chart from the github
                    repository
                  </li>
                  <Codebox
                    code="git clone https://github.com/sachin-sinha/bangdb_helm"
                    copy="git clone https://github.com/sachin-sinha/bangdb_helm"
                  />
                  <li>Make sure the git branch being used is 'main'</li>
                  <Codebox code="cd bangdb_helm" copy="cd bangdb_helm" />
                  <Codebox code="git checkout main" copy="git checkout main" />
                  <li>Use the Helm CLI to install the Bangdb chart</li>
                  <Codebox
                    code="helm install bangdb bangdb/"
                    copy="helm install bangdb bangdb/"
                  />
                </ol>

                <p>
                  This will install the Bangdb chart with default configuration.
                  It will create two PV claims that will be used by the Bangdb
                  for its 'data' directory and 'logdir' directory. If you want
                  to configure Bangdb parameters, refer the{" "}
                  <strong>Configuration </strong>
                  section.
                </p>
                <h2>Configuration</h2>
                <p>
                  In the values.yaml (under bangdb_helm/bangdb/), we have all
                  the required parameters required to configure the bangdb
                  instance running on your cluster.
                </p>
                <ol>
                  <li>
                    <strong>Image</strong> - The default image being used is
                    bangdb/bangdb-server, the other option being
                    bangdb/bangdb-server-ssl. But using the ssl version requires
                    that you create a secret with your own ssl key and
                    certificate. Use the following to create a secret
                  </li>
                  <Codebox
                    code="kubectl create secret generic bangdb-ssl -from-literal=key.pem= --from-literal=cert.pem="
                    copy="kubectl create secret generic bangdb-ssl -from-literal=key.pem= --from-literal=cert.pem="
                  />
                  <p>
                    Then enable the secrets in the values.yaml (under secrets,
                    enabled: true)
                  </p>
                  <li>
                    <strong>Persistence</strong> - By default, the persistent
                    volumes are enabled. Please do not change the values for
                    mountPathdata and the mountPathlogdir values as these have
                    been defined in the default bangdb configuration. In order
                    to change these, you would also have to uncomment the
                    bangdbConfiguration section and then set the directories
                    there(SERVER_DIR and BANGDB_LOG_DIR respectively).
                  </li>
                  <p>
                    To use a Storage Class, uncomment the 'storageClass' option
                    and set your desired storage class here. The default and the
                    recommend size for the volumes are 4Gi. Both the data and
                    logdir will use this value in the Volume Claims.
                  </p>
                  <p>
                    To disable Persistence, set 'enabled' to 'false' under the
                    persistence dictionary in values.yaml. Then the chart will
                    instead use the emptydir volume for the data and logdir
                    directories.
                  </p>
                  <li>
                    <strong>Security Context</strong> - The RunAsuser should be
                    used as 1000, as this is the UID of the user being used
                    inside the container of the bangdb.
                  </li>
                  <li>
                    <strong>Resources</strong> - The default requests limit is
                    500m cpu and 1024Mi memory. The memory limits should be
                    configured according to the BUFF_POOL_SIZE_HINT in the
                    bangdb configuration(default for this is 892Mi, so resource
                    limit should be slightly above this, ie 1024Mi).
                  </li>
                  <li>
                    <strong>Bangdb configuration</strong> - If you want to
                    configure the Bangdb database configuration, you should
                    uncomment the whole bangdbConfiguration dictionary in the
                    values.yaml. Then accordingly, by referring to{" "}
                    <Link href={"/bangdb-config"}>this page</Link>, you may
                    change the configuration settings of the database.
                  </li>
                </ol>
                <Codebox
                  code="oc apply -f bangdb.yaml"
                  copy="oc apply -f bangdb.yaml"
                />
                <p>
                  This deployment creates a single pod running 'BangDB'. To
                  verify the deployment you can check the logs of the pod
                  created. The logs should appear as shown below saying 'BangDB'
                  service is up and running.
                </p>
                <Image
                  src={
                    "https://bangdb.com/wp-content/uploads/2021/08/bangdb_openshift_startup_log.png"
                  }
                  alt="Deploy BangDB on OpenShift"
                  width={1600}
                  height={601}
                />
              </div>
            </DocArticle>
          </DocContent>
        </Main>
      </MainWrapper>
    </React.Fragment>
  );
}

const MainWrapper = styled.section`
  display: flex;
  flex: 1 0;
  flex-direction: column;
  margin-top: 156.979px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
`;

const Main = styled.main`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: minmax(269px, 1fr) minmax(752px, 936px) minmax(
      160px,
      1fr
    );
  grid-template-rows: 1fr;
  position: relative;
  width: 100%;
`;

const DocContent = styled.div`
  align-self: start;
  grid-column: 2;
  display: block;
  position: relative;
  grid-row: 1;
  margin: 24px 0;
  max-width: 936px;
  min-width: 0;
`;

const DocArticle = styled.article`
  border: 1px solid #dadce0;
  background: #fff;
  border-radius: 8px;
  padding: 40px;
`;

const DocBreadCrumb = styled.div`
  display: grid;
  grid-gap: 0 16px;
  grid-template-areas: "breadcrumbs ratings";
  margin: 0 0 36px;
  grid-template-columns: 1fr auto;
`;

const DocBreadCrumbList = styled.ul`
  display: flex;
  align-items: center;
  white-space: nowrap;
  -webkit-box-flex: 1;
  flex-wrap: wrap;
  flex: 1;
  font-size: 13px;
  font-family: "Roboto", sans-serif;
`;

const DocBreadCrumbItem = styled.li`
  display: flex;
  align-items: center;
`;

const DocBreadCrumbLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #5f6368;
`;

const DocTitle = styled.h1`
  display: inline;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 40px;
  font-weight: 600;
  font-family: "Roboto", sans-serif;
  color: #000;
  letter-spacing: -0.5px;
  margin-inline-end: 83px;
  vertical-align: middle;
`;