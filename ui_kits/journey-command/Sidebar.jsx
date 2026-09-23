const CMD_A = '../../assets';
const CMD_NAV = [
  { id:'overview', label:'Overview' },
  { id:'series', label:'Sermon series' },
  { id:'events', label:'Events' },
];

function Sidebar({ page, setPage, toc = [] }){
  return (
    <aside className="cmd-side">
      <a className="cmd-brand" href="#overview" onClick={(e)=>{e.preventDefault();setPage('overview')}}>
        <img className="mk" src={CMD_A+'/logo/mark-ember.png'} alt=""/><b>Journey Command</b><span>Brand</span>
      </a>
      <nav aria-label="Brand guide">
        <h5>Guide</h5>
        <ul>
          {CMD_NAV.map(n=>(
            <li key={n.id}><a href={'#'+n.id} aria-current={page===n.id?'page':undefined}
              onClick={(e)=>{e.preventDefault();setPage(n.id);window.scrollTo(0,0)}}>{n.label}</a></li>
          ))}
          <li><a href="#download" onClick={(e)=>{e.preventDefault();setPage('overview');setTimeout(()=>{const el=document.getElementById('download');if(el)window.scrollTo(0,el.offsetTop-24)},60)}}>Downloads</a></li>
        </ul>
        <h5 style={{marginTop:'1.4rem'}}>On this page</h5>
        <ul className="sub">
          {toc.map(t=>(<li key={t.id}><a href={'#'+t.id} onClick={(e)=>{e.preventDefault();const el=document.getElementById(t.id);if(el)window.scrollTo(0,el.offsetTop-24)}}>{t.label}</a></li>))}
        </ul>
      </nav>
      <span className="spacer"></span>
      <a className="req" href="#request">Request a graphic</a>
      <a className="back" href="#overview" onClick={(e)=>e.preventDefault()}>journeychurch.org &rarr;</a>
    </aside>
  );
}
window.Sidebar = Sidebar;
