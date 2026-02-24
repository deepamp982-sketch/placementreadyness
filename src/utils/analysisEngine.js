/**
 * Placement Readiness Analysis Engine
 * Handles skill extraction, score calculation, and plan generation.
 */

const SKILL_CATEGORIES = {
    "Core CS": ["DSA", "OOP", "DBMS", "OS", "Networks"],
    "Languages": ["Java", "Python", "JavaScript", "TypeScript", "C", "C++", "C#", "Go"],
    "Web": ["React", "Next.js", "Node.js", "Express", "REST", "GraphQL"],
    "Data": ["SQL", "MongoDB", "PostgreSQL", "MySQL", "Redis"],
    "Cloud/DevOps": ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "CI/CD", "Linux"],
    "Testing": ["Selenium", "Cypress", "Playwright", "JUnit", "PyTest"]
};

const QUESTIONS_BANK = {
    "SQL": [
        "Explain indexing and when it helps.",
        "Difference between WHERE and HAVING clauses.",
        "What are ACID properties in a database?"
    ],
    "React": [
        "Explain state management options in React.",
        "What is the Virtual DOM and how does it work?",
        "Difference between useMemo and useCallback."
    ],
    "DSA": [
        "How would you optimize search in sorted data?",
        "Explain the difference between BFS and DFS.",
        "When would you use a Hash Table over a Binary Search Tree?"
    ],
    "Java": [
        "Difference between abstract class and interface in Java.",
        "How does Garbage Collection work in JVM?",
        "What is the Difference between HashMap and ConcurrentHashMap?"
    ],
    "Python": [
        "How do decorators work in Python?",
        "Difference between a list and a tuple.",
        "What is the Global Interpreter Lock (GIL)?"
    ],
    "Node.js": [
        "Explain the Event Loop in Node.js.",
        "What is middleware in Express?",
        "Difference between process.nextTick() and setImmediate()."
    ],
    "Docker": [
        "What is the difference between a container and an image?",
        "How do Docker volumes work?",
        "Explain the purpose of a Dockerfile."
    ],
    "General": [
        "Tell me about your most challenging project.",
        "Where do you see yourself in 5 years?",
        "How do you handle conflict in a team?"
    ]
};

export const analyzeJD = (company, role, jdText) => {
    const extractedSkills = {};
    let detectedCategoryCount = 0;

    // 1. Skill Extraction
    Object.entries(SKILL_CATEGORIES).forEach(([category, skills]) => {
        const foundInCat = skills.filter(skill =>
            new RegExp(`\\b${skill === 'C++' ? 'C\\+\\+' : skill}\\b`, 'i').test(jdText)
        );
        if (foundInCat.length > 0) {
            extractedSkills[category] = foundInCat;
            detectedCategoryCount++;
        }
    });

    const allDetectedSkills = Object.values(extractedSkills).flat();

    // 2. Score Calculation
    let score = 35;
    score += Math.min(detectedCategoryCount * 5, 30);
    if (company) score += 10;
    if (role) score += 10;
    if (jdText.length > 800) score += 10;
    score = Math.min(score, 100);

    // 3. Round-wise Preparation Checklist
    const checklist = [
        {
            round: "Round 1: Aptitude / Basics",
            items: [
                "Aptitude & Logical Reasoning",
                "Quantitative Ability (Quants)",
                "Verbal Ability & Reading Comprehension",
                "Resume Section-by-Section Overview",
                "Self-Introduction (The 'Elevator Pitch')",
                "LinkedIn Profile Optimization",
                "Basic Mental Math Shortcuts"
            ]
        },
        {
            round: "Round 2: DSA + Core CS",
            items: [
                "Data Structures (Arrays, Strings, Linked Lists)",
                "Searching & Sorting (Quick/Merge Sort)",
                "OS: Process Management & Deadlocks",
                "DBMS: Normalization & Query Optimization",
                "Basic Coding (Easy-Medium LeetCode)",
                "Computer Networks: OSI Model & TCP/UDP",
                "OOPs: Inheritance & Polymorphism"
            ]
        },
        {
            round: "Round 3: Tech Interview (Projects + Stack)",
            items: [
                "Deep Dive: Most Significant Project",
                "Technical Trade-offs & Architecture",
                "Real-world System Design (Basic)",
                "Core Language/Framework Fundamentals",
                "Problem Solving Scenarios (STAR Method)",
                "Git & Version Control Basics"
            ]
        },
        {
            round: "Round 4: Managerial / HR",
            items: [
                "Behavioral Questions (Company Values)",
                "Handling Team Conflict Scenarios",
                "Company Research (Mission & Culture)",
                "Long-term Career Goal Alignment",
                "Why this Company? Why this Role?",
                "Question Prep for the Interviewer",
                "Handling Salary/Relocation Queries"
            ]
        }
    ];

    // Adapt checklist based on skills
    if (allDetectedSkills.length > 0) {
        checklist[2].items.push(...allDetectedSkills.slice(0, 2).map(s => `Advanced Focus: ${s}`));
    }

    // 4. 7-day Plan
    const plan = [
        { days: "Day 1–2", task: "Basics + Core CS", details: "Review OS, DBMS, and OOP basics. Structure your introduction." },
        { days: "Day 3–4", task: "DSA + Coding Practice", details: "Practice Top 50 LeetCode problems. Focus on Strings and Arrays." },
        { days: "Day 5", task: "Project + Resume Alignment", details: "Revise every line on your resume. Be ready to explain your tech stack." },
        { days: "Day 6", task: "Mock Interview Questions", details: "Practice out-loud. Focus on 'Tell me about yourself' and project 'Why'." },
        { days: "Day 7", task: "Revision + Weak Areas", details: "Quickly scan through your notes. Relax and get enough sleep." }
    ];

    // Adapt plan
    if (allDetectedSkills.includes('React') || allDetectedSkills.includes('Next.js')) {
        plan[2].details += " Special focus on Frontend state management & architecture.";
    }
    if (allDetectedSkills.includes('SQL') || allDetectedSkills.includes('MongoDB')) {
        plan[4].details += " Revise database indexing and normalization.";
    }

    // 5. 10 Likely Questions
    let questions = [];
    allDetectedSkills.forEach(skill => {
        if (QUESTIONS_BANK[skill]) {
            questions.push(...QUESTIONS_BANK[skill]);
        }
    });

    // Supplement with general questions if not enough
    if (questions.length < 10) {
        questions.push(...QUESTIONS_BANK["General"], ...QUESTIONS_BANK["DSA"]);
    }
    questions = [...new Set(questions)].slice(0, 10);

    return {
        id: (typeof crypto !== 'undefined' && crypto.randomUUID) ? crypto.randomUUID() : Math.random().toString(36).substring(2, 11),
        createdAt: new Date().toISOString(),
        company,
        role,
        jdText,
        extractedSkills,
        allDetectedSkills: allDetectedSkills.length > 0 ? allDetectedSkills : ["General fresher stack"],
        plan,
        checklist,
        questions,
        readinessScore: score
    };
};

export const saveToHistory = (analysis) => {
    const history = JSON.parse(localStorage.getItem('placement_history') || '[]');
    const newHistory = [analysis, ...history];
    localStorage.setItem('placement_history', JSON.stringify(newHistory));
    return newHistory;
};

export const getHistory = () => {
    return JSON.parse(localStorage.getItem('placement_history') || '[]');
};

export const getAnalysisById = (id) => {
    const history = getHistory();
    return history.find(h => h.id === id);
};
