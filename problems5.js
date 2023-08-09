function canPay(changeArray, totalDue) {
    var sum = 0;
    if(changeArray.length == 0){
        return "Please give me  a valid array";
    }else{
        for(var i = 0; i < changeArray.length; i++){
            sum = sum + changeArray[i];
        }

        if(sum >= totalDue){
            return true;
        }
        
        else if(sum < totalDue){
            return false;
}
}
}
console.log(canPay([1, 5, 5], 10)); 

