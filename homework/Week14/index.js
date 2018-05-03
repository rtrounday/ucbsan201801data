// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $datatimeInput = document.querySelector("#datetime");


var $searchBtn = document.querySelector("#search");
document.write("<script src='data.js' type='text/javascript'></script>");
var filterSightings = dataSet;
renderTable(null);

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filterSightings to Sighting Data initially

// renderTable renders the filteredAddresses to the tbody
function renderTable(filteredSightings) {
  if(filteredSightings == null){
     filteredSightings = dataSet;
  }

  $tbody.innerHTML = "";
  $tbody = document.querySelector("tbody");
  var trIds = document.querySelectorAll("tr");
  console.log("Rows after clearing the tbody "+trIds.length);
  console.log($tbody+"Last render call "+filteredSightings.length);
  for (var i = 0; i < filterSightings.length; i++) {
    // Get get the current sighting object and its fields
    var sighting = filterSightings[i];
    var fields = Object.keys(sighting);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = sighting[field];
    }
  }
}



function handleSearchButtonClick() {
  var datatimeInput = document.querySelector("#date").value;

  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterSighting = datatimeInput.trim().toLowerCase();
  var tr = document.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filterSighting) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

// Render the table for the first time on page load
