Consider the following code.  What would be console logged?  Why is apple type reported incorrectly?

What would you change to address this issue (the Apple type is mis-represented in the last line below)?

    const apple = {
        type: 'Granny Smith',
        weight:  4
    }

    var orange = apple

    orange.type = 'Clementine'

    console.log('Apple type is ', apple.type)


ANSWER:  The line where orange is declared and initialized, orange is simply a reference to the variable pointed to by apple.  [The variables] orange and apple are reference to the exact same object.

This can be fixed with the following modification:
```
    //var orange = apple
    var orange = JSON.parse(JSON.stringify(apple))
```


Why does this comparison return false?  Please explain.

    var school_a = {name: 'UTexas', place: 'Austin'};
    var school_b = {name: 'UTexas', place: 'Austin'};

    console.log(school_a == school_b);   // returns false, why?


When it comes to reference types (objects), an equality comparison will only evaluate to true if the operands REFER TO THE SAME OBJECT.
