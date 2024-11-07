document.addEventListener("DOMContentLoaded", () => {
  function loadResume() {
    const params = new URLSearchParams(window.location.search);
    const username = params.get("username");

    if (username) {
      const resumeData = localStorage.getItem(username);
      if (resumeData) {
        const parsedData = JSON.parse(resumeData);
        renderResume(parsedData);
      } else {
        console.error("Resume not found for the provided username.");
      }
    } else {
      console.error("Username not provided in the URL.");
    }
  }

  function renderResume(data: any) {
    const resumeContainer = document.getElementById("resume-container");
    if (resumeContainer) {
      resumeContainer.innerHTML = `
        <div class="resume-header">
          <img src="${data.profilePicture || "https://via.placeholder.com/120"}" 
               alt="Profile Picture" 
               id="profile-image" 
               style="width: 120px; height: 120px; object-fit: cover; border-radius: 50%; border: 3px solid #007bff;">
          <div class="personal-info">
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Contact:</strong> ${data.contact}</p>
            <p><strong>Date of Birth:</strong> ${data.dob}</p>
          </div>
        

        </div>
   <div class="resume-section">
          <h3>Professional Summary</h3>
          <p>${data.professionalSummary || "No summary provided."}</p>
        </div>

        <div class="resume-section">
          <h3>Education</h3>
          <ul>
            ${data.education.map((edu: any) => `
              <li>
                <strong>${edu.name}</strong> 
                <span>(Start: ${edu.start} - End: ${edu.end})</span>
              </li>`).join("")}
          </ul>
        </div>
        <div class="resume-section">
          <h3>Work Experience</h3>
          <ul>
            ${data.workExperience.map((work: any) => `
              <li>
                <strong>${work.title} at ${work.company}</strong> 
                <span>(Start: ${work.start} - End: ${work.end})</span>
              </li>`).join("")}
          </ul>
        </div>
        <div class="resume-section">
          <h3>Skills</h3>
          <ul>
            ${data.skills.map((skill: string) => `<li>${skill}</li>`).join("")}
          </ul>
        </div>
        <div class="resume-section">
          <h3>Languages</h3>
          <ul>
            ${data.languages.map((language: string) => `<li>${language}</li>`).join("")}
          </ul>
        </div>`;
    }
  }

  loadResume();
});
