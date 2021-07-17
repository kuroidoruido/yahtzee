var e;import{c as r,a as t,i,b as o,h as n,T as s,n as a,e as c,r as l}from"./vendor.5962922d.js";const d={"":{en:"",fr:""},"no-game":{en:"You can start playing by clicking on Start game.",fr:"You pouvez commencez à jouer en cliquant sur Lancer la partie."},"no-game.roll":{en:"Start game",fr:"Lancer la partie"},"game-finished":{en:"You finished the game. You can start a new game by clicking on Restart.",fr:"You avez terminé la partie. Vous pouvez en démarrer une nouvelle en cliquant sur Rejouer."},"game-finished.restart":{en:"Restart",fr:"Rejouer"},"dice-container.roll":{en:"Roll",fr:"Lancer"},"score-container.superior":{en:"Superior",fr:"Supérieur"},"score-container.inferior":{en:"Inferior",fr:"Inférieur"},"score.name.superior.ace":{en:"Aces",fr:"As"},"score.name.superior.two":{en:"Twos",fr:"Deux"},"score.name.superior.three":{en:"Threes",fr:"Trois"},"score.name.superior.four":{en:"Fours",fr:"Quatre"},"score.name.superior.five":{en:"Fives",fr:"Cinq"},"score.name.superior.six":{en:"Sixes",fr:"Six"},"score.name.superior.bonus":{en:"Bonus",fr:"Prime"},"score.name.superior.total":{en:"Superior total",fr:"Total supérieur"},"score.name.inferior.3ofKind":{en:"3 of kind",fr:"Brelan"},"score.name.inferior.4ofKind":{en:"4 of kind",fr:"Carré"},"score.name.inferior.fullHouse":{en:"Full House",fr:"Full"},"score.name.inferior.lowStraight":{en:"Low Straight",fr:"Petite Suite"},"score.name.inferior.highStraight":{en:"High Straight",fr:"Grande Suite"},"score.name.inferior.yahtzee":{en:"Yahtzee",fr:"Yahtzee"},"score.name.inferior.chance":{en:"Chance",fr:"Chance"},"score.name.inferior.total":{en:"Inferior total",fr:"Total inférieur"},"score.name.total":{en:"Total",fr:"Total"}};const u=[1,2,3,4,5,6],p=[0,1,2,3,4];function h(e){const r={};return u.forEach((e=>r[e]=0)),e.forEach((e=>r[e]++)),r}const f=["fr","en"];function g(e){return r=>r===e}function y(e,r){return e+r}const m=[[1,2,3,4],[2,3,4,5],[3,4,5,6]],b=[[1,2,3,4,5],[2,3,4,5,6]],v={"superior.ace":{key:"superior.ace",type:"MANUAL",compute:e=>e.filter(g(1)).reduce(y,0)},"superior.two":{key:"superior.two",type:"MANUAL",compute:e=>e.filter(g(2)).reduce(y,0)},"superior.three":{key:"superior.three",type:"MANUAL",compute:e=>e.filter(g(3)).reduce(y,0)},"superior.four":{key:"superior.four",type:"MANUAL",compute:e=>e.filter(g(4)).reduce(y,0)},"superior.five":{key:"superior.five",type:"MANUAL",compute:e=>e.filter(g(5)).reduce(y,0)},"superior.six":{key:"superior.six",type:"MANUAL",compute:e=>e.filter(g(6)).reduce(y,0)},"superior.bonus":{key:"superior.bonus",type:"AUTO",compute(e,r){const t=k(r);return t("superior.ace")+t("superior.two")+t("superior.three")+t("superior.four")+t("superior.five")+t("superior.six")>=63?35:0}},"superior.total":{key:"superior.total",type:"AUTO",compute(e,r){const t=k(r);return t("superior.ace")+t("superior.two")+t("superior.three")+t("superior.four")+t("superior.five")+t("superior.six")+t("superior.bonus")}},"inferior.3ofKind":{key:"inferior.3ofKind",type:"MANUAL",compute(e){const r=h(e);return u.some((e=>r[e]>=3))?e.reduce(y,0):0}},"inferior.4ofKind":{key:"inferior.4ofKind",type:"MANUAL",compute(e){const r=h(e);return u.some((e=>r[e]>=4))?e.reduce(y,0):0}},"inferior.fullHouse":{key:"inferior.fullHouse",type:"MANUAL",compute(e){const r=h(e),[t,i]=u.filter((e=>r[e]>=2));return 5===r[t]||3===r[t]&&2===r[i]||2===r[t]&&3===r[i]?25:0}},"inferior.lowStraight":{key:"inferior.lowStraight",type:"MANUAL",compute:e=>m.some((r=>r.every((r=>e.includes(r)))))?30:0},"inferior.highStraight":{key:"inferior.highStraight",type:"MANUAL",compute(e){const r=e.slice().sort();return b.some((e=>e.every(((e,t)=>e===r[t]))))?40:0}},"inferior.yahtzee":{key:"inferior.yahtzee",type:"MANUAL",compute(e){const r=h(e);return u.some((e=>r[e]>=5))?50:0}},"inferior.chance":{key:"inferior.chance",type:"MANUAL",compute:e=>e.reduce(y)},"inferior.total":{key:"inferior.total",type:"AUTO",compute(e,r){const t=k(r);return t("inferior.3ofKind")+t("inferior.4ofKind")+t("inferior.fullHouse")+t("inferior.lowStraight")+t("inferior.highStraight")+t("inferior.yahtzee")+t("inferior.chance")}},total:{key:"total",type:"AUTO",compute:(e,r)=>r["superior.total"]+r["inferior.total"]}};function k(e){return r=>-1===e[r]?0:e[r]}const x=["superior.ace","superior.two","superior.three","superior.four","superior.five","superior.six","superior.bonus","superior.total","inferior.3ofKind","inferior.4ofKind","inferior.fullHouse","inferior.lowStraight","inferior.highStraight","inferior.yahtzee","inferior.chance","inferior.total","total"],z=x.filter((e=>"AUTO"===v[e].type)),L=x.filter((e=>"MANUAL"===v[e].type)),S=x.filter((e=>e.startsWith("superior."))),$=x.filter((e=>e.startsWith("inferior."))),A=null!=(e=function(e=localStorage){const r=e.getItem("YAHTZEE.LANG");return f.includes(r)?r:void 0}())?e:function(e=navigator){const r=null==e?void 0:e.language;return(null==r?void 0:r.toLocaleLowerCase().includes("fr"))?"fr":"en"}(),w={currentLang:A,gameStatus:"NO_GAME",dices:[1,1,1,1,1],diceLocks:[!1,!1,!1,!1,!1],roll:0,scores:{"superior.ace":-1,"superior.two":-1,"superior.three":-1,"superior.four":-1,"superior.five":-1,"superior.six":-1,"superior.bonus":0,"superior.total":0,"inferior.3ofKind":-1,"inferior.4ofKind":-1,"inferior.fullHouse":-1,"inferior.lowStraight":-1,"inferior.highStraight":-1,"inferior.yahtzee":-1,"inferior.chance":-1,"inferior.total":0,total:0},scoreOfDices:{"superior.ace":-1,"superior.two":-1,"superior.three":-1,"superior.four":-1,"superior.five":-1,"superior.six":-1,"superior.bonus":0,"superior.total":0,"inferior.3ofKind":-1,"inferior.4ofKind":-1,"inferior.fullHouse":-1,"inferior.lowStraight":-1,"inferior.highStraight":-1,"inferior.yahtzee":-1,"inferior.chance":-1,"inferior.total":0,total:0}},O=r({name:"app",initialState:w,reducers:{setLang(e,{payload:{lang:r}}){e.currentLang=r},lock(e,{payload:{diceIndex:r}}){e.diceLocks[r]=!0},unlock(e,{payload:{diceIndex:r}}){e.diceLocks[r]=!1},toggleLock(e,{payload:{diceIndex:r}}){e.diceLocks[r]=!e.diceLocks[r]},dicesRoll(e){e.roll<3&&(p.forEach((r=>{e.diceLocks[r]||(e.dices[r]=Math.floor(6*Math.random())+1)})),L.forEach((r=>{e.scoreOfDices[r]=v[r].compute(e.dices,e.scores)})),"NO_GAME"===e.gameStatus&&0===e.roll&&(e.gameStatus="PLAYING"),e.roll++)},setScore(e,{payload:{scoreKey:r}}){e.roll=0,e.scores[r]=e.scoreOfDices[r],e.scoreOfDices={"superior.ace":-1,"superior.two":-1,"superior.three":-1,"superior.four":-1,"superior.five":-1,"superior.six":-1,"superior.bonus":0,"superior.total":0,"inferior.3ofKind":-1,"inferior.4ofKind":-1,"inferior.fullHouse":-1,"inferior.lowStraight":-1,"inferior.highStraight":-1,"inferior.yahtzee":-1,"inferior.chance":-1,"inferior.total":0,total:0},e.diceLocks=[!1,!1,!1,!1,!1],z.forEach((r=>{e.scores[r]=v[r].compute(e.dices,e.scores)})),L.every((r=>e.scores[r]>=0))&&(e.gameStatus="GAME_FINISHED")},resetGame:()=>w}}),K=t({reducer:O.reducer}),U=O.actions;var C=Object.defineProperty,N=Object.getOwnPropertyDescriptor;let D=class extends(o(K)(n)){constructor(){super(...arguments),this.gameStatus="NO_GAME"}stateChanged(e){this.gameStatus=e.gameStatus,this.requestUpdate("gameStatus")}render(){let e;switch(this.gameStatus){case"NO_GAME":e=s`
          <yahtzee-no-game></yahtzee-no-game>
          <yahtzee-score-container></yahtzee-score-container>
        `;break;case"PLAYING":e=s`
          <yahtzee-dice-container></yahtzee-dice-container>
          <yahtzee-score-container></yahtzee-score-container>
        `;break;case"GAME_FINISHED":e=s`
          <yahtzee-game-finished></yahtzee-game-finished>
          <yahtzee-score-container></yahtzee-score-container>
        `}return s`
      <yahtzee-header></yahtzee-header>
      ${e}
    `}};D.styles=i`
    :host {
      display: block;
      max-width: 1200px;
      margin: auto;
      font-family: sans-serif;
    }
    h1 {
      color: rgba(117, 117, 117, 0.4);
    }
    yahtzee-dice-container {
      margin-top: 3rem;
    }
    yahtzee-score-container {
      margin-top: 3rem;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
    }
  `,D=((e,r,t,i)=>{for(var o,n=i>1?void 0:i?N(r,t):r,s=e.length-1;s>=0;s--)(o=e[s])&&(n=(i?o(r,t,n):o(n))||n);return i&&n&&C(r,t,n),n})([a("yahtzee-app")],D);var j=Object.defineProperty,M=Object.getOwnPropertyDescriptor,P=(e,r,t,i)=>{for(var o,n=i>1?void 0:i?M(r,t):r,s=e.length-1;s>=0;s--)(o=e[s])&&(n=(i?o(r,t,n):o(n))||n);return i&&n&&j(r,t,n),n};let E=class extends(o(K)(n)){constructor(){super(...arguments),this.id="",this.currentLang=A}stateChanged(e){this.currentLang=e.currentLang,this.requestUpdate("currentLang")}createRenderRoot(){return this}render(){return e=this.currentLang,r=this.id,d[r][e];var e,r}};E.styles=i`
    :host {
      display: inline;
    }
  `,P([c({type:String})],E.prototype,"id",2),E=P([a("yahtzee-i18n")],E);const H=i`
  .select {
    display: flex;
    align-items: center;
    background-color: white;
    border: none;
    padding: 8px 8px 8px 8px;
    border-radius: 5px;
    cursor: initial;
  }
  .select:not([disabled]):hover {
    background-color: rgba(189, 189, 189, 0.25);
    cursor: pointer;
  }
`;var I=Object.defineProperty,R=Object.getOwnPropertyDescriptor;let T=class extends(o(K)(n)){constructor(){super(...arguments),this.currentLang="en"}stateChanged(e){this.currentLang=e.currentLang,this.requestUpdate("currentLang")}rollClickHandler(){K.dispatch(U.dicesRoll())}onLangChange(e){var r;const t=null==(r=null==e?void 0:e.target)?void 0:r.value;f.includes(t)&&K.dispatch(function(e,r=localStorage){return async function(t){t(U.setLang({lang:e})),r.setItem("YAHTZEE.LANG",e)}}(t))}render(){return s`
      <header>
        <h1>Anthony's Yahtzee</h1>
        <select name="lang" class="select" @change=${this.onLangChange}>
          ${f.map((e=>s`<option .selected=${e===this.currentLang}>
                ${e}
              </option>`))}
        </select>
      </header>
    `}};T.styles=i`
    ${H}
    :host {
      display: block;
    }
    header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  `,T=((e,r,t,i)=>{for(var o,n=i>1?void 0:i?R(r,t):r,s=e.length-1;s>=0;s--)(o=e[s])&&(n=(i?o(r,t,n):o(n))||n);return i&&n&&I(r,t,n),n})([a("yahtzee-header")],T);const q=i`
  .btn {
    display: flex;
    align-items: center;
    background-color: white;
    border: none;
    padding: 0px 16px 0px 8px;
    border-radius: 5px;
    cursor: initial;
  }
  .btn:not([disabled]):hover {
    background-color: rgba(189, 189, 189, 0.25);
    cursor: pointer;
  }
  .btn .icon {
    font-size: 200%;
    margin-right: 4px;
  }
`;var G=Object.defineProperty,Y=Object.getOwnPropertyDescriptor;let V=class extends(o(K)(n)){constructor(){super(...arguments),this.dices=[1,1,1,1,1],this.diceLocks=[!1,!1,!1,!1,!1],this.hasRoll=!1,this.rollLock=!1}stateChanged(e){this.dices=e.dices,this.requestUpdate("dices"),this.diceLocks=e.diceLocks,this.requestUpdate("diceLocks"),this.rollLock=e.roll>=3,this.requestUpdate("rollLock"),this.hasRoll=e.roll>=1,this.requestUpdate("hasRoll")}rollClickHandler(){K.dispatch(U.dicesRoll())}onClick(e){return()=>{this.hasRoll&&K.dispatch(U.toggleLock({diceIndex:e}))}}render(){return s`
      <div class="dice-container">
        ${this.dices.map(((e,r)=>s`
              <yahtzee-dice
                .value=${e}
                .locked=${this.diceLocks[r]}
                @click="${this.onClick(r)}"
              ></yahtzee-dice>
            `))}
      </div>
      <button
        type="button"
        class="roll-button btn"
        @click=${this.rollClickHandler}
        .disabled=${this.rollLock}
      >
        <span class="icon">↻</span>
        <yahtzee-i18n id="dice-container.roll"></yahtzee-i18n>
      </button>
    `}};V.styles=i`
    ${q}
    :host {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    .dice-container {
      display: flex;
      flex-direction: row;
      gap: 6px;
      width: fit-content;
    }
    .roll-button {
      margin-left: 6px;
    }
  `,V=((e,r,t,i)=>{for(var o,n=i>1?void 0:i?Y(r,t):r,s=e.length-1;s>=0;s--)(o=e[s])&&(n=(i?o(r,t,n):o(n))||n);return i&&n&&G(r,t,n),n})([a("yahtzee-dice-container")],V);var F=Object.defineProperty,_=Object.getOwnPropertyDescriptor,B=(e,r,t,i)=>{for(var o,n=i>1?void 0:i?_(r,t):r,s=e.length-1;s>=0;s--)(o=e[s])&&(n=(i?o(r,t,n):o(n))||n);return i&&n&&F(r,t,n),n};let W=class extends n{constructor(){super(...arguments),this.value=1,this.locked=!1}render(){const e=`dice dice-${this.value} ${this.locked?"locked":""}`;return s`<div class="${e}" role="img" alt="${this.value}">
      ${new Array(this.value).fill(s`<div class="pip"></div>`)}
    </div>`}};W.styles=i`
    :host {
      display: block;
    }
    ${function(e){const r=Math.floor((e-8)/3-1),t=l("#212121"),o=l("#757575"),n=l("#0097A7"),s=l("#00BCD4");return i`
    .dice {
      width: ${e}px;
      height: ${e}px;
      border: 5px solid ${t};
      border-radius: 10px;
      display: grid;
      grid-template-rows: 33% 33% 33%;
      grid-template-columns: 33% 33% 33%;
      grid-gap: ${2}px;
      padding: ${2}px;
    }
    .dice .pip {
      background-color: ${t};
      width: ${r}px;
      height: ${r}px;
      border-radius: 10px;
    }
    .dice.locked {
      border-color: ${n};
    }
    .dice.locked .pip {
      background-color: ${n};
    }
    .dice:hover {
      cursor: pointer;
    }
    .dice:not(.locked):hover {
      border-color: ${o};
    }
    .dice:not(.locked):hover .pip {
      background-color: ${o};
    }
    .dice.locked:hover {
      border-color: ${s};
    }
    .dice.locked:hover .pip {
      background-color: ${s};
    }

    .dice .pip:nth-child(1) {
      grid-area: a;
    }
    .dice .pip:nth-child(2) {
      grid-area: b;
    }
    .dice .pip:nth-child(3) {
      grid-area: c;
    }
    .dice .pip:nth-child(4) {
      grid-area: d;
    }
    .dice .pip:nth-child(5) {
      grid-area: e;
    }
    .dice .pip:nth-child(6) {
      grid-area: f;
    }
    .dice[alt='1'] {
      grid-template-areas:
        '. . .'
        '. a .'
        '. . .';
    }
    .dice[alt='2'] {
      grid-template-areas:
        '. . a'
        '. . .'
        'b . .';
    }
    .dice[alt='3'] {
      grid-template-areas:
        '. . a'
        '. b .'
        'c . .';
    }
    .dice[alt='4'] {
      grid-template-areas:
        'a . b'
        '. . .'
        'c . d';
    }
    .dice[alt='5'] {
      grid-template-areas:
        'a . b'
        '. c .'
        'd . e';
    }
    .dice[alt='6'] {
      grid-template-areas:
        'a . b'
        'c . d'
        'e . f';
    }
  `}(68)}
  `,B([c({type:Number})],W.prototype,"value",2),B([c({type:Boolean})],W.prototype,"locked",2),W=B([a("yahtzee-dice")],W);var Z=Object.defineProperty,Q=Object.getOwnPropertyDescriptor;let J=class extends(o(K)(n)){constructor(){super(...arguments),this.scores={"superior.ace":-1,"superior.two":-1,"superior.three":-1,"superior.four":-1,"superior.five":-1,"superior.six":-1,"superior.bonus":0,"superior.total":0,"inferior.3ofKind":-1,"inferior.4ofKind":-1,"inferior.fullHouse":-1,"inferior.lowStraight":-1,"inferior.highStraight":-1,"inferior.yahtzee":-1,"inferior.chance":-1,"inferior.total":0,total:0},this.scoreOfDices={"superior.ace":-1,"superior.two":-1,"superior.three":-1,"superior.four":-1,"superior.five":-1,"superior.six":-1,"superior.bonus":0,"superior.total":0,"inferior.3ofKind":-1,"inferior.4ofKind":-1,"inferior.fullHouse":-1,"inferior.lowStraight":-1,"inferior.highStraight":-1,"inferior.yahtzee":-1,"inferior.chance":-1,"inferior.total":0,total:0},this.roll=0}stateChanged(e){this.scores=e.scores,this.requestUpdate("scores"),this.scoreOfDices=e.scoreOfDices,this.requestUpdate("scoreOfDices"),this.roll=e.roll,this.requestUpdate("roll")}onClick({detail:{scoreKey:e}}){K.dispatch(U.setScore({scoreKey:e}))}renderScoreColumn(e,r){const t=this.roll>0;return s`
      <fieldset>
        <legend><yahtzee-i18n id=${r}></yahtzee-i18n></legend>
        ${e.map((e=>s`<yahtzee-score-card
              .scoreKey=${e}
              .value=${this.scores[e]}
              .diceValue=${this.scoreOfDices[e]}
              .displayDiceValue=${t}
              @selected=${this.onClick}
            ></yahtzee-score-card>`))}
      </fieldset>
    `}render(){return s`
      <div class="score-container">
        ${this.renderScoreColumn(S,"score-container.superior")}
        ${this.renderScoreColumn($,"score-container.inferior")}
      </div>
      <div class="total-container">
        <yahtzee-score-card
          scoreKey="total"
          .value=${this.scores.total}
          .diceValue=${this.scoreOfDices.total}
        ></yahtzee-score-card>
      </div>
    `}};J.styles=i`
    :host {
      display: block;
    }
    .score-container {
      display: flex;
      flex-direction: row;
    }
    fieldset {
      flex: 1 1 50%;
      border: none;
    }
  `,J=((e,r,t,i)=>{for(var o,n=i>1?void 0:i?Q(r,t):r,s=e.length-1;s>=0;s--)(o=e[s])&&(n=(i?o(r,t,n):o(n))||n);return i&&n&&Z(r,t,n),n})([a("yahtzee-score-container")],J);var X=Object.defineProperty,ee=Object.getOwnPropertyDescriptor,re=(e,r,t,i)=>{for(var o,n=i>1?void 0:i?ee(r,t):r,s=e.length-1;s>=0;s--)(o=e[s])&&(n=(i?o(r,t,n):o(n))||n);return i&&n&&X(r,t,n),n};let te=class extends n{constructor(){super(...arguments),this.scoreKey="total",this.value=0,this.diceValue=0,this.displayDiceValue=!1}get isSelectable(){return this.displayDiceValue&&-1===this.value}onClick(){var e;"MANUAL"===v[this.scoreKey].type&&this.isSelectable&&this.dispatchEvent((e=this.scoreKey,new CustomEvent("selected",{detail:{scoreKey:e},bubbles:!0,composed:!0,cancelable:!0})))}render(){const e=v[this.scoreKey],r=this.value<0?0:this.value,t=this.diceValue<0?0:this.diceValue,i="score.name."+e.key;if("AUTO"===e.type)return s`
        <fieldset>
          <legend><yahtzee-i18n id=${i}></yahtzee-i18n></legend>
          <div class="value">${r}</div>
          <button type="button" class="hidden">
            <span class="icon">⇦</span>
            <span class="dice-value">&nbsp;</span>
          </button>
        </fieldset>
      `;{const e=this.isSelectable?"selectable":"",o=this.isSelectable?"":"hidden";return s`
        <fieldset class=${e} @click=${this.onClick}>
          <legend><yahtzee-i18n id=${i}></yahtzee-i18n></legend>
          <div class="value">${r}</div>
          <button type="button" class=${o}>
            <span class="icon">⇦</span>
            <span class="dice-value">${t}</span>
          </button>
        </fieldset>
      `}}};te.styles=i`
    :host {
      display: block;
    }
    fieldset {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    fieldset.selectable {
      cursor: pointer;
    }
    fieldset.selectable:hover {
      border-color: rgba(117, 117, 117);
    }
    .value {
      font-size: 1.5rem;
    }
    .dice-value {
      font-size: 1.5rem;
    }
    button {
      display: flex;
      flex-direction: row;
      align-items: center;
      border: none;
      background-color: transparent;
      margin: 0;
      padding: 0;
    }
    button.hidden {
      visibility: hidden;
    }
    button .icon {
      font-size: 200%;
      padding: 0 1rem;
    }
  `,re([c({type:String})],te.prototype,"scoreKey",2),re([c({type:Number})],te.prototype,"value",2),re([c({type:Number})],te.prototype,"diceValue",2),re([c({type:Boolean})],te.prototype,"displayDiceValue",2),te=re([a("yahtzee-score-card")],te);var ie=Object.defineProperty,oe=Object.getOwnPropertyDescriptor;let ne=class extends n{onClick(){K.dispatch(U.dicesRoll())}render(){return s`
      <div class="no-game-container">
        <yahtzee-i18n id="no-game"></yahtzee-i18n>
        <button class="btn" type="button" @click=${this.onClick}>
          <span class="icon">↻</span>
          <yahtzee-i18n id="no-game.roll"></yahtzee-i18n>
        </button>
      </div>
    `}};ne.styles=i`
    ${q}
    :host {
      display: block;
    }
    .no-game-container {
      margin: auto;
      text-align: center;
    }
    .btn {
      margin: 1.5rem auto;
    }
  `,ne=((e,r,t,i)=>{for(var o,n=i>1?void 0:i?oe(r,t):r,s=e.length-1;s>=0;s--)(o=e[s])&&(n=(i?o(r,t,n):o(n))||n);return i&&n&&ie(r,t,n),n})([a("yahtzee-no-game")],ne);var se=Object.defineProperty,ae=Object.getOwnPropertyDescriptor;let ce=class extends n{onClick(){K.dispatch(U.resetGame())}render(){return s`
      <div class="game-finished-container">
        <yahtzee-i18n id="game-finished"></yahtzee-i18n>
        <button class="btn" type="button" @click=${this.onClick}>
          <span class="icon">↶</span>
          <yahtzee-i18n id="game-finished.restart"></yahtzee-i18n>
        </button>
      </div>
    `}};ce.styles=i`
    ${q}
    :host {
      display: block;
    }
    .game-finished-container {
      margin: auto;
      text-align: center;
    }
    .btn {
      margin: 1.5rem auto;
    }
  `,ce=((e,r,t,i)=>{for(var o,n=i>1?void 0:i?ae(r,t):r,s=e.length-1;s>=0;s--)(o=e[s])&&(n=(i?o(r,t,n):o(n))||n);return i&&n&&se(r,t,n),n})([a("yahtzee-game-finished")],ce);
