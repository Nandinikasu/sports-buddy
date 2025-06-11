#  Sports Buddy

A real-time sports matching and event management web app using Firebase.

##  Features
- Signup / Login with Firebase Auth
-  Add & View Sports Events
-  Admin Dashboard
-  Real-time Logs
-  Firestore Database

##  Tech Stack
- HTML, CSS, JavaScript
- Firebase Auth & Firestore
- Modular JS Codebase

##  Project Structure
/
├── public/                 → Frontend (HTML/CSS/JS)
├── functions/              → Backend Firebase Functions
│   ├── index.js
│   ├── package.json         Run npm install here!
│   └── ...
└── firebase.json

##  Setup Instructions

1. **Clone the repo**
   ```bash
   git clone <https://github.com/Nandinikasu/sports-buddy>
   cd sports-buddy
   ```

2. **Serve the frontend**
   - Open `public/index.html` using Live Server
   - Or run this command:
     ```bash
     cd public
     python -m http.server
     ```

3. **Set up Firebase**
   - Create a Firebase project at [firebase.google.com](https://firebase.google.com)
   - Replace the Firebase config inside `public/js/firebase-config.js`
   - If you're using Firebase CLI, initialize it with:
     ```bash
     firebase init
     ```

4. **Install Firebase Functions dependencies**
   ```bash
   cd functions
   npm install
   ```

5. **Deploy the project (optional)**
   If you're using Firebase Hosting or Cloud Functions:
   ```bash
   firebase deploy
   ```

## Contributors
- Nandinikasu([GitHub](https://github.com/Nandinikasu/sports-buddy))

##  Common Issues

### "npm ERR! enoent: Could not read package.json"
This means you're trying to run `npm install` in the wrong folder.

 **Fix**:
Run it from the `functions/` directory:
```bash
cd functions
npm install
