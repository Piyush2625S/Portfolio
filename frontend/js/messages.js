const container = document.getElementById("messagesContainer");

async function loadMessages() {
  try {
    const res = await fetch("http://localhost:5000/api/contact/messages");
    const messages = await res.json();

    if (messages.length === 0) {
      container.innerHTML = "<p>No messages yet.</p>";
      return;
    }

    messages.reverse().forEach(msg => {
      const card = document.createElement("div");
      card.className = "card";
      card.style.marginBottom = "20px";

      card.innerHTML = `
        <h3>${msg.name}</h3>
        <p><strong>Email:</strong> ${msg.email}</p>
        <p>${msg.message}</p>
        <small>${new Date(msg.createdAt).toLocaleString()}</small>
      `;

      container.appendChild(card);
    });

  } catch (error) {
    container.innerHTML = "<p>Failed to load messages.</p>";
  }
}

loadMessages();
