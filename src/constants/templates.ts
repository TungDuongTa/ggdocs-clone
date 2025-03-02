export const templates = [
  {
    id: "blank",
    label: "Blank Document",
    imageURL: "/blank-document.svg",
    initialContent: ``,
  },
  {
    id: "software-proposal",
    label: "Software Development Proposal",
    imageURL: "/software-proposal.svg",
    initialContent: `
      <h1>Software Development Proposal</h1>
      <p><strong>Prepared for:</strong> [Client Name]</p>
      <p><strong>Prepared by:</strong> [Your Name or Company]</p>
      <h2>Project Overview</h2>
      <p>[Brief description of the project and objectives]</p>
      <h2>Scope of Work</h2>
      <p>[List the key features and functionalities to be included]</p>
      <h2>Timeline</h2>
      <p>[Estimated project duration and milestones]</p>
      <h2>Budget</h2>
      <p>[Proposed cost breakdown]</p>
      <h2>Conclusion</h2>
      <p>[Final remarks and next steps]</p>
    `,
  },
  {
    id: "project-proposal",
    label: "Project Proposal",
    imageURL: "/project-proposal.svg",
    initialContent: `
      <h1>Project Proposal</h1>
      <p><strong>Project Name:</strong> [Project Title]</p>
      <p><strong>Prepared by:</strong> [Your Name]</p>
      <h2>Introduction</h2>
      <p>[Brief background and purpose of the project]</p>
      <h2>Objectives</h2>
      <p>[Clear goals the project aims to achieve]</p>
      <h2>Methodology</h2>
      <p>[Approach, tools, and techniques to be used]</p>
      <h2>Expected Outcomes</h2>
      <p>[What success looks like for the project]</p>
      <h2>Budget & Resources</h2>
      <p>[Projected costs and required resources]</p>
    `,
  },
  {
    id: "business-letter",
    label: "Business Letter",
    imageURL: "/business-letter.svg",
    initialContent: `
      <p>[Your Name]</p>
      <p>[Your Address]</p>
      <p>[City, State, ZIP Code]</p>
      <p>[Email | Phone Number]</p>
      <p>[Date]</p>
      <p><strong>Recipient Name</strong></p>
      <p>[Company Name]</p>
      <p>[Recipient Address]</p>
      <p>Dear [Recipient Name],</p>
      <p>[Opening paragraph stating the purpose of the letter]</p>
      <p>[Main content with key details]</p>
      <p>[Closing remarks and call to action]</p>
      <p>Sincerely,</p>
      <p>[Your Name]</p>
    `,
  },
  {
    id: "resume",
    label: "Resume",
    imageURL: "/resume.svg",
    initialContent: `
      <h1>[Your Name]</h1>
      <p>[Your Email] | [Your Phone] | [LinkedIn]</p>
      <h2>Summary</h2>
      <p>[Brief professional summary highlighting your skills and experience]</p>
      <h2>Experience</h2>
      <p><strong>[Job Title]</strong> – [Company Name] (Dates of Employment)</p>
      <p>[Key responsibilities and achievements]</p>
      <h2>Education</h2>
      <p><strong>[Degree]</strong> – [University Name] (Graduation Year)</p>
      <h2>Skills</h2>
      <ul>
        <li>[Skill 1]</li>
        <li>[Skill 2]</li>
        <li>[Skill 3]</li>
      </ul>
      <h2>Certifications</h2>
      <p>[Relevant Certifications]</p>
    `,
  },
  {
    id: "cover-letter",
    label: "Cover Letter",
    imageURL: "/cover-letter.svg",
    initialContent: `
      <p>[Your Name]</p>
      <p>[Your Address]</p>
      <p>[City, State, ZIP Code]</p>
      <p>[Email | Phone Number]</p>
      <p>[Date]</p>
      <p><strong>Hiring Manager's Name</strong></p>
      <p>[Company Name]</p>
      <p>[Company Address]</p>
      <p>Dear [Hiring Manager's Name],</p>
      <p>I am excited to apply for the [Job Title] position at [Company Name]. With my background in [Your Field], I am confident that I can bring value to your team.</p>
      <p>[Brief mention of relevant skills, experience, and achievements]</p>
      <p>[Closing paragraph with enthusiasm for the role and request for an interview]</p>
      <p>Sincerely,</p>
      <p>[Your Name]</p>
    `,
  },
  {
    id: "letter",
    label: "Letter",
    imageURL: "/letter.svg",
    initialContent: `
      <p>[Your Name]</p>
      <p>[Your Address]</p>
      <p>[City, State, ZIP Code]</p>
      <p>[Email | Phone Number]</p>
      <p>[Date]</p>
      <p><strong>Recipient Name</strong></p>
      <p>[Recipient Address]</p>
      <p>Dear [Recipient Name],</p>
      <p>[Body of the letter with details you want to communicate]</p>
      <p>Sincerely,</p>
      <p>[Your Name]</p>
    `,
  },
];
