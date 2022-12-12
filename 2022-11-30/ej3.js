let users = [
    {firstName: "Susan", lastName: "Steward"},
    {firstName: "Daniel", lastName: "Longbottom"},
    {firstName: "Jacob", lastName: "Black"}
];

let userConcat = users.map(user => user.firstName + "-" + user.lastName);
console.log(userConcat);