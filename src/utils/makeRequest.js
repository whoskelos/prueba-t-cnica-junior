/**
 * Simula una petición ajax con un tiempo de demora de 2 segundos devolviendo el callback de la promesa
 * @returns resolve o reject de la promesa de la petición
 */
export const loadOptions = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            fetch("../../src/data/menu.json")
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error(
                        "Error " +
                            response.status +
                            "al solicitar datos: " +
                            response.statusText
                    );
                })
                .then((data) => {
                    resolve(data);
                })
                .catch((error) => {
                    console.error(error);
                    reject(error);
                });
        }, 2000);
    });
};
