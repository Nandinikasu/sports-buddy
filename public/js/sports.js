// sports.js
import { collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js';
import { db } from './firebase-config.js';  // Assuming firebase-config.js is in the same directory
import { addLog } from './logs.js';  // Assuming logs.js is in the same directory

// Function to add the sport
export async function addSport() {
  const sportName = document.getElementById("sport-name").value;
  const category = document.getElementById("category").value;
  const city = document.getElementById("city").value;
  const area = document.getElementById("area").value;
  const date = document.getElementById("date").value;

  // Validate inputs
  if (!sportName || !category || !city || !area || !date) {
    alert("Please fill out all fields!");
    return;
  }

  try {
    // Add the sport to the Firestore sports collection
    const docRef = await addDoc(collection(db, 'sports'), {
      sportName,
      category,
      city,
      area,
      date
    });

    console.log("New sport added with ID:", docRef.id);

    // Now, log this action in Firestore (e.g., in a 'logs' collection)
    await addLog(`Added new sport: ${sportName}, Category: ${category}, City: ${city}`);

    // Optionally, clear the form fields after successful submission
    document.getElementById("sport-name").value = '';
    document.getElementById("category").value = '';
    document.getElementById("city").value = '';
    document.getElementById("area").value = '';
    document.getElementById("date").value = '';
  } catch (error) {
    console.error("Error adding sport:", error);
  }
}

// Add event listener to the "Add Sport" button
document.getElementById("addSportBtn").addEventListener("click", addSport);












  

  
