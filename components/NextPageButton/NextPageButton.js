import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { app_mon_sidebar_data } from "../../config/data/app_mon_data";
import { SidebarData } from "../Sidebars/SidebarData"; // Ensure correct import

export default function NextPageButton() {
  const router = useRouter();
  const currentPath = router.pathname.replace(/\/$/, ""); // Normalize path
  const [pages, setPages] = useState([]);
  const [nextPage, setNextPage] = useState(null);

  useEffect(() => {
    async function fetchSidebarData() {
      try {
        let sidebarModule;
        const sidebarMap = {
          "/apps/app-mon/": "app_mon_sidebar_data",
          "/ai": "AiSidebarData",
          "/ml": "MlSidebarData",
          "/about": "AboutSidebarData",
          "/faq": "FaqSidebarData",
          "/graph": "GraphSidebarData",
          "/help": "HelpGuideSidebarData",
          "/release": "ReleaseSidebarData",
          "/stream": "StreamSidebarData",
          "/rest-api/": "ApiSidebarData",
          "/use-cases/": "UseCasesSidebarData",
          "/examples-tryout-yourself/": "MlSidebarData",
          "/": "SidebarData", // Default fallback
        };

        let matchedKey = Object.keys(sidebarMap)
          .filter((key) => currentPath.startsWith(key))
          .sort((a, b) => b.length - a.length)[0];

        if (matchedKey) {
          if (sidebarMap[matchedKey] === "SidebarData") {
            sidebarModule = SidebarData;
          } else if (sidebarMap[matchedKey] === "app_mon_sidebar_data") {
            // Directly assign app_mon_sidebar_data
            sidebarModule = app_mon_sidebar_data;
          } else {
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

        // Function to extract all pages (including nested)
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

        // Find current page index
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
