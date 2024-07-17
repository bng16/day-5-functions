function check(num){
    if (num%2===0){
        return 'even';
    }else{
        return "odd";
    }
}

console.log(check(5));

let sqr = (num)=>num * num;
console.log(sqr(4));

let maxOfTwo = (num1,num2)=>num1>num2 ? num1 : num2 ;
console.log(`maximum out of two numbers is ${maxOfTwo(4,5)}`)

let con= (str1, str2)=>str1 + str2;
let name1='Biswajit Nag';
console.log(con('Hi',` ${name1}`));

let sum= (num1,num2) => num1 + num2;
console.log(sum(1,2));


let find= (string,character) => string.indexOf(character) !== -1 ? true : false;
string="Hi Iam Biswajit Nag";
character="a";

console.log(find(string,character));

let product= (num1,num2=1) => num1 * num2;
console.log(product(6,4))

let msg=(name2,age=17)=>age>=18 ? `${name2} you are ${age} years old so you can vote` : `${name2} you are ${age} years old so you can't vote`;
console.log(msg('biswajit',22));

let printName=(name3)=>console.log(`Hi ${name3}`);

let highOrderFunc= (todo,value,times) =>{
    for (let i=0;i<times;i++){
        todo(value);
    }
}
highOrderFunc(printName,"BOBO",10);





let highOrderFunc2= (func1,value,func2) =>{
    let res=func1(value);
    func2(res);
}

let print=(value)=>console.log(value);

highOrderFunc2(sqr,10,print)