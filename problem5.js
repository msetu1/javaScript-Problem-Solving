
function onlyPositive(){
for(let i=0;i<numbers.length;i++){
   const number = numbers[i];
   if(number<0){
    break;
   }
   console.log(number);
}

}
let numbers=[45,87,96,11,63,-56,71,28];
onlyPositive("positive number break:",numbers);
