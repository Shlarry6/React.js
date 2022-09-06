const me = {
    myFirstName: "Michael",
    myLastName: "Sears",
    myBirthDate: new Date(1994,3,24),
    myMajor: "Master of Management Information Systems"
}

export const friends = [
    {
        firstName: "Emily",
        lastName: "Sears",
        birthDate: new Date(1997,12,16),
        major: "English"
    },
    {
        firstName: "Steve",
        lastName: "Sears",
        birthDate: new Date(1991,10,8),
        major: "Master of Management Information Systems"
    },
    {
        firstName: "Tyson",
        lastName: " Holmstead",
        birthDate: new Date(1995,5,25),
        major: "Outdoor Product Design"
    }
]

export const printFriends = () => {
    friends.forEach(friend => console.log(`${friend.firstName} ${friend.lastName} was born on ${friend.birthDate.toUTCString()} and majored in ${friend.major}.`));
};

export default me;