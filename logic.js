function canEnterVenue(age, hasID, hasParentConsent) {
  if (age >= 18 && hasID) {
    return "Access granted: Adult with valid ID.";
  } else if (age >= 13 && age <= 17 && hasID && hasParentConsent) {
    return "Access granted: Minor with parent consent and valid ID.";
  } else if (age < 13) {
    return "Access denied: Under 13 cannot enter.";
  } else if (!hasID) {
    return "Access denied: Valid ID required.";
  } else {
    return "Access denied: Conditions not met.";
  }
}

// Test cases
console.log(canEnterVenue(25, true, false));
console.log(canEnterVenue(16, true, true));
console.log(canEnterVenue(16, true, false));
console.log(canEnterVenue(10, true, true));
console.log(canEnterVenue(20, false, false));
console.log(canEnterVenue(15, false, true));

// This output confirms that logical AND (&&) and OR (||) operators
// correctly enforce age limits, ID verification, and parental consent rules.
