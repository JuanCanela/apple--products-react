
import DevicesList from "./components/DevicesList";
import Footer from "./components/Footer";
import Section from "./components/Section";

function App() {
  return (
    <div >
      <nav className="navbar navbar-expand-lg bg-apple-gray ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <button className="btn btn-dark"> Apple Products</button>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Tienda
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Nosotros
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <Section />
      </div>
      <div className="container form-control">
        <h1 className="text text-center">Equipos de Apple</h1>
        <div className="container">
          <div className="row align-items-center">
            <button className="btn btn-apple-dark-green m-3 col">Laptops</button>
            <button className="btn btn-apple-dark-green m-3 col">Smarphone</button>
            <button className="btn btn-apple-dark-green m-3 col">SmartWatch</button>
          </div>
        </div>
        <DevicesList />
      </div>

      <Footer />
    </div>
  );

}

export default App;
