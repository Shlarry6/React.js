//#5.1 && 5.2 Import statements for myself, friends, print friends.
import myself, {friends, printFriends} from "./person-data.js";

//# 5.3 && 5.4 log myself and call printFriends()
// console.log(myself);
// console.log(friends);

// printFriends();

//# 5.5 object destructure myself to have firstname and last name and print to console

let myFirstName = myself.myFirstName;
let myLastName = myself.myLastName;

// console.log(`My full name is ${myFirstName} ${myLastName}`);

//# 5.6 new variable oldFriends which contains filtered results on the friend object array for older friends

const oldFriends = friends.filter((friend) => {
    return friend.birthDate < myself.myBirthDate;
});

// console.log(oldFriends);

//# 5.7 spread operator create new object, myselfWithId. copy myself object add an ID key value pair
const myId = Math.floor(Math.random() * 100);
const myselfWithId = {...myself, myId};

// console.log(myselfWithId);

//# 5.8 use array.map on friends to make new array newFriendsWithIds add new friend to friends
const friendsWithIds = friends.map((friend) => {
    let id = Math.floor(Math.random() * 100);
    const f = {...friend, id};
    return f;
});

// console.log(friendsWithIds);

//# 5.9 spread operator on friendsWithIds create new array newFriendsWithIds including a new friend
const michael = {
    firstName: "michael",
    lastName: "kamerath",
    birthDate: new Date(1994,8,15),
    major: "computer science",
    id: Math.floor(Math.random() * 100)
};

const newFriendsWithIds = {...friendsWithIds, michael};
// console.log(newFriendsWithIds);

