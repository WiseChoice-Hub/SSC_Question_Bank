QUESTION BANK - HOW IT WORKS

NEVER EDIT (engine files):  index.html, style.css, app.js
EDIT ONLY THESE:
  config.js              site title, order of sections
  section-static.js      Static GK section (lists its subsection ids)
  section-gs.js          General Studies section
  section-ca.js          Current Affairs section
  data/static/, data/gs/, data/ca/ folders: one file per subsection (like data/ca/appt.js), holds the sets of 25 questions

ADD A NEW SET: open the subsection file, copy a { title, questions } block, add a comma after the previous set, rename to Set 2, Set 3 ...
ADD A NEW SUBSECTION: add one line {id:"xyz", name:"Full Name", icon:"📘"} in the section file's subs list, then upload a new file named <id>.js inside that section's folder (data/ca/, data/gs/ or data/static/) (copy any existing one and rename the const).

UPLOAD: index.html, style.css, app.js, config.js and the 3 section files go in the main folder. Subsection files go in data/static, data/gs and data/ca. Then turn on Pages.
