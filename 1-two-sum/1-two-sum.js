/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var result=[];
    for(var i=0; i < nums.length; i++)
        {
             for(var j=1;j<nums.length; j++)
                 {
                       if(i!=j && nums[i]+nums[j]==target)
                           {
                                 result.push(i);
                                 result.push(j);
                                 return result;
                           }
                 }
        }
};