/* SECTION: Current Affairs
   "subs" lists the subsection ids. Each id loads the file ca-<id>.js
   To add a subsection: add its id here and create the file ca-<id>.js (copy any existing one). */
QB.section({
  key: "ca",
  name: "Current Affairs",
  icon: "📰",
  color: "#e0507a",
  blurb: "Appointments, news, awards, reports and schemes from recent months.",
  subs: ["appt", "nat", "intl", "def", "awards", "reports", "days", "scitech", "obit", "schemes", "bank", "portf"]
});
