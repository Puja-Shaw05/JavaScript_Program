/*   The ability of js engine to search for a variable in the outer scope where it is not available in the local scope is known as Scope Chaninig/Lexical Scope.
     It is a function which holds the reference of the variable from the previous function even after the function has executed and removed/return from the 
     call Stack .  
     Closure is created only for the variable which is utilized by any child function.
   */
// WAP for Lexical Scope and Closure
var bus = "Mo Bus";

function parent()
{
  var car1 = "Honda";
  var price = 5000000;
  console.log(car1);
  function child1 ()
    {
      var car2 = "Maruti";
      console.log(car2);
      function child2 () 
        {
          var car3 = "Mahindra";
           console.log(car3);
           console.log(car2);
           console.log(car1);
           console.log(bus);
        }
      return child2;
    }
  return child1;
}

parent()()();
  
