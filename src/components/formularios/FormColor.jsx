import { useContext } from "react";
import { contexto } from "../../context/contextForm";

export default function FormColor() {
  const { fcolorcolumna, fcolorbody, ftextocolumna, ftextobody } =
    useContext(contexto);

  return (
    <>
      <form
        className="p-2 bg-slate-200 border-2 rounded-lg text-center mt-5 w-100 mx-auto"
        
      >
        <h1 className="mb-3 text-2xl">Elegi los colores de tu CV</h1>
        <div className="row mb-4 border rounded p-2 bg-slate-100 w-75 mx-auto text-center">
          <div className="col-lg-3 flex justify-center items-center gap-2">
            <label htmlFor="">Columna</label>
            <input
              type="color"
              className="border-2 rounded-lg "
              onChange={fcolorcolumna}
            />
          </div>
          <div className="col-lg-3 flex justify-center items-center gap-2">
            <label htmlFor="">Body</label>
            <input
              type="color"
              className="border-2 rounded-lg"
              onChange={fcolorbody}
            />
          </div>
          <div className="col-lg-3 flex justify-center items-center gap-2">
            <label htmlFor="">Texto Columna</label>
            <input
              type="color"
              className="border-2 rounded-lg "
              onChange={ftextocolumna}
            />
          </div>
          <div className="col-lg-3 flex justify-center items-center gap-2">
            <label htmlFor="">Texto Body</label>
            <input
              type="color"
              className="border-2 rounded-lg"
              onChange={ftextobody}
            />
          </div>
        </div>
      </form>
    </>
  );
}
