/* 
  Problem 5
  ----------

  [Hints]
  শুধুমাত্র জোড় সংখ্যা পাওয়ার জন্য আমরা Loop Variable এর মান ২ থেকে শুরু করবো। এবং প্রতিবার ২ করে বাড়াবো।
  শুধুমাত্র বিজোড় সংখ্যা পাওয়ার জন্য আমরা Loop Variable এর মান ১ থেকে শুরু করবো। এবং প্রতিবার ২ করে বাড়াবো।
*/

let evenSum;
let oddSum;

// জোড় সংখ্যা গুলোর যোগফল
evenSum = 0;
for (let index = 2; index <= 100; index += 2) {
  evenSum = evenSum + index;
}
console.log(evenSum);

// বিজোড় সংখ্যা গুলোর যোগফল
oddSum = 0;
for (let index = 1; index <= 100; index += 2) {
  oddSum = oddSum + index;
}
console.log(oddSum);

/*
  আমরা যদি একটি লুপের মাধ্যমেই এই কাজটি করতে চাই, তাহলে আমরা ভাগশেষ চেক করে এই কাজটি করতে পারি।
  যদি ২ দিয়ে ভাগ করে ভাগশেষ শুন্য হয়, তাহলে সংখ্যাটি জোড়। এবং ভাগশেষ ১ হলে সংখ্যাটি বিজোড়।  
*/

evenSum = 0;
oddSum = 0;

for (let index = 1; index <= 100; index++) {
  if (index % 2 === 0) {
    evenSum = evenSum + index;
  } else {
    oddSum = oddSum + index;
  }
}
console.log(evenSum);
console.log(oddSum);
