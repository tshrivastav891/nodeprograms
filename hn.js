var count =(data) =>{
count1 =0;
data.forEach(i => {
    count1 = count1+i;
});
console.log("Total count",data);
}
count([1,2,3,4,5,6])