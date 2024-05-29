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
        let filtered = this.activities.filter((act) => act.id === id);
        this.activities = filtered;
    };
}

const repo = new Repository();
repo.createActivity('Title 1', 'Description 1', 'img1.jpg');
repo.createActivity('Title 2', 'Description 2', 'img2.jpg');
console.log(repo.getAllActivities());

repo.deleteActivity(1);
console.log(repo.getAllActivities());









