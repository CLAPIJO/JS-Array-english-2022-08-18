// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log(Array.isArray(a));
console.log(Array.isArray(b));
// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for(var i = 0; i<=a.length; i++){
    a[i] = a[i] * 2;
} 
console.log(a);

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
var case1 = colors[0];
for (var i = 1; i < colors.length; i++){
    case1 = case1 + " " + colors[i];
} 
console.log(case1);
// case 2 output: 'Red+Green+White+Black'
var case2 = colors[0];
for (var i = 1; i < colors.length; i++){
    case2 = case2 + "+" + colors[i];
} 
console.log(case2);
// case 3 output: 'Red,Green,White,Black'
var case3 = colors[0];
for (var i = 1; i < colors.length; i++){
    case3 = case3 + "+" + colors[i];
} 
console.log(case3);

// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
a.sort((a,b)=>b-a)
console.log(a);

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var mf = 1;
var m = 0;
var item;
    for (var i=0; i<a.length; i++)
    {
        for (var j=i; j<a.length; j++)
        {
            if (a[i] == a[j])
            m++;
            if (mf<m)
            {
            mf=m;
            item = a[i];
            }
        }
        m=0;
    }
console.log(item);