
// recursive or self calling function

function findInArray(arr, val, index = 0) {
    if(index === arr.length)
      return false;
      
    if (arr[index] === val)
      return true;
  
    return findInArray(arr, val, index + 1);
  }

  const myArr = [1,2,3,4,5,6,7,8,9,10];
  
  let result = findInArray(myArr, 10); 
  console.log('The result of the search is', result);