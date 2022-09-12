/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var str= x.toString().split("");
 
    if(str.length%2!=0)
       {
           str.splice(str.length/2 - 0.5, 1);
       }
   
    
    for(var i=0;i<str.length;i++)
        {
            if(str[i]!=str[str.length-i-1])
                {
                    return false;
                }
        }
    return true;
};