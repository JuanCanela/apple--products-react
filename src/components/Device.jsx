

function Device({device}) {
    return (
      <div className="text-center card card-body p-3 m-2">
        <h4>{device.name}</h4>
        <img className="img-fliud" src={device.imgURL} alt={device.name} />
        <p>
          <span><b>Precio:</b></span> ${device.price.toLocaleString()} <br/>
          <span><b>Categoria:</b></span> {device.category} 
        </p>

         <button className="btn btn-apple-green text-white">Comprar</button>

      </div>
    );
}

export default Device;