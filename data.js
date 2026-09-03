/* IS Career Launchpad — shared data
   Figures and question banks are prototype content assembled from general,
   publicly available industry knowledge (BLS occupational data, common
   entry-level postings, and typical internship interview formats). Treat
   the salary ranges as rough U.S. starting points, not guarantees — the
   assignment calls for the team to validate/replace them with numbers
   pulled from Handshake and LinkedIn postings before final submission. */

const CAREERS = [
  { id: 'app-dev', code: 'DEV-01', name: 'Application Developer', industry: 'Software Engineering' },
  { id: 'qa-engineer', code: 'QA-02', name: 'QA / Test Engineer', industry: 'Quality Assurance' },
  { id: 'programmer-analyst', code: 'PA-03', name: 'Programmer / Analyst', industry: 'Enterprise Systems' },
  { id: 'sec-dev', code: 'SEC-04', name: 'Security Software Developer', industry: 'Cybersecurity & Dev' },
  { id: 'bus-systems-analyst', code: 'BA-05', name: 'Business / Systems Analyst', industry: 'Analytics & Strategy' },
  { id: 'it-fin-analyst', code: 'FIN-06', name: 'IT / Financial Analyst', industry: 'Corporate Finance & IT' },
  { id: 'bus-trans-analyst', code: 'BTA-07', name: 'Business Transformation Analyst', industry: 'Change Management' },
  { id: 'data-analyst-sci', code: 'DATA-08', name: 'Data Analyst / Scientist', industry: 'Data Science & BI' },
  { id: 'cyber-analyst', code: 'CYBER-09', name: 'Cybersecurity Analyst', industry: 'Information Security' },
  { id: 'it-pm', code: 'PM-10', name: 'IT Project Manager', industry: 'Management' },
  { id: 'ux-pm', code: 'UX-11', name: 'UX Designer / Product Manager', industry: 'Product & Design' },
  { id: 'erp-consultant', code: 'ERP-12', name: 'ERP / Systems Consultant', industry: 'Consulting & CRM' }
];

const INTERVIEW_BANK = {
  'app-dev': {
    behavioral: [
      {
        q: "Tell me about a time you had to debug a difficult code issue under tight deadlines.",
        strong: "Walk through a real project where code failed. Explain how you systematically isolated the issue using logging or debugging tools, prioritized the fix, and communicated updates to your team.",
        tip: "Focus on structured problem-solving rather than trial-and-error guessing."
      },
      {
        q: "How do you handle receiving critical code review feedback from senior engineers?",
        strong: "Emphasize that you view code reviews as learning opportunities. Give an example where feedback improved performance or security, and mention how you adopted that habit going forward.",
        tip: "Show high coachability and detachment from taking code critiques personally."
      }
    ],
    technical: [
      {
        q: "Explain the difference between REST and SOAP web services, and when you would use REST.",
        strong: "REST is stateless, lightweight, and uses standard HTTP methods with JSON/XML, making it ideal for web and mobile apps. SOAP is a protocol using XML with strict standards and built-in security/ACID compliance, best for enterprise financial systems.",
        tip: "Mention specific HTTP status codes (200, 201, 404, 500) to prove practical familiarity."
      },
      {
        q: "What is object-oriented programming (OOP)? Explain its four core pillars.",
        strong: "OOP designs software around objects containing data and methods. The 4 pillars are Encapsulation (hiding internal states), Abstraction (hiding implementation details), Inheritance (reusing parent class logic), and Polymorphism (overriding methods dynamically).",
        tip: "Provide a quick real-world analogy (e.g., a Vehicle class extended by Car and Truck)."
      }
    ]
  },
  'qa-engineer': {
    behavioral: [
      {
        q: "How do you advocate for quality when developers push to deploy a feature with known minor bugs?",
        strong: "Explain how you assess business impact and risk severity. Highlight how you present objective risk data to product owners rather than refusing to release outright.",
        tip: "Show that you balance release velocity with risk mitigation."
      },
      {
        q: "Describe a situation where a critical bug made it to production. How did you react?",
        strong: "Describe taking ownership immediately without shifting blame, helping isolate the reproduce steps for dev teams, and participating in a blameless post-mortem to update test automation suites.",
        tip: "Focus on preventative process improvements after an incident."
      }
    ],
    technical: [
      {
        q: "What is the difference between functional and non-functional testing? Give examples.",
        strong: "Functional testing checks if the system operates per business specifications (e.g., login success, checkout workflow). Non-functional testing evaluates performance characteristics like speed, security, scalability, and usability under stress.",
        tip: "Mention tools like Selenium or Cypress for functional and JMeter for load testing."
      },
      {
        q: "How do you write an effective bug report?",
        strong: "A strong bug report includes a concise title, environment details, exact step-by-step reproduction steps, expected behavior vs. actual behavior, severity level, and supporting logs or screenshots.",
        tip: "Clarity saves developer time—mention how clear steps reduce back-and-forth messaging."
      }
    ]
  },
  'programmer-analyst': {
    behavioral: [
      {
        q: "Tell me about a time you translated messy user requirements into a technical specification.",
        strong: "Discuss interviewing non-technical business users, identifying missing logic, drafting process flowcharts or mockups, and securing sign-off before writing any code.",
        tip: "Highlight your ability to bridge business jargon and technical code requirements."
      },
      {
        q: "Describe a project where you balanced maintaining legacy code with implementing new features.",
        strong: "Explain how you analyzed existing codebase dependencies, wrote regression tests to ensure nothing broke, and refactored modular pieces iteratively while adding new logic.",
        tip: "Show respect for legacy systems—companies value cautious, systematic maintainers."
      }
    ],
    technical: [
      {
        q: "What is the difference between INNER JOIN, LEFT JOIN, and FULL OUTER JOIN in SQL?",
        strong: "INNER JOIN returns matching records from both tables. LEFT JOIN returns all rows from the left table and matched rows from the right table. FULL OUTER JOIN returns all rows when there is a match in either table.",
        tip: "Mention how NULL values are handled in outer joins."
      },
      {
        q: "What is index optimization in databases and why is it important?",
        strong: "Database indexing creates a lookup structure (like a B-tree) to speed up data retrieval queries without scanning every row in a table. However, too many indexes slow down INSERT/UPDATE operations.",
        tip: "Balance lookup performance gains against write overhead."
      }
    ]
  },
  'sec-dev': {
    behavioral: [
      {
        q: "How do you persuade team members to adopt secure coding practices without slowing down sprint output?",
        strong: "Detail integrating automated SAST/DAST security scanning directly into CI/CD pipelines so security feedback happens automatically during normal dev cycles.",
        tip: "Position security as an automated developer-enablement tool rather than a blocker."
      },
      {
        q: "Describe a security vulnerability you personally identified in code and how you mitigated it.",
        strong: "Walk through finding a vulnerability (e.g., unvalidated user input leading to SQL injection or XSS), patching it using parameterized queries or input sanitization, and adding test cases.",
        tip: "Be explicit about the potential business risk if the flaw were exploited."
      }
    ],
    technical: [
      {
        q: "What is SQL Injection (SQLi) and how do developers prevent it?",
        strong: "SQLi occurs when untrusted user input is directly concatenated into dynamic SQL queries, allowing attackers to execute malicious database commands. It is prevented using Parameterized Queries (Prepared Statements) or ORMs.",
        tip: "Never rely purely on client-side input validation."
      },
      {
        q: "Explain OWASP Top 10 Cross-Site Scripting (XSS) and the difference between Stored and Reflected XSS.",
        strong: "XSS occurs when malicious scripts are injected into trusted web applications. Stored XSS permanently saves the payload in a database, serving it to users later. Reflected XSS reflects the payload immediately off the server request.",
        tip: "Mention context-aware output encoding and Content Security Policy (CSP) headers."
      }
    ]
  },
  'bus-systems-analyst': {
    behavioral: [
      {
        q: "How do you manage conflicting priorities when two executive stakeholders demand opposing features?",
        strong: "Describe gathering objective data on impact, business goals, and implementation cost. Schedule a joint alignment meeting to present options transparently based on ROI.",
        tip: "Frame decision-making around clear data rather than taking sides."
      },
      {
        q: "Give an example of a time a project scope drifted. How did you get it back on track?",
        strong: "Explain setting up a formal change control process, identifying scope creep early, re-evaluating timeline/budget trade-offs, and resetting client expectations transparently.",
        tip: "Demonstrate structured project control and firm communication."
      }
    ],
    technical: [
      {
        q: "Walk me through how you create a Use Case Diagram and User Stories.",
        strong: "User stories follow: 'As a [user], I want [action] so that [benefit]', backed by clear acceptance criteria. Use Case Diagrams identify actors, system boundaries, and interactions to scope functional requirements.",
        tip: "Mention defining INVEST criteria (Independent, Negotiable, Valuable, Estimable, Small, Testable)."
      },
      {
        q: "What techniques do you use to map out 'As-Is' versus 'To-Be' business processes?",
        strong: "Use Business Process Model and Notation (BPMN) swimlane diagrams to visually trace workflows, pinpoint bottlenecks or redundancies in the 'As-Is' state, and optimize logic in the 'To-Be' blueprint.",
        tip: "Focus on identifying measurable process improvements (e.g., step reduction)."
      }
    ]
  },
  'it-fin-analyst': {
    behavioral: [
      {
        q: "Tell me about a time you had to present complex financial-IT performance data to a non-technical manager.",
        strong: "Discuss stripping away unnecessary jargon, using clear visual dashboards (like Power BI/Tableau), focusing on core metrics like ROI and TCO, and framing technical investments around business value.",
        tip: "Keep stories grounded in financial business outcomes."
      },
      {
        q: "Describe a situation where data was incomplete or inaccurate in a budget forecast.",
        strong: "Detail identifying data anomalies, cross-referencing audit logs with department leads, documenting assumptions clearly, and creating sensitivity models to account for data variances.",
        tip: "Highlight thoroughness and risk transparency in reporting."
      }
    ],
    technical: [
      {
        q: "Explain how you calculate Total Cost of Ownership (TCO) for a cloud migration project.",
        strong: "TCO includes direct costs (hardware, cloud infrastructure, licensing), indirect costs (training, downtime, migration labor), and ongoing maintenance/support fees evaluated over a 3-5 year timeline against existing legacy setup.",
        tip: "Mention CapEx (Capital Expenditure) vs. OpEx (Operational Expenditure) operational models."
      },
      {
        q: "How do you build a variance analysis model in Excel or SQL?",
        strong: "Compare Actual spending against Budgeted/Forecasted figures ($ Variance = Actual - Budget, % Variance = Variance / Budget). Use SQL aggregations or Excel pivot tables with conditional logic to flag variances exceeding set tolerances.",
        tip: "Focus on identifying underlying business drivers behind variance spikes."
      }
    ]
  },
  'bus-trans-analyst': {
    behavioral: [
      {
        q: "How do you deal with employee pushback when introducing a new enterprise software platform?",
        strong: "Emphasize empathy and change management frameworks (like ADKAR). Explain conducting stakeholder impact assessments, involving end-users early in testing, and highlighting 'what's in it for them.'",
        tip: "Focus on human factors and user adoption strategies."
      },
      {
        q: "Describe a time when a business transformation process failed to meet target KPIs.",
        strong: "Share an honest evaluation of what went wrong, how feedback loops identified adoption gaps, and the pivot actions implemented (such as targeted re-training or process adjustment).",
        tip: "Show resilience, adaptability, and accountability."
      }
    ],
    technical: [
      {
        q: "What change management frameworks are you familiar with, and how are they applied?",
        strong: "Mention models like Kotter's 8-Step Model or ADKAR (Awareness, Desire, Knowledge, Ability, Reinforcement) to structure communication, executive sponsorship, training plans, and post-implementation reviews.",
        tip: "Tie framework steps to practical enterprise deployment tactics."
      },
      {
        q: "How do you define and measure process transformation KPIs?",
        strong: "Define baseline metrics prior to change, then track operational metrics post-launch like cycle time reduction, adoption rate, error rates, cost-per-transaction, and user satisfaction metrics (CSAT/NPS).",
        tip: "Ensure your answer bridges technical performance with operational metrics."
      }
    ]
  },
  'data-analyst-sci': {
    behavioral: [
      {
        q: "Describe a data project where your final analysis led to an unexpected business insight.",
        strong: "Walk through the problem statement, data exploration, surprising pattern discovery, validation checks, and how you communicated the strategic recommendation to decision-makers.",
        tip: "Focus on business value generated from raw data insights."
      },
      {
        q: "How do you explain statistical model assumptions to business stakeholders who lack data science backgrounds?",
        strong: "Use clear analogies, focus on decision boundary implications and confidence levels rather than formulas, and visualize results cleanly using charts.",
        tip: "Prioritize executive readability over mathematical jargon."
      }
    ],
    technical: [
      {
        q: "Explain the difference between Supervised and Unsupervised Machine Learning.",
        strong: "Supervised learning uses labeled training data to learn mapping functions (e.g., classification, regression). Unsupervised learning works with unlabeled data to discover hidden patterns or groupings (e.g., clustering, principal component analysis).",
        tip: "Give concrete examples like predicting house prices (Supervised) vs. customer segmentation (Unsupervised)."
      },
      {
        q: "What is data normalization vs. standardization, and why is preprocessing essential?",
        strong: "Normalization rescales features to a [0, 1] range (useful when distributions aren't Gaussian). Standardization rescales data to have a mean of 0 and standard deviation of 1. Both prevent high-magnitude features from dominating machine learning models.",
        tip: "Mention models sensitive to feature scales like KNN, SVM, or gradient descent methods."
      }
    ]
  },
  'cyber-analyst': {
    behavioral: [
      {
        q: "Describe how you prioritize multiple security alerts during a high-volume incident shift.",
        strong: "Explain using a risk matrix based on asset critical value and severity rating. Leverage SIEM prioritization rules to isolate false positives and investigate critical infrastructure threats first.",
        tip: "Demonstrate calm triage principles under pressure."
      },
      {
        q: "How do you convey urgency to an employee who repeatedly violates security policies?",
        strong: "Approach the situation constructively to understand workflow blockers. Explain the exact risks involved and escalate through proper managerial channels if policy non-compliance continues.",
        tip: "Balance educational coaching with firm compliance enforcement."
      }
    ],
    technical: [
      {
        q: "Walk through the steps of the Incident Response Lifecycle.",
        strong: "According to NIST/SANS: 1. Preparation, 2. Detection and Analysis, 3. Containment, Eradication, and Recovery, 4. Post-Incident Activity (Lessons Learned).",
        tip: "Memorize standard frameworks (NIST SP 800-61) for entry-level security roles."
      },
      {
        q: "Explain the CIA Triad in Cybersecurity with examples.",
        strong: "Confidentiality (ensuring data access is restricted to authorized users via encryption/RBAC), Integrity (guaranteeing data is accurate and untampered via hashing), and Availability (ensuring systems remain accessible via redundancy/DDoS mitigation).",
        tip: "Relate each concept directly to standard technical controls."
      }
    ]
  },
  'it-pm': {
    behavioral: [
      {
        q: "How do you keep an IT project team motivated when deadlines are tight and budget is restricted?",
        strong: "Maintain transparent communication, protect developers from context switching, celebrate incremental milestones, and focus on removing sprint blockers.",
        tip: "Demonstrate servant leadership and clear scope management."
      },
      {
        q: "Describe a project where a key technical vendor missed a major deliverable deadline.",
        strong: "Explain assessing project float/slack, applying mitigation strategies (re-sequencing tasks), communicating impact to stakeholders early, and conducting vendor accountability discussions.",
        tip: "Focus on proactive risk mitigation rather than blaming external partners."
      }
    ],
    technical: [
      {
        q: "What are the main differences between Waterfall and Agile project management methodologies?",
        strong: "Waterfall is sequential, linear, and heavily planned upfront—best for fixed-scope hardware/infrastructure deployments. Agile is iterative, flexible, and delivers incremental working software in short sprints (1-4 weeks).",
        tip: "Highlight when you would choose one over the other based on requirements clarity."
      },
      {
        q: "How do you calculate Critical Path in project management and why is it important?",
        strong: "The Critical Path is the longest sequence of dependent tasks that determines the total minimum duration of the project. Tasks on this path have zero float/slack, meaning any delay directly delays project completion.",
        tip: "Mention dependencies (Finish-to-Start) and buffer management."
      }
    ]
  },
  'ux-pm': {
    behavioral: [
      {
        q: "How do you balance user needs with technical feasibility and business constraints?",
        strong: "Detail collaborating with engineering and business stakeholders early. Prioritize features using impact-versus-effort matrices to deliver scalable Minimum Viable Products (MVPs).",
        tip: "Show you can balance user advocacy with commercial outcomes."
      },
      {
        q: "Tell me about a time usability testing completely invalidated your initial feature design.",
        strong: "Embrace the discovery positively. Share how observing user friction led to rapid iterative wireframing, updated prototypes, and an improved final metric lift.",
        tip: "Show ego-free, user-validated decision-making."
      }
    ],
    technical: [
      {
        q: "What is the difference between Low-Fidelity and High-Fidelity prototypes, and when do you use each?",
        strong: "Low-fidelity (sketches, wireframes) tests structural layout and information architecture quickly with low effort. High-fidelity (Figma prototypes with interaction micro-animations) tests UI design polish and realistic user interactions.",
        tip: "Emphasize rapid iteration speed during early project phases."
      },
      {
        q: "Explain how you define and validate a Minimum Viable Product (MVP).",
        strong: "An MVP includes just enough core features to solve a key problem for early adopters and gather validated learning. It is validated via user telemetry, feedback loops, retention rates, and conversion metrics.",
        tip: "Avoid defining MVP as 'incomplete software'—it must be functional and valuable."
      }
    ]
  },
  'erp-consultant': {
    behavioral: [
      {
        q: "How do you manage client expectations when a requested ERP customization threatens long-term platform upgradeability?",
        strong: "Explain guiding clients toward out-of-the-box standard functionality first. Outline total cost of ownership implications and propose configuration or extension patterns instead of hardcoded customizations.",
        tip: "Position yourself as a trusted advisor committed to long-term client success."
      },
      {
        q: "Tell me about a complex enterprise implementation where you encountered tight client deadlines.",
        strong: "Discuss prioritizing core phase 1 modules (go-live essential features), deferring non-essential enhancements to phase 2, and maintaining clear status dashboards for executive sponsors.",
        tip: "Demonstrate clear scope prioritization during enterprise platform deployments."
      }
    ],
    technical: [
      {
        q: "What is the difference between ERP Configuration and ERP Customization?",
        strong: "Configuration tailors standard platform behavior using built-in switches, parameters, and business rules without altering core source code. Customization involves writing bespoke code/objects, which increases long-term upgrade complexity.",
        tip: "Explain why consultants always prefer 'configuration over customization'."
      },
      {
        q: "How do you approach Data Migration during an enterprise ERP implementation?",
        strong: "Follow structured steps: Data Extract from legacy systems, Data Cleansing/Deduplication, Field Mapping to target schema, Loading into test environments, and Reconciling/Auditing data integrity before cutover.",
        tip: "Emphasize data validation and dry-run execution steps."
      }
    ]
  }
};
