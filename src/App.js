import Diena from "./Diena";
function App() {
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
      {dienasJSx}

      </>
    )

  } 

export default App;

