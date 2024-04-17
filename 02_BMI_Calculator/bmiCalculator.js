const form =document.querySelector('form')

//this use case will give you empty value never use like this 
// const height = parseFloat(document.querySelector("#height").value);


form.addEventListener('submit', function (e) {
  e.preventDefault(); // to prevent happening of default  not submit anythin "hold your nerves"

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");

  if (height === ''|| height < 0 || isNaN(height)) {
    // height === NaN old type, to check as per documentaion use isNaN()
    result.innerHTML = `Please give a valid height ${height}`;
      } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please five a valid weight ${weight}`;
   } else {
     const bmi = (weight / ((height * height) / 10000)).toFixed(2);
     result.innerHTML = `<span>${bmi}</span>`;
   }
});

