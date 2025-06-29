
// Firebase configuration (replace with your real config)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DB_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

function saveQuickNote() {
  const note = document.getElementById("quickNote").value;
  db.ref("quickNotes/").set({ message: note });
  alert("Quick note saved!");
}

function unlockBSCNotes() {
  const pwd = document.getElementById("bscPassword").value;
  if (pwd === "priya57") {
    document.getElementById("bscNotes").style.display = "block";
    document.getElementById("saveBSCButton").style.display = "inline-block";
    db.ref("bscNotes/").once("value", (snap) => {
      document.getElementById("bscNotes").value = snap.val()?.message || "";
    });
  } else {
    alert("Incorrect password");
  }
}

function saveBSCNotes() {
  const note = document.getElementById("bscNotes").value;
  db.ref("bscNotes/").set({ message: note });
  alert("BSC note saved!");
}

function toggleMood() {
  document.body.classList.toggle("dark-mode");
}
