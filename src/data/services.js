// Service pages. Copy for FPO, project reports and startups is carried over from the previous site.
// Government schemes copy is the new page drafted in this project ("My Site" placeholder replaced).

export const services = [
  {
    slug: 'project-reports',
    name: 'Business Plans & DPRs',
    short: 'Business plan, project report and Detailed Project Report (DPR).',
    tagline: 'Business Plan | Project Report | Detailed Project Report',
    intro:
      'Here is a look at what we prepare, and the sectors and industries we have had experience in planning, consulting and implementing.',
    sections: [
      {
        h: 'Business Plan',
        p: [
          'As a representation of the company, a business plan conveys the business’s identity and direction to stakeholders, including investors, lenders, partners, and employees. It articulates the company’s mission and values, showcasing how it plans to meet market needs and stand out from competitors.',
          'It also provides a roadmap for the company’s activities, helping to align the team with strategic goals and measure progress over time.',
        ],
      },
      {
        h: 'Project Report',
        p: [
          'By incorporating current financial data, a project report offers a forecasted analysis of the project’s impact on the company’s financial health. This includes projections of costs, revenues, and potential return on investment (ROI).',
          'The report analyses how the project’s implementation could influence profitability, cash flow, and overall financial stability.',
        ],
      },
      {
        h: 'Detailed Project Report (DPR)',
        p: [
          'A Detailed Project Report is a comprehensive document that outlines all critical aspects of a proposed project, serving as a blueprint for its planning, execution, and evaluation.',
          'It includes an introduction to the project, a detailed description of its scope and components, a market analysis, and a feasibility study. The DPR also provides financial projections, resource requirements, an implementation plan, risk analysis, and considerations for regulatory and environmental factors.',
        ],
      },
    ],
  },
  {
    slug: 'fpo-management',
    name: 'FPO Management & Training',
    short: 'Residential classes, compliance training and scheme assistance for FPOs.',
    tagline: 'Residential Practical Classes | Business Plan Training | Legal Compliance | Schemes',
    intro:
      'Training, project preparation and scheme support for Farmer Producer Organisations, from formation to funding.',
    sections: [
      {
        h: 'Residential Practical Classes',
        p: [
          'We host classes along with residential facilities, that provide an environment to learn more and interact with other like-minded people.',
          'The classes cover the following topics, giving you a complete idea about FPOs:',
        ],
        list: [
          'Annual General Meetings',
          'Board Meetings',
          'Directors Meetings',
          'Customer Calling',
          'FIG Formation',
          'Mobilization of Farmers',
          'Employees Interview',
          'Accounts Preparation',
          'Statutory Compliances',
        ],
      },
      {
        h: 'Training for Preparation of Business Plan',
        p: [
          'A business plan for a Farmer Producer Organization (FPO) outlines the key strategies and objectives of the collective enterprise. It includes an overview of the FPO’s mission, a market analysis of the target industry, information about their product and operations, financial projections, marketing and sales strategy, risk assessment, impact assessment, and implementation schedule.',
          'We provide training on how to prepare a Business Plan that is formal and accurate, to display details about the FPO to prospective investors, shareholders, participating communities, etc.',
        ],
      },
      {
        h: 'Legal Compliance Classes',
        p: [
          'We provide classes on the various legal and compliance requirements that Farmer Producer Companies are required to follow and uphold, as per the Companies Act.',
        ],
        list: [
          'Different licences that are required as per government requirements',
          'Accountants’ duties and preparation of accounts of the FPO',
          'CEO duties and responsibilities',
          'Directors’ duties and responsibilities',
        ],
      },
      {
        h: 'Project Preparation',
        p: [
          'We provide assistance and advice for the preparation of Project Proposals and Project Reports for various investment and expansion needs. We help with applying and facilitation of subsidies, funding, and loans related to FPOs.',
          'We conduct on-site studies to understand the current infrastructure and operations of the FPO, allowing us to provide a detailed summary and make an accurate project report.',
        ],
      },
      {
        h: 'Assistance for FPO Schemes',
        p: [
          'We provide assistance in financial schemes for farmers and FPOs, and help in availing schemes that provide interest subsidies and credit guarantees to promote agricultural productivity, reduce post-harvest losses, and stimulate agri-business entrepreneurship in the country.',
          'Consultancy is available on the various schemes that are available for the use of FPOs, along with advice on how to achieve their goals.',
          'We provide orientation on how to prepare Project Reports and funding requests to the appropriate authority, and help in preparing application requests for funding, with liaisoning services through various qualified banks.',
          'We support CBBOs to provide Capacity Building programs for Directors, CEOs, Accountants, Executive staff, and for implementing FPOs and projects.',
        ],
      },
    ],
  },
  {
    slug: 'government-schemes',
    name: 'Government Schemes',
    short: 'Eligibility, applications, compliance and follow-up through to approval.',
    tagline: 'Eligibility | Application | Compliance | Approval',
    intro:
      'PCP Innovations is dedicated to providing expert guidance in the realm of government schemes in Kerala. We facilitate every step of the process, from assessing eligibility and preparing applications to ensuring compliance and maintaining communication with agencies. Our goal is to simplify the complexities of governmental support for our clients.',
    sections: [
      {
        h: 'Our Expertise',
        p: ['Support that runs the whole way from the first question to the sanction letter.'],
        list: [
          'Identifying the schemes a venture is eligible for',
          'Preparing the project report and application',
          'Compliance documents and statutory formalities',
          'Liaison with the departments, agencies and banks involved',
          'Follow-up on queries until approval and release of the benefit',
        ],
      },
      {
        h: 'Why Choose Us',
        p: [
          'Clients trust PCP Innovations for government scheme applications due to our hands-on experience. We prepare project reports and compliance documents, ensuring full-cycle support from filing to approval.',
        ],
      },
    ],
  },
  {
    slug: 'startup-support',
    name: 'Startups & Innovation',
    short: 'Mentoring, structuring, feasibility and fund assistance.',
    tagline: 'Mentoring | Feasibility | Structuring | Fund Assistance',
    intro:
      'We are a dedicated team of experts specialising in supporting startups and innovative projects in South India. From the initial planning stages to the final implementation, we guide you through every step. Our services include feasibility studies, developing projects and plans, and assisting with infrastructure development, along with financial and fund assistance.',
    sections: [
      {
        h: 'Our Services',
        p: [],
        defs: [
          ['Mentoring', 'Providing guidance, support, and advice to entrepreneurs to help them navigate challenges, make informed decisions, and achieve sustainable growth.'],
          ['Discussions & Meetings', 'Organising, guiding, and managing the flow of conversation and decision-making processes to ensure productive and efficient outcomes.'],
          ['Assessing Options', 'Determining the most suitable type of organisation to establish by evaluating the advantages, benefits, and limitations of each type.'],
          ['Understanding Opportunities', 'Evaluating the scope for starting a business in India or abroad while analysing the industry and future trends to determine which ventures are financially viable.'],
          ['Materializing Ideas', 'Based on the identified opportunities, we develop an organisational framework that incorporates the introduction of new ideas and ventures into both existing and new markets.'],
          ['Compliances', 'Discuss and understand the legal and statutory requirements needed till the starting up of the venture.'],
        ],
      },
    ],
  },
]

export const getService = (slug) => services.find((s) => s.slug === slug)
