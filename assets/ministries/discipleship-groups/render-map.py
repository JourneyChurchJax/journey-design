import json,sys
from PIL import Image,ImageDraw
roads=json.load(open('roads2.json'))['elements'];water=json.load(open('water2.json'))['elements']
PAL={'dark':dict(bg='#1E1D1B',w='#6FA09C',r=['#2F2E2B','#3B3936','#47443F','#58544D']),
     'red':dict(bg='#FF3A3A',w='#C41C1C',r=['#F23232','#E82C2C','#DC2626','#CE2020'])}
cls={'residential':0,'unclassified':0,'tertiary':1,'secondary':1,'primary':2,'primary_link':2,'trunk':3,'trunk_link':2,'motorway':3,'motorway_link':2}
def rings(ways):
    segs=[[ (p['lon'],p['lat']) for p in w] for w in ways if w];out=[]
    while segs:
        r=segs.pop(0)
        while r[0]!=r[-1]:
            for i,s in enumerate(segs):
                if s[0]==r[-1]: r+=s[1:];segs.pop(i);break
                if s[-1]==r[-1]: r+=s[::-1][1:];segs.pop(i);break
            else: break
        out.append(r)
    return out
def area(r): return abs(sum(r[i][0]*r[(i+1)%len(r)][1]-r[(i+1)%len(r)][0]*r[i][1] for i in range(len(r))))/2
def draw(lo0,lo1,la0,la1,W,H,pal,out,final,wd=(2,4,6,10),minarea=6000,seed=None):
    p=PAL[pal]
    X=lambda r:[((lo-lo0)/(lo1-lo0)*W,(la1-la)/(la1-la0)*H) for lo,la in r]
    outer=[];inner=[];coast=[]
    for e in water:
        if e['type']=='way' and 'geometry' in e:
            g=X([(q['lon'],q['lat']) for q in e['geometry']])
            if e.get('tags',{}).get('natural')=='coastline': coast.append(g)
            else: outer.append(g)
        elif e['type']=='relation':
            o=[m['geometry'] for m in e['members'] if m['type']=='way' and m.get('role')!='inner' and 'geometry' in m]
            i=[m['geometry'] for m in e['members'] if m['type']=='way' and m.get('role')=='inner' and 'geometry' in m]
            outer+=[X(r) for r in rings(o)];inner+=[X(r) for r in rings(i)]
    inner=[r for r in inner if len(r)>2 and abs(r[0][0]-r[-1][0])<.01 and abs(r[0][1]-r[-1][1])<.01]
    def clip(r):
        for ax,lim,sgn in ((0,-60,1),(0,W+60,-1),(1,-60,1),(1,H+60,-1)):
            o=[];n=len(r)
            for i in range(n):
                a,b=r[i],r[(i+1)%n];ia=sgn*(a[ax]-lim)>=0;ib=sgn*(b[ax]-lim)>=0
                if ia: o.append(a)
                if ia!=ib:
                    t=(lim-a[ax])/(b[ax]-a[ax]);o.append((a[0]+t*(b[0]-a[0]),a[1]+t*(b[1]-a[1])))
            r=o
            if len(r)<3: return []
        return r
    outer=[clip(r) for r in outer if len(r)>2];inner=[clip(r) for r in inner]
    outer=[r for r in outer if len(r)>2 and area(r)>minarea];inner=[r for r in inner if len(r)>2 and area(r)>minarea]
    im=Image.new('RGB',(W,H),p['bg']);d=ImageDraw.Draw(im)
    if seed and coast:
        for g in coast: d.line(g,fill=p['w'],width=5)
        ImageDraw.floodfill(im,seed,tuple(int(p['w'][i:i+2],16) for i in (1,3,5)))
    for r in outer: d.polygon(r,fill=p['w'])
    for r in inner: d.polygon(r,fill=p['bg'])
    for k in range(4):
        for e in roads:
            if cls.get(e['tags']['highway'])==k and 'geometry' in e:
                d.line([((q['lon']-lo0)/(lo1-lo0)*W,(la1-q['lat'])/(la1-la0)*H) for q in e['geometry']],fill=p['r'][k],width=wd[k],joint='curve')
    im.resize(final,Image.LANCZOS).save(out,quality=88);print(out,len(coast))
if __name__=='__main__':
    draw(-81.98,-81.36,30.14,30.4413,3840,2160,'dark','jax-dark.jpg',(2880,1620),seed=(3835,1080))
    Image.open('jax-dark.jpg').resize((1280,720)).save('prev-jax.jpg')
