import { useState, useEffect } from "react";
import "../assets/css/Home.css";

export default function Home() {

  return (
    <div className="flex justify-center flex-col text-center mt-52 gap-10 mx-10">
      {/* <PDFGenerator/> */}
      <p className="text-4xl">Bienvenidos!!!</p>
      <p className="text-xl">
        Con esta app podrás crear tu CV y descargarlo en formato pdf y
        enviarlo posteriormente.
      </p>
    </div>
  );
}
