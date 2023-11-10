import Diena from "./Diena";
import { useEffect, useState } from "react";

function App() {
  
  const [lessons, setLessons] = useState({});
  const [loading, setLoading] = useState("true");

  useEffect(() => {
    async function getLessons(){
      const response = await fetch(
        "https://cheese-cake.onthewifi.com/api/lessons"
    );
      const data = await response.json();
      console.log(data.IPb22[4].classes);
      setLessons(data);
      setLoading(false);
      const cleansetData = {
        diena: "pirmdiena",
        stundas: data.IPb22[0].classes,
      },
      {
        diena: "otrdiena",
        stundas: data.IPb22[1].classes,
      },
      {
        diena: "tresdiena",
        stundas: data.IPb22[2].classes,
      },
      {
        diena: "cetrutdiena",
        stundas: data.IPb22[3].classes,
      },
      {
        diena: "piektdiena",
        stundas: data.IPb22[4].classes,
      },
    };


  }, []);
    const pirmdienasStundas = [
      "Sports",
      "Dabaszinibas",
      "Valoda un kultura",
      "Patstavigais darbs"
    ];

    const otrdienasStundas = [
      "Matematika",
      "Latviesu valoda",
      "Patstavigais darbs",
      "Patstavigais darbs"
    ];
    const visasStundas = [
      {diena: "Pirmdiena",
      stundas: [
              "Sports pie Klintas",
              "Dabaszinibas milu fiziku",
              "Valoda un kultura",
              "Patstavigais darbs"
      ]
    },
      {diena: "Otrdiena",
      stundas: [
              "Matematika",
              "Latviesu valoda",
              "Patstavigais darbs",
              "Patstavigais darbs"
      ]
    },
      {diena: "Tresdiena",
      stundas: [
              "Matematika",
              "Anglu valoda",
              "Patstavigais darbs",
      ]
    },
      {diena: "Cetrutdiena",
      stundas: [
              "Sports",
              "Krievu valoda",
              "Patstavigais darbs",
              "Patstavigais darbs"
      ]
    },
      {diena: "Piektdiena",
      stundas: [
              "Matematika",
              "Programmesana",
      ],
    },
  ];

const dienasJSx = visasStundas.map((diena, indekss) => {
  return <Diena key={indekss} diena={diena.diena} stundas={diena.stundas} />;
    });
    

    
    return(
      <>

      <div>Sis nedelas stundu saraksts</div>
      {loading ? <p>Loading...</p> : dienasJSx}

      </>
    )

  } 

export default App;

