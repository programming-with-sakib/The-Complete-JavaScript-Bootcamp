/*
  Problem 12
  ----------
  এরকম প্রবলেম সল্ভ করার জন্য Nested Loop প্রয়োজন। 
  প্রতিটি Row তে কাজ করার জন্য আমাদের একটি Outer Loop লাগবে।  
  এবং প্রতিটি Row তে Stars/Numbers প্রিন্ট করার জন্য আরেকটি Inner Loop লাগবে।  

  Note: প্রতিটি প্রবলেমই প্রায় Similar. শুধু আমাদের এটা বুঝতে হবে, Loop Variable এর মান কি incremental নাকি decremental. অর্থাৎ loop Variable এর মান কি প্রতি লুপে বাড়তেসে নাকি কমতেসে।  
*/

/*
  Sub-Problem 1
  -------------
  *
  **
  ***
  ****
  *****

*/

for (let row = 1; row <= 5; row++) {
  let stars = '';
  for (let col = 1; col <= row; col++) {
    stars = stars + '*';
  }
  console.log(stars);
}

/*
  Sub-Problem 2
  -------------
  *****
  ****
  ***
  **
  *

*/

for (let row = 5; row >= 1; row--) {
  let stars = '';
  for (let col = 1; col <= row; col++) {
    stars = stars + '*';
  }
  console.log(stars);
}

/*
  Sub-Problem 3
  -------------
      *
     **
    ***
   ****
  *****

  [Hints]
  এই প্রবলেমটি একটু ভিন্ন ধরনের। এখানে আমাদের প্রতিটি সারিতে Space ও প্রিন্ট করতে হচ্ছে। প্রথম সারিতে 4 টি স্পেস এবং 1 টি star। দ্বিতীয় সারিতে 3 টি স্পেস এবং 2 টি star। তাই আমরা প্রথমে স্ট্রিং এর সাথে প্রথমে এই Space গুলো Add করে দিবো। 
*/

for (let row = 1; row <= 5; row++) {
  let star = '';
  for (let space = 1; space <= 5 - row; space++) {
    star = star + ' ';
  }
  for (let col = 1; col <= row; col++) {
    star = star + '*';
  }
  console.log(star);
}

/*
  Sub-Problem 4
  -------------
  1
  12
  123
  1234
  12345

*/

for (let row = 1; row <= 5; row++) {
  let num = '';
  for (let col = 1; col <= row; col++) {
    num = num + col;
  }
  console.log(num);
}

/*
  Sub-Problem 5
  -------------
  12345
  1234
  123
  12
  1

*/

for (let row = 5; row >= 1; row--) {
  let num = '';
  for (let col = 1; col <= row; col++) {
    num = num + col;
  }
  console.log(num);
}

/*
  Sub-Problem 6
  -------------
  54321
  5432
  543
  54
  5

*/

for (let row = 1; row <= 5; row++) {
  let num = '';
  for (let col = 5; col >= row; col--) {
    num = num + col;
  }
  console.log(num);
}

/*
  Sub-Problem 7
  -------------
  1
  01
  101
  0101
  10101

  [Hints]
  এখানে আমাদের প্রথমে বুঝতে হবে, আমরা কোন সংখ্যা দিয়ে শুরু করতে যাচ্ছি। 0 নাকি 1 । 
  প্রতি জোড় সারি তে আমরা 0 দিয়ে শুরু করছি। 
  এরপর আমরা Just Toggle করছি। 0 থাকলে 1, 1 থাকলে 0 [010101.......] 

*/
for (let row = 1; row <= 5; row++) {
  let num = '';
  let binary = row % 2 === 0 ? 0 : 1;
  for (let col = 1; col <= row; col++) {
    num = num + binary;
    binary = binary === 0 ? 1 : 0;
  }
  console.log(num);
}

/*
  Sub-Problem 8
  -------------
  12345
  2345
  345
  45
  5

*/
for (let row = 1; row <= 5; row++) {
  let num = '';
  for (let col = row; col <= 5; col++) {
    num = num + col;
  }
  console.log(num);
}
