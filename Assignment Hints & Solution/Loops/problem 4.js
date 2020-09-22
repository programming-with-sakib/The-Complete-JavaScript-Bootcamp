/* 
  Problem 4
  ----------

  [Hints]
  এখানে Loop Variable এর মান শুরু হবে ১০০ থেকে এবং চলবে ২০০ পর্যন্ত। আমরা যদি প্রতি লুপ শেষে Loop Variable এর মান ২ করে বাড়াই, তাহলে আমরা শুধুমাত্র জোড় সংখ্যা গুলো পাবো।
  এটা গেলো একটা পদ্ধতি। আমরা চাইলে Loop Variable এর মান ১ করেও বাড়াতে পারি। তবে সেক্ষেত্রে আমাদের চেক করতে হবে, সংখ্যাটি কি জোড় কিনা। [যদি কোন সংখ্যা জোড় হয়, তাহলে আমরা তাকে ২ দিয়ে ভাগ করলে ভাগশেষ শুন্য পাবো]
*/

let sum;

// Way 1
sum = 0;

for (let index = 100; index <= 200; index += 2) {
  sum = sum + index;
}

console.log(sum);

// Way 2
sum = 0;

for (let index = 100; index <= 200; index++) {
  if (index % 2 === 0) {
    sum = sum + index;
  }
}

console.log(sum);
