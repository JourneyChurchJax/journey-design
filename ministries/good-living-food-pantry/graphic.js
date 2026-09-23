// Good Living Food Pantry — shared logo + event graphic builder.
(function(){
const LOGO=`<div class="mk"><p class="w" style="letter-spacing:.1em;justify-content:flex-start;align-items:baseline">G<svg class="apple" viewBox="0 0 74 130" aria-label="O"><path d="M37 66c-6-4-15-6-23-3C4 67 0 78 0 90c0 17 9 33 20 37 6 2 12 1 17-2 5 3 11 4 17 2 11-4 20-20 20-37 0-12-4-23-14-27-8-3-17-1-23 3z" style="fill:var(--apple)"></path><path d="M37 67C36 52 32 40 25 31" style="stroke:var(--leaf)" stroke-width="5" stroke-linecap="round" fill="none"></path><path d="M39 50C42 30 56 20 74 22 71 41 57 52 39 50z" style="fill:var(--leaf)"></path></svg>OD</p><p class="w" style="letter-spacing:.06em">LIVING</p><p class="fp" style="font-size:47px">FOOD PANTRY</p></div>`;
const CSS=`.gl{--bg:#f8efe2;--ink:#2b5e2f;--fp:#9a6b3c;--apple:#6fae3d;--leaf:#2b5e2f;--dot:rgba(43,94,47,.05);position:absolute;inset:0;background:var(--bg);font-family:'Figtree',sans-serif;color:var(--ink);overflow:hidden}
.gl.gingham{background-color:#f8efe2;background-image:linear-gradient(90deg,rgba(111,174,61,.38) 50%,transparent 50%),linear-gradient(0deg,rgba(111,174,61,.38) 50%,transparent 50%);background-size:72px 72px}
.gl.gingham.wide .h{font-size:116px!important;width:auto!important;white-space:nowrap;text-wrap:nowrap}.gl.gingham.wide .k,.gl.gingham.wide .t{width:auto!important}.gl.gingham .panel{position:absolute;inset:56px;background:#f8efe2;border-radius:6px;box-shadow:0 0 0 6px #f8efe2,0 0 0 10px #2b5e2f}
.gl.green{--bg:#22482a;--ink:#f8efe2;--fp:#e3b27a;--apple:#86c24f;--leaf:#f8efe2;--dot:rgba(248,239,226,.06)}
.gl.green .wm{position:absolute;opacity:.07}
.gl.kraft{--bg:#cfae82;--ink:#1f4524;--fp:#6a4220;--apple:#5f9e34;--leaf:#1f4524;--dot:rgba(60,35,15,.12)}
.gl.kraft .fib{position:absolute;inset:0;background-image:radial-gradient(rgba(255,245,225,.35) 1px,transparent 1.5px),radial-gradient(rgba(70,40,15,.25) 1px,transparent 1.5px);background-size:37px 41px,23px 29px;background-position:0 0,11px 7px}
.gl .tooth{position:absolute;inset:0;background-image:radial-gradient(var(--dot) 1px,transparent 1px);background-size:4px 4px}
.gl .mk{display:flex;flex-direction:column;align-items:center}
.gl .w{font-weight:800;font-size:112px;line-height:.86;color:var(--ink);display:flex;align-items:baseline;margin:0}
.gl .apple{width:92px;height:162px;margin:0 .03em 0 .01em;display:block;transform:translateY(6px)}
.gl .fp{margin:4px 0 0;line-height:1;white-space:nowrap;font-weight:800;letter-spacing:.14em;margin-right:-.14em;color:var(--fp)}
.gl .lw{position:absolute;display:grid;place-items:center}
.gl p{margin:0;white-space:nowrap}
.gl .k{font-weight:800;text-transform:uppercase;letter-spacing:.16em;color:var(--fp)}
.gl .h{font-weight:800;text-transform:uppercase;line-height:.92;letter-spacing:.01em;color:var(--ink);text-wrap:balance}
.gl .t{font-weight:700;color:var(--ink)}
.gl .rule{background:var(--apple);border-radius:3px}
.gl .jc{position:absolute;display:block}`;
const VAR={
  monthly:{k:'Every month',h:['Third','Saturday'],t:'10 AM – 1 PM'},
  oct17:{k:'Saturday',h:['October','17'],t:'10 AM – 1 PM',wideOne:true}
};
window.buildGL=function(el,fmt,v,theme){
  const d=VAR[v];const A=el.dataset.assets;theme=theme||'cream';
  const W=fmt==='wide';
  const deco={cream:'<span class="tooth"></span>',gingham:'<span class="panel"></span>',green:'<span class="tooth"></span>'+(W?'<svg class="wm" viewBox="0 0 74 130" style="right:-260px;top:-80px;width:900px;height:1580px"><path d="M37 66c-6-4-15-6-23-3C4 67 0 78 0 90c0 17 9 33 20 37 6 2 12 1 17-2 5 3 11 4 17 2 11-4 20-20 20-37 0-12-4-23-14-27-8-3-17-1-23 3z" fill="#f8efe2"></path></svg>':'<svg class="wm" viewBox="0 0 74 130" style="left:180px;bottom:-674px;width:1200px;height:2100px"><path d="M37 66c-6-4-15-6-23-3C4 67 0 78 0 90c0 17 9 33 20 37 6 2 12 1 17-2 5 3 11 4 17 2 11-4 20-20 20-37 0-12-4-23-14-27-8-3-17-1-23 3z" fill="#f8efe2"></path></svg>'),kraft:'<span class="tooth"></span><span class="fib"></span>'}[theme];
  const JL=theme==='green'?'horizontal-white':'horizontal-ink';
  if(!document.getElementById('gl-css')){
  const st=document.createElement('style');st.id='gl-css';st.textContent=CSS;document.head.appendChild(st);}
  if(fmt==='wide'){
    el.innerHTML=`<div class="gl ${theme} ${fmt}">${deco}
    <div class="lw" style="left:0;top:0;width:960px;height:1080px"><div style="transform:translateY(-24px) scale(1.65)">${LOGO}</div></div>
    <span class="rule" style="position:absolute;left:960px;top:300px;width:6px;height:480px"></span>
    <div style="position:absolute;left:1060px;top:0;height:1080px;display:flex;flex-direction:column;justify-content:center;gap:34px">
      <p class="k" style="font-size:40px">${d.k}</p>
      ${d.wideOne?`<p class="h" style="font-size:132px;width:824px;height:121px">${d.h[0]} ${d.h[1]}</p>
      <p class="t" style="font-size:60px;margin-top:-21px;width:829px;height:93px">${d.t}</p>`:`<p class="h" style="font-size:132px">${d.h[0]}<br>${d.h[1]}</p>
      <p class="t" style="font-size:60px;margin-top:6px">${d.t}</p>`}
    </div>
    <img class="jc" src="${A}/logo/${JL}.png" alt="Journey Church" style="right:${theme==='gingham'?120:80}px;bottom:${theme==='gingham'?110:64}px;width:260px">
    </div>`;
  } else {
    el.innerHTML=`<div class="gl ${theme} ${fmt}">${deco}
    <div class="lw" style="left:0;right:0;top:230px;height:560px"><div style="transform:scale(1.75)">${LOGO}</div></div>
    <span class="rule" style="position:absolute;left:390px;top:860px;width:300px;height:6px"></span>
    <div style="position:absolute;left:0;right:0;top:930px;display:flex;flex-direction:column;align-items:center;text-align:center;gap:34px">
      <p class="k" style="font-size:40px;margin-right:-.16em">${d.k}</p>
      ${d.wideOne?`<p class="t" style="font-size:64px;margin-top:6px">${d.t}</p>
      <p class="h" style="font-size:135px;width:885px;height:129px">${d.h[0]} ${d.h[1]}</p>`:`<p class="h" style="font-size:150px">${d.h[0]}<br>${d.h[1]}</p>
      <p class="t" style="font-size:64px;margin-top:6px">${d.t}</p>`}
    </div>
    <img class="jc" src="${A}/logo/${JL}.png" alt="Journey Church" style="left:50%;transform:translateX(-50%);top:1500px;width:280px">
    </div>`;
  }
};
})();
