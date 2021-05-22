const data = require("./initial.js");

let ufcRankings = [
  {
    name: "Brandon Moreno",
    rank: "1",
  },
  {
    name: "Askar Askarov",
    rank: "2",
  },
  {
    name: "Alexandre Pantoja",
    rank: "3",
  },
  {
    name: "Alex Perez",
    rank: "4",
  },
  {
    name: "Joseph Benavidez",
    rank: "5",
  },
  {
    name: "Brandon Royval",
    rank: "6",
  },
  {
    name: "Kai Kara France",
    rank: "7",
  },
  {
    name: "Matt Schnell",
    rank: "8",
  },
  {
    name: "Rogerio Bontorin",
    rank: "9",
  },
  {
    name: "Tim Elliott",
    rank: "10",
  },
  {
    name: "David Dvorak",
    rank: "11",
  },
  {
    name: "Raulian Paiva",
    rank: "12",
  },
  {
    name: "Sumudaerji",
    rank: "13",
  },
  {
    name: "Matheus Nicolau",
    rank: "14",
  },
  {
    name: "Amir Albazi",
    rank: "15",
  },
  {
    name: "Petr Yan",
    rank: "1",
  },
  {
    name: "Cory Sandhagen",
    rank: "2",
  },
  {
    name: "Rob Font",
    rank: "3",
  },
  {
    name: "Cody Garbrandt",
    rank: "4",
  },
  {
    name: "Jose Aldo",
    rank: "5",
  },
  {
    name: "Marlon Moraes",
    rank: "6",
  },
  {
    name: "Frankie Edgar",
    rank: "7",
  },
  {
    name: "Pedro Munhoz",
    rank: "8",
  },
  {
    name: "Dominick Cruz",
    rank: "9",
  },
  {
    name: "Raphael Assuncao",
    rank: "10",
  },
  {
    name: "Jimmie Rivera",
    rank: "11",
  },
  {
    name: "Merab Dvalishvili",
    rank: "12",
  },
  {
    name: "Cody Stamann",
    rank: "13",
  },
  {
    name: "Kyler Phillips",
    rank: "14",
  },
  {
    name: "Marlon Vera",
    rank: "15",
  },
  {
    name: "Max Holloway",
    rank: "1",
  },
  {
    name: "Brian Ortega",
    rank: "2",
  },
  {
    name: "Zabit Magomedsharipov",
    rank: "3",
  },
  {
    name: "Yair Rodriguez",
    rank: "4",
  },
  {
    name: "Chan Sung Jung",
    rank: "5",
  },
  {
    name: "Calvin Kattar",
    rank: "6",
  },
  {
    name: "Josh Emmett",
    rank: "7",
  },
  {
    name: "Arnold Allen",
    rank: "8",
  },
  {
    name: "Dan Ige",
    rank: "9",
  },
  {
    name: "Jeremy Stephens",
    rank: "10",
  },
  {
    name: "Shane Burgos",
    rank: "11",
  },
  {
    name: "Sodiq Yusuff",
    rank: "12",
  },
  {
    name: "Bryce Mitchell",
    rank: "13",
  },
  {
    name: "Edson Barboza",
    rank: "14",
  },
  {
    name: "Movsar Evloev",
    rank: "15",
  },
  {
    name: "Dustin Poirier",
    rank: "1",
  },
  {
    name: "Justin Gaethje",
    rank: "2",
  },
  {
    name: "Charles Oliveira",
    rank: "3",
  },
  {
    name: "Michael Chandler",
    rank: "4",
  },
  {
    name: "Tony Ferguson",
    rank: "5",
  },
  {
    name: "Conor McGregor",
    rank: "6",
  },
  {
    name: "Rafael Dos Anjos",
    rank: "7",
  },
  {
    name: "Dan Hooker",
    rank: "8",
  },
  {
    name: "Beneil Dariush",
    rank: "9",
  },
  {
    name: "Paul Felder",
    rank: "10",
  },
  {
    name: "Islam Makhachev",
    rank: "11",
  },
  {
    name: "Diego Ferreira",
    rank: "12",
  },
  {
    name: "Kevin Lee",
    rank: "13",
  },
  {
    name: "Al Iaquinta",
    rank: "14",
  },
  {
    name: "Gregor Gillespie",
    rank: "15",
  },
  {
    name: "Colby Covington",
    rank: "1",
  },
  {
    name: "Gilbert Burns",
    rank: "2",
  },
  {
    name: "Leon Edwards",
    rank: "3",
  },
  {
    name: "Jorge Masvidal",
    rank: "4",
  },
  {
    name: "Stephen Thompson",
    rank: "5",
  },
  {
    name: "Vicente Luque",
    rank: "6",
  },
  {
    name: "Michael Chiesa",
    rank: "7",
  },
  {
    name: "Demian Maia",
    rank: "8",
  },
  {
    name: "Neil Magny",
    rank: "9",
  },
  {
    name: "Tyron Woodley",
    rank: "10",
  },
  {
    name: "Geoff Neal",
    rank: "11",
  },
  {
    name: "Li Jingliang",
    rank: "12",
  },
  {
    name: "Belal Muhammad",
    rank: "13",
  },
  {
    name: "Sean Brady",
    rank: "14",
  },
  {
    name: "Robbie Lawler",
    rank: "15",
  },
  {
    name: "Robert Whittaker",
    rank: "1",
  },
  {
    name: "Paulo Costa",
    rank: "2",
  },
  {
    name: "Marvin Vettori",
    rank: "3",
  },
  {
    name: "Jared Cannonier",
    rank: "4",
  },
  {
    name: "Derek Brunson",
    rank: "5",
  },
  {
    name: "Darren Till",
    rank: "6",
  },
  {
    name: "Jack Hermansson",
    rank: "7",
  },
  {
    name: "Kelvin Gastelum",
    rank: "8",
  },
  {
    name: "Uriah Hall",
    rank: "9",
  },
  {
    name: "Edmen Shahbazyan",
    rank: "10",
  },
  {
    name: "Chris Weidman",
    rank: "11",
  },
  {
    name: "Kevin Holland",
    rank: "12",
  },
  {
    name: "Omari Akhmedov",
    rank: "13",
  },
  {
    name: "Brad Tavares",
    rank: "14",
  },
  {
    name: "Sean Strickland",
    rank: "15",
  },
  {
    name: "Glover Teixeira",
    rank: "1",
  },
  {
    name: "Aleksandar Rakic",
    rank: "2",
  },
  {
    name: "Dominick Reyes",
    rank: "3",
  },
  {
    name: "Thiago Santos",
    rank: "4",
  },
  {
    name: "Jiri Prochazka",
    rank: "5",
  },
  {
    name: "Anthony Smith",
    rank: "6",
  },
  {
    name: "Magomed Ankalaev",
    rank: "7",
  },
  {
    name: "Volkan Oezdemir",
    rank: "8",
  },
  {
    name: "Nikita Krylov",
    rank: "9",
  },
  {
    name: "Johnny Walker",
    rank: "10",
  },
  {
    name: "Ryan Spann",
    rank: "11",
  },
  {
    name: "Misha Cirkunov",
    rank: "12",
  },
  {
    name: "Jim Crute",
    rank: "13",
  },
  {
    name: "Paul Craig",
    rank: "14",
  },
  {
    name: "Jamahal Hill",
    rank: "15",
  },
  {
    name: "Stipe Miocic",
    rank: "1",
  },
  {
    name: "Derrick Lewis",
    rank: "2",
  },
  {
    name: "Curtis Blaydes",
    rank: "3",
  },
  {
    name: "Ciryl Gane",
    rank: "4",
  },
  {
    name: "Alexander Volkov",
    rank: "5",
  },
  {
    name: "Jairzinho Rozenstruik",
    rank: "6",
  },
  {
    name: "Shamil Abdurakhimov",
    rank: "7",
  },
  {
    name: "Walt Harris",
    rank: "8",
  },
  {
    name: "Augusto Sakai",
    rank: "9",
  },
  {
    name: "Chris Daukaus",
    rank: "10",
  },
  {
    name: "Marcin Tybura",
    rank: "11",
  },
  {
    name: "Blagoy Ivanov",
    rank: "12",
  },
  {
    name: "Tom Aspinall",
    rank: "13",
  },
  {
    name: "Sergei Pavlovich",
    rank: "14",
  },
  {
    name: "Aleksei Oleinik",
    rank: "15",
  },
  {
    name: "Valentina Shevchenko",
    rank: "2",
  },
  {
    name: "Zhang Weili",
    rank: "3",
  },
  {
    name: "Rose Namajunas",
    rank: "4",
  },
  {
    name: "Jessica Andrade",
    rank: "5",
  },
  {
    name: "Joanna Jedrzejczyk",
    rank: "6",
  },
  {
    name: "Germaine de Randamie",
    rank: "7",
  },
  {
    name: "Holly Holm",
    rank: "8",
  },
  {
    name: "Aspen Ladd",
    rank: "9",
  },
  {
    name: "Katlyn Chookagian",
    rank: "10",
  },
  {
    name: "Xiaonan Yan ",
    rank: "11",
  },
  {
    name: "Mackenzie Dern",
    rank: "12",
  },
  {
    name: "Carla Esparza",
    rank: "13",
  },
  {
    name: "Cynthia Calvillo",
    rank: "14",
  },
  {
    name: "Claudia Gadelha",
    rank: "15",
  },
  {
    name: "Rose Namajunas",
    rank: "1",
  },
  {
    name: "Joanna Jedrzejczyk",
    rank: "2",
  },
  {
    name: "Xiaonan Yan",
    rank: "3",
  },
  {
    name: "Carla Esparza",
    rank: "4",
  },
  {
    name: "Mackenzie Dern",
    rank: "5",
  },
  {
    name: "Marina Rodriguez",
    rank: "6",
  },
  {
    name: "Nina Nunes",
    rank: "7",
  },
  {
    name: "Claudia Gadelha",
    rank: "8",
  },
  {
    name: "Michelle Waterson",
    rank: "9",
  },
  {
    name: "Tecia Torres",
    rank: "10",
  },
  {
    name: "Amanda Ribas",
    rank: "11",
  },
  {
    name: "Angela Hill",
    rank: "12",
  },
  {
    name: "Virna Jandiroba",
    rank: "13",
  },
  {
    name: "Amanda Lemos",
    rank: "14",
  },
  {
    name: "Felice Herrig",
    rank: "15",
  },
  {
    name: "Jessica Andrade",
    rank: "1",
  },
  {
    name: "Katlyn Chookagian",
    rank: "2",
  },
  {
    name: "Lauren Murphy",
    rank: "3",
  },
  {
    name: "Jennifer Maia",
    rank: "4",
  },
  {
    name: "Cynthia Calvillo",
    rank: "5",
  },
  {
    name: "Joanne Calderwood",
    rank: "6",
  },
  {
    name: "Viviane Araujo",
    rank: "7",
  },
  {
    name: "Jessica Eye",
    rank: "8",
  },
  {
    name: "Roxanne Modafferi",
    rank: "9",
  },
  {
    name: "Alexa Grasso",
    rank: "10",
  },
  {
    name: "Andrea Lee",
    rank: "11",
  },
  {
    name: "Antonina Shevchenko",
    rank: "12",
  },
  {
    name: "Taila Santos",
    rank: "13",
  },
  {
    name: "Maycee Barber",
    rank: "14",
  },
  {
    name: "Miranda Maverick",
    rank: "15",
  },
  {
    name: "Germaine de Randamie",
    rank: "1",
  },
  {
    name: "Holly Holm",
    rank: "2",
  },
  {
    name: "Aspen Ladd",
    rank: "3",
  },
  {
    name: "Irene Aldana",
    rank: "4",
  },
  {
    name: "Yana Kunitskaya",
    rank: "5",
  },
  {
    name: "Julianna Peña",
    rank: "6",
  },
  {
    name: "Ketlen Vieira",
    rank: "7",
  },
  {
    name: "Sara McMann",
    rank: "8",
  },
  {
    name: "Macy Chiasson",
    rank: "9",
  },
  {
    name: "Lina Lansberg",
    rank: "10",
  },
  {
    name: "Pannie Kianzad",
    rank: "11",
  },
  {
    name: "Marion Reneau",
    rank: "12",
  },
  {
    name: "Sijara Eubanks",
    rank: "13",
  },
  {
    name: "Karol Rosa",
    rank: "14",
  },
  {
    name: "Julia Avila",
    rank: "15",
  },
  {
    name: "Jon Jones",
    rank: "C",
  },
  {
    name: "Deiveson Figueiredo",
    rank: "C",
  },
  {
    name: "Aljamain Sterling",
    rank: "C",
  },
  {
    name: "Alexander Volkanovski",
    rank: "C",
  },
  {
    name: "Kamaru Usman",
    rank: "C",
  },
  {
    name: "Israel Adesanya",
    rank: "C",
  },
  {
    name: "Jan Blachowicz",
    rank: "C",
  },
  {
    name: "Francis Ngannou",
    rank: "C",
  },
  {
    name: "Amanda Nunes",
    rank: "C",
  },
  {
    name: "Weili Zhang ",
    rank: "C",
  },
  {
    name: "Valentina Shevchenko",
    rank: "C",
  },
  {
    name: "Amanda Nunes",
    rank: "C",
  },
  {
    name: "Amanda Nunes",
    rank: "C",
  },
];

let resultsList = [
  {
    winner: "Charles Oliveira ",
    method: "ko/tko",
    time: "0:19 Round 2",
    b_Link: "https://www.tapology.com/fightcenter/fighters/mike-chandler",
  },
  {
    winner: "Beneil Dariush ",
    method: "decision",
    time: "3 Rounds",
    b_Link:
      "https://www.tapology.com/fightcenter/fighters/tony-ferguson-el-cucuy",
  },
  {
    winner: "Rogério Bontorin ",
    method: "decision",
    time: "3 Rounds",
    b_Link: "https://www.tapology.com/fightcenter/fighters/29221-matt-schnell",
  },
  {
    winner: "Katlyn Chookagian ",
    method: "decision",
    time: "3 Rounds",
    b_Link:
      "https://www.tapology.com/fightcenter/fighters/106437-viviane-araujo-vivi",
  },
  {
    winner: "Edson Barboza ",
    method: "ko/tko",
    time: "1:16 Round 3",
    b_Link: "https://www.tapology.com/fightcenter/fighters/37627-shane-burgos",
  },
  {
    winner: "André Muniz ",
    method: "submission",
    time: "3:59 Round 1",
    b_Link:
      "https://www.tapology.com/fightcenter/fighters/ronaldo-souza-jacare",
  },
  {
    winner: "Lando Vannata ",
    method: "decision",
    time: "3 Rounds",
    b_Link:
      "https://www.tapology.com/fightcenter/fighters/23283-michael-grundy",
  },
  {
    winner: "Jordan Wright ",
    method: "ko/tko",
    time: "1:04 Round 1",
    b_Link: "https://www.tapology.com/fightcenter/fighters/38304-jamie-pickett",
  },
  {
    winner: "Andrea Lee ",
    method: "submission",
    time: "4:52 Round 2",
    b_Link:
      "https://www.tapology.com/fightcenter/fighters/119417-antonia-schevchenko",
  },
  {
    winner: "Priscila Cachoeira ",
    method: "ko/tko",
    time: "4:51 Round 2",
    b_Link:
      "https://www.tapology.com/fightcenter/fighters/53505-gina-mazany-danger",
  },
  {
    winner: "Tucker Lutz ",
    method: "decision",
    time: "3 Rounds",
    b_Link: "https://www.tapology.com/fightcenter/fighters/kevin-aguilar",
  },
  {
    winner: "Christos Giagos ",
    method: "submission",
    time: "3:59 Round 2",
    b_Link: "https://www.tapology.com/fightcenter/fighters/17490-sean-soriano",
  },
  {
    winner: "Cris Cyborg ",
    method: "ko/tko",
    time: "4:51 Round 5",
    b_Link: "https://www.tapology.com/fightcenter/fighters/leslie-smith",
  },
  {
    winner: "Leandro Higo ",
    method: "decision",
    time: "3 Rounds",
    b_Link:
      "https://www.tapology.com/fightcenter/fighters/31762-darrion-caldwell",
  },
  {
    winner: "Austin Vanderford ",
    method: "decision",
    time: "3 Rounds",
    b_Link:
      "https://www.tapology.com/fightcenter/fighters/106608-fabian-edwards",
  },
  {
    winner: "Jaleel Willis ",
    method: "decision",
    time: "3 Rounds",
    b_Link:
      "https://www.tapology.com/fightcenter/fighters/141574-maycon-mendona",
  },
  {
    winner: "Hannah Guy ",
    method: "decision",
    time: "3 Rounds",
    b_Link:
      "https://www.tapology.com/fightcenter/fighters/186801-valerie-loureda",
  },
  {
    winner: "Saad Awad ",
    method: "ko/tko",
    time: "3:16 Round 1",
    b_Link: "https://www.tapology.com/fightcenter/fighters/nate-andrews",
  },
  {
    winner: "Grant Neal ",
    method: "submission",
    time: "4:20 Round 1",
    b_Link:
      "https://www.tapology.com/fightcenter/fighters/40296-tyree-fortune-x-man",
  },
  {
    winner: "Sumiko Inaba ",
    method: "ko/tko",
    time: "3:35 Round 3",
    b_Link:
      "https://www.tapology.com/fightcenter/fighters/199479-kristina-katsikis",
  },
  {
    winner: "Aviv Gozali ",
    method: "submission",
    time: "1:17 Round 1",
    b_Link: "https://www.tapology.com/fightcenter/fighters/41264-sean-felton",
  },
  {
    winner: "Davion Franklin ",
    method: "ko/tko",
    time: "2:02 Round 1",
    b_Link: "https://www.tapology.com/fightcenter/fighters/tyler-king",
  },
  {
    winner: "Leah McCourt ",
    method: "submission",
    time: "2:42 Round 2",
    b_Link: "https://www.tapology.com/fightcenter/fighters/67815-janay-harding",
  },
  {
    winner: "Danny Sabatello ",
    method: "decision",
    time: "3 Rounds",
    b_Link: "https://www.tapology.com/fightcenter/fighters/22153-brett-johns",
  },
  {
    winner: "Alexander Shabliy ",
    method: "decision",
    time: "3 Rounds",
    b_Link: "https://www.tapology.com/fightcenter/fighters/52606-alfie-davies",
  },
  {
    winner: "Arjan Bhullar ",
    method: "ko/tko",
    time: "4:27 Round 2",
    b_Link:
      "https://www.tapology.com/fightcenter/fighters/brandon-vera-the-truth",
  },
  {
    winner: "Tawanchai PK Saenchai ",
    method: "ko/tko",
    time: "0:35 Round 3",
    b_Link: "https://www.tapology.com/fightcenter/fighters/238896-sean-clancy",
  },
  {
    winner: "Bi Nguyen ",
    method: "decision",
    time: "3 Rounds",
    b_Link: "https://www.tapology.com/fightcenter/fighters/240108-ritu-phogat",
  },
  {
    winner: "Ayaka Miura ",
    method: "submission",
    time: "2:58 Round 1",
    b_Link:
      "https://www.tapology.com/fightcenter/fighters/135748-rayane-bastos",
  },
  {
    winner: "Gary Mangat ",
    method: "decision",
    time: "3 Rounds",
    b_Link:
      "https://www.tapology.com/fightcenter/fighters/148755-roshan-mainam",
  },
  {
    winner: "Fabrício Werdum ",
    method: "ends in a no contest",
    time: "2:32 Round 1",
    b_Link: "https://www.tapology.com/fightcenter/fighters/87738-renan-pobrema",
  },
  {
    winner: "Kayla Harrison ",
    method: "ko/tko",
    time: "1:23 Round 1",
    b_Link:
      "https://www.tapology.com/fightcenter/fighters/68151-mariana-morais",
  },
  {
    winner: "Brandon Sayles ",
    method: "submission",
    time: "3:42 Round 2",
    b_Link:
      "https://www.tapology.com/fightcenter/fighters/156538-mohammed-usman",
  },
  {
    winner: "Larissa Pacheco ",
    method: "ko/tko",
    time: "0:51 Round 1",
    b_Link: "https://www.tapology.com/fightcenter/fighters/234848-julija-pajic",
  },
  {
    winner: "B. Cappelozza ",
    method: "ko/tko",
    time: "0:46 Round 1",
    b_Link:
      "https://www.tapology.com/fightcenter/fighters/43151-ante-delija-walking-trouble",
  },
  {
    winner: "Kaitlin Young ",
    method: "decision",
    time: "3 Rounds",
    b_Link:
      "https://www.tapology.com/fightcenter/fighters/4847-cindy-dandois-battlecat",
  },
  {
    winner: "Genah Fabian ",
    method: "decision",
    time: "3 Rounds",
    b_Link:
      "https://www.tapology.com/fightcenter/fighters/107012-laura-sanchez",
  },
  {
    winner: "Denis Goltsov ",
    method: "ko/tko",
    time: "4:21 Round 1",
    b_Link: "https://www.tapology.com/fightcenter/fighters/37293-mo-dereese",
  },
  {
    winner: "Taylor Guardado ",
    method: "decision",
    time: "3 Rounds",
    b_Link: "https://www.tapology.com/fightcenter/fighters/127379-yelena",
  },
  {
    winner: "Magomed Umalatov ",
    method: "ko/tko",
    time: "0:07 Round 2",
    b_Link: "https://www.tapology.com/fightcenter/fighters/51102-kyron-bowen",
  },
];

let nowEpochX = new Date().getTime();

data.forEach((event) => {
  if (new Date(event[1]) - nowEpochX < 0) {
    event[3].forEach((bout) => {
      resultsList.forEach((res) => {
        if (bout.fighterA === res.winner) {
          bout.winner = res.winner;
          bout.method = res.method;
          bout.timing = res.time;
          bout.fighterBLink = res.b_Link;
        }
        if (bout.fighterB === res.winner) {
          bout.winner = res.winner;
          bout.method = res.method;
          bout.timing = res.time;
        }
      });
    });
  }
});

var FuzzySet = (function () {
  "use strict";

  const FuzzySet = function (
    arr,
    useLevenshtein,
    gramSizeLower,
    gramSizeUpper
  ) {
    var fuzzyset = {};

    // default options
    arr = arr || [];
    fuzzyset.gramSizeLower = gramSizeLower || 2;
    fuzzyset.gramSizeUpper = gramSizeUpper || 3;
    fuzzyset.useLevenshtein =
      typeof useLevenshtein !== "boolean" ? true : useLevenshtein;

    // define all the object functions and attributes
    fuzzyset.exactSet = {};
    fuzzyset.matchDict = {};
    fuzzyset.items = {};

    // helper functions
    var levenshtein = function (str1, str2) {
      var current = [],
        prev,
        value;

      for (var i = 0; i <= str2.length; i++)
        for (var j = 0; j <= str1.length; j++) {
          if (i && j)
            if (str1.charAt(j - 1) === str2.charAt(i - 1)) value = prev;
            else value = Math.min(current[j], current[j - 1], prev) + 1;
          else value = i + j;

          prev = current[j];
          current[j] = value;
        }

      return current.pop();
    };

    // return an edit distance from 0 to 1
    var _distance = function (str1, str2) {
      if (str1 === null && str2 === null)
        throw "Trying to compare two null values";
      if (str1 === null || str2 === null) return 0;
      str1 = String(str1);
      str2 = String(str2);

      var distance = levenshtein(str1, str2);
      if (str1.length > str2.length) {
        return 1 - distance / str1.length;
      } else {
        return 1 - distance / str2.length;
      }
    };
    var _nonWordRe = /[^a-zA-Z0-9\u00C0-\u00FF, ]+/g;

    var _iterateGrams = function (value, gramSize) {
      gramSize = gramSize || 2;
      var simplified = "-" + value.toLowerCase().replace(_nonWordRe, "") + "-",
        lenDiff = gramSize - simplified.length,
        results = [];
      if (lenDiff > 0) {
        for (var i = 0; i < lenDiff; ++i) {
          simplified += "-";
        }
      }
      for (var i = 0; i < simplified.length - gramSize + 1; ++i) {
        results.push(simplified.slice(i, i + gramSize));
      }
      return results;
    };

    var _gramCounter = function (value, gramSize) {
      // return an object where key=gram, value=number of occurrences
      gramSize = gramSize || 2;
      var result = {},
        grams = _iterateGrams(value, gramSize),
        i = 0;
      for (i; i < grams.length; ++i) {
        if (grams[i] in result) {
          result[grams[i]] += 1;
        } else {
          result[grams[i]] = 1;
        }
      }
      return result;
    };

    // the main functions
    fuzzyset.get = function (value, defaultValue, minMatchScore) {
      // check for value in set, returning defaultValue or null if none found
      if (minMatchScore === undefined) {
        minMatchScore = 0.33;
      }
      var result = this._get(value, minMatchScore);
      if (!result && typeof defaultValue !== "undefined") {
        return defaultValue;
      }
      return result;
    };

    fuzzyset._get = function (value, minMatchScore) {
      var results = [];
      // start with high gram size and if there are no results, go to lower gram sizes
      for (
        var gramSize = this.gramSizeUpper;
        gramSize >= this.gramSizeLower;
        --gramSize
      ) {
        results = this.__get(value, gramSize, minMatchScore);
        if (results && results.length > 0) {
          return results;
        }
      }
      return null;
    };

    fuzzyset.__get = function (value, gramSize, minMatchScore) {
      var normalizedValue = this._normalizeStr(value),
        matches = {},
        gramCounts = _gramCounter(normalizedValue, gramSize),
        items = this.items[gramSize],
        sumOfSquareGramCounts = 0,
        gram,
        gramCount,
        i,
        index,
        otherGramCount;

      for (gram in gramCounts) {
        gramCount = gramCounts[gram];
        sumOfSquareGramCounts += Math.pow(gramCount, 2);
        if (gram in this.matchDict) {
          for (i = 0; i < this.matchDict[gram].length; ++i) {
            index = this.matchDict[gram][i][0];
            otherGramCount = this.matchDict[gram][i][1];
            if (index in matches) {
              matches[index] += gramCount * otherGramCount;
            } else {
              matches[index] = gramCount * otherGramCount;
            }
          }
        }
      }

      function isEmptyObject(obj) {
        for (var prop in obj) {
          if (obj.hasOwnProperty(prop)) return false;
        }
        return true;
      }

      if (isEmptyObject(matches)) {
        return null;
      }

      var vectorNormal = Math.sqrt(sumOfSquareGramCounts),
        results = [],
        matchScore;
      // build a results list of [score, str]
      for (var matchIndex in matches) {
        matchScore = matches[matchIndex];
        results.push([
          matchScore / (vectorNormal * items[matchIndex][0]),
          items[matchIndex][1],
        ]);
      }
      var sortDescending = function (a, b) {
        if (a[0] < b[0]) {
          return 1;
        } else if (a[0] > b[0]) {
          return -1;
        } else {
          return 0;
        }
      };
      results.sort(sortDescending);
      if (this.useLevenshtein) {
        var newResults = [],
          endIndex = Math.min(50, results.length);
        // truncate somewhat arbitrarily to 50
        for (var i = 0; i < endIndex; ++i) {
          newResults.push([
            _distance(results[i][1], normalizedValue),
            results[i][1],
          ]);
        }
        results = newResults;
        results.sort(sortDescending);
      }
      newResults = [];
      results.forEach(
        function (scoreWordPair) {
          if (scoreWordPair[0] >= minMatchScore) {
            newResults.push([
              scoreWordPair[0],
              this.exactSet[scoreWordPair[1]],
            ]);
          }
        }.bind(this)
      );
      return newResults;
    };

    fuzzyset.add = function (value) {
      var normalizedValue = this._normalizeStr(value);
      if (normalizedValue in this.exactSet) {
        return false;
      }

      var i = this.gramSizeLower;
      for (i; i < this.gramSizeUpper + 1; ++i) {
        this._add(value, i);
      }
    };

    fuzzyset._add = function (value, gramSize) {
      var normalizedValue = this._normalizeStr(value),
        items = this.items[gramSize] || [],
        index = items.length;

      items.push(0);
      var gramCounts = _gramCounter(normalizedValue, gramSize),
        sumOfSquareGramCounts = 0,
        gram,
        gramCount;
      for (gram in gramCounts) {
        gramCount = gramCounts[gram];
        sumOfSquareGramCounts += Math.pow(gramCount, 2);
        if (gram in this.matchDict) {
          this.matchDict[gram].push([index, gramCount]);
        } else {
          this.matchDict[gram] = [[index, gramCount]];
        }
      }
      var vectorNormal = Math.sqrt(sumOfSquareGramCounts);
      items[index] = [vectorNormal, normalizedValue];
      this.items[gramSize] = items;
      this.exactSet[normalizedValue] = value;
    };

    fuzzyset._normalizeStr = function (str) {
      if (Object.prototype.toString.call(str) !== "[object String]")
        throw "Must use a string as argument to FuzzySet functions";
      return str.toLowerCase();
    };

    // return length of items in set
    fuzzyset.length = function () {
      var count = 0,
        prop;
      for (prop in this.exactSet) {
        if (this.exactSet.hasOwnProperty(prop)) {
          count += 1;
        }
      }
      return count;
    };

    // return is set is empty
    fuzzyset.isEmpty = function () {
      for (var prop in this.exactSet) {
        if (this.exactSet.hasOwnProperty(prop)) {
          return false;
        }
      }
      return true;
    };

    // return list of values loaded into set
    fuzzyset.values = function () {
      var values = [],
        prop;
      for (prop in this.exactSet) {
        if (this.exactSet.hasOwnProperty(prop)) {
          values.push(this.exactSet[prop]);
        }
      }
      return values;
    };

    // initialization
    var i = fuzzyset.gramSizeLower;
    for (i; i < fuzzyset.gramSizeUpper + 1; ++i) {
      fuzzyset.items[i] = [];
    }
    // add all the items to the set
    for (i = 0; i < arr.length; ++i) {
      fuzzyset.add(arr[i]);
    }

    return fuzzyset;
  };

  return FuzzySet;
})();

data.forEach((event) => {
  for (let i = 0; i < event[3].length; i++) {
    event[3][i].rankA = "";
    event[3][i].rankB = "";
  }
});

data.forEach((event) => {
  for (j = 0; j < event[3].length; j++) {
    let name1 = event[3][j].fighterA;
    let name2 = event[3][j].fighterB;

    ufcRankings.forEach((item) => {
      a = FuzzySet([name1]);
      if (a.get(item.name) != null) {
        if (a.get(item.name)[0][0] > 0.82) {
          event[3][j].rankA = `#${item.rank}`;
          if (event[3][j].rankA === "#C") {
            event[3][j].rankA = `<span id="champ">C</span> 
            `;
            /* <img id= "beltIcon" src="images/beltPic.png" width="40" height="19">*/
          }
        }
      }
      a = FuzzySet([name2]);
      if (a.get(item.name) != null) {
        if (a.get(item.name)[0][0] > 0.78) {
          event[3][j].rankB = `#${item.rank}`;
        }
      }
    });
  }
});

console.log("let data = ");

console.log(JSON.stringify(data));
