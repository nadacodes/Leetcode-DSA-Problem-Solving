/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const val =s.split('');
    var sum = 0;
    
    const len = val.length;
      for(var i=0; i < len ; i++) {
          count=0;
        switch(val[i])
            {
                case 'I':
                    count=1;
                    if(i+1 < len)
                        {
                            if(val[i+1]=='V')
                               {
                                  count = 4; 
                                   i++;
                               }
                            else if(val[i+1]=='X')
                                {
                                  count = 9;  
                                    i++;
                                }
                        }
                    break;
                case 'V':
                    count=5;
                    break;
                case 'X':
                    count=10;
                    if(i+1 < len)
                        {
                            if(val[i+1]=='L')
                               {
                                  count = 40;  
                                   i++;
                               }
                            else if(val[i+1]=='C')
                                {
                                  count = 90;  
                                    i++;
                                }
                        }
                    break;
                case 'L':
                    count=50;
                    break;
                case 'C':
                    count=100;
                    if(i+1 < len)
                        {
                            if(val[i+1]=='D')
                               {
                                  count = 400;  
                                   i++;
                               }
                            else if(val[i+1]=='M')
                                {
                                  count = 900;  
                                    i++;
                                }
                        }
                    break;
                case 'D':
                    count=500;
                    break;
                case 'M':
                    count=1000;
                    break;
            }
        
        sum += count;
      
}
    return sum;
 
};