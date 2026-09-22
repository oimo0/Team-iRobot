
const params=new URLSearchParams(location.search);
const id=params.get("id");
const p=(window.TEAM_IROBOT_PRODUCTS||[]).find(x=>x.id===id) || (window.TEAM_IROBOT_PRODUCTS||[])[0];
const root=document.getElementById("productDetail");
if(!p){ root.innerHTML="<p>製品データがありません。</p>"; }
else{
 document.title=p.name+" | Team iRobot";
 root.innerHTML=`
 <section class="detail-hero">
  <div class="detail-visual"><img src="${p.image}" alt="${p.name}" onerror="this.style.opacity=.15"></div>
  <div><div class="page-kicker">${p.family.toUpperCase()} / ${p.year}</div><h1 class="detail-name">${p.name}</h1><p class="detail-summary">${p.summary}</p><a class="primary-link" href="${p.official}" target="_blank" rel="noopener">公式情報を見る ↗</a></div>
 </section>
 <section class="fact-grid">
  <div class="fact"><span>SUCTION</span><b>${p.suction}</b></div>
  <div class="fact"><span>MOP</span><b>${p.mop}</b></div>
  <div class="fact"><span>DOCK</span><b>${p.dock}</b></div>
  <div class="fact"><span>NAVIGATION</span><b>${p.navigation}</b></div>
  <div class="fact"><span>OBSTACLE</span><b>${p.obstacle}</b></div>
  <div class="fact"><span>BEST FOR</span><b>${p.bestFor}</b></div>
 </section>
 <section class="detail-sections">
  <article class="detail-panel"><div class="page-kicker">TEAM IROBOT VIEW</div><h2>このモデルの見どころ</h2><ul><li>${p.summary}</li><li>ナビゲーションは「${p.navigation}」。</li><li>ステーション構成は「${p.dock}」。</li><li>購入前は、設置スペースと床材・ラグの構成を確認すると選びやすい。</li></ul></article>
  <article class="detail-panel"><div class="page-kicker">NEXT</div><h2>比べて決める</h2><p class="detail-summary">他モデルとの差は比較ページで並べて確認できる。</p><a class="primary-link" href="./compare.html?models=${p.id}">比較ページへ →</a></article>
 </section>`;
}
