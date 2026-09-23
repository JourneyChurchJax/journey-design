// Journey Women — shared lockup. Florals are lifted from the supplied logo file; rules and type are live.
(function(){
const CSS=`.jw{position:relative;width:960px;height:540px;transform-origin:0 0}
.jw img.fl{position:absolute;left:0;top:0;width:960px;height:540px;display:block}
.jw .rl{position:absolute;left:216px;width:555px;height:3px;background:#1a1616}
.jw .jn{position:absolute;left:0;right:0;top:231px;margin:0;text-align:center;font:300 58px/1 'Montserrat',sans-serif;letter-spacing:.36em;padding-left:.36em;color:#1a1616;white-space:nowrap}
.jw .wm{position:absolute;left:0;right:0;top:286px;margin:0;text-align:center;font:400 84px/1 'Style Script',cursive;color:#1a1616;white-space:nowrap;transform:rotate(-3deg);transform-origin:50% 50%}`;
window.jwLogo=function(base){
  if(!document.getElementById('jw-css')){const s=document.createElement('style');s.id='jw-css';s.textContent=CSS;document.head.appendChild(s);}
  return `<div class="jw"><img class="fl" src="${base||'.'}/florals-full.png" alt=""><span class="rl" style="top:215px"></span><p class="jn">JOURNEY</p><span class="rl" style="top:376px"></span></div>`;
};
window.jwSlide=function(el,bg){
  jwLogo('.');
  const ink=bg==='rose';
  const B={
    blush:'background:#f7cdc1',
    wash:"background:#f8e6de;background-image:radial-gradient(ellipse 55% 60% at 18% 22%,rgba(236,170,158,.55),transparent 70%),radial-gradient(ellipse 50% 55% at 85% 80%,rgba(232,160,150,.5),transparent 70%),radial-gradient(ellipse 40% 45% at 78% 15%,rgba(214,196,176,.45),transparent 70%),radial-gradient(ellipse 45% 40% at 12% 88%,rgba(240,196,184,.6),transparent 70%)",
    cream:'background:#f8f1e7',
    blushfl:'background:#f7cdc1',
    rose:'background:#5e2f36;background-image:radial-gradient(ellipse 70% 70% at 50% 45%,#74404a,#5e2f36 70%,#4a232a)'
  }[bg];
  const grain='<span style="position:absolute;inset:0;background-image:radial-gradient(rgba(60,30,30,.045) .8px,transparent 1px);background-size:3px 3px;pointer-events:none"></span>';
  const deco=(bg==='cream'||bg==='blushfl')?'<span style="position:absolute;inset:44px;border:2px solid '+(bg==='blushfl'?'#d9998b':'#e7b3a6')+';pointer-events:none"></span><img src="florals-only.png" alt="" style="position:absolute;width:1300px;left:-560px;top:-420px;opacity:.2;transform:rotate(18deg)"><img src="florals-only.png" alt="" style="position:absolute;width:1300px;right:-560px;bottom:-440px;opacity:.2;transform:rotate(-160deg)">':'';
  el.style.cssText+=';padding:0;'+B;
  el.innerHTML=deco+grain+'<div style="position:absolute;left:192px;top:54px;transform:scale(1.6);transform-origin:0 0;'+(ink?'filter:invert(93%) sepia(12%) saturate(300%) hue-rotate(-20deg) brightness(1.02)':'')+'">'+jwLogo('.')+'</div><img src="../../assets/logo/'+(ink?'horizontal-white':'horizontal-ink')+'.png" alt="Journey Church" style="position:absolute;left:50%;transform:translateX(-50%);bottom:56px;width:220px;opacity:.85">';
};
window.jwStory=function(el,opt){
  jwLogo('.');opt=opt||{};
  const K='#1a1616';
  el.style.cssText+=';padding:0;background:#f8f1e7';
  el.innerHTML='<span style="position:absolute;inset:44px;border:2px solid #e7b3a6;pointer-events:none"></span>'
  +'<img src="florals-only.png" alt="" style="position:absolute;width:1300px;left:-640px;top:-470px;opacity:.2;transform:rotate(18deg)">'
  +'<img src="florals-only.png" alt="" style="position:absolute;width:1300px;right:-640px;bottom:-470px;opacity:.2;transform:rotate(-160deg)">'
  +'<span style="position:absolute;inset:0;background-image:radial-gradient(rgba(60,30,30,.045) .8px,transparent 1px);background-size:3px 3px;pointer-events:none"></span>'
  +'<div style="position:absolute;left:60px;top:380px;transform:scale(1);transform-origin:0 0">'+jwLogo('.')+'</div>'
  +(opt.title?'<div style="position:absolute;left:0;right:0;top:1040px;display:flex;flex-direction:column;align-items:center;gap:30px;font-family:Montserrat,sans-serif;color:'+K+'">'
    +'<span style="width:90px;height:2px;background:#d9998b"></span>'
    +'<p style="margin:0;font-weight:600;font-size:62px;letter-spacing:.18em;padding-left:.18em;white-space:nowrap">'+opt.title+'</p>'
    +'<p style="margin:0;font-weight:300;font-size:46px;letter-spacing:.14em;padding-left:.14em;white-space:nowrap">'+opt.date+'</p>'
    +'<p style="margin:0;font-weight:600;font-size:46px;letter-spacing:.14em;padding-left:.14em;white-space:nowrap">'+opt.time+'</p>'
  +'</div>':'')
  +'<img src="../../assets/logo/horizontal-ink.png" alt="Journey Church" style="position:absolute;left:50%;transform:translateX(-50%);bottom:190px;width:260px;opacity:.85">';
};
window.jwSlideEvent=function(el,opt){
  jwLogo('.');opt=opt||{};const K='#1a1616';
  el.style.cssText+=';padding:0;background:#f8f1e7';
  el.innerHTML='<span style="position:absolute;inset:44px;border:2px solid #e7b3a6;pointer-events:none"></span>'
  +'<img src="florals-only.png" alt="" style="position:absolute;width:1300px;left:-560px;top:-420px;opacity:.2;transform:rotate(18deg)">'
  +'<img src="florals-only.png" alt="" style="position:absolute;width:1300px;right:-560px;bottom:-440px;opacity:.2;transform:rotate(-160deg)">'
  +'<span style="position:absolute;inset:0;background-image:radial-gradient(rgba(60,30,30,.045) .8px,transparent 1px);background-size:3px 3px;pointer-events:none"></span>'
  +'<div style="position:absolute;left:40px;top:270px">'+jwLogo('.')+'</div>'
  +'<span style="position:absolute;left:1010px;top:290px;width:2px;height:500px;background:#d9998b"></span>'
  +'<div style="position:absolute;left:1040px;right:100px;top:0;bottom:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:28px;font-family:Montserrat,sans-serif;color:'+K+'">'
    +'<p style="margin:0;font-weight:600;font-size:84px;line-height:1.05;letter-spacing:.14em;padding-left:.14em;text-align:center;white-space:nowrap">'+opt.title.replace(' ','<br>')+'</p>'
    +'<span style="width:90px;height:2px;background:#d9998b;margin:6px 0"></span>'
    +'<p style="margin:0;font-weight:300;font-size:46px;letter-spacing:.14em;padding-left:.14em;white-space:nowrap">'+opt.date+'</p>'
    +'<p style="margin:0;font-weight:600;font-size:46px;letter-spacing:.14em;padding-left:.14em;white-space:nowrap">'+opt.time+'</p>'
  +'</div>'
  +'<img src="../../assets/logo/horizontal-ink.png" alt="Journey Church" style="position:absolute;left:50%;transform:translateX(-50%);bottom:84px;width:230px;opacity:.85">';
};
})();
