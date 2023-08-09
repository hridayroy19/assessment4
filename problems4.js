function findAddress(obj) {
  let street = obj.street || "__";
  let house = obj.house || "__";
  let society = obj.society || "__";
  return `${street},${house},${society}`;
}

let address = {
  street: 10,
  house: "15A",
  society: "Earth Perfect"
};
var fulName = (findAddress(address));
console.log(fulName)

let address1= {
  street: 10,
  society: "Earth Perfect"
};
var fulName = (findAddress(address1));
console.log(fulName); 
let address2 = {
  street: 10
};

var fulName = (findAddress(address2));
console.log (fulName);
  