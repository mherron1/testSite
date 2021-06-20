let resultsList = [
  {
    winner: "Chan Sung Jung ",
    method: "decision",
    time: "5 Rounds",
    b_Link: "https://www.tapology.com/fightcenter/fighters/21178-dan-ige",
  },
  {
    winner: "Sergey Spivak ",
    method: "decision",
    time: "3 Rounds",
    b_Link: "https://www.tapology.com/fightcenter/fighters/alexey-oleinik",
  },
  {
    winner: "Marlon Vera ",
    method: "decision",
    time: "3 Rounds",
    b_Link: "https://www.tapology.com/fightcenter/fighters/18815-david-grant",
  },
  {
    winner: "Seung Woo Choi ",
    method: "ko/tko",
    time: "1:37 Round 1",
    b_Link: "https://www.tapology.com/fightcenter/fighters/18497-julian-erosa",
  },
  {
    winner: "Bruno Silva ",
    method: "ko/tko",
    time: "4:45 Round 1",
    b_Link:
      "https://www.tapology.com/fightcenter/fighters/70129-wellington-turman-fofo",
  },
  {
    winner: "Matt Brown ",
    method: "ko/tko",
    time: "3:02 Round 2",
    b_Link: "https://www.tapology.com/fightcenter/fighters/dhiego-lima",
  },
  {
    winner: "Nick Negumereanu ",
    method: "decision",
    time: "3 Rounds",
    b_Link: "https://www.tapology.com/fightcenter/fighters/90744-aleksa-camur",
  },
  {
    winner: "Virna Jandiroba ",
    method: "ko/tko",
    time: "5:00 Round 2",
    b_Link:
      "https://www.tapology.com/fightcenter/fighters/129348-kanako-murata",
  },
  {
    winner: "Khaos Williams ",
    method: "decision",
    time: "3 Rounds",
    b_Link:
      "https://www.tapology.com/fightcenter/fighters/98220-matthew-semelsberger",
  },
  {
    winner: "Josh Parisian ",
    method: "decision",
    time: "3 Rounds",
    b_Link:
      "https://www.tapology.com/fightcenter/fighters/11092-roque-martinez",
  },
  {
    winner: "Ricky Glenn ",
    method: "ko/tko",
    time: "0:37 Round 1",
    b_Link:
      "https://www.tapology.com/fightcenter/fighters/58797-joaquim-silva-netto-bjj",
  },
  {
    winner: "Casey O'Neill ",
    method: "submission",
    time: "2:54 Round 3",
    b_Link: "https://www.tapology.com/fightcenter/fighters/67543-lara-procopio",
  },
  {
    winner: "Yaroslav Amosov ",
    method: "decision",
    time: "5 Rounds",
    b_Link:
      "https://www.tapology.com/fightcenter/fighters/douglas-lima-the-phenom",
  },
  {
    winner: "Jason Jackson ",
    method: "decision",
    time: "3 Rounds",
    b_Link: "https://www.tapology.com/fightcenter/fighters/paul-daley-semtex",
  },
  {
    winner: "Aaron Pico ",
    method: "submission",
    time: "1:33 Round 3",
    b_Link: "https://www.tapology.com/fightcenter/fighters/68589-aiden-lee",
  },
  {
    winner: "Mark Lemminger ",
    method: "ko/tko",
    time: "3:29 Round 2",
    b_Link:
      "https://www.tapology.com/fightcenter/fighters/67287-demarques-jackson",
  },
  {
    winner: "Kyle Crutchmer ",
    method: "decision",
    time: "3 Rounds",
    b_Link:
      "https://www.tapology.com/fightcenter/fighters/198568-levan-chokheli",
  },
  {
    winner: "Justin Gonzales ",
    method: "decision",
    time: "3 Rounds",
    b_Link:
      "https://www.tapology.com/fightcenter/fighters/108498-tywan-claxton",
  },
  {
    winner: "Bobby King ",
    method: "decision",
    time: "3 Rounds",
    b_Link:
      "https://www.tapology.com/fightcenter/fighters/nick-newell-notorious",
  },
  {
    winner: "Lucas Brennan ",
    method: "submission",
    time: "1:54 Round 1",
    b_Link: "https://www.tapology.com/fightcenter/fighters/79533-matt-skibicki",
  },
  {
    winner: "Marina Mokhnatkina ",
    method: "decision",
    time: "3 Rounds",
    b_Link: "https://www.tapology.com/fightcenter/fighters/33220-amanda-bell",
  },
  {
    winner: "Alex Polizzi ",
    method: "submission",
    time: "4:22 Round 1",
    b_Link:
      "https://www.tapology.com/fightcenter/fighters/115305-gustavo-trujillo",
  },
  {
    winner: "M. Petchyindee ",
    method: "decision",
    time: "3 Rounds",
    b_Link:
      "https://www.tapology.com/fightcenter/fighters/208716-elias-mahmoudi-the-sniper",
  },
  {
    winner: "Tsogookhuu Amarsanaa ",
    method: "decision",
    time: "3 Rounds",
    b_Link: "https://www.tapology.com/fightcenter/fighters/193733-ben-wilhelm",
  },
  {
    winner: "Chang Min Yoon ",
    method: "submission",
    time: "1:46 Round 1",
    b_Link: "https://www.tapology.com/fightcenter/fighters/105594-jia-wen-ma",
  },
  {
    winner: "Taiki Naito ",
    method: "decision",
    time: "3 Rounds",
    b_Link: "https://www.tapology.com/fightcenter/fighters/79167-wenfeng-wang",
  },
  {
    winner: "Gleison Tibau ",
    method: "decision",
    time: "3 Rounds",
    b_Link:
      "https://www.tapology.com/fightcenter/fighters/rory-macdonald-the-waterboy",
  },
  {
    winner: "Ray Cooper III ",
    method: "decision",
    time: "3 Rounds",
    b_Link:
      "https://www.tapology.com/fightcenter/fighters/46082-nikolay-aleksakhin",
  },
  {
    winner: "Emiliano Sordi ",
    method: "ends in a draw",
    time: "3 Rounds",
    b_Link: "https://www.tapology.com/fightcenter/fighters/13645-dan-spohn",
  },
  {
    winner: "Chris Camozzi ",
    method: "decision",
    time: "3 Rounds",
    b_Link:
      "https://www.tapology.com/fightcenter/fighters/cesar-jesus-ferreira-mutante",
  },
  {
    winner: "Antônio Carlos Júnior ",
    method: "ends in a no contest",
    time: "2:45 Round 1",
    b_Link:
      "https://www.tapology.com/fightcenter/fighters/vinicius-magalhaes-pezao",
  },
  {
    winner: "Cory Hendricks ",
    method: "submission",
    time: "4:09 Round 3",
    b_Link:
      "https://www.tapology.com/fightcenter/fighters/144571-marthin-hamlet-nielsen",
  },
  {
    winner: "João Zeferino ",
    method: "submission",
    time: "2:16 Round 2",
    b_Link: "https://www.tapology.com/fightcenter/fighters/16853-jason-ponet",
  },
  {
    winner: "Magomed Magomedkerimov ",
    method: "submission",
    time: "1:57 Round 1",
    b_Link:
      "https://www.tapology.com/fightcenter/fighters/52092-curtis-millender",
  },
  {
    winner: "Tom Lawlor ",
    method: "decision",
    time: "3 Rounds",
    b_Link: "https://www.tapology.com/fightcenter/fighters/40938-jordan-young",
  },
  {
    winner: "Sadibou Sy ",
    method: "decision",
    time: "3 Rounds",
    b_Link:
      "https://www.tapology.com/fightcenter/fighters/60556-alexei-kunchenko",
  },
];

module.exports = resultsList;
