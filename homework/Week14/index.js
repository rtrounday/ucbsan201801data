// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $datatimeInput = document.querySelector("#date");
var $searchBtn = document.querySelector("#search");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filterSightings to Sighting Data initially

document.write("<script src='data.js' type='text/javascript'></script>");
var filterSightings = dataSet;

// renderTable renders the filteredAddresses to the tbody
function renderTable() {
  $tbody.innerHTML = "";
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
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterSighting = $datetimeInput.value.trim().toLowerCase();

  // Set filteredAddresses to an array of all addresses whose "state" matches the filter
  filteredSightings = data.filter(function(sighting) {
    var sightingState = sighting.state.toLowerCase();

    // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
    return sightingState === filterSighting;
  });
  renderTable();
}

// Render the table for the first time on page load
renderTable();