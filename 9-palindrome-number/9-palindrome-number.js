/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    
    let tnum =x;
    let final=0;
    let d=0;
    while(x>0){
        d= x % 10
        final = final *10 + d;
        x = parseInt(x/10);
    }
    if(final===tnum){
        return true;
    }
    
  else{
  return false;
  }
          
    
};