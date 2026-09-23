(() => {
  const phones = [...(window.TEAM_GADGET_PHONES || [])];
  const news = [...(window.TEAM_GADGET_NEWS || [])];
  const $ = s => document.querySelector(s);
  const $$ = s => [...document.querySelectorAll(s)];
  const esc = s => String(s ?? "").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[m]));
  const state={query:"",brand:"all",origin:"all",os:"all",form:"all",year:"all",tier:"all",sort:"newest",visible:36,compare:[]};

  const labels={
    bar:"通常",fold:"横折り",flip:"縦折り",
    flagship:"フラッグシップ",premium:"ハイエンド",mid:"ミドル",entry:"エントリー",gaming:"ゲーミング"
  };

  function uniq(key){return [...new Set(phones.map(p=>p[key]).filter(Boolean))].sort((a,b)=>String(a).localeCompare(String(b),"ja"))}
  function fillSelect(id,key,label){
    const el=$(id); if(!el)return;
    el.innerHTML='<option value="all">'+label+'：すべて</option>'+uniq(key).map(v=>'<option value="'+esc(v)+'">'+esc(v)+'</option>').join("");
  }
  fillSelect("#brandFilter","brand","ブランド");
  fillSelect("#originFilter","origin","地域");
  fillSelect("#osFilter","os","OS");
  fillSelect("#formFilter","form","形");
  fillSelect("#yearFilter","year","年");
  fillSelect("#tierFilter","tier","クラス");

  function filtered(){
    const q=state.query.trim().toLowerCase();
    let rows=phones.filter(p =>
      (!q || [p.brand,p.name,p.chip,p.camera,p.display,p.battery].join(" ").toLowerCase().includes(q)) &&
      (state.brand==="all"||p.brand===state.brand) &&
      (state.origin==="all"||p.origin===state.origin) &&
      (state.os==="all"||p.os===state.os) &&
      (state.form==="all"||p.form===state.form) &&
      (state.year==="all"||String(p.year)===state.year) &&
      (state.tier==="all"||p.tier===state.tier)
    );
    rows.sort((a,b)=>{
      if(state.sort==="oldest") return a.date.localeCompare(b.date);
      if(state.sort==="name") return a.name.localeCompare(b.name,"ja");
      if(state.sort==="brand") return a.brand.localeCompare(b.brand,"ja")||b.date.localeCompare(a.date);
      return b.date.localeCompare(a.date);
    });
    return rows;
  }

  function fmtDate(p){
    if(!p.date)return "—";
    const d=p.date.replaceAll("-",".");
    return p.status==="upcoming"?d+" 予定":d;
  }

  function renderPhones(){
    const grid=$("#worldPhoneGrid");
    if(!grid) return;
    const rows=filtered();
    const count=$("#phoneCount");
    if(count) count.textContent=rows.length+" MODELS";
    grid.innerHTML=rows.slice(0,state.visible).map(p=>{
      const selected=state.compare.includes(p.id);
      return '<article class="world-phone-card">'+
        '<div class="world-phone-top"><span>'+esc(fmtDate(p))+'</span><button class="compare-add '+(selected?'is-selected':'')+'" data-compare="'+esc(p.id)+'">'+(selected?'比較中 ✓':'比較 +')+'</button></div>'+
        '<div class="world-phone-brand">'+esc(p.brand)+' / '+esc(p.origin)+'</div>'+
        '<h3>'+esc(p.name)+'</h3>'+
        '<div class="world-phone-tags"><span>'+esc(p.os)+'</span><span>'+esc(labels[p.form]||p.form)+'</span><span>'+esc(labels[p.tier]||p.tier)+'</span></div>'+
        '<div class="world-phone-spec"><span>CHIP</span><b>'+esc(p.chip||"—")+'</b></div>'+
        '<div class="world-phone-spec"><span>CAMERA</span><b>'+esc(p.camera||"—")+'</b></div>'+
        '<a class="world-phone-link" href="'+esc(p.url)+'" target="_blank" rel="noopener">公式情報 ↗</a>'+
      '</article>';
    }).join("");
    const more=$("#loadMorePhones"), empty=$("#emptyPhones");
    if(more) more.hidden=state.visible>=rows.length;
    if(empty) empty.hidden=rows.length>0;
  }

  function renderCompare(){
    const panel=$("#comparePanel");
    if(!panel) return;
    const rows=state.compare.map(id=>phones.find(p=>p.id===id)).filter(Boolean);
    const count=$("#compareCount");
    if(count) count.textContent=rows.length+"/4";
    if(rows.length<2){
      panel.innerHTML='<div class="compare-empty">一覧の「比較 +」から2〜4台選ぶと、ここに比較表が出ます。</div>';
      return;
    }
    const fields=[["発売/発表","date"],["ブランド","brand"],["OS","os"],["形","form"],["クラス","tier"],["チップ","chip"],["カメラ","camera"],["バッテリー","battery"],["充電","charge"],["ディスプレイ","display"]];
    panel.innerHTML='<div class="world-compare-wrap"><table class="world-compare-table"><thead><tr><th>項目</th>'+rows.map(p=>'<th>'+esc(p.name)+'<button data-remove="'+esc(p.id)+'">×</button></th>').join("")+'</tr></thead><tbody>'+
      fields.map(([label,key])=>'<tr><th>'+label+'</th>'+rows.map(p=>'<td>'+esc(key==="date"?fmtDate(p):(labels[p[key]]||p[key]||"—"))+'</td>').join("")+'</tr>').join("")+
      '</tbody></table></div>';
  }

  function renderNews(){
    const el=$("#moreNewsList");
    if(!el)return;
    el.innerHTML=news.map(n=>'<a href="'+esc(n.url)+'" target="_blank" rel="noopener"><span>'+esc(n.date.replaceAll("-","."))+'</span><div><b>'+esc(n.brand)+'</b><strong>'+esc(n.title)+'</strong><p>'+esc(n.desc)+'</p></div><em>→</em></a>').join("");
  }

  $("#phoneSearch")?.addEventListener("input",e=>{state.query=e.target.value;state.visible=36;renderPhones()});
  [["#brandFilter","brand"],["#originFilter","origin"],["#osFilter","os"],["#formFilter","form"],["#yearFilter","year"],["#tierFilter","tier"],["#sortFilter","sort"]].forEach(([sel,key])=>$(sel)?.addEventListener("change",e=>{state[key]=e.target.value;state.visible=36;renderPhones()}));
  $("#resetFilters")?.addEventListener("click",()=>{state.query="";state.brand=state.origin=state.os=state.form=state.year=state.tier="all";state.sort="newest";state.visible=36;$("#phoneSearch").value="";["#brandFilter","#originFilter","#osFilter","#formFilter","#yearFilter","#tierFilter"].forEach(s=>$(s).value="all");$("#sortFilter").value="newest";renderPhones()});
  $("#loadMorePhones")?.addEventListener("click",()=>{state.visible+=36;renderPhones()});

  $("#worldPhoneGrid")?.addEventListener("click",e=>{
    const b=e.target.closest("[data-compare]"); if(!b)return;
    const id=b.dataset.compare;
    if(state.compare.includes(id)) state.compare=state.compare.filter(x=>x!==id);
    else if(state.compare.length<4) state.compare.push(id);
    else {
      const notice=$("#compareNotice");
      if(notice){
        notice.textContent="比較は最大4台までです。";
        setTimeout(()=>notice.textContent="",1800);
      }
    }
    renderPhones();renderCompare();
  });
  $("#comparePanel")?.addEventListener("click",e=>{
    const b=e.target.closest("[data-remove]"); if(!b)return;
    state.compare=state.compare.filter(x=>x!==b.dataset.remove);renderPhones();renderCompare();
  });
  $("#clearCompare")?.addEventListener("click",()=>{state.compare=[];renderPhones();renderCompare()});

  const button=$("#menuButton"),close=$("#menuClose"),menu=$("#mobileMenu");
  if(button&&menu){
    const closeMenu=()=>{menu.hidden=true;button.setAttribute("aria-expanded","false");document.body.style.overflow=""};
    const openMenu=()=>{menu.hidden=false;button.setAttribute("aria-expanded","true");document.body.style.overflow="hidden"};
    button.addEventListener("click",()=>button.getAttribute("aria-expanded")==="true"?closeMenu():openMenu());
    close?.addEventListener("click",closeMenu);
    menu.addEventListener("click",e=>{if(e.target===menu||e.target.matches("a"))closeMenu()});
  }

  renderPhones();renderCompare();renderNews();
})();