const clock = document.getElementById('clock');
// const clock = document.querySelector("#clock");

// let date = new Date();
// console.log(date.toLocaleTimeString());
// to run it at every moment you need to use cron job its too use server
// so calm down and use setInterval method 

setInterval(function(){
  let date = new Date();
  // runs in console continusly for every 1 sec
  // console.log(date.toLocaleTimeString());
  clock.innerHTML= date.toLocaleTimeString();
},1000)