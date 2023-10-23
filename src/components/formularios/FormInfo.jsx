import { useContext, useState } from "react";
import { contexto } from "../../context/contextForm";

export default function FormInfo() {
  const { agregarInfo, cargarImagen } = useContext(contexto);

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [cpostal, setCpostal] = useState("");
  const [pais, setPais] = useState("");
  const [email, setEmail] = useState("");
  const [provincia, setProvincia] = useState("");
  const [localidad, setLocalidad] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    agregarInfo({
      nombre,
      apellido,
      telefono,
      cpostal,
      pais,
      localidad,
      email,
      provincia,
      imagen: null,
    });
  };

  return (
    <>
      <form
        className="px-4 border-2 w-100 rounded-lg text-center mt-2 mx-auto bg-slate-200"
        onSubmit={handleSubmit}
      >
        <h1 className="my-4 text-2xl">Informacion Personal</h1>
        <div className="row flex justify-center">
          <div className="mb-3 col-lg-3">
            <label className="form-label">Nombre</label>
            <input
              maxLength={60}
              type="text"
              className="form-control "
              onChange={(e) => setNombre(e.target.value)}
              autoFocus
            />
          </div>
          <div className="mb-3 col-lg-3">
            <label className="form-label">Apellido</label>
            <input
              maxLength={60}
              type="text"
              className="form-control"
              onChange={(e) => setApellido(e.target.value)}
            />
          </div>
          <div className="mb-3 col-lg-3">
            <label className="form-label">Telefono</label>
            <input
              maxLength={60}
              type="text"
              className="form-control"
              onChange={(e) => setTelefono(e.target.value)}
            />
          </div>
          <div className="mb-3 col-lg-3">
            <label className="form-label">Localidad</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputtext1"
              onChange={(e) => setLocalidad(e.target.value)}
            />
          </div>
        </div>
        <div className="row flex justify-center">
          <div className="mb-3 col-lg-2">
            <label className="form-label">C. Postal</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              onChange={(e) => setCpostal(e.target.value)}
            />
          </div>
          <div className="mb-3 col-lg-2">
            <label className="form-label">Pais</label>
            <input
              maxLength={60}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              onChange={(e) => setPais(e.target.value)}
            />
          </div>
          <div className="mb-3 col-lg-2">
            <label className="form-label">Provincia</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputtext1"
              onChange={(e) => setProvincia(e.target.value)}
            />
          </div>
          <div className="mb-3 col-lg-3">
            <label className="form-label">Email</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputtext1"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col-lg-3 flex items-center justify-center">
            <label className="btn btn-light">
              <span>Cargar foto</span>
              <input
                hidden
                accept=".png, .jpg"
                type="file"
                onChange={cargarImagen}
              />
            </label>
          </div>
        </div>
        <button className="btn btn-success m-3">Cargar datos</button>
      </form>
    </>
  );
}
