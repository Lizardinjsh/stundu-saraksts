import Diena from "./Diena";
function App() {
    const pirmdienasStundas = [
      "Sports",
      "Dabaszinibas",
      "Valoda un kultura",
      "Patstavigais darbs"
    ];
    return(
      <>

      <div>Stundu saraksts sodien</div>
      <Diena diena="Pirmdiena" stundas={pirmdienasStundas}/>

      </>
    )

  } 

export default App;

