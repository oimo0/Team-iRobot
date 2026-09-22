
const products=window.TEAM_IROBOT_PRODUCTS||[];
const picker=document.getElementById("comparePicker"),out=document.getElementById("compareOutput");
const initial=(new URLSearchParams(location.search).get("models")||"").split(",").filter(Boolean);
picker.innerHTML=products.map(p=>`<label class="compare-choice"><input type="checkbox" value="${p.id}" ${initial.includes(p.id)?"checked":""}><b>${p.short}</b><br><small>${p.family} / ${p.year}</small></label>`).join("");
function render(){
 let selected=[...picker.querySelectorAll("input:checked")].map(x=>products.find(p=>p.id===x.value)).filter(Boolean);
 if(selected.length>3){event?.target&&(event.target.checked=false);selected=selected.slice(0,3)}
 if(!selected.length){out.innerHTML="<p class='notice'>比較したいモデルを1〜3台選んでね。</p>";return}
 const rows=[["吸引力","suction"],["水拭き","mop"],["ステーション","dock"],["ナビ","navigation"],["障害物回避","obstacle"],["向いている使い方","bestFor"]];
 out.innerHTML=`<table><thead><tr><th>項目</th>${selected.map(p=>`<th><a href="./product.html?id=${p.id}">${p.short}</a></th>`).join("")}</tr></thead><tbody>${rows.map(r=>`<tr><th>${r[0]}</th>${selected.map(p=>`<td>${p[r[1]]}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
}
picker.addEventListener("change",render);render();
