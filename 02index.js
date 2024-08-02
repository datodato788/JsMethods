// 2.push(): ამატებს ელემენტს მასივის ბოლოს.
const test1 = ["dato", "dato1"];
const test2 = [1, 2, 3];
const test3 = ["dato", "dato1"];
// -
test1.push("dato2");
test2.push(4);
// -
console.log(test1); //[ 'dato', 'dato1', 'dato2' ]
console.log(test2); //[ 1, 2, 3, 4 ]
console.log(test3.push()); //push() მეთოდი არგუმენტების გარეშე უბრალოდ აბრუნებს მასივის სიგრძეს
