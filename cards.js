/*
Crear tarjeta
Crear Secciones p/tarjeta
img
Nombre, desc, edad, lista de algo
[] Insertar en la tarjeta
[] Mostrar dentro de div.container
[] Crear funciones reutilizables
[]
*/

const CARDS_CONTAINER = document.querySelector("#card-container");
const USERS = {
    id:1,
    username: "User Name",
    desc: "Sobre mi",
    age: 26,
    fav_books: {
        books: ["Brida", "Fantasia","Angeles y demonios", "El principito"],
    },
};

//Crear secciones de nuestra tarjeta
function createElement(){
    const card0bj = {
        name_section: document.createElement("h3"),
        desc_section: document.createElement("p"),
        age_section: document.createElement("p"),
        book_section: document.createElement("div"),
    };
    return card0bj;
}

//Crear tarjeta
//Inyectamos info

function injectData(obj,user) {
    const bookList = user.fav_books.books.map (
        (e) => {
            const item = document.createElement("ul");
            item.textContent = e;
            return item;
        }
    )
    obj.name_section.textContent = user.username;
    obj.desc_section.textContent = user.desc;
    obj.age_section.textContent = user.age;
    obj.book_section.append(...bookList);
    renderCard(obj);
}

function renderCard(cardObj) {
    const card = document.createElement("div");
    card.append (
        cardObj.name_section,
        cardObj.desc_section,
        cardObj.age_section,
        cardObj.book_section,
    );
    card.className = "div-creado";
    CARDS_CONTAINER.appendChild(card);


}

USERS.forEach ( (user) => {
    const cardData = createElements();
    injectData(cardData, user);
});


