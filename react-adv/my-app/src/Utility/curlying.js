console.log("Check data!!")


let sum = function(a){
             return function(b){
                if(b)
                  return sum(a+b);
                else
                    return  a;
             }
}

let result = sum(2)(3)(4)();
console.log(result);