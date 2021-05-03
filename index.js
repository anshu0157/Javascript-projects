// variables
//it is denoted by var name
var a=3;
var b=7.9;
var c='hello';
var d="hi";
// console.log(a,b,c,d);



//dataTypes
/*there are basically two types of dataTypes

1.Primitive dataTypes: 
        numbers: It can be int, float,double..etc, 
        strings: It can be written as either in double quote or as well as single quote, 
        undefined: It is a default value if you don't provide any value to the variable, 
        null: It is different from undefined, 
        boolean:It provide only two values true or false, 
        Symbol:It is advance topic of java;

2.Reference dataTypes: 
        array:it is mixture of any dataTypes, 
        objects:it has key value pair;
*/

var e=true;
var f=false;
// console.log(e,f);

var arr=[1,4,2,'anshu',8.9,6.32323242424,true];
// console.log(arr);

var obj={
    'anshu':23,
    'rahul':78,
    'rajan':67,
}
// console.log(obj);

function hello(a,b) {
        return a+b;
}
console.log(hello(3,4));
let i=0;
do
{
        // console.log(hello(i,i+1));
        i++;
}while (i == 0);

// for(let k=0;k<=10;k++)
// {
//         console.log(k*2);
// }

