import { useContext } from "react";
import { contexto } from "../../context/contextForm";

export default function InfoBody() {
  const { colorBody, textoBody, perfil, educacion, experiencia } =
    useContext(contexto);

  return (
    <>
      <div
        className="pdf-body"
        style={{
          backgroundColor: colorBody,
          color: textoBody,
          gridColumn: "span 2",
        }}
      >
        {perfil.length > 0 ? (
          <div>
            <div className="flex flex-col">
              <h1 className="titulo-general">Perfil</h1>
            </div>
            <h1 className="texto-perfil">{perfil[0].descripcion}</h1>
            <div className="linea" style={{ background: textoBody }}></div>
          </div>
        ) : null}

        <div className="div-educacion">
          {educacion.length > 0 ? (
            <div className="flex flex-col">
              <h1 className="titulo-general">Educación</h1>
            </div>
          ) : null}
          {educacion
            ? educacion.map((educ, i) => {
                return (
                  <div key={i} className="body-educacion">
                    <div className="flex justify-between align-items-end">
                      <h1 className="educ-instituto">{educ.instituto}</h1>
                      <div>
                        <h1 className="educ-fecha">
                          {educ.fechaIngreso} / {educ.fechaEgreso}
                        </h1>
                      </div>
                    </div>
                    <h1 className="educ-titulo">» {educ.tituloRecibido}</h1>
                    <h1 className="educ-descripcion">{educ.descripcion}</h1>
                  </div>
                );
              })
            : null}
          {educacion.length > 0 ? (
            <div
              className="linea"
              style={{
                background: textoBody,
                width: "100%",
                marginTop: "5px",
                opacity: "0.3",
              }}
            ></div>
          ) : null}
        </div>

        <div className="div-experiencia">
          {experiencia.length > 0 ? (
            <div className="flex flex-col">
              <h1 className="titulo-general">Experiencia</h1>
            </div>
          ) : null}
          {experiencia
            ? experiencia.map((exp, i) => {
                return (
                  <div key={i} className="body-experiencia">
                    <div className="flex justify-between align-items-end">
                      <h1 className="exp-puesto">» {exp.puesto}</h1>
                      <div>
                        <h1 className="exp-fecha">
                          {exp.fechaInicio} / {exp.fechaSalida}
                        </h1>
                      </div>
                    </div>
                    <h1 className="exp-descripcion">{exp.descripcion}</h1>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
}
