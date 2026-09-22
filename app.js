const OPENCHAT_URL = "";

const products = [
  {
    name:"Roomba Mini + AutoEmpty",
    family:"Mini",
    filters:["compact","combo","autoempty"],
    image:"https://www.irobot-jp.com/product/img/family/260219/roomba-min-ae_wh.png",
    summary:"ルンバ史上最小サイズ。使い捨て床拭きシートに対応し、AutoEmptyでゴミ収集も自動化。",
    mop:"シート式",
    dock:"AutoEmpty",
    nav:"ClearView LiDAR",
    point:"小さな間取り・省スペース",
    url:"https://www.irobot-jp.com/product/"
  },
  {
    name:"Roomba Mini Slim",
    family:"Mini",
    filters:["compact","combo"],
    image:"https://www.irobot-jp.com/product/img/family/260219/roomba-min-sc_wh.png",
    summary:"縦置きできるSlimCharge充電スタンドを採用。床の占有を抑えながら掃除機がけとシート水拭き。",
    mop:"シート式",
    dock:"SlimCharge",
    nav:"ClearView LiDAR",
    point:"置き場所を最小限に",
    url:"https://store.irobot-jp.com/item/F115060.html"
  },
  {
    name:"Roomba 105 Combo + AutoEmpty",
    family:"Roomba",
    filters:["combo","autoempty"],
    image:"",
    summary:"掃除機がけと水拭きを選べるシンプルなCombo。AutoEmptyでは最大75日分のゴミを収納する設計。",
    mop:"マイクロファイバー",
    dock:"AutoEmpty",
    nav:"ClearView LiDAR",
    point:"コスパとシンプル機能",
    url:"https://store.irobot-jp.com/item/Y351060.html"
  },
  {
    name:"Roomba Plus 405 Combo",
    family:"Plus",
    filters:["combo","autowash","autoempty"],
    image:"https://www.irobot-jp.com/product/img/family/260219/roomba-plus-405-image.png",
    summary:"DualClean回転モップとAutoWash充電ステーションを搭載。モップ洗浄・乾燥まで自動化。",
    mop:"DualClean",
    dock:"AutoWash",
    nav:"ClearView LiDAR",
    point:"水拭きの手間を減らす",
    url:"https://store.irobot-jp.com/item/G185060.html"
  },
  {
    name:"Roomba Plus 515 Combo",
    family:"Plus",
    filters:["compact","combo","autowash","autoempty"],
    image:"https://www.irobot-jp.com/product/img/family/260804/roomba-plus-515-image_pc.png?1234=",
    summary:"日本の住環境を意識したコンパクト設計。DualCleanモップ、温水洗浄・温風乾燥に対応。",
    mop:"DualClean",
    dock:"AutoWash",
    nav:"ClearView LiDAR",
    point:"コンパクト + 高機能",
    url:"https://store.irobot-jp.com/category/ROOMBA/N285060.html"
  },
  {
    name:"Roomba Max 775 Combo",
    family:"Max",
    filters:["combo","autowash","autoempty"],
    image:"https://www.irobot-jp.com/product/img/family/260717/roomba-max-775-aw-image.png",
    summary:"Maxシリーズのフラッグシップ。伸縮するPowerSpinローラーモップとAI障害物回避を組み合わせる。",
    mop:"PowerSpinローラー",
    dock:"AutoWash",
    nav:"PrecisionVision AI + ClearView Pro LiDAR",
    point:"清掃力・水拭き・障害物回避",
    url:"https://store.irobot-jp.com/item/X285060.html"
  },
  {
    name:"Roomba Max 715 Vac",
    family:"Max",
    filters:["vac","autoempty"],
    image:"https://www.irobot-jp.com/product/img/family/260717/roomba-max-715-ae-image.png",
    summary:"水拭きを省き、掃除機がけに集中したMax。強力な吸引と絡まりにくいゴム製ブラシを搭載。",
    mop:"—",
    dock:"AutoEmpty",
    nav:"ClearView Pro LiDAR",
    point:"掃除機がけを最優先",
    url:"https://www.irobot-jp.com/product/"
  }
];

const escapeHTML = (value="") => String(value).replace(/[&<>"']/g, c => ({
  "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
}[c]));

const fallbackRobot = (name) => `
  <div class="product-fallback" aria-label="${escapeHTML(name)}">
    <div class="fallback-disc"><i></i></div>
    <span>IMAGE / IROBOT OFFICIAL</span>
  </div>`;

function renderProducts(filter="all", query=""){
  const grid = document.getElementById("productGrid");
  const q = query.trim().toLowerCase();
  const visible = products.filter(p => {
    const filterOK = filter === "all" || p.filters.includes(filter);
    const text = [p.name,p.family,p.summary,p.mop,p.dock,p.nav,p.point].join(" ").toLowerCase();
    return filterOK && (!q || text.includes(q));
  });

  if(!visible.length){
    grid.innerHTML = '<div class="empty-state">条件に合う製品が見つかりませんでした。</div>';
    return;
  }

  grid.innerHTML = visible.map(p => {
    const badges = [
      '<span class="badge">'+escapeHTML(p.family.toUpperCase())+'</span>',
      p.filters.includes("autowash") ? '<span class="badge gray">AUTOWASH</span>' : "",
      p.filters.includes("autoempty") ? '<span class="badge gray">AUTOEMPTY</span>' : ""
    ].join("");
    const image = p.image
      ? '<img loading="lazy" src="'+escapeHTML(p.image)+'" alt="'+escapeHTML(p.name)+'" onerror="this.parentElement.innerHTML=window.productFallback(\''+escapeHTML(p.name).replace(/'/g,"\\'")+'\')">'
      : fallbackRobot(p.name);
    return `
      <article class="product-card">
        <div class="product-image">${image}</div>
        <div class="product-badges">${badges}</div>
        <h3>${escapeHTML(p.name)}</h3>
        <p class="summary">${escapeHTML(p.summary)}</p>
        <div class="spec-line"><span>BEST FOR</span><b>${escapeHTML(p.point)}</b></div>
        <div class="spec-line"><span>MOP</span><b>${escapeHTML(p.mop)}</b></div>
        <div class="spec-line"><span>DOCK</span><b>${escapeHTML(p.dock)}</b></div>
        <div class="spec-line"><span>NAVIGATION</span><b>${escapeHTML(p.nav)}</b></div>
        <div class="product-actions">
          <a href="${escapeHTML(p.url)}" target="_blank" rel="noopener">公式情報 →</a>
        </div>
      </article>`;
  }).join("");
}
window.productFallback = fallbackRobot;

let activeFilter = "all";
const search = document.getElementById("productSearch");
document.getElementById("filterRow").addEventListener("click", e => {
  const btn = e.target.closest("[data-filter]");
  if(!btn) return;
  activeFilter = btn.dataset.filter;
  document.querySelectorAll(".chip").forEach(el => el.classList.toggle("is-active", el === btn));
  renderProducts(activeFilter, search.value);
});
search.addEventListener("input", () => renderProducts(activeFilter, search.value));
renderProducts();

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  mobileMenu.hidden = open;
});
mobileMenu.addEventListener("click", e => {
  if(e.target.matches("a")){
    mobileMenu.hidden = true;
    menuButton.setAttribute("aria-expanded","false");
  }
});

const rail = document.getElementById("featureRail");
const cards = [...rail.querySelectorAll(".feature-card")];
const dotsWrap = document.getElementById("featureDots");
cards.forEach((_,i) => {
  const b = document.createElement("button");
  b.type = "button";
  b.setAttribute("aria-label", "特集 "+(i+1));
  if(i===0) b.classList.add("is-active");
  b.addEventListener("click", () => cards[i].scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"}));
  dotsWrap.appendChild(b);
});
if("IntersectionObserver" in window){
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(!entry.isIntersecting) return;
      const i = cards.indexOf(entry.target);
      [...dotsWrap.children].forEach((dot,n) => dot.classList.toggle("is-active", n===i));
    });
  }, {root:rail,threshold:.7});
  cards.forEach(card => io.observe(card));
}

document.getElementById("joinButton").addEventListener("click", () => {
  const hint = document.getElementById("joinHint");
  if(OPENCHAT_URL){
    window.open(OPENCHAT_URL,"_blank","noopener");
  }else{
    hint.textContent = "オープンチャットのURLをもらえれば、ここから直接参加できるように設定できます。";
    hint.style.color = "#fff";
  }
});
