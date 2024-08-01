// 8.startsWith() ბრუნდება true თუ სტრიქონი იწყება მოცემული სიმბოლოებით, false თუ არა.
const test1 = "dato0, dato1";
const test2 = test1.startsWith("d")
const test3 = test1.startsWith("dat")
const test4 = test1.startsWith("dato0, dat")


console.log(test2);//true რადგან იწყება d ით
console.log(test3); //true რადგან იწყება dat ით
console.log(test4);//true რადგან იწყება dato0, dat ით
