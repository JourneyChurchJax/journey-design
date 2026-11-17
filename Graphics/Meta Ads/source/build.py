# Builds the Meta ad artboards (HTML) for Christmas Eve 2026 and Plan a Visit.
# Run: python3 build.py  -> writes one HTML per ad and size next to this file.
import os
H=os.path.dirname(os.path.abspath(__file__))
HEAD='''<!doctype html><html><head><meta charset="utf-8"><link rel="stylesheet" href="../../../styles.css"><link rel="stylesheet" href="../../../slides/social.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lora:wght@500&family=Montserrat:wght@500;600&display=swap">
<style>html,body{margin:0;background:#888}.lora{font-family:Lora,serif;font-weight:500}.mont{font-family:Montserrat,sans-serif;font-weight:500;letter-spacing:.16em;text-transform:uppercase}</style></head><body>
'''
P='../../../assets/photo/'; J='../../../assets/logo/'
def page(name,w,h,body):
    cls='pt' if h==1350 else 'st'
    open(os.path.join(H,name+'.html'),'w').write(HEAD+f'<div class="ab {cls}" id="ad">\n{body}\n</div>\n</body></html>\n')

for h in (1350,1920):
    st=h==1920
    # CE1: Love Has Come series art, Christmas Eve facts in the series' own type
    y=1000 if not st else 1360
    page(f'ce1-series-{h}',1080,h,f'''<div class="ph" style="inset:0;background-image:url(img/lhc-title-{h}.jpg);filter:none"></div>
<div class="abs" style="left:0;right:0;top:{y-140}px;height:{360 if not st else 420}px;background:radial-gradient(ellipse 60% 55% at 50% 50%,rgba(5,5,5,.85),rgba(5,5,5,0))"></div>
<div class="abs lora" style="left:0;right:0;top:{y-60}px;text-align:center;font-size:{74 if not st else 70}px;color:#fff;line-height:1">Christmas Eve by candlelight</div>
<div class="abs mont" style="left:0;right:0;top:{y+40}px;text-align:center;font-size:{36 if not st else 38}px;color:#fff">Thu, Dec 24 &nbsp;·&nbsp; 3:30 &amp; 5:00 PM</div>
<div class="abs mont" style="left:0;right:0;top:{y+100}px;text-align:center;font-size:{24 if not st else 26}px;color:rgba(255,255,255,.85)">6225 Lake Gray Blvd Ste 2</div>''')

    # CE2: red field, house look, all white type
    t=150 if not st else 330
    page(f'ce2-red-field-{h}',1080,h,f'''<div class="abs redbg" style="inset:0"></div>
<div class="gh gred" style="left:-30px;bottom:{-60 if not st else 180}px;font-size:420px">Dec 24</div>
<div class="abs f" style="left:80px;top:{t}px;font-size:{196 if not st else 220}px;color:#fff;width:940px">Love<br>has come.</div>
<div class="abs i" style="left:84px;top:{t+(420 if not st else 470)}px;font-size:{50 if not st else 56}px;color:#fff;width:900px;line-height:1.2">Spend Christmas Eve with us by candlelight.</div>
<div class="abs" style="left:84px;top:{t+(640 if not st else 720)}px;color:#fff">
 <div class="i" style="font-size:24px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;opacity:.85">When</div>
 <div class="i" style="font-size:44px;font-weight:700;margin:6px 0 26px">Thu Dec 24 · 3:30 &amp; 5 PM</div>
 <div class="i" style="font-size:24px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;opacity:.85">Where</div>
 <div class="i" style="font-size:44px;font-weight:700;margin-top:6px">6225 Lake Gray Blvd Ste 2</div>
</div>
<img class="J" src="{J}mark-white-heavy.png" style="right:80px;top:{t+(650 if not st else 730)}px;height:130px">''')

    # CE3: our photo on top, black band (evening) with the facts
    band=430 if not st else 640
    page(f'ce3-photo-black-band-{h}',1080,h,f'''<div class="ph" style="inset:0 0 {band}px 0;background-image:url({P}room-under-the-cross.jpg);background-position:50% 40%"></div>
<div class="scrim" style="bottom:{band}px;height:460px"></div>
<div class="abs f" style="left:70px;bottom:{band+40}px;font-size:{140 if not st else 160}px;color:#fff;width:960px">Bring the people <span class="em">you love.</span></div>
<div class="band dark" style="height:{band}px"></div>
<div class="gh gw2" style="right:-40px;bottom:{-70 if not st else 30}px;font-size:300px">Dec 24</div>
<div class="abs f" style="left:68px;bottom:{band-170}px;font-size:{120 if not st else 130}px;color:#fff">Christmas Eve</div>
<div class="abs i" style="left:74px;bottom:{band-240}px;font-size:46px;font-weight:700;color:#fff">Thu Dec 24 · 3:30 &amp; 5:00 PM</div>
<div class="abs i" style="left:74px;bottom:{band-296}px;font-size:34px;color:rgba(255,255,255,.85)">6225 Lake Gray Blvd Ste 2, Jacksonville</div>
<img class="J" src="{J}mark-white-heavy.png" style="right:66px;bottom:{band-176}px;height:124px">''')

    # PAV1: no band, type on the photo
    page(f'pav1-photo-{h}',1080,h,f'''<div class="ph" style="inset:0;background-image:url({P}worship-stage-and-room.jpg);background-position:42% 50%"></div>
<div class="scrim" style="bottom:0;height:{820 if not st else 1150}px;background:linear-gradient(to top,rgba(5,5,5,.8),rgba(5,5,5,0))"></div>
<div class="abs f" style="left:70px;bottom:{330 if not st else 560}px;font-size:{150 if not st else 170}px;color:#fff;width:960px">Nobody here had it <span class="em">together</span> first.</div>
<div class="abs i" style="left:74px;bottom:{240 if not st else 470}px;font-size:48px;font-weight:700;color:#fff">Sundays 9:00 &amp; 11:00 AM</div>
<div class="abs place" style="left:74px;bottom:{180 if not st else 410}px;font-size:32px;color:rgba(255,255,255,.88)">Lake Gray Blvd · Jacksonville</div>
<img class="J" src="{J}mark-white-heavy.png" style="right:70px;bottom:{176 if not st else 406}px;height:120px">''')

    # PAV2: our photo on top, white band with the facts
    band=500 if not st else 700
    page(f'pav2-photo-white-band-{h}',1080,h,f'''<div class="ph" style="inset:0 0 {band}px 0;background-image:url({P}hug-by-the-cross.jpg);background-position:42% 45%"></div>
<div class="scrim" style="bottom:{band}px;height:460px"></div>
<div class="abs f" style="left:70px;bottom:{band+40}px;font-size:{124 if not st else 150}px;color:#fff;width:960px">Wear whatever you wore <span class="em">yesterday.</span></div>
<div class="band" style="height:{band}px"></div>
<div class="gh gink" style="right:-40px;bottom:{-90 if not st else 40}px;font-size:240px">Sunday</div>
<div class="abs f" style="left:68px;bottom:{band-170}px;font-size:{124 if not st else 134}px">Sundays</div>
<div class="abs i" style="left:74px;bottom:{band-240}px;font-size:46px;font-weight:700">9:00 &amp; 11:00 AM</div>
<div class="abs i" style="left:74px;bottom:{band-300}px;font-size:34px;color:var(--mute)">Free coffee. Kids birth through 5th grade.</div>
<div class="abs i" style="left:74px;bottom:{band-350}px;font-size:34px;color:var(--mute)">6225 Lake Gray Blvd Ste 2, Jacksonville</div>
<img class="J" src="{J}mark-ink-heavy.png" style="right:66px;bottom:{band-176}px;height:124px">''')
