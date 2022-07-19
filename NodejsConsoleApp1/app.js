console.log('Hello world');
const message = 'Hello! TypeScript';
let myName = 'Alice';
console.log(myName);
console.log(message);
function hello2(name) {
    console.log("Hello " + name + "!");
}
let yourName = 'Taro';
hello2(yourName);
let v_bool = true;
let v_num = 123;
let v_str = "ABCDEFG";
let v_arr1 = ["Red", "Green", "Blue"];
let v_arr2 = ["Red", "Green", "Blue"];
let v_tuple = ["Yamada", 26];
let v_obj = { "name": "Yamada", "age": 26 };
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let v_enm = Color.Green;
class MyClass {
    greeting() {
        return `test${this.name}`;
    }
}
let val_class = new MyClass();
let v_any = 4;
/*
function error(msg: string): never {
    let aaa = 10
    console.log(msg)

    throw��������悢����
}

error(v_str)
*/
let v_null = null;
let v_undef = undefined;
let foo = {};
foo.name = 'Yamada';
let bar = {};
bar.name = 'Ken';
let flag = true;
console.log(flag);
const user = {
    id: 100
};
function greeter(person) {
    console.log("name=" + person.name + " age=" + person.age);
}
greeter(foo);
val_class.name = 'nomoto';
console.log(val_class.greeting());
class TestPerson {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
let testPerson = new TestPerson('iro', 'megane');
console.log(testPerson.fullName());
class TestUser extends TestPerson {
    constructor(firstName, lastName, isAdmin) {
        super(firstName, lastName);
        this.isAdmin = isAdmin;
    }
    yourFirstName() {
        return this.firstName;
    }
}
let testUser = new TestUser('myTest', 'myUser', true);
console.log(testUser.fullName());
console.log(testUser.yourFirstName());
console.log(typeof (v_bool));
console.log(typeof (v_str));
const fruits = ['ccc', 'aaa', 'bbb'];
console.log(typeof fruits);
//# sourceMappingURL=app.js.map