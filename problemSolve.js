function cubeNumber(number){

    if(typeof number !== "number"){
        return "Invalid Number. please provide a number!"
    }
    else{
        var result = number * number * number;
    
    }
    return result; 
}
var myNumber=( cubeNumber(4)) ;
console.log(myNumber);