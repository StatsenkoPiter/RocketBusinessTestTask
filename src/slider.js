var count = sld.childElementCount;
var step = sld.clientWidth/count;
var curPage = 1;
sld.style.left = 0;
shiftSlder (0);

var ResObr = new ResizeObserver (
    ()=> {step = sld.clientWidth/count;}
);
ResObr.observe(sldw);

ra.onclick = la.onclick = (e)=> {
    var sh = (e.currentTarget.id=='ra'?step:-step);
    if (sh>0)
        {if (curPage == 1)  {curPage = count-1; sh = (count-1)*-step;}}
    else
        {if (curPage == count)  {curPage = 2; sh = (count-1)*step;}};
    shiftSlder (sh);
};

function shiftSlder (s) {
    sld.style.left = parseInt(sld.style.left)+s+'px';
    curPage -= Math.sign(s);
    pg.innerHTML = curPage;
    tl.innerHTML = '/'+count;
};