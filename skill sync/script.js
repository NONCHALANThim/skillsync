// ========================================
// SkillSync - Student Skill Exchange
// ========================================

// 50 Student Profiles Database
const defaultStudents = [
    {
        id: 1,
        name: "Aman Kumar",
        bio: "MCA student · Backend enthusiast",
        about: "I enjoy solving problems with code, building APIs in Python/SQL, and want to improve my visual and UI design skills.",
        teaches: ["Python", "SQL"],
        learns: ["Graphic Design", "UI/UX"]
    },
    {
        id: 2,
        name: "Rahul Sharma",
        bio: "Design enthusiast · Creative thinker",
        about: "I enjoy creating clean visual designs, branding, and want to learn Python programming for automation.",
        teaches: ["Graphic Design", "Photoshop", "Figma"],
        learns: ["Python"]
    },
    {
        id: 3,
        name: "Priya Verma",
        bio: "Programmer · Web enthusiast",
        about: "I like building full-stack web projects with Java and HTML/CSS and want to strengthen my database querying skills.",
        teaches: ["Java", "HTML", "CSS"],
        learns: ["SQL", "Database Design"]
    },
    {
        id: 4,
        name: "Neha Singh",
        bio: "Frontend learner · Curious creator",
        about: "I enjoy designing frontend interfaces and want to learn Java backend fundamentals from fellow students.",
        teaches: ["HTML", "CSS", "JavaScript"],
        learns: ["Java"]
    },
    {
        id: 5,
        name: "Karan Mehta",
        bio: "Python learner · Data curious",
        about: "I am interested in data exploration and would like to learn relational SQL while sharing Python basics.",
        teaches: ["Python"],
        learns: ["SQL", "Data Analysis"]
    },
    {
        id: 6,
        name: "Sana Ali",
        bio: "Digital artist · Design student",
        about: "I create digital illustrations and vector art and want to master photo manipulation and Photoshop workflows.",
        teaches: ["Graphic Design", "Illustrator"],
        learns: ["Photoshop", "Digital Painting"]
    },
    {
        id: 7,
        name: "Aarav Patel",
        bio: "CS undergrad · Data Science lover",
        about: "Working on data science and machine learning. Keen to learn Figma to build interactive portfolio prototypes.",
        teaches: ["Python", "Machine Learning", "Pandas"],
        learns: ["Figma", "UI/UX"]
    },
    {
        id: 8,
        name: "Ananya Roy",
        bio: "UI/UX Designer · Wireframe specialist",
        about: "I love designing modern user experiences and want to learn Python to understand how developers build backends.",
        teaches: ["UI/UX", "Figma", "User Research"],
        learns: ["Python", "Web Development"]
    },
    {
        id: 9,
        name: "Vikram Malhotra",
        bio: "Systems programmer · C++ geek",
        about: "I build low-level systems in C++ and want to learn modern JavaScript to build frontend dashboards.",
        teaches: ["C++", "Data Structures"],
        learns: ["JavaScript", "React"]
    },
    {
        id: 10,
        name: "Rhea Sen",
        bio: "React Developer · Frontend nerd",
        about: "I build responsive web apps with React. Looking for someone to guide me through competitive C++ algorithms.",
        teaches: ["JavaScript", "React", "CSS"],
        learns: ["C++", "Data Structures"]
    },
    {
        id: 11,
        name: "Kabir Joshi",
        bio: "Video Editor · Content creator",
        about: "I edit YouTube documentaries in Premiere Pro and After Effects. Want to build my own portfolio website with HTML/CSS.",
        teaches: ["Video Editing", "Premiere Pro", "After Effects"],
        learns: ["HTML", "CSS", "Web Development"]
    },
    {
        id: 12,
        name: "Meera Nair",
        bio: "Web developer · Blogger",
        about: "I build personal websites and blogs. Seeking mentorship to produce cinematic video reels and editing.",
        teaches: ["HTML", "CSS", "WordPress"],
        learns: ["Video Editing", "Premiere Pro"]
    },
    {
        id: 13,
        name: "Arjun Reddy",
        bio: "Android Dev · Kotlin specialist",
        about: "I develop mobile apps in Kotlin. Interested in learning Flutter to make cross-platform iOS apps too.",
        teaches: ["Android", "Kotlin", "Java"],
        learns: ["Flutter", "Dart"]
    },
    {
        id: 14,
        name: "Divya Kapoor",
        bio: "Flutter developer · Cross-platform fan",
        about: "I create beautiful mobile interfaces in Flutter. Eager to understand native Android architecture and Kotlin.",
        teaches: ["Flutter", "Dart"],
        learns: ["Kotlin", "Android"]
    },
    {
        id: 15,
        name: "Rohan Das",
        bio: "Cloud & DevOps enthusiast",
        about: "Hands-on with Docker and Linux servers. Looking to learn Python scripting for cloud automation and DevOps pipelines.",
        teaches: ["Linux", "Docker", "Git"],
        learns: ["Python", "Bash"]
    },
    {
        id: 16,
        name: "Tanvi Saxena",
        bio: "Python automation script writer",
        about: "I write Python automation scripts and want to dive deeper into deploying applications with Docker and Linux.",
        teaches: ["Python", "Automation"],
        learns: ["Docker", "Linux"]
    },
    {
        id: 17,
        name: "Aditya Chopra",
        bio: "Cybersecurity student · CTF player",
        about: "I focus on web security and ethical hacking. Wanting to learn networking basics and SQL injection mitigation.",
        teaches: ["Ethical Hacking", "Cybersecurity"],
        learns: ["Computer Networks", "SQL"]
    },
    {
        id: 18,
        name: "Shreya Ghoshal",
        bio: "Network engineering student",
        about: "Certified in networking protocols (TCP/IP, routing). Looking to understand ethical hacking and network security.",
        teaches: ["Computer Networks", "Cisco Packet Tracer"],
        learns: ["Cybersecurity", "Ethical Hacking"]
    },
    {
        id: 19,
        name: "Manish Pandey",
        bio: "Financial analyst · Excel guru",
        about: "I build complex financial models and macros in Excel. Want to transition into Python data visualization.",
        teaches: ["Excel", "Financial Modeling"],
        learns: ["Python", "Data Visualization"]
    },
    {
        id: 20,
        name: "Pooja Hegde",
        bio: "Data Analyst · Seaborn enthusiast",
        about: "I do data visualization with Python and Matplotlib. Looking to learn advanced corporate financial Excel modeling.",
        teaches: ["Python", "Data Visualization", "Pandas"],
        learns: ["Excel", "Financial Modeling"]
    },
    {
        id: 21,
        name: "Siddharth Bose",
        bio: "Public speaker & Debater",
        about: "Award-winning college debater. Looking to learn graphic design to create compelling slide presentations.",
        teaches: ["Public Speaking", "Communication", "Presentation Skills"],
        learns: ["Graphic Design", "Canva", "Photoshop"]
    },
    {
        id: 22,
        name: "Ishita Dutta",
        bio: "Visual artist · Slide designer",
        about: "I design high-converting visual slide decks and want to improve my verbal communication and stage confidence.",
        teaches: ["Graphic Design", "Canva", "Presentation Design"],
        learns: ["Public Speaking", "Communication"]
    },
    {
        id: 23,
        name: "Gaurav Gupta",
        bio: "MERN Stack Developer",
        about: "Full-stack engineer focusing on Node.js and Express backends. Wanting to master SQL databases like PostgreSQL.",
        teaches: ["Node.js", "Express", "MongoDB"],
        learns: ["SQL", "PostgreSQL"]
    },
    {
        id: 24,
        name: "Kavita Krishnan",
        bio: "Database administrator in training",
        about: "I write fast SQL queries and design schemas. Looking to learn Node.js backend development to build REST APIs.",
        teaches: ["SQL", "Database Design", "PostgreSQL"],
        learns: ["Node.js", "Backend Development"]
    },
    {
        id: 25,
        name: "Harsh Vardhan",
        bio: "Game developer · Unity fan",
        about: "I build 2D & 3D games in Unity (C#). Want to learn 3D modeling and texturing in Blender.",
        teaches: ["Unity", "C#", "Game Development"],
        learns: ["Blender", "3D Modeling"]
    },
    {
        id: 26,
        name: "Simran Kaur",
        bio: "3D Artist · Blender sculptor",
        about: "I sculpt game characters and environments in Blender. Looking to learn Unity game scripting in C#.",
        teaches: ["Blender", "3D Modeling", "Texturing"],
        learns: ["Unity", "C#", "Game Development"]
    },
    {
        id: 27,
        name: "Nikhil Chawla",
        bio: "SEO specialist · Digital marketer",
        about: "I optimize websites for Google search rankings. Need to understand HTML/CSS basics to improve technical SEO.",
        teaches: ["SEO", "Content Strategy", "Digital Marketing"],
        learns: ["HTML", "CSS"]
    },
    {
        id: 28,
        name: "Alia Bhattacharya",
        bio: "Web developer · Freelancer",
        about: "I create static web pages and landing pages. Eager to learn SEO best practices to deliver higher ROI to clients.",
        teaches: ["HTML", "CSS", "JavaScript"],
        learns: ["SEO", "Digital Marketing"]
    },
    {
        id: 29,
        name: "Devendra Rathore",
        bio: "Machine Learning researcher",
        about: "I work with Deep Learning and PyTorch models. Looking for help with clean Python software engineering and OOP.",
        teaches: ["Machine Learning", "PyTorch", "Deep Learning"],
        learns: ["Python", "Object-Oriented Programming"]
    },
    {
        id: 30,
        name: "Zoya Akhtar",
        bio: "Python backend architect",
        about: "I write clean, modular object-oriented Python code. Wanting to get started with introductory Machine Learning.",
        teaches: ["Python", "Object-Oriented Programming", "FastAPI"],
        learns: ["Machine Learning", "Data Science"]
    },
    {
        id: 31,
        name: "Varun Dhawan",
        bio: "Motion Graphics Animator",
        about: "I craft animated title cards and 2D logo animations in After Effects. Looking to learn Figma design components.",
        teaches: ["After Effects", "Motion Graphics"],
        learns: ["Figma", "UI/UX"]
    },
    {
        id: 32,
        name: "Kriti Sanon",
        bio: "Product Designer · Design systems",
        about: "I build reusable Figma design libraries. Looking to bring my static mockups to life with After Effects animations.",
        teaches: ["Figma", "Design Systems", "UI/UX"],
        learns: ["After Effects", "Motion Graphics"]
    },
    {
        id: 33,
        name: "Tariq Mansoor",
        bio: "Web3 explorer · Smart contracts",
        about: "I write Solidity smart contracts for Ethereum. Want to learn frontend React to connect contracts with web wallets.",
        teaches: ["Solidity", "Web3", "Blockchain"],
        learns: ["React", "JavaScript"]
    },
    {
        id: 34,
        name: "Rupal Jain",
        bio: "Frontend engineer · Web3 learner",
        about: "I build web applications with React. Eager to understand smart contract security and Solidity development.",
        teaches: ["React", "JavaScript", "HTML"],
        learns: ["Solidity", "Web3"]
    },
    {
        id: 35,
        name: "Abhinav Bindra",
        bio: "Competitive Programmer · Algorithm lover",
        about: "Solved 500+ LeetCode problems in C++. Looking to learn Java so I can clear enterprise technical interviews.",
        teaches: ["Algorithms", "C++", "Data Structures"],
        learns: ["Java", "OOP"]
    },
    {
        id: 36,
        name: "Sanya Malhotra",
        bio: "Java developer · Spring Boot explorer",
        about: "I develop backend services with Java. Looking to sharpen my competitive problem-solving and algorithmic speed.",
        teaches: ["Java", "Spring Boot", "OOP"],
        learns: ["Algorithms", "Data Structures"]
    },
    {
        id: 37,
        name: "Prateek Babbar",
        bio: "Photographer · Lightroom retoucher",
        about: "I shoot portrait photography and color grade in Lightroom. Looking to learn graphic design for album covers.",
        teaches: ["Photography", "Lightroom", "Color Grading"],
        learns: ["Graphic Design", "Illustrator"]
    },
    {
        id: 38,
        name: "Tara Sutaria",
        bio: "Vector illustrator · Badge designer",
        about: "I create clean vector artwork in Illustrator. Wanting to learn DSLR photography composition and Lightroom editing.",
        teaches: ["Graphic Design", "Illustrator"],
        learns: ["Photography", "Lightroom"]
    },
    {
        id: 39,
        name: "Chetan Bhagat",
        bio: "Creative writer · Storyteller",
        about: "I write fiction stories and blog posts. Looking for a peer to teach me how to build a basic WordPress blog.",
        teaches: ["Creative Writing", "Content Writing", "Copywriting"],
        learns: ["WordPress", "Web Development"]
    },
    {
        id: 40,
        name: "Sunidhi Chauhan",
        bio: "WordPress developer · CMS specialist",
        about: "I build clean, optimized WordPress sites. Looking to refine my creative writing and storytelling techniques.",
        teaches: ["WordPress", "Web Development", "HTML"],
        learns: ["Creative Writing", "Content Writing"]
    },
    {
        id: 41,
        name: "Deepak Hooda",
        bio: "Git & Open-source contributor",
        about: "I navigate Git branches, merge conflicts, and GitHub workflows smoothly. Want to learn Python for automation.",
        teaches: ["Git", "GitHub", "Open Source"],
        learns: ["Python", "Scripting"]
    },
    {
        id: 42,
        name: "Natasha Narwal",
        bio: "Python developer · Scraper",
        about: "I build web scrapers with BeautifulSoup and Python. Want to master advanced Git branching and GitHub actions.",
        teaches: ["Python", "Web Scraping"],
        learns: ["Git", "GitHub"]
    },
    {
        id: 43,
        name: "Farhan Qureshi",
        bio: "Wildlife lover · Wildlife photography",
        about: "Passionate about capturing nature and animals. Looking to learn Photoshop for subtle image cleanups and retouching.",
        teaches: ["Photography", "Nature Studies"],
        learns: ["Photoshop", "Graphic Design"]
    },
    {
        id: 44,
        name: "Raju Rastogi",
        bio: "Engineering student · Math & Stats",
        about: "I have strong mathematical foundation in probability and linear algebra. Looking to learn Python to apply math in code.",
        teaches: ["Mathematics", "Statistics", "Linear Algebra"],
        learns: ["Python", "Data Science"]
    },
    {
        id: 45,
        name: "Boman Irani",
        bio: "College mentor · Interview coach",
        about: "I conduct mock technical and HR interviews. Looking to learn basic computer presentation skills and Canva design.",
        teaches: ["Interview Preparation", "Resume Building", "Career Guidance"],
        learns: ["Graphic Design", "Canva"]
    },
    {
        id: 46,
        name: "Sanah Moidutty",
        bio: "Language enthusiast · Spanish learner",
        about: "Native Hindi & fluent English speaker, certified Spanish A2. Looking to learn conversational French.",
        teaches: ["Spanish", "English Communication"],
        learns: ["French", "Language Exchange"]
    },
    {
        id: 47,
        name: "Armaan Malik",
        bio: "French speaker · Music lover",
        about: "Fluent in French. Wanting to learn conversational Spanish for an upcoming student exchange program.",
        teaches: ["French", "Language Exchange"],
        learns: ["Spanish", "English Communication"]
    },
    {
        id: 48,
        name: "Esha Deol",
        bio: "Product Manager aspirant · Agile enthusiast",
        about: "I practice Agile Scrum ceremonies and write Jira user stories. Looking to learn SQL to run product analytics.",
        teaches: ["Product Management", "Agile", "Scrum"],
        learns: ["SQL", "Data Analysis"]
    },
    {
        id: 49,
        name: "Jaspreet Bumrah",
        bio: "Speedy coder · Go (Golang) enthusiast",
        about: "I build concurrent microservices in Go. Eager to learn Python for rapid prototyping and AI scripting.",
        teaches: ["Go", "Golang", "Microservices"],
        learns: ["Python", "Machine Learning"]
    },
    {
        id: 50,
        name: "Smriti Mandhana",
        bio: "Full Stack learner · Team player",
        about: "I build responsive UI with Vue.js and CSS. Looking to partner with someone teaching Go backend services.",
        teaches: ["Vue.js", "CSS", "Frontend Development"],
        learns: ["Go", "Golang"]
    }
];

const STORAGE_KEY = "skillsync-profile-v1";

// Copy default data to avoid modifying the original array.
let students = defaultStudents.map((student) => ({
    ...student,
    teaches: [...student.teaches],
    learns: [...student.learns],
}));

// Load the saved profile from localStorage.
try {
    const savedProfile = JSON.parse(
        localStorage.getItem(STORAGE_KEY) || "null"
    );

    if (savedProfile && typeof savedProfile === "object") {
        const ownProfile = students.find((student) => student.id === 1);

        Object.assign(ownProfile, savedProfile, { id: 1 });

        if (!Array.isArray(savedProfile.teaches)) {
            ownProfile.teaches = ["Python", "SQL"];
        }

        if (!Array.isArray(savedProfile.learns)) {
            ownProfile.learns = ["Graphic Design", "UI/UX"];
        }
    }
} catch (error) {
    console.error("Unable to load saved profile:", error);
}

// ========================================
// Helper Functions & Matching Logic
// ========================================

// Escape HTML to prevent user input from becoming HTML markup.
function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, (character) => {
        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
        };

        return entities[character];
    });
}

// Create skill tags.
function makeTags(skills, className = "") {
    return skills
        .map(
            (skill) =>
                `<span class="tag ${className}">${escapeHTML(skill)}</span>`
        )
        .join("");
}

// Normalizer for skill matching
function cleanSkill(str) {
    return (str || "").trim().toLowerCase();
}

// Calculate Compatibility Score between two students
function calculateScore(studentA, studentB) {
    const aTeaches = studentA.teaches.map(cleanSkill);
    const aLearns = studentA.learns.map(cleanSkill);
    const bTeaches = studentB.teaches.map(cleanSkill);
    const bLearns = studentB.learns.map(cleanSkill);

    // B can teach A what A wants to learn?
    const bCanTeachA = aLearns.some(skill => 
        bTeaches.some(bSkill => bSkill === skill || bSkill.includes(skill) || skill.includes(bSkill))
    );

    // A can teach B what B wants to learn?
    const aCanTeachB = bLearns.some(skill => 
        aTeaches.some(aSkill => aSkill === skill || aSkill.includes(skill) || skill.includes(aSkill))
    );

    if (bCanTeachA && aCanTeachB) {
        return { percent: 100, label: "Mutual Swap Match", type: "high" };
    } else if (bCanTeachA) {
        return { percent: 75, label: "Can Teach You", type: "medium" };
    } else if (aCanTeachB) {
        return { percent: 50, label: "Needs Your Skill", type: "low" };
    } else {
        return { percent: 15, label: "Skill Explorer", type: "low" };
    }
}

// Find and sort students who can exchange skills with the target student
function findMatches(targetStudent) {
    return students
        .filter((other) => other.id !== targetStudent.id)
        .map((other) => {
            const score = calculateScore(targetStudent, other);
            return {
                ...other,
                matchScore: score
            };
        })
        .filter((item) => item.matchScore.percent >= 50) // Show mutual & high relevance matches
        .sort((a, b) => b.matchScore.percent - a.matchScore.percent);
}

// Create a student card with Compatibility Score Badge & Progress Bar.
function studentCard(student, referenceStudent = null) {
    // If no reference student is passed, default to user (ID 1)
    const currentUser = referenceStudent || students[0];
    const isSelf = student.id === currentUser.id;
    const score = isSelf ? null : calculateScore(currentUser, student);

    const matches = findMatches(student);

    return `
    <article class="student-card">

      <div class="card-top-row">
        <div class="avatar" aria-hidden="true">
          ${escapeHTML(student.name.charAt(0).toUpperCase())}
        </div>
        ${score ? `
          <div class="compatibility-badge badge-${score.type}">
            ${score.percent}% Match
          </div>
        ` : ''}
      </div>

      <h3>${escapeHTML(student.name)}</h3>

      <p class="bio">
        ${escapeHTML(student.bio)}
      </p>

      ${score ? `
        <div class="compatibility-bar-wrap" title="${score.label}">
          <div class="compatibility-bar bar-${score.type}" style="width: ${score.percent}%;"></div>
        </div>
        <p class="match-badge-text ${score.type}">⭐ ${score.label}</p>
      ` : ''}

      <div class="skill-group">
        <span class="skill-title">Can teach</span>
        <div class="tags">
          ${makeTags(student.teaches)}
        </div>
      </div>

      <div class="skill-group">
        <span class="skill-title">Wants to learn</span>
        <div class="tags">
          ${makeTags(student.learns, "learn")}
        </div>
      </div>

      <p class="match-note">
        ${matches.length
            ? `${matches.length} potential skill match${matches.length === 1 ? "" : "es"}`
            : "Still looking for a skill partner"
        }
      </p>

      <a
        class="profile-link"
        href="profile.html?id=${student.id}"
      >
        View profile →
      </a>

    </article>
  `;
}

// ========================================
// Search Page
// ========================================

const studentList = document.getElementById("studentList");

if (studentList) {
    const searchInput = document.getElementById("skillSearch");
    const emptyState = document.getElementById("emptyState");
    const resultCount = document.getElementById("resultCount");
    const currentUser = students[0];

    function renderStudents() {
        const query = searchInput.value.trim().toLowerCase();

        let filtered = students.filter((student) => {
            const searchableText = [
                student.name,
                student.bio,
                student.about,
                ...student.teaches,
                ...student.learns,
            ]
                .join(" ")
                .toLowerCase();

            return searchableText.includes(query);
        });

        // Sort by compatibility relative to currentUser (highest first)
        filtered.sort((a, b) => {
            if (a.id === currentUser.id) return -1;
            if (b.id === currentUser.id) return 1;
            const scoreA = calculateScore(currentUser, a).percent;
            const scoreB = calculateScore(currentUser, b).percent;
            return scoreB - scoreA;
        });

        studentList.innerHTML = filtered
            .map(s => studentCard(s, currentUser))
            .join("");

        emptyState.hidden = filtered.length > 0;

        resultCount.textContent =
            `${filtered.length} student` +
            (filtered.length === 1 ? "" : "s");
    }

    searchInput.addEventListener("input", renderStudents);

    renderStudents();
}

// ========================================
// Profile Page
// ========================================

const profileDetails = document.getElementById("profileDetails");

if (profileDetails) {
    const params = new URLSearchParams(window.location.search);

    const requestedId = Number(params.get("id")) || 1;

    const student =
        students.find((item) => item.id === requestedId) || students[0];

    const isOwnProfile = student.id === 1;

    const matchesContainer =
        document.getElementById("profileMatches");

    const emptyState =
        document.getElementById("profileEmptyState");

    const editButton =
        document.getElementById("editProfileButton");

    const editPanel =
        document.getElementById("editProfilePanel");

    const editForm =
        document.getElementById("editProfileForm");

    const saveMessage =
        document.getElementById("saveMessage");

    // Render profile details and potential matches.
    function renderProfile() {
        profileDetails.innerHTML = `
      <div class="profile-top">

        <div class="profile-avatar" aria-hidden="true">
          ${escapeHTML(student.name.charAt(0).toUpperCase())}
        </div>

        <div>
          <p class="eyebrow">STUDENT PROFILE</p>

          <h2>${escapeHTML(student.name)}</h2>

          <p>${escapeHTML(student.bio)}</p>
        </div>

      </div>

      <div class="profile-columns">

        <div>
          <h3>Skills I can teach</h3>

          <div class="tags">
            ${makeTags(student.teaches)}
          </div>
        </div>

        <div>
          <h3>Skills I want to learn</h3>

          <div class="tags">
            ${makeTags(student.learns, "learn")}
          </div>
        </div>

      </div>

      <p class="profile-about">
        ${escapeHTML(student.about)}
      </p>
    `;

        const matches = findMatches(student);

        matchesContainer.innerHTML = matches
            .map(other => studentCard(other, student))
            .join("");

        emptyState.hidden = matches.length > 0;
    }

    // Display the profile.
    renderProfile();

    // Only allow editing the current user's demo profile.
    if (!isOwnProfile && editButton) {
        editButton.hidden = true;

        const hint = document.querySelector(".profile-actions .hint");

        if (hint) {
            hint.textContent =
                "Only your own demo profile can be edited.";
        }
    }

    // Fill the edit form with existing information.
    function fillForm() {
        document.getElementById("editName").value = student.name;

        document.getElementById("editBio").value = student.bio;

        document.getElementById("editTeaches").value =
            student.teaches.join(", ");

        document.getElementById("editLearns").value =
            student.learns.join(", ");

        document.getElementById("editAbout").value = student.about;
    }

    // Open the edit form.
    if (editButton && editPanel && editForm && saveMessage) {
        editButton.addEventListener("click", () => {
            fillForm();

            editPanel.hidden = false;
            saveMessage.textContent = "";

            editPanel.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        });

        // Cancel editing.
        const cancelButton = document.getElementById("cancelEdit");

        if (cancelButton) {
            cancelButton.addEventListener("click", () => {
                editPanel.hidden = true;
                saveMessage.textContent = "";
            });
        }

        // Save updated profile information.
        editForm.addEventListener("submit", (event) => {
            event.preventDefault();

            if (!isOwnProfile) {
                return;
            }

            const newName = document
                .getElementById("editName")
                .value.trim();

            const newBio = document
                .getElementById("editBio")
                .value.trim();

            const newAbout = document
                .getElementById("editAbout")
                .value.trim();

            // Convert comma-separated skills into arrays.
            function parseSkills(value) {
                return [
                    ...new Set(
                        value
                            .split(",")
                            .map((skill) => skill.trim())
                            .filter(Boolean)
                    ),
                ];
            }

            const newTeaches = parseSkills(
                document.getElementById("editTeaches").value
            );

            const newLearns = parseSkills(
                document.getElementById("editLearns").value
            );

            // Validate required fields.
            if (!newName) {
                saveMessage.textContent = "Please enter your name.";
                return;
            }

            if (!newTeaches.length || !newLearns.length) {
                saveMessage.textContent =
                    "Enter at least one skill in both skill fields.";
                return;
            }

            // Update the profile.
            student.name = newName;
            student.bio = newBio;
            student.about = newAbout;
            student.teaches = newTeaches;
            student.learns = newLearns;

            const profileToSave = {
                name: student.name,
                bio: student.bio,
                about: student.about,
                teaches: student.teaches,
                learns: student.learns,
            };

            try {
                localStorage.setItem(
                    STORAGE_KEY,
                    JSON.stringify(profileToSave)
                );

                saveMessage.textContent =
                    "Profile saved successfully!";

            } catch (error) {
                console.error("Unable to save profile:", error);

                saveMessage.textContent =
                    "Profile updated for this session, but browser storage failed.";
            }

            // Refresh profile details and matching cards.
            renderProfile();

            // Close the editor.
            editPanel.hidden = true;
        });
    }
}
