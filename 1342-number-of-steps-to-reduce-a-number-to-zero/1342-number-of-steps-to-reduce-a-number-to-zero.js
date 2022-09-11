/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let count=0;
    if(num==0)
    {
       return 0;
    }
    
    while(true){
    if(num%2==0){   
        num=num/2; 
        count++;
    }
    else{
      num--;
      count++;
    }
        
    if(num==0){
       return count;
      }
    }
    
};