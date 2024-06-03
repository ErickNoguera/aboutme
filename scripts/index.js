class Activity {
    constructor(id,title,description,imgUrl) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}

class Repository {
    constructor() {
        this.activities = [];
        this.id = 1
    }
getAllActivities = () => this.activities;

createActivity = (title,description,imgUrl) => {
    let newActivity = new Activity(this.id, title,description,imgUrl);
    this.id++;
    this.activities.push(newActivity);
    };
deleteActivity = (id) =>{
        this.activities = this.activities.filter((act) => act.id !== id);
    };
}


//Parte del DOM
const repo = new Repository()

function buildActivity(act) {
    const {id, title, description, imgUrl} = act
    const card = document.createElement('div');

    card.className = "card";
    card.id = id;

    const titleTag = document.createElement("h3")
    titleTag.innerText = title

    const descriptionTag = document.createElement("p")
    descriptionTag.innerText = description

    const imgTag = document.createElement("img")
    imgTag.src = imgUrl
    imgTag.alt = `imagen de ${act.title}`; 

    card.addEventListener('click', () => {
        repo.deleteActivity(id);
        buildActivities();
    });

    card.appendChild(titleTag);
    card.appendChild(descriptionTag);
    card.appendChild(imgTag);

    return card;
}

function buildActivities () {
    const container = document.getElementById("actividades-container");
    container.innerHTML = "";
    const activities = repo.getAllActivities();
    const activitiesHTML = activities.map((activ) => buildActivity(activ));


    activitiesHTML.forEach(element => {
        container.appendChild(element);
    });
}

function handleSubmit(event){
    event.preventDefault();
    const title = document.getElementById("titulo");
    const description = document.getElementById("descripcion");
    const imgUrl = document.getElementById("url-imagen")
    if (title.value == "" || description.value == "" || imgUrl.value == "") {
        alert("Todos los campos son obligatorios");
        return
    };
    repo.createActivity(title.value, description.value, imgUrl.value);
    buildActivities();
    title.value = "";
    description.value = "";
    imgUrl.value = "";
};

const button = document.getElementById("boton-agregar");
button.addEventListener("click",handleSubmit);














