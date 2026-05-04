let sum = 0;
let num = 1234;

while(num > 0)
{
    sum += num % 10;
    num = Math.floor(num / 10);
}
console.log(sum)