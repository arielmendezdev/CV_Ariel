import { useContext, useState } from "react"
import { contexto } from "../../context/contextForm"

export default function FormPerfil() {

  const { agregarPerfil } = useContext(contexto);

  const [descripcion, setDescripcion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarPerfil({
      descripcion
    });
  };

  return (
    <>
      <form
        className="px-4 border-2 rounded-lg text-center mt-5 w-100 mx-auto bg-slate-200"
        onSubmit={handleSubmit}
      >
        <h1 className="my-4 text-2xl">Agregar Perfil</h1>
        <div className="row flex justify-center">
          <div className="mb-3 col-lg-12">
            <label className="form-label">Perfil</label>
            <textarea
              maxLength={2000}
              type="text"
              className="form-control "
              onChange={(e) => setDescripcion(e.target.value)}
              autoFocus
            />
          </div>
        </div>
        <button className="btn btn-success m-3">Cargar datos</button>
      </form>
    </>
  );
}