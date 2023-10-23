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
      <div className="flex w-50">
        <div className="flex flex-col mx-4">
          <FormInfo />
          <FormHab />
          <FormPerfil />
          <FormEdu />
          <FormExp />
          <FormColor />
        </div>

        <div className="div-pdf-flotante">
          <PDFGenerator />
        </div>
      </div>
    </>
  );
}
