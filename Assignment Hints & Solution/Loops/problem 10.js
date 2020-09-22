/* 
  Problem 10
  ----------

  [Hints]
  কোন একটি সংখ্যাকে ১০ দিয়ে ভাগ করলে আমরা ভাগশেষ হিসেবে সেই সংখ্যার Last Digit টি পাবো।

  কোন একটি সংখ্যাকে ১০ দিয়ে ভাগ করলে সেই সংখ্যার শেষ ডিজিট টি চলে যাবে। এভাবে লুপ এর মাধ্যমে একে একে শেষ থেকে digit remove করতে থাকলে আমরা শেষে একটি ১০ এর চেয়েও ছোট সংখ্যা পাবো। সেটাই Mainly আমাদের সেই সংখ্যাটির প্রথম ডিজিট। 🤩🤩

  Note: ParseInt() এর মাধ্যমে আমরা এখানে দশমিক সংখ্যাকে পূর্ণসংখ্যায় রূপান্তর করেছি। 
*/

let number = 123456;

let lastDigit = number % 10;
console.log(lastDigit);

while (number >= 10) {
  number = parseInt(number / 10);
}

let firstDigit = number;
console.log(firstDigit);

/*
Simulation
----------

  number      lastDigit      
  ------      ---------      
  123456         6    <======== Last Digit of 123456       
  12345          5            
  1234           4            
  123            3             
  12             2             
  1              1    <======== First Digit of 123456
                              

*/
