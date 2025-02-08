import React, { useState } from "react";

import './../Styles/NavCategories.css';

export const NavCategories = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    
    const CategoriasNav = [
        { nombre: "Ofertas", marca : ["nike", "adidas", "puma", "crocs", "supreme", "skechers", "Converse"] , estado:"activado" },
        { nombre: "Nuevos", marca : ["nike", "adidas", "puma", "crocs", "supreme", "skechers", "Converse"] , estado:"activado" },
        { nombre: "Hombres", marca : ["nike", "adidas", "puma", "crocs", "supreme", "skechers", "Converse"] , estado:"activado" },
        { nombre: "Mujeres", marca : ["nike", "adidas", "puma", "crocs", "supreme", "skechers", "Converse"] , estado:"activado"},
        { nombre: "Niños", marca : ["nike", "adidas", "puma", "crocs", "supreme", "skechers", "Converse"] , estado:"activado"},
        { nombre: "Verano", marca : ["nike", "adidas", "puma", "crocs", "supreme", "skechers", "Converse"] , estado:"activado" },
        { nombre: "Accesorios", marca : ["nike", "adidas", "puma", "crocs", "supreme", "skechers", "Converse"] , estado:"activado" },
        { nombre: "Invierno" ,marca : ["nike", "adidas", "puma", "crocs", "supreme", "skechers", "Converse"] , estado:"desactivado"},
        { nombre: "Otoño" ,marca : ["nike", "adidas", "puma", "crocs", "supreme", "skechers", "Converse"] , estado:"desactivado"}
        ];

        const mostrarMenu = (categoria) => {
            setActiveMenu(activeMenu === categoria ? null : categoria);
          };

    return (
        <nav className="navbarC">
            <div className="navbar-items">
            {CategoriasNav.filter((categoria) => categoria.estado === "activado").map((categoria, index) => (
          <div
            key={index}
            className="navbar-item"
            onClick={() => mostrarMenu(categoria.nombre)}
            
          >
            <p>{categoria.nombre}</p>

            {/* Desplegable con subcategorías */}
            {activeMenu === categoria.nombre && (
              <div className="dropdown-menu" onMouseLeave={() => setActiveMenu(null)}>
                {categoria.marca.map((marca, subIndex) => (
                  <p key={subIndex}>{marca}</p>
                ))}
              </div>
            )}
          </div>
        ))}
            </div>
        </nav>

    );
}


