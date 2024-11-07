var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
document.addEventListener("DOMContentLoaded", function () {
    var _a, _b, _c, _d;
    function makeEditable() {
        var profileImageElement = document.getElementById("profile-image");
        if (profileImageElement) {
            var input = document.createElement("input");
            input.type = "file";
            input.accept = "image/*";
            input.style.display = "block";
            input.style.margin = "10px 0";
            profileImageElement.classList.add("original");
            profileImageElement.replaceWith(input);
        }
        var editableElements = document.querySelectorAll(".editable:not(.date-container)");
        editableElements.forEach(function (element) {
            var _a;
            var currentValue = ((_a = element.textContent) === null || _a === void 0 ? void 0 : _a.trim()) || "";
            var input = document.createElement("input");
            input.type = "text";
            input.value = currentValue;
            input.className = "form-control";
            element.replaceWith(input);
        });
        document.querySelectorAll(".date-container").forEach(function (element) {
            var _a;
            var currentValue = ((_a = element.textContent) === null || _a === void 0 ? void 0 : _a.trim()) || "";
            var input = document.createElement("input");
            input.type = "date";
            input.value = currentValue;
            input.className = "form-control date-input";
            element.replaceWith(input);
        });
        document.querySelectorAll(".edit-btn").forEach(function (button) {
            button.style.display = "none";
        });
        document.querySelectorAll(".save-btn").forEach(function (button) {
            button.style.display = "inline-block";
        });
        document.querySelectorAll(".save-btn").forEach(function (button) {
            button.addEventListener("click", function () {
                var _a;
                var summaryInput = document.getElementById("Professionalsummary");
                var summaryContainer = document.getElementById("Professional-summary-container");
                if (summaryInput && summaryContainer) {
                    var summaryText = summaryInput.value.trim();
                    var summarySpan = document.createElement("span");
                    summarySpan.className = "editable";
                    summarySpan.textContent = summaryText;
                    summaryInput.replaceWith(summarySpan);
                }
                var fileInput = document.querySelector('#resume input[type="file"]');
                if (fileInput && ((_a = fileInput.files) === null || _a === void 0 ? void 0 : _a[0])) {
                    var newImageURL = URL.createObjectURL(fileInput.files[0]);
                    var imgElement = document.createElement("img");
                    imgElement.src = newImageURL;
                    imgElement.alt = "Profile Picture";
                    imgElement.className = "editable";
                    imgElement.style.width = "120px";
                    imgElement.style.height = "120px";
                    imgElement.style.objectFit = "cover";
                    imgElement.style.borderRadius = "50%";
                    fileInput.replaceWith(imgElement);
                }
                else {
                    var originalImage = document.querySelector("#resume img.original");
                    if (originalImage) {
                        originalImage.classList.remove("original");
                    }
                }
                document.querySelectorAll('#resume input[type="text"], #resume input[type="date"]').forEach(function (input) {
                    var inputElement = input;
                    var newValue = inputElement.value.trim();
                    var span = document.createElement("span");
                    span.className = "editable";
                    if (inputElement.type === "date") {
                        span.classList.add("date-container");
                        span.textContent = new Date(newValue).toLocaleDateString();
                    }
                    else {
                        span.textContent = newValue;
                    }
                    inputElement.replaceWith(span);
                });
                var inputs = document.querySelectorAll('#resume input[type="text"]');
                inputs.forEach(function (input) {
                    var newValue = input.value.trim();
                    var span = document.createElement("span");
                    span.className = "editable";
                    span.textContent = newValue;
                    input.replaceWith(span);
                });
                document.querySelectorAll(".edit-btn").forEach(function (button) {
                    button.style.display = "inline-block";
                });
                document.querySelectorAll(".save-btn").forEach(function (button) {
                    button.style.display = "none";
                });
            });
        });
    }
    function addSkillField() {
        var skillsContainer = document.getElementById("skills-container");
        var skillInput = document.createElement("input");
        skillInput.type = "text";
        skillInput.placeholder = "Additonal skills";
        skillInput.classList.add("form-group");
        skillInput.className = "form-group";
        skillsContainer.appendChild(skillInput);
    }
    function addLanguageField() {
        var languagesContainer = document.getElementById("languages-container");
        var languageInput = document.createElement("input");
        languageInput.type = "text";
        languageInput.placeholder = "Additonal languages";
        languageInput.classList.add("form-group");
        languagesContainer.appendChild(languageInput);
    }
    function addEducationField() {
        var educationContainer = document.getElementById("education-container");
        var educationBlock = document.createElement("div");
        educationBlock.classList.add("education-block");
        educationBlock.innerHTML = "\n      <h3>Add More Education:</h3>\n      <div>\n        <span>Your Education and School / University:</span>\n        <input type=\"text\" placeholder=\"Your Education and School / University\" required />\n      </div>\n      <div>\n        <span>Start Date:</span>\n        <input type=\"date\" placeholder=\"Start Date\" required />\n      </div>\n      <div>\n        <span>End Date:</span>\n        <input type=\"date\" placeholder=\"End Date\" required />\n      </div>\n    ";
        educationContainer.appendChild(educationBlock);
    }
    function addWorkExperienceField() {
        var workExperienceContainer = document.getElementById("work-experience-container");
        var workExperienceBlock = document.createElement("div");
        workExperienceBlock.classList.add("work-experience-block");
        workExperienceBlock.innerHTML = "\n      <h3>Add more Work Experience:</h3>\n      <div>\n        <span>Job Title:</span>\n        <input type=\"text\" placeholder=\"Your Job Title\" required />\n      </div>\n      <div>\n        <span>Company:</span>\n        <input type=\"text\" placeholder=\"Company\" required />\n      </div>\n      <div>\n        <span>Start Date:</span>\n        <input type=\"date\" placeholder=\"Start Date\" required />\n      </div>\n      <div>\n        <span>End Date:</span>\n        <input type=\"date\" placeholder=\"End Date\" required />\n      </div>\n    ";
        workExperienceContainer.appendChild(workExperienceBlock);
    }
    (_a = document
        .getElementById("add-skill-btn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", addSkillField);
    (_b = document
        .getElementById("add-language-btn")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", addLanguageField);
    (_c = document
        .getElementById("add-education-btn")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", addEducationField);
    (_d = document
        .getElementById("add-work-btn")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", addWorkExperienceField);
    var resumeForm = document.getElementById("resumeForm");
    if (resumeForm) {
        resumeForm.addEventListener("submit", function (event) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
            event.preventDefault();
            var name = ((_a = document.getElementById("name")) === null || _a === void 0 ? void 0 : _a.value) || "";
            var email = ((_b = document.getElementById("email")) === null || _b === void 0 ? void 0 : _b.value) || "";
            var contact = ((_c = document.getElementById("contact")) === null || _c === void 0 ? void 0 : _c.value) || "";
            var dob = ((_d = document.getElementById("dob")) === null || _d === void 0 ? void 0 : _d.value) || "";
            var defaultEducation = {
                name: ((_e = document.getElementById("education")) === null || _e === void 0 ? void 0 : _e.value) ||
                    "",
                start: ((_f = document.getElementById("educationStart")) === null || _f === void 0 ? void 0 : _f.value) || "",
                end: ((_g = document.getElementById("educationEnd")) === null || _g === void 0 ? void 0 : _g.value) || "",
            };
            var educationBlocks = document.querySelectorAll("#education-container .education-block");
            var additionalEducation = Array.from(educationBlocks).map(function (block) {
                var inputs = block.querySelectorAll("input");
                return {
                    name: inputs[0].value,
                    start: inputs[1].value,
                    end: inputs[2].value,
                };
            });
            var education = __spreadArray([defaultEducation], additionalEducation, true);
            var languageInputs = document.querySelectorAll("#languages-container input");
            var languages = Array.prototype.slice
                .call(languageInputs)
                .map(function (input) { return input.value; });
            var defaultWorkExperience = {
                title: ((_h = document.getElementById("jobTitle")) === null || _h === void 0 ? void 0 : _h.value) ||
                    "",
                company: ((_j = document.getElementById("company")) === null || _j === void 0 ? void 0 : _j.value) || "",
                start: ((_k = document.getElementById("workStart")) === null || _k === void 0 ? void 0 : _k.value) ||
                    "",
                end: ((_l = document.getElementById("workEnd")) === null || _l === void 0 ? void 0 : _l.value) || "",
            };
            var workExperienceBlocks = document.querySelectorAll("#work-experience-container .work-experience-block");
            var additionalWorkExperience = Array.from(workExperienceBlocks).map(function (block) {
                var inputs = block.querySelectorAll("input");
                return {
                    title: inputs[0].value,
                    company: inputs[1].value,
                    start: inputs[2].value,
                    end: inputs[3].value,
                };
            });
            var workExperience = __spreadArray([
                defaultWorkExperience
            ], additionalWorkExperience, true);
            var skillsInputs = document.querySelectorAll("#skills-container input");
            var skills = Array.prototype.slice
                .call(skillsInputs)
                .map(function (input) { return input.value; });
            var profilePictureInput = (_o = (_m = document.getElementById("profilePicture")) === null || _m === void 0 ? void 0 : _m.files) === null || _o === void 0 ? void 0 : _o[0];
            var professionalSummary = ((_p = document.getElementById("professionalSummary")) === null || _p === void 0 ? void 0 : _p.value) || "";
            var reader = new FileReader();
            reader.onload = function (event) {
                var _a;
                var profilePictureBase64 = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
                var resumeData = {
                    name: name,
                    email: email,
                    contact: contact,
                    dob: dob,
                    education: education,
                    languages: languages,
                    professionalSummary: professionalSummary,
                    workExperience: workExperience,
                    skills: skills,
                    profilePicture: profilePictureBase64,
                };
                var userName = name.toLowerCase().replace(/\s+/g, "");
                localStorage.setItem(userName, JSON.stringify(resumeData));
                var uniqueUrl = "shareable.html?username=".concat(userName);
                renderResume(resumeData, uniqueUrl);
            };
            if (profilePictureInput) {
                reader.readAsDataURL(profilePictureInput);
            }
            else {
                var resumeData = {
                    name: name,
                    email: email,
                    contact: contact,
                    dob: dob,
                    education: education,
                    professionalSummary: professionalSummary,
                    languages: languages,
                    workExperience: workExperience,
                    skills: skills,
                    profilePicture: null,
                };
                var userName = name.toLowerCase().replace(/\s+/g, "");
                localStorage.setItem(userName, JSON.stringify(resumeData));
                var uniqueUrl = "shareable.html?username=".concat(userName);
                renderResume(resumeData, uniqueUrl);
            }
        });
    }
    function renderResume(data, uniqueUrl) {
        var _a;
        var resumeSection = document.getElementById("resume");
        var resumeActions = document.getElementById("resume-actions");
        if (resumeSection && resumeActions) {
            resumeSection.innerHTML = "\n          <div class=\"resume-header\">\n          <img src=\"".concat(data.profilePicture || "https://via.placeholder.com/120", "\" alt=\"Profile Picture\" id=\"profile-image\" style=\"width: 120px; height: 120px; object-fit: cover; border-radius: 50%; margin-bottom: 15px; border: 3px solid #007bff;\">\n          <div class=\"personal-info\">\n            <div class=\"personal-info-item\">\n              <span>Name: <span class=\"editable\">").concat(data.name, "</span></span>\n            </div>\n            <div class=\"personal-info-item\">\n              <span>Email: <span class=\"editable\">").concat(data.email, "</span></span>\n            </div>\n            <div class=\"personal-info-item\">\n              <span>Contact: <span class=\"editable\">").concat(data.contact, "</span></span>\n            </div>\n            <div class=\"personal-info-item\">\n              <span>Date of Birth: <span class=\"editable\">").concat(data.dob, "</span></span>\n            </div>\n          </div>\n        </div>\n          \n  <div class=\"resume-section\">\n    <h3>Professional Summary</h3>\n    <p><span class=\"editable\">").concat(data.professionalSummary, "</span></p>\n  </div>\n        <div class=\"resume-section\" id=\"edu\">\n  <h3>Education</h3>\n  ").concat(data.education
                .map(function (edu) { return "\n      <li id=\"edu-li\">\n        <span class=\"editable\">".concat(edu.name, "</span>\n        (<span>Start Date:</span> <span class=\"editable date-container\">").concat(edu.start, "</span> -\n         <span>End Date:</span> <span class=\"editable date-container\">").concat(edu.end, "</span>)\n      </li>\n    "); })
                .join(""), "\n</div>\n\n        </div>\n        <div class=\"resume-section\">\n          <h3>Languages</h3>\n          <ul >\n            ").concat(data.languages
                .map(function (language) {
                return "<li  id=\"lan-li\"> <span class=\"editable\"> ".concat(language, " <span/> </li>");
            })
                .join(""), "\n          </ul>\n        </div>\n    <div class=\"resume-section\">\n  <h3>Work Experience</h3>\n  ").concat(data.workExperience
                .map(function (exp) { return "\n      <li id=\"exp-li\">\n        <span class=\"editable\">".concat(exp.title, " at ").concat(exp.company, "</span>\n        (<span>Start Date:</span> <span class=\"editable date-container\">").concat(exp.start, "</span> -\n         <span>End Date:</span> <span class=\"editable date-container\">").concat(exp.end, "</span>)\n      </li>\n    "); })
                .join(""), "\n</div>\n\n        </div>\n        <div class=\"resume-section\">\n          <h3>Skills</h3>\n          <ul >\n            ").concat(data.skills
                .map(function (skill) {
                return "<li  id=\"skill-li\"> <span class=\"editable\"> ".concat(skill, " <span /></li>");
            })
                .join(""), "\n          </ul>\n        </div>\n      ");
            resumeActions.style.display = "block";
            resumeActions.innerHTML += "\n        <button class=\"edit-btn\">Edit</button>\n        <button class=\"save-btn\" style=\"display: none;\">Save</button>\n      ";
            var shareableLinkContainer = document.createElement("div");
            shareableLinkContainer.classList.add("open-resume-btn-container");
            var shareableText = document.createElement("div");
            shareableText.classList.add("open-resume-text");
            shareableText.textContent = "Share your Resume";
            var shareableLink_1 = document.createElement("a");
            shareableLink_1.href = uniqueUrl;
            shareableLink_1.textContent = window.location.origin + "/" + uniqueUrl;
            shareableLink_1.classList.add("open-resume-link");
            var copyLinkBtn = document.createElement("button");
            copyLinkBtn.classList.add("copy-link-btn");
            copyLinkBtn.textContent = "Copy Resume Link";
            copyLinkBtn.addEventListener("click", function () {
                navigator.clipboard
                    .writeText(shareableLink_1.href)
                    .then(function () { return alert("Resume link copied to clipboard!"); })
                    .catch(function (err) { return console.error("Error copying link: ", err); });
            });
            shareableLinkContainer.appendChild(copyLinkBtn);
            shareableLinkContainer.appendChild(shareableText);
            shareableLinkContainer.appendChild(shareableLink_1);
            resumeActions.appendChild(shareableLinkContainer);
            (_a = document
                .querySelector(".edit-btn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", makeEditable);
            var downloadBtn = document.getElementById("downloadBtn");
            if (downloadBtn) {
                downloadBtn.style.display = "inline-block";
                downloadBtn.addEventListener("click", function () {
                    var opt = {
                        margin: 1,
                        filename: "Resume.pdf",
                        image: { type: "jpeg", quality: 0.98 },
                        html2canvas: { scale: 2 },
                        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
                    };
                    window.html2pdf().from(resumeSection).set(opt).save();
                });
            }
        }
    }
});
