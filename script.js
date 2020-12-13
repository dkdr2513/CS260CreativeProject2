document.getElementById("countrySubmit").addEventListener("click", function(event) {
  event.preventDefault();
  input = document.getElementById("countryInput").value;
  value2 = document.getElementById("amountInput").value;
  if (input === "" || value2 === "")
    return;
  const url = "https://v6.exchangerate-api.com/v6/1a582f45a28aff2acff6263e/latest/USD";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";
      console.log(json);
      console.log(json.conversion_rates.USD);
      results += "<p>"
      results += "$" + value2 +" changed is : "
      for (const [key, value] of Object.entries(json.conversion_rates)) {
          if (key === input) {
            results += value2 * value + " " + input;
          }
      }
      results += " <br><br><br>All the Exchange Rates<br><br>";

      for (const [key, value] of Object.entries(json.conversion_rates)) {
          console.log(`${key}: ${value}`);
          console.log(key);
          console.log(value);
          results += "<div id='f_box'>"
          results += value + " " + key + " <br>";
          results += "</div>"
      }
      results += "</p>";
      document.getElementById("currencyResults").innerHTML = results;

    });
  console.log(input);
});
