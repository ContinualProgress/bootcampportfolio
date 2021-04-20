let btn = document.getElementById("btn");
let result = document.getElementById("result");
let choice;
const url = "https://api.coindesk.com/v1/bpi/currentprice.json";



//btn.addEventListener("click", function() {
btn.addEventListener("click", () => {

  choice = document.querySelector('input[name="inlineRadioOptions"]:checked').value;
  console.log("Inside of the event listener.  Choice:  " + choice);


  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      console.log("The response was okay...");
      return response.json();
    })
    .then(data => {

      console.log("Api call looks good..." + data);
      let rate = data.bpi[choice].rate_float.toFixed(2);
      let symbol = data.bpi[choice].symbol;
      console.log("Result:  " + symbol + rate); 
      result.innerHTML = symbol + rate;

    })
    .catch(error => {
      console.error("Error from network: ", error);
    });



});
