import React, { useRef } from "react";
import jsPDF from "jspdf";
import InfoColumna from "./subcomps/InfoColumna";
import InfoBody from "./subcomps/InfoBody";
import "../assets/css/PDFGenerator.css";

import { useContext } from "react";
import { contexto } from "../context/contextForm";

export default function PdfGenerator() {
  const { setBtneliminar } = useContext(contexto);
  const contentRef = useRef(null);

  const generatePdf = () => {
    setBtneliminar("hidden");
    const doc = new jsPDF({
      orientation: "vertical",
      unit: "mm",
      format: [210, 297],
    });
    const content = contentRef.current;
    doc.html(content, {
      callback: function (pdf) {
        doc.deletePage(2);
        pdf.save("documento.pdf");
        setBtneliminar();
      },
    });
  };

  return (
    <>
      <div className="flex flex-col pdf-general">
        <div className="div-pdf">
          <div ref={contentRef}>
            <div className="pdf-cuerpo-general">
              <InfoColumna />
              <InfoBody />
            </div>
          </div>
        </div>
        <button className="btn-pdf btn btn-danger" onClick={generatePdf}>
          Generar PDF
        </button>
      </div>
    </>
  );
}
