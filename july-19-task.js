//push pop array

let arr=[]
arr.push(1)
arr.push(2)
arr.push(3)
arr.pop()
console.log(arr)
//output-[1,2]



//shift and unshift
let arr2=['a','b','c']
arr2.shift()
arr2.unshift('z')
console.log(arr2)
//output-[ 'z', 'b', 'c' ]


//slice
let arr3=[1,2,3,4,5]
let slicedarr=arr3.slice(1,4)
console.log(slicedarr)
//output-[2,3,4]


//splice
let arr4=['red','green','blue','yellow']
let splicedarr=arr4.splice(2,1,'purple','orange')
console.log(arr4)
//output-[ 'red', 'green', 'purple', 'orange', 'yellow' ]



//object creation
let car={
  make:'Audi',
  model:'A4',
  year:'2022',
}
console.log(car)
//output-{ make: 'Audi', model: 'A4', year: '2022' }

delete car.year
console.log(car)
//otuput:{ make: 'Audi', model: 'A4' }

//nested object
let person={
  name:'Sai Narendra',
  age:20,
  address:{
    street:'Sai Ram Nagar',
    city:'visakahapatnam',
    zipcode:530026,
  }
}
console.log(person)

//ouput-
//{
//   name: 'Sai Narendra',
//   age: 20,
//   address: { street: 'Sai Ram Nagar', city: 'visakahapatnam', zipcode: 530026 }
// }

console.log(person.address.city)
//output:visakahapatnam