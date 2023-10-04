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
    return(
      <>

      <div>Stundu saraksts sodien</div>
      <Diena diena="Pirmdiena" stundas={pirmdienasStundas}/>
      <Diena diena="Otrdiena" stundas={otrdienasStundas} />

      </>
    )

  } 

export default App;

