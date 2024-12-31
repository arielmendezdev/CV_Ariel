import { useState, useEffect } from "react";
import "../assets/css/Home.css";
import createCV from "../assets/img/createCV.webp";

export default function Home() {

  return (
    <div className="flex justify-center text-center mt-10 gap-10 mx-10 flex-wrap">
      {/* <PDFGenerator/> */}
      <div>
        <img src={createCV} alt="" width={400}/>
      </div>
      <div className="flex justify-center flex-col gap-10">
        <p className="text-4xl">Bienvenidos!!!</p>
        <p className="text-xl">
          Con esta app podrás crear tu CV y descargarlo en formato PDF y
          enviarlo posteriormente.
        </p>
      </div>
    </div>
  );
}
