var add=(v1,v2)=>
{
    return v1+v2
}

var sub=(v1,v2)=>
{
    return v1-v2
}

var mul=(v1,v2)=>
{
    return v1*v2
}

module.exports={add,sub,mul}

var file =require('./hn3.js')

console.log("Addition is : ",file.add(10,20))
console.log("Subtraction is :",file.sub(10,20))
console.log("Multiplication is :",file.mul(10,20))
