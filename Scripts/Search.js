// Adding event listener and sending pokemon name to details page for detail allocation
document.getElementById("pokemonForm").addEventListener("submit", function(event){
    event.preventDefault();
    let pokemonSearchedName = document.getElementById("pokeName").value


// For Reference: https://stackoverflow.com/questions/14693758/passing-form-data-to-another-html-page
   localStorage.setItem("pokemonNamed", pokemonSearchedName);
   
// For reference: https://www.semrush.com/blog/javascript-redirect/
   window.location.href = "Details.html";

});