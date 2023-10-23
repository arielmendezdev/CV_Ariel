import { useContext } from "react";
import { contexto } from "../../context/contextForm";

export default function InfoColumna() {
  const { informacion, habilidades, colorColumna, textoColumna, imagen } =
    useContext(contexto);

  return (
    <>
      <div
        className="pdf-columna"
        style={{
          backgroundColor: colorColumna,
          color: textoColumna,
        }}
      >
        <div className="div-imagen">
          {imagen ? <img src={imagen} alt="" className="pdf-imagen" /> : null}
        </div>

        <div className="div-informacion">
          <div className="pdf-container-nombre">
            <h1 className="">
              {informacion[0].nombre} {informacion[0].apellido}
            </h1>
          </div>
          <div className="pdf-container-info">
            {informacion[0].telefono ? (
              <h1 className="pdf-text pdf-text-info">
                <b>Tel: </b> {informacion[0].telefono}
              </h1>
            ) : null}
            {informacion[0].pais ? (
              <h1 className="pdf-text pdf-text-info">
                <b>Pais:</b> {informacion[0].pais}
              </h1>
            ) : null}
            {informacion[0].provincia ? (
              <h1 className="pdf-text pdf-text-info">
                <b>Provincia:</b> {informacion[0].provincia}
              </h1>
            ) : null}
            {informacion[0].localidad ? (
              <h1 className="pdf-text pdf-text-info">
                <b>Ciudad:</b> {informacion[0].localidad}
              </h1>
            ) : null}
            {informacion[0].cpostal ? (
              <h1 className="pdf-text pdf-text-info">
                <b>CP:</b> {informacion[0].cpostal}
              </h1>
            ) : null}
            {informacion[0].email ? (
              <h1 className="pdf-text pdf-text-info">
                <b>Email:</b> {informacion[0].email}
              </h1>
            ) : null}
          </div>
        </div>

        {habilidades.length > 0 ? (
          <div className="div-habilidades">
            <h1 className="habilidades">Habilidades</h1>
            {habilidades.map((hab, i) => {
              return (
                <div key={i} className="flex flex-col">
                  {hab.lenguajes ? (
                    <div>
                      <h1 className="titulo-habilidades">Lenguajes</h1>
                      <div className="info-habilidades">
                        <h1 className="cada-habilidades">{hab.lenguajes}</h1>
                      </div>
                    </div>
                  ) : null}
                  {hab.frameWorks ? (
                    <div>
                      <h1 className="titulo-habilidades">FrameWorks</h1>
                      <div className="info-habilidades">
                        <h1 className="cada-habilidades">{hab.frameWorks}</h1>
                      </div>
                    </div>
                  ) : null}
                  {hab.librerias ? (
                    <div>
                      <h1 className="titulo-habilidades">Librerias</h1>
                      <div className="info-habilidades">
                        <h1 className="cada-habilidades">{hab.librerias}</h1>
                      </div>
                    </div>
                  ) : null}
                  {hab.idiomas ? (
                    <div>
                      <h1 className="titulo-habilidades">Idiomas</h1>
                      <div className="info-habilidades">
                        <h1 className="cada-habilidades">{hab.idiomas}</h1>
                      </div>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </>
  );
}
