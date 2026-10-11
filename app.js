/* Question Bank engine. You never need to edit this file. */
const $ = (s, el=document) => el.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const shuf = a => { a=a.slice(); for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]];} return a; };
const fmtTime = s => { s=Math.max(0,Math.round(s)); const m=Math.floor(s/60), r=s%60; return (m<10?'0':'')+m+':'+(r<10?'0':'')+r; };
const num = (n,d=2) => (Math.round(n*Math.pow(10,d))/Math.pow(10,d)).toString();
const LETTERS = ['A','B','C','D','E','F'];

const store = {
  mem:{},
  get(k,d){ try{ const v=localStorage.getItem(k); return v===null? d : JSON.parse(v);}catch(e){ return (k in this.mem)? this.mem[k] : d; } },
  set(k,v){ try{ localStorage.setItem(k,JSON.stringify(v)); }catch(e){ this.mem[k]=v; } }
};

const DEFAULTS = { mode:'test', count:25, minutes:null, cm:1, neg:0.25, shuffle:true };
const S = { cfg:Object.assign({}, DEFAULTS, store.get('qb_settings',{})), scope:null, session:null, result:null, timer:null, filter:'all', palOpen:false, minutesTouched:false };

/* ---------- helpers for data ---------- */
let TOPICS = [];
let SITE = { title:"Question Bank", tagline:"" };
const topicOf = key => TOPICS.find(t=>t.key===key);
const subOf = id => { for(const t of TOPICS){ const s=t.subs.find(x=>x.id===id); if(s) return {topic:t, sub:s}; } return null; };
const qCount = s => s.sets.reduce((n,x)=>n+x.questions.length,0);
const topicCount = t => t.subs.reduce((n,s)=>n+qCount(s),0);
const getHist = () => store.get('qb_history',[]);
const tagQ = (q,s,set) => Object.assign({sub:s.id, subName:s.name, setTitle:set.title}, q);

function poolFor(scope){
  if(scope.type==='retry') return scope.qs;
  if(scope.type==='set'){ const f=subOf(scope.sub), set=f.sub.sets[scope.set]; return set.questions.map(q=>tagQ(q,f.sub,set)); }
  if(scope.type==='sub'){ const f=subOf(scope.sub); let out=[]; f.sub.sets.forEach(set=>set.questions.forEach(q=>out.push(tagQ(q,f.sub,set)))); return out; }
  const t=topicOf(scope.topic); let out=[];
  t.subs.forEach(s=>s.sets.forEach(set=>set.questions.forEach(q=>out.push(tagQ(q,s,set)))));
  return out;
}
function scopeTitle(scope){
  if(scope.type==='retry') return scope.title;
  if(scope.type==='set') return subOf(scope.sub).sub.sets[scope.set].title;
  if(scope.type==='sub') return subOf(scope.sub).sub.name+' (all sets)';
  return topicOf(scope.topic).name+' - Mixed test';
}
function scopeTopic(scope){
  if(scope.type==='set'||scope.type==='sub') return subOf(scope.sub).topic.key;
  return scope.topic;
}
function scopeKey(scope){
  if(scope.type==='set') return scope.sub+':'+scope.set;
  if(scope.type==='sub') return scope.sub+':all';
  if(scope.type==='topic') return 'mix-'+scope.topic;
  return null;
}

/* ---------- theme ---------- */
const SUN='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>';
const MOON='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>';
function paintTheme(){
  const t=document.documentElement.getAttribute('data-theme');
  $('#themeBtn').innerHTML = t==='dark'? SUN : MOON;
  const m=document.querySelector('meta[name=theme-color]'); if(m) m.content = t==='dark'? '#12112a':'#3a3fd8';
}

/* ---------- rendering ---------- */
const app = $('#app');
function view(html){ app.innerHTML = html; window.scrollTo(0,0); }

function homeView(){
  const h=getHist();
  const total = TOPICS.reduce((n,t)=>n+topicCount(t),0);
  const avg = h.length? Math.round(h.reduce((a,x)=>a+x.acc,0)/h.length) : null;
  view(`
    <section class="hero">
      <h1>${esc(SITE.title)}</h1>
      <p>${esc(SITE.tagline)}</p>
      <div class="snap">
        <div><b>${total}</b><span>Questions in bank</span></div>
        <div><b>${h.length}</b><span>Tests taken</span></div>
        <div><b>${avg===null?'-':avg+'%'}</b><span>Average accuracy</span></div>
      </div>
    </section>
    <div class="grid topics">
      ${TOPICS.map(t=>`
        <button class="topic" style="--tc:${t.color}" data-act="topic" data-key="${t.key}">
          <div class="topic-head"><div class="topic-ico">${t.icon}</div><h2>${esc(t.name)}</h2></div>
          <div class="topic-body">
            <p>${esc(t.blurb)}</p>
            <div class="pills"><span class="pill">${t.subs.length} subtopics</span><span class="pill">${topicCount(t)} questions</span></div>
          </div>
        </button>`).join('')}
    </div>
    <div class="foot">Your scores are saved on this device only.</div>
  `);
}

function topicView(key){
  const t=topicOf(key); if(!t) return homeView();
  const h=getHist();
  view(`
    <div class="crumb"><button data-act="home">Home</button><span>/</span><span>${esc(t.name)}</span></div>
    <h1 style="font-size:clamp(1.8rem,5vw,2.6rem)">${t.icon} ${esc(t.name)}</h1>
    <div class="mixed" style="--tc:${t.color}">
      <div><h3>Mixed test</h3><p>Questions from all ${t.subs.length} subtopics together (${topicCount(t)} available).</p></div>
      <button class="btn primary" data-act="setup" data-type="topic" data-key="${t.key}" ${topicCount(t)?'':'disabled'}>Start mixed test</button>
    </div>
    <div class="grid subs">
      ${t.subs.map(s=>{
        const n=qCount(s), ns=s.sets.length;
        const mine=h.filter(x=>x.sub===s.id);
        const best=mine.length? Math.max.apply(null,mine.map(x=>x.acc)) : null;
        return `<button class="sub" style="--tc:${t.color}" data-act="sub" data-key="${s.id}" ${n?'':'disabled'}>
          <div class="sub-top"><div class="sub-ico">${s.icon}</div><h3>${esc(s.name)}</h3></div>
          <div class="sub-meta"><span>${n? ns+' set'+(ns>1?'s':'')+', '+n+' questions' : 'Coming soon'}</span>${best!==null?`<span class="best">Best ${best}%</span>`:''}</div>
        </button>`;}).join('')}
    </div>
  `);
}

function subView(id){
  const f=subOf(id); if(!f) return homeView();
  const t=f.topic, s=f.sub, h=getHist();
  view(`
    <div class="crumb"><button data-act="home">Home</button><span>/</span><button data-act="topic" data-key="${t.key}">${esc(t.name)}</button><span>/</span><span>${esc(s.name)}</span></div>
    <h1 style="font-size:clamp(1.6rem,5vw,2.4rem)">${s.icon} ${esc(s.name)}</h1>
    ${s.sets.length>1?`<div class="mixed" style="--tc:${t.color}">
      <div><h3>All sets together</h3><p>${qCount(s)} questions from ${s.sets.length} sets.</p></div>
      <button class="btn primary" data-act="setup" data-type="sub" data-key="${s.id}">Start all sets</button>
    </div>`:''}
    ${s.sets.length? `<div class="grid subs">${s.sets.map((set,i)=>{
      const mine=h.filter(x=>x.key===s.id+':'+i);
      const best=mine.length? Math.max.apply(null,mine.map(x=>x.pct)) : null;
      return `<button class="sub" style="--tc:${t.color}" data-act="setup" data-type="set" data-key="${s.id}" data-set="${i}">
        <div class="sub-top"><div class="sub-ico">${i+1}</div><h3>${esc(set.title)}</h3></div>
        <div class="sub-meta"><span>${set.questions.length} questions</span>${best!==null?`<span class="best">Best ${best}%</span>`:`<span>Not attempted</span>`}</div>
      </button>`;}).join('')}</div>`
    : `<div class="empty" style="margin-top:18px">No sets added yet.</div>`}
  `);
}

/* ---------- setup modal ---------- */
function openSetup(scope){
  S.scope=scope;
  const pool=poolFor(scope);
  if(!pool.length) return;
  const c=S.cfg;
  c.count = (scope.type==='set'||scope.type==='retry') ? pool.length : Math.min(Math.max(1, +c.count||25), pool.length);
  S.minutesTouched=false;
  c.minutes = Math.max(1, Math.ceil(c.count*0.6));
  drawSetup();
}
function drawSetup(){
  const pool=poolFor(S.scope), c=S.cfg, n=pool.length;
  $('#modal').innerHTML = `
  <div class="overlay" data-act="closeModal" data-bg="1">
   <div class="sheet" role="dialog" aria-modal="true">
    <h2>${esc(scopeTitle(S.scope))}</h2>
    <p class="sub-line">${n} question${n>1?'s':''} available. Everything below can be changed.</p>

    <div class="field"><span class="lbl">Mode</span>
      <div class="seg">
        <button class="${c.mode==='quiz'?'on':''}" data-act="mode" data-v="quiz">Quiz (instant answers)</button>
        <button class="${c.mode==='test'?'on':''}" data-act="mode" data-v="test">Timed test</button>
      </div>
    </div>

    <div class="field"><label for="fCount">Number of questions</label>
      <input id="fCount" type="number" min="1" max="${n}" value="${c.count}" inputmode="numeric">
      <div class="chips">${[5,10,25,50].filter(v=>v<n).map(v=>`<button class="chip ${c.count==v?'on':''}" data-act="count" data-v="${v}">${v}</button>`).join('')}<button class="chip ${c.count==n?'on':''}" data-act="count" data-v="${n}">All (${n})</button></div>
    </div>

    ${c.mode==='test'?`<div class="field"><label for="fMin">Time limit (minutes)</label>
      <input id="fMin" type="number" min="1" max="300" value="${c.minutes}" inputmode="numeric"></div>`:`<div class="field"><small>Quiz mode has no time limit. You see the right answer after each question.</small></div>`}

    <div class="row2">
      <div class="field"><label for="fCm">Marks per correct</label><input id="fCm" type="number" min="0" step="0.25" value="${c.cm}" inputmode="decimal"></div>
      <div class="field"><label for="fNeg">Negative per wrong</label><input id="fNeg" type="number" min="0" step="0.01" value="${c.neg}" inputmode="decimal"></div>
    </div>
    <div class="chips" style="margin-top:-6px">
      ${[[0,'No negative'],[0.25,'1/4'],[0.33,'1/3'],[0.5,'1/2'],[1,'Full 1']].map(([v,l])=>`<button class="chip ${+c.neg===v?'on':''}" data-act="neg" data-v="${v}">${l}</button>`).join('')}
    </div>

    <div class="field"><label class="check"><input type="checkbox" id="fShuf" ${c.shuffle?'checked':''}> Shuffle questions and options</label></div>

    <div class="summary" id="sum"></div>
    <div class="actions">
      <button class="btn" data-act="closeModal">Cancel</button>
      <button class="btn primary" data-act="start">Start</button>
    </div>
   </div>
  </div>`;
  updSummary();
}
function updSummary(){
  const c=S.cfg, el=$('#sum'); if(!el) return;
  const total=c.count*c.cm;
  el.innerHTML = `Total marks: ${num(total)} <span>&nbsp;|&nbsp; Wrong answer: -${num(c.neg)}</span>` + (c.mode==='test'? ` <span>&nbsp;|&nbsp; Time: ${c.minutes} min</span>`:'');
}
function closeModal(){ $('#modal').innerHTML=''; }

/* ---------- start / run test ---------- */
function prep(q, shuffle){
  let idx=q.opts.map((_,i)=>i); if(shuffle) idx=shuf(idx);
  return Object.assign({}, q, {opts:idx.map(i=>q.opts[i]), correct:idx.indexOf(q.correct)});
}
function startSession(scope){
  const c=S.cfg;
  let pool=poolFor(scope);
  if(c.shuffle) pool=shuf(pool);
  pool=pool.slice(0, Math.min(c.count,pool.length));
  const qs=pool.map(q=>prep(q,c.shuffle));
  const n=qs.length;
  S.session = {
    scope, title:scopeTitle(scope), topic:scopeTopic(scope), qs, n,
    ans:Array(n).fill(null), marked:Array(n).fill(false), times:Array(n).fill(0),
    cur:0, qStart:Date.now(), start:Date.now(),
    cfg:{mode:c.mode, minutes:c.minutes, cm:c.cm, neg:c.neg},
    remaining:Math.round(c.minutes*60), elapsed:0
  };
  S.result=null; S.palOpen=false;
  closeModal();
  clearInterval(S.timer);
  S.timer=setInterval(tick,1000);
  if(location.hash!=='#/test') location.hash='#/test'; else route();
}
function tick(){
  const s=S.session; if(!s){ clearInterval(S.timer); return; }
  if(s.cfg.mode==='test'){
    s.remaining--;
    if(s.remaining<=0){ s.remaining=0; paintTimer(); finish(true); return; }
  } else s.elapsed++;
  paintTimer();
}
function paintTimer(){
  const s=S.session, el=$('#timer'); if(!s||!el) return;
  if(s.cfg.mode==='test'){ el.textContent=fmtTime(s.remaining); el.classList.toggle('low', s.remaining<=60); }
  else el.textContent=fmtTime(s.elapsed);
}
function leaveQ(){ const s=S.session; if(!s) return; s.times[s.cur]+=(Date.now()-s.qStart)/1000; s.qStart=Date.now(); }
function goQ(i){ const s=S.session; if(!s||i<0||i>=s.n) return; leaveQ(); s.cur=i; testView(); }

function testView(){
  const s=S.session; if(!s) return homeView();
  const q=s.qs[s.cur], a=s.ans[s.cur];
  const quiz=s.cfg.mode==='quiz', locked=quiz && a!==null;
  const answered=s.ans.filter(x=>x!==null).length;
  const pct=Math.round(((s.cur+1)/s.n)*100);
  const tc=topicOf(s.topic).color;
  const optHtml=q.opts.map((o,i)=>{
    let cls='opt';
    if(locked){ if(i===q.correct) cls+=' ok'; else if(i===a) cls+=' no'; }
    else if(a===i) cls+=' sel';
    return `<button class="${cls}" data-act="pick" data-i="${i}" ${locked?'disabled':''}><span class="k">${LETTERS[i]}</span><span>${esc(o)}</span></button>`;
  }).join('');
  const expHtml = locked ? `<div class="exp"><b>${a===q.correct?'Correct':'Correct answer: '+LETTERS[q.correct]+'. '+esc(q.opts[q.correct])}</b>${q.exp?esc(q.exp):''}</div>` : '';
  const pal=s.qs.map((_,i)=>`<button class="pn ${s.ans[i]!==null?'ans':''} ${s.marked[i]?'mk':''} ${i===s.cur?'cur':''}" data-act="jump" data-i="${i}" aria-label="Question ${i+1}">${i+1}</button>`).join('');
  const last = s.cur===s.n-1;
  app.innerHTML = `
    <div class="thead" style="--tc:${tc}">
      <div class="thead-row">
        <div class="ttl"><b>${esc(s.title)}</b><span>Question ${s.cur+1} of ${s.n} | ${answered} answered</span></div>
        <div class="timer ${quiz?'':''}" id="timer">--:--</div>
      </div>
      <div class="prog"><i style="width:${pct}%"></i></div>
    </div>
    <div class="layout">
      <div>
        <div class="qcard">
          <div class="qtag"><span class="pill" style="--tc:${tc}">${esc(q.subName||'')}</span>${s.marked[s.cur]?'<span class="tag mk">Marked for review</span>':''}<span>+${num(s.cfg.cm)} / -${num(s.cfg.neg)}</span></div>
          <p class="qtext">${esc(q.q)}</p>
          <div class="opts">${optHtml}</div>
          ${expHtml}
        </div>
        <div class="nav">
          <button class="btn" data-act="prev" ${s.cur===0?'disabled':''}>Previous</button>
          ${quiz?'':`<button class="btn" data-act="mark">${s.marked[s.cur]?'Unmark':'Mark for review'}</button><button class="btn" data-act="clear" ${a===null?'disabled':''}>Clear</button>`}
          ${last? `<button class="btn primary" data-act="submitAsk">Submit</button>` : `<button class="btn primary" data-act="next">${quiz && a===null?'Skip':'Next'}</button>`}
        </div>
        <div style="margin-top:14px" class="pal-toggle"><button class="btn block" data-act="togglePal">${S.palOpen?'Hide':'Show'} question palette</button></div>
      </div>
      <aside class="pal ${S.palOpen?'':'hide-m'}">
        <h3>Question palette</h3>
        <div class="pal-grid">${pal}</div>
        <div class="legend"><span><i style="background:var(--accent)"></i>Answered</span><span><i></i>Not answered</span><span><i style="border-color:var(--warn)"></i>Marked</span></div>
        <button class="btn primary block" style="margin-top:14px" data-act="submitAsk">Submit ${quiz?'quiz':'test'}</button>
      </aside>
    </div>`;
  paintTimer();
}

function pick(i){
  const s=S.session; if(!s) return;
  const quiz=s.cfg.mode==='quiz';
  if(quiz && s.ans[s.cur]!==null) return;
  s.ans[s.cur]=i; testView();
}

function submitAsk(){
  const s=S.session; if(!s) return;
  const un=s.ans.filter(x=>x===null).length, mk=s.marked.filter(Boolean).length;
  $('#modal').innerHTML=`<div class="overlay" data-act="closeModal" data-bg="1"><div class="sheet">
    <h2>Submit now?</h2>
    <p class="sub-line">${s.n-un} answered, ${un} not answered${mk?`, ${mk} marked for review`:''}.</p>
    <div class="actions"><button class="btn" data-act="closeModal">Keep going</button><button class="btn primary" data-act="submit">Submit</button></div>
  </div></div>`;
}

/* ---------- finish and analyse ---------- */
function finish(auto){
  const s=S.session; if(!s) return;
  leaveQ(); clearInterval(S.timer);
  closeModal();
  let correct=0,wrong=0,skipped=0;
  const subStats={};
  s.qs.forEach((q,i)=>{
    const a=s.ans[i];
    const k=q.sub||'x';
    subStats[k]=subStats[k]||{name:q.subName||'', c:0, w:0, s:0, n:0};
    subStats[k].n++;
    if(a===null){skipped++; subStats[k].s++;}
    else if(a===q.correct){correct++; subStats[k].c++;}
    else {wrong++; subStats[k].w++;}
  });
  const plus=correct*s.cfg.cm, minus=wrong*s.cfg.neg;
  const score=plus-minus, max=s.n*s.cfg.cm;
  const timeSec=Math.round((Date.now()-s.start)/1000);
  const attempted=correct+wrong;
  const res={
    title:s.title, topic:s.topic, scope:s.scope, sub:(s.scope.type==='set'||s.scope.type==='sub')?s.scope.sub:null, key:(scopeKey(s.scope)||('retry-'+s.topic)),
    qs:s.qs, ans:s.ans.slice(), marked:s.marked.slice(), times:s.times.slice(),
    cfg:s.cfg, correct, wrong, skipped, plus, minus, score, max, timeSec, auto:!!auto,
    attempted, acc: attempted? Math.round(correct/attempted*100) : 0,
    pct: max? Math.round(score/max*100) : 0, subStats
  };
  S.result=res; S.session=null;
  const h=getHist();
  h.unshift({date:Date.now(), title:res.title, topic:res.topic, sub:res.sub, key:res.key, mode:s.cfg.mode, score:+num(score), max:+num(max), correct, wrong, skipped, n:s.n, acc:res.acc, pct:res.pct, timeSec});
  store.set('qb_history', h.slice(0,200));
  if(location.hash!=='#/result') location.hash='#/result'; else route();
}

function donut(c,w,s,total){
  const R=80, C=2*Math.PI*R;
  const seg=(v,color,off)=>`<circle cx="100" cy="100" r="${R}" fill="none" stroke="${color}" stroke-width="18" stroke-dasharray="${(v/total)*C} ${C}" stroke-dashoffset="${-off}"/>`;
  const a=(c/total)*C, b=(w/total)*C;
  return `<svg width="200" height="200" viewBox="0 0 200 200"><circle cx="100" cy="100" r="${R}" fill="none" stroke="var(--surface2)" stroke-width="18"/>
    ${seg(s,'var(--warn)',a+b)}${seg(w,'var(--bad)',a)}${seg(c,'var(--good)',0)}</svg>`;
}

function verdict(p){
  if(p>=85) return 'Excellent work. You are exam ready on this topic.';
  if(p>=65) return 'Good score. Review the wrong answers to push it higher.';
  if(p>=40) return 'Decent start. Revise the topic and try again.';
  return 'Needs more practice. Study the explanations below and retry.';
}

function resultView(){
  const r=S.result; if(!r) return homeView();
  const tc=topicOf(r.topic).color;
  const avgT = r.times.length? r.times.reduce((a,b)=>a+b,0)/r.times.length : 0;
  let slow=0, fast=0; r.times.forEach((t,i)=>{ if(t>r.times[slow]) slow=i; if(t<r.times[fast]) fast=i; });
  const subs=Object.values(r.subStats);
  const showSubs=subs.length>1;
  view(`
    <div class="crumb"><button data-act="home">Home</button><span>/</span><span>Result</span></div>
    <h1 style="font-size:clamp(1.6rem,5vw,2.3rem)">${esc(r.title)}</h1>
    ${r.auto?'<p class="sub-line" style="color:var(--bad);font-weight:600">Time was up. The test was submitted automatically.</p>':''}
    <div class="res-top" style="margin-top:16px;--tc:${tc}">
      <div class="box">
        <div class="donut">${donut(r.correct,r.wrong,r.skipped,r.qs.length)}<div class="mid"><b>${num(r.score)}</b><span>out of ${num(r.max)}</span></div></div>
        <div class="verdict">${esc(verdict(r.pct))}</div>
      </div>
      <div class="box">
        <div class="stats">
          <div class="stat g"><b>${r.correct}</b><span>Correct</span></div>
          <div class="stat b"><b>${r.wrong}</b><span>Wrong</span></div>
          <div class="stat w"><b>${r.skipped}</b><span>Skipped</span></div>
          <div class="stat"><b>${r.acc}%</b><span>Accuracy (attempted)</span></div>
          <div class="stat"><b>${fmtTime(r.timeSec)}</b><span>Time taken</span></div>
          <div class="stat"><b>${num(avgT,1)}s</b><span>Avg per question</span></div>
        </div>
        <div class="marks">
          <div><span>Correct: ${r.correct} x ${num(r.cfg.cm)}</span><span style="color:var(--good)">+${num(r.plus)}</span></div>
          <div><span>Wrong: ${r.wrong} x ${num(r.cfg.neg)}</span><span style="color:var(--bad)">-${num(r.minus)}</span></div>
          <div class="tot"><span>Net score</span><span>${num(r.score)} / ${num(r.max)} (${r.pct}%)</span></div>
        </div>
        ${r.wrong && r.cfg.neg>0 ? `<p style="color:var(--muted);margin:12px 0 0;font-size:.92rem">Negative marking cost you ${num(r.minus)} marks. Skipping the ${r.wrong} questions you were unsure about would have scored ${num(r.plus)}.</p>`:''}
        ${r.qs.length>1?`<p style="color:var(--muted);margin:8px 0 0;font-size:.92rem">Slowest: Q${slow+1} (${num(r.times[slow],0)}s). Fastest: Q${fast+1} (${num(r.times[fast],0)}s).</p>`:''}
      </div>
    </div>

    ${showSubs?`<h2 class="sec-title">Subtopic analysis</h2><div class="box"><div class="bars">${subs.map(x=>{
      const p=x.n? Math.round(x.c/x.n*100):0;
      return `<div class="bar-row"><div class="lab"><b>${esc(x.name)}</b><span>${x.c}/${x.n} correct (${p}%)</span></div><div class="track"><i style="width:${p}%;background:${p>=65?'var(--good)':p>=40?'var(--warn)':'var(--bad)'}"></i></div></div>`;}).join('')}</div></div>`:''}

    <div class="actions" style="margin-top:22px;flex-wrap:wrap">
      <button class="btn primary" data-act="retry">Try again</button>
      <button class="btn" data-act="retryWrong" ${(r.wrong+r.skipped)?'':'disabled'}>Retry wrong and skipped (${r.wrong+r.skipped})</button>
      <button class="btn" data-act="home">Home</button>
    </div>

    <h2 class="sec-title">Answer review</h2>
    <div class="filters">
      ${[['all','All'],['no','Wrong'],['sk','Skipped'],['mk','Marked']].map(([k,l])=>`<button class="chip ${S.filter===k?'on':''}" data-act="filter" data-v="${k}">${l}</button>`).join('')}
    </div>
    <div id="review"></div>
  `);
  paintReview();
}
function paintReview(){
  const r=S.result; if(!r) return;
  let html='';
  r.qs.forEach((q,i)=>{
    const a=r.ans[i];
    const st = a===null? 'sk' : (a===q.correct? 'ok':'no');
    if(S.filter==='no' && st!=='no') return;
    if(S.filter==='sk' && st!=='sk') return;
    if(S.filter==='mk' && !r.marked[i]) return;
    const label = st==='ok'?'Correct (+'+num(r.cfg.cm)+')': st==='no'?'Wrong (-'+num(r.cfg.neg)+')':'Skipped';
    html+=`<div class="rev ${st}">
      <div style="margin-bottom:8px"><span class="tag ${st}">${label}</span>${r.marked[i]?'<span class="tag mk">Marked</span>':''}<span style="color:var(--muted);font-size:.82rem">Q${i+1} | ${num(r.times[i],0)}s | ${esc(q.subName||'')}</span></div>
      <h4>${esc(q.q)}</h4>
      ${a!==null && st==='no'?`<div class="ans" style="color:var(--bad)">Your answer: ${LETTERS[a]}. ${esc(q.opts[a])}</div>`:''}
      <div class="ans" style="color:var(--good)">Correct answer: ${LETTERS[q.correct]}. ${esc(q.opts[q.correct])}</div>
      ${q.exp?`<div class="exp" style="margin-top:10px">${esc(q.exp)}</div>`:''}
    </div>`;
  });
  $('#review').innerHTML = html || '<div class="empty">No questions in this filter.</div>';
}

/* ---------- progress page ---------- */
function progressView(){
  const h=getHist();
  const totalQ=h.reduce((a,x)=>a+x.n,0);
  const avg=h.length? Math.round(h.reduce((a,x)=>a+x.acc,0)/h.length):0;
  const bySub={};
  h.forEach(x=>{ const k=x.key||x.sub||('mix-'+x.topic); bySub[k]=bySub[k]||{title:x.title,topic:x.topic,att:0,accSum:0,best:0}; const b=bySub[k]; b.att++; b.accSum+=x.acc; b.best=Math.max(b.best,x.acc); });
  const rows=Object.values(bySub).sort((a,b)=>(a.accSum/a.att)-(b.accSum/b.att));
  view(`
    <div class="crumb"><button data-act="home">Home</button><span>/</span><span>My progress</span></div>
    <h1 style="font-size:clamp(1.8rem,5vw,2.6rem)">My progress</h1>
    ${h.length?`
    <div class="snap">
      <div><b>${h.length}</b><span>Tests taken</span></div>
      <div><b>${totalQ}</b><span>Questions practised</span></div>
      <div><b>${avg}%</b><span>Average accuracy</span></div>
    </div>
    <h2 class="sec-title">Weakest areas first</h2>
    <div class="box"><div class="bars">${rows.map(x=>{
      const p=Math.round(x.accSum/x.att);
      return `<div class="bar-row"><div class="lab"><b>${esc(x.title)}</b><span>avg ${p}% | best ${x.best}% | ${x.att} test${x.att>1?'s':''}</span></div><div class="track"><i style="width:${p}%;background:${p>=65?'var(--good)':p>=40?'var(--warn)':'var(--bad)'}"></i></div></div>`;}).join('')}</div></div>
    <h2 class="sec-title">Recent tests</h2>
    <div class="hist">${h.slice(0,15).map(x=>`<div class="hist-item"><div><b>${esc(x.title)}</b><span>${new Date(x.date).toLocaleDateString(undefined,{day:'numeric',month:'short',year:'numeric'})} | ${x.mode==='quiz'?'Quiz':'Timed test'} | ${fmtTime(x.timeSec)}</span></div><div style="text-align:right"><b>${num(x.score)} / ${num(x.max)}</b><span>${x.acc}% accuracy</span></div></div>`).join('')}</div>
    <div style="margin-top:22px"><button class="btn danger" data-act="clearHist">Clear all history</button></div>
    `:`<div class="empty" style="margin-top:18px">No tests yet. Pick a topic and take your first quiz to see your marks analysis here.</div>
       <div style="margin-top:16px"><button class="btn primary" data-act="home">Browse topics</button></div>`}
  `);
}

/* ---------- router ---------- */
function route(){
  const h=location.hash||'#/';
  if(S.session && h!=='#/test'){ // user pressed Back during a test
    history_pushTest(); confirmExit(); return;
  }
  if(h==='#/test'){ if(S.session) return testView(); return S.result? (location.hash='#/result') : (location.hash='#/'); }
  if(h==='#/result'){ return S.result? resultView() : (location.hash='#/'); }
  if(h==='#/progress') return progressView();
  if(h.startsWith('#/t/')) return topicView(h.slice(4));
  if(h.startsWith('#/s/')) return subView(h.slice(4));
  homeView();
}
function history_pushTest(){ try{ window.history.pushState(null,'','#/test'); }catch(e){} }
function confirmExit(){
  $('#modal').innerHTML=`<div class="overlay"><div class="sheet">
    <h2>Leave this ${S.session.cfg.mode==='quiz'?'quiz':'test'}?</h2>
    <p class="sub-line">You can submit now to see your result, or go back and keep answering.</p>
    <div class="actions" style="flex-wrap:wrap">
      <button class="btn" data-act="closeModal">Resume</button>
      <button class="btn primary" data-act="submit">Submit now</button>
      <button class="btn danger" data-act="quit">Quit without saving</button>
    </div></div></div>`;
}
function go(h){ if(location.hash===h) route(); else location.hash=h; }

/* ---------- events ---------- */
const A = {
  home(){ if(S.session) return confirmExit(); go('#/'); },
  progress(){ if(S.session) return confirmExit(); go('#/progress'); },
  theme(){
    const t=document.documentElement.getAttribute('data-theme')==='dark'?'light':'dark';
    document.documentElement.setAttribute('data-theme',t); 
    try{ localStorage.setItem('qb_theme',t); }catch(e){}
    paintTheme();
  },
  topic(d){ go('#/t/'+d.key); },
  sub(d){ go('#/s/'+d.key); },
  setup(d){ openSetup(d.type==='set'? {type:'set',sub:d.key,set:+d.set} : d.type==='sub'? {type:'sub',sub:d.key} : {type:'topic',topic:d.key}); },
  closeModal(d,el,ev){ if(el.dataset.bg && ev.target!==el) return; closeModal(); },
  mode(d){ S.cfg.mode=d.v; drawSetup(); },
  count(d){ const n=poolFor(S.scope).length; S.cfg.count=Math.min(+d.v,n); if(!S.minutesTouched) S.cfg.minutes=Math.max(1,Math.ceil(S.cfg.count*0.6)); drawSetup(); },
  neg(d){ S.cfg.neg=+d.v; drawSetup(); },
  start(){
    const n=poolFor(S.scope).length, c=S.cfg;
    c.count=Math.min(Math.max(1,Math.round(+c.count||1)),n);
    c.minutes=Math.max(1,+c.minutes||1);
    if(!(c.cm>=0)) c.cm=1; if(!(c.neg>=0)) c.neg=0;
    store.set('qb_settings', {mode:c.mode,count:c.count,cm:c.cm,neg:c.neg,shuffle:c.shuffle});
    startSession(S.scope);
  },
  pick(d){ pick(+d.i); },
  next(){ goQ(S.session.cur+1); },
  prev(){ goQ(S.session.cur-1); },
  jump(d){ goQ(+d.i); },
  mark(){ const s=S.session; s.marked[s.cur]=!s.marked[s.cur]; testView(); },
  clear(){ const s=S.session; s.ans[s.cur]=null; testView(); },
  togglePal(){ S.palOpen=!S.palOpen; testView(); },
  submitAsk(){ submitAsk(); },
  submit(){ finish(false); },
  quit(){ clearInterval(S.timer); S.session=null; closeModal(); go('#/'); },
  retry(){ const r=S.result; openSetup(r.scope); },
  retryWrong(){
    const r=S.result;
    const qs=r.qs.filter((q,i)=>r.ans[i]!==q.correct);
    openSetup({type:'retry', qs, title:r.title+' (retry)', topic:r.topic});
  },
  filter(d){ S.filter=d.v; document.querySelectorAll('.filters .chip').forEach(c=>c.classList.toggle('on', c.dataset.v===S.filter)); paintReview(); },
  clearHist(){
    $('#modal').innerHTML=`<div class="overlay"><div class="sheet"><h2>Clear all history?</h2><p class="sub-line">This removes every saved score on this device.</p>
      <div class="actions"><button class="btn" data-act="closeModal">Cancel</button><button class="btn danger" data-act="clearHistYes">Clear</button></div></div></div>`;
  },
  clearHistYes(){ store.set('qb_history',[]); closeModal(); progressView(); }
};

document.addEventListener('click', e=>{
  const el=e.target.closest('[data-act]'); if(!el) return;
  const fn=A[el.dataset.act]; if(fn){ fn(el.dataset, el, e); }
});
document.addEventListener('input', e=>{
  const id=e.target.id, v=parseFloat(e.target.value);
  if(id==='fCount'){ const n=poolFor(S.scope).length; S.cfg.count=Math.min(Math.max(1,Math.round(v||1)),n); if(!S.minutesTouched){ S.cfg.minutes=Math.max(1,Math.ceil(S.cfg.count*0.6)); const m=$('#fMin'); if(m) m.value=S.cfg.minutes; } updSummary(); }
  else if(id==='fMin'){ S.minutesTouched=true; S.cfg.minutes=Math.max(1,v||1); updSummary(); }
  else if(id==='fCm'){ S.cfg.cm=isNaN(v)?0:v; updSummary(); }
  else if(id==='fNeg'){ S.cfg.neg=isNaN(v)?0:v; updSummary(); }
});
document.addEventListener('change', e=>{ if(e.target.id==='fShuf') S.cfg.shuffle=e.target.checked; });
document.addEventListener('keydown', e=>{
  if(e.key==='Escape' && $('#modal').innerHTML && !(S.session && $('#modal .sheet h2') && /Leave/.test($('#modal .sheet h2').textContent))) closeModal();
  const s=S.session; if(!s || $('#modal').innerHTML) return;
  if(e.target.tagName==='INPUT') return;
  if(e.key==='ArrowRight') goQ(s.cur+1);
  else if(e.key==='ArrowLeft') goQ(s.cur-1);
  else if(['1','2','3','4'].includes(e.key)) pick(+e.key-1);
});
window.addEventListener('hashchange', route);
window.addEventListener('beforeunload', e=>{ if(S.session){ e.preventDefault(); e.returnValue=''; } });

/* ---------- loader: reads config.js, section files and subsection files ---------- */
const QB = {
  site:null, sectionFiles:[], _sections:{}, _subs:{},
  section(o){ this._sections[o.key]=o; },
  register(id,o){ this._subs[id]=o; }
};
function loadScript(src){
  return new Promise(res=>{
    const el=document.createElement('script');
    el.src=src; el.onload=()=>res(true);
    el.onerror=()=>{ console.warn('Missing file: '+src); res(false); };
    document.head.appendChild(el);
  });
}
function cleanSets(sets, id){
  return (sets||[]).map((set,i)=>{
    const qs=(set.questions||[]).filter((q,j)=>{
      const ok = q && typeof q.q==='string' && Array.isArray(q.opts) && q.opts.length>=2 && Number.isInteger(q.correct) && q.correct>=0 && q.correct<q.opts.length;
      if(!ok) console.warn('Skipped invalid question '+(j+1)+' in '+id+' set '+(i+1));
      return ok;
    });
    return {title:set.title||('Set '+(i+1)), questions:qs};
  }).filter(set=>set.questions.length);
}
async function boot(){
  app.innerHTML='<div class="empty" style="margin-top:30px">Loading questions...</div>';
  const stamp=Math.floor(Date.now()/60000);
  await loadScript('config.js?v='+stamp);
  if(QB.site) SITE=QB.site;
  document.title=SITE.title; $('#siteTitle').textContent=SITE.title;
  for(const key of QB.sectionFiles){
    await loadScript('section-'+key+'.js?v='+stamp);
    const sec=QB._sections[key]; if(!sec) continue;
    sec.subs=sec.subs.map(x=>typeof x==='string'?{id:x}:x);
    await Promise.all(sec.subs.map(x=>loadScript('data/'+key+'-'+x.id+'.js?v='+stamp)));
  }
  TOPICS = QB.sectionFiles.map(k=>QB._sections[k]).filter(Boolean).map(sec=>({
    key:sec.key, name:sec.name, icon:sec.icon, color:sec.color, blurb:sec.blurb,
    subs:sec.subs.map(x=>{ const d=QB._subs[x.id]||{}; return {id:x.id, name:x.name||d.name||x.id, icon:x.icon||d.icon||'📘', sets:cleanSets(d.sets,x.id)}; })
  }));
  if(!TOPICS.length){ app.innerHTML='<div class="empty" style="margin-top:30px">Could not load the question files. Check that config.js and the section files are uploaded in the same folder as index.html.</div>'; return; }
  if(location.hash==='#/test'||location.hash==='#/result') location.hash='#/';
  route();
}
paintTheme();
boot();
