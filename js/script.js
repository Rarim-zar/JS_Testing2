//example1
function showText(){
    document.getElementById('showtext').innerHTML="hello world";
}

//example2
function changeText(){
    document.getElementById('changetext').innerHTML="change!!!";
}

//example3
function changeImage(){
    document.getElementById('changeimg').innerHTML="no more image!";
}

//example4
function textNone(){
document.getElementById('textnone').style.display="none";
}

//example5
function big(){
    document.getElementById('big').innerHTML="BIG";
    document.getElementById('big').style.fontSize="100px";
}

//example6
function adding(){
let a, b, c, d;
a=17;
b=19;
c=23;
d=a+b+c;
document.getElementById('adding').innerHTML="a+b+c="+d;
}

//example7
function adding1(){
    let a,b,c;
    a=1;b=2;c=3;
    document.getElementById('adding1').innerHTML=b;
}
//example8
function change(){
    document.getElementById('change').style.fontSize="100px";
    document.getElementById('change').style.fontFamily="sans serif";
    document.getElementById('change').style.color="red";
    document.getElementById('change').style.backgroundColor="black";
    document.getElementById('change').style.textAlign="center";
    document.getElementById('change').innerHTML="I HAVE CHANGED!";
}
//example9
function small(){
    document.getElementById('small').style.fontSize="10px";
    document.getElementById('small').innerHTML="i have become small";
}

//example10
function small2(){
    document.getElementById('small2').style.fontSize="10px";
    document.getElementById('small2').innerHTML="i am small"
}
function big2(){
    document.getElementById('small2').style.fontSize="100px";
    document.getElementById('small2').innerHTML="i am big";
}

//example11\
function array1(){
    const myarray=[1,6,9,4,3,5];
    let y;
    document.getElementById('array1').innerHTML=myarray[0];
}
//example12
function array2(){
    const myarray=[1,6,9,4,3,5];
    let y;
    y=myarray[0]+myarray[2]
    document.getElementById('array2').innerHTML=y;
}
//example13
function date(){
    document.getElementById('date1').innerHTML=new Date;
}
//example14
function alert1(){
    document.getElementById('alert1').innerHTML= alert("alert");
}
//example15
function name1(){
let firstName, secondName, lastName, fullName;
firstName=" Mir"
secondName=" Zarif"
lastName=" Abrar"
fullName=firstName + secondName + lastName
document.getElementById('name').innerHTML=fullName
}
//example16
function name2(){
    const firstName=" Mir";
    const secondName=" Zarif";
    const lastName=" Abrar";
    const fullName=firstName + secondName + lastName;
    document.getElementById('name2').innerHTML=fullName;
}
//example17
function name3(){
    var firstName=" Mir";
    var secondName=" Zarif";
    var lastName=" Abrar";
    var fullName=firstName + secondName + lastName;
    document.getElementById('name3').innerHTML=fullName;
}
//example18
function name4(){
    firstName=" Mir";
    secondName=" Zarif";
    lastName=" Abrar";
    fullName=firstName + secondName + lastName;
    document.getElementById('name4').innerHTML=fullName;
}