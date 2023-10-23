import { contexto } from "./contextForm";
import { useState } from "react";

export default function StateContextForm({ children }) {
  const [colorColumna, setColorColumna] = useState("#606060");
  const [colorBody, setColorBody] = useState("#ccc");
  const [textoColumna, setTextoColumna] = useState("#ffffff");
  const [textoBody, setTextoBody] = useState("#000000");
  const [imagen, setImagen] = useState(null);

  const fcolorcolumna = (e) => {
    setColorColumna(e.target.value);
  };
  const fcolorbody = (e) => {
    setColorBody(e.target.value);
  };
  const ftextocolumna = (e) => {
    setTextoColumna(e.target.value);
  };
  const ftextobody = (e) => {
    setTextoBody(e.target.value);
  };

  const cargarImagen = (e) => {
    const newImagen = e.currentTarget.files[0];
    const urlImage = URL.createObjectURL(newImagen);
    setImagen(urlImage);
  };

  const [informacion, setInformacion] = useState([{}])
  const agregarInfo = ({
    nombre,
    apellido,
    telefono,
    cpostal,
    pais,
    localidad,
    email,
    provincia,
    imagen,
  }) => {
    setInformacion([
      {
        nombre,
        apellido,
        telefono,
        cpostal,
        pais,
        localidad,
        email,
        provincia,
        imagen,
      }
    ])
  };

  const [perfil, setPerfil] = useState([])
  const agregarPerfil = ({ descripcion}) => {
    setPerfil([{ descripcion }])
  }

  const [habilidades, setHabilidades] = useState([])
  const agregarHab = ({ lenguajes, frameWorks, librerias, idiomas }) => {
    setHabilidades([{ lenguajes, frameWorks, librerias, idiomas }])
  }

  const [educacion, setEducacion] = useState([])
  const agregarEdu = ({ instituto, tituloRecibido, fechaIngreso, fechaEgreso, descripcion}) => {
    setEducacion([{
      instituto, tituloRecibido, fechaIngreso, fechaEgreso, descripcion
    }])
  }
  const eliminarEdu = () => {
    setEducacion(null)
  };


  const [experiencia, setExperiencia] = useState([])
  const agregarExp = ({ empresa, puesto, fechaInicio, fechaSalida, descripcion}) => {
    setExperiencia([{
      empresa, puesto, fechaInicio, fechaSalida, descripcion
    }])
  }
  const eliminarExp = () => {
    setExperiencia(null)
  };

  return (
    <>
      <contexto.Provider
        value={{
          informacion,
          agregarInfo,
          perfil,
          agregarPerfil,
          habilidades,
          agregarHab,
          educacion,
          agregarEdu,
          eliminarEdu,
          experiencia,
          agregarExp,
          eliminarExp,
          fcolorcolumna,
          fcolorbody,
          ftextocolumna,
          ftextobody,
          colorColumna,
          colorBody,
          textoColumna,
          textoBody,
          cargarImagen,
          imagen,
          setImagen,
        }}
      >
        {children}
      </contexto.Provider>
    </>
  );
}
