function guess_pinyin() {
  const allowed = new Set([
  //      a    o    e    i     u     u
         "a", "o", "e", "yi", "wu", "yu",
  /*b*/  "ba",
  /*p*/  "pa",
  /*m*/  "ma",
  /*f*/  "fa",

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
  ]);
  const nodes = Array.from(document.querySelectorAll(".val"))
                     .filter((node) => allowed.has(node.innerHTML));
  const node = nodes[Math.floor(Math.random() * nodes.length)];
  const tone = Math.floor(Math.random() * 4);
  const sound_player = document.getElementById("snd_player");

  node.click();
  sound_player.children[tone].click();

  return node.innerHTML + " tone " + tone;
}
