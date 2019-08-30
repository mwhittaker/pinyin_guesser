function random_pinyin() {
  // The set of pinyin we want to guess from.
  const pinyins = [
  //      a     o     e    i     u     u
         "a",  "o",  "e", "yi", "wu", "yu",
  /*b*/  "ba", "bo",
  /*p*/  "pa", "po",
  /*m*/  "ma", "mo", "me",
  /*f*/  "fa", "fo",

  /*d*/  "da",
  /*t*/  "ta",
  /*n*/  "na",
  /*l*/  "la",

  /*g*/  "ga",
  /*k*/  "ka",
  /*h*/  "ha",

  /*z*/  "za",
  /*c*/  "ca",
  /*s*/  "sa",

  /*zh*/ "zha",
  /*ch*/ "cha",
  /*sh*/ "sha",
  /*r*/  "ra",

  /*j*/  "cha",
  /*q*/  "sha",
  /*x*/  "ra",
  ];

  return {
    pinyin: pinyins[Math.floor(Math.random() * pinyins.length)],
    tone: Math.floor(Math.random() * 4),
  };
}

function pinyin_to_string(pinyin) {
  return pinyin === null ? "null" : `${pinyin.pinyin} tone ${pinyin.tone + 1}`;
}

function update_ui(last_pinyin, current_pinyin) {
  document.getElementById("last_pinyin").innerHTML =
    "last pinyin was " + pinyin_to_string(last_pinyin);
  document.getElementById("current_pinyin").innerHTML =
    pinyin_to_string(current_pinyin);
  document.getElementById("detail_pinyin").removeAttribute("open");
}

function play_pinyin(pinyin) {
  const node = Array.from(document.querySelectorAll(".val"))
                    .filter((node) => node.innerHTML === pinyin.pinyin)[0];
  node.click()
  document.getElementById("snd_player").children[pinyin.tone].click()
  document.getElementById("pinyin_chart").click()
}

function main() {
  // Set up our HTML.
  const title = document.getElementById("pinyin_chart");
  title.innerHTML += `
    <center>
    <button id="next_pinyin">Next</button>
    <button id="play_pinyin">Play</button>
    <span id="last_pinyin">span</span>
    <details id="detail_pinyin">
      <summary>Click to see answer</summary>
      <span id="current_pinyin"></span>
    </details>
    </center>
  `

  let last_pinyin = null;
  let current_pinyin = random_pinyin();
  update_ui(last_pinyin, current_pinyin);

  document.getElementById("play_pinyin").onclick = () => {
    play_pinyin(current_pinyin);
  };

  document.getElementById("next_pinyin").onclick = () => {
    last_pinyin = current_pinyin;
    current_pinyin = random_pinyin();
    update_ui(last_pinyin, current_pinyin);
    play_pinyin(current_pinyin);
  };
}

main();
