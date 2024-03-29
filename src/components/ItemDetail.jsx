import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col d-flex align-items-center justify-content-end">
                    <img src={item.imagen} alt={item.nombre} />
                </div>
                <div className="col d-flex align-items-center">
                    <div>
                        <h1>{item.nombre}</h1>
                        <h5>{item.calorias} kcal</h5>
                        <p>{item.descripcion}</p>
                        <p><b>${item.precio}</b></p>
                        <ItemCount stock={item.stock} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;