/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    var longestCommonPrefix="";
    const maxLetters=strs[0].length;
    
    let count= 0;
    while(count < maxLetters){
    for(let x=0; x < strs.length-1; x++)
        {
            if(strs[x].length < count || strs[x+1].length < count || strs[x][count]!=strs[x+1][count])
                {
                    return longestCommonPrefix;
                }
       }
          longestCommonPrefix+= strs[0][count];
          count++;
        }
    return longestCommonPrefix;
};