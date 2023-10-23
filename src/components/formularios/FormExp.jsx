import { useContext, useState } from "react";
import { contexto } from "../../context/contextForm";

export default function FormExp() {
  const { agregarExp } = useContext(contexto);

  const [empresa, setEmpresa] = useState("");
  const [puesto, setPuesto] = useState("");
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaSalida, setFechaSalida] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarExp({
      empresa,
      puesto,
      fechaInicio,
      fechaSalida,
      descripcion,
    });
  };

  return (
    <>
      <form
        className="px-4 border-2 w-100 rounded-lg text-center mt-5 mx-auto bg-slate-200"
        onSubmit={handleSubmit}
      >
        <h1 className="my-4 text-2xl">Cargar Experiencia Laboral</h1>
        <div className="row flex justify-center">
          <div className="mb-3 col-lg-3">
            <label className="form-label">Empresa</label>
            <input
              maxLength={60}
              type="text"
              className="form-control "
              onChange={(e) => setEmpresa(e.target.value)}
              autoFocus
            />
          </div>
          <div className="mb-3 col-lg-3">
            <label className="form-label">Puesto</label>
            <input
              maxLength={60}
              type="text"
              className="form-control "
              onChange={(e) => setPuesto(e.target.value)}
              autoFocus
            />
          </div>
          <div className="mb-3 col-lg-3">
            <label className="form-label">Fecha de Ingreso</label>
            <input
              maxLength={60}
              type="date"
              className="form-control"
              onChange={(e) => setFechaInicio(e.target.value)}
            />
          </div>
          <div className="mb-3 col-lg-3">
            <label className="form-label">Fecha de Egreso</label>
            <input
              type="date"
              className="form-control"
              id="exampleInputtext1"
              onChange={(e) => setFechaSalida(e.target.value)}
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
