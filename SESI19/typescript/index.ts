const hello: string = "hello world!";

console.log(hello);

let address: string = "Kebayoran";

function getProfileTS(name: string, age: number) {
  console.log(`Hello, ${name}!, your age is ${age} old`);
}
function getProfileTSOptional(name?: string, age?: number) {
  console.log(`Hello, ${name}!, your age is ${age} old`);
}

getProfileTS("Bobi", 22);
getProfileTSOptional("Bobu");

let students: any[] = [["nama", true, 123], 123, "string"];

let students1: (string | number | boolean)[] = ["email", true, 123];

//deklarasi object TS

//cara 1
let personTS: {
  name: string;
  age: number;
  address?: string;
} = {
  name: "namanya",
  age: 5,
};

let personTS2: {
  name: string;
  age: number | string;
} = {
  name: "namanya",
  age: "5",
};

//interface - cara 2
interface IPerson {
  name: string;
  age: number | string;
  score?: number;
}

let personTS3: IPerson = {
  name: "person",
  age: 22,
  score: 88,
};
let personTS4: IPerson = {
  name: "person",
  age: 22,
};

class Student implements IPerson {
  private id: number | undefined;

  public name: string;
  public age: number;

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
}

let employees: IPerson[] = [
  {
    name: "",
    age: 0,
    score: 100,
  },
  personTS3,
];

class Customer {
  name: string;
  age: number;
  money: number;
  items: string[] = ["buku", "laptop"];

  constructor(name: string, age: number, money: number) {
    this.name = name;
    this.age = age;
    this.money = money;
  }

  updateDataMoney(money: number) {
    this.money = money;
  }

  addItem(itemName: any) {
    this.items.push(itemName);
  }
}

const raihan = new Customer("Raihan", 12, 50000);
raihan.updateDataMoney(100000);
raihan.addItem("HP");
console.log(raihan);

class Shop {
  customers: Customer[] = [];

  addCustomer(newCustomer: Customer) {
    this.customers.push(newCustomer);
  }
}

const shop = new Shop();
shop.addCustomer(raihan);
console.log(shop);

class Employee {
  private code: string;
  public name: string;

  constructor(name: string, code: string) {
    this.name = name;
    this.code = code;
  }

  getCode() {
    return this.code;
  }
}

class SalesEmployee extends Employee{
    getSalesCode(){
        return "sales "+this.name+this.getCode()
    }
}

let emp = new Employee("Mawar", "M09");
console.log(emp.getCode())
