class User {
    constructor(name , email) {
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log("view website data");
    }
}

class Admin extends User {
    constructor(name, email) {
        super(name , email); 
    }
    editData() {
        console.log("edit data");
    }
}

let student1 = new User("bhanu" , "abc@gmail.com");
let admin1 = new Admin("admin" , "ad@gmail.com");
