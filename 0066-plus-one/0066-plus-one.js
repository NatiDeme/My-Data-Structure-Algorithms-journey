/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let counter = digits.length - 1;
    let lastElement = digits[counter];
    if (lastElement == 9) {
        while(counter>=0 && digits[counter]==9){
        counter--;
        }
    if(counter==-1){
        let newDigits = [];
        newDigits[0] = 1;
        for(let x = 1; x<= digits.length; x++){
            newDigits[x]=0;
        }
        return newDigits;
    }else{
       digits[counter] = digits[counter] + 1;
      for(let y = counter + 1; y< digits.length; y++ ){
          digits[y]=0
      }
    }
          
        } else {
          digits[digits.length - 1] = lastElement + 1;
        }
    return digits;
};