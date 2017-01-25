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

/*
var company = new Object();
company.name = "Facebook";
company.ceo = new Object();
company.ceo.name = "Mark";
company.ceo.age =34;
company.ceo.gender = "male";
console.log(company);
console.log(company.ceo["age"]);
*/

/*
var company = {
    name : "FaceBook",
    ceo : {
        "First Name" : "Mark",
        FavColor : "blue"

    },

    "Stock of company" :110

};
console.log(company);
*/
/*
function multiply(x,y) {
    return x*y ;

}
multiply.version = "v1.0.0";
console.log(multiply.version);

function makeMultiplier(multiplier) {
    var myFunc = function (x) {
        return multiplier * x ;
        
    }
    return myFunc;
    
}
var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(5));

var doubleAll = makeMultiplier(2);
console.log(100);

function doOperation(y, operation) {
    return operation(y);

}
var result = doOperation(10, multiplyBy3);
console.log(result);*/
/*
var a={ x :10};
var b=a;
console.log(a);
console.log(b);

/!*b.x=15;*!/
console.log('after updating b');
console.log(a);
console.log(b);
*/

/*function changePrimitive(primvalue) {
    console.log("in change Primitive..");
    console.log("before:");
    console.log(primvalue);

    primvalue=5;
    console.log("after:");
    console.log(primvalue);

}

var value = 7;
changePrimitive(value);
console.log("after changePrimitive original value :");
console.log(value);*/
/*changePrimitive(7);*/
/*
var x=5;
x=10;
var y=x;

console.log(y);*/

/*function  test() {
    console.log(this);
    this.myName="Bahubali";

}
test();
console.log(window.myName);*/

/*function Circle(radius) {
    this.radius = radius;
    this.Area =  Math.PI * Math.pow(this.radius,2);
}

var myCircle = new Circle(10);
console.log(myCircle);*/

/*
var literalCircle = {
    radius : 10,
    getArea : function () {
        var self = this;
        console.log(this);

        var incresedArea = function () {
            self.radius = 20;

        };
        incresedArea();
        console.log(this.incresedArea);
        return Math.PI * Math.pow(this.radius, 2);

    }

};
console.log(literalCircle.getArea());

*/

/*
var array= new Array();
array[0] = "Bahubali";
array[1] = 1992;
array[2] = function (name) {
    console.log("hello " + name);

}
array[3] = {"age" : 21};
array[2]("desai");

console.log(array);
*/

/*
var names = ["bahubali", "sanjay", "Desai"];
/!*console.log(names);*!/
names[100] = 'xxxx';

for(var i=0; i<names.length; i++){
    console.log( i +" hello "+  names[i]);
}
*/

/*
var name2 = ["bahubali", "sanjay", "desai"];

/!*
var myObj = {
    name : "bahubali",
    course : "HTML/CSS/JAVASCRIPT",
    platform : "Coursera"
}

for(var prop in myObj){
    console.log(prop + " : "+ myObj[prop] );
}*!/
for(var name in name2){
    console.log("hello "+ name2[name]);
}
*/
/*

function makeMultiplier(multiplier) {
    function b() {
        console.log("multiplier is "+ multiplier);

    }
    b();

    return (
        function (x) {
            return multiplier * x ;
            
        }
    );

}
var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));*/


( function (window) {
    var my = {};
    my.name = "Bahubali";
    my.sayHello = function () {
        console.log("Hello "+ my.name);

    }
    window.my = my;
})(window);



document.addEventListener("DOMContentLoaded",
function (event) {
    function sayHello() {
        this.textContent = "following";
        var name= document.getElementById("name").value;

        var message = "<h2> hello "+ name + " ! </h2>";

        document.getElementById("content").innerHTML = message;

        if (name === "bahubali")
        {
            var title =document.querySelector("#title").textContent;
            title += "Welcome to coursera!";
            document.querySelector("#title").textContent = title;

            name = {};
        }

    }

    /*
     document.querySelector("button").addEventListener("click", sayHello);*/

    document.querySelector("button").onclick = sayHello;

    document.querySelector("body").addEventListener("mousemove",
    function (event) {
        if(event.shiftKey == true){
            console.log(event.clientX);
            console.log(event.clientY);
        }

        
    })

});
