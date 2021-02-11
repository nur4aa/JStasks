const today = new Date();
const day = today.getDay();
const daylist = ["Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday","Sunday"];
console.log(`Today is : ${daylist[day]}.`);
let hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();
let format = (hour >= 12)? " PM ":" AM ";
hour = (hour >= 12)? hour - 12: hour;
if (hour===0 && format===' PM ')
{
    if (minute===0 && second===0)
    {
        hour=12;
        format=' Noon';
    }
    else
    {
        hour=12;
        format=' PM';
    }
}
if (hour===0 && format===' AM ')
{
    if (minute===0 && second===0)
    {
        hour=12;
        format=' Midnight';
    }
    else
    {
        hour=12;
        format=' AM';
    }
}
console.log(`Current Time : ${hour}${format} : ${minute} : ${second}`);


