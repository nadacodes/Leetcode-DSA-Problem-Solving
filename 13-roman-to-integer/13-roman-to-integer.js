/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    s= s.replaceAll('IV','4 ');
    s= s.replaceAll('IX','9 ');
    s= s.replaceAll('I','1 ');
    s= s.replaceAll('V','5 ');
    s= s.replaceAll('XL','40 ');
    s= s.replaceAll('XC','90 ');
    s= s.replaceAll('X','10 ');
    s= s.replaceAll('L','50 ');
    s= s.replaceAll('CD','400 ');
    s= s.replaceAll('CM','900 ');
    s= s.replaceAll('C','100 ');
    s= s.replaceAll('D','500 ');
    s= s.replaceAll('M','1000 ');
    
    const vals = s.split(' ').map(Number);
    var sum = 0;
    
    vals.forEach((val)=> {sum += val;});
    
    return sum;
 
};