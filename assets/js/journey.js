/* Journey Church — the only site-wide behaviour. One curve, staggered reveal.
   Ported verbatim from Brand Guide brand/js/journey.js. */
(function(){
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var items = document.querySelectorAll('.reveal');
  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach(function(el){ el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if (!e.isIntersecting) return;
        var group = e.target.parentElement ? Array.prototype.filter.call(e.target.parentElement.children, function(c){ return c.classList.contains('reveal'); }) : [];
        var i = group.indexOf(e.target);
        e.target.style.transitionDelay = (i > 0 ? i * 0.09 : 0) + 's';
        e.target.classList.add('in');
        io.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });
    items.forEach(function(el){ io.observe(el); });
  }
  document.querySelectorAll('.meter').forEach(function(m){
    var bar = m.querySelector('span'), pct = Math.max(0, Math.min(100, parseFloat(m.dataset.pct || 0)));
    if (!bar) return;
    if (reduce || !('IntersectionObserver' in window)) { bar.style.width = pct + '%'; return; }
    new IntersectionObserver(function(es, o){
      es.forEach(function(e){ if (e.isIntersecting) { bar.style.width = pct + '%'; o.unobserve(e.target); } });
    }, { threshold: 0.4 }).observe(m);
  });
  document.querySelectorAll('.nav-toggle').forEach(function(btn){
    btn.addEventListener('click', function(){
      var nav = btn.closest('.nav'), open = nav.dataset.open === 'true';
      nav.dataset.open = open ? 'false' : 'true';
      btn.setAttribute('aria-expanded', open ? 'false' : 'true');
      btn.textContent = open ? 'Menu' : 'Close';
    });
  });
})();
