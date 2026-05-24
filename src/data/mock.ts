export type Issue = {
  id: string;
  category: string;
  title: string;
  description: string;
  author: string;
  initials: string;
  timeAgo: string;
  votes: number;
  comments: number;
};

export const CATEGORIES = [
  "All Issues",
  "Unemployment",
  "Education",
  "Corruption",
  "Healthcare",
  "Infrastructure",
  "Inflation",
  "Farmer Distress",
  "Social Justice",
];

export const ISSUES: Issue[] = [
  {
    id: "1",
    category: "Unemployment",
    title: "Where did the 2 crore jobs per year go?",
    description:
      "Eight years later, the official numbers still refuse to add up. Asking for a friend. Asking for a generation.",
    author: "Aarav Mehta",
    initials: "AM",
    timeAgo: "2h ago",
    votes: 1240,
    comments: 312,
  },
  {
    id: "2",
    category: "Education",
    title: "Public universities are crumbling while coaching mafias thrive",
    description:
      "Why is a NEET seat costing more than a four-year degree abroad? Audit the syllabus, audit the silence.",
    author: "Priya Iyer",
    initials: "PI",
    timeAgo: "5h ago",
    votes: 982,
    comments: 204,
  },
  {
    id: "3",
    category: "Corruption",
    title: "Why are MLA asset disclosures still optional theatre?",
    description:
      "Self-declared net worths jumping 400% in one term. The math is not mathing. The accountability is not accountabling.",
    author: "Rohan Sharma",
    initials: "RS",
    timeAgo: "1d ago",
    votes: 2103,
    comments: 588,
  },
  {
    id: "4",
    category: "Healthcare",
    title: "District hospitals running on one doctor and three prayers",
    description:
      "Bihar, UP, Odisha — same story. Vacancies frozen. Budgets cut. Patients told to be patient.",
    author: "Sneha Reddy",
    initials: "SR",
    timeAgo: "1d ago",
    votes: 765,
    comments: 142,
  },
  {
    id: "5",
    category: "Infrastructure",
    title: "Smart cities, dumb drainage",
    description:
      "It rained for forty minutes. The Smart City drowned in fifteen. Where did the ₹48,000 crore go?",
    author: "Vikram Joshi",
    initials: "VJ",
    timeAgo: "2d ago",
    votes: 1567,
    comments: 421,
  },
  {
    id: "6",
    category: "Inflation",
    title: "Tomatoes at ₹120/kg is not a meme anymore",
    description:
      "The grocery bill is a slow horror movie. Wages frozen. Onion futures booming. Households quietly collapsing.",
    author: "Anjali Singh",
    initials: "AS",
    timeAgo: "3d ago",
    votes: 1893,
    comments: 503,
  },
  {
    id: "7",
    category: "Farmer Distress",
    title: "MSP promises, mandi realities",
    description:
      "Punjab farmers got ₹2,275/quintal. They were promised ₹2,700. Eight tractors are still parked at the border.",
    author: "Harpreet Singh",
    initials: "HS",
    timeAgo: "4d ago",
    votes: 1342,
    comments: 287,
  },
  {
    id: "8",
    category: "Social Justice",
    title: "Caste census delayed. Again. Convenient.",
    description:
      "Ten years of 'we will consider it'. Maybe the numbers are inconvenient. Maybe that's the point.",
    author: "Meera Devi",
    initials: "MD",
    timeAgo: "5d ago",
    votes: 1109,
    comments: 376,
  },
];

export const STATES = [
  { name: "Uttar Pradesh", count: 4821 },
  { name: "Maharashtra", count: 3756 },
  { name: "Bihar", count: 3210 },
  { name: "West Bengal", count: 2987 },
  { name: "Tamil Nadu", count: 2654 },
  { name: "Karnataka", count: 2432 },
  { name: "Rajasthan", count: 2189 },
  { name: "Gujarat", count: 1976 },
  { name: "Madhya Pradesh", count: 1843 },
  { name: "Andhra Pradesh", count: 1654 },
  { name: "Kerala", count: 1432 },
  { name: "Punjab", count: 1287 },
];

export const LEADERBOARD = [
  { rank: 1, name: "Arjun Patel", state: "Gujarat", points: 9842, issues: 47 },
  { rank: 2, name: "Kavya Nair", state: "Kerala", points: 8721, issues: 39 },
  { rank: 3, name: "Rahul Yadav", state: "Bihar", points: 8156, issues: 41 },
  { rank: 4, name: "Sonia Kulkarni", state: "Maharashtra", points: 7432, issues: 33 },
  { rank: 5, name: "Dev Choudhary", state: "Rajasthan", points: 6987, issues: 31 },
  { rank: 6, name: "Pooja Banerjee", state: "West Bengal", points: 6432, issues: 28 },
  { rank: 7, name: "Ajay Reddy", state: "Telangana", points: 5876, issues: 26 },
  { rank: 8, name: "Nisha Verma", state: "Uttar Pradesh", points: 5321, issues: 24 },
];

export const MANIFESTO = [
  "Every government scheme for youth employment must have publicly audited results. No results = no renewal of the scheme.",
  "Any politician who promises jobs during election campaign and fails to deliver shall face a public accountability hearing within 2 years.",
  "50% of all government contract and tender work shall be reserved for youth-led startups and small businesses under 5 years old.",
  "The National Unemployment Rate shall be published monthly by an independent body, not the government.",
  "Any minister or bureaucrat found with undisclosed assets shall be barred from public office for 25 years.",
];