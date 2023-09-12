import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <section className="Section">
      <div className="Content">
        <div className="Header">
          <div className="Logo">
            <img
              className="LogoImage"
              src="spacex-logo-png_kopiya.png"
              alt="spaceX"
            />
          </div>
          <Navbar />
        </div>
        <div className="Container">
          <div className="Text">
            <span className="Gradient">ПУТЕШЕСТВИЕ</span><br />
            <span className="Gradient2">на красную планету</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
