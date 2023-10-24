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

  const [btneliminar, setBtneliminar] = useState()

  const cargarImagen = (e) => {
    const newImagen = e.currentTarget.files[0];
    const urlImage = URL.createObjectURL(newImagen);
    setImagen(urlImage);
  };

  const [informacion, setInformacion] = useState([{}])

  const agregarInfo = (info ) => {

    setInformacion([
      {
        nombre: info.nombre,
        apellido: info.apellido,
        telefono: info.telefono,
        cpostal: info.cpostal,
        pais: info.pais,
        localidad: info.localidad,
        email: info.email,
        provincia: info.provincia,
        imagen: info.imagen
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
  const agregarEdu = (infoEdu) => {
    const newEdu = 
      {
        id: educacion.length,
        instituto: infoEdu.instituto,
        tituloRecibido: infoEdu.tituloRecibido,
        fechaIngreso: infoEdu.fechaIngreso,
        fechaEgreso: infoEdu.fechaEgreso,
        descripcion: infoEdu.descripcion,
      }
    if (educacion.length < 3) {
      setEducacion([...educacion, newEdu])
    }
  }
  
  const eliminarEdu = (i) => {
    const update = educacion.filter(info => info.id !== i.id)
    setEducacion(update)
  };


  const [experiencia, setExperiencia] = useState([])
  const agregarExp = (infoExp) => {

    const newExp = {
      id: experiencia.length,
      empresa: infoExp.empresa,
      puesto: infoExp.puesto,
      fechaInicio: infoExp.fechaInicio,
      fechaSalida: infoExp.fechaSalida,
      descripcion: infoExp.descripcion,
    };

    if (experiencia.length < 3) {
      setExperiencia([...experiencia, newExp])
    }
  }
  const eliminarExp = (i) => {
    const update = experiencia.filter(info => info.id !== i.id)
    setExperiencia(update)
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
          btneliminar,
          setBtneliminar
        }}
      >
        {children}
      </contexto.Provider>
    </>
  );
}
