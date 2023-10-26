import { useContext, useState } from "react";
import { contexto } from "../../context/contextForm";

export default function FormHab() {
  const { agregarHab } = useContext(contexto);

  const [lenguajes, setLenguajes] = useState("");
  const [frameWorks, setFrameWorks] = useState("");
  const [librerias, setLibrerias] = useState("");
  const [idiomas, setIdiomas] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarHab({
      lenguajes,
      frameWorks,
      librerias,
      idiomas
    });
  };

  return (
    <>
      <form
        className="px-4 border-2 rounded-lg text-center mt-5 w-100 mx-auto bg-slate-200"
        onSubmit={handleSubmit}
      >
        <h1 className="my-4 text-2xl">Habilidades</h1>
        <div className="row flex justify-center">
          <div className="mb-3 col-lg-4">
            <label className="form-label">LENGUAJES</label>
            <input
              maxLength={60}
              type="text"
              className="form-control "
              onChange={(e) => setLenguajes(e.target.value)}
            />
          </div>
          <div className="mb-3 col-lg-4">
            <label className="form-label">FRAMEWORKS</label>
            <input
              maxLength={60}
              type="text"
              className="form-control"
              onChange={(e) => setFrameWorks(e.target.value)}
            />
          </div>
          <div className="mb-3 col-lg-4">
            <label className="form-label">LIBRERIAS</label>
            <input
              maxLength={60}
              type="text"
              className="form-control"
              onChange={(e) => setLibrerias(e.target.value)}
            />
          </div>
        </div>
        <div className="row flex justify-center">
          <div className="mb-3 col-lg-6">
            <label className="form-label">IDIOMAS</label>
            <input
              maxLength={60}
              type="text"
              className="form-control "
              onChange={(e) => setIdiomas(e.target.value)}
            />
          </div>
        </div>
        <button className="btn btn-success m-3">Cargar datos</button>
      </form>
    </>
  );
}
