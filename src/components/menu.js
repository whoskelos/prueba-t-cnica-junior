import { loadOptions } from "../../src/utils/makeRequest.js";
import "./menu.css";
export const menu = async (element) => {
    /**
     * @param text Texto del elemento el cual se hace click
     * @returns void
     */
    const alertMessage = (text) => {
        console.log(text);
        alert("esto es una descripción de la " + text);
    };
    try {
        const menuOptions = await loadOptions(); //Cargamos las opciones
        //Recorremos las opciones recibidas de la petición para crear los items
        const menuItems = menuOptions
            .map((option) => {
                let item = `<li><a href="#">${option.text}</a>`;
                if (option.options) {
                    item += `<ul class="submenu">`;
                    item += option.options
                        .map(
                            (subItem) =>
                                `<li><a href="#">${subItem.text}</a></li>`
                        ).join("");
                    item += `</ul>`;
                }
                item += `</li>`;
                return item;
            })
            .join("");
        //Insertamos los items en el DOM
        element.innerHTML = `<nav>
            <ul id="menu">
                ${menuItems}
            </ul>
        </nav>`;
        
        //Añadimos evento click a cada una de las opciones del menú
        const navItems = document.querySelectorAll("#menu > li");
        navItems.forEach((navItem) => {
            navItem.addEventListener("click", (e) => {
                //Comprobamos si hay submenu si hay submenú cogemos solo el texto del primer elemento
                if (e.target.querySelector("ul")) {
                    alertMessage(e.target.firstChild.wholeText);
                } else {
                    alertMessage(e.target.innerText);
                }
            });
        });
    } catch (error) {
        console.error("Error al cargar el menu: ", error);
    }
};
