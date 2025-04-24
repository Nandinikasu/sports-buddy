import { collection, getDocs, addDoc } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-firestore.js';
import { db } from './firebase-config.js';

// Function to add a log to Firestore
async function addLog(message) {
  try {
    await addDoc(collection(db, 'logs'), {
      message,
      timestamp: new Date()
    });
    console.log("Log added:", message);
  } catch (error) {
    console.error("Error adding log:", error);
  }
}

// Function to load and display logs from Firestore
async function loadLogs() {
  const logsList = document.getElementById('logs-list');
  const logsCol = collection(db, 'logs');
  const logsSnapshot = await getDocs(logsCol);
  
  logsSnapshot.forEach(doc => {
    const logMessage = doc.data().message;
    const li = document.createElement('li');
    li.textContent = `${new Date().toLocaleString()} - ${logMessage}`;
    logsList.appendChild(li);
  });
}

// Fetch and display logs when the page loads
loadLogs();

export { addLog };











