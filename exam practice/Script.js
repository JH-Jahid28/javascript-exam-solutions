// 1. একটি JavaScript স্টেট্মেন্ট লেখ।

// var name = 'myName';

// 2. ভ্যারিয়েবল ডিক্লেয়ার করার জন্য কি কি স্টেপ ফলো করতে হবে?

// 5 ti step follow korte hobe:
// a. var keyword use korte hobe
// b. variable er ekti name dite hobe.
// c. = sign use korte hobe
// d. Value dite hobe
// e. ; use korte hobe

// 3. বিভিন্ন ডেটা টাইপের নাম লেখ এবং উদাহরন দাও।

// Number, String, Boolean, Null, Undefined

// Number = 1,2,45,6565,32,-1
// String = 'samim', 'hafiz', 'shishir'
// Boolean = true, false
// Null = null
// Undefined = undefined

// 4. ভ্যারিয়েবলের নামকরনের ক্ষেত্রে কি কি বিষয়ে খেয়াল করতে হবে?

// // /* === Variable Naming Convention ===

//  1. Variable names can not be any reserved keywords.
//  2. Variable names has to be in a single word without any space.
//  3. No quotation
//  4. Can not start with number
//  5. You can use snake case, paskel case and camel case to write long variable name

// */

// 5. name নামের একটি ভ্যারিয়েবল ডিক্লেয়ার কর যার value তোমার নামে হবে।
// var name = 'my name';

// 6. Arithmetic Operator এর কাজ কি?
// Mathematic operation korar jonno Arithemetic operator use hoy.

// 7. এই অপারেটরগুলোর কাজ কি ব্যাখ্যা করঃ %, **, ++, --, /
// % = vagsesh ber kore
// ** = exponent ber kore (to the power)
// ++ increament er jonno babohar hoy
// -- decrement er jonno babohar hoy

// 8. Operend কি?
// jader niye operator kaj kore tader operend bole.

// ৯। ভ্যা্রিয়েবল x = 10; y = 36; এর মান  ভ্যারিয়েবল এর ম্যাধ্যমে প্রকাশ কর (console.log()) করে দেখাতে হবে ।

Answer:

var x = 10;
var y = 36;
var z = x + y;
console.log(z);

// 10 no Answer 

var num1 = 8;
var num2 = 375;
var remainder = num2 % num1;
console.log(remainder);

// 11 no Answer 

var num = 8;
var power = 3;
var result = 8**3;
console.log(result);

// 12 no Answer

var total_of_subjects = 4;
var math = 80;
var chemistry = 75;
var physics = 76;
var bangla = 60;
var total_number_all = math + chemistry + physics + bangla;
var total_avg = total_number_all / total_of_subjects;

console.log(total_avg);

// 13 no Answer 

var x = 30;
var y = '23';
var z = x + y;
console.log(z);

// 14 no Answer

// typeof() diye data type check kora hoy;

// 15 no Answer

var string = '25';
var string2 = parseInt(string);

// 16 no Answer

// Array index 0 theke suru hoy

// 17 no Answer

var numbers = [34,56,74,24,88,34,776,34,5];
numbers [5]=334;
console.log(numbers);

// 18 no ans 

var numbers = [34,56,74,24,88,34,776,34,5];
numbers.push(234);
numbers.unshift(998);
console.log(numbers);

// 19 no Answer

var numbers = [[1,2], [2,4], [5,6]]
var newnumbers = numbers.flat(newnumbers);
console.log(numbers);
console.log(newnumbers);

// 20 no Answer

var team1 = ["rahim", "karim",];
var team2 = ["tanim", "riyan", "biplob"];
var team3 = ["sajjad", "arefin"];
var fullGroup = (team1.concat(team2,team3));
console.log(fullGroup);

// 21 no Answer 

var fruits = ["banana", "Orange", "Apple", "Mango"];
fruits.shift();
console.log(fruits)

// 22 no Answer 

var fruits = ["banana", "Orange", "Apple", "Mango"];
fruits.splice(3, 0, "Lichi", "Pineapple", "Watermelon");
console.log(fruits);

// 23 no Answer

// var num1 = 50;
// var num2 = 40;

// if (num1 > num2);{
//     console.log('num1 is the largest number');
// }

// else {
//     console.log('num1 is equal to num2')
//   }

// var num1 = 30;
// var num2 = 10;

// if(num1 > num2){
    // console.log('num1 is the largest number')
//   }
//   else if (num2 > num1){
    // console.log('num2 the largest number')
//   }
//   else{
    // console.log('num1 is equal to num2')
//   }

// 24 no Answer

var num1 = 250;
var num2 = 50;
var operation = 'add';

// if (operation == 'add'){
//     console.log('sum of num1 and num2 is', num1 + num2);
// }
// else if (operation == "subtract"){
//     console.log('subtract of num1 and num2 is', num1 - num2);
// }
// else if(operation == "multyply"){
//         console.log('multyply of num1 and num2 is ', num1 * num2)
//       }
// else if(operation == "modulus"){
//         console.log('modulus of num1 and num2 is ', num1 % num2)
//       }
// else if(operation == "divide"){
//         console.log('divide of num1 and num2 is ', num1 / num2)
//       }
//  else{
//       console.log('Invalid operator. Please input correct operator')    
//           }

// 25 no Answer 

var pen_quantity = 10;
var pen_total_price = 185;
var perice_of_pen = 3;
var single_pen_price = pen_total_price / pen_quantity;
var total_price = single_pen_price * perice_of_pen;
// console.log(total_price);

// 26 no Answer

var input = 150;
var percent = 20/100;
var result = input * percent;
// console.log(result);

// 27 no Answer

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var result = fruits.indexOf("kiwi");
// console.log(result);


// 5 er namata 

var number = 5;
var count = 1;
while(number <= 50){
    console.log(" 5 x " + count + " = " + number);
    number +=5;
    count ++;
}