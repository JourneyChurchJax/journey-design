const { Nav, Footer, Button } = window.JourneyChurchDesignSystem_84738d;
const A = '../../assets';

function Site(){
  const [page, setPage] = React.useState('home');
  const go = (p) => (e) => { if (e) e.preventDefault(); setPage(p); window.scrollTo(0,0); };
  const links = [
    { label:'Visit', href:'#visit', current: page==='visit' },
    { label:'Messages', href:'#messages', current: page==='messages' },
    { label:'Groups', href:'#messages' },
    { label:'Give', href:'#give', current: page==='give' },
  ].map(l => ({...l, onSelect:l.label}));
  const Screens = { home: HomeScreen, visit: VisitScreen, messages: MessagesScreen, give: GiveScreen };
  const Screen = Screens[page] || HomeScreen;
  return (
    <div onClick={(e)=>{
      const a = e.target.closest('a[href^="#"]');
      if(!a) return;
      const t = a.getAttribute('href').slice(1);
      if(Screens[t]){ e.preventDefault(); setPage(t); window.scrollTo(0,0); }
    }}>
      <Nav logoSrc={A+'/logo/horizontal-ember_ink.png'} href="#home" links={links}
           cta={<Button size="sm" href="#visit">Plan a visit</Button>} />
      <main id="main"><Screen go={go} /></main>
      <Footer
        blurb={{ title:'Journey Church', text:'Sundays 9:00 & 11:00 AM. Kids have their own space from birth through fifth grade. Come early, coffee\u2019s on.' }}
        columns={[
          { title:'Visit', links:[{label:'Plan a visit',href:'#visit'},{label:'What to expect',href:'#visit'},{label:'Kids',href:'#visit'}] },
          { title:'Next steps', links:[{label:'Messages',href:'#messages'},{label:'Discipleship Groups',href:'#messages'},{label:'Baptism',href:'#visit'}] },
          { title:'Church office', links:[{label:'Contact us',href:'#visit'},{label:'6225 Lake Gray Blvd Ste 2',href:'#visit'},{label:'Jacksonville, FL 32244',href:'#visit'}] },
        ]}
        base={{ left:'Journey Church · Jacksonville, Florida', right:'\u00a9 2026 Journey Church' }} />
    </div>
  );
}
ReactDOM.createRoot(document.getElementById('root')).render(<Site/>);
