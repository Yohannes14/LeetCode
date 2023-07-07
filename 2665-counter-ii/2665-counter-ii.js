/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let current =init;
    return {
        increment(){
            current++;
            return current;
        },
        decrement(){
            current--
            return current;
        },
        reset(){
            current =init
            return current;
        }
    }
    
};


  const counter = createCounter(5)
  counter.increment();
  counter.reset();
  counter.decrement(); 
 