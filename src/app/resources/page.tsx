"use client";

import { useMemo, useState } from "react";

const categories = [
  "All",
  "Crisis support",
  "Peer support",
  "Find care",
  "Learn & cope",
  "Identity & relationships",
] as const;

type Category = (typeof categories)[number];
type FilterCategory = Exclude<Category, "All">;

type Resource = {
  name: string;
  organization: string;
  description: string;
  details: string;
  categories: readonly FilterCategory[];
  topics: readonly string[];
  href: string;
  action: string;
  urgent?: boolean;
};

const resources: readonly Resource[] = [
  {
    name: "988 Suicide & Crisis Lifeline",
    organization: "988 Lifeline",
    description: "Call, text, or chat with a trained crisis counselor. You do not have to be suicidal to reach out.",
    details: "Free, confidential support 24/7 across the U.S. and its territories.",
    categories: ["Crisis support"],
    topics: ["suicide", "anxiety", "depression", "loneliness", "substance use"],
    href: "https://988lifeline.org/get-help/",
    action: "Call, text, or chat",
    urgent: true,
  },
  {
    name: "Crisis Text Line",
    organization: "Crisis Text Line",
    description: "Text HOME to 741741 to connect with a trained volunteer Crisis Counselor.",
    details: "Free, confidential text support 24/7 in the U.S.",
    categories: ["Crisis support"],
    topics: ["text", "stress", "self-harm", "bullying", "relationships"],
    href: "https://www.crisistextline.org/",
    action: "Get text support",
    urgent: true,
  },
  {
    name: "The Trevor Project",
    organization: "The Trevor Project",
    description: "Crisis support and affirming resources created for LGBTQ+ young people.",
    details: "Call, text, or chat with a counselor 24/7.",
    categories: ["Crisis support", "Identity & relationships"],
    topics: ["LGBTQ+", "identity", "coming out", "suicide", "community"],
    href: "https://www.thetrevorproject.org/get-help/",
    action: "Get help",
  },
  {
    name: "Teen Line",
    organization: "Teen Line",
    description: "Peer-to-peer support and practical information for teens who want to talk with someone their age.",
    details: "Teen listeners are trained and supervised by mental health professionals.",
    categories: ["Peer support"],
    topics: ["peer", "friends", "family", "school", "stress"],
    href: "https://www.teenline.org/",
    action: "Visit Teen Line",
  },
  {
    name: "You Are Okay",
    organization: "Child Mind Institute",
    description: "Straightforward, expert-backed guides made for teens and young adults.",
    details: "Explore anxiety, depression, ADHD, relationships, school, family, and social media.",
    categories: ["Learn & cope", "Identity & relationships"],
    topics: ["anxiety", "depression", "ADHD", "autism", "social media", "family"],
    href: "https://youareokay.org/",
    action: "Explore guides",
  },
  {
    name: "NAMI Teen & Young Adult Resources",
    organization: "National Alliance on Mental Illness",
    description: "Information for finding help, talking with parents or friends, and handling mental health at school.",
    details: "Includes a directory of youth and young-adult support resources.",
    categories: ["Learn & cope", "Find care"],
    topics: ["school", "parents", "friends", "mental illness", "local support"],
    href: "https://www.nami.org/your-journey/kids-teens-and-young-adults/",
    action: "Browse NAMI resources",
  },
  {
    name: "Mental Health Resource Center",
    organization: "The Jed Foundation",
    description: "Practical tools and expert answers for emotional health, relationships, stress, anger, and loneliness.",
    details: "Designed for teens and young adults navigating everyday challenges.",
    categories: ["Learn & cope", "Peer support"],
    topics: ["stress", "loneliness", "anger", "friends", "college"],
    href: "https://jedfoundation.org/our-work/equipping-individuals/",
    action: "Find tools",
  },
  {
    name: "FindTreatment.gov",
    organization: "SAMHSA",
    description: "Search for mental health and substance-use treatment near you.",
    details: "A confidential and anonymous U.S. government treatment locator.",
    categories: ["Find care"],
    topics: ["therapy", "counseling", "treatment", "substance use", "local"],
    href: "https://www.findtreatment.gov/",
    action: "Find treatment",
  },
  {
    name: "Eating Disorder Support",
    organization: "National Eating Disorders Association",
    description: "Screening, treatment search, support groups, and guidance for talking about food or body-image concerns.",
    details: "The screening tool is a first step and does not provide a diagnosis.",
    categories: ["Find care", "Learn & cope"],
    topics: ["eating", "body image", "screening", "treatment", "support groups"],
    href: "https://www.nationaleatingdisorders.org/get-help/",
    action: "Find support",
  },
];

export default function ResourcesPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<Category>("All");

  const filteredResources = useMemo(() => {
    const search = query.trim().toLowerCase();
    return resources.filter((resource) => {
      const categoryMatches = category === "All" || resource.categories.some((item) => item === category);
      const searchable = [resource.name, resource.organization, resource.description, resource.details, ...resource.categories, ...resource.topics].join(" ").toLowerCase();
      return categoryMatches && (!search || searchable.includes(search));
    });
  }, [category, query]);

  return (
    <main id="main">
      <section className="resource-board">
        <div className="resource-board-wrap">
          <div className="resource-intro">
            <h1>Teen mental health resources</h1>
            <p>Search by what you are feeling or filter by the kind of support you want. Every card links to the organization&apos;s official website.</p>
          </div>

          <aside className="resource-crisis" aria-label="Urgent support">
            <div className="resource-crisis-mark" aria-hidden="true">!</div>
            <div>
              <strong>Need support right now?</strong>
              <p>In the U.S., call or text <a href="tel:988">988</a> for a trained crisis counselor. If you are in immediate danger, call <a href="tel:911">911</a>.</p>
            </div>
          </aside>

          <div className="resource-controls">
            <label className="resource-search">
              <span className="sr-only">Search mental health resources</span>
              <span aria-hidden="true">⌕</span>
              <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by resource, category, or organization" />
            </label>
            <div className="resource-filters" aria-label="Filter by support type">
              {categories.map((item) => (
                <button key={item} type="button" className={category === item ? "active" : ""} aria-pressed={category === item} onClick={() => setCategory(item)}>{item}</button>
              ))}
            </div>
          </div>

          <div className="resource-results" aria-live="polite">
            <p>{filteredResources.length} {filteredResources.length === 1 ? "resource" : "resources"}</p>
            {(query || category !== "All") && <button type="button" onClick={() => { setQuery(""); setCategory("All"); }}>Clear filters</button>}
          </div>

          {filteredResources.length > 0 ? (
            <div className="resource-card-grid">
              {filteredResources.map((resource) => (
                <a className={`resource-list-card${resource.urgent ? " urgent" : ""}`} href={resource.href} target="_blank" rel="noopener noreferrer" key={resource.name}>
                  <h2>{resource.name}</h2>
                  <p>{resource.description}</p>
                  <span className="resource-action">{resource.action}</span>
                </a>
              ))}
            </div>
          ) : (
            <div className="resource-empty"><h2>No resources match that search.</h2><p>Try a broader word or clear the filters to see everything.</p></div>
          )}

          <p className="resource-note">These links offer information and support, but they are not a substitute for care from a qualified mental health professional. Availability and services may vary by location.</p>
        </div>
      </section>
    </main>
  );
}
