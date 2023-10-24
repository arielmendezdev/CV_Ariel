import FormColor from "../components/formularios/FormColor";
import FormEdu from "../components/formularios/FormEdu";
import FormExp from "../components/formularios/FormExp";
import FormHab from "../components/formularios/FormHab";
import FormInfo from "../components/formularios/FormInfo";
import FormPerfil from "../components/formularios/FormPerfil";
import PDFGenerator from "../components/PDFGenerator";

export default function CrearCV() {
  return (
    <>
      <div className="div-crearcv">
        <div className="div-forms">
          <FormInfo />
          <FormHab />
          <FormPerfil />
          <FormEdu />
          <FormExp />
          <FormColor />
        </div>
        <div className="div-generador">
          <PDFGenerator />
        </div>
      </div>
    </>
  );
}
