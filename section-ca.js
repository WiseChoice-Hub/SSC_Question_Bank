/* SECTION: Current Affairs
   "subs" lists every subsection with its full name and icon (these are what the site shows).
   The questions of each subsection live in the file ca-<id>.js
   To add a subsection: add one line here, then upload the file ca-<id>.js (copy any existing one and rename it). */
QB.section({
  key: "ca",
  name: "Current Affairs",
  icon: "📰",
  color: "#e0507a",
  blurb: "Appointments, news, awards, reports and schemes from recent months.",
  subs: [
    {id:"appt", name:"Recent Appointments", icon:"🧑‍💼"},
    {id:"nat", name:"National News", icon:"🗞️"},
    {id:"intl", name:"International News", icon:"🌐"},
    {id:"def", name:"Defense & Exercises", icon:"🛡️"},
    {id:"awards", name:"Awards & Honor", icon:"🏅"},
    {id:"reports", name:"Reports & Index", icon:"📊"},
    {id:"days", name:"Important Days & Themes", icon:"📅"},
    {id:"scitech", name:"Science & Tech", icon:"🚀"},
    {id:"obit", name:"Obituaries", icon:"🕯️"},
    {id:"schemes", name:"Government Schemes", icon:"🏛️"},
    {id:"bank", name:"Banking & Finance", icon:"🏦"},
    {id:"portf", name:"Government Portfolios", icon:"💼"},
    {id:"state", name:"State Specific News", icon:"🗺️"},
    {id:"summit", name:"Summit and Conferences", icon:"🤝"}
  ]
});
