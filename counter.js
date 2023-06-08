
function reset()
{
   
 document.getElementById("input").value="0";
  
}
 
function decrement()
{
  document.getElementById("input").value=dec();
}
function increment()
{
   document.getElementById("input").value=inc();
}
function dec(){
let cons=document.getElementById("input").value;
return(--cons);
}
function inc(){
let cons1=document.getElementById("input").value;
return(++cons1);
}
