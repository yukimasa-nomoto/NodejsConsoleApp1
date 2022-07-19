console.log('Hello world');

const message: string = 'Hello! TypeScript'

let myName = 'Alice'
console.log(myName)

console.log(message)

function hello2(name: string): void {
    console.log("Hello " + name + "!")
}

let yourName = 'Taro'

hello2(yourName)

let v_bool: boolean = true;
let v_num: number = 123;
let v_str: string = "ABCDEFG";

let v_arr1: string[] = ["Red", "Green", "Blue"];
let v_arr2: Array<string> = ["Red", "Green", "Blue"];
let v_tuple: [string, number] = ["Yamada", 26];

let v_obj: object = { "name": "Yamada", "age": 26 };

enum Color { Red, Green, Blue }
let v_enm: Color = Color.Green

class MyClass {
    name: string
    greeting(): string {
        return `test${this.name}`
    }
}
let val_class: MyClass = new MyClass()

let v_any: any = 4

/*
function error(msg: string): never {
    let aaa = 10
    console.log(msg)

    throw‚¾‚Á‚½‚ç‚æ‚¢‚©‚à
}

error(v_str)
*/

let v_null: null = null;
let v_undef: undefined = undefined;

interface Person {
    name: string
    age: number
}

let foo = <Person>{}
foo.name = 'Yamada'

let bar = {} as Person
bar.name = 'Ken'

type myBool = boolean
let flag: myBool = true

console.log(flag)


const user: { readonly id: number; name?: string } = {
    id:100
}

function greeter(person: Person) {
    console.log("name="+person.name+" age="+person.age)
}

greeter(foo)

val_class.name = 'nomoto'
console.log(val_class.greeting())


class TestPerson {
    protected firstName: string
    lastName: string
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
    }
    fullName(): string {
        return `${this.firstName} ${this.lastName}`
    }
}


let testPerson = new TestPerson('iro', 'megane')
console.log(testPerson.fullName())

class TestUser extends TestPerson {
    isAdmin: boolean
    constructor(firstName: string, lastName: string
        , isAdmin: boolean) {
        super(firstName, lastName);
        this.isAdmin = isAdmin
    }

    yourFirstName(): string {
        return this.firstName
    }
}

let testUser = new TestUser('myTest', 'myUser', true)

console.log(testUser.fullName())
console.log(testUser.yourFirstName())

console.log(typeof (v_bool))
console.log(typeof (v_str))

const fruits = [100, 'aaa', 'bbb']
console.log(typeof fruits)

//const fruits2 = ['ccc', 'aaa', 'bbb'] as const
//console.log(typeof fruits[number])

const constUser = {
    firstName: 'JJJ',
    secondName: 'LLL'
} as const

//constUser.firstName = 'KKK'
