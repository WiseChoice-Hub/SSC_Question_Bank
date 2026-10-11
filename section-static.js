/* SECTION: Static GK
   "subs" lists every subsection with its full name and icon (these are what the site shows).
   The questions of each subsection live in the file data/static/<id>.js
   To add a subsection: add one line here, then upload the file data/static/<id>.js (copy any existing one and rename it). */
QB.section({
  key: "static",
  name: "Static GK",
  icon: "🏛️",
  color: "#e8912d",
  blurb: "Culture, places, books and world facts that never change.",
  subs: [
    {id:"dance", name:"Dance Forms & Musical Instruments", icon:"💃"},
    {id:"fest", name:"Festival, Fairs & Crafts", icon:"🎉"},
    {id:"temple", name:"Temples & Architecture", icon:"🛕"},
    {id:"books", name:"Books & Author", icon:"📚"},
    {id:"capcur", name:"Capital & Currency", icon:"💱"},
    {id:"invent", name:"Inventions & Discoveries", icon:"💡"},
    {id:"superl", name:"Superlatives World", icon:"🏔️"}
  ]
});
