Take a look at this code snippet

https://jsbin.com/yohivodobe/edit?html,output

## Question: 

1. Why can I not set the margin-top on the span with the id "txt" ? 

ANSWER:  A span tag is an inline vs. block element, meaning that the margins can only be set for the sides.  (A span element only takes up margins horizontally).

1. Why can I not set the margin-top on the img with the id "pic" in the head section?

ANSWER:  In the image tag, the margin-top is being set in the *style* attribute:

`style="margin-top: 50px;"`


I tested this was the case by removing the style attribute in the *index.html* file in this directory.
