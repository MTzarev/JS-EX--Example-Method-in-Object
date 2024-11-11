function humanInfo(firstName, lastName, age){
let human={
    calc: function(firstNum, secondNum){
        return firstNum*secondNum;
    }
};
human.firstName=firstName;
human.lastName=lastName; 
human.age = age;

console.log(human.calc(5,25));
}
humanInfo("Peter", 
"Pan",
"20"
);
