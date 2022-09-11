const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) { // 1,0,2 | 0,2,1 | 2,1,0
if(n1>n2){ // 1 > 0 // 0 > 2
  let x = n1 
  n1 = n2
  n2 = x
}if(n1>n3){ 
  let x = n1
  n1 = n3
  n3 = x
}if(n2>n3){
  let x = n2
  n2 = n3
  n3 = x
}
  return {min:n1, mid:n2, max:n3}
}
module.exports = minMedMax
