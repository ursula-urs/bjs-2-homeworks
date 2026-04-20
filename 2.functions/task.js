function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity; 
  let sum = 0;
  for(let i = 0; i<arr.length;i++){
     sum += arr[i];
     if(arr[i]>max)
      max = arr[i];
    if(arr[i]<min)
      min = arr[i]
  }

  let avg = +(sum / arr.length).toFixed(2);  
  console.log(min, max, avg);
  return { min: min, max: max, avg: avg };
}


function summElementsWorker(...arr) {
let sum = 0;
  for(let i = 0; i<arr.length; i++){
    sum+=arr[i];
  }
  return arr;
}

function differenceMaxMinWorker(...arr) {
let max = Math.max(...arr); 
  let min = Math.min(...arr);
  let r = max - min;
  return r;
}

function differenceEvenOddWorker(...arr) {
let sumEvenElement = 0;
  let sumOddElement = 0;
  for(let i=0; i<arr.length; i++){
    if(arr[i] % 2 === 0){
      sumEvenElement +=1;
    }
    else{
      sumOddElement += 1;
    }
    let ra= sumEvenElement - sumOddElement;
  }
    return ra;

    
function averageEvenElementsWorker(...arr) {
let sumEvenElement = 0;
    let countEvenElement = 0; 
    for(let i=0; i<arr.length; i++){
    if(arr[i] % 2 === 0){
      sumEvenElement +=arr[i];
      countEvenElement += 1;
    }
    let cr = sumEvenElement/countEvenElement;
    return cr;
    }
  }


function makeWork (arrOfArr, func) {
let maxWorkerResult = -Infinity; 
for(let i = 0; i<arrOfArr.length; i++){
  let big = func(...arrOfArr[i]);
  if (big > maxWorkerResult){
    maxWorkerResult = big;
  } 
}
return maxWorkerResult;
}

}