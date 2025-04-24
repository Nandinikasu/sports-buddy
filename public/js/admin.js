import { collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js';
import { db } from './firebase-config.js';  // Import Firestore instance

const addSportBtn = document.getElementById('addSportBtn');
const sportNameInput = document.getElementById('sport-name');
const categoryInput = document.getElementById('category');
const cityInput = document.getElementById('city');
const areaInput = document.getElementById('area');
const dateInput = document.getElementById('date');
const logsList = document.getElementById('logs-list');

// Function to handle adding a new sport
async function addSport() {
  const sportName = sportNameInput.value.trim();
  const category = categoryInput.value.trim();
  const city = cityInput.value.trim();
  const area = areaInput.value.trim();
  const date = dateInput.value.trim();

  // Check if any field is empty
  if (!sportName || !category || !city || !area || !date) {
    alert("Please fill out all fields.");
    return;
  }

  console.log('Adding sport:', sportName, category, city, area, date); // Debugging log

  try {
    // Add sport to Firestore
    const docRef = await addDoc(collection(db, 'sports'), {
      sportName,
      category,
      city,
      area,
      date
    });
    console.log("Sport added with ID:", docRef.id);

    // Add log entry to the UI (Logs section)
    const logEntry = document.createElement('li');
    const logTime = new Date().toLocaleString();
    logEntry.textContent = `${logTime} - Added new sport: ${sportName}, Category: ${category}, City: ${city}`;
    logsList.appendChild(logEntry);

    // Clear form fields after successful submission
    sportNameInput.value = '';
    categoryInput.value = '';
    cityInput.value = '';
    areaInput.value = '';
    dateInput.value = '';

  } catch (error) {
    console.error("Error adding sport:", error);
  }
}

// Add event listener to the "Add Sport" button
addSportBtn.addEventListener('click', addSport);





































  