import { useEffect, useState } from "react";
import Device from "./Device";
import { TransitionGroup, CSSTransition } from "react-transition-group";


function Smarphone(props) {
  return (
    <div>
      {/* <button className="btn btn-apple-dark-green m-3 col" onClick={()=>{
        console.log('click');
      }}>Laptops</button> */}
    </div>
  );
}

// function DevicesLista() {
//   const [devices, setDevices] = useState([]);
//   const [loading,setLoading]= useState(true);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch("https://productsapp.fly.dev/api/products");
//       const data = await response.json();
//       setLoading(false)
//       console.log(data);
//       setDevices(data);
//     }

//     fetchData();
//   }, []);

  
//   return (
//     <div className="container ">
//       {/* <Smarphone /> */}
//       {loading ? (
//         <h2>Cargando...</h2>
//       ) : (
//         <div className="row">
//           {devices.map((device) => {
//             return (
//               <div className="col-md-4" key={device._id}>
//                 <Device device={device} />
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }


function DevicesLista() {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://productsapp.fly.dev/api/products");
      const data = await response.json();
      setLoading(false);
      setDevices(data);
    }

    fetchData();
  }, []);

  function handleCategoryClick(category) {
    setSelectedCategory(category);
  }

  const filteredDevices = selectedCategory
    ? devices.filter((device) => device.category === selectedCategory)
    : devices;

  return (
    <div className="row justify-content-center align-items-center">
      <div className="btn-group mb-3" role="group">
        <button
          type="button"
          className={`btn ${
            selectedCategory === null
              ? "btn-apple-dark-green"
              : "btn-outline-apple-green"
          }`}
          onClick={() => handleCategoryClick(null)}
        >
          Todos
        </button>
        <button
          type="button"
          className={`btn ${
            selectedCategory === "Smartphone"
              ? "btn-apple-dark-green"
              : "btn-outline-apple-green"
          }`}
          onClick={() => handleCategoryClick("Smartphone")}
        >
          Smartphones
        </button>
        <button
          type="button"
          className={`btn ${
            selectedCategory === "Laptop"
              ? "btn-apple-dark-green"
              : "btn-outline-apple-green"
          }`}
          onClick={() => handleCategoryClick("Laptop")}
        >
          Laptops
        </button>
        <button
          type="button"
          className={`btn ${
            selectedCategory === "Smartwatch"
              ? "btn-apple-dark-green"
              : "btn-outline-apple-green"
          }`}
          onClick={() => handleCategoryClick("Smartwatch")}
        >
          Smartwatches
        </button>
      </div>

      {loading ? (
        <h2>Cargando...</h2>
      ) : (
        <div className="row">
          {filteredDevices.map((device) => {
            return (
              <div className="col-md-4" key={device._id}>
                <Device device={device} />
              </div>
            );
          })}
        </div>

        // <TransitionGroup className="row">
        //   {filteredDevices.map((device) => (
        //     <CSSTransition key={device._id} classNames="fade" timeout={300}>
        //       <div className="col-md-4">
        //         <Device device={device} />
        //       </div>
        //     </CSSTransition>
        //   ))}
        // </TransitionGroup>
      )}
    </div>
  );
}

export default DevicesLista;
