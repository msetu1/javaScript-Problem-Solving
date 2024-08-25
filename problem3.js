// count paper 
// book1 -->100
//book2 -->200
//book3 -->300
function paperRequirements(book1Quantity, book2Quantity, book3Quantity) {
const book1=100;
const book2=200;
const book3=300;

const totalBook1Page=book1Quantity*book1;
const totalBook2Page=book2Quantity*book2;
const totalBook3Page=book3Quantity*book3;
const total =totalBook1Page+totalBook2Page+totalBook3Page;

return total 
}
const totalPaper =paperRequirements(1,1,1);
console.log(totalPaper);