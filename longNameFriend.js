// const datas =[10,20,3,40,50,60]
// console.log(Math.min(...datas));

const friends = ["anikbarua2","anik","avik","hannan","monnan","anikbarua","ti","anikbarua234"]



let longName = ""
function longNameFriend(){  
        for(friend of friends){
            if(friend.length > longName.length){
                longName = friend
            }
        }
        return longName;
}

// console.log(longNameFriend());



const friendsList = ["anikbarua2","anik","avik","hannan","monnan","anikbarua","ti","anikbarua234"]
let longFriend = ""

for(friend of friendsList){
    if(friend.length > longFriend.length){
            longFriend = friend
    }
}
// console.log(longFriend);

const friendsList2 = ["anikbarua2","anik","avik","hannan","monnan","anikbarua","ti","anikbarua234565656"]

let longestName = ""

for (name of friendsList2){
        if(longestName.length < name.length){
                 longestName = name
        }
}
console.log(longestName);