"use client";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function ExportPDF() {
  const handleExport = async () => {
    const element = document.body;
    const canvas = await html2canvas(element);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const width = pdf.internal.pageSize.getWidth();
    const height = (canvas.height * width) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, width, height);
    pdf.save("dashboard.pdf");
  };

  return (
    <div className="flex justify-end">
      <button
        onClick={handleExport}
        className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
      >
        Export to PDF
      </button>
    </div>
  );
}
