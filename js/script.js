// Isi nama ke halaman welcome secara otomatis
document.getElementById("name-placeholder").textContent = "Kryptoneer";

// Form Validation
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let phone = document.getElementById("phone").value.trim();
  let message = document.getElementById("message").value.trim();
  let result = document.getElementById("result");

  // Validasi sederhana
  if (!name || !email || !phone || !message) {
    result.textContent = "⚠️ Please fill in all fields!";
    result.style.color = "red";
    return;
  }

  // Email pattern sederhana
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    result.textContent = "⚠️ Invalid email format!";
    result.style.color = "red";
    return;
  }

  // Phone harus angka
  if (isNaN(phone)) {
    result.textContent = "⚠️ Phone number must be numeric!";
    result.style.color = "red";
    return;
  }

  // Kalau valid, tampilkan hasil
  result.innerHTML = `
    ✅ Thank you, ${name}!<br>
    📧 Email: ${email}<br>
    📱 Phone: ${phone}<br>
    💬 Message: ${message}
  `;
  result.style.color = "green";

  // Reset form
  document.getElementById("contact-form").reset();
});
