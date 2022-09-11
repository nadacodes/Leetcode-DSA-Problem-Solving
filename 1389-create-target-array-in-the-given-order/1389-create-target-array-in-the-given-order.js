/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    const size = nums.length;
    var targetArray = new Array(size);
    var firstHalf = [];
    
    for(var i = 0; i < size; i++)
        {
            if(targetArray[index[i]]==undefined){
            targetArray[index[i]]=nums[i];
                
            }
            else{
               firstHalf=[];
               if(index[i]==0){
                    firstHalf.push(nums[i]);
                    targetArray= firstHalf.concat(targetArray);
                    targetArray.length=size;
                
               }
               else{
                  firstHalf = targetArray.slice(0,index[i]);
                  firstHalf.push(nums[i]);
                  targetArray= firstHalf.concat(targetArray.slice(index[i],size-1));
               }
             }
        }
    return targetArray;
};