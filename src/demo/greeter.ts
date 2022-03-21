class Student {
     fullName: string
    constructor(public firstName, public lastName) {
        this.fullName = firstName +' '+ lastName
    }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person:Person) {
  return "hello world" +person.firstName+ 'and'+ person.lastName;
}

let user = new Student('jane', 'cobe')

document.body.innerHTML = greeter(user);
