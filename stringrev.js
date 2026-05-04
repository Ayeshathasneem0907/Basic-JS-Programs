let str = "Hello";
let reversed = "";

for(let i = Math.floor(str.length)-1; i>=0; i--)
{
    reversed += str[i];
}
console.log(reversed)