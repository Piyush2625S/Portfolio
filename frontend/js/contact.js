const form = document.getElementById("contactForm");
const statusText = document.getElementById("formStatus");

form.addEventListener("submit", async function (e) {
  e.preventDefault(); // STOP page reload

  statusText.textContent = "Sending message...";
  statusText.style.color = "#9ca3af";

  const formData = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
  };

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok) {
      statusText.textContent = "Message sent successfully.";
      statusText.style.color = "#38bdf8";
      window.location.href = "thank_you.html";
      form.reset();
    } else {
      statusText.textContent = result.error || "Something went wrong.";
      statusText.style.color = "red";
    }
  } catch (error) {
    statusText.textContent = "Server not reachable.";
    statusText.style.color = "red";
  }
});
