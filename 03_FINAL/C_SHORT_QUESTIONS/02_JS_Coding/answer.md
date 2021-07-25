## Question A (50% credit): 

What does the following code do?  How can you reverse the order?

    ```
    var points = [40, 100, 1, 5, 25, 10];
    points.sort(function(roo,raa){return roo-raa});
    ```

This first code snippet performs a numerical sort, in assending order.  After having sorted in assending order, the result can be reversed by running
`points.reverse`.

## Question B (50% credit): 

What's wrong with my code below?  How would you fix it?  Would using `var pi =` help? Why or why not?

    http://jsbin.com/zugaginigu/edit?js,console
   

So, given the following code:

```
(function myFn(radius){
    var boundary = Math.pow(radius, 2) * pi
    const pi = 3.1415926;
    if(boundary) console.log('boundary is ', boundary);
}(20))
``` 

The variable `pi` is being referenced here:

`var boundary = Math.pow(radius, 2) * pi`

Before it's declared/initialized here:

`const pi = 3.1415926;`

This can be remedied by swapping the order of the two lines:
```
(function myFn(radius){
  
    const pi = 3.1415926;
    var boundary = Math.pow(radius, 2) * pi
    
    if(boundary) console.log('boundary is ', boundary);
}(20)) 

```
