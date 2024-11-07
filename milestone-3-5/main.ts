document.addEventListener("DOMContentLoaded", () => {
  function makeEditable() {
    const profileImageElement = document.getElementById(
      "profile-image"
    ) as HTMLImageElement | null;
    if (profileImageElement) {
      const input = document.createElement("input") as HTMLInputElement;
      input.type = "file";
      input.accept = "image/*";
      input.style.display = "block";
      input.style.margin = "10px 0";

      profileImageElement.classList.add("original");
      profileImageElement.replaceWith(input);
    }

    const editableElements = document.querySelectorAll(".editable:not(.date-container)");
    editableElements.forEach((element) => {
      const currentValue = element.textContent?.trim() || "";
      const input = document.createElement("input");
      input.type = "text";
      input.value = currentValue;
      input.className = "form-control";
      element.replaceWith(input);
    });
    document.querySelectorAll(".date-container").forEach((element) => {
      const currentValue = element.textContent?.trim() || "";
      const input = document.createElement("input");
      input.type = "date";
      input.value = currentValue;
      input.className = "form-control date-input";
      element.replaceWith(input);
    });
    document.querySelectorAll(".edit-btn").forEach((button) => {
      (button as HTMLElement).style.display = "none";
    });

    document.querySelectorAll(".save-btn").forEach((button) => {
      (button as HTMLElement).style.display = "inline-block";
    });

    document.querySelectorAll(".save-btn").forEach((button) => {
      button.addEventListener("click", () => {
        const summaryInput = document.getElementById("Professionalsummary") as HTMLInputElement;
        const summaryContainer = document.getElementById("Professional-summary-container") as HTMLElement;
        if (summaryInput && summaryContainer) {
          const summaryText = summaryInput.value.trim();
          const summarySpan = document.createElement("span");
          summarySpan.className = "editable";
          summarySpan.textContent = summaryText;
          summaryInput.replaceWith(summarySpan);
        }
        const fileInput = document.querySelector(
          '#resume input[type="file"]'
        ) as HTMLInputElement | null;
        if (fileInput && fileInput.files?.[0]) {
          const newImageURL = URL.createObjectURL(fileInput.files[0]);
          const imgElement = document.createElement("img") as HTMLImageElement;
          imgElement.src = newImageURL;
          imgElement.alt = "Profile Picture";
          imgElement.className = "editable";
          imgElement.style.width = "120px";
          imgElement.style.height = "120px";
          imgElement.style.objectFit = "cover";
          imgElement.style.borderRadius = "50%";

          fileInput.replaceWith(imgElement);
        } else {
          const originalImage = document.querySelector(
            "#resume img.original"
          ) as HTMLImageElement | null;
          if (originalImage) {
            originalImage.classList.remove("original");
          }
        }
        document.querySelectorAll('#resume input[type="text"], #resume input[type="date"]').forEach((input) => {
          const inputElement = input as HTMLInputElement;  
          const newValue = inputElement.value.trim();
          const span = document.createElement("span");
          span.className = "editable";
        
          if (inputElement.type === "date") {
            span.classList.add("date-container");
            span.textContent = new Date(newValue).toLocaleDateString(); 
          } else {
            span.textContent = newValue;
          }
          inputElement.replaceWith(span);
        });
        
        const inputs = document.querySelectorAll('#resume input[type="text"]');
        inputs.forEach((input) => {
          const newValue = (input as HTMLInputElement).value.trim();
          const span = document.createElement("span");
          span.className = "editable";
          span.textContent = newValue;
          input.replaceWith(span);
        });

        document.querySelectorAll(".edit-btn").forEach((button) => {
          (button as HTMLElement).style.display = "inline-block";
        });

        document.querySelectorAll(".save-btn").forEach((button) => {
          (button as HTMLElement).style.display = "none";
        });
      });
    });
  }

  function addSkillField() {
    const skillsContainer = document.getElementById(
      "skills-container"
    ) as HTMLElement;
    const skillInput = document.createElement("input");
    skillInput.type = "text";
    skillInput.placeholder = "Additonal skills";
    skillInput.classList.add("form-group");
    skillInput.className = "form-group";

    skillsContainer.appendChild(skillInput);
  }

  function addLanguageField() {
    const languagesContainer = document.getElementById(
      "languages-container"
    ) as HTMLElement;
    const languageInput = document.createElement("input");
    languageInput.type = "text";
    languageInput.placeholder = "Additonal languages";
    languageInput.classList.add("form-group");

    languagesContainer.appendChild(languageInput);
  }
  function addEducationField() {
    const educationContainer = document.getElementById(
      "education-container"
    ) as HTMLElement;
    const educationBlock = document.createElement("div");
    educationBlock.classList.add("education-block");
    educationBlock.innerHTML = `
      <h3>Add More Education:</h3>
      <div>
        <span>Your Education and School / University:</span>
        <input type="text" placeholder="Your Education and School / University" required />
      </div>
      <div>
        <span>Start Date:</span>
        <input type="date" placeholder="Start Date" required />
      </div>
      <div>
        <span>End Date:</span>
        <input type="date" placeholder="End Date" required />
      </div>
    `;
    educationContainer.appendChild(educationBlock);
  }

  function addWorkExperienceField() {
    const workExperienceContainer = document.getElementById(
      "work-experience-container"
    ) as HTMLElement;
    const workExperienceBlock = document.createElement("div");
    workExperienceBlock.classList.add("work-experience-block");
    workExperienceBlock.innerHTML = `
      <h3>Add more Work Experience:</h3>
      <div>
        <span>Job Title:</span>
        <input type="text" placeholder="Your Job Title" required />
      </div>
      <div>
        <span>Company:</span>
        <input type="text" placeholder="Company" required />
      </div>
      <div>
        <span>Start Date:</span>
        <input type="date" placeholder="Start Date" required />
      </div>
      <div>
        <span>End Date:</span>
        <input type="date" placeholder="End Date" required />
      </div>
    `;
    workExperienceContainer.appendChild(workExperienceBlock);
  }

  document
    .getElementById("add-skill-btn")
    ?.addEventListener("click", addSkillField);
  document
    .getElementById("add-language-btn")
    ?.addEventListener("click", addLanguageField);
  document
    .getElementById("add-education-btn")
    ?.addEventListener("click", addEducationField);
  document
    .getElementById("add-work-btn")
    ?.addEventListener("click", addWorkExperienceField);

  const resumeForm = document.getElementById(
    "resumeForm"
  ) as HTMLFormElement | null;
  if (resumeForm) {
    resumeForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const name =
        (document.getElementById("name") as HTMLInputElement)?.value || "";
      const email =
        (document.getElementById("email") as HTMLInputElement)?.value || "";
      const contact =
        (document.getElementById("contact") as HTMLInputElement)?.value || "";
      const dob =
        (document.getElementById("dob") as HTMLInputElement)?.value || "";
      const defaultEducation = {
        name:
          (document.getElementById("education") as HTMLInputElement)?.value ||
          "",
        start:
          (document.getElementById("educationStart") as HTMLInputElement)
            ?.value || "",
        end:
          (document.getElementById("educationEnd") as HTMLInputElement)
            ?.value || "",
      };

      const educationBlocks = document.querySelectorAll(
        "#education-container .education-block"
      );
      const additionalEducation = Array.from(educationBlocks).map((block) => {
        const inputs = block.querySelectorAll("input");
        return {
          name: (inputs[0] as HTMLInputElement).value,
          start: (inputs[1] as HTMLInputElement).value,
          end: (inputs[2] as HTMLInputElement).value,
        };
      });

      const education = [defaultEducation, ...additionalEducation];
      const languageInputs = document.querySelectorAll(
        "#languages-container input"
      );
      const languages = Array.prototype.slice
        .call(languageInputs)
        .map((input) => (input as HTMLInputElement).value);
      const defaultWorkExperience = {
        title:
          (document.getElementById("jobTitle") as HTMLInputElement)?.value ||
          "",
        company:
          (document.getElementById("company") as HTMLInputElement)?.value || "",
        start:
          (document.getElementById("workStart") as HTMLInputElement)?.value ||
          "",
        end:
          (document.getElementById("workEnd") as HTMLInputElement)?.value || "",
      };

      const workExperienceBlocks = document.querySelectorAll(
        "#work-experience-container .work-experience-block"
      );
      const additionalWorkExperience = Array.from(workExperienceBlocks).map(
        (block) => {
          const inputs = block.querySelectorAll("input");
          return {
            title: (inputs[0] as HTMLInputElement).value,
            company: (inputs[1] as HTMLInputElement).value,
            start: (inputs[2] as HTMLInputElement).value,
            end: (inputs[3] as HTMLInputElement).value,
          };
        }
      );

      const workExperience = [
        defaultWorkExperience,
        ...additionalWorkExperience,
      ]; 

      const skillsInputs = document.querySelectorAll("#skills-container input");
      const skills = Array.prototype.slice
        .call(skillsInputs)
        .map((input) => (input as HTMLInputElement).value);

      const profilePictureInput = (
        document.getElementById("profilePicture") as HTMLInputElement
      )?.files?.[0];
      const professionalSummary = (document.getElementById("professionalSummary") as HTMLInputElement)?.value || "";
      const reader = new FileReader();
      reader.onload = function (event) {
        const profilePictureBase64 = event.target?.result;
        const resumeData = {
          name,
          email,
          contact,
          dob,
          education,
          languages,
          professionalSummary,
          workExperience,
          skills,
          profilePicture: profilePictureBase64,
        };

        const userName = name.toLowerCase().replace(/\s+/g, "");
        localStorage.setItem(userName, JSON.stringify(resumeData));

        const uniqueUrl = `shareable.html?username=${userName}`;
        renderResume(resumeData, uniqueUrl);
      };

      if (profilePictureInput) {
        reader.readAsDataURL(profilePictureInput);
      } else {
        const resumeData = {
          name,
          email,
          contact,
          dob,
          education,
          professionalSummary,
          languages,
          workExperience,
          skills,
          profilePicture: null,
        };

        const userName = name.toLowerCase().replace(/\s+/g, "");
        localStorage.setItem(userName, JSON.stringify(resumeData));

        const uniqueUrl = `shareable.html?username=${userName}`;
        renderResume(resumeData, uniqueUrl);
      }
    });
  }

  function renderResume(data: any, uniqueUrl: string) {
    const resumeSection = document.getElementById(
      "resume"
    ) as HTMLElement | null;
    const resumeActions = document.getElementById(
      "resume-actions"
    ) as HTMLElement | null;

    if (resumeSection && resumeActions) {
      resumeSection.innerHTML = `
          <div class="resume-header">
          <img src="${
            data.profilePicture || "https://via.placeholder.com/120"
          }" alt="Profile Picture" id="profile-image" style="width: 120px; height: 120px; object-fit: cover; border-radius: 50%; margin-bottom: 15px; border: 3px solid #007bff;">
          <div class="personal-info">
            <div class="personal-info-item">
              <span>Name: <span class="editable">${data.name}</span></span>
            </div>
            <div class="personal-info-item">
              <span>Email: <span class="editable">${data.email}</span></span>
            </div>
            <div class="personal-info-item">
              <span>Contact: <span class="editable">${
                data.contact
              }</span></span>
            </div>
            <div class="personal-info-item">
              <span>Date of Birth: <span class="editable">${
                data.dob
              }</span></span>
            </div>
          </div>
        </div>
          
  <div class="resume-section">
    <h3>Professional Summary</h3>
    <p><span class="editable">${data.professionalSummary}</span></p>
  </div>
        <div class="resume-section" id="edu">
  <h3>Education</h3>
  ${data.education
    .map(
      (edu) => `
      <li id="edu-li">
        <span class="editable">${edu.name}</span>
        (<span>Start Date:</span> <span class="editable date-container">${edu.start}</span> -
         <span>End Date:</span> <span class="editable date-container">${edu.end}</span>)
      </li>
    `
    )
    .join("")}
</div>

        </div>
        <div class="resume-section">
          <h3>Languages</h3>
          <ul >
            ${data.languages
              .map(
                (language) =>
                  `<li  id="lan-li"> <span class="editable"> ${language} <span/> </li>`
              )
              .join("")}
          </ul>
        </div>
    <div class="resume-section">
  <h3>Work Experience</h3>
  ${data.workExperience
    .map(
      (exp) => `
      <li id="exp-li">
        <span class="editable">${exp.title} at ${exp.company}</span>
        (<span>Start Date:</span> <span class="editable date-container">${exp.start}</span> -
         <span>End Date:</span> <span class="editable date-container">${exp.end}</span>)
      </li>
    `
    )
    .join("")}
</div>

        </div>
        <div class="resume-section">
          <h3>Skills</h3>
          <ul >
            ${data.skills
              .map(
                (skill) =>
                  `<li  id="skill-li"> <span class="editable"> ${skill} <span /></li>`
              )
              .join("")}
          </ul>
        </div>
      `;

      resumeActions.style.display = "block";
      resumeActions.innerHTML += `
        <button class="edit-btn">Edit</button>
        <button class="save-btn" style="display: none;">Save</button>
      `;

      const shareableLinkContainer = document.createElement("div");
      shareableLinkContainer.classList.add("open-resume-btn-container");

      const shareableText = document.createElement("div");
      shareableText.classList.add("open-resume-text");
      shareableText.textContent = "Share your Resume";

      const shareableLink = document.createElement("a");
      shareableLink.href = uniqueUrl;
      shareableLink.textContent = window.location.origin + "/" + uniqueUrl;
      shareableLink.classList.add("open-resume-link");

      const copyLinkBtn = document.createElement("button");
      copyLinkBtn.classList.add("copy-link-btn");
      copyLinkBtn.textContent = "Copy Resume Link";
      copyLinkBtn.addEventListener("click", () => {
        navigator.clipboard
          .writeText(shareableLink.href)
          .then(() => alert("Resume link copied to clipboard!"))
          .catch((err) => console.error("Error copying link: ", err));
      });

      shareableLinkContainer.appendChild(copyLinkBtn);
      shareableLinkContainer.appendChild(shareableText);
      shareableLinkContainer.appendChild(shareableLink);
      resumeActions.appendChild(shareableLinkContainer);

      document
        .querySelector(".edit-btn")
        ?.addEventListener("click", makeEditable);

      const downloadBtn = document.getElementById("downloadBtn");
      if (downloadBtn) {
        downloadBtn.style.display = "inline-block";
        downloadBtn.addEventListener("click", function () {
          const opt = {
            margin: 1,
            filename: "Resume.pdf",
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
          };
          (window as any).html2pdf().from(resumeSection).set(opt).save();
        });
      }
    }
  }
});
