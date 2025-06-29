function saveQuickNote() {
  const note = document.getElementById('quickNote').value;
  localStorage.setItem('quickNote', note);
  alert('Quick Note Saved');
}

function unlockSecureNote() {
  const pwd = document.getElementById('securePassword').value;
  if (pwd === 'priya57') {
    document.getElementById('secureContent').classList.remove('hidden');
    const savedNote = localStorage.getItem('secureNote') || '';
    document.getElementById('secureNote').value = savedNote;
  } else {
    alert('Incorrect password');
  }
}

function saveSecureNote() {
  const note = document.getElementById('secureNote').value;
  localStorage.setItem('secureNote', note);
  alert('Secure Note Saved');
}
