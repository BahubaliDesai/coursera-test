/**
 * Created by bahubali on 19/1/17.
 */




(function (window) {
    var your = {};
    your.name = "Desai";
    your.sayHi = function () {
        console.log("Hi "+ your.name);

    }

    window.your =your;
})(window);