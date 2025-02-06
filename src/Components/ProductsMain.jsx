import './../Styles/ProductsMain.css';
import nike from './../img/nike.jpg';
import { useNavigate } from 'react-router-dom';

export const ProductsMain = () => {

    const navigate = useNavigate();

    const irAproduct = () => {
        navigate('/product'); 
    }; 
    
    const Productos = [
        { marca: "nike", modelo: "1", stock : 1, precio: "330"},
        { marca: "nike", modelo: "2", stock : 3, precio: "170"},
        { marca: "nike", modelo: "3", stock : 0, precio: "150"},
        { marca: "nike", modelo: "4", stock : 5, precio: "500"},
        { marca: "nike", modelo: "5", stock : 3, precio: "400"},
        ];
    

    return (
      <div className="Card1">
        <h1 className="titleR">Recomendadas para ti</h1>
        <div class="card-container">
          {Productos.filter((p) => p.stock >= 1).map((p) => (
            <div className="product-card" onClick={irAproduct}>
              {/* Imagen del producto */}
              <div className="product-image-container">
                <img src={nike} className="product-image" />
              </div>

              {/* Información del producto */}
              <div className="product-details">
                <p className="product-title">
                  {p.marca}
                  <br /> {p.modelo}
                </p>
                <p className="lowest-ask">Precio</p>
                <p className="product-price">${p.precio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
    
}