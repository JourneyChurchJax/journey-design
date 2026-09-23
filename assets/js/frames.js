// Scales fixed-pixel .art boards to fit their .fr container. No dependencies.
// Extends Brand Guide brand/js/frames.js with a MutationObserver so boards that
// React inserts after load are fitted too.
(function(){
  function fit(fr){
    const cs = getComputedStyle(fr);
    const w = parseFloat(cs.getPropertyValue('--w')) || 1080;
    const h = parseFloat(cs.getPropertyValue('--h')) || w;
    if (fr.parentElement === document.body && document.querySelectorAll('body>.fr').length === 1) {
      const vw = document.documentElement.clientWidth, vh = window.innerHeight;
      const fw = Math.min(vw, vh * w / h);
      fr.style.width = fw + 'px'; fr.style.margin = '0'; fr.style.left = Math.max(0,(vw - fw) / 2) + 'px'; fr.style.top = Math.max(0,(vh - fw * h / w) / 2) + 'px';
      document.body.style.overflow = 'hidden';
    }
    const s = fr.clientWidth / w;
    fr.querySelectorAll(':scope>.art').forEach(a => { a.style.transformOrigin = '0 0'; a.style.transform = 'scale(' + s + ')'; });
  }
  function all(){ document.querySelectorAll('.fr').forEach(fit); }
  const ro = ('ResizeObserver' in window) ? new ResizeObserver(es => es.forEach(e => fit(e.target))) : null;
  const seen = new WeakSet();
  function observe(){
    document.querySelectorAll('.fr').forEach(f => { if(ro && !seen.has(f)){ seen.add(f); ro.observe(f); } fit(f); });
  }
  window.fitFrames = observe;
  document.addEventListener('DOMContentLoaded', observe);
  window.addEventListener('load', observe);
  window.addEventListener('resize', all);
  if ('MutationObserver' in window) {
    new MutationObserver(() => observe()).observe(document.documentElement, { childList:true, subtree:true });
  }
  observe();
})();
