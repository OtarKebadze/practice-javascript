// Implement the function unique_in_order which takes as argument a sequence and returns a 
// list of items without any elements with the same value next to each other and preserving the 
// original order of elements.


var uniqueInOrder=function(iterable){
    let arr=[];
    let values;
    if (typeof iterable === String) {
    values = iterable.split("");
    } else {
    values = iterable
    }
    for(let i = 0; i<values.length;i++){
    if(values[i] != values[i+1]){
        arr.push(values[i])
    }
    }
    console.log(arr)
  }
// uniqueInOrder('AAAABBBCCDAABBB') expects ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         expects ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       expects [1,2,3]

  uniqueInOrder('AAAABBBCCDAABBB') 
  uniqueInOrder('ABBCcAD')         
  uniqueInOrder([1,2,2,3,3])