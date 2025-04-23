/*
* array: mang /list
*
* *//*
const numbers = [1, 2, 3, 4, 5];
const boxes =["A", "B", "C"];
const a= [ 1, 43, 9, 99]
const length = a.length;
const tostring =a.toString();
console.log(a[0], a.at(0))
//
a.push(88)
console.log(a)
//
a.unshift(11)
console.log(a)
a[0] = 77
console.log(a)
a.pop()
console.log(a)
a.shift()
console.log(a)
console.log(a.join('-'))
a.sort()
console.log(a)
delete a[2]
console.log(a)
const a1= [1, 2, 3, 4, 5];
const b=['A', 'B'];
const d = [1,2,3,4,5];
console.log(a1.concat(b,d))*/
/*object
* group value imto a variable
* array:
* */

const info= {
    name: "doanh",
    age: 21,
    address: "127.0.0.1",
}
console.log(info);
const a=[1,1,1]
console.log(a)
info.name = "viet";
console.log(info)
info.ssss=true;
console.log(info)
info.info = info;
delete info.info
console.log(info);
console.log(object.keys(info));
console.log(info);
