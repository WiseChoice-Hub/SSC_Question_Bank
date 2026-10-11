QUESTION BANK - HOW IT WORKS

NEVER EDIT (engine files):  index.html, style.css, app.js
EDIT ONLY THESE:
  config.js              site title, order of sections
  section-static.js      Static GK section (lists its subsection ids)
  section-gs.js          General Studies section
  section-ca.js          Current Affairs section
  static-xxx.js / gs-xxx.js / ca-xxx.js   one file per subsection, holds the sets of 25 questions

ADD A NEW SET: open the subsection file, copy a { title, questions } block, add a comma after the previous set, rename to Set 2, Set 3 ...
ADD A NEW SUBSECTION: add its id in the section file's subs list, then upload a new file named <section>-<id>.js (copy any existing one and rename the const).

UPLOAD: put ALL files in the same GitHub folder (no subfolders), then turn on Pages.
