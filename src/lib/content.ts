export const navItems = [
  { href: "/the-show", label: "The show" },
  { href: "/episodes", label: "Episodes" },
  { href: "/resources", label: "Resources" },
  { href: "/share-your-story", label: "Share your story" },
  { href: "/about", label: "About" },
] as const;

export const episodes = [
  { number: "01", title: "Confidence Peak", description: "What it actually takes to feel sure of yourself — and why confidence isn’t the same as having no doubts.", tag: "Self-worth" },
  { number: "02", title: "Anxiety Rapids", description: "Riding out anxiety instead of fighting it, with a therapist who works with teens every day.", tag: "Anxiety" },
  { number: "03", title: "Fog of Uncertainty", description: "Not knowing what comes next — after high school, after a friendship ends, after anything — and sitting with that.", tag: "Change" },
  { number: "04", title: "Trust Bridge", description: "How trust gets built and broken in friendships, and what it takes to let someone back in.", tag: "Friendship" },
  { number: "05", title: "Forest of Self-Discovery", description: "Identity, body image, and figuring out who you are when everyone has an opinion about it.", tag: "Identity" },
  { number: "06", title: "Comfort Zone Island", description: "Why staying small can feel safe — and what actually helps when you’re ready to leave the island.", tag: "Growth" },
  { number: "07", title: "Stress Storm", description: "Academic pressure, packed schedules, and coping strategies that don’t require more hours in the day.", tag: "Stress" },
  { number: "08", title: "New Beginnings Trail", description: "Closing out the season: what we’ve learned, and where the map goes next.", tag: "Reflection" },
] as const;
