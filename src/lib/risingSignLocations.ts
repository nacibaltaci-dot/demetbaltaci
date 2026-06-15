// risingSignLocations.ts
// Yükselen Burç modülü — ülke/şehir verisi (GÜNCEL: 26 ülke, 364 şehir)
// Her şehir: [ad, enlem, boylam] ; saat dilimi ülke düzeyinde (tz) ya da
// şehir düzeyinde 4. eleman olarak (çok saat dilimli ülkeler: ABD, Kanada, Rusya, Avustralya).
// Saat dilimi MUTLAKA Intl.DateTimeFormat ile bu IANA string'inden hesaplanır.

export type City = [name: string, lat: number, lon: number, tz: string];
export interface Country { name: string; cities: City[]; }

const TR: [string, number, number][] = [
["Adana",37.00,35.32],["Adıyaman",37.76,38.28],["Afyonkarahisar",38.76,30.54],["Ağrı",39.72,43.05],
["Aksaray",38.37,34.03],["Amasya",40.65,35.83],["Ankara",39.93,32.85],["Antalya",36.88,30.70],
["Ardahan",41.11,42.70],["Artvin",41.18,41.82],["Aydın",37.85,27.84],["Balıkesir",39.65,27.88],
["Bartın",41.64,32.34],["Batman",37.88,41.13],["Bayburt",40.26,40.22],["Bilecik",40.14,29.98],
["Bingöl",38.88,40.50],["Bitlis",38.40,42.11],["Bolu",40.74,31.61],["Burdur",37.72,30.29],
["Bursa",40.18,29.07],["Çanakkale",40.15,26.41],["Çankırı",40.60,33.62],["Çorum",40.55,34.95],
["Denizli",37.78,29.09],["Diyarbakır",37.91,40.24],["Düzce",40.84,31.16],["Edirne",41.68,26.56],
["Elazığ",38.68,39.22],["Erzincan",39.75,39.50],["Erzurum",39.90,41.27],["Eskişehir",39.78,30.52],
["Gaziantep",37.07,37.38],["Giresun",40.92,38.39],["Gümüşhane",40.46,39.48],["Hakkari",37.57,43.74],
["Hatay",36.20,36.16],["Iğdır",39.92,44.04],["Isparta",37.76,30.55],["İstanbul",41.01,28.98],
["İzmir",38.42,27.14],["Kahramanmaraş",37.58,36.93],["Karabük",41.20,32.63],["Karaman",37.18,33.22],
["Kars",40.61,43.10],["Kastamonu",41.39,33.78],["Kayseri",38.73,35.49],["Kilis",36.72,37.12],
["Kırıkkale",39.85,33.51],["Kırklareli",41.74,27.22],["Kırşehir",39.15,34.16],["Kocaeli",40.77,29.92],
["Konya",37.87,32.48],["Kütahya",39.42,29.98],["Malatya",38.36,38.31],["Manisa",38.61,27.43],
["Mardin",37.31,40.74],["Mersin",36.81,34.64],["Muğla",37.22,28.36],["Muş",38.73,41.49],
["Nevşehir",38.62,34.71],["Niğde",37.97,34.68],["Ordu",40.98,37.88],["Osmaniye",37.07,36.25],
["Rize",41.02,40.52],["Sakarya",40.78,30.40],["Samsun",41.29,36.33],["Siirt",37.93,41.94],
["Sinop",42.03,35.15],["Sivas",39.75,37.02],["Şanlıurfa",37.17,38.79],["Şırnak",37.52,42.46],
["Tekirdağ",40.98,27.51],["Tokat",40.31,36.55],["Trabzon",41.00,39.72],["Tunceli",39.11,39.55],
["Uşak",38.68,29.41],["Van",38.49,43.41],["Yalova",40.65,29.28],["Yozgat",39.82,34.81],["Zonguldak",41.45,31.79]
];

type RawCountry = { name: string; tz?: string; cities: (string | number)[][] };
const RAW: RawCountry[] = [
  {name:"Türkiye",tz:"Europe/Istanbul",cities:TR},
  {name:"Almanya",tz:"Europe/Berlin",cities:[["Berlin",52.52,13.40],["Hamburg",53.55,9.99],["München",48.14,11.58],["Köln",50.94,6.96],["Frankfurt",50.11,8.68],["Stuttgart",48.78,9.18],["Düsseldorf",51.23,6.78],["Dortmund",51.51,7.47],["Essen",51.46,7.01],["Bremen",53.08,8.81],["Hannover",52.37,9.73],["Nürnberg",49.45,11.08],["Duisburg",51.43,6.76],["Bochum",51.48,7.22],["Wuppertal",51.26,7.18],["Bielefeld",52.02,8.53],["Bonn",50.74,7.10],["Mannheim",49.49,8.47],["Karlsruhe",49.01,8.40],["Wiesbaden",50.08,8.24],["Münster",51.96,7.63],["Augsburg",48.37,10.90],["Mönchengladbach",51.18,6.44],["Gelsenkirchen",51.52,7.10],["Aachen",50.78,6.08],["Braunschweig",52.27,10.52],["Krefeld",51.33,6.56],["Mainz",49.99,8.27],["Kiel",54.32,10.14],["Freiburg",47.99,7.85],["Leipzig",51.34,12.37],["Dresden",51.05,13.74],["Kassel",51.31,9.50],["Hagen",51.36,7.47],["Offenbach",50.10,8.77],["Ludwigshafen",49.48,8.44],["Heidelberg",49.40,8.67],["Darmstadt",49.87,8.65],["Würzburg",49.79,9.93],["Ulm",48.40,9.99],["Göttingen",51.54,9.94],["Solingen",51.17,7.08],["Pforzheim",48.89,8.70],["Regensburg",49.01,12.10],["Ingolstadt",48.77,11.43],["Wolfsburg",52.42,10.79]]},
  {name:"Hollanda",tz:"Europe/Amsterdam",cities:[["Amsterdam",52.37,4.90],["Rotterdam",51.92,4.48],["Den Haag",52.08,4.31],["Utrecht",52.09,5.12],["Eindhoven",51.44,5.48],["Groningen",53.22,6.57],["Tilburg",51.56,5.09],["Almere",52.35,5.26],["Breda",51.59,4.78],["Nijmegen",51.84,5.86],["Enschede",52.22,6.90],["Haarlem",52.38,4.64],["Arnhem",51.98,5.91],["Amersfoort",52.16,5.39],["Apeldoorn",52.21,5.97],["Den Bosch",51.70,5.30],["Maastricht",50.85,5.69],["Leiden",52.16,4.49],["Dordrecht",51.81,4.69],["Zaanstad",52.45,4.83],["Deventer",52.25,6.16]]},
  {name:"Belçika",tz:"Europe/Brussels",cities:[["Brüksel",50.85,4.35],["Antwerp",51.22,4.40],["Gent",51.05,3.72],["Charleroi",50.41,4.44],["Liège",50.63,5.57],["Brugge",51.21,3.22],["Namur",50.47,4.87],["Leuven",50.88,4.70],["Mons",50.45,3.95],["Mechelen",51.03,4.48],["Hasselt",50.93,5.34],["Genk",50.97,5.50],["Sint-Niklaas",51.16,4.14]]},
  {name:"Fransa",tz:"Europe/Paris",cities:[["Paris",48.86,2.35],["Marsilya",43.30,5.37],["Lyon",45.76,4.84],["Toulouse",43.60,1.44],["Nice",43.70,7.27],["Nantes",47.22,-1.55],["Strazburg",48.58,7.75],["Montpellier",43.61,3.88],["Bordeaux",44.84,-0.58],["Lille",50.63,3.07],["Rennes",48.11,-1.68],["Reims",49.26,4.03],["Le Havre",49.49,0.11],["Saint-Étienne",45.44,4.39],["Toulon",43.12,5.93],["Grenoble",45.19,5.72],["Dijon",47.32,5.04],["Angers",47.47,-0.55],["Nîmes",43.84,4.36],["Metz",49.12,6.18],["Mulhouse",47.75,7.34]]},
  {name:"Avusturya",tz:"Europe/Vienna",cities:[["Viyana",48.21,16.37],["Graz",47.07,15.44],["Linz",48.31,14.29],["Salzburg",47.81,13.05],["Innsbruck",47.27,11.39],["Klagenfurt",46.62,14.31],["Villach",46.61,13.85],["Wels",48.16,14.03],["Sankt Pölten",48.20,15.62],["Dornbirn",47.41,9.74],["Bregenz",47.50,9.75]]},
  {name:"İsviçre",tz:"Europe/Zurich",cities:[["Zürih",47.38,8.54],["Cenevre",46.20,6.14],["Basel",47.56,7.59],["Bern",46.95,7.45],["Lozan",46.52,6.63],["Winterthur",47.50,8.72],["Luzern",47.05,8.31],["St. Gallen",47.42,9.38],["Lugano",46.00,8.95],["Biel",47.14,7.25],["Thun",46.76,7.63]]},
  {name:"İngiltere",tz:"Europe/London",cities:[["Londra",51.51,-0.13],["Birmingham",52.49,-1.89],["Manchester",53.48,-2.24],["Leeds",53.80,-1.55],["Liverpool",53.41,-2.99],["Sheffield",53.38,-1.47],["Bristol",51.45,-2.59],["Glasgow",55.86,-4.25],["Edinburgh",55.95,-3.19],["Leicester",52.64,-1.13],["Coventry",52.41,-1.51],["Bradford",53.80,-1.75],["Cardiff",51.48,-3.18],["Nottingham",52.95,-1.15],["Newcastle",54.98,-1.61],["Belfast",54.60,-5.93],["Brighton",50.82,-0.14],["Hull",53.74,-0.34],["Southampton",50.91,-1.40],["Reading",51.45,-0.97],["Luton",51.88,-0.42]]},
  {name:"İsveç",tz:"Europe/Stockholm",cities:[["Stockholm",59.33,18.07],["Göteborg",57.71,11.97],["Malmö",55.60,13.00],["Uppsala",59.86,17.64],["Västerås",59.61,16.55],["Örebro",59.27,15.21],["Linköping",58.41,15.62],["Helsingborg",56.05,12.69],["Norrköping",58.59,16.18],["Jönköping",57.78,14.16],["Lund",55.70,13.19],["Umeå",63.83,20.26]]},
  {name:"Danimarka",tz:"Europe/Copenhagen",cities:[["Kopenhag",55.68,12.57],["Aarhus",56.16,10.20],["Odense",55.40,10.39],["Aalborg",57.05,9.92],["Esbjerg",55.47,8.46],["Randers",56.46,10.04],["Kolding",55.49,9.47],["Vejle",55.71,9.54]]},
  {name:"Norveç",tz:"Europe/Oslo",cities:[["Oslo",59.91,10.75],["Bergen",60.39,5.32],["Trondheim",63.43,10.40],["Stavanger",58.97,5.73],["Drammen",59.74,10.20],["Kristiansand",58.15,8.00],["Fredrikstad",59.22,10.93],["Tromsø",69.65,18.96]]},
  {name:"İtalya",tz:"Europe/Rome",cities:[["Roma",41.90,12.50],["Milano",45.46,9.19],["Napoli",40.85,14.27],["Torino",45.07,7.69],["Palermo",38.12,13.36],["Cenova",44.41,8.93],["Bologna",44.49,11.34],["Floransa",43.77,11.26],["Venedik",45.44,12.32],["Verona",45.44,10.99]]},
  {name:"İspanya",tz:"Europe/Madrid",cities:[["Madrid",40.42,-3.70],["Barcelona",41.39,2.17],["Valencia",39.47,-0.38],["Sevilla",37.39,-5.99],["Zaragoza",41.65,-0.89],["Malaga",36.72,-4.42],["Bilbao",43.26,-2.93],["Alicante",38.35,-0.48]]},
  {name:"Bulgaristan",tz:"Europe/Sofia",cities:[["Sofya",42.70,23.32],["Filibe",42.14,24.75],["Varna",43.21,27.91],["Burgaz",42.51,27.47],["Ruse",43.85,25.97],["Stara Zagora",42.43,25.64],["Pleven",43.42,24.62],["Sliven",42.69,26.32],["Dobriç",43.57,27.83],["Şumnu",43.27,26.92],["Kırcaali",41.64,25.37],["Razgrad",43.53,26.52],["Targovişte",43.25,26.57]]},
  {name:"Yunanistan",tz:"Europe/Athens",cities:[["Atina",37.98,23.73],["Selanik",40.64,22.94],["Patras",38.25,21.73],["Iraklion",35.34,25.13],["Larissa",39.64,22.42],["Gümülcine",41.12,25.40],["İskeçe",41.13,24.89],["Kavala",40.94,24.41],["Serez",41.09,23.55]]},
  {name:"Makedonya",tz:"Europe/Skopje",cities:[["Üsküp",41.99,21.43],["Kalkandelen",42.01,20.97],["Gostivar",41.80,20.91],["Ohri",41.12,20.80],["Manastır",41.03,21.34],["Kumanova",42.13,21.71],["İştip",41.74,22.20]]},
  {name:"Kosova",tz:"Europe/Belgrade",cities:[["Priştine",42.66,21.17],["Prizren",42.21,20.74],["Mamuşa",42.30,20.72],["Gilan",42.46,21.47],["Mitroviça",42.89,20.87]]},
  {name:"K.K.T.C.",tz:"Asia/Nicosia",cities:[["Lefkoşa",35.19,33.36],["Gazimağusa",35.12,33.94],["Girne",35.34,33.32],["Güzelyurt",35.20,32.99],["İskele",35.29,33.89],["Lefke",35.11,32.85]]},
  {name:"Azerbaycan",tz:"Asia/Baku",cities:[["Bakü",40.41,49.87],["Gence",40.68,46.36],["Sumgayıt",40.59,49.67],["Mingeçevir",40.77,47.05],["Nahçıvan",39.21,45.41],["Şeki",41.19,47.17]]},
  {name:"Rusya",cities:[["Moskova",55.76,37.62,"Europe/Moscow"],["Saint Petersburg",59.93,30.34,"Europe/Moscow"],["Kazan",55.79,49.12,"Europe/Moscow"],["Antalya-Soçi",43.60,39.73,"Europe/Moscow"]]},
  {name:"B.A.E.",tz:"Asia/Dubai",cities:[["Dubai",25.20,55.27],["Abu Dabi",24.45,54.38],["Şarja",25.35,55.39],["Ajman",25.41,55.44]]},
  {name:"Katar",tz:"Asia/Qatar",cities:[["Doha",25.29,51.53]]},
  {name:"Suudi Arabistan",tz:"Asia/Riyadh",cities:[["Riyad",24.71,46.68],["Cidde",21.49,39.19],["Mekke",21.39,39.86],["Medine",24.47,39.61],["Dammam",26.43,50.10]]},
  {name:"ABD",cities:[["New York",40.71,-74.01,"America/New_York"],["Los Angeles",34.05,-118.24,"America/Los_Angeles"],["Chicago",41.88,-87.63,"America/Chicago"],["Houston",29.76,-95.37,"America/Chicago"],["Phoenix",33.45,-112.07,"America/Phoenix"],["Philadelphia",39.95,-75.17,"America/New_York"],["San Antonio",29.42,-98.49,"America/Chicago"],["San Diego",32.72,-117.16,"America/Los_Angeles"],["Dallas",32.78,-96.80,"America/Chicago"],["San Jose",37.34,-121.89,"America/Los_Angeles"],["Austin",30.27,-97.74,"America/Chicago"],["San Francisco",37.77,-122.42,"America/Los_Angeles"],["Seattle",47.61,-122.33,"America/Los_Angeles"],["Denver",39.74,-104.99,"America/Denver"],["Boston",42.36,-71.06,"America/New_York"],["Washington",38.90,-77.04,"America/New_York"],["Atlanta",33.75,-84.39,"America/New_York"],["Miami",25.76,-80.19,"America/New_York"],["Detroit",42.33,-83.05,"America/Detroit"]]},
  {name:"Kanada",cities:[["Toronto",43.65,-79.38,"America/Toronto"],["Montreal",45.50,-73.57,"America/Toronto"],["Vancouver",49.28,-123.12,"America/Vancouver"],["Calgary",51.05,-114.07,"America/Edmonton"],["Ottawa",45.42,-75.70,"America/Toronto"],["Edmonton",53.55,-113.49,"America/Edmonton"],["Winnipeg",49.90,-97.14,"America/Winnipeg"]]},
  {name:"Avustralya",cities:[["Sydney",-33.87,151.21,"Australia/Sydney"],["Melbourne",-37.81,144.96,"Australia/Melbourne"],["Brisbane",-27.47,153.03,"Australia/Brisbane"],["Perth",-31.95,115.86,"Australia/Perth"],["Adelaide",-34.93,138.60,"Australia/Adelaide"],["Canberra",-35.28,149.13,"Australia/Sydney"],["Gold Coast",-28.02,153.40,"Australia/Brisbane"]]}
];

// Normalize: her şehri [ad, enlem, boylam, tz] formatına getir.
export const COUNTRIES: Country[] = RAW.map((c) => ({
  name: c.name,
  cities: c.cities.map(
    (ct) => [ct[0], ct[1], ct[2], (ct[3] as string) || (c.tz as string)] as City
  ),
}));
