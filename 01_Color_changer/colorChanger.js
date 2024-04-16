const buttons = document.querySelectorAll('.button');
// console.log(button);
 const body=document.querySelector("body")

 buttons.forEach(function(btn){
  console.log(btn);
  btn.addEventListener('click', function(superman){
    console.log(superman);
    console.log(superman.target);

    if(superman.target.id === 'grey'){
      body.style.backgroundColor = superman.target.id
    }
    if (superman.target.id === 'white') {
      body.style.backgroundColor = superman.target.id;
    } 
    if(superman.target.id === 'blue') {
      body.style.backgroundColor = superman.target.id;
    }
    if(superman.target.id==='red'){
      body.style.backgroundColor = superman.target.id;
    }

  })
 })