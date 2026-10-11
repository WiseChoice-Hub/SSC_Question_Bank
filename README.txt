QUESTION BANK - HOW IT WORKS

NEVER EDIT (engine files):  index.html, style.css, app.js
EDIT ONLY THESE:
  config.js              site title, order of sections
  section-static.js      Static GK section (lists its subsection ids)
  section-gs.js          General Studies section
  section-ca.js          Current Affairs section
  data/ folder: static-xxx.js / gs-xxx.js / ca-xxx.js   one file per subsection, holds the sets of 25 questions

ADD A NEW SET: open the subsection file, copy a { title, questions } block, add a comma after the previous set, rename to Set 2, Set 3 ...
ADD A NEW SUBSECTION: add one line {id:"xyz", name:"Full Name", icon:"📘"} in the section file's subs list, then upload a new file named <section>-<id>.js inside the data folder (copy any existing one and rename the const).

UPLOAD: index.html, style.css, app.js, config.js and the 3 section files go in the main folder. All subsection files go inside a folder named data. Then turn on Pages.
