document.addEventListener("DOMContentLoaded", () => {
  const generateBtn = document.querySelector("button");
  
  generateBtn.addEventListener("click", () => {
    // Grab input values
    const fullName = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const github = document.querySelectorAll('input[type="text"]')[1].value;

    const avatarInput = document.getElementById("profilePicInput");
    const reader = new FileReader();

    if (!fullName || !email || !github) {
      alert("Please fill in all fields.");
      return;
    }

    // Read the avatar image and redirect with data in localStorage
    reader.onload = function () {
      const avatarDataURL = reader.result;

      const ticketData = {
        fullName,
        email,
        github,
        avatar: avatarDataURL
      };

      localStorage.setItem("ticketData", JSON.stringify(ticketData));
      window.location.href = "ticket.html";
    };

    if (avatarInput.files.length > 0) {
      reader.readAsDataURL(avatarInput.files[0]);
    } else {
      alert("Please upload an avatar.");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const data = JSON.parse(localStorage.getItem("ticketData"));

  if (!data) {
    alert("No ticket data found. Please return to the form page.");
    return;
  }

  // Fill in name and email confirmation text
  document.querySelector("h2 span").textContent = data.fullName;
  document.querySelector("p span").textContent = data.email;

  // Replace avatar image
  const profilePic = document.querySelector(".profile-pic");
  profilePic.src = data.avatar;
  profilePic.alt = data.fullName;

  // Set user info
  const nameEl = document.querySelector(".user-info h3");
  const githubEl = document.querySelector(".user-info p");

  nameEl.textContent = data.fullName;
  githubEl.textContent = data.github;

  // Generate and display a random ticket number
  const ticketNumEl = document.querySelector(".ticket-number");
  const ticketNumber = "#" + Math.floor(1000 + Math.random() * 9000);
  ticketNumEl.textContent = ticketNumber;
});