const guides={
charging:{
  kicker:"CHARGING / 充電",
  title:"充電しない",
  lead:"まずは電源・充電端子・ドックとの接触を順番に確認。iRobot公式では、端子の汚れや接触不良が代表的な原因として案内されています。",
  official:[
    "ドックの電源コードを壁側・ドック側ともに一度抜き、しっかり差し直す。",
    "ロボットとドックの金属端子を確認。汚れていれば、ドックの電源を抜いてから軽く湿らせた布またはメラミンフォームで清掃する。",
    "端子が緑色・銅色に変色している、沈んだまま戻らない、破損している場合は使用を続けず公式サポートへ。",
    "改善しない場合、対応機種ではバッテリーの入れ直しによる再起動が公式案内に含まれる。機種の手順を確認して行う。"
  ],
  community:[
    "Redditでは『見た目はきれいでも接点部分だけ汚れていて、端子清掃で復活した』という報告が複数ある。",
    "前輪まわりにゴミが詰まり、ロボットがドックに正しく座らず接触不良になっていた例もある。前輪がスムーズに回るか、ロボットが傾いていないかを確認するとよい。",
    "端子を持ち上げるために物を挟む、導電箔を貼る、削る・はんだ付けする等の改造例も見つかるが、安全性が確認できないためTeam iRobotでは推奨しない。"
  ],
  sources:[
    ["iRobot公式: Charging Error 104","https://homesupport.irobot.com/articles/en_US/Knowledge/10604"],
    ["iRobot公式: 充電端子の清掃","https://homesupport.irobot.com/articles/en_US/Knowledge/32681"],
    ["Reddit: Charging station contact help","https://www.reddit.com/r/roomba/comments/1m7jjwz/"]
  ]
},
docking:{
  kicker:"DOCKING / 帰還",
  title:"ホームに戻らない",
  lead:"ドックを認識できない場合と、ドック直前まで来るのに乗り切れない場合で原因が違います。まず設置場所とセンサー・接地状態を確認。",
  official:[
    "清掃中にRoombaを持ち上げて移動した場合、ドック位置を見失うことがある。公式案内では、ドック正面約1.8m以内に置いて再度帰還させる。",
    "ドックの電源コードが確実に接続されているか確認する。",
    "近くに別のHome Dockがある場合、赤外線が干渉する可能性があるため距離を取る。",
    "ドック前に物がある、床が大きく傾いている、周辺が狭い場合は設置位置を見直す。"
  ],
  community:[
    "Redditでは、前輪・駆動輪・ドックの接触面の汚れや滑りが原因で、ドック直前で失敗していた例がある。",
    "2026年の投稿では、バンパーがわずかに引っ掛かって障害物判定になり帰還をやり直していたケースがあり、バンパーがスムーズに動くか確認したところ改善したという報告がある。",
    "ドックを壁に沿わせ、周囲の障害物を減らしたことで改善したという報告もある。"
  ],
  sources:[
    ["iRobot公式: Does Not Return Home","https://homesupport.irobot.com/articles/en_US/Knowledge/32678"],
    ["Reddit: Docking problems — solved","https://www.reddit.com/r/roomba/comments/1vumi6v/"],
    ["Reddit: Roomba docking issue","https://www.reddit.com/r/roomba/comments/1szhcoi/"]
  ]
},
wifi:{
  kicker:"WI-FI / APP",
  title:"Wi‑Fiにつながらない",
  lead:"Roombaは機種によって対応するWi‑Fi帯域が違います。特に新世代でもPlus 615は2.4GHzのみ、MiniやMax 715/775は2.4GHz・5GHz対応と公式表に記載されています。",
  official:[
    "Roomba Homeアプリを最新版にし、Bluetooth・位置情報・ネットワーク権限を確認する。",
    "使用機種のWi‑Fi対応を確認。Plus 615は2.4GHzのみ。Mini、Max 715、Max 775は2.4GHz/5GHzに対応。",
    "2.4GHz専用機では、セットアップするスマホ側も2.4GHzネットワークに接続して試す。",
    "パスワード入力エラーの場合はコピー&ペーストを避け、手入力する。公式も一部特殊文字が受け付けられない場合があると案内している。",
    "セットアップ完了後すぐ『接続できない』場合は、アプリを閉じて開き直し、数分待ってから状態を再確認する。"
  ],
  community:[
    "Redditでは、メインWi‑Fiとは別に2.4GHz専用SSID/ゲストネットワークを作ることで接続できたという報告がある。",
    "ルーター交換後につながらなくなった例で、2.4GHz側へ分け、シンプルなパスワードで初期設定を通したところ改善したという報告がある。",
    "ただしルーター設定は環境差が大きい。まず機種の公式対応帯域を優先して確認する。"
  ],
  sources:[
    ["iRobot公式: Roomba Home App セットアップ","https://homesupport.irobot.com/articles/en_US/Knowledge/10503"],
    ["iRobot公式: iRobot HOME App セットアップ","https://homesupport.irobot.com/articles/en_US/Knowledge/17734"],
    ["Reddit: 新しいルーターで接続できなかった例","https://www.reddit.com/r/roomba/comments/1qyx5lw/"],
    ["Reddit: 2.4GHzネットワークで改善した例","https://www.reddit.com/r/roomba/comments/1uigneo/"]
  ]
},
pickup:{
  kicker:"CLEANING / 吸引",
  title:"清掃力が落ちた",
  lead:"『動いているのにゴミを拾わない』場合は、ダスト容器・フィルター・ローラー・吸気経路の順に確認すると切り分けやすい。",
  official:[
    "ダスト容器を空にし、フィルターにホコリが詰まっていないか確認する。",
    "メインブラシ/ゴム製ローラーを外し、髪や糸、軸部分のゴミを取り除く。",
    "吸気経路に詰まりがないか確認する。",
    "iRobotはメインブラシを週1回程度、ペットがいる場合は週2回程度の清掃を推奨している。交換目安は6〜12か月または必要に応じて。",
    "清掃しても改善しない場合は、新しいフィルターや摩耗したブラシへの交換を検討し、それでも改善しなければ公式サポートへ。"
  ],
  community:[
    "Redditでは、アプリ上の部品寿命表示が残っていても、摩耗したローラーを新品に替えたことで拾い上げ性能が戻ったという報告がある。",
    "フィルターが目詰まりしていて吸引が弱く見えていた例もある。まず交換前に公式手順に沿った清掃状態を確認する。",
    "モーターや内部部品の故障が疑われる場合は分解せず、公式サポートへ相談する。"
  ],
  sources:[
    ["iRobot公式: Poor Pickup","https://homesupport.irobot.com/articles/en_US/Knowledge/19596"],
    ["iRobot公式: Main Brush Care","https://homesupport.irobot.com/articles/en_US/Knowledge/2451"],
    ["Reddit: ローラー交換で改善した例","https://www.reddit.com/r/roomba/comments/1d5gkfy/"],
    ["Reddit: フィルター確認で改善した例","https://www.reddit.com/r/roomba/comments/1hx0rkj/"]
  ]
}
};

const params=new URLSearchParams(location.search);
const key=params.get("issue")||"charging";
const g=guides[key]||guides.charging;
document.title=g.title+" | Team iRobot";

const list=items=>items.map((x,i)=>`<li><span>${String(i+1).padStart(2,"0")}</span><p>${x}</p></li>`).join("");
const sourceList=g.sources.map(([name,url])=>`<a href="${url}" target="_blank" rel="noopener"><span>${name}</span><b>↗</b></a>`).join("");

document.getElementById("troubleDetail").innerHTML=`
<section class="trouble-detail-hero">
 <div class="page-kicker">${g.kicker}</div>
 <h1 class="trouble-detail-title">${g.title}</h1>
 <p class="page-lead">${g.lead}</p>
</section>
<section class="trouble-detail-grid">
 <article class="solution-block official-solution">
   <div class="solution-label"><span>OFFICIAL FIRST</span><b>まずここから</b></div>
   <h2>iRobot公式をもとに確認</h2>
   <ol class="solution-list">${list(g.official)}</ol>
 </article>
 <article class="solution-block community-solution">
   <div class="solution-label"><span>COMMUNITY NOTES</span><b>参考情報</b></div>
   <h2>Redditで見つかった改善例</h2>
   <p class="solution-caution">公式手順ではないため、機種・環境によって効果は異なります。危険な改造や分解は掲載していません。</p>
   <ul class="community-list">${g.community.map(x=>`<li>${x}</li>`).join("")}</ul>
 </article>
</section>
<section class="source-panel">
 <div class="page-kicker">SOURCES / 調査元</div>
 <h2>確認した情報</h2>
 <div class="source-links">${sourceList}</div>
</section>
<div class="trouble-switcher">
 <a href="./troubleshoot.html?issue=charging">充電しない</a>
 <a href="./troubleshoot.html?issue=docking">ホームに戻らない</a>
 <a href="./troubleshoot.html?issue=wifi">Wi‑Fiにつながらない</a>
 <a href="./troubleshoot.html?issue=pickup">清掃力が落ちた</a>
</div>
<div class="notice">安全に関わる異常、端子の変色・溶損、異臭、発熱、電源系の破損がある場合は使用を止め、iRobot公式サポートを優先してください。</div>
`;