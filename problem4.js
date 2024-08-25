// output big name 
const friends =["Alice", "Bob", "Charlie", "David","jubayer bi rased", "Eva", "Frank", "Grace"];
function bestFriends(friends) {
    let bigname="";
    for(let i = 0; i < friends.length; i++) {
        const friend = friends[i];
        if(friend.length>bigname.length){
bigname=friend;
        }
    }
    return bigname;

}
const friend =bestFriends(friends);
console.log(friend);