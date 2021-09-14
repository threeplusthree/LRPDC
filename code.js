let bde=document.querySelector('body');
let lde=document.querySelector('#lrpdc');
let cde=document.querySelector('#clock');
bde.addEventListener('click',()=>{
  let v=(prompt("Probability:"));
  if(v===null)return;
  v=(Number)(v);
  if(v>1)v=1/v;
  let r=20/(Math.PI)*(Math.atan(Math.log(1/v)));
  if(r===10)lde.innerHTML='10';
  else{
    let h='';
    h+="<span id='large'>";
    h+=(String)(Math.floor(r));
    h+="</span><span id='small'>.";
    let t=(String)(Math.floor(100*(r-Math.floor(r))));
    if(t.length===1)h+='0';
    h+=(String)(Math.floor(100*(r-Math.floor(r))));
    h+="</span>";
    lde.innerHTML=h;
  }
  let color='#ffffff';
  if(0<=r&&r<2)color='rgb('+(2-r)/2*255+',255,255)';
  else if(2<=r&&r<4)color='rgb(0,255,'+(4-r)/2*255+')';
  else if(4<=r&&r<6)color='rgb('+(r-4)/2*255+',255,0)';
  else if(6<=r&&r<8)color='rgb(255,'+(8-r)/2*255+',0)';
  else if(8<=r&&r<=10)color='rgb('+(10-r)/2*255+',0,0)';
  bde.style.backgroundColor=color;
});

function clo(){
  let d=new Date();
  let h='';
  h+=(String)(d.getHours())+':';
  if((String)(d.getMinutes()).length===1)h+='0';
  h+=(String)(d.getMinutes())+':';
  if((String)(d.getSeconds()).length===1)h+='0';
  h+=(String)(d.getSeconds());
  cde.innerHTML=h;
}
setInterval(clo,10);
