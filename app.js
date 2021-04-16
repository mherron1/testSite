let data2 = data.sort((a, b) => {
  return a[1] - b[1];
});

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
    name: "Jimmy Crute",
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
    name: "Yan Xiaonan",
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
    name: "Yan Xiaonan",
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
    name: "Weili Zhang",
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

let assets = [
  "apr16.jpg",
  "apr17.jpg",
  "apr22.jpg",
  "apr23.jpg",
  "apr24.jpg",
  "apr25.jpg",
  "apr29.jpg",
  "may01.jpg",
  "may06.jpg",
  "may07.jpg",
  "may08.jpg",
  "may15.jpg",
  "may21.jpg",
  "may22.jpg",
  "jun10.jpg",
  "jun12.jpg",
  "jun19.jpg",
  "jun26.jpg",
  "jul10.jpg",
];

let times = [
  {
    date: "apr18",
    promo: "Ultimate Fighting Championship",
    time: new Date(2021, 03, 18, 03, 00, 00),
  },
];

data2.forEach((event) => {
  for (let i = 0; i < event[3].length; i++) {
    event[3][i].rankA = "";
    event[3][i].rankB = "";
  }

  let tempTime =
    new Date(event[1] - 36000000).toString().split(" ")[1] +
    new Date(event[1] - 36000000).toString().split(" ")[2] +
    ".jpg";
  if (assets.indexOf(tempTime.toLowerCase()) > -1) {
    event[2] =
      "images/eventImages/" + assets[assets.indexOf(tempTime.toLowerCase())];
  } else if (event[0].includes("Ultimate")) {
    event[2] = "images/defaults/ufc.jpg";
  } else if (event[0].includes("Bellator")) {
    event[2] = "images/defaults/bellator.jpg";
  } else if (event[0].includes("Professional Fight")) {
    event[2] = "images/defaults/pfl.jpg";
  } else if (event[0].includes("ONE")) {
    event[2] = "images/defaults/one.jpg";
  } else {
    event[2] = "images/defaults/placeholder.jpg";
  }
});
