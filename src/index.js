module.exports = function getZerosCount(number, base) {
  var num2 = 0, num5 = 0; 
  while(number>1){
    var b=number;
      while(b%5==0){
        b=b/5;
        num5++;
      }
    number-=1;	
  }
return num5;
}