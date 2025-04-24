// auth.js

import { auth } from './firebase-config.js';
import {
  signInWithEmailAndPassword,
  signOut
} from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js';

// DOM Elements
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const loginError = document.getElementById('login-error');
const authSection = document.getElementById('auth-section');
const adminPanel = document.getElementById('admin-panel');
const adminEmailDisplay = document.getElementById('admin-email');

// === LOGIN FUNCTION ===
async function login() {
  const email = emailInput.value.trim();
  const password = passwordInput.value;

  if (!email || !password) {
    loginError.textContent = 'Please enter both email and password.';
    return;
  }

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Show dashboard
    authSection.style.display = 'none';
    adminPanel.style.display = 'block';
    adminEmailDisplay.textContent = user.email;
    loginError.textContent = '';

    console.log('Login successful');
  } catch (error) {
    loginError.textContent = 'Login failed: ' + error.message;
    console.error('Login error:', error);
  }
}

// === LOGOUT FUNCTION ===
async function logout() {
  try {
    await signOut(auth);

    // Return to login screen
    adminPanel.style.display = 'none';
    authSection.style.display = 'block';
    emailInput.value = '';
    passwordInput.value = '';

    console.log('Logout successful');
  } catch (error) {
    console.error('Error signing out:', error);
    alert('Error signing out: ' + error.message);
  }
}

// === Event Listeners ===
loginBtn.addEventListener('click', login);
if (logoutBtn) {
  logoutBtn.addEventListener('click', logout);
}








































  
  
  
  
  

  