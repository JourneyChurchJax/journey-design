const CMD_SCREENS = { overview: OverviewScreen, series: SeriesScreen, events: EventsScreen };
const CMD_TOCS = {
  overview: [
    {id:'logo',label:'Logo'},{id:'color',label:'Color'},{id:'type',label:'Type'},{id:'photo',label:'Photography'},
    {id:'social',label:'Social'},{id:'series',label:'Sermon series'},{id:'events',label:'Events'},{id:'stage',label:'Stage & screen'},
    {id:'voice',label:'Voice'},{id:'never',label:'Never'},{id:'download',label:'Download'},
  ],
  series: [{id:'rule',label:'The rule'},{id:'example',label:'Worked example'},{id:'package',label:'The package'},{id:'download',label:'Download'}],
  events: [{id:'block',label:'The block'},{id:'kinds',label:'Five kinds'},{id:'sizes',label:'Sizes & rules'},{id:'download',label:'Download'}],
};

function Command(){
  const [page, setPage] = React.useState('overview');
  const Screen = CMD_SCREENS[page] || OverviewScreen;
  return (<>
    <Sidebar page={page} setPage={setPage} toc={CMD_TOCS[page] || []}/>
    <main id="main"><Screen setPage={setPage}/></main>
    <footer className="footer grain">
      <div className="container-x">
        <div className="footer-grid">
          <div><p className="t-eyebrow ember-dot">Journey Brand</p><p className="muted" style={{marginTop:'.9rem',fontSize:'.92rem',maxWidth:'20rem'}}>Internal reference for staff and volunteers. Not a public page.</p></div>
          <div><h4>This guide</h4><ul><li><a href="#overview" onClick={(e)=>{e.preventDefault();setPage('overview')}}>Overview</a></li><li><a href="#series" onClick={(e)=>{e.preventDefault();setPage('series')}}>Sermon series</a></li><li><a href="#events" onClick={(e)=>{e.preventDefault();setPage('events')}}>Events</a></li></ul></div>
          <div><h4>Command</h4><ul><li><a href="#overview" onClick={(e)=>e.preventDefault()}>Dashboard</a></li></ul></div>
          <div><h4>Church office</h4><ul><li><a href="#overview" onClick={(e)=>e.preventDefault()}>Contact us</a></li><li><a href="#overview" onClick={(e)=>e.preventDefault()}>6225 Lake Gray Blvd Ste 2<br/>Jacksonville, FL 32244</a></li></ul></div>
        </div>
        <div className="footer-base"><p style={{margin:0}}>Journey Command · internal</p><p style={{margin:0}}>© 2026 Journey Church</p></div>
      </div>
    </footer>
  </>);
}
ReactDOM.createRoot(document.getElementById('root')).render(<Command/>);
