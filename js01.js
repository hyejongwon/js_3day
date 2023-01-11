var person = new Object(); 
person.firstName = "길동";
person.lastName = "홍";
person.age = 15;
person.getFullName = function () {
   return this.firstName + " " + this.lastName;
};

/* var person = { 
    firstName:'길동',
    lastName:"홍",
    age :15,
    getFullName = function () {
        return this.firstName + " " + this.lastName;
     }
} */
console.log(person.getFullName());