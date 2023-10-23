import { useContext } from "react";
import { contexto } from "../../context/contextForm";

export default function FormColor() {
  const { fcolorcolumna, fcolorbody, ftextocolumna, ftextobody } =
    useContext(contexto);

  return (
    <>
      <form className="px-4 border-2 rounded-lg text-center mt-5 mx-auto w-100 bg-slate-200">
        <h1 className="my-3 text-2xl">Elegi los colores del CV</h1>
        <div className="row mb-4 border rounded p-2 bg-slate-100 ">
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
