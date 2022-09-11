/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {

    let count=0; 
    
    while(true){
        
    if(num==0){
       return count;
    }
        
    num%2==0? num=num/2:num--;
    count++;  
    }
};