/* Fits the .big[data-fit] lines in a series block to the block width.
   Ported from the inline script on brand/index.html and brand/sermon-series/index.html. */
function fitSeriesType(){
  document.querySelectorAll('.blk').forEach(b=>{
    const W=b.clientWidth, a=b.closest('.art');
    if(!a) return;
    const sc=parseFloat(getComputedStyle(a).transform.split(',')[0].replace('matrix(',''))||1;
    const fits=b.querySelectorAll('[data-fit]');
    fits.forEach(p=>{p.style.fontSize='100px';const w=p.getBoundingClientRect().width/sc;p.style.fontSize=(100*W/w).toFixed(1)+'px'});
    b.querySelectorAll('[data-size]').forEach(p=>{const s=fits[+p.dataset.size];if(s)p.style.fontSize=s.style.fontSize});
  });
}
function useFitSeriesType(){
  React.useEffect(()=>{
    const run=()=>{if(window.fitFrames)window.fitFrames();fitSeriesType();setTimeout(()=>{if(window.fitFrames)window.fitFrames();fitSeriesType()},300)};
    if(document.fonts&&document.fonts.ready)document.fonts.ready.then(run);else run();
    const onR=()=>{if(window.fitFrames)window.fitFrames();fitSeriesType()};
    window.addEventListener('resize',onR);
    return ()=>window.removeEventListener('resize',onR);
  },[]);
}
Object.assign(window,{fitSeriesType,useFitSeriesType});
