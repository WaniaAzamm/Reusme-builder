document.addEventListener("DOMContentLoaded", function () {
    function loadResume() {
        var params = new URLSearchParams(window.location.search);
        var username = params.get("username");
        if (username) {
            var resumeData = localStorage.getItem(username);
            if (resumeData) {
                var parsedData = JSON.parse(resumeData);
                renderResume(parsedData);
            }
            else {
                console.error("Resume not found for the provided username.");
            }
        }
        else {
            console.error("Username not provided in the URL.");
        }
    }
    function renderResume(data) {
        var resumeContainer = document.getElementById("resume-container");
        if (resumeContainer) {
            resumeContainer.innerHTML = "\n        <div class=\"resume-header\">\n          <img src=\"".concat(data.profilePicture || "https://via.placeholder.com/120", "\" \n               alt=\"Profile Picture\" \n               id=\"profile-image\" \n               style=\"width: 120px; height: 120px; object-fit: cover; border-radius: 50%; border: 3px solid #007bff;\">\n          <div class=\"personal-info\">\n            <p><strong>Name:</strong> ").concat(data.name, "</p>\n            <p><strong>Email:</strong> ").concat(data.email, "</p>\n            <p><strong>Contact:</strong> ").concat(data.contact, "</p>\n            <p><strong>Date of Birth:</strong> ").concat(data.dob, "</p>\n          </div>\n        \n\n        </div>\n   <div class=\"resume-section\">\n          <h3>Professional Summary</h3>\n          <p>").concat(data.professionalSummary || "No summary provided.", "</p>\n        </div>\n\n        <div class=\"resume-section\">\n          <h3>Education</h3>\n          <ul>\n            ").concat(data.education.map(function (edu) { return "\n              <li>\n                <strong>".concat(edu.name, "</strong> \n                <span>(Start: ").concat(edu.start, " - End: ").concat(edu.end, ")</span>\n              </li>"); }).join(""), "\n          </ul>\n        </div>\n        <div class=\"resume-section\">\n          <h3>Work Experience</h3>\n          <ul>\n            ").concat(data.workExperience.map(function (work) { return "\n              <li>\n                <strong>".concat(work.title, " at ").concat(work.company, "</strong> \n                <span>(Start: ").concat(work.start, " - End: ").concat(work.end, ")</span>\n              </li>"); }).join(""), "\n          </ul>\n        </div>\n        <div class=\"resume-section\">\n          <h3>Skills</h3>\n          <ul>\n            ").concat(data.skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(""), "\n          </ul>\n        </div>\n        <div class=\"resume-section\">\n          <h3>Languages</h3>\n          <ul>\n            ").concat(data.languages.map(function (language) { return "<li>".concat(language, "</li>"); }).join(""), "\n          </ul>\n        </div>");
        }
    }
    loadResume();
});
