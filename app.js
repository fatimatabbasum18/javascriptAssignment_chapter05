let a = 5;
let b = 8;
let c = a + b ;
let e = a - b ;
let f = a * b ;
let  g = a / b ;
let h = a % b;
document.writeln(c);
document.writeln(e);
document.writeln(f);
document.writeln(g);
document.writeln(h);
 let x = 5;
 let y = ++x;
 document.writeln(y);
 document.writeln(y + 7);
 document.writeln(--y + 7 );
//  document.writeln(--y + 7 % 3 );
 document.writeln(12 % 3);

 let ticketPrice = 600;
document.writeln(ticketPrice * 5);


let userVal1 = Number( prompt("take one number"));
let sign = prompt("take any operator");
let userVa2 = Number( prompt("take another number"));
if( sign == "+"){
    document.writeln( userVal1 + userVa2);
}
else if(sign == "-"){
    document.writeln( userVal1 - userVa2);
}
else if(sign == "*"){
    document.writeln( userVal1 * userVa2);
}
else if(sign == "/"){
    document.writeln( userVal1 / userVa2);
    

}
else if(sign == "%"){
    document.writeln( userVal1 % userVa2);
}
else{
    ("Error")
};



