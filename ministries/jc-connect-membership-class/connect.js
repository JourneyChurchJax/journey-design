// JC Connect — Membership Class. Shared lockup + asset builder.
(function(){
const CSS=`.jcx{--red:#9e1413;--ink:#fff;position:absolute;inset:0;background:var(--red);font-family:'Montserrat',sans-serif;color:var(--ink);overflow:hidden}
.jcx p{margin:0;white-space:nowrap}
.jcl{position:relative;display:inline-flex;flex-direction:column;align-items:center;border:.017em solid var(--ink,#fff);color:var(--ink,#fff);padding:.2em .36em .06em;font-family:'Montserrat',sans-serif;line-height:1}
.jcl .row{display:flex;align-items:baseline;gap:.13em}
.jcl .jc{font-weight:300;font-size:.844em;letter-spacing:-.04em;line-height:.8;width:1.019em;height:.762em;padding-right:0;margin-right:.146em}
.jcl .cn{font-weight:900;font-style:italic;font-size:.86em;letter-spacing:-.045em;line-height:.8;transform:skewX(-4deg)}
.jcl .mc{font-weight:700;font-size:.142em;letter-spacing:.16em;margin:.05em -.16em 0 0;padding-left:1.45em}
.jcx .tag{font-weight:700;text-transform:uppercase;letter-spacing:.04em;display:flex;align-items:center;justify-content:center;gap:.7em}
.jcx .tag i{font-style:normal;font-weight:400}
.jcx .k{font-weight:700;text-transform:uppercase;letter-spacing:.2em}
.jcx .h{font-weight:900;font-style:italic;text-transform:uppercase;letter-spacing:-.02em;line-height:.92}
.jcx .t{font-weight:600;letter-spacing:.02em}
.jcx .jc-mark{position:absolute;display:block}
.jcx.bigmc .jcl .mc{font-size:.21em;letter-spacing:.14em;margin:.12em -.14em 0 0;padding-left:1em}
.jcx .q{font-weight:600;font-style:italic;text-align:center;line-height:1.2;white-space:normal;text-wrap:balance}`;
const LOCK=size=>`<div class="jcl" style="font-size:${size}px"><div class="row"><span class="jc">JC</span><span class="cn">CONNECT</span></div><p class="mc">MEMBERSHIP CLASS</p></div>`;
const TAG=`<span>Connect to the church</span><i>|</i><span>Connect with God</span><i>|</i><span>Connect through serving</span>`;
window.jcConnectLogo=LOCK;
window.buildJC=function(el,fmt,opt){
  opt=opt||{};const A=el.dataset.assets||'../../assets';
  if(!document.getElementById('jcx-css')){const s=document.createElement('style');s.id='jcx-css';s.textContent=CSS;document.head.appendChild(s);}
  const when=opt.date?`<p class="k" style="font-size:${fmt==='wide'?34:40}px">${opt.day||''}</p><p class="h" style="${fmt==='wide'?(opt.hStyle||'font-size:112px'):'font-size:128px'}">${opt.date}</p><p class="t" style="font-size:${fmt==='wide'?44:52}px">${opt.time||''}</p>`:'';
  if(fmt==='wide'){
    el.innerHTML=`<div class="jcx"><div style="position:absolute;left:0;right:0;top:${opt.date?250:376}px;display:flex;flex-direction:column;align-items:center;gap:${opt.date?48:58}px">
      ${LOCK(244)}
      <p class="tag" style="font-size:31px;letter-spacing:.02em">${TAG}</p>
      ${opt.date?`<div style="display:flex;flex-direction:column;align-items:center;gap:18px;margin-top:22px">${when}</div>`:''}
      ${opt.extra||''}
    </div></div>`;
  } else if(opt.layout==='a'){
    el.innerHTML=`<div class="jcx">
    <div style="position:absolute;left:0;right:0;top:560px;display:flex;flex-direction:column;align-items:center;gap:56px">
      ${LOCK(146)}
      <div class="tag" style="font-size:36px;flex-direction:column;gap:18px"><span>Connect to the church</span><span>Connect with God</span><span>Connect through serving</span></div>
    </div>
    <div style="position:absolute;left:0;right:0;top:1300px;display:flex;flex-direction:column;align-items:center;gap:16px">
      <span style="width:120px;height:6px;border-radius:6px;background:#fff;margin-bottom:26px"></span>
      <p class="k" style="font-size:32px;margin-right:-.2em">${opt.day}</p>
      <p class="h" style="font-size:84px">${opt.date}</p>
      <p class="t" style="font-size:40px">${opt.time}</p>
    </div>
    <img class="jc-mark" src="${A}/logo/horizontal-white.png" alt="Journey Church" style="left:50%;transform:translateX(-50%);bottom:110px;width:260px"></div>`;
  } else if(opt.layout==='b'){
    el.innerHTML=`<div class="jcx bigmc">
    ${opt.q?`<p class="q" style="position:absolute;left:150px;right:150px;top:300px;font-size:50px">${opt.q}</p>`:''}
    <div style="position:absolute;left:0;right:0;top:${opt.lockTop||(opt.q?560:520)}px;display:flex;flex-direction:column;align-items:center;gap:56px">
      ${LOCK(146)}
      ${opt.tagRow?`<p class="tag" style="font-size:${opt.tagSize||19}px;letter-spacing:.02em;gap:.6em">${TAG}</p>`:`<div class="tag" style="font-size:36px;flex-direction:column;gap:18px"><span>Connect to the church</span><span>Connect with God</span><span>Connect through serving</span></div>`}
    </div>
    <div style="position:absolute;${opt.bandPos||'left:90px;right:90px;top:1330px'};border-top:3px solid #fff;border-bottom:3px solid #fff;padding:34px 0 30px;display:flex;flex-direction:column;align-items:center;gap:14px">
      <p class="h" style="font-size:64px">${opt.day} · ${opt.date}</p>
      <p class="t" style="font-size:40px;letter-spacing:.12em;margin-right:-.12em">${opt.time}</p>
    </div>
    <img class="jc-mark" src="${A}/logo/horizontal-white.png" alt="Journey Church" style="left:50%;transform:translateX(-50%);bottom:110px;width:260px"></div>`;
  } else {
    el.innerHTML=`<div class="jcx"><div style="position:absolute;left:0;right:0;top:${opt.date?430:620}px;display:flex;flex-direction:column;align-items:center;gap:56px">
      ${LOCK(150)}
      <div class="tag" style="font-size:36px;flex-direction:column;gap:18px"><span>Connect to the church</span><span>Connect with God</span><span>Connect through serving</span></div>
      ${opt.date?`<div style="display:flex;flex-direction:column;align-items:center;gap:22px;margin-top:40px">${when}</div>`:''}
    </div>
    <img class="jc-mark" src="${A}/logo/horizontal-white.png" alt="Journey Church" style="left:50%;transform:translateX(-50%);top:1500px;width:280px"></div>`;
  }
};
window.buildJCStoryV=function(el,v,opt){
  opt=opt||{};const A=el.dataset.assets||'../../assets';
  buildJC(document.createElement('div'),'wide');
  const tags=opt.stack?'<div class="tag" style="font-size:34px;flex-direction:column;gap:16px"><span>Connect to the church</span><span>Connect with God</span><span>Connect through serving</span></div>':'<p class="tag" style="font-size:19px;letter-spacing:.02em;gap:.6em">'+TAG+'</p>';
  const band='<div style="width:900px;border-top:3px solid #fff;border-bottom:3px solid #fff;padding:34px 0 30px;display:flex;flex-direction:column;align-items:center;gap:14px"><p class="h" style="font-size:64px">'+opt.day+' · '+opt.date+'</p><p class="t" style="font-size:40px;letter-spacing:.12em;margin-right:-.12em">'+opt.time+'</p></div>';
  const group=(top,gap)=>'<div style="position:absolute;left:0;right:0;top:'+top+'px;display:flex;flex-direction:column;align-items:center;gap:'+gap+'px;z-index:3">'+LOCK(150)+tags+'<span style="height:'+(gap*.6)+'px"></span>'+band+'</div>';
  const logo='<img class="jc-mark" src="'+A+'/logo/horizontal-white.png" alt="Journey Church" style="z-index:4;left:50%;transform:translateX(-50%);bottom:110px;width:260px">';
  const col='<div style="position:absolute;inset:0;background:#0b0a09 url(\''+A+'/series/collage-a-story.png\') center/cover;z-index:0"></div>';
  let bg='',g='';
  if(v==='tight'){g=group(640,52);}
  else if(v==='collage'){bg=col+'<div style="position:absolute;inset:0;background:#9e1413;mix-blend-mode:multiply;opacity:.9;z-index:1"></div><div style="position:absolute;inset:0;background:radial-gradient(ellipse 80% 42% at 50% 52%,rgba(120,12,12,.75),rgba(120,12,12,0) 100%);z-index:2"></div>';g=group(640,52);}
  else if(v==='split'){bg=col+'<div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(158,20,19,.25) 0%,rgba(158,20,19,.45) 30%,#9e1413 52%,#9e1413 100%);z-index:1"></div>';g=group(1010,48);}
  el.innerHTML='<div class="jcx bigmc">'+bg+g+logo+'</div>';
};
})();
