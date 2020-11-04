for(let i = 100; i < 200; i++){
  if(i % 3 === 0){
    console.log("Loopy");
  }else if(i % 4 === 0){
    console.log("Lighthouse");
  }else if(i % 3 === 0 && i % 4 === 0){
    console.log("LoopyLighthouse");
  }
  console.log(i);
}

///////////////////////////////////////

var num =[];
for(let i = 100; i <= 200; i++){
  num[i]= i;

  if(num[i] % 3 === 0 && num[i] % 4 === 0){
    console.log("LoopyLighthouse");
  }else if(num[i] % 4 === 0){
    console.log("Lighthouse");
  }else if(num[i] % 3 === 0){
    console.log("Loopy");
  } 
  console.log(num[i]);
}



for(let i = 100; i <= 200; i++){
  if(i % 3 === 0 && i % 4 === 0){
    console.log("LoopyLighthouse");
  }else if(i % 4 === 0){
    console.log("Lighthouse");
  }else if(i % 3 === 0){
    console.log("Loopy");
  }
  console.log(i);
}




