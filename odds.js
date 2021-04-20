let odds = [
  { name: "Ariane Carnelossi", odds: "1.61" },
  { name: "Na Liang", odds: "2.60" },
  { name: "Danaa Batgerel", odds: "1.62" },
  { name: "Kevin Natividad", odds: "2.50" },
  { name: "Jamey Simmons", odds: "3.30" },
  { name: "Johnny Munoz", odds: "1.36" },
  { name: "Jeffrey Molina", odds: "1.92" },
  { name: "Qileng Aori", odds: "1.91" },
  { name: "Zhu Rong", odds: "1.40" },
  { name: "Rodrigo Vargas", odds: "3.00" },
  { name: "Weili Zhang", odds: "1.53" },
  { name: "Rose Namajunas", odds: "2.60" },
  { name: "Johnny Munoz", odds: "1.62" },
  { name: "Mark Striegl", odds: "2.20" },
  { name: "Rodrigo Vargas", odds: "3.05" },
  { name: "Zhu Rong", odds: "1.44" },
  { name: "Alex Oliveira", odds: "2.30" },
  { name: "Randy Brown", odds: "1.67" },
  { name: "Brendan Allen", odds: "1.75" },
  { name: "Karl Roberson", odds: "2.10" },
  { name: "Dwight Grant", odds: "1.44" },
  { name: "Stefan Sekulic", odds: "3.00" },
  { name: "Pat Sabatini", odds: "1.44" },
  { name: "Tristan Connelly", odds: "2.90" },
  { name: "Anthony Smith", odds: "2.63" },
  { name: "Jimmy Crute", odds: "1.53" },
  { name: "Chris Weidman", odds: "1.93" },
  { name: "Uriah Hall", odds: "1.91" },
  { name: "Kamaru Usman", odds: "1.25" },
  { name: "Jorge Masvidal", odds: "4.50" },
  { name: "Valentina Shevchenko", odds: "1.25" },
  { name: "Jessica Andrade", odds: "4.10" },
  { name: "Zhang Weili", odds: "1.53" },
  { name: "Rose Namajunas", odds: "2.63" },
  { name: "Andreas Michailidis", odds: "1.40" },
  { name: "KB Bhullar", odds: "3.25" },
  { name: "Cub Swanson", odds: "2.72" },
  { name: "Giga Chikadze", odds: "1.53" },
  { name: "Dominick Reyes", odds: "2.10" },
  { name: "Jiri Prochazka", odds: "1.83" },
  { name: "Felipe Colares", odds: "1.91" },
  { name: "Journey Newson", odds: "1.93" },
  { name: "Gabriel Benitez", odds: "1.50" },
  { name: "Jonathan Pearce", odds: "2.75" },
  { name: "Ion Cutelaba", odds: "1.77" },
  { name: "Devin Clark", odds: "2.10" },
  { name: "Kai Kamaka III", odds: "1.57" },
  { name: "T J Brown", odds: "2.50" },
  { name: "Loma Lookboonmee", odds: "1.35" },
  { name: "Sam Hughes", odds: "3.40" },
  { name: "Merab Dvalishvili", odds: "1.50" },
  { name: "Cody Stamann", odds: "2.75" },
  { name: "Randa Markos", odds: "2.63" },
  { name: "Luana Pinheiro", odds: "1.53" },
  { name: "Sean Strickland", odds: "1.44" },
  { name: "Krzysztof Jotko", odds: "3.00" },
  { name: "Shamil Abdurakhimov", odds: "2.40" },
  { name: "Augusto Sakai", odds: "1.61" },
  { name: "Anthony Johnson", odds: "2.00" },
  { name: "Yoel Romero", odds: "1.91" },
  { name: "Amanda Ribas", odds: "1.44" },
  { name: "Angela Hill", odds: "2.95" },
  { name: "Ben Rothwell", odds: "1.91" },
  { name: "Philipe Lins", odds: "1.91" },
  { name: "Christian Aguilera", odds: "2.01" },
  { name: "Carlston Harris", odds: "1.83" },
  { name: "Cory Sandhagen", odds: "1.62" },
  { name: "T.J. Dillashaw", odds: "2.30" },
  { name: "Donald Cerrone", odds: "1.20" },
  { name: "Diego Sanchez", odds: "5.50" },
  { name: "Maurice Greene", odds: "2.50" },
  { name: "Marcos Rogerio de Lima", odds: "1.57" },
  { name: "Nikolas Motta", odds: "1.72" },
  { name: "Damir Hadzovic", odds: "2.24" },
  { name: "Roxanne Modafferi", odds: "4.00" },
  { name: "Taila Santos", odds: "1.25" },
  { name: "Ryan Benoit", odds: "1.57" },
  { name: "Zarrukh Adashev", odds: "2.50" },
  { name: "Tafon Nchukwi", odds: "1.58" },
  { name: "Jun Yong Park", odds: "2.50" },
  { name: "T.J. Dillashaw", odds: "2.40" },
  { name: "Cory Sandhagen", odds: "1.63" },
  { name: "Charles Oliveira", odds: "1.80" },
  { name: "Michael Chandler", odds: "2.10" },
  { name: "Leon Edwards", odds: "1.25" },
  { name: "Nate Diaz", odds: "4.20" },
  { name: "Beneil Dariush", odds: "1.67" },
  { name: "Tony Ferguson", odds: "2.30" },
  { name: "Edmen Shahbazyan", odds: "2.63" },
  { name: "Jack Hermansson", odds: "1.53" },
  { name: "Deiveson Figueiredo", odds: "1.40" },
  { name: "Brandon Moreno", odds: "3.00" },
  { name: "Ciryl Gane", odds: "1.72" },
  { name: "Alexander Volkov", odds: "2.30" },
  { name: "Francis Ngannou", odds: "1.55" },
  { name: "Jon Jones", odds: "2.63" },
  { name: "Dustin Poirier", odds: "2.05" },
  { name: "Conor McGregor", odds: "1.92" },
  { name: "Gilbert Burns", odds: "2.30" },
  { name: "Stephen Thompson", odds: "1.70" },
  { name: "Jennifer Maia", odds: "1.50" },
  { name: "Maycee Barber", odds: "2.50" },
  { name: "Miranda Maverick", odds: "1.57" },
];
