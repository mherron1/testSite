let odds = [
  { name: "Douglas Lima", odds: "1.91" },
  { name: "Yaroslav Amosov", odds: "1.91" },
  { name: "Jason Jackson", odds: "1.33" },
  { name: "Paul Daley", odds: "3.53" },
  { name: "Aaron Pico", odds: "1.15" },
  { name: "Aiden Lee", odds: "5.85" },
  { name: "Demarques Jackson", odds: "2.10" },
  { name: "Mark Lemminger", odds: "1.77" },
  { name: "Kyle Crutchmer", odds: "1.61" },
  { name: "Levan Chokheli", odds: "2.45" },
  { name: "Justin Gonzales", odds: "1.71" },
  { name: "Tywan Claxton", odds: "2.20" },
  { name: "Bobby King", odds: "1.95" },
  { name: "Nick Newell", odds: "1.87" },
  { name: "Lucas Brennan", odds: "1.08" },
  { name: "Matt Skibicki", odds: "9.00" },
  { name: "Amanda Bell", odds: "1.74" },
  { name: "Marina Mokhnatkina", odds: "2.15" },
  { name: "Alex Polizzi", odds: "1.43" },
  { name: "Gustavo Trujillo", odds: "2.90" },
  { name: "Herdeson Batista", odds: "1.40" },
  { name: "Vener Galiev", odds: "2.90" },
  { name: "Murad Kalamov", odds: "1.47" },
  { name: "Walter Pereira Jr", odds: "2.70" },
  { name: "Amirkhan Guliev", odds: "1.15" },
  { name: "Roman Gudochkin", odds: "5.50" },
  { name: "Alan Gomes", odds: "2.00" },
  { name: "Lenar Suleymanov", odds: "1.77" },
  { name: "Makharbek Karginov", odds: "1.54" },
  { name: "Nikita Chistyakov", odds: "2.55" },
  { name: "Abubakar Mestoev", odds: "1.47" },
  { name: "Egor Golubtsov", odds: "2.70" },
  { name: "Akhmed Musakaev", odds: "1.67" },
  { name: "Mukhitdin Kholov", odds: "2.20" },
  { name: "Denis Silva", odds: "2.60" },
  { name: "Pavel Gordeev", odds: "1.51" },
  { name: "Altynbek Mamashev", odds: "1.87" },
  { name: "Vasily Kurochkin", odds: "1.87" },
  { name: "Aslan Shogov", odds: "1.57" },
  { name: "Osimkhon Rakhmonov", odds: "2.45" },
  { name: "Arseniy Yatsynov", odds: "2.60" },
  { name: "Sergey Yakovlev", odds: "1.51" },
  { name: "Carlos Canada", odds: "3.60" },
  { name: "Manuel Torres", odds: "1.29" },
  { name: "Aaroon Canarte", odds: "1.31" },
  { name: "Alexander Barahona", odds: "3.50" },
  { name: "Braian Gonzalez", odds: "1.49" },
  { name: "Paul Marquez", odds: "2.65" },
  { name: "Guilherme Antunes", odds: "1.37" },
  { name: "Patrick Faeh", odds: "3.10" },
  { name: "Manuel Reyna", odds: "3.00" },
  { name: "Santiago Prieto", odds: "1.38" },
  { name: "David Enriquez", odds: "3.80" },
  { name: "Rene Hernandez", odds: "1.27" },
  { name: "Israel Adesanya", odds: "1.43" },
  { name: "Marvin Vettori", odds: "3.15" },
  { name: "Brandon Moreno", odds: "2.77" },
  { name: "Deiveson Figueiredo", odds: "1.52" },
  { name: "Leon Edwards", odds: "1.18" },
  { name: "Nate Diaz", odds: "5.65" },
  { name: "Belal Muhammad", odds: "1.47" },
  { name: "Demian Maia", odds: "2.95" },
  { name: "Jamahal Hill", odds: "1.39" },
  { name: "Paul Craig", odds: "3.35" },
  { name: "Brad Riddell", odds: "2.30" },
  { name: "Drew Dober", odds: "1.71" },
  { name: "Darren Stewart", odds: "2.30" },
  { name: "Eryk Anders", odds: "1.71" },
  { name: "Hakeem Dawodu", odds: "3.00" },
  { name: "Movsar Evloev", odds: "1.45" },
  { name: "Joanne Calderwood", odds: "1.80" },
  { name: "Lauren Murphy", odds: "2.15" },
  { name: "Alexis Davis", odds: "2.80" },
  { name: "Pannie Kianzad", odds: "1.51" },
  { name: "Chase Hooper", odds: "2.05" },
  { name: "Steven Peterson", odds: "1.87" },
  { name: "Matt Frevola", odds: "1.49" },
  { name: "Terrance McKinney", odds: "2.88" },
  { name: "Fares Ziam", odds: "1.83" },
  { name: "Luigi Vendramini", odds: "2.10" },
  { name: "Carlos Felipe", odds: "1.63" },
  { name: "Jake Collier", odds: "2.50" },
  { name: "Alain Ilunga", odds: "1.38" },
  { name: "Anicet Kanyeba", odds: "3.05" },
  { name: "Robert Simbowe", odds: "3.00" },
  { name: "Rocky Ilunga", odds: "1.38" },
  { name: "August Kayambala", odds: "1.27" },
  { name: "Warren Richards", odds: "3.75" },
  { name: "Elvis Ngwalangwala", odds: "2.60" },
  { name: "Tapiwa Katikati", odds: "1.51" },
  { name: "Jean-Marie Kabeya", odds: "3.65" },
  { name: "Shannon van Tonder", odds: "1.28" },
  { name: "Igeu Kabesa", odds: "1.38" },
  { name: "Reinaldo Ekson", odds: "3.00" },
  { name: "Matunga Djikasa", odds: "1.83" },
  { name: "Ricky Misholas", odds: "1.91" },
  { name: "Gian Souza", odds: "1.83" },
  { name: "Luthando Biko", odds: "1.91" },
  { name: "Francois Cundari", odds: "4.75" },
  { name: "Mzwandile Hlongwa", odds: "1.19" },
  { name: "Adrian Sanchez", odds: "1.63" },
  { name: "Roderique Kena", odds: "2.30" },
  { name: "Chan Sung Jung", odds: "1.91" },
  { name: "Dan Ige", odds: "1.91" },
  { name: "Davey Grant", odds: "3.10" },
  { name: "Marlon Vera", odds: "1.40" },
  { name: "Aleksei Oliynyk", odds: "2.85" },
  { name: "Serghei Spivac", odds: "1.44" },
  { name: "Bruno Silva", odds: "1.69" },
  { name: "Wellington Turman", odds: "2.25" },
  { name: "Kanako Murata", odds: "2.35" },
  { name: "Virna Jandiroba", odds: "1.65" },
  { name: "Julian Erosa", odds: "2.10" },
  { name: "Seungwoo Choi", odds: "1.77" },
  { name: "Danny Roberts", odds: "2.70" },
  { name: "Tim Means", odds: "1.50" },
  { name: "Josh Parisian", odds: "1.77" },
  { name: "Roque Martinez", odds: "2.10" },
  { name: "Casey O'Neill", odds: "2.00" },
  { name: "Lara Procopio", odds: "1.83" },
  { name: "Joaquim Silva", odds: "1.87" },
  { name: "Rick Glenn", odds: "1.95" },
  { name: "Khaos Williams", odds: "1.59" },
  { name: "Matthew Semelsberger", odds: "2.50" },
  { name: "Aleksa Camur", odds: "1.40" },
  { name: "Nicolae Negumereanu", odds: "3.10" },
  { name: "Alexander Volkov", odds: "2.40" },
  { name: "Ciryl Gane", odds: "1.63" },
  { name: "Maxim Grishin", odds: "1.95" },
  { name: "Ovince St. Preux", odds: "1.87" },
  { name: "Su Mudaerji", odds: "1.69" },
  { name: "Tim Elliott", odds: "2.25" },
  { name: "Danilo Marques", odds: "1.57" },
  { name: "Ed Herman", odds: "2.55" },
  { name: "Michel Prazeres", odds: "2.75" },
  { name: "Shavkat Rakhmonov", odds: "1.48" },
  { name: "Charles Rosa", odds: "1.59" },
  { name: "Justin Jaynes", odds: "2.50" },
  { name: "Raoni Barcelos", odds: "1.48" },
  { name: "Timur Valiev", odds: "2.75" },
  { name: "Ramazan Emeev", odds: "1.67" },
  { name: "Warlley Alves", odds: "2.30" },
  { name: "Nicolas Dalby", odds: "1.39" },
  { name: "Sergey Khandozhko", odds: "3.15" },
  { name: "Isaac Villanueva", odds: "2.80" },
  { name: "Marcin Prachnio", odds: "1.45" },
  { name: "Jai Herbert", odds: "3.05" },
  { name: "Renato Moicano", odds: "1.41" },
  { name: "Damir Hadzovic", odds: "1.67" },
  { name: "Yancy Medeiros", odds: "2.30" },
  { name: "Conor McGregor", odds: "1.87" },
  { name: "Dustin Poirier", odds: "1.95" },
  { name: "Gilbert Burns", odds: "2.10" },
  { name: "Stephen Thompson", odds: "1.77" },
  { name: "Max Holloway", odds: "1.23" },
  { name: "Yair Rodriguez", odds: "4.25" },
  { name: "Alan Baudot", odds: "3.75" },
  { name: "Rodrigo Nascimento", odds: "1.27" },
  { name: "Maycee Barber", odds: "2.30" },
  { name: "Miranda Maverick", odds: "1.67" },
  { name: "Amanda Nunes", odds: "1.13" },
  { name: "Julianna Pena", odds: "6.25" },
  { name: "Glover Teixeira", odds: "3.00" },
  { name: "Jan Blachowicz", odds: "1.38" },
];
