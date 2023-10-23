import { useContext, useState } from "react";
import { contexto } from "../../context/contextForm";

export default function FormEdu() {
  const { agregarEdu } = useContext(contexto);

  const [instituto, setInstituto] = useState("");
  const [tituloRecibido, setTituloRecibido] = useState("");
  const [fechaIngreso, setFechaIngreso] = useState("");
  const [fechaEgreso, setFechaEgreso] = useState("");
  const [descripcion, setDescripcion] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    agregarEdu({
      instituto,
      tituloRecibido,
      fechaIngreso,
      fechaEgreso,
      descripcion
    });
  };

  return (
    <>
      <form
        className="px-4 border-2 rounded-lg text-center mt-5 mx-auto bg-slate-200"
        onSubmit={handleSubmit}
      >
        <h1 className="my-4 text-2xl">Cargar Educacion</h1>
        <div className="row flex justify-center">
          <div className="mb-3 col-lg-3">
            <label className="form-label">Instituto</label>
            <input
              maxLength={50}
              type="text"
              className="form-control "
              onChange={(e) => setInstituto(e.target.value)}
              autoFocus
            />
          </div>
          <div className="mb-3 col-lg-3">
            <label className="form-label">Titulo Recibido</label>
            <input
              maxLength={50}
              type="text"
              className="form-control"
              onChange={(e) => setTituloRecibido(e.target.value)}
            />
          </div>
          <div className="mb-3 col-lg-3">
            <label className="form-label">Fecha de Ingreso</label>
            <input
              maxLength={50}
              type="date"
              className="form-control"
              onChange={(e) => setFechaIngreso(e.target.value)}
            />
          </div>
          <div className="mb-3 col-lg-3">
            <label className="form-label">Fecha de Egreso</label>
            <input
              type="date"
              className="form-control"
              id="exampleInputtext1"
              onChange={(e) => setFechaEgreso(e.target.value)}
            />
          </div>
        </div>
        <div className="row flex justify-center">
          <div className="mb-3 col-lg-12">
            <label className="form-label">Descripcion</label>
            <textarea
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </div>
        </div>
        <button className="btn btn-success m-3">Cargar datos</button>
      </form>
    </>
  );
}
