/*
JS EXECUTION CONTEXT - 

1. GLOBAL EXECUTION CONTEXT - whenever we write code in js firstly {} -> global execution context is made and it is allocated  to this, this stores GEC
browser - this stores WINDOW object
- works on thread

2. Function Execution Context

3. Eval (optional) -> property of global object

js runs program in 2 phases 
* Memory Creation phase
* exectuion phase

****
1. global execution context , and allocated to this  ->  it is executed once
2. Memory Creation phase - all variables are stored in memory and initialised as undefined
3. Execution Phase - if code contains function , for every function a new execution context will be made - new environment + execution thread is made  and it will repeat steps 
- memory creation 
- execution 
  
and when function gets executed it returns value in global context and the new execution context made for it gets deleted
*/



 