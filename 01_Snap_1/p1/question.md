Write a for loop starting from -10 and goes upto 10 and prints (console.logs) these numbers out, all on the same line.  However skip the numbers that are multiples of 3.

Output should look like ..

```
-10 -8 -7 -5 -4 -2 -1 1 2 4 5 7 8 10
```

Jasons-MacBook-Pro:p1 prime$ node
Welcome to Node.js v14.16.0.
Type ".help" for more information.
> let output = "";
undefined
> for(var i = -10; i <= 10; i++)
... if( i % 3 !== 0 )
... output = output + " " + i;
' -10 -8 -7 -5 -4 -2 -1 1 2 4 5 7 8 10'
> 
Jasons-MacBook-Pro:p1 prime$ vi p1 
