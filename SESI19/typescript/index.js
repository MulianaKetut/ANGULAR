var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var hello = "hello world!";
console.log(hello);
var address = "Kebayoran";
function getProfileTS(name, age) {
    console.log("Hello, " + name + "!, your age is " + age + " old");
}
function getProfileTSOptional(name, age) {
    console.log("Hello, " + name + "!, your age is " + age + " old");
}
getProfileTS("Bobi", 22);
getProfileTSOptional("Bobu");
var students = [["nama", true, 123], 123, "string"];
var students1 = ["email", true, 123];
//deklarasi object TS
//cara 1
var personTS = {
    name: "namanya",
    age: 5
};
var personTS2 = {
    name: "namanya",
    age: "5"
};
var personTS3 = {
    name: "person",
    age: 22,
    score: 88
};
var personTS4 = {
    name: "person",
    age: 22
};
var Student = /** @class */ (function () {
    function Student(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    return Student;
}());
var employees = [
    {
        name: "",
        age: 0,
        score: 100
    },
    personTS3,
];
var Customer = /** @class */ (function () {
    function Customer(name, age, money) {
        this.items = ["buku", "laptop"];
        this.name = name;
        this.age = age;
        this.money = money;
    }
    Customer.prototype.updateDataMoney = function (money) {
        this.money = money;
    };
    Customer.prototype.addItem = function (itemName) {
        this.items.push(itemName);
    };
    return Customer;
}());
var raihan = new Customer("Raihan", 12, 50000);
raihan.updateDataMoney(100000);
raihan.addItem("HP");
console.log(raihan);
var Shop = /** @class */ (function () {
    function Shop() {
        this.customers = [];
    }
    Shop.prototype.addCustomer = function (newCustomer) {
        this.customers.push(newCustomer);
    };
    return Shop;
}());
var shop = new Shop();
shop.addCustomer(raihan);
console.log(shop);
var Employee = /** @class */ (function () {
    function Employee(name, code) {
        this.name = name;
        this.code = code;
    }
    Employee.prototype.getCode = function () {
        return this.code;
    };
    return Employee;
}());
var SalesEmployee = /** @class */ (function (_super) {
    __extends(SalesEmployee, _super);
    function SalesEmployee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SalesEmployee.prototype.getSalesCode = function () {
        return "sales " + this.name + this.getCode();
    };
    return SalesEmployee;
}(Employee));
var emp = new Employee("Mawar", "M09");
console.log(emp.getCode());
