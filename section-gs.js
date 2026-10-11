/* SECTION: General Studies
   "subs" lists the subsection ids. Each id loads the file gs-<id>.js
   To add a subsection: add its id here and create the file gs-<id>.js (copy any existing one). */
QB.section({
  key: "gs",
  name: "General Studies",
  icon: "🎓",
  color: "#1fa38f",
  blurb: "History, geography, polity, economy and science for the main exam.",
  subs: ["anc", "med", "mod", "inm", "geo", "pol", "eco", "bio", "phy", "chem", "env", "wb"]
});
