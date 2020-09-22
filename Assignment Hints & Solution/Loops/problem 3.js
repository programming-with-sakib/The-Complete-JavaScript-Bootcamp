/* 
  Problem 3
  ----------

  [Hints]
  এখানে আমরা যোগফল রাখার জন্য একটি Variable নিবো (Suppose, Sum = 0)। এরপর 
  প্রতি লুপে Index এর Value টা, Sum এর সাথে Add করে দিবো। লুপের কাজ শেষ হয়ে গেলে আমরা যোগফল টা পেয়ে যাবো।   
  এবং আমরা যতগুলো সংখ্যা যোগ করে এই যোগফল টা পেয়েছি, সেই সংখ্যা দিয়ে Sum কে ভাগ করলে Average টা পেয়ে যাবো। [এক্ষেত্রে আমরা ১০০ টি সংখ্যা যোগ করেছি।]
*/

let sum = 0;

for (let index = 1; index <= 100; index++) {
  sum = sum + index;
}

console.log(sum);

let average = sum / 100;

console.log(average);
