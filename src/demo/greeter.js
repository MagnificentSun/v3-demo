var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + ' ' + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "hello world" + person.firstName + 'and' + person.lastName;
}
var user = new Student('jane', 'cobe');
document.body.innerHTML = greeter(user);
