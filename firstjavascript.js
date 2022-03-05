console.log("Hello World!");

/*let c_text= document.getElementById('ctext').value;
    let c_key= document.getElementById('ckey').value;
    const radios = document.getElementsByName('location');
    
    let y= "location";
for (var i = 0; i <  radios.length; i++) {
  if (radios[i].checked) {
     y= radios[i].value;
    break;
  }
}*/
let c_text ="abc";
let c_key = "a";
let y="Patna";
console.log(c_text.length);
let z="_";
let ikey=0;
for(let j=0;j<c_key.length;j++)
{
    ikey+=c_key.charCodeAt(j);
}
console.log(ikey);
for(let i=0;i<c_text.length;i++)
{
  if(i%2==0)
  {
    z+= String.fromCharCode(97+ (c_text.charCodeAt(i) + ikey)%26);
  }
  else{
    z+= String.fromCharCode(65+ (c_text.charCodeAt(i) + ikey)%26);
  }
  
}

let res= z +ikey+ y;
console.log(res);
// let outbox = document.querySelector("textarea");
// outbox.innerText = res;