let A1=[];
let A2=[];
let arr=[];
let length = 3;
for (let i = 0; i < length; i++) {
  let n = prompt("nhap vao A1");
  A1.push(n);
  arr.push(n);
}
for (let i = 0; i < length; i++) {
    let n = prompt("nhap vao A2");
    A2.push(n);
    arr.push(n);
}
console.log(A1);
console.log(A2);
let coincide=[];
let ans = deduplicate(arr);
console.log(coincide);
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







    
