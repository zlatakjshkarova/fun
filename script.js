//Function D
function sum(a, b) {
    let result = a + b;
    return result;
}

sum(2, 3);

let res = sum(10, 20);
console.log(res);


function showMsg(user, msg) {
    console.log(`${user},${msg}`);

}
showMsg("Иван", "Привет!")
showMsg("Иван", "Привет!")

function func(num) {
    if (num >= 0) {
        return "+++"
    } else {
        return "---"
    }

}

let num = func(-10);
console.log(num);

//Function еxpression
const hello = function (name) {
    let result = `Привет,${name}`;
    return result;
}
console.log(hello());
//Область видимости это наборьфункций разных
let firstVar = 20;
let otherVar = 30;


function summ(a, b) {
    let result = a + b + firstVar;
    return result;
}





console.log(summ(10, 100));

function someFn(a, b, c, d) {
    let var1 = 10;
    let var2 = 20;
}
//ОБЛАСТЬ видимости файла FirstVar,otherVar,функция summ,функция  someFn


let varTest = 10
function fn1(a, b) {
    function test2(c, d) {
        return varTest + a + b + c + d;
    }
    return test2(100, 200,);

}
fn1(500, 600);