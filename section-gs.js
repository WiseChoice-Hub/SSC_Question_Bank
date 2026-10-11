/* SECTION: General Studies
   "subs" lists every subsection with its full name and icon (these are what the site shows).
   The questions of each subsection live in the file gs-<id>.js
   To add a subsection: add one line here, then upload the file gs-<id>.js (copy any existing one and rename it). */
QB.section({
  key: "gs",
  name: "General Studies",
  icon: "🎓",
  color: "#1fa38f",
  blurb: "History, geography, polity, economy and science for the main exam.",
  subs: [
    {id:"anc", name:"Ancient History", icon:"🏺"},
    {id:"med", name:"Medieval History", icon:"🏰"},
    {id:"mod", name:"Modern History", icon:"🚂"},
    {id:"inm", name:"Indian National Movement", icon:"🇮🇳"},
    {id:"geo", name:"Geography", icon:"🌏"},
    {id:"pol", name:"Indian Polity", icon:"⚖️"},
    {id:"eco", name:"Indian Economy", icon:"📈"},
    {id:"bio", name:"Biology", icon:"🧬"},
    {id:"phy", name:"Physics", icon:"⚛️"},
    {id:"chem", name:"Chemistry", icon:"🧪"},
    {id:"env", name:"Environment", icon:"🌿"},
    {id:"wb", name:"West Bengal Specific", icon:"🐅"}
  ]
});
