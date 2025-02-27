import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

// Import all sidebar data files
import { app_mon_sidebar_data } from "../../config/data/app_mon_data";
import { bugtracker_sidebar_data } from "../../config/data/bugtracker_sidebar_data";
import { forum_sidebar_data } from "../../config/data/forum_sidebar_data";
import { SearchData } from "../SearchData";

import { SidebarData } from "../Sidebars/SidebarData"; // Default sidebar data

export default function NextPageButton() {
  const router = useRouter();
  const currentPath = router.pathname.replace(/\/$/, ""); // Normalize path
  const [pages, setPages] = useState([]);
  const [nextPage, setNextPage] = useState(null);

  useEffect(() => {
    async function fetchSidebarData() {
      try {
        let sidebarModule;

        // Mapping URL paths to sidebar data
        const sidebarMap = {
          "/apps/app-mon/": app_mon_sidebar_data,
          "/bugtracker/": bugtracker_sidebar_data,
          "/apps/bug-tracker/": bugtracker_sidebar_data,
          "/forum/": forum_sidebar_data,
          "/install-forum": forum_sidebar_data,
          "/apps/forum/": forum_sidebar_data,
          "/install-bugtracker": bugtracker_sidebar_data,
          "/ai": "AiSidebarData",
          "/ml": "MlSidebarData",
          "/about": "AboutSidebarData",
          "/faq": "FaqSidebarData",
          "/ticket-creation/": "FaqSidebarData",
          "/help-guide/chart-creation": "FaqSidebarData",
          "/graph": "GraphSidebarData",
          "/help": "HelpGuideSidebarData",
          "/release": "ReleaseSidebarData",
          "/stream": "StreamSidebarData",
          "/group-by": "StreamSidebarData",
          "/filter": "StreamSidebarData",
          "/cepq": "StreamSidebarData",
          "/entity": "StreamSidebarData",
          "/join-example-1": "StreamSidebarData",
          "/join-example-2": "StreamSidebarData",
          "/join-example-3": "StreamSidebarData",
          "/working-with-streams": "StreamSidebarData",
          "/complex-event-processing": "StreamSidebarData",
          "/cep-use-cases": "StreamSidebarData",
          "/catr-computing-attribute": "StreamSidebarData",
          "/rest-api/": "ApiSidebarData",
          "/use-cases/": "UseCasesSidebarData",
          "/examples-tryout-yourself/": "MlSidebarData",
          "/": "SearchData",
          "/overview": "SearchData",
          "/": SidebarData,
        };

        // Find the longest matching key
        let matchedKey = Object.keys(sidebarMap)
          .filter((key) => currentPath.startsWith(key))
          .sort((a, b) => b.length - a.length)[0];

        if (matchedKey) {
          // Directly assign imported sidebar data for static imports
          if (typeof sidebarMap[matchedKey] !== "string") {
            sidebarModule = sidebarMap[matchedKey];
          } else {
            // Handle dynamic imports for sidebar modules
            const module = await import(
              `../Sidebars/${sidebarMap[matchedKey]}`
            );
            sidebarModule = module.default || module[sidebarMap[matchedKey]];
          }
        }

        if (!sidebarModule) {
          console.warn(`⚠️ No sidebar found for ${currentPath}`);
          return;
        }

        // Extract all pages from the sidebar data
        const extractPaths = (items) => {
          let paths = [];
          items.forEach((item) => {
            if (item.path) paths.push({ title: item.title, path: item.path });
            if (item.childrens) paths.push(...extractPaths(item.childrens));
          });
          return paths;
        };

        const allPages = extractPaths(sidebarModule);
        setPages(allPages);

        // Find the current page index and determine the next page
        const currentIndex = allPages.findIndex(
          (page) => page.path === currentPath
        );

        if (currentIndex !== -1 && currentIndex < allPages.length - 1) {
          setNextPage(allPages[currentIndex + 1]);
        } else {
          setNextPage(null);
        }
      } catch (error) {
        console.error("❌ Error loading sidebar data:", error);
      }
    }

    fetchSidebarData();
  }, [currentPath]);

  if (!nextPage || !nextPage.path) return null;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        padding: "10px 0",
        borderTop: "1px solid #ddd",
        marginTop: "10px",
      }}
    >
      <span style={{ marginRight: "10px", fontSize: "14px" }}>
        Learn about {nextPage.title}
      </span>
      <button
        style={{
          backgroundColor: "#007bff",
          color: "white",
          padding: "5px 25px",
          borderRadius: "4px",
          cursor: "pointer",
        }}
        onClick={() => router.push(nextPage.path)}
      >
        Next →
      </button>
    </div>
  );
}
