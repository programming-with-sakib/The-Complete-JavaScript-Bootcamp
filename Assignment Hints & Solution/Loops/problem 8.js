/* 
  Problem 8
  ----------

  [Hints]
  আমরা গুণফল রাখার জন্য প্রথমে একটি Variable নিবো (Suppose, fact = 1).
  এরপর আমরা কোন একটি সংখ্যার Factorial বের করার জন্য 1 থেকে সেই সংখ্যা পর্যন্ত প্রতিটি সংখ্যা, fact variable এর সাথে গুন করে দিবো। 
*/

let fact = 1;

for (let number = 1; number <= 6; number++) {
  fact = fact * number;
}

console.log(fact);
