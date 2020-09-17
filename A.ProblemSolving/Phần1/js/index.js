let A1=[];
let A2=[];
let arr=[];
let arry=[];
for (let i = 0; i < 3; i++) {
  let n = prompt("nhap vao A1");
  A1.push(n);
  arr.push(n);
  arry.push(n);
}
for (let i = 0; i < 3; i++) {
    let n = prompt("nhap vao A2");
    A2.push(n);
    arr.push(n);
    arry.push(n);
}
console.log(A1);
console.log(A2);
let coincide=[];
let ans = deduplicate(arr);

function arrayRemove(arr, value) {
  return arr.filter(function(ele){
      return ele != value;
  });
}
// ans.forEach(element => {
//   coincide.forEach(element1=>{
//     if(element1 === element) 
//     {
//       result =  arrayRemove(ans, element1);
//     }
//   })
// });
for(let i = 0; i < coincide.length; i++)
{
  ans =  arrayRemove(ans, coincide[i]);
}
console.log(ans);


function deduplicate(arr) {
  //kiem tra trung, trung thi xoa luon
  let isExist = (arr, x) => {
    for(let i = 0; i < arr.length; i++) {
      if (arr[i] === x) 
      {
        coincide[i]=x;
        return true;
      }
    }
    return false;
  }
  let ans = [];
  arr.forEach(element => {
    if(!isExist(ans, element)) ans.push(element);
  });
  return ans;
}







    
