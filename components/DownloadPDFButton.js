import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const DownloadPDFButton = () => {
  const [html2pdf, setHtml2pdf] = useState(null);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    import("html2pdf.js").then((mod) => setHtml2pdf(() => mod.default || mod));
  }, []);

  const handleDownloadPDF = () => {
    if (!html2pdf) return;

    const element = document.getElementById("article-content");
    if (!element) {
      console.error("Element with ID 'article-content' not found.");
      return;
    }

    setIsDownloading(true); // Show "Downloading..." message

    const title = element.querySelector("h1")?.innerText || "download";

    // Inject CSS to prevent content from splitting across pages
    const style = document.createElement("style");
    style.innerHTML = `
      * {
        box-sizing: border-box;
      }
      img, p, h1, h2, h3, h4, h5, h6, pre, code, blockquote, ul, li, table {
        page-break-inside: avoid;
        break-inside: avoid;
        margin-bottom: 5px;
      }
      .page-break {
        page-break-before: always;
        margin-bottom: 0;
      }
      #article-content {
        overflow: hidden !important;
        line-height: 1.4;
        font-size: 14px;
        width: 100%;
        max-width: 800px; /* Ensures proper width */
      }
    `;
    document.head.appendChild(style);

    const options = {
      margin: [15, 15, 20, 15], // Smaller margins for better fit
      filename: `${title.replace(/\s+/g, "_").toLowerCase()}.pdf`,
      image: { type: "jpeg", quality: 1.0 },
      html2canvas: {
        scale: 1.5, // Lower scale for better fit
        useCORS: true,
        scrollY: 0,
        letterRendering: true,
      },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait",
      },
      pagebreak: { mode: "avoid-all" }, // Avoids breaking images or text
    };

    html2pdf()
      .set(options)
      .from(element)
      .toPdf()
      .get("pdf")
      .then((pdf) => {
        const totalPages = pdf.internal.getNumberOfPages();
        for (let i = 1; i <= totalPages; i++) {
          pdf.setPage(i);
          pdf.setFontSize(10);
          const pageWidth = pdf.internal.pageSize.getWidth();
          const pageHeight = pdf.internal.pageSize.getHeight();
          const textWidth = pdf.getTextWidth(`Page ${i} of ${totalPages}`);
          pdf.text(
            `Page ${i} of ${totalPages}`,
            (pageWidth - textWidth) / 2,
            pageHeight - 10 // Adjusted position to avoid overlapping with content
          );
        }

        pdf.save(`${title.replace(/\s+/g, "_").toLowerCase()}.pdf`);
        document.head.removeChild(style); // Clean up injected CSS
        setIsDownloading(false); // Hide message after download
      })
      .catch(() => {
        setIsDownloading(false); // Hide message on error
      });
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}
    >
      <button
        onClick={handleDownloadPDF}
        disabled={isDownloading}
        style={{
          padding: "10px 20px",
          background: isDownloading ? "#ccc" : "#1769e0",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: isDownloading ? "not-allowed" : "pointer",
        }}
      >
        {isDownloading ? "Downloading..." : "Download as PDF"}
      </button>
    </div>
  );
};

// Ensure this component runs only on the client side
export default dynamic(() => Promise.resolve(DownloadPDFButton), {
  ssr: false,
});
