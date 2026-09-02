/* IS Career Launchpad — shared data
   Figures and question banks are prototype content assembled from general,
   publicly available industry knowledge (BLS occupational data, common
   entry-level postings, and typical internship interview formats). Treat
   the salary ranges as rough U.S. starting points, not guarantees — the
   assignment calls for the team to validate/replace them with numbers
   pulled from Handshake and LinkedIn postings before final submission. */

const CAREERS = [
  {
    id: "swe",
    code: "DEV-114",
    gate: "A1",
    name: "Software / Application Developer",
    industry: "Tech & Product",
    blurb: "Builds and maintains the applications, websites, and internal tools a company runs on.",
    dayToDay: [
      "Writes, tests, and debugs code inside a small team, usually working from tickets in a backlog",
      "Joins a daily stand-up to report progress and flag blockers",
      "Reviews teammates' code (\"pull requests\") and responds to review comments on their own",
      "Fixes bugs reported by QA or customers and ships small releases regularly"
    ],
    skills: [
      "At least one language used at the company (commonly Java, Python, JavaScript, or C#)",
      "Git/GitHub for version control",
      "Basic SQL for reading and writing to a database",
      "Comfort with a framework (React, Spring, .NET, etc.) picked up on the job"
    ],
    expectations: [
      "Can explain the logic in code they wrote, not just that it \"works\"",
      "Has built at least one project outside of class (even a small one) and can talk through the decisions",
      "Understands basic data structures (arrays, hash maps) and can reason about why one might be faster than another",
      "Knows how to look something up and read documentation instead of guessing"
    ],
    salary: "$65k–$95k base for new-grad/internship-track roles",
    strongCandidate: [
      "Shows a GitHub profile or personal project instead of only describing coursework",
      "Can walk through their own code line by line when asked",
      "Asks clarifying questions before jumping to a solution",
      "Is honest about what they don't know yet and how they'd find out"
    ]
  },
  {
    id: "ba",
    code: "BSA-207",
    gate: "A2",
    name: "Business / Systems Analyst",
    industry: "Business Technology",
    blurb: "Sits between the business side and the tech team, turning a problem or need into requirements a developer can build.",
    dayToDay: [
      "Interviews stakeholders to understand a process or pain point",
      "Writes requirements documents, user stories, or process maps",
      "Runs or joins meetings that connect business teams with IT/dev teams",
      "Tests a finished feature against the original requirement before it ships"
    ],
    skills: [
      "Process mapping (flowcharts, swimlane diagrams)",
      "Requirements-writing (user stories, acceptance criteria)",
      "Basic SQL and comfort reading a data model",
      "Excel/PowerPoint for analysis and stakeholder communication"
    ],
    expectations: [
      "Can summarize a messy problem into a clear, one-paragraph requirement",
      "Is comfortable asking a lot of \"why\" questions in a room full of stakeholders",
      "Understands the difference between what a stakeholder asks for and what they actually need",
      "Has practiced translating a business need into something concrete a developer could act on"
    ],
    salary: "$60k–$80k base for entry-level/internship-track roles",
    strongCandidate: [
      "Tells a specific story about resolving a disagreement between two stakeholders",
      "Can produce a simple requirements doc or user story on the spot",
      "Listens more than they talk in the interview itself",
      "Shows curiosity about how a business actually makes money, not just the tech"
    ]
  },
  {
    id: "da",
    code: "DAT-330",
    gate: "B1",
    name: "Data Analyst",
    industry: "Analytics & Insights",
    blurb: "Turns raw data into numbers and visuals that help a team make a decision.",
    dayToDay: [
      "Pulls data with SQL and cleans it up in Excel, Python, or a BI tool",
      "Builds and maintains dashboards (Tableau, Power BI, Looker)",
      "Presents findings to a non-technical audience and answers follow-up questions",
      "Partners with a business team to define what to measure in the first place"
    ],
    skills: [
      "SQL (this is the one nearly every posting requires)",
      "A BI tool: Tableau, Power BI, or Looker",
      "Excel, including pivot tables and lookups",
      "Basic statistics — enough to know when a result is meaningful vs. noise"
    ],
    expectations: [
      "Can write a SQL query with a join and a group-by without help",
      "Understands the difference between correlation and causation and can explain it simply",
      "Has built at least one dashboard, even a personal or class project",
      "Can explain a chart's takeaway in one sentence before diving into methodology"
    ],
    salary: "$60k–$80k base for entry-level roles",
    strongCandidate: [
      "Leads with the business question, not the tool, when describing a project",
      "Can sketch how they'd structure a query before writing it",
      "Pushes back (politely) on a request for a metric that wouldn't actually answer the question",
      "Shows one dashboard or analysis end-to-end: question, data, method, takeaway"
    ]
  },
  {
    id: "sec",
    code: "SEC-451",
    gate: "B2",
    name: "Cybersecurity Analyst",
    industry: "Security & Risk",
    blurb: "Watches for, investigates, and helps prevent threats to a company's systems and data.",
    dayToDay: [
      "Monitors alerts from security tools and triages which ones are real",
      "Investigates suspicious activity and documents findings",
      "Runs or supports vulnerability scans and patches",
      "Helps train other employees on phishing and security hygiene"
    ],
    skills: [
      "Networking fundamentals (how traffic actually moves — ports, DNS, firewalls)",
      "Familiarity with a SIEM tool (Splunk is the common one to know by name)",
      "Basic scripting (Python or PowerShell) for automating repetitive checks",
      "An entry certification is a common signal: Security+ is the most requested"
    ],
    expectations: [
      "Can explain a basic attack (phishing, SQL injection) in plain language",
      "Understands the CIA triad (confidentiality, integrity, availability) and can apply it to an example",
      "Thinks in terms of risk and trade-offs, not just \"lock everything down\"",
      "Is comfortable with ambiguity — most incidents don't have a clean textbook answer"
    ],
    salary: "$65k–$90k base for entry-level roles",
    strongCandidate: [
      "Has a home lab, CTF (capture-the-flag) experience, or a cert in progress",
      "Can describe a security incident (real or hypothetical) and walk through how they'd respond",
      "Shows they stay current — mentions a recent breach or vulnerability they read about",
      "Communicates a technical risk in terms a non-technical manager would understand"
    ]
  },
  {
    id: "pm",
    code: "PMO-512",
    gate: "C1",
    name: "IT Project Manager",
    industry: "Delivery & Operations",
    blurb: "Keeps a technology project on schedule, on budget, and aligned across every team touching it.",
    dayToDay: [
      "Builds and maintains a project timeline and tracks who owns what",
      "Runs status meetings and removes blockers for the team",
      "Manages a project's risk log and escalates issues before they become fires",
      "Reports progress up to sponsors/leadership in plain terms"
    ],
    skills: [
      "A PM tool: Jira, Asana, Smartsheet, or MS Project",
      "Agile/Scrum basics (sprints, backlogs, retrospectives)",
      "Budget and timeline tracking",
      "Strong written communication — status updates are a daily deliverable"
    ],
    expectations: [
      "Can describe the difference between Agile and Waterfall and when each fits",
      "Has led something — a club, a group project, a work shift — even without the title \"manager\"",
      "Can talk through how they'd handle a missed deadline without pointing fingers",
      "Is organized by habit, not just when it's graded"
    ],
    salary: "$58k–$78k base for entry-level/coordinator-track roles (often titled Associate PM or PM Coordinator at first)",
    strongCandidate: [
      "Tells a specific story about keeping a group project on track despite a setback",
      "Talks about people and process, not just tools",
      "Shows they can say no or push back on scope creep diplomatically",
      "Demonstrates calm under a tight deadline rather than just claiming to be \"organized\""
    ]
  },
  {
    id: "erp",
    code: "ERP-618",
    gate: "C2",
    name: "ERP / Systems Consultant",
    industry: "Enterprise Consulting",
    blurb: "Configures large platforms like Salesforce or SAP so they actually fit how a client's business works.",
    dayToDay: [
      "Meets with a client to understand their current process",
      "Configures (not usually codes from scratch) a platform to match that process",
      "Tests the configuration and trains the client's employees to use it",
      "Travels or works across multiple client projects depending on the firm"
    ],
    skills: [
      "Deep familiarity with one platform — Salesforce is the most common starting point for new grads",
      "Comfort with declarative configuration (workflows, fields, automation) more than raw code",
      "Client-facing communication and presentation skills",
      "Basic project and change-management awareness, since you're asking people to change how they work"
    ],
    expectations: [
      "Has a Salesforce Trailhead badge/certification or equivalent hands-on platform experience",
      "Can explain a business process (like a sales pipeline) and how a system would support it",
      "Is comfortable presenting to a room and taking pushback well",
      "Understands that the best technical answer isn't useful if the client won't adopt it"
    ],
    salary: "$65k–$90k base for entry-level consultant roles, often plus travel",
    strongCandidate: [
      "Has a Trailhead profile, badges, or a mock Salesforce build to show",
      "Can describe a time they had to get buy-in from someone who didn't want to change",
      "Balances \"what's technically possible\" with \"what the client will actually use\"",
      "Is comfortable with client-facing pressure — a demo day, a presentation, a Q&A"
    ]
  }
];

/* Compatibility test — each question maps chosen options to career ids.
   Every option contributes 1 point to each id listed. */
const QUIZ_QUESTIONS = [
  {
    q: "Which part of a group project do you gravitate toward?",
    options: [
      { label: "Actually building the thing", ids: ["swe"] },
      { label: "Figuring out what everyone actually needs before we build anything", ids: ["ba"] },
      { label: "Digging into whatever numbers we have", ids: ["da"] },
      { label: "Asking \"what could go wrong here?\"", ids: ["sec"] },
      { label: "Keeping the timeline and the team on track", ids: ["pm"] },
      { label: "Setting up whatever tool or software we're using", ids: ["erp"] }
    ]
  },
  {
    q: "Pick a Saturday project you'd actually enjoy.",
    options: [
      { label: "Building a small personal app or website", ids: ["swe"] },
      { label: "Interviewing friends about a problem, then proposing a fix", ids: ["ba"] },
      { label: "Building a budget spreadsheet with real formulas", ids: ["da"] },
      { label: "Reading up on a recent data breach", ids: ["sec"] },
      { label: "Organizing a messy shared calendar for a group", ids: ["pm"] },
      { label: "Setting up a new tool or app for a club you're in", ids: ["erp"] }
    ]
  },
  {
    q: "What originally pulled you toward IS?",
    options: [
      { label: "I like writing code", ids: ["swe"] },
      { label: "I like business strategy and how companies actually work", ids: ["ba"] },
      { label: "I like statistics and finding patterns", ids: ["da"] },
      { label: "I like puzzles and finding weaknesses before someone else does", ids: ["sec"] },
      { label: "I like leading and organizing people", ids: ["pm"] },
      { label: "I like making off-the-shelf software actually work well", ids: ["erp"] }
    ]
  },
  {
    q: "How do you want most of your workday to feel?",
    options: [
      { label: "Heads-down, focused, solving one problem at a time", ids: ["swe", "da"] },
      { label: "Full of conversations with stakeholders and teammates", ids: ["ba", "pm"] },
      { label: "Watching for something before it becomes a problem", ids: ["sec"] },
      { label: "A mix of client meetings and hands-on configuration", ids: ["erp"] }
    ]
  },
  {
    q: "Which outcome would satisfy you most?",
    options: [
      { label: "A measurable KPI or dashboard that changes a decision", ids: ["da"] },
      { label: "A bad outcome that never happened because you caught it early", ids: ["sec"] },
      { label: "A project that shipped on time because you kept it organized", ids: ["pm"] },
      { label: "A business need turned into clear, buildable requirements", ids: ["ba"] },
      { label: "Something you built from nothing, now running in production", ids: ["swe"] },
      { label: "A platform a client's team actually adopted and likes using", ids: ["erp"] }
    ]
  },
  {
    q: "Pick your ideal first project on the job.",
    options: [
      { label: "Build a feature for an existing app", ids: ["swe"] },
      { label: "Write a report recommending a process improvement", ids: ["ba"] },
      { label: "Build a dashboard from a messy raw dataset", ids: ["da"] },
      { label: "Run a phishing simulation and report the results", ids: ["sec"] },
      { label: "Create a timeline and manage a small team through it", ids: ["pm"] },
      { label: "Configure a CRM workflow for a sales team", ids: ["erp"] }
    ]
  },
  {
    q: "Which tool would you most want to get really good at?",
    options: [
      { label: "A programming language", ids: ["swe"] },
      { label: "SQL, Excel, and a BI tool like Tableau", ids: ["da"] },
      { label: "A requirements/process-mapping framework", ids: ["ba"] },
      { label: "A security tool like Splunk, or a cert like Security+", ids: ["sec"] },
      { label: "A PM tool like Jira or Asana", ids: ["pm"] },
      { label: "Salesforce or SAP", ids: ["erp"] }
    ]
  },
  {
    q: "When something goes wrong, what's your instinct?",
    options: [
      { label: "Find the bug and fix it", ids: ["swe"] },
      { label: "Figure out who's affected and manage the fallout", ids: ["pm"] },
      { label: "Investigate what happened and whether it'll happen again", ids: ["sec"] },
      { label: "Check the data to see how big the problem actually is", ids: ["da"] },
      { label: "Ask the people involved what they actually needed in the first place", ids: ["ba"] },
      { label: "Check whether the system was configured the way it should've been", ids: ["erp"] }
    ]
  }
];

/* Interview prep — behavioral + technical questions per career, each with
   a short model answer and a coaching tip. */
const INTERVIEW_BANK = {
  swe: {
    behavioral: [
      {
        q: "Tell me about a bug you had a hard time finding. How did you track it down?",
        strong: "Name a specific bug, the tool you used to isolate it (print statements, a debugger, checking logs), and the root cause once found. End with what you changed afterward — a test you added, a habit you picked up — so the answer shows growth, not just a war story.",
        tip: "Interviewers are listening for your debugging process more than the bug itself."
      },
      {
        q: "Describe a time you disagreed with a teammate about how to build something.",
        strong: "Briefly describe both approaches, how you resolved it (a quick prototype, a senior dev's input, a compromise), and the actual outcome. Avoid making either side sound wrong — show you can disagree productively.",
        tip: "Avoid trashing the other approach — show you can weigh trade-offs, not just win arguments."
      }
    ],
    technical: [
      {
        q: "Walk me through how you'd reverse a string (or similar simple algorithm) without using a built-in function.",
        strong: "Talk out loud: loop from the end to the start, build a new string or swap in place, and state the time/space complexity (O(n) time, O(1) or O(n) space depending on approach) before or after coding it.",
        tip: "Narrate your thinking — silence is scarier to an interviewer than a wrong first idea."
      },
      {
        q: "What's the difference between a list/array and a hash map, and when would you use each?",
        strong: "Arrays are ordered and great for indexed access; hash maps trade order for near-constant-time lookups by key. Use an array when order matters or you need every item; use a hash map when you need fast lookups by a unique key.",
        tip: "Ground your answer in a concrete example, like looking up a user by ID vs. iterating a list in order."
      },
      {
        q: "How do you approach testing your own code before you consider it done?",
        strong: "Mention checking normal cases, edge cases (empty input, huge input, unexpected types), and — if applicable — writing an actual unit test rather than just eyeballing the output.",
        tip: "New grads who mention edge cases unprompted stand out immediately."
      }
    ]
  },
  ba: {
    behavioral: [
      {
        q: "Tell me about a time you had to understand a problem that two people described differently.",
        strong: "Describe how you asked follow-up questions to each person separately, found the actual overlap in what they needed, and wrote it down in a way both agreed on.",
        tip: "The skill being tested is reconciling conflicting requirements, not picking a winner."
      },
      {
        q: "Describe a time you had to explain something technical to someone non-technical.",
        strong: "Pick a real example, describe the analogy or simplification you used, and mention how you checked they actually understood (asked them to repeat it back, watched for confusion).",
        tip: "Checking for understanding at the end is what separates a good answer from a generic one."
      }
    ],
    technical: [
      {
        q: "What's the difference between a business requirement and a technical requirement?",
        strong: "A business requirement describes the outcome the business needs (\"reduce checkout time\"); a technical requirement describes how a system will deliver it (\"cache the shipping calculator API response\"). Analysts translate the first into the second.",
        tip: "Use a concrete before/after example instead of just defining the terms."
      },
      {
        q: "How would you write a user story for a new login feature?",
        strong: "Use the format: \"As a [user], I want [goal], so that [benefit].\" Add 2–3 acceptance criteria — specific, testable conditions like \"user sees an error if the password is wrong\" — so a developer knows when it's done.",
        tip: "Acceptance criteria are what separates a real user story from a vague wish."
      },
      {
        q: "You're given a basic SQL table of customer orders. How would you find the top 5 customers by total spend?",
        strong: "GROUP BY customer, SUM the order total, ORDER BY that sum DESC, and LIMIT 5. Mention you'd double check for duplicate or canceled orders skewing the total.",
        tip: "Even a rough SQL sketch on a whiteboard shows more than saying \"I'd write a query for that.\""
      }
    ]
  },
  da: {
    behavioral: [
      {
        q: "Tell me about an analysis where the data didn't say what you expected.",
        strong: "Describe the original hypothesis, what the data actually showed, and how you double-checked it wasn't a data quality issue before presenting the surprising result.",
        tip: "Showing you verify surprising results before reporting them builds credibility fast."
      },
      {
        q: "Describe a time you had to present a finding to someone who didn't want to hear it.",
        strong: "Focus on how you led with the data, stayed neutral in tone, and offered a next step rather than just delivering bad news.",
        tip: "Calm, data-first delivery is the skill being tested here, not persuasion tactics."
      }
    ],
    technical: [
      {
        q: "Write a SQL query to find the average order value by month for the last year.",
        strong: "Group by a truncated/formatted date (month), average the order total, and filter the date range with a WHERE clause. Mention handling months with no orders if that matters for the use case.",
        tip: "Talk through GROUP BY and date functions out loud even if the exact syntax varies by database."
      },
      {
        q: "How would you explain the difference between correlation and causation to a manager?",
        strong: "Give a simple example — ice cream sales and drowning both rise in summer, but one doesn't cause the other; heat causes both. Then connect it back to why a business shouldn't act on correlation alone.",
        tip: "A concrete, everyday example lands better than a textbook definition."
      },
      {
        q: "What would you check before trusting a dashboard number that looks off?",
        strong: "Check the underlying query/filters, whether the date range matches what's expected, whether duplicate records are being counted, and whether the data source refreshed correctly.",
        tip: "This question is really asking whether you sanity-check data before presenting it."
      }
    ]
  },
  sec: {
    behavioral: [
      {
        q: "Tell me about a time you had to follow a process carefully even though it felt slow.",
        strong: "Describe the process, why it existed (usually risk reduction), and how you handled the tension between speed and following it correctly — without skipping steps.",
        tip: "Security teams value people who respect process even when no one's watching."
      },
      {
        q: "Describe a time you noticed something seemed off, even if you weren't sure it was a real problem.",
        strong: "Explain what you noticed, how you investigated before raising an alarm, and who you told and why. It's fine if it turned out to be a false alarm — the instinct to check is the point.",
        tip: "Show good judgment about when to escalate, not just vigilance."
      }
    ],
    technical: [
      {
        q: "What is phishing, and what makes some phishing emails more convincing than others?",
        strong: "Phishing is a fraudulent message designed to trick someone into giving up credentials or clicking something malicious. Convincing versions use urgency, a spoofed sender that looks legitimate, and context specific to the target (spear phishing).",
        tip: "Mention a real-world red flag you'd personally look for — it shows practical awareness."
      },
      {
        q: "Explain the CIA triad and give an example of each.",
        strong: "Confidentiality (only authorized people can see data — encryption), Integrity (data isn't altered improperly — checksums, access controls), Availability (systems stay up when needed — backups, redundancy). One clear example per pillar is enough.",
        tip: "This is one of the most commonly asked entry-level security questions — know it cold."
      },
      {
        q: "Walk me through what you'd do if you saw unusual login activity from a foreign country on an employee account.",
        strong: "Confirm whether the employee is actually traveling, check for other suspicious signs (failed logins, unusual access patterns), and if it looks malicious, lock the account and escalate per the incident response process rather than trying to fix it solo.",
        tip: "Show that you'd follow an incident response process, not freelance a fix."
      }
    ]
  },
  pm: {
    behavioral: [
      {
        q: "Tell me about a project that started falling behind schedule. What did you do?",
        strong: "Describe how you identified the slippage early, what trade-off you proposed (scope, timeline, or resources), and how you communicated the change to stakeholders honestly instead of hiding it.",
        tip: "PMs are judged on how early they surface problems, not on never having any."
      },
      {
        q: "Describe a time you had to get buy-in from someone who didn't agree with your plan.",
        strong: "Explain their concern, how you addressed it (data, compromise, a smaller pilot), and the outcome. Show you listened to the objection instead of just pushing through.",
        tip: "Naming the other person's real concern, specifically, makes this answer far more credible."
      }
    ],
    technical: [
      {
        q: "What's the difference between Agile and Waterfall, and when would you choose each?",
        strong: "Waterfall plans the whole project up front and executes in sequence — good for fixed, well-understood requirements. Agile works in short iterations and adapts as you learn — good when requirements will likely change.",
        tip: "Give one real or hypothetical project where each approach would clearly fit better."
      },
      {
        q: "How would you build a project timeline for a project with three teams and a hard deadline?",
        strong: "Start from the deadline and work backward, identify dependencies between teams, build in buffer for the riskiest tasks, and set checkpoints to catch slippage early rather than at the end.",
        tip: "Mentioning dependencies and buffer time shows real planning instinct, not just listing tasks."
      },
      {
        q: "A stakeholder asks you to add a feature mid-project that wasn't in the original scope. What do you do?",
        strong: "Acknowledge the request, assess the impact on timeline/budget, and bring options back to the stakeholder (add it and push the deadline, swap it for something else, or defer it) rather than saying yes or no on the spot.",
        tip: "The right answer is a process for handling scope creep, not a flat yes or no."
      }
    ]
  },
  erp: {
    behavioral: [
      {
        q: "Tell me about a time you had to get someone to change how they normally do something.",
        strong: "Describe their resistance, how you addressed it (showing the benefit in their terms, a small pilot, training), and the actual result. Change management is the real skill being tested.",
        tip: "This question is common because adoption, not configuration, is the hardest part of the job."
      },
      {
        q: "Describe a time you had to learn a new tool or system quickly.",
        strong: "Name the tool, how you learned it (documentation, a course, trial and error), and how fast you got to a usable level. Mention a concrete thing you built or fixed with it.",
        tip: "Concrete proof (a badge, a project, a working config) beats a general claim of being a fast learner."
      }
    ],
    technical: [
      {
        q: "What's the difference between configuration and custom code in a platform like Salesforce?",
        strong: "Configuration uses built-in, no-code/low-code tools (fields, flows, automation) to change behavior; custom code (like Apex) is used when the platform's built-in tools can't do what's needed. Consultants prefer configuration first because it's easier to maintain.",
        tip: "Saying \"configuration first, code only when necessary\" signals good platform judgment."
      },
      {
        q: "A client wants a sales process automated, but their current process is inconsistent across reps. What do you do first?",
        strong: "Document and standardize the actual process with the client before automating it — automating an inconsistent process just makes the inconsistency faster and harder to fix.",
        tip: "This tests whether you'll automate blindly or fix the process first — always fix first."
      },
      {
        q: "How would you explain to a client why their new system needs their team to change habits, not just install software?",
        strong: "Explain that software reflects a process, so if the underlying process doesn't change, the system won't deliver the improvement they're hoping for — adoption and training matter as much as the configuration itself.",
        tip: "This is really a change-management question wearing a technical costume."
      }
    ]
  }
};
