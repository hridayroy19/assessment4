function sortMaker(arr) {
let temp;
    if ( arr[0]>0 && arr[1]>0) {
      if (arr[0] == arr[1]) {
        return 'equal';
      }else if(arr[0]<arr[1]){
        arr = [arr[1],arr[0]];
        return arr;
      }else{
        return arr;
      }
    } else{
      return 'Invalid Input';
    }
  }
  

  let sort = sortMaker([1, 9]);
  console.log(sort);