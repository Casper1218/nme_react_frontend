// import './App.css'
// import Nba from "./Nba";
import Header from "./Header";
import Footer from "./Footer";
import Teams from "./Teams";
import Schedule from "./Schedule";
import Champion from "./champion";

function App() {
  return (
    <>
      <Header />
      <Teams />
      <Schedule />
      <Champion name="nicks" champion={false} />
      < Footer />
    </>
  );
}

export default App
