import { useEffect, useState } from "react";
import Device from "./Device";

function Smarphone(props) {
  return (
    <div>
      {/* <button className="btn btn-apple-dark-green m-3 col" onClick={()=>{
        console.log('click');
      }}>Laptops</button> */}
    </div>
  );
}

function DevicesLista() {
  const [devices, setDevices] = useState([]);
  const [loading,setLoading]= useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/api/products");
      const data = await response.json();
      setLoading(false)
      console.log(data);
      setDevices(data);
    }

    fetchData();
  }, []);

  
  return (
    <div className="container ">
      <Smarphone />

      {loading ? (
        <h2>Cargando...</h2>
      ) : (
        <div className="row">
          {devices.map((device) => {
            return (
              <div className="col-md-4" key={device._id}>
                <Device device={device} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );

  

}

export default DevicesLista;
