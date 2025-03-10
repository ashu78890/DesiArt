function leet (n){
    return  function (){
      return  n++
    }
 
}

// console.log(leet(2))


function recursion (n){
    return recursion(n*n,n*n*n)
}
recursion()