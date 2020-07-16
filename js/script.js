// Vacation Selection Prompt
var vacationType = prompt ("What kind of trip would you like to go on, musical, tropical, or adventurous?");

if (vacationType == "musical") {
    console.log(destination = "New Orleans");
} else if (vacationType == "Tropical") {
    console.log(destination = "beach vacation in Mexico");
} else if (vacationType == "adventurous") {
    console.log(destination = "whitewater rafting at the Grand Canyon");
}

// Group Size
var groupSize = prompt ("How many are in your group?");

if (groupSize >= 1 && groupSize <= 2) {
    console.log(travelSuggestion = "First Class");
} else if (groupSize >= 3 && groupSize <= 5) {
    console.log(travelSuggestion = "Helicopter");
} else if (groupSize >= 6) {
    console.log(travelSuggestion = "Charter Flight");
}

// Results
function results() {
    return("Since you’re a group of " + groupSize + " going on a " + vacationType + " vacation, you should take a " + travelSuggestion + " to " + destination);
}

console.log(results());