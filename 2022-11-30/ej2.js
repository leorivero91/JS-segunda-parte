let users = [
    {firstName: "Susan", lastName: "Steward"},
    {firstName: "Daniel", lastName: "Longbottom"},
    {firstName: "Jacob", lastName: "Black"}
];

let resultado = users.filter(user => user.firstName == "Susan");
console.log(resultado);