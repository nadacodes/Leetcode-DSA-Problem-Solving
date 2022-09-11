/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
  
    if(num==0){
       return 0;
    }
    
    let count=0; 
    
    while(true){
        
    num%2==0? num=num/2:num--;
    count++;   
        
    if(num==0){
       return count;
      }
        
    }
};