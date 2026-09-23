// Good Work — Job Placement Ministry. Lockups for direction 1g (serif wordmark + handshake in Journey red).
(function(){
const R='#ff3a3a',K='#0a0a0a',C='#f7f4f0';
const hand=(c,w)=>`<svg viewBox="0 0 24 24" style="width:${w}px;height:${w}px;display:block" fill="none" stroke="${c}" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.47 6.47a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg>`;
const icon=(s,bg=R,c)=>`<div style="width:${s}px;height:${s}px;border-radius:50%;background:${bg};display:grid;place-items:center;flex:none">${hand(c||(bg===K?C:K),s*.66)}</div>`;
const tone=t=>t==='dark'?{ink:C,sub:'#d8d1c5',ic:K}:{ink:K,sub:'#2a2824',ic:C};
const word=(k,t,align)=>{const o=tone(t);return `<div style="display:flex;flex-direction:column;align-items:${align};gap:${24*k}px"><p style="margin:0;white-space:nowrap;font:italic 500 ${124*k}px/0.9 'Newsreader',serif;color:${o.ink};letter-spacing:-.02em">Good Work<span style="color:${R}">.</span></p><div style="display:flex;align-items:center;gap:${20*k}px;padding-left:${6*k}px"><span style="width:${56*k}px;height:${2*k}px;background:${o.ink}"></span><p style="margin:0;white-space:nowrap;font:600 ${20*k}px/1 'Inter Tight',sans-serif;letter-spacing:.3em;color:${o.sub}">JOB PLACEMENT MINISTRY</p>${align==='center'?`<span style="width:${56*k}px;height:${2*k}px;background:${o.ink}"></span>`:''}</div></div>`;};
window.gwIcon=icon;
window.gwHorizontal=(k=1,t='light')=>`<div style="display:flex;align-items:center;gap:${40*k}px">${icon(170*k,R,tone(t).ic)}${word(k,t,'flex-start')}</div>`;
window.gwStacked=(k=1,t='light')=>`<div style="display:flex;flex-direction:column;align-items:center;gap:${40*k}px">${icon(200*k,R,tone(t).ic)}${word(k,t,'center')}</div>`;
window.gwWordmark=(k=1,t='light')=>word(k,t,'flex-start');
window.GW={red:R,ink:K,cream:C};
})();
