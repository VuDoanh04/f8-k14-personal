const employees = [
    { id: 1, name: "Alice", age: 23, status: 'working' },
    { id: 2, name: "Bob", age: 25, status: 'working' },
    { id: 3, name: "Charlie", age: 27, status: 'working' },
    { id: 4, name: "David", age: 23, status: 'quited' },
    { id: 5, name: "Eve", age: 20, status: 'working' },
];

const products = [
    { id: 1, name: "Phone", price: 1200 },
    { id: 2, name: "Laptop", price: 3000  },
    { id: 3, name: "Tab", price: 2000  },
    { id: 4, name: "PC", price: 800  },
    { id: 5, name: "Monitor", price: 1500  },
]

const orders = [
    { id: 1, employeeId: 1, productId: 4, quantity: 1 },
    { id: 2, employeeId: 2, productId: 2, quantity: 4 },
    { id: 3, employeeId: 1, productId: 5, quantity: 1 },
    { id: 4, employeeId: 3, productId: 1, quantity: 2 },
    { id: 5, employeeId: 2, productId: 5, quantity: 3 },
    { id: 5, employeeId: 4, productId: 1, quantity: 1 },
    { id: 5, employeeId: 5, productId: 3, quantity: 2 },
];
//bài 1
const workingid = employees.filter((employee) => employee.status === 'working');
console.log(workingid);
//bài 2
let ageid = employees[0];

for (let i = 1; i < employees.length; i++) {
    if (employees[i].age > ageid.age) {
        ageid = employees[i];
    }
}
console.log(ageid);
//bai3
let priceid = products[0];
for (let i = 1; i < products.length; i++) {
    if (products[i].price < priceid.price) {
        priceid = products[i];
    }
}
console.log(priceid);
//bai4

