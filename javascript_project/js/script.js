/**
 * Created by bahubali on 16/1/17.
 */
/*
var x='4', y=4;
if (x === y) {
    console.log('true');
}
else{
    console.log('false');
}*/

/*if (false || NaN || undefined || "" || null || 0) {
    console.log("this line won't br exicuted");
}

else {
    console.log("all false");
}*/

/*
function a()
{
    return
    {
        name : "Bahubali"
    }

}

function b() {
    return {
        name: "Bahubali"
    }

}

console.log(a());
console.log(b());*/

/*var sum =0;
for(var i=0; i<10; i++){
    sum +=i;
    console.log("sum of "+ (sum-i) + " and "+ i +" is "+ sum);

}

console.log("sum of all is "+ sum);*/

/*function orderChickenWith(sidedish) {
    sidedish = sidedish || "nothing Fucker";
    console.log("Chicken with "+ sidedish);

}

orderChickenWith("coke");
orderChickenWith();*/

/*var x = 10;
if ( (null) || (console.log("Hello")) || x > 5 ) {
    console.log("Hello");
}*/

var company = new Object();
company.name = "Facebook";
company.ceo = new Object();
company.ceo.name = "Mark";
company.ceo.age =34;
company.ceo.gender = "male";
console.log(company);
console.log(company.ceo["age"]);
