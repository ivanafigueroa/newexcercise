
const CARDS_CONTAINER = document.querySelector("#musica");
const GENDER = {
    id:1,
    genmusic: "Soundtrack",
    desc: "sound quiet",
    time: 3,
    fav_gender: {
        gender: ["pop", "Banda", "Rock", "Metal"],
    },
};

// Crea tarjeta 

const music = document.createElement("div");
const genmusic_section = document.createElement("h3");
const desc_section = document.createElement("p");
const time_section = document.createElement("p");
const gendero = document.createElement("div");

//Lista

const gendermusic = GENDER.fav_gender.gender.map(e =>{
    const item = document.createElement("ul");
    item.textContent = e;
    return item;
})
 console.log(music)

 // Crear segunda tarjeta

 genmusic_section = textContent = GENDER.genmusic;
 desc_section = textContent = GENDER.desc;
 time_section = textContent = GENDER.time;
 fav_gender.append(...music);
 music.append(genmusic_section, desc_section, time_section,gendero_section);

 CARDS_CONTAINER.appendChild(card);
 