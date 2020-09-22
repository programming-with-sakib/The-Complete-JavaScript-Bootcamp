/* 
  Problem 9
  ----------
  
  [Hints]
  কোন একটি সংখ্যার (n) গুণনীয়ক হচ্ছে, ১ থেকে সেই সংখ্যা পর্যন্ত সে সকল সংখ্যা, যাদেরকে এই সংখ্যা (n) দিয়ে ভাগ করলে ভাগশেষ শুন্য আসবে।   

*/

let number = 12;

for (let index = 1; index <= number; index++) {
  if (number % index === 0) {
    console.log(`${index} is a divisor of ${number}`);
  }
}
