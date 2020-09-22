/*
  Problem 11
  ----------

  [Hints]
  Step 1: যোগফল রাখার জন্য আমরা একটি Variable নিবো। (Suppose, Sum = 0)
  Step 2: কোন একটি সংখ্যাকে ১০ দিয়ে ভাগ করলে আমরা ভাগশেষ হিসেবে সেই সংখ্যার Last Digit টি পাবো। সেটা আমরা Sum এর সাথে যোগ করে দিবো। 
  Step 3: সংখ্যাটিকে ১০ দিয়ে ভাগ করে তার Last Digit টি আমরা রিমুভ করে দিবো। 
  Step 4: পুনরায় Step 2 থেকে কাজ শুরু করবো, যতক্ষণ না পর্যন্ত নাম্বারটি শুন্য হচ্ছে। 
*/

let number = 123456;
let sum = 0;

while (number > 0) {
  let lastDigit = number % 10; // step 2
  sum = sum + lastDigit; // step 2

  number = parseInt(number / 10); // step 3;
}

console.log(sum);

/*
Simulation
----------

  number      lastDigit      Sum
  ------      ---------      ---
  123456         6            6
  12345          5            6 + 5 = 11
  1234           4            6 + 5 + 4 = 15
  123            3            6 + 5 + 4 + 3 = 18
  12             2            6 + 5 + 4 + 3 + 2 = 20
  1              1            6 + 5 + 4 + 3 + 2 + 1 = 21
                              Here we got the sum 21 🥳🥳🥳

*/
