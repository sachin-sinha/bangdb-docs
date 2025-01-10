const path_prefix = `/apps/app-mon`;
const setup_path_prefix = path_prefix + `/setup`;

export const app_mon_sidebar_data = [
  {
    id: "0bbc",
    title: "Get Started",
    childrens: [
      {
        id: "0ba",
        title: "How to Install",
        path: "/appmon-install",
      },
    ],
  },
  {
    id: "0",
    title: "Clusters",
    childrens: [
      {
        id: "0",
        title: "Add cluster",
        path: setup_path_prefix + "/add-cluster",
      },
      {
        id: "1",
        title: "Delete cluster",
        path: setup_path_prefix + "/delete-cluster",
      },
      {
        id: "2",
        title: "Cluster overview",
        path: setup_path_prefix + "/cluster-overview",
      },
    ],
  },
  {
    id: "1",
    title: "Hosts",
    childrens: [
      {
        id: "0",
        title: "Add host",
        path: setup_path_prefix + "/add-host",
      },
      {
        id: "1",
        title: "Delete host",
        path: setup_path_prefix + "/delete-host",
      },
    ],
  },
  {
    id: "2",
    title: "Services",
    childrens: [
      {
        id: "0",
        title: "Add service",
        childrens: [
          {
            id: "0",
            title: "Web Monitoring",
            path: setup_path_prefix + "/services/add-service/web-mon",
          },
          {
            id: "1",
            title: "Linux Monitoring",
            path: setup_path_prefix + "/services/add-service/linux-mon",
          },
          {
            id: "2",
            title: "Click-stream Monitoring",
            path: setup_path_prefix + "/services/add-service/click-stream-mon",
          },
          {
            id: "3",
            title: "Linux System Log Monitoring",
            path: setup_path_prefix + "/services/add-service/log-mon",
          },
          {
            id: "4",
            title: "Generic Log Monitoring",
            path: setup_path_prefix + "/services/add-service/gen-log-mon",
          },
          {
            id: "5",
            title: "SNMP Monitoring",
            path: setup_path_prefix + "/services/add-service/snmp-mon",
          },
        ],
      },
      {
        id: "1",
        title: "Edit service",
        path: setup_path_prefix + "/services/edit-service",
      },
      {
        id: "2",
        title: "Delete service",
        path: setup_path_prefix + "/services/delete-service",
      },
      {
        id: "3",
        title: "Pause service",
        path: setup_path_prefix + "/services/pause-service",
      },
    ],
  },
  {
    id: "3",
    title: "Monitor services",
    childrens: [
      {
        id: "0",
        title: "Website monitoring",
        childrens: [
          {
            id: "0",
            title: "Overview",
            path: path_prefix + "/services/web-mon",
          },
        ],
      },
      {
        id: "1",
        title: "Linux Monitoring",
        childrens: [
          {
            id: "0",
            title: "Overview",
            path: path_prefix + "/services/linux-mon",
          },
        ],
      },
      // {
      //   id: "2",
      //   title: "Click-stream Monitoring",
      //   childrens: [
      //     {
      //       id: "0",
      //       title: "Overview",
      //       path: path_prefix + "/services/click-stream-mon",
      //     },
      //   ],
      // },
      {
        id: "3",
        title: "Log Monitoring",
        childrens: [
          {
            id: "0",
            title: "Overview",
            path: path_prefix + "/services/logs",
          },
        ],
      },
      {
        id: "5",
        title: "SNMP Monitoring",
        childrens: [
          {
            id: "0",
            title: "Overview",
            path: path_prefix + "/services/snmp-mon",
          },
        ],
      },
      {
        id: "5",
        title: "Website Traffic/Visitor Monitoring",
        childrens: [
          {
            id: "0",
            title: "Overview",
            path: path_prefix + "/services/click-stream-mon",
          },
        ],
      },
    ],
  },
  {
    id: "4",
    title: "User guide",
    childrens: [
      {
        id: "0",
        title: "Home page",
        path: path_prefix + "/user-guide/home-page",
      },
      {
        id: "1",
        title: "Switch color theme",
        path: path_prefix + "/user-guide/switch-color-theme",
      },
      {
        id: "2",
        title: "Setup configuration for SNMP",
        path: path_prefix + "/user-guide/setup-config-for-snmp",
      },
      {
        id: "3",
        title: "Manage ticket pipelines",
        path: path_prefix + "/user-guide/manage-ticket-pipelines",
      },
      {
        id: "3",
        title: "Ticket stats",
        path: path_prefix + "/user-guide/ticket-stats",
      },
      {
        id: "4",
        title: "Convert notifications to tickets",
        path: path_prefix + "/user-guide/convert-notifications-to-tickets",
      },
      {
        id: "5",
        title: "Report issue & open ticket for BangDB",
        path: path_prefix + "/user-guide/report-issue",
      },
    ],
  },
  {
    id: "6",
    title: "Manage User",
    childrens: [
      {
        id: "0",
        title: "create new user",
        path: path_prefix + "/manage-account-users/create-new-user",
      },
      {
        id: "01",
        title: "delete user",
        path: path_prefix + "/manage-account-users/delete-user",
      },
      {
        id: "02",
        title: "change user status",
        path: path_prefix + "/manage-account-users/change-user-status",
      },
      {
        id: "03",
        title: "reset password",
        path: path_prefix + "/manage-account-users/reset-user-password",
      },
    ],
  },
];
