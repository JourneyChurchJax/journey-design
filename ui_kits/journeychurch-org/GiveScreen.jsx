const { Headline, Eyebrow, Button, Meter, Facts, Disclose, Field } = window.JourneyChurchDesignSystem_84738d;
const GIVE_A = '../../assets';
const AMOUNTS = ['$25','$50','$100','$250'];

function GiveScreen(){
  const [amount, setAmount] = React.useState('$50');
  const [freq, setFreq] = React.useState('One time');
  return (<>
    <section className="on-deep grain" style={{position:'relative',overflow:'hidden',paddingTop:'clamp(4rem,8vw,7rem)'}}>
      <div style={{position:'absolute',inset:0,zIndex:0}}>
        <div className="photo scrim-left"><span style={{backgroundImage:`url('${GIVE_A}/photo/hands-open-dark.jpg')`}}/></div>
      </div>
      <div className="container-x" style={{position:'relative',zIndex:2}}>
        <Eyebrow dot>Arise &amp; Build</Eyebrow>
        <Headline as="h1" size="hero" accent="way" style={{marginTop:'1rem',maxWidth:'15ch'}}>Two-thirds of the</Headline>
        <p className="t-lead muted" style={{marginTop:'2rem',maxWidth:'32rem'}}>Everything given here goes to the building we are growing into, and to the work that happens in it every week.</p>
        <div style={{maxWidth:'34rem',marginTop:'2.5rem'}}>
          <Meter pct={66} left="Raised · $660,000" right="Goal · figure TBC"/>
        </div>
      </div>
    </section>

    <section className="container-x">
      <div className="split">
        <div className="stack-lg">
          <Headline size="h2" accent="give">How to</Headline>
          <div className="stack">
            <p className="field-label" style={{color:'var(--ink-400)'}}>Amount</p>
            <div className="btn-row">
              {AMOUNTS.map(a=>(
                <Button key={a} size="sm" variant={amount===a?'primary':'outline'} onClick={()=>setAmount(a)}>{a}</Button>
              ))}
            </div>
          </div>
          <div className="stack">
            <p className="field-label" style={{color:'var(--ink-400)'}}>How often</p>
            <div className="btn-row">
              {['One time','Every week','Every month'].map(f=>(
                <Button key={f} size="sm" variant={freq===f?'dark':'outline'} onClick={()=>setFreq(f)}>{f}</Button>
              ))}
            </div>
          </div>
          <Field id="g-email" label="Email for the receipt" style="box" placeholder="you@example.com"/>
          <div className="btn-row"><Button>Give {amount} {freq==='One time'?'once':freq.toLowerCase()}</Button></div>
          <p className="muted" style={{margin:0,fontSize:'.875rem',maxWidth:'34rem'}}>This screen is a mock. It does not take a real gift, and no processor was named in the brand handoff.</p>
        </div>
        <div className="stack-lg">
          <Eyebrow>Other ways</Eyebrow>
          <Facts items={[
            {label:'In person', value:'Either service, Sundays 9:00 & 11:00 AM'},
            {label:'By mail', value:<>6225 Lake Gray Blvd Ste 2<br/>Jacksonville, FL 32244</>},
          ]}/>
          <div style={{maxWidth:'44rem'}}>
            <Disclose summary="Where does it go?" defaultOpen>Two-thirds of Arise &amp; Build is raised. The figures on this page come from a live source before they run anywhere.</Disclose>
            <Disclose summary="Can I give to one thing?">Yes. Note it with the gift and the office will route it.</Disclose>
          </div>
        </div>
      </div>
    </section>
  </>);
}
window.GiveScreen = GiveScreen;
