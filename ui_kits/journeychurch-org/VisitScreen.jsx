const { Headline, Eyebrow, Button, Facts, Disclose, Field, Step } = window.JourneyChurchDesignSystem_84738d;
const VISIT_A = '../../assets';

function VisitScreen(){
  const [sent, setSent] = React.useState(false);
  return (<>
    <section className="on-deep grain" style={{position:'relative',overflow:'hidden',paddingTop:'clamp(4rem,8vw,7rem)'}}>
      <div style={{position:'absolute',inset:0,zIndex:0}}>
        <div className="photo scrim-left"><span style={{backgroundImage:`url('${VISIT_A}/photo/two-bowed-together.jpg')`}}/></div>
      </div>
      <div className="container-x" style={{position:'relative',zIndex:2}}>
        <Eyebrow dot>Plan your visit</Eyebrow>
        <Headline as="h1" size="hero" accent="Sunday" style={{marginTop:'1rem',maxWidth:'16ch'}}>Everything you need for</Headline>
        <p className="t-lead muted" style={{marginTop:'2rem',maxWidth:'32rem'}}>Tell us you are coming and someone will meet you at the door. You do not have to, but it makes the first Sunday easier.</p>
      </div>
    </section>

    <section className="container-x">
      <div className="split">
        <div className="stack">
          <Eyebrow>The details</Eyebrow>
          <Facts items={[
            {label:'When', value:'Sundays 9:00 & 11:00 AM'},
            {label:'Where', value:<>6225 Lake Gray Blvd Ste 2<br/>Jacksonville, FL 32244</>},
            {label:'Cost', value:'Nothing'},
          ]}/>
          <hr className="rule"/>
          <div className="grid2">
            <Step number="01" title="Park anywhere">There is no visitor lot to find.</Step>
            <Step number="02" title="Check kids in">Birth through fifth grade, both services.</Step>
          </div>
        </div>
        <div className="stack-lg">
          <Headline size="h2" accent="coming">Tell us you're</Headline>
          {sent ? (
            <div className="box" style={{background:'var(--ink-100)',padding:'1.5rem',display:'flex',flexDirection:'column',gap:'.6rem'}}>
              <p style={{margin:0,fontFamily:'var(--font-display)',fontWeight:700,fontSize:'1.1rem',letterSpacing:'-.02em'}}>We have it. See you Sunday.</p>
              <p className="muted" style={{margin:0,fontSize:'.9375rem'}}>Someone will be near the front doors at both services.</p>
            </div>
          ) : (
            <div className="stack">
              <Field id="v-name" label="Name" style="box" placeholder="First and last"/>
              <Field id="v-email" label="Email" style="box" placeholder="you@example.com"/>
              <Field id="v-when" label="Which Sunday" style="box" placeholder="Oct 18"/>
              <Field id="v-kids" label="Kids coming with you" style="box" as="select">
                <option>No kids this time</option>
                <option>Nursery, birth to two</option>
                <option>Preschool, three to five</option>
                <option>Elementary, K through fifth</option>
              </Field>
              <div className="btn-row" style={{marginTop:'.5rem'}}>
                <Button onClick={()=>setSent(true)}>Let them know</Button>
                <Button variant="outline" href="#messages">Watch first instead</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>

    <section className="on-alt">
      <div className="container-x">
        <Eyebrow>Before you come</Eyebrow>
        <div style={{marginTop:'1.5rem',maxWidth:'56rem'}}>
          <Disclose summary="What should I wear?" defaultOpen>Whatever you already own. Most people are in jeans.</Disclose>
          <Disclose summary="Do I have to sign anything?">No. Kids check-in takes a name and a phone number, and that is the whole ask.</Disclose>
          <Disclose summary="Is there somewhere to be prayed for?">The Healing Room meets quarterly in the Chapel. Anyone can come and be prayed for.</Disclose>
        </div>
      </div>
    </section>
  </>);
}
window.VisitScreen = VisitScreen;
