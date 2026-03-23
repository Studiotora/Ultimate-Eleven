const T={
  germany:{name:'Germany',flag:'🇩🇪',p:[
    {id:101,name:'K.Muller',pos:'GK',spd:65,pwr:70,tec:68,def:88,rar:2},
    {id:102,name:'H.Schneider',pos:'LB',spd:76,pwr:68,tec:72,def:76,rar:1},
    {id:103,name:'B.Roth',pos:'CB1',spd:62,pwr:80,tec:60,def:84,rar:2},
    {id:104,name:'G.Schester',pos:'CB2',spd:60,pwr:78,tec:62,def:82,rar:2},
    {id:105,name:'F.Libero',pos:'RB',spd:74,pwr:66,tec:70,def:74,rar:1},
    {id:106,name:'K.Middendorf',pos:'CM1',spd:72,pwr:74,tec:76,def:68,rar:1},
    {id:107,name:'P.Klaussen',pos:'CM2',spd:70,pwr:76,tec:78,def:66,rar:2},
    {id:108,name:'D.Lorenz',pos:'CM3',spd:74,pwr:72,tec:74,def:64,rar:1},
    {id:109,name:'S.Levin',pos:'LW',spd:82,pwr:76,tec:78,def:52,rar:2},
    {id:110,name:'K.Deuter',pos:'ST',spd:76,pwr:86,tec:74,def:48,rar:2},
    {id:111,name:'H.Kaltz',pos:'RW',spd:80,pwr:78,tec:76,def:54,rar:2}]},
  japan:{name:'Japan',flag:'🇯🇵',p:[
    {id:201,name:'W.Wakabayashi',pos:'GK',spd:68,pwr:72,tec:74,def:90,rar:2},
    {id:202,name:'R.Hino',pos:'LB',spd:78,pwr:66,tec:72,def:74,rar:1},
    {id:203,name:'S.Morisaki',pos:'CB1',spd:64,pwr:76,tec:64,def:80,rar:1},
    {id:204,name:'T.Matsuyama',pos:'CB2',spd:66,pwr:78,tec:62,def:82,rar:2},
    {id:205,name:'K.Jito',pos:'RB',spd:76,pwr:68,tec:70,def:76,rar:1},
    {id:206,name:'T.Misaki',pos:'CM1',spd:84,pwr:68,tec:88,def:66,rar:2},
    {id:207,name:'R.Ishizaki',pos:'CM2',spd:80,pwr:72,tec:80,def:68,rar:2},
    {id:208,name:'K.Wakashimazu',pos:'CM3',spd:76,pwr:80,tec:74,def:70,rar:2},
    {id:209,name:'M.Soda',pos:'LW',spd:82,pwr:70,tec:78,def:56,rar:1},
    {id:210,name:'T.Ozora',pos:'ST',spd:86,pwr:82,tec:90,def:54,rar:2},
    {id:211,name:'K.Hyuga',pos:'RW',spd:84,pwr:88,tec:82,def:52,rar:2}]},
  italy:{name:'Italy',flag:'🇮🇹',p:[
    {id:301,name:'G.Buffon',pos:'GK',spd:66,pwr:74,tec:72,def:92,rar:2},
    {id:302,name:'S.Gentile',pos:'LB',spd:74,pwr:72,tec:70,def:84,rar:2},
    {id:303,name:'F.Feo',pos:'CB1',spd:68,pwr:80,tec:66,def:86,rar:1},
    {id:304,name:'F.Cannavaro',pos:'CB2',spd:70,pwr:82,tec:72,def:90,rar:2},
    {id:305,name:'T.Frisina',pos:'RB',spd:76,pwr:70,tec:78,def:82,rar:2},
    {id:306,name:'F.Totti',pos:'CM1',spd:78,pwr:84,tec:90,def:66,rar:2},
    {id:307,name:'A.Delpiero',pos:'CM2',spd:80,pwr:82,tec:88,def:62,rar:2},
    {id:308,name:'A.Pirlo',pos:'CM3',spd:74,pwr:76,tec:92,def:68,rar:2},
    {id:309,name:'M.Mancuso',pos:'LW',spd:84,pwr:80,tec:78,def:54,rar:1},
    {id:310,name:'E.Vella',pos:'ST',spd:82,pwr:86,tec:80,def:52,rar:1},
    {id:311,name:'R.Baggio',pos:'RW',spd:84,pwr:80,tec:90,def:50,rar:2}]},
  argentina:{name:'Argentina',flag:'🇦🇷',p:[
    {id:701,name:'S.Goyco',pos:'GK',spd:66,pwr:72,tec:70,def:88,rar:2},
    {id:702,name:'J.Zanetti',pos:'LB',spd:82,pwr:72,tec:78,def:80,rar:2},
    {id:703,name:'R.Ayala',pos:'CB1',spd:70,pwr:80,tec:72,def:88,rar:2},
    {id:704,name:'W.Samuel',pos:'CB2',spd:66,pwr:82,tec:68,def:88,rar:2},
    {id:705,name:'P.Sorin',pos:'RB',spd:80,pwr:70,tec:76,def:78,rar:1},
    {id:706,name:'J.Riquelme',pos:'CM1',spd:74,pwr:78,tec:92,def:62,rar:2},
    {id:707,name:'P.Aimar',pos:'CM2',spd:82,pwr:76,tec:90,def:60,rar:2},
    {id:708,name:'D.Simeone',pos:'CM3',spd:72,pwr:80,tec:78,def:80,rar:1},
    {id:709,name:'C.Tevez',pos:'LW',spd:86,pwr:84,tec:82,def:56,rar:2},
    {id:710,name:'G.Batistuta',pos:'ST',spd:80,pwr:92,tec:78,def:48,rar:2},
    {id:711,name:'L.Messi',pos:'RW',spd:92,pwr:84,tec:96,def:52,rar:2}]},
  holland:{name:'Holland',flag:'🇳🇱',p:[
    {id:801,name:'E.vanDerSar',pos:'GK',spd:66,pwr:72,tec:74,def:90,rar:2},
    {id:802,name:'G.vBronck',pos:'LB',spd:80,pwr:72,tec:78,def:78,rar:1},
    {id:803,name:'J.Stam',pos:'CB1',spd:68,pwr:86,tec:68,def:90,rar:2},
    {id:804,name:'F.deBoer',pos:'CB2',spd:66,pwr:78,tec:80,def:86,rar:2},
    {id:805,name:'M.Reiziger',pos:'RB',spd:78,pwr:70,tec:76,def:78,rar:1},
    {id:806,name:'E.Davids',pos:'CM1',spd:82,pwr:78,tec:84,def:78,rar:2},
    {id:807,name:'W.Sneijder',pos:'CM2',spd:78,pwr:82,tec:90,def:64,rar:2},
    {id:808,name:'C.Seedorf',pos:'CM3',spd:80,pwr:84,tec:86,def:72,rar:2},
    {id:809,name:'A.Robben',pos:'LW',spd:92,pwr:82,tec:90,def:50,rar:2},
    {id:810,name:'R.vNistelrooy',pos:'ST',spd:80,pwr:90,tec:82,def:48,rar:2},
    {id:811,name:'M.Overmars',pos:'RW',spd:90,pwr:78,tec:86,def:48,rar:1}]},
  england:{name:'England',flag:'🏴',p:[
    {id:901,name:'D.Seaman',pos:'GK',spd:64,pwr:70,tec:72,def:88,rar:2},
    {id:902,name:'A.Cole',pos:'LB',spd:82,pwr:70,tec:78,def:80,rar:1},
    {id:903,name:'J.Terry',pos:'CB1',spd:64,pwr:84,tec:70,def:90,rar:2},
    {id:904,name:'R.Ferdinand',pos:'CB2',spd:72,pwr:82,tec:76,def:88,rar:2},
    {id:905,name:'G.Neville',pos:'RB',spd:76,pwr:70,tec:74,def:80,rar:1},
    {id:906,name:'S.Gerrard',pos:'CM1',spd:82,pwr:88,tec:84,def:76,rar:2},
    {id:907,name:'F.Lampard',pos:'CM2',spd:78,pwr:84,tec:84,def:72,rar:2},
    {id:908,name:'D.Beckham',pos:'CM3',spd:76,pwr:80,tec:92,def:64,rar:2},
    {id:909,name:'M.Owen',pos:'LW',spd:90,pwr:82,tec:84,def:50,rar:2},
    {id:910,name:'W.Rooney',pos:'ST',spd:84,pwr:88,tec:84,def:58,rar:2},
    {id:911,name:'R.Sterling',pos:'RW',spd:92,pwr:76,tec:86,def:48,rar:1}]},
  portugal:{name:'Portugal',flag:'🇵🇹',p:[
    {id:1001,name:'R.Patricio',pos:'GK',spd:66,pwr:72,tec:72,def:88,rar:2},
    {id:1002,name:'P.Ferreira',pos:'LB',spd:78,pwr:70,tec:76,def:78,rar:1},
    {id:1003,name:'P.Pepe',pos:'CB1',spd:70,pwr:84,tec:72,def:88,rar:2},
    {id:1004,name:'R.Carvalho',pos:'CB2',spd:66,pwr:80,tec:78,def:86,rar:2},
    {id:1005,name:'J.Cancelo',pos:'RB',spd:84,pwr:72,tec:84,def:76,rar:1},
    {id:1006,name:'L.Figo',pos:'CM1',spd:84,pwr:80,tec:90,def:62,rar:2},
    {id:1007,name:'B.Fernandes',pos:'CM2',spd:80,pwr:84,tec:90,def:66,rar:2},
    {id:1008,name:'R.Costa',pos:'CM3',spd:78,pwr:78,tec:92,def:64,rar:2},
    {id:1009,name:'N.Nani',pos:'LW',spd:88,pwr:80,tec:86,def:50,rar:1},
    {id:1010,name:'C.Ronaldo',pos:'ST',spd:90,pwr:94,tec:88,def:52,rar:2},
    {id:1011,name:'R.Leao',pos:'RW',spd:90,pwr:84,tec:84,def:46,rar:1}]}
};
const TEAM_KEYS=Object.keys(T);
const POS=[{k:'GK',z:'gk',o:0},{k:'LB',z:'def',o:1},{k:'CB1',z:'def',o:2},{k:'CB2',z:'def',o:3},{k:'RB',z:'def',o:4},{k:'CM1',z:'mid',o:5},{k:'CM2',z:'mid',o:6},{k:'CM3',z:'mid',o:7},{k:'LW',z:'att',o:8},{k:'ST',z:'att',o:9},{k:'RW',z:'att',o:10}];
const BF={
  GK: {x:.05,y:.50},
  LB: {x:.18,y:.20},CB1:{x:.22,y:.38},CB2:{x:.22,y:.62},RB: {x:.18,y:.80},
  CM1:{x:.38,y:.26},CM2:{x:.42,y:.50},CM3:{x:.38,y:.74},
  LW: {x:.46,y:.14},ST: {x:.47,y:.50},RW: {x:.46,y:.86}
};

const FORMATIONS={
  '4-3-3':{
    labels:{LB:'LB',CB1:'CB',CB2:'CB',RB:'RB',CM1:'LCM',CM2:'CM',CM3:'RCM',LW:'LW',ST:'ST',RW:'RW'},
    coords:{GK:{x:.05,y:.50},LB:{x:.18,y:.18},CB1:{x:.22,y:.38},CB2:{x:.22,y:.62},RB:{x:.18,y:.82},CM1:{x:.38,y:.26},CM2:{x:.42,y:.50},CM3:{x:.38,y:.74},LW:{x:.52,y:.16},ST:{x:.56,y:.50},RW:{x:.52,y:.84}}
  },
  '4-4-2':{
    labels:{LB:'LB',CB1:'CB',CB2:'CB',RB:'RB',CM1:'LM',CM2:'LCM',CM3:'RCM',LW:'RM',ST:'ST1',RW:'ST2'},
    coords:{GK:{x:.05,y:.50},LB:{x:.18,y:.18},CB1:{x:.22,y:.38},CB2:{x:.22,y:.62},RB:{x:.18,y:.82},CM1:{x:.38,y:.18},CM2:{x:.42,y:.38},CM3:{x:.42,y:.62},LW:{x:.38,y:.82},ST:{x:.56,y:.40},RW:{x:.56,y:.60}}
  },
  '4-1-3-2':{
    labels:{LB:'LB',CB1:'CB',CB2:'CB',RB:'RB',CM1:'DM',CM2:'LAM',CM3:'CAM',LW:'RAM',ST:'ST1',RW:'ST2'},
    coords:{GK:{x:.05,y:.50},LB:{x:.18,y:.18},CB1:{x:.22,y:.38},CB2:{x:.22,y:.62},RB:{x:.18,y:.82},CM1:{x:.34,y:.50},CM2:{x:.46,y:.24},CM3:{x:.48,y:.50},LW:{x:.46,y:.76},ST:{x:.58,y:.40},RW:{x:.58,y:.60}}
  },
  '3-5-2':{
    labels:{LB:'LCB',CB1:'CB',CB2:'RCB',RB:'LWB',CM1:'LCM',CM2:'CM',CM3:'RCM',LW:'RWB',ST:'ST1',RW:'ST2'},
    coords:{GK:{x:.05,y:.50},LB:{x:.20,y:.24},CB1:{x:.20,y:.50},CB2:{x:.20,y:.76},RB:{x:.34,y:.12},CM1:{x:.38,y:.30},CM2:{x:.42,y:.50},CM3:{x:.38,y:.70},LW:{x:.34,y:.88},ST:{x:.56,y:.40},RW:{x:.56,y:.60}}
  }
};
let activeHomeFormation='4-3-3';
let FORMATION_COORDS=JSON.parse(JSON.stringify(FORMATIONS['4-3-3'].coords));
let HOME_SLOT_ASSIGN={};
function formationCoordsFor(side,key){
  const fm=(side==='h'?FORMATIONS[activeHomeFormation].coords:FORMATIONS['4-3-3'].coords);
  return fm[key]||BF[key];
}
function fp(k,s,h){let p={...(formationCoordsFor(s==='home'?'h':'a',k)||BF[k])};if(s==='away'){p.x=1-p.x;p.y=1-p.y;}if(h===2){p.x=1-p.x;}return{x:Math.max(.03,Math.min(.97,p.x)),y:Math.max(.04,Math.min(.96,p.y))};}
function zo(k){return(POS.find(p=>p.k===k)||{z:'mid'}).z;}
function pf(n){return n.split('.')[0]||n.slice(0,2);}
function rl(r){return['R','SR','SSR'][r||0];}
function rc(r){return['#5a9898','#c8a018','#e03818'][r||0];}
function gs(p,s){return p?(p[s]||50):44;}
function showSc(id){document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));document.getElementById(id).classList.add('active');}
function cs(){say('Coming soon!');}
function say(t){const e=document.getElementById('comm');if(e)e.textContent=t;}

let selHome=null,selAway=null,HT=null,AT=null;
let hSq={},aSq={};
let homeIdx=0,awayIdx=1;
function syncTeamSelections(){
  if(awayIdx===homeIdx)awayIdx=(awayIdx+1)%TEAM_KEYS.length;
  selHome=TEAM_KEYS[homeIdx]; selAway=TEAM_KEYS[awayIdx]; HT=T[selHome]; AT=T[selAway];
  document.getElementById('hflag').textContent=HT.flag; document.getElementById('hname').textContent=HT.name.toUpperCase();
  document.getElementById('aflag').textContent=AT.flag; document.getElementById('aname').textContent=AT.name.toUpperCase();
  document.getElementById('hsubhint').textContent='Home · you';
  document.getElementById('asubhint').textContent='Away · CPU';
  document.getElementById('kickbtn').classList.toggle('rdy',!!(selHome&&selAway&&selHome!==selAway));
}
function cycleTeam(side,dir){
  if(side==='home'){
    homeIdx=(homeIdx+dir+TEAM_KEYS.length)%TEAM_KEYS.length;
    if(homeIdx===awayIdx)homeIdx=(homeIdx+dir+TEAM_KEYS.length)%TEAM_KEYS.length;
  }else{
    awayIdx=(awayIdx+dir+TEAM_KEYS.length)%TEAM_KEYS.length;
    if(awayIdx===homeIdx)awayIdx=(awayIdx+dir+TEAM_KEYS.length)%TEAM_KEYS.length;
  }
  syncTeamSelections();
}
function buildCards(){syncTeamSelections();}
buildCards();

function getHomeRosterOrdered(){ return HT ? HT.p.slice() : []; }
function posFamily(pos){
  const p=(pos||'').toUpperCase();
  if(p==='GK')return 'GK';
  if(['LB','RB','CB','DF','LIB','SW'].includes(p))return 'DEF';
  if(['DM','CM','AM','MF','CDM','CAM','LM','RM'].includes(p))return 'MID';
  if(['FW','ST','CF','SS','LW','RW'].includes(p))return 'ATT';
  return 'ANY';
}
function slotFamily(slot){
  if(slot==='GK')return 'GK';
  if(['LB','CB1','CB2','RB','LWB','RWB'].includes(slot))return 'DEF';
  if(['DM','CM1','CM2','CM3','CAM','LM','RM'].includes(slot))return 'MID';
  return 'ATT';
}
function pickRosterPlayer(roster, used, families, preferredSlots=[]){
  let p = roster.find(r=>!used.has(r.id) && preferredSlots.includes((r.pos||'').toUpperCase()));
  if(!p) p = roster.find(r=>!used.has(r.id) && families.includes(posFamily(r.pos)));
  if(!p) p = roster.find(r=>!used.has(r.id));
  if(p) used.add(p.id);
  return p;
}
function initHomeSlots(){
  if(!HT)return;
  const roster=getHomeRosterOrdered();
  const used=new Set();
  HOME_SLOT_ASSIGN={};
  const slots=Object.keys(FORMATIONS[activeHomeFormation].coords);
  slots.forEach(slot=>{
    let preferred=[];
    if(slot==='GK') preferred=['GK'];
    else if(slot==='LB') preferred=['LB','DF','LIB'];
    else if(slot==='RB') preferred=['RB','DF','LIB'];
    else if(slot==='CB1'||slot==='CB2') preferred=['CB','DF','LIB','SW'];
    else if(slot==='DM') preferred=['DM','MF','CM'];
    else if(slot==='CM1'||slot==='CM2'||slot==='CM3') preferred=['CM','MF','AM','DM'];
    else if(slot==='CAM') preferred=['AM','MF','CM'];
    else if(slot==='LM'||slot==='RM') preferred=['AM','MF','FW'];
    else if(slot==='LW'||slot==='RW') preferred=['FW','AM','MF'];
    else if(slot==='ST') preferred=['FW','ST','CF'];
    const pl=pickRosterPlayer(roster,used,[slotFamily(slot)],preferred);
    HOME_SLOT_ASSIGN[slot]=pl?pl.id:null;
  });
}
function buildFormationMenu(){
  if(!HT)return;
  const fb=document.getElementById('formationBtns');
  const se=document.getElementById('slotEditor');
  const pf=document.getElementById('teamPreviewField');
  document.getElementById('teamMenuTitle').textContent=HT.name.toUpperCase()+' · '+activeHomeFormation;
  document.getElementById('teamMenuBadge').textContent='FORMATION '+activeHomeFormation;
  fb.innerHTML='';
  Object.keys(FORMATIONS).forEach(name=>{
    const b=document.createElement('button'); b.className='tm-fbtn'+(name===activeHomeFormation?' active':''); b.textContent=name;
    b.onclick=()=>{activeHomeFormation=name; initHomeSlots(); buildFormationMenu();}; fb.appendChild(b);
  });
  se.innerHTML='';
  const labels=FORMATIONS[activeHomeFormation].labels;
  const roster=getHomeRosterOrdered();
  // Track used player IDs to prevent duplicates
  const usedIds=new Set(Object.entries(HOME_SLOT_ASSIGN)
    .filter(([sl])=>sl!==undefined)
    .map(([,id])=>id));

  Object.keys(labels).forEach(slot=>{
    const wrap=document.createElement('div'); wrap.className='tm-slot';
    const lab=document.createElement('label'); lab.textContent=slot+' · '+labels[slot];
    const sel=document.createElement('select');
    const isGKSlot=slot==='GK';
    roster.forEach(pl=>{
      // GK slot: only show GKs. Non-GK slots: only show non-GKs
      if(isGKSlot&&pl.pos!=='GK')return;
      if(!isGKSlot&&pl.pos==='GK')return;
      const opt=document.createElement('option');
      opt.value=pl.id;
      const num=Object.keys(JERSEY).indexOf(slot)+1||'?';
      opt.textContent=pl.name+' ('+pl.pos+')';
      // Disable if already used in another slot
      const assignedHere=HOME_SLOT_ASSIGN[slot]===pl.id;
      if(!assignedHere&&usedIds.has(pl.id))opt.disabled=true;
      if(assignedHere)opt.selected=true;
      sel.appendChild(opt);
    });
    sel.onchange=()=>{HOME_SLOT_ASSIGN[slot]=Number(sel.value); buildFormationMenu();};
    wrap.appendChild(lab); wrap.appendChild(sel); se.appendChild(wrap);
  });
  pf.innerHTML='';
  const half=document.createElement('div'); half.className='tm-line half'; pf.appendChild(half);
  const circle=document.createElement('div'); circle.className='tm-circle'; pf.appendChild(circle);
  const boxL=document.createElement('div'); boxL.className='tm-box'; pf.appendChild(boxL);
  const boxR=document.createElement('div'); boxR.className='tm-box r'; pf.appendChild(boxR);
  const jerseyOrder={GK:1,RB:2,LB:3,CM2:4,CB1:5,CB2:6,RW:7,CM1:8,ST:9,LW:11,CM3:6};
  Object.entries(FORMATIONS[activeHomeFormation].coords).forEach(([slot,coord])=>{
    const pid=HOME_SLOT_ASSIGN[slot]; const pl=roster.find(r=>r.id===pid) || roster.find(r=>r.pos===slot) || roster[0];
    const card=document.createElement('div'); card.className='tm-card';
    card.style.left=(coord.x*100)+'%'; card.style.top=(coord.y*100)+'%';
    const ab=document.createElement('div'); ab.className='abbr'; ab.textContent=jerseyOrder[slot]||'?';
    const nm=document.createElement('div'); nm.className='pname'; nm.textContent=pl?pl.name.split('.').pop():slot;
    card.appendChild(ab); card.appendChild(nm); pf.appendChild(card);
  });
}
function openTeamMenu(){
  if(!selHome||!selAway||selHome===selAway)return;
  initHomeSlots();
  buildFormationMenu();
  showSc('s-team');
}
function startGame(){
  if(!selHome||!selAway||!HT||!AT||selHome===selAway)return;
  hSq={};aSq={};
  const roster=HT.p.slice();
  const used=new Set();
  Object.keys(FORMATIONS[activeHomeFormation].coords).forEach(slot=>{
    const pid=HOME_SLOT_ASSIGN[slot];
    let pl=roster.find(r=>r.id===pid && !used.has(r.id));
    if(!pl) pl=roster.find(r=>!used.has(r.id));
    if(pl){ used.add(pl.id); hSq[slot]={...pl,spirit:100,cooldownUntil:0,slot:slot}; }
  });
  AT.p.forEach(p=>{aSq[p.pos]={...p,spirit:100,cooldownUntil:0,slot:p.pos};});
  document.getElementById('htn').textContent=HT.name;
  document.getElementById('atn').textContent=AT.name;
  document.getElementById('h-flag-hud').textContent=HT.flag;
  document.getElementById('a-flag-hud').textContent=AT.flag;
  initMatch();
}

const CV=document.getElementById('C');const cx=CV.getContext('2d');
let W=0,H=0,PP={h:{},a:{}},PT={h:{},a:{}},ball={x:0,y:0,tx:0,ty:0},trail=[];
const CR=18,CDms=4500,CS=()=>W*.00023,DS=()=>W*.00030,IR=()=>W*.042,PC=()=>W*.08;
const MAX_CARRIER_STEP=()=>Math.max(1.2,W*.0032); // carrier slightly slower — has the ball
const MAX_DEF_STEP=()=>Math.max(1.5,W*.0042);      // chaser faster
const MAX_OFFBALL_STEP=()=>Math.max(0.8,W*.0018);  // off-ball capped — no snap-back rush
function moveTowards(cur,targetX,targetY,ease,maxStep){
  const nx=cur.x+(targetX-cur.x)*ease;
  const ny=cur.y+(targetY-cur.y)*ease;
  const dx=nx-cur.x,dy=ny-cur.y;
  const d=Math.hypot(dx,dy);
  if(d>maxStep && d>0){
    cur.x += dx/d*maxStep;
    cur.y += dy/d*maxStep;
  }else{
    cur.x = nx;
    cur.y = ny;
  }
}

// rsz defined below in fullscreen block
function sq(s){return s==='h'?hSq:aSq;}
function ocd(s,k){const p=sq(s)[k];return p&&Date.now()<(p.cooldownUntil||0);}
function cdf(s,k){const p=sq(s)[k];if(!p||!p.cooldownUntil)return 0;return Math.max(0,(p.cooldownUntil-Date.now())/CDms);}
function scd(s,k){const p=sq(s)[k];if(p)p.cooldownUntil=Date.now()+CDms;}
function iPos(){
  ['h','a'].forEach(s=>{const q=sq(s);PP[s]={};PT[s]={};
    POS.forEach(({k})=>{if(!q[k])return;const p=fp(k,s==='h'?'home':'away',G.half);PP[s][k]={x:p.x*W,y:p.y*H};PT[s][k]={x:p.x*W,y:p.y*H};});
  });ball={x:W/2,y:H/2,tx:W/2,ty:H/2};trail=[];
}
let G={half:1,tL:2700,hG:0,aG:0,poss:'h',ck:null,chk:null,mom:50,duels:0,shots:0,hP:0,tP:0,phase:'idle',mt:null,di:null,D:{},pm:false,kickoffUntil:0};
function setC(k,s){G.poss=s;G.ck=k;G.tP++;if(s==='h')G.hP++;updP();updH();}
// ═══════════════════════════════════════════════════════════════
// MOVEMENT ENGINE v2 — Possession State Machine
// Based on CT Dream Team reverse spec:
// - Ball carrier is the ONLY real actor
// - Roles assigned each possession change: primary engager, cover, support runners, shape holders
// - Only 4 players move dynamically; rest lerp slowly to formation
// - Lane-based progression, not free coordinate simulation
// ═══════════════════════════════════════════════════════════════


// Tactical lanes (normalized Y positions)
const LANES={FAR_LEFT:.12,LEFT:.28,CENTER_LEFT:.38,CENTER:.50,CENTER_RIGHT:.62,RIGHT:.72,FAR_RIGHT:.88};
const LANE_KEYS=['FAR_LEFT','LEFT','CENTER_LEFT','CENTER','CENTER_RIGHT','RIGHT','FAR_RIGHT'];
const ZONES={DEF:0.22,MID:0.5,ATT:0.78};

let ROLES={engager:null,cover:null,blocker:null,runner1:null,runner2:null};

function clamp(v,min,max){return Math.max(min,Math.min(max,v));}
function lerp(a,b,t){return a+(b-a)*t;}
function dist(a,b){return Math.hypot(a.x-b.x,a.y-b.y);}
function dirFor(side){return ((side==='h')===(G.half===1))?1:-1;}
function goalXFor(side){return dirFor(side)>0?W*.93:W*.07;}
function ownGoalXFor(side){return dirFor(side)>0?W*.07:W*.93;}
function progressFor(side,p){return dirFor(side)>0?(p.x/W):(1-p.x/W);}
function laneValueByKey(k){return LANES[k]??LANES.CENTER;}
function laneKeyForY(y){
  const n=clamp(y/H,0,1);
  let best='CENTER',bestD=Infinity;
  for(const key of LANE_KEYS){
    const d=Math.abs(laneValueByKey(key)-n);
    if(d<bestD){bestD=d;best=key;}
  }
  return best;
}
function zoneForX(side,x){
  const prog=dirFor(side)>0?(x/W):(1-x/W);
  if(prog<.28)return 'def';
  if(prog<.62)return 'mid';
  return 'att';
}
function validOutfieldKeys(side){
  return Object.keys(sq(side)).filter(k=>sq(side)[k]&&k!=='GK'&&PP[side][k]);
}
function nearestDefenderDistance(side,p,ignoreGK=true){
  const other=side==='h'?'a':'h';
  let best=Infinity;
  Object.keys(sq(other)).forEach(k=>{
    if(!sq(other)[k]||!PP[other][k])return;
    if(ignoreGK&&k==='GK')return;
    const d=Math.hypot(PP[other][k].x-p.x,PP[other][k].y-p.y);
    if(d<best)best=d;
  });
  return best===Infinity?W*.4:best;
}
function openPassLaneScore(side,fromKey,toKey){
  const from=PP[side][fromKey],to=PP[side][toKey];
  if(!from||!to)return -999;
  const dx=to.x-from.x,dy=to.y-from.y,len=Math.hypot(dx,dy);
  if(len<W*.05)return -999;
  const nx=dx/len,ny=dy/len;
  const other=side==='h'?'a':'h';
  let pressure=0;
  Object.keys(sq(other)).forEach(k=>{
    if(!sq(other)[k]||k==='GK'||!PP[other][k])return;
    const op=PP[other][k];
    const t=((op.x-from.x)*nx+(op.y-from.y)*ny)/len;
    if(t<=0||t>=1)return;
    const cx=from.x+dx*t,cy=from.y+dy*t;
    const d=Math.hypot(op.x-cx,op.y-cy);
    pressure+=clamp(1-d/(W*.09),0,1);
  });
  const progBoost=(progressFor(side,to)-progressFor(side,from))*2.2;
  const spacing=clamp(nearestDefenderDistance(side,to)/(W*.18),0,2);
  return progBoost+spacing-pressure;
}
function bestTeammateFor(side,carrierKey,mode='pass'){
  const ks=validOutfieldKeys(side).filter(k=>k!==carrierKey&&!ocd(side,k));
  if(!ks.length)return null;
  let best=null,bestScore=-Infinity;
  const carrier=PP[side][carrierKey];
  ks.forEach(k=>{
    const p=PP[side][k];if(!p)return;
    let score=openPassLaneScore(side,carrierKey,k);
    const prog=progressFor(side,p);
    score+=prog*2.6;
    score+=zo(k)==='att'?1.2:zo(k)==='mid'?.7:.25;
    const d=Math.hypot(carrier.x-p.x,carrier.y-p.y);
    if(mode==='one-two')score-=Math.abs(d-W*.16)/(W*.08);
    else score-=Math.abs(d-W*.22)/(W*.16)*.5;
    if(isOffside(side,k))score-=5;
    if(score>bestScore){bestScore=score;best=k;}
  });
  return best;
}
function roleScoreDefender(side,key,cp,type){
  const p=PP[side][key];if(!p)return -1e9;
  const dir=dirFor(side==='h'?'a':'h');
  const goalX=ownGoalXFor(side);
  const goalside = dir>0 ? (p.x<=cp.x?1:0) : (p.x>=cp.x?1:0);
  const laneDiff=Math.abs(laneValueByKey(laneKeyForY(p.y))-laneValueByKey(laneKeyForY(cp.y)));
  const d=dist(p,cp);
  const centralBias=1-Math.abs(p.y/H-.5);
  const shotDanger=1-Math.abs(cp.y/H-.5);
  if(type==='engager')return 4.2-(d/(W*.12))+goalside*1.6-laneDiff*2.4-(ocd(side,key)?5:0);
  if(type==='cover')return 3.8-goalside*-.8-(Math.abs((goalX+p.x)/2-cp.x)/(W*.18))+centralBias*.8-laneDiff*1.4-(d/(W*.24));
  return 3.5+shotDanger*1.3+centralBias*1.1-(Math.abs(p.x-goalX)/(W*.20))-laneDiff*1.6-(d/(W*.35));
}
function roleScoreRunner(side,key,cp,slot){
  const p=PP[side][key];if(!p)return -1e9;
  const prog=progressFor(side,p);
  const carrierProg=progressFor(side,cp);
  const spacing=nearestDefenderDistance(side,p)/(W*.12);
  const width=1-Math.abs((p.y/H)-.5);
  let score=prog*3.2+spacing*1.4;
  if(slot===1){
    score-=Math.abs(prog-(carrierProg+.18))*3.4;
    score+=zo(key)==='att'?1.2:.4;
  }else{
    score-=Math.abs(prog-(carrierProg+.08))*2.1;
    score+=(width<.55?1.1:.3);
  }
  return score-(ocd(side,key)?4:0);
}

function assignRoles(){
  const s=G.poss,ds=s==='h'?'a':'h';
  const cp=PP[s][G.ck];
  if(!cp){ROLES={engager:null,cover:null,blocker:null,runner1:null,runner2:null};return;}

  const defKeys=validOutfieldKeys(ds).filter(k=>!ocd(ds,k));
  const used=new Set();
  const pickDef=(type)=>{
    let best=null,bestScore=-Infinity;
    defKeys.forEach(k=>{
      if(used.has(k))return;
      const score=roleScoreDefender(ds,k,cp,type);
      if(score>bestScore){bestScore=score;best=k;}
    });
    if(best)used.add(best);
    return best;
  };

  ROLES.engager=pickDef('engager');
  ROLES.cover=pickDef('cover');
  ROLES.blocker=pickDef('blocker');

  const atkKeys=validOutfieldKeys(s).filter(k=>k!==G.ck&&!ocd(s,k));
  let r1=null,r2=null,b1=-Infinity,b2=-Infinity;
  atkKeys.forEach(k=>{
    const s1=roleScoreRunner(s,k,cp,1);
    if(s1>b1){b1=s1;r1=k;}
  });
  atkKeys.forEach(k=>{
    if(k===r1)return;
    const s2=roleScoreRunner(s,k,cp,2);
    if(s2>b2){b2=s2;r2=k;}
  });
  ROLES.runner1=r1;ROLES.runner2=r2;G.chk=ROLES.engager;
}

function carrierAdvanceVector(side,cp){
  const dir=dirFor(side);
  const goalX=goalXFor(side);
  let tx=goalX,ty=cp.y;
  if(G_moveTarget&&side==='h'){
    tx=clamp(G_moveTarget.x,W*.05,W*.95);
    ty=clamp(G_moveTarget.y,H*.08,H*.92);
  }else{
    const pressure=nearestDefenderDistance(side,cp)/(W*.16);
    const laneBias=ROLES.runner1&&PP[side][ROLES.runner1]?PP[side][ROLES.runner1].y:cp.y;
    ty=lerp(cp.y,laneBias,clamp(.12+(1-pressure)*.2,0,.32));
  }
  const dx=tx-cp.x,dy=ty-cp.y;
  const len=Math.hypot(dx,dy)||1;
  const pressureFactor=clamp(nearestDefenderDistance(side,cp)/(W*.20),.55,1.15);
  return {x:(dx/len)*CS()*pressureFactor*1.08, y:(dy/len)*CS()*pressureFactor*.92};
}

function tick(){
  const s=G.poss,ds=s==='h'?'a':'h';
  const cp=PP[s][G.ck];if(!cp)return;
  const dir=dirFor(s);

  const mv=carrierAdvanceVector(s,cp);
  cp.x=clamp(cp.x+clamp(mv.x,-MAX_CARRIER_STEP(),MAX_CARRIER_STEP()),W*.03,W*.97);
  cp.y=clamp(cp.y+clamp(mv.y,-MAX_CARRIER_STEP(),MAX_CARRIER_STEP()),H*.05,H*.95);
  if(G_moveTarget&&Math.hypot(cp.x-G_moveTarget.x,cp.y-G_moveTarget.y)<W*.03)G_moveTarget=null;
  ball.tx=cp.x;ball.ty=cp.y;

  const progress=progressFor(s,cp);
  const centrality=1-Math.abs(cp.y/H-.5);
  const shotGate=progress>.79 && centrality>.42;
  if(shotGate&&G.phase==='moving'){
    G.phase='pass_anim';
    clearInterval(G.di);
    animateBallTo(cp.x,cp.y,goalXFor(s),H*.5,()=>{G.phase='idle';opDuel(true);},16);
    return;
  }

  if(ROLES.engager&&!ocd(ds,ROLES.engager)){
    const dp=PP[ds][ROLES.engager];
    if(dp){
      const targetX=cp.x-dir*W*.02;
      const targetY=cp.y;
      const dx=targetX-dp.x,dy=targetY-dp.y;
      const dd=Math.hypot(dx,dy)||1;
      const closeFactor=clamp(dist(dp,cp)/(W*.14),.6,1.2);
      dp.x=clamp(dp.x+clamp(dx/dd*DS()*closeFactor,-MAX_DEF_STEP(),MAX_DEF_STEP()),W*.03,W*.97);
      dp.y=clamp(dp.y+clamp(dy/dd*DS()*closeFactor,-MAX_DEF_STEP(),MAX_DEF_STEP()),H*.05,H*.95);
      if(Date.now()>=(G.kickoffUntil||0) && dist(dp,cp)<IR()){G.chk=ROLES.engager;opDuel(false);return;}
    }
  }

  // Any defender within tackle range also triggers duel — prevents carrier running through defenders
  if(Date.now()>=(G.kickoffUntil||0)){
    const defQ=sq(ds);
    for(const k of Object.keys(defQ)){
      if(!defQ[k]||k===ROLES.engager||k==='GK'||ocd(ds,k))continue;
      const dp=PP[ds][k];if(!dp)continue;
      if(dist(dp,cp)<IR()*.85){
        ROLES.engager=k;G.chk=k;
        opDuel(false);return;
      }
    }
  }

  moveOffBall(s,ds);
}

function moveOffBall(s,ds){
  const cp=PP[s][G.ck];if(!cp)return;
  const dir=dirFor(s);
  const carrierProg=progressFor(s,cp);
  // Stagger offset per player key so they don't all move in sync
  const stagger={'GK':1,'LB':.82,'CB1':.76,'CB2':.71,'RB':.86,'CM1':.68,'CM2':.60,'CM3':.64,'LW':.55,'ST':.50,'RW':.58};
  const sg=k=>stagger[k]??0.6;

  Object.keys(sq(s)).forEach(k=>{
    if(!sq(s)[k]||k===G.ck||!PP[s][k])return;
    const cur=PP[s][k];
    const p=fp(k,s==='h'?'home':'away',G.half);
    if(k==='GK'){cur.x+=(p.x*W-cur.x)*.03;cur.y+=(p.y*H-cur.y)*.03;return;}
    if(ocd(s,k)){cur.x+=(p.x*W-cur.x)*.010;cur.y+=(p.y*H-cur.y)*.010;return;}
    let tx=p.x*W,ty=p.y*H,spd=.008*sg(k);
    const progBase=clamp(carrierProg-(zo(k)==='def'?.22:zo(k)==='mid'?.08:-.04),.12,.9);
    if(k===ROLES.runner1){
      tx=(dir>0?clamp(cp.x+W*.18,W*.16,W*.9):clamp(cp.x-W*.18,W*.1,W*.84));
      ty=lerp(p.y*H,cp.y,.15); spd=.016*sg(k);
    }else if(k===ROLES.runner2){
      tx=(dir>0?clamp(cp.x+W*.08,W*.12,W*.86):clamp(cp.x-W*.08,W*.14,W*.88));
      const wide=(p.y<.5?Math.max(p.y-.06,.08):Math.min(p.y+.06,.92))*H;
      ty=lerp(wide,cp.y,.06); spd=.013*sg(k);
    }else if(zo(k)==='mid'){
      tx=(dir>0?progBase:1-progBase)*W;
      ty=lerp(p.y*H,cp.y,.10); spd=.011*sg(k);
    }else if(zo(k)==='def'){
      const backProg=clamp(carrierProg-.28,.05,.56);
      tx=(dir>0?backProg:1-backProg)*W;
      ty=lerp(p.y*H,cp.y,.05); spd=.008*sg(k);
    }
    moveTowards(cur,tx,ty,spd,MAX_OFFBALL_STEP()*sg(k));
  });

  const dangerProg=progressFor(s,cp);
  Object.keys(sq(ds)).forEach(k=>{
    if(!sq(ds)[k]||!PP[ds][k])return;
    if(k===ROLES.engager)return;
    const cur=PP[ds][k];
    const p=fp(k,ds==='h'?'home':'away',G.half);
    if(k==='GK'){cur.x+=(p.x*W-cur.x)*.03;cur.y+=(p.y*H-cur.y)*.03;return;}
    if(ocd(ds,k)){cur.x+=(p.x*W-cur.x)*.010;cur.y+=(p.y*H-cur.y)*.010;return;}
    let tx=p.x*W,ty=p.y*H,spd=.008*sg(k);
    if(k===ROLES.cover){
      tx=lerp(p.x*W,cp.x-dir*W*.14,.5);
      ty=lerp(p.y*H,cp.y,.28); spd=.014*sg(k);
    }else if(k===ROLES.blocker){
      tx=lerp(p.x*W,ownGoalXFor(ds)+dirFor(ds)*W*.11,.45);
      ty=lerp(H*.5,cp.y,.18); spd=.011*sg(k);
    }else if(zo(k)==='mid'){
      const prog=clamp(dangerProg-.12,.18,.7);
      tx=(dir>0?1-prog:prog)*W;
      ty=lerp(p.y*H,cp.y,.14); spd=.010*sg(k);
    }else if(zo(k)==='def'){
      const line=clamp(dangerProg-.32,.08,.42);
      tx=(dir>0?1-line:line)*W;
      ty=lerp(p.y*H,cp.y,.06); spd=.008*sg(k);
    }
    moveTowards(cur,tx,ty,spd,MAX_OFFBALL_STEP()*sg(k));
  });
}

function pickCarrierAfterWin(side,winnerKey){
  const q=sq(side);
  if(winnerKey&&q[winnerKey]&&!ocd(side,winnerKey))return winnerKey;
  const ks=validOutfieldKeys(side).filter(k=>!ocd(side,k));
  if(!ks.length)return Object.keys(q).find(k=>q[k]&&k!=='GK')||'CM2';
  let best=ks[0],bestScore=-Infinity;
  ks.forEach(k=>{
    const p=PP[side][k];if(!p)return;
    const score=progressFor(side,p)*3 + nearestDefenderDistance(side,p)/(W*.15) + (zo(k)==='mid'?0.5:zo(k)==='att'?1:0);
    if(score>bestScore){bestScore=score;best=k;}
  });
  return best;
}

function asnC(){assignRoles();}

let raf=null;
function startAnim(){
  cancelAnimationFrame(raf);
  (function loop(){
    if(G.phase==='moving')tick();
    if(G.phase==='pass_anim')tickBallTravel();
    ball.x+=(ball.tx-ball.x)*.12;ball.y+=(ball.ty-ball.y)*.12;
    trail.push({x:ball.x,y:ball.y,a:.6});
    if(trail.length>24)trail.shift();
    trail.forEach(t=>t.a*=.88);
    draw();raf=requestAnimationFrame(loop);
  })();
}

function draw(){
  cx.clearRect(0,0,W,H);
  for(let i=0;i<10;i++){cx.fillStyle=i%2===0?'#163618':'#193e1c';cx.fillRect(i*(W/10),0,W/10,H);}
  cx.strokeStyle='rgba(255,255,255,.16)';cx.lineWidth=1.5;
  const mg=16;cx.strokeRect(mg,mg,W-mg*2,H-mg*2);
  cx.beginPath();cx.moveTo(W/2,mg);cx.lineTo(W/2,H-mg);cx.stroke();
  const cr2=Math.min(W,H)*.09;cx.beginPath();cx.arc(W/2,H/2,cr2,0,Math.PI*2);cx.stroke();
  cx.beginPath();cx.arc(W/2,H/2,3,0,Math.PI*2);cx.fillStyle='rgba(255,255,255,.22)';cx.fill();
  const bw=W*.13,bh=H*.52;cx.strokeRect(mg,H/2-bh/2,bw,bh);cx.strokeRect(W-mg-bw,H/2-bh/2,bw,bh);
  cx.strokeRect(mg,H/2-bh*.24,bw*.44,bh*.48);cx.strokeRect(W-mg-bw*.44,H/2-bh*.24,bw*.44,bh*.48);
  const gw=mg+5,gh=H*.17;cx.fillStyle='rgba(255,255,255,.04)';
  cx.fillRect(mg-gw,H/2-gh/2,gw,gh);cx.strokeRect(mg-gw,H/2-gh/2,gw,gh);
  cx.fillRect(W-mg,H/2-gh/2,gw,gh);cx.strokeRect(W-mg,H/2-gh/2,gw,gh);
  trail.forEach(t=>{cx.beginPath();cx.arc(t.x,t.y,4,0,Math.PI*2);cx.fillStyle=`rgba(255,215,60,${t.a*.5})`;cx.fill();});
  if(G_moveTarget&&G.poss==='h'&&G.phase==='moving'){
    cx.beginPath();cx.arc(G_moveTarget.x,G_moveTarget.y,10,0,Math.PI*2);
    cx.strokeStyle='rgba(40,130,240,.7)';cx.lineWidth=2;cx.setLineDash([4,3]);cx.stroke();cx.setLineDash([]);
    cx.beginPath();cx.arc(G_moveTarget.x,G_moveTarget.y,3,0,Math.PI*2);
    cx.fillStyle='rgba(40,130,240,.9)';cx.fill();
  }
  drawT('a');drawT('h');
  cx.beginPath();cx.arc(ball.x,ball.y+5,9,0,Math.PI*2);cx.fillStyle='rgba(0,0,0,.3)';cx.fill();
  cx.shadowColor='rgba(255,215,60,.9)';cx.shadowBlur=18;
  cx.beginPath();cx.arc(ball.x,ball.y,10,0,Math.PI*2);cx.fillStyle='#fff';cx.fill();
  cx.strokeStyle='rgba(240,192,64,.9)';cx.lineWidth=2;cx.stroke();cx.shadowBlur=0;
  cx.beginPath();cx.arc(ball.x,ball.y,2.5,0,Math.PI*2);cx.fillStyle='#333';cx.fill();
}

// Jersey numbers by position key
const JERSEY={GK:1,LB:3,CB1:5,CB2:6,RB:2,CM1:8,CM2:4,CM3:6,LW:11,ST:9,RW:7};
function jerseyNum(k){return JERSEY[k]||'?';}

function drawT(s){
  const fill=s==='h'?'#1258b0':'#b81616';const brd=s==='h'?'#2882f0':'#f03030';
  const q=sq(s);
  Object.entries(q).forEach(([k,pl])=>{
    if(!pl)return;const p=PP[s][k];if(!p)return;
    const iC=G.poss===s&&G.ck===k;const iCh=G.poss!==s&&G.chk===k;
    const r=CR+(iC?4:0);
    cx.beginPath();cx.arc(p.x,p.y,r,0,Math.PI*2);
    cx.fillStyle=iC?fill:iCh?'rgba(255,255,255,.10)':fill;
    // carrier gets gold ring
    if(iC){cx.globalAlpha=1;cx.fill();cx.lineWidth=4;cx.strokeStyle='#ffd54a';}
    else{cx.globalAlpha=iCh?.7:1;cx.fill();cx.lineWidth=2;cx.strokeStyle=brd;}
    cx.stroke();cx.globalAlpha=1;
    if(k===ROLES.runner1||k===ROLES.runner2){cx.beginPath();cx.arc(p.x,p.y,r+7,0,Math.PI*2);cx.strokeStyle='rgba(255,255,255,.18)';cx.lineWidth=1.2;cx.stroke();}
    if(k===ROLES.cover||k===ROLES.blocker){cx.beginPath();cx.arc(p.x,p.y,r+5,0,Math.PI*2);cx.strokeStyle='rgba(255,255,255,.12)';cx.lineWidth=1;cx.stroke();}
    // Jersey number (big, centered)
    cx.fillStyle=iC?'#06080e':'#fff';
    cx.font=`bold ${iC?13:12}px Orbitron,sans-serif`;
    cx.textAlign='center';cx.textBaseline='middle';
    cx.fillText(jerseyNum(k),p.x,p.y+1);
  });
}

let G_moveTarget=null;
function manualShot(){ if(G.poss!=='h'||G.phase!=='moving'||!G.ck) return; G_moveTarget=null; opDuel(true); }
function togglePassMode(){ if(G.poss!=='h'||G.phase!=='moving'||!G.ck) return; G.pm=!G.pm; document.getElementById('pass-banner').style.display=G.pm?'block':'none'; document.getElementById('pass-banner').textContent='PASS MODE — CLICK A PLAYER'; if(G.pm) say('Pass mode enabled.'); }

CV.addEventListener('click',e=>{
  if(G.poss!=='h')return;
  const rect=CV.getBoundingClientRect();
  const mx=(e.clientX-rect.left)*(W/rect.width);
  const my=(e.clientY-rect.top)*(H/rect.height);

  if(G.pm){
    for(const k of Object.keys(hSq)){
      if(k===G.ck||!hSq[k])continue;const p=PP.h[k];if(!p)continue;
      if(Math.hypot(p.x-mx,p.y-my)<CR+12){
        G.D.pk=k;G.pm=false;
        document.getElementById('pass-banner').style.display='none';
        document.getElementById('duel-ov').classList.add('show');
        chkRdy();say((G.D.ak==='one-two'?'Wall pass':'Pass')+' to '+hSq[k].name+' — GO!');return;
      }
    }
    return;
  }

  if(G.phase!=='moving')return;

  for(const k of Object.keys(hSq)){
    if(k===G.ck||!hSq[k])continue;const p=PP.h[k];if(!p)continue;
    if(Math.hypot(p.x-mx,p.y-my)<CR+10){
      if(isOffside('h',k)){say('OFFSIDE! '+hSq[k].name+' is beyond the line.');return;}
      iPas(k);return;
    }
  }

  G_moveTarget={x:mx,y:my};
  say('Carrier redirected.');
});

function isOffside(side,receiverKey){
  const defSide=side==='h'?'a':'h';
  const receiver=PP[side][receiverKey], carrier=PP[side][G.ck]; if(!receiver||!carrier) return false;
  const dir=dirFor(side);
  const inOpponentHalf=dir>0?(receiver.x>W*.5):(receiver.x<W*.5);
  if(!inOpponentHalf) return false;
  const aheadOfBall = dir>0 ? receiver.x > carrier.x + W*.015 : receiver.x < carrier.x - W*.015;
  if(!aheadOfBall) return false;
  const defXs=Object.keys(sq(defSide)).filter(k=>sq(defSide)[k]&&PP[defSide][k]&&k!=='GK').map(k=>PP[defSide][k].x);
  if(defXs.length<2) return false;
  defXs.sort((a,b)=>a-b);
  const secondLast = dir>0 ? defXs[defXs.length-2] : defXs[1];
  const line = dir>0 ? Math.max(secondLast, carrier.x) : Math.min(secondLast, carrier.x);
  const buffer = W*0.012;
  return dir>0 ? receiver.x > line + buffer : receiver.x < line - buffer;
}

let ballTravel={active:false,fx:0,fy:0,tx:0,ty:0,progress:0,duration:60,onArrive:null};
function animateBallTo(fromX,fromY,toX,toY,onArrive,duration){ballTravel={active:true,fx:fromX,fy:fromY,tx:toX,ty:toY,progress:0,duration:duration||50,onArrive};G.phase='pass_anim';}
function tickBallTravel(){
  ballTravel.progress++;
  const t=Math.min(1,ballTravel.progress/ballTravel.duration);
  const ease=t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2;
  ball.x=ballTravel.fx+(ballTravel.tx-ballTravel.fx)*ease;
  ball.y=ballTravel.fy+(ballTravel.ty-ballTravel.fy)*ease;
  ball.tx=ball.x;ball.ty=ball.y;
  if(t>=1){ballTravel.active=false;if(ballTravel.onArrive)ballTravel.onArrive();}
}

function iPas(tk){
  const side='h';
  const fr=hSq[G.ck],fp2=PP.h[G.ck],tp=PP.h[tk];if(!fp2||!tp)return;
  const ic=chkInt(fp2,tp,gs(fr,'tec'));
  if(ic){
    const iPos=PP.a[ic]||tp;
    say((fr?fr.name:'—')+' pass cut by '+sq('a')[ic].name+'!');
    animateBallTo(fp2.x,fp2.y,iPos.x,iPos.y,()=>{
      G.poss='a';G.ck=ic;G.tP++;if(PP.a[ic]){ball.x=PP.a[ic].x;ball.y=PP.a[ic].y;ball.tx=ball.x;ball.ty=ball.y;}
      updP();G.phase='idle';
      setTimeout(()=>{asnC();G.phase='moving';},Math.max(1200,Math.min(3000,nearestOpponentDist('a',ic)/(W*.15)*1800)));
    },20);
  } else {
    say((fr?fr.name:'—')+' → '+(hSq[tk]?hSq[tk].name:'—'));
    animateBallTo(fp2.x,fp2.y,tp.x,tp.y,()=>{
      setC(tk,'h'); ball.x=tp.x;ball.y=tp.y;ball.tx=tp.x;ball.ty=tp.y;
      G.phase='idle';
      setTimeout(()=>{asnC();G.phase='moving';if(G.poss==='h')document.getElementById('passhint').style.display='block';},Math.max(900,Math.min(2500,nearestOpponentDist('h',tk)/(W*.15)*1600)));
    },18);
  }
}

function nearestOpponentDist(poss,carrierKey){
  const defSide=poss==='h'?'a':'h';
  const cp=PP[poss][carrierKey];if(!cp)return W*.3;
  let minD=Infinity;
  Object.keys(sq(defSide)).forEach(k=>{
    if(!sq(defSide)[k]||k==='GK'||ocd(defSide,k)||!PP[defSide][k])return;
    minD=Math.min(minD,Math.hypot(PP[defSide][k].x-cp.x,PP[defSide][k].y-cp.y));
  });
  return minD===Infinity?W*.3:minD;
}

function chkInt(fp2,tp,pt){
  const dx=tp.x-fp2.x,dy=tp.y-fp2.y,len=Math.hypot(dx,dy);
  if(len<W*0.07)return null;
  const nx=dx/len,ny=dy/len;
  const dir=dirFor(G.poss);
  const isBackward=dir>0?(dx<-W*0.04):(dx>W*0.04);
  if(isBackward)return null;
  const cor=W*0.024;
  let best=null,bc=0;
  Object.entries(aSq).forEach(([k,pl])=>{
    if(!pl||k==='GK'||ocd('a',k)||!PP.a[k])return;
    const ap=PP.a[k];
    const t2=((ap.x-fp2.x)*nx+(ap.y-fp2.y)*ny)/len;
    if(t2<0.12||t2>0.88)return;
    const cx2=fp2.x+t2*dx,cy2=fp2.y+t2*dy;
    const d=Math.hypot(ap.x-cx2,ap.y-cy2);
    if(d<cor){
      const chance=clamp((gs(pl,'tec')-pt+18)/180,0,.28)*(1-d/cor);
      if(chance>bc){bc=chance;best=k;}
    }
  });
  return (best&&Math.random()<bc)?best:null;
}

function opDuel(isShot){
  if(!isShot&&(G.phase==='duel'||G.phase==='duel_result'))return;
  if(isShot){clearInterval(G.di);closeDuel();}
  G.phase='duel';G.pm=false;document.getElementById('passhint').style.display='none';document.getElementById('pass-banner').style.display='none';
  const as=G.poss,ds=as==='h'?'a':'h';
  const carrier=sq(as)[G.ck];const dk=isShot?'GK':(G.chk||Object.keys(sq(ds)).find(k=>sq(ds)[k]));
  const def=sq(ds)[dk];
  G.D={carrier,def,dk,as,ds,isShot,ak:null,pk:null,defA:null};
  const zL={gk:'BUILD-UP',def:'DEFENSIVE THIRD',mid:'MIDFIELD',att:'ATTACKING THIRD'};
  const z=isShot?'att':zo(G.ck);document.getElementById('dzone').textContent=isShot?'GOAL ATTEMPT':(zL[z]||'DUEL');
  const homeLeft=(G.half===1),leftSide=homeLeft?'h':'a';
  const leftPl=leftSide===as?carrier:def,rightPl=leftSide===as?def:carrier;
  const leftRole=leftSide===as?'ATTACKER':'DEFENDER',rightRole=leftSide===as?'DEFENDER':'ATTACKER';
  fCard('a',leftPl,leftSide,leftRole); fCard('d',rightPl,leftSide==='h'?'a':'h',rightRole);
  const ballEl=document.getElementById('dp-ball'); if(ballEl)ballEl.className='dp-ball'+(as===leftSide?' show':'');
  bldA(carrier,isShot); bldD(def,ds,isShot);
  document.getElementById('di').textContent=as==='h'?'CHOOSE ATTACK (30s)':ds==='h'?'CHOOSE DEFENCE (30s)':'AI DUEL';
  document.getElementById('dcfm').classList.remove('rdy'); document.getElementById('duel-res').classList.remove('show');
  document.getElementById('duel-ov').classList.add('show');
  const vs=document.getElementById('dvs');vs.classList.remove('show');void vs.offsetWidth;vs.classList.add('show');
  startCD(); if(as==='a')setTimeout(aiAtk,300); if(ds==='a')setTimeout(aiDef,250);
}

function fCard(role,pl,s,displayRole){
  const p=role==='a'?'dpa-':'dpd-';
  const tf=s==='h'?'#1258b0':'#b81616',tl=s==='h'?'#2882f0':'#f03030',tb=s==='h'?'rgba(30,114,220,.5)':'rgba(220,32,32,.5)',rcol=rc(pl?.rar||1);
  document.getElementById(p+'c').style.cssText=`background:linear-gradient(160deg,${tf}66 0%,#0a0e18 100%);border-color:${tb}`;
  document.getElementById(p+'av').style.cssText=`background:${tf};border-color:${tl};color:#fff`;
  document.getElementById(p+'av').textContent=pl?pf(pl.name):'?';
  document.getElementById(p+'nm').textContent=pl?pl.name.split('.').pop():'—';
  document.getElementById(p+'ps').textContent=pl?pl.pos:'—'; document.getElementById(p+'ps').style.color=tl;
  document.getElementById(p+'r').textContent=rl(pl?.rar||1); document.getElementById(p+'r').style.color=rcol;
  const sp=pl?Math.round(pl.spirit??100):100,efEl=document.getElementById(p+'ef'),evEl=document.getElementById(p+'ev');
  if(efEl){efEl.style.width=sp+'%';efEl.style.background=sp>50?'#44c8ff':sp>25?'#f0c040':'#dc2020';}
  if(evEl){evEl.textContent=sp;evEl.style.color=sp>50?'#44c8ff':sp>25?'#f0c040':'#dc2020';}
  const rn=document.getElementById(role==='a'?'dpa-role':'dpd-role');
  if(rn){rn.textContent=(displayRole||'PLAYER')+' · '+(s==='h'?HT?.name||'HOME':AT?.name||'AWAY');rn.style.color=tl;}
  const se=document.getElementById(p+'st');se.innerHTML='';
  if(pl)[['SPD',pl.spd],['PWR',pl.pwr],['TEC',pl.tec],['DEF',pl.def]].forEach(([l,v])=>{const d=document.createElement('div');d.className='dst';d.innerHTML=`<div class="dst-v" style="color:${tl}">${v}</div><div class="dst-l">${l}</div>`;se.appendChild(d);});
}

const SPECIALS={
  'Hyuga':{l:'Tiger Shot',i:'🔥',c:20},'Tsubasa':{l:'Drive Shot',i:'⚡',c:20},'Ozora':{l:'Drive Shot',i:'⚡',c:20},'Schneider':{l:'Fire Shot',i:'🔥',c:20},
  'Deuter':{l:'Death Ball',i:'💀',c:22},'Espadas':{l:'El Tornado',i:'🌪',c:22},'Napoleon':{l:'Butterfly',i:'🦋',c:22},'Santana':{l:'Overhead',i:'🌀',c:22},
  'Frisina':{l:'Riser Shot',i:'🚀',c:22},
};
function getSpecial(pl){if(!pl)return null;const n=pl.name||'';for(const key of Object.keys(SPECIALS)){if(n.includes(key))return SPECIALS[key];}return null;}

function bldA(carrier,isShot){
  const sp=carrier?Math.round(carrier.spirit??100):100,el=document.getElementById('abtns'),ih=G.D.as==='h'; el.innerHTML='';
  document.getElementById('albl').textContent=ih?'YOUR ATTACK':'OPPONENT ATTACKS';
  if(!ih){el.innerHTML='<span style="color:var(--dim);font-size:11px;font-family:Rajdhani,sans-serif;padding:4px 8px">AI attacking…</span>';return;}
  let acts;
  if(isShot){acts=[{id:'shoot',l:'Shoot',i:'⚽',c:10,stat:'PWR'},{id:'chip',l:'Chip',i:'🎯',c:12,stat:'TEC'}];const spec=getSpecial(carrier);if(spec)acts.push({id:'special',l:spec.l,i:spec.i,c:spec.c,stat:'PWR',sp:true});}
  else {
    acts=[{id:'pass',l:'Pass',i:'↑',c:0,stat:'TEC'},{id:'dribble',l:'Dribble',i:'▶',c:6,stat:'SPD'}];
    const cp=PP[G.D.as][G.ck],prog=cp?progressFor(G.D.as,cp):0;
    if(prog>.50)acts.push({id:'shoot',l:'Shoot',i:'⚽',c:10,stat:'PWR'});
    if(bestTeammateFor(G.D.as,G.ck,'one-two'))acts.push({id:'one-two',l:'1-2',i:'↑↑',c:4,stat:'TEC',ot:true});
  }
  acts.forEach(a=>{const ok=sp>=(a.c||0);const btn=document.createElement('button');btn.className='dact'+(a.sp||a.ot?' sp':'')+(ok?'':' dis');const costTxt=a.c>0?(ok?'−'+a.c+' SP':'⚡ NO ENERGY'):'';btn.innerHTML=`<span class="dai">${a.i}</span><span>${a.l}</span><span class="dac" style="${!ok&&a.c>0?'color:var(--red)':''}">${costTxt}</span>`;btn.onclick=()=>selA(a,btn);el.appendChild(btn);});
}

function bldD(def,ds,isShot){
  const el=document.getElementById('dbtns');el.innerHTML=''; const ih=ds==='h'; document.getElementById('dlbl').textContent=ih?'YOUR DEFENCE':'OPPONENT DEFENDS';
  if(!ih){el.innerHTML='<span style="color:var(--dim);font-size:11px;font-family:Rajdhani,sans-serif;padding:4px 8px">AI defending…</span>';return;}
  const defIsGK=def&&def.pos==='GK';
  const acts=isShot&&defIsGK?[{id:'save',l:'Save',i:'🧤',stat:'DEF'},{id:'punch',l:'Punch',i:'👊',stat:'PWR'}]:[{id:'tackle',l:'Tackle',i:'🦵',stat:'SPD'},{id:'intercept',l:'Intercept',i:'✋',stat:'TEC'},{id:'block',l:'Block',i:'🛡',stat:'DEF'}];
  acts.forEach(a=>{const btn=document.createElement('button');btn.className='dact';btn.innerHTML=`<span class="dai">${a.i}</span><span>${a.l}</span><span class="dac" style="color:var(--dim);font-size:7px">${a.stat}</span>`;btn.onclick=()=>selD(a,btn);el.appendChild(btn);});
}

function selA(a,btn){
  G.D.ak=a.id;G.D.pk=null; document.querySelectorAll('#abtns .dact').forEach(b=>b.classList.remove('sa')); btn.classList.add('sa');
  if(a.id==='pass'||a.id==='one-two'){
    document.getElementById('duel-ov').classList.remove('show'); G.pm=true; document.getElementById('pass-banner').style.display='block';
    document.getElementById('pass-banner').textContent=a.id==='one-two'?'ONE-TWO — PICK TEAMMATE':'PASS MODE — CLICK A PLAYER';
    document.getElementById('dcfm').classList.remove('rdy');
  } else chkRdy();
}
function selD(a,btn){G.D.defA=a.id;document.querySelectorAll('#dbtns .dact').forEach(b=>b.classList.remove('sd'));btn.classList.add('sd');chkRdy();}
function chkRdy(){const needsPk=G.D.ak==='pass'||G.D.ak==='one-two';const ao=G.D.as!=='h'||(G.D.ak&&(!needsPk||G.D.pk));const do2=G.D.ds!=='h'||G.D.defA;document.getElementById('dcfm').classList.toggle('rdy',!!(ao&&do2));}

function weightedPick(items){
  const total=items.reduce((s,i)=>s+Math.max(0,i.w),0); if(total<=0)return items[0]?.id||null;
  let r=Math.random()*total; for(const it of items){r-=Math.max(0,it.w); if(r<=0)return it.id;} return items[0]?.id||null;
}

function aiAtk(){
  const side=G.D.as,carrier=G.D.carrier,cp=PP[side][G.ck],sp=carrier?carrier.spirit??100:100;
  const prog=cp?progressFor(side,cp):0,pressure=cp?1-clamp(nearestDefenderDistance(side,cp)/(W*.16),0,1):.5;
  const options=[];
  const bestPass=bestTeammateFor(side,G.ck,'pass');
  if(bestPass)options.push({id:'pass',w:2.4+pressure*2+(1-prog)*1.2});
  if(sp>=6)options.push({id:'dribble',w:1.6+prog*1.5+(1-pressure)});
  if((G.D.isShot||prog>.58)&&sp>=10)options.push({id:'shoot',w:(G.D.isShot?4.4:1.1)+prog*4-pressure*1.6});
  if((G.D.isShot||prog>.72)&&sp>=12)options.push({id:'chip',w:(G.D.isShot?2.8:.4)+prog*2.4-pressure});
  const spec=getSpecial(carrier); if(spec&&sp>=spec.c&&(G.D.isShot||prog>.7))options.push({id:'special',w:(G.D.isShot?4.8:1.2)+prog*4.2-pressure});
  const ot=bestTeammateFor(side,G.ck,'one-two'); if(ot&&sp>=4&&!G.D.isShot)options.push({id:'one-two',w:1.8+pressure*1.8+prog*1.2});
  G.D.ak=weightedPick(options.filter(o=>o.w>0))||'pass';
  if(G.D.ak==='pass')G.D.pk=bestPass;
  if(G.D.ak==='one-two')G.D.pk=ot||bestPass;
  if(G.D.as==='a'&&G.D.ds==='a')tryRes();
}

function aiDef(){
  const def=G.D.def,ds=G.D.ds,as=G.D.as,cp=PP[as][G.ck],prog=cp?progressFor(as,cp):.5,centrality=cp?1-Math.abs(cp.y/H-.5):.5;
  const defIsGK=def&&def.pos==='GK';
  if(G.D.isShot&&defIsGK){
    const opts=[{id:'save',w:2.8+centrality+prog},{id:'punch',w:1.5+(prog>.84?1.2:0)}];
    G.D.defA=weightedPick(opts);
  } else {
    const opts=[
      {id:'tackle',w:2.2+(prog<.55?1.2:.1)+(centrality<.35?.6:0)},
      {id:'intercept',w:2.0+(G.D.ak==='pass'||G.D.ak==='one-two'?2.4:0)+(prog>.42?0.8:0)},
      {id:'block',w:1.7+(G.D.ak==='shoot'||G.D.ak==='chip'||G.D.ak==='special'?2.8:0)+centrality*1.2+(prog>.7?1:0)}
    ];
    G.D.defA=weightedPick(opts);
  }
  if(G.D.as==='a'&&G.D.ds==='a')tryRes();
}

function tryRes(){if(G.D.ak&&G.D.defA)resDuel();}
function confirmDuel(){if(!G.D.ak&&G.D.as==='a')aiAtk();if(!G.D.defA&&G.D.ds==='a')aiDef();if(G.D.ak&&G.D.defA)resDuel();}

function startCD(){
  clearInterval(G.di); let s=30; const arc=document.getElementById('dta'),ne=document.getElementById('dtn'),c2=100.53; arc.style.strokeDashoffset='0'; ne.textContent='30'; ne.classList.remove('urg');
  G.di=setInterval(()=>{s--;ne.textContent=s;arc.style.strokeDashoffset=String(c2*(1-s/30));if(s<=8)ne.classList.add('urg');
    if(s<=0){clearInterval(G.di); if(!G.D.ak){if(G.D.as==='a')aiAtk(); else {G.D.ak='pass';G.D.pk=bestTeammateFor('h',G.ck,'pass')||validOutfieldKeys('h').find(k=>k!==G.ck)||null;}}
      if(!G.D.defA){if(G.D.ds==='a')aiDef(); else G.D.defA=G.D.isShot&&(G.D.def&&G.D.def.pos==='GK')?'save':'block';}
      resDuel();
    }
  },1000);
}

function duelAttackValue(carrier,ak,side){
  const cp=PP[side][G.ck];
  const base=gs(carrier,{pass:'tec',dribble:'spd',shoot:'pwr',chip:'tec',special:'pwr','one-two':'tec'}[ak]||'pwr');
  const prog=cp?progressFor(side,cp):.5;
  const spacing=cp?clamp(nearestDefenderDistance(side,cp)/(W*.16),.4,1.3):1;
  const spirit=clamp((carrier?.spirit??100)/100,.55,1.15);
  let mult=1;
  if(ak==='pass')mult=1.02+spacing*.08;
  if(ak==='dribble')mult=.98+spacing*.14+prog*.08;
  if(ak==='one-two')mult=1.04+spacing*.1+prog*.06;
  if(ak==='shoot'||ak==='chip'||ak==='special'){
    const shotBoost=clamp((prog-.45)/.45,0,1);
    mult=.74+shotBoost*.62;
    if(ak==='chip')mult+=.04;
    if(ak==='special')mult+=.18;
    const centrality=cp?1-Math.abs(cp.y/H-.5):.5;
    mult+=centrality*.08;
  }
  return base*mult*spirit;
}

function duelDefValue(def,defA,side){
  const base=gs(def,{tackle:'spd',intercept:'tec',block:'def',save:'def',punch:'pwr'}[defA]||'def');
  const spirit=clamp((def?.spirit??100)/100,.6,1.1);
  let mult=1;
  if(defA==='intercept')mult=1.04+(G.D.ak==='pass'||G.D.ak==='one-two'?0.18:0);
  if(defA==='block')mult=1.02+((G.D.ak==='shoot'||G.D.ak==='chip'||G.D.ak==='special')?0.24:0);
  if(defA==='tackle')mult=1.02+((G.D.ak==='dribble'||G.D.ak==='shoot')?0.12:0);
  if(defA==='save')mult=1.1;
  if(defA==='punch')mult=1.05;
  return base*mult*spirit;
}

function resDuel(){
  clearInterval(G.di); G.phase='duel_result'; G.pm=false; document.getElementById('pass-banner').style.display='none';
  document.getElementById('duel-ov').classList.add('show'); document.querySelectorAll('.dact').forEach(b=>b.classList.add('dis')); document.getElementById('dcfm').classList.remove('rdy');
  const {carrier,def,dk,as,ds,isShot,ak,pk,defA}=G.D;
  const BT={pass:{tackle:true,intercept:false,block:false,save:false,punch:false},dribble:{tackle:false,intercept:true,block:false,save:false,punch:false},shoot:{tackle:true,intercept:true,block:false,save:false,punch:false},chip:{tackle:true,intercept:false,block:true,save:true,punch:false},special:{tackle:true,intercept:true,block:true,save:false,punch:true},'one-two':{tackle:false,intercept:true,block:false,save:false,punch:false}};
  const rw=(BT[ak]||{})[defA]||false;
  let as2=duelAttackValue(carrier,ak,as), ds2=duelDefValue(def,defA,ds);
  const varianceA=1+(Math.random()*.1-.05), varianceD=1+(Math.random()*.08-.04);
  const ar=as2*varianceA*(rw?1.10:.94), dr=ds2*varianceD*(rw?.96:1.08), win=ar>dr;
  const co={pass:0,dribble:6,shoot:10,chip:12,special:25,'one-two':4};
  if(carrier&&(co[ak]||0)>0)carrier.spirit=Math.max(0,(carrier.spirit??100)-(co[ak]||0));
  if(def)def.spirit=Math.max(0,(def.spirit??100)-(G.D.isShot?4:5));
  G.duels++; if(['shoot','chip','special'].includes(ak))G.shots++; updH();
  if(win&&dk)scd(ds,dk); if(!win)scd(as,G.ck);
  const hW=(as==='h'&&win)||(as==='a'&&!win),rc2=hW?'#20c878':'#dc2020';
  let badge='SUCCESS!',det='';
  if(['shoot','chip','special'].includes(ak)){
    if(win){badge='⚽ GOAL!';det=carrier?carrier.name+' finishes!':'GOAL!';}
    else if(defA==='punch'){badge='PUNCHED CLEAR!';det=def?def.name+' punches it away!':'Cleared!';}
    else {badge='SAVED!';det=def?def.name+' keeps it out!':'Saved!';}
  } else if(ak==='pass'){
    if(win){badge='PASS COMPLETE!';det=pk&&sq(as)[pk]?'→ '+sq(as)[pk].name:'Forward!';}
    else {badge=defA==='intercept'?'INTERCEPTED!':'PASS STOPPED!';det=def?def.name+' steps in!':'Turnover!';}
  } else if(ak==='one-two'){
    if(win){badge='ONE-TWO!';det=carrier?carrier.name+' slips through!':'Wall pass!';}
    else {badge=defA==='intercept'?'INTERCEPTED!':'MOVE STOPPED!';det=def?def.name+' reads it!':'Stopped!';}
  } else if(ak==='dribble'){
    if(win){badge='DRIBBLE!';det=carrier?carrier.name+' beats the press!':'';}
    else {badge=defA==='block'?'BLOCKED!':'TACKLED!';det=def?def.name+' wins it!':'';}
  }
  const al={pass:'PASS',dribble:'DRIBBLE',shoot:'SHOOT',chip:'CHIP',special:'SPECIAL SHOT','one-two':'ONE-TWO'};
  const dl={tackle:'TACKLE',intercept:'INTERCEPT',block:'BLOCK',save:'SAVE',punch:'PUNCH'};
  document.getElementById('rbadge').textContent=badge; document.getElementById('rbadge').style.color=rc2;
  document.getElementById('rdet').textContent=det; document.getElementById('rdet').style.color=rc2;
  document.getElementById('ract').textContent=(al[ak]||ak.toUpperCase())+' vs '+(dl[defA]||defA.toUpperCase())+(rw?' · READ ✓':' · READ ✗');
  const ro=document.getElementById('duel-res'); ro.classList.add('show'); say(badge+(det?' — '+det:''));
  setTimeout(()=>{ro.classList.remove('show');
    if(['shoot','chip','special'].includes(ak)&&win)afGoal(carrier,as);
    else if(['shoot','chip','special'].includes(ak)&&!win)afSave(ds);
    else if(ak==='pass'&&win)afPass(as,pk);
    else if(ak==='one-two'&&win)afOneTwo(as,pk,carrier);
    else if(win)afSucc(as,carrier); else afTurn(ds);
  },950);
}

function closeDuel(){document.getElementById('duel-ov').classList.remove('show');document.getElementById('duel-res').classList.remove('show');G.pm=false;document.getElementById('pass-banner').style.display='none';}
function resume(s,msg){
  closeDuel(); if(msg)say(msg); G.phase='idle'; document.getElementById('passhint').style.display='none';
  const gracePx=nearestOpponentDist(s,G.ck), graceMs=Math.max(700,Math.min(2600,(gracePx/(W*.18))*1500));
  setTimeout(()=>{G.phase='moving'; asnC(); if(s==='h')document.getElementById('passhint').style.display='block';},graceMs);
}

function afGoal(scorer,s){
  closeDuel(); G.phase='idle'; if(s==='h')G.hG++; else G.aG++; if(s==='h')G.mom=Math.min(100,G.mom+16); else G.mom=Math.max(0,G.mom-16); updH();
  const tn=(s==='h'?HT:AT)?.name||''; document.getElementById('gscr').textContent=(scorer?scorer.name.toUpperCase():'')+' — '+tn;
  const gf=document.getElementById('gfl'); gf.classList.remove('show'); void gf.offsetWidth; gf.classList.add('show'); G_moveTarget=null;
  setTimeout(()=>{
    Object.values(hSq).forEach(p=>{if(p)p.cooldownUntil=0;}); Object.values(aSq).forEach(p=>{if(p)p.cooldownUntil=0;});
    iPos(); const ns=s==='h'?'a':'h',q=sq(ns),kk=['CM2','CM1','ST'].find(k=>q[k])||Object.keys(q).find(k=>q[k]);
    G.poss=ns; G.ck=kk; G.tP++; if(ns==='h')G.hP++; if(PP[ns][kk]){PP[ns][kk].x=W/2;PP[ns][kk].y=H/2;PT[ns][kk]={x:W/2,y:H/2};}
    ball.x=W/2;ball.y=H/2;ball.tx=W/2;ball.ty=W/2; ball.ty=H/2; updP(); say(((ns==='h'?HT:AT)?.name||'Team')+' kick off.');
    setTimeout(()=>{asnC();G.phase='moving';if(ns==='h')document.getElementById('passhint').style.display='block';},1000);
  },2100);
}

function afSave(ds){
  const q=sq(ds),gk=q['GK']; G.poss=ds; G.ck='GK'; G.tP++; if(ds==='h')G.hP++;
  const p2=fp('GK',ds==='h'?'home':'away',G.half); PP[ds]['GK']={x:p2.x*W,y:p2.y*H}; PT[ds]['GK']={x:p2.x*W,y:p2.y*H};
  ball.x=p2.x*W; ball.y=p2.y*H; ball.tx=p2.x*W; ball.ty=p2.y*H; updP(); say((gk?gk.name:'GK')+' saves!');
  G.phase='idle'; setTimeout(()=>{closeDuel(); const outlet=bestTeammateFor(ds,'GK','pass')||['CB1','CB2','LB','RB','CM2'].find(k=>q[k]); if(outlet){G.ck=outlet;G.tP++;if(ds==='h')G.hP++; if(PP[ds][outlet]){ball.tx=PP[ds][outlet].x;ball.ty=PP[ds][outlet].y;}} updP(); setTimeout(()=>{asnC();G.phase='moving';if(ds==='h')document.getElementById('passhint').style.display='block';},650);},850);
}

function afPass(s,tk){
  if(s==='h')G.mom=Math.min(100,G.mom+3); else G.mom=Math.max(0,G.mom-3);
  const q=sq(s); if(!tk||!q[tk]){resume(s,(q[G.ck]?q[G.ck].name:'Player')+' keeps the ball!');return;}
  const receiverName=q[tk]?q[tk].name:'Teammate'; setC(tk,s); if(PP[s][tk]){ball.tx=PP[s][tk].x;ball.ty=PP[s][tk].y;} G_moveTarget=null; resume(s,receiverName+' receives!');
}

function afOneTwo(s,tk,oldCarrier){
  if(s==='h')G.mom=Math.min(100,G.mom+6); else G.mom=Math.max(0,G.mom-6);
  const q=sq(s), carrKey=oldCarrier?Object.keys(q).find(k=>q[k]===oldCarrier):null;
  if(carrKey&&PP[s][carrKey]){const dir=dirFor(s), cp=PP[s][carrKey]; cp.x=clamp(cp.x+dir*W*.12,W*.04,W*.96); PT[s][carrKey]={x:cp.x,y:cp.y};}
  if(tk&&q[tk]){setC(tk,s); if(PP[s][tk]){ball.tx=PP[s][tk].x;ball.ty=PP[s][tk].y;}}
  G_moveTarget=null; say((q[G.ck]?q[G.ck].name:'Teammate')+' receives — '+(oldCarrier?oldCarrier.name:'runner')+' goes again!'); resume(s,null);
}

function afSucc(s,c){
  if(s==='h')G.mom=Math.min(100,G.mom+4); else G.mom=Math.max(0,G.mom-4);
  const cp=PP[s][G.ck]; if(cp){const dir=dirFor(s); cp.x=clamp(cp.x+dir*W*.1,W*.04,W*.96); if(PT[s][G.ck])PT[s][G.ck]={x:cp.x,y:cp.y}; ball.x=cp.x;ball.y=cp.y;ball.tx=cp.x;ball.ty=cp.y;}
  G_moveTarget=null; resume(s,c?c.name+' gets through!':'Through!');
}

function afTurn(ns){
  if(ns==='h')G.mom=Math.min(100,G.mom+6); else G.mom=Math.max(0,G.mom-6);
  G_moveTarget=null; const winnerKey=G.D.dk||null, pk=pickCarrierAfterWin(ns,winnerKey); G.poss=ns; G.ck=pk; G.tP++; if(ns==='h')G.hP++; if(PP[ns][pk]){ball.tx=PP[ns][pk].x;ball.ty=PP[ns][pk].y;} updP();
  const q=sq(ns); resume(ns,(q[pk]?q[pk].name:'Player')+' wins the ball!');
}
function updP(){const iH=G.poss==='h';document.getElementById('pdot').style.background=iH?'var(--blue)':'var(--red)';const t=iH?HT:AT;const c=sq(G.poss)[G.ck];document.getElementById('pname').textContent=(t?t.name.toUpperCase():'—')+' POSSESSION'+(c?' · '+c.name:'');}

// Clock runs during duel — only pauses during idle transitions
function startMT(){clearInterval(G.mt);G.mt=setInterval(()=>{if(G.phase==='idle')return;if(G.tL<=0){clearInterval(G.mt);G.half===1?goHalf():goFull();return;}G.tL--;updH();},56);}

function updH(){
  const ds2=Math.round((G.tL/2700)*45*60);const m=Math.floor(ds2/60),s=ds2%60;
  document.getElementById('htime').textContent=String(m).padStart(2,'0')+':'+String(s).padStart(2,'0');
  document.getElementById('hhalf').textContent=G.half===1?'FIRST HALF':'SECOND HALF';
  const sch=document.getElementById('sc-h');const sca=document.getElementById('sc-a');
  sch.textContent=G.hG;sca.textContent=G.aG;
  // Winner score glows brighter
  sch.style.textShadow=G.hG>G.aG?'0 0 24px rgba(30,114,220,.9)':'0 0 12px rgba(30,114,220,.3)';
  sca.style.textShadow=G.aG>G.hG?'0 0 24px rgba(220,32,32,.9)':'0 0 12px rgba(220,32,32,.3)';
  // Possession strip
  const hp=Math.round(G.mom);
  const ps=document.getElementById('posstrip-h');if(ps)ps.style.width=hp+'%';
}

function goHalf(){
  clearInterval(G.mt);clearInterval(G.di);G.phase='idle';closeDuel();
  document.getElementById('passhint').style.display='none';
  document.getElementById('hth').textContent=G.hG;document.getElementById('ata').textContent=G.aG;
  document.getElementById('htd').textContent=G.duels;document.getElementById('hts').textContent=G.shots;
  const pp=G.tP>0?Math.round(G.hP/G.tP*100):50;document.getElementById('htp').textContent=pp+'%';
  document.getElementById('hht').textContent=HT?.name||'HOME';document.getElementById('aht').textContent=AT?.name||'AWAY';
  document.getElementById('hht-flag').textContent=HT?.flag||'🏳';document.getElementById('aht-flag').textContent=AT?.flag||'🏳';
  showSc('s-half');
}
function goFull(){
  clearInterval(G.mt);clearInterval(G.di);G.phase='idle';closeDuel();
  document.getElementById('passhint').style.display='none';
  document.getElementById('fth').textContent=G.hG;document.getElementById('fta').textContent=G.aG;
  document.getElementById('ftd').textContent=G.duels;document.getElementById('fts').textContent=G.shots;
  document.getElementById('hft').textContent=HT?.name||'HOME';document.getElementById('aft').textContent=AT?.name||'AWAY';
  document.getElementById('hft-flag').textContent=HT?.flag||'🏳';document.getElementById('aft-flag').textContent=AT?.flag||'🏳';
  let wt='DRAW';
  if(G.hG>G.aG)wt=(HT?.name||'HOME').toUpperCase()+' WIN 🏆';
  else if(G.aG>G.hG)wt=(AT?.name||'AWAY').toUpperCase()+' WIN 🏆';
  document.getElementById('wtag').textContent=wt;showSc('s-end');
}
function secondHalf(){G.half=2;G.tL=2700;iPos();const q=sq('a');const kk=['CM2','CM1','ST'].find(k=>q[k])||Object.keys(q).find(k=>q[k]);G.poss='a';G.ck=kk;G.tP++;if(PP.a[kk]){PP.a[kk].x=W/2;PP.a[kk].y=H/2;}ball.x=W/2;ball.y=H/2;ball.tx=W/2;ball.ty=H/2;showSc('s-match');updH();updP();startMT();startAnim();say((AT?.name||'Away')+' kick off — 2nd half!');G.kickoffUntil=Date.now()+3000;G.phase='idle';setTimeout(()=>{asnC();G.phase='moving';},1200);}

function initMatch(){
  Object.values(hSq).forEach(p=>{if(p){p.spirit=100;p.cooldownUntil=0;}});Object.values(aSq).forEach(p=>{if(p){p.spirit=100;p.cooldownUntil=0;}});
  G={half:1,tL:2700,hG:0,aG:0,poss:'h',ck:null,chk:null,mom:50,duels:0,shots:0,hP:0,tP:0,phase:'idle',mt:null,di:null,D:{},pm:false,kickoffUntil:0};
  showSc('s-match');rsz();iPos();
  const sk=hSq['CM2']?'CM2':(hSq['CM1']?'CM1':'ST');G.poss='h';G.ck=sk;G.tP++;G.hP++;
  if(PP.h[sk]){PP.h[sk].x=W/2;PP.h[sk].y=H/2;}ball.x=W/2;ball.y=H/2;ball.tx=W/2;ball.ty=H/2;
  asnC();updP();updH();startMT();startAnim();
  document.getElementById('passhint').style.display='none';
  say('Kick off! '+HT.name+' vs '+AT.name+' — build from midfield.');
  G.kickoffUntil=Date.now()+3500;
  G.phase='idle';setTimeout(()=>{G.phase='moving';document.getElementById('passhint').style.display='block';},1200);
}
// ── FULLSCREEN & ORIENTATION ─────────────────────────────────────
function enterGame(){
  // Always navigate to menu first — fullscreen is best-effort only
  showSc('s-home');
  // Try fullscreen separately — iOS Safari may not support it, that's fine
  try{
    const el=document.documentElement;
    const req=el.requestFullscreen||el.webkitRequestFullscreen||el.mozRequestFullScreen||el.msRequestFullscreen;
    if(req){const p=req.call(el);if(p&&p.catch)p.catch(()=>{});}
  }catch(e){}
}

function checkOrientation(){
  const pw=document.getElementById('portrait-warn');
  if(!pw)return;
  const isPortrait=window.innerHeight>window.innerWidth;
  // Only show portrait warning during actual gameplay, not on splash/menus
  const activeScreen=document.querySelector('.screen.active');
  const inMatch=activeScreen&&activeScreen.id==='s-match';
  pw.classList.toggle('show',isPortrait&&inMatch);
}
window.addEventListener('resize',checkOrientation);
window.addEventListener('orientationchange',()=>setTimeout(checkOrientation,200));
document.addEventListener('fullscreenchange',()=>setTimeout(checkOrientation,100));
document.addEventListener('webkitfullscreenchange',()=>setTimeout(checkOrientation,100));
checkOrientation();
syncTeamSelections();
initHomeSlots();

// Canvas resize — uses full viewport now
function rsz(){
  const vp=document.getElementById('viewport');
  const pw=document.querySelector('.mviews');
  if(!pw)return;
  CV.width=pw.clientWidth;CV.height=pw.clientHeight;W=CV.width;H=CV.height;
}
window.addEventListener('resize',rsz);