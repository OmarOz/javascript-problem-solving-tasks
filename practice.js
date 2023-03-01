// Problem #1
// Hana’s Soccer Ball


let input = 10;
let c = 0;
while (input > 1) {
  input /= 3;
  c++;
}
console.log(c);




// Problem #2
// Mansour’s Capitals


let letter = "HeLLo woRLd";
let letter2 = "CAPS LOCK IS ON";

let checkCapitals=letter.split("").filter(function(e){ 
    
    return (e == e.toUpperCase() && e!=" ");
    
});

console.log(checkCapitals.length);






// Problem #3
// Is it an array?

let arr=[ '1', '2' ];


let checkArr=arr.map(function(e){
    return Array.isArray(e);
})

let allArray=true;
for(let i=0;i<checkArr.length;i++){
    if(checkArr[i]=== false){allArray=false; break;}
}
console.log(allArray);





// Problem #4
// Fatma’s Next Version

let oldVersion="9.9.9.9";

let newVersion=(parseInt(oldVersion.split(".").join("")) + 1).toString().split("").join(".").replace('.','');


console.log(newVersion);






// Problem #5
// Mahitab’s Weird Object

const obj={
    "Tech Committee": "Web team",
update: "do not"

}

let counter=0;
for(let i=0;i<Object.keys(obj).length;i++){
    if(Object.keys(obj)[i].length > Object.values(obj)[i].length){
        counter++;
    }
}
console.log(counter);
if(counter===Object.keys(obj).length){
console.log("weird");
}
else{
    console.log("not weird")
}




// Problem #6
// Kandeel's Discord Bot

let inputLetters=["8", "1","0","p", "q"];

let word="180daraga";

let count=0;
let checkWord=inputLetters.forEach(function(e){
    for(let i=0;i<word.length;i++){
        if(word[i]===e){
            count++;
            break;
        }
    }
});

if(count===word.length){
console.log("He Can");
}
else{console.log("He Cannot");}