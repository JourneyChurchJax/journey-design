const { Headline, Eyebrow, Button, Facts, Step, Scripture, Disclose } = window.JourneyChurchDesignSystem_84738d;
const HOME_A = '../../assets';

function HomeScreen(){
  return (<>
    <section className="on-deep grain" style={{position:'relative',overflow:'hidden',paddingTop:'clamp(4rem,8vw,7rem)'}}>
      <div style={{position:'absolute',inset:0,zIndex:0}}>
        <div className="photo scrim-left"><span style={{backgroundImage:`url('${HOME_A}/photo/congregation-hands-raised.jpg')`}}/></div>
      </div>
      <div className="container-x" style={{position:'relative',zIndex:2}}>
        <Eyebrow dot>Sundays 9:00 &amp; 11:00 AM</Eyebrow>
        <Headline as="h1" size="hero" accent="are" style={{marginTop:'1rem',maxWidth:'14ch'}}>Come as you</Headline>
        <p className="t-lead muted" style={{marginTop:'2rem',maxWidth:'32rem'}}>We are one church in Jacksonville, learning to make room for God and for each other. If you are new, the first step is just showing up. We will take it from there.</p>
        <div className="btn-row" style={{marginTop:'2.5rem'}}>
          <Button href="#visit">Plan a visit</Button>
          <Button variant="ghost" href="#messages">Watch a message</Button>
        </div>
      </div>
    </section>

    <section className="container-x">
      <div className="split">
        <div className="stack">
          <Eyebrow>This Sunday</Eyebrow>
          <Facts items={[
            {label:'When', value:'Sundays 9:00 & 11:00 AM'},
            {label:'Where', value:<>6225 Lake Gray Blvd Ste 2<br/>Jacksonville, FL 32244</>},
            {label:'Kids', value:'Birth through fifth grade, every service'},
          ]}/>
        </div>
        <div className="stack-lg">
          <Headline size="h2" accent="room">There is</Headline>
          <p className="t-lead">Park anywhere. Someone in a red shirt will point you at a door. Check your kids in at the first desk inside, then find a seat. The service runs about seventy-five minutes.</p>
          <div className="grid3">
            <Step number="01" title="Park anywhere">Someone will meet you before you reach the door.</Step>
            <Step number="02" title="Check kids in">The desk is the first thing inside.</Step>
            <Step number="03" title="Find a seat">Coffee's on. Nobody will single you out.</Step>
          </div>
        </div>
      </div>
    </section>

    <section className="on-alt">
      <div className="container-x">
        <Eyebrow>Current series</Eyebrow>
        <div className="split" style={{marginTop:'1.5rem'}}>
          <div className="stack">
            <img src={HOME_A+'/series/series-a-house-built-title-1920x1080.png'} alt="A House Built for His Presence series artwork" style={{width:'100%',display:'block'}}/>
          </div>
          <div className="stack-lg">
            <Headline size="h2" accent="Presence">A House Built for His</Headline>
            <p className="t-lead muted">Our culture, vision, and values. Six weeks on what it means to be a people God is willing to live in.</p>
            <Scripture reference="Ephesians 2:22">In him you also are being built together into a dwelling place for God by the <em>Spirit</em>.</Scripture>
            <div className="btn-row"><Button variant="outline" href="#messages" arrow>All messages</Button></div>
          </div>
        </div>
      </div>
    </section>

    <section className="container-x">
      <Eyebrow>Questions people actually ask</Eyebrow>
      <div style={{marginTop:'1.5rem',maxWidth:'56rem'}}>
        <Disclose summary="What should I wear?">Whatever you already own. Most people are in jeans.</Disclose>
        <Disclose summary="Where do my kids go?">Kids have their own space from birth through fifth grade, in both services. Check in at the desk inside the front doors.</Disclose>
        <Disclose summary="How long is a service?">About seventy-five minutes.</Disclose>
        <Disclose summary="Will anyone put me on the spot?">No. You will not be asked to stand, introduce yourself, or give.</Disclose>
      </div>
    </section>

    <section className="on-dark grain">
      <div className="container-x split">
        <div>
          <Eyebrow dot>Next steps</Eyebrow>
          <Headline size="display" accent="table" style={{marginTop:'.8rem'}}>Come find a</Headline>
        </div>
        <div className="stack">
          <p className="t-lead">Discipleship Groups launch in January. Sign-ups open Jan 4 in the lobby, and groups start the week of Jan 18.</p>
          <p className="t-lead muted">Journey Students meet Wednesdays at 7 PM in Room 200. The Healing Room is quarterly, in the Chapel.</p>
          <div className="btn-row" style={{marginTop:'.5rem'}}>
            <Button href="#visit">Plan a visit</Button>
            <Button variant="ghost" href="#give">Give</Button>
          </div>
        </div>
      </div>
    </section>
  </>);
}
window.HomeScreen = HomeScreen;
