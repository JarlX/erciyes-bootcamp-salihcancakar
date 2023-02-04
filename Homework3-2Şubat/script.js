let customers = [
  {
    id: 'AROUT',
    companyName: 'Around the Horn',
    contactName: 'Thomas Hardy',
    contactTitle: 'Sales Representative',
    address: {
      street: '120 Hanover Sq.',
      city: 'London',
      region: 'NULL',
      postalCode: 'WA1 1DP',
      country: 'UK',
      phone: '(171) 555-7788',
    },
  },
  {
    id: 'BERGS',
    companyName: 'Berglunds snabbköp',
    contactName: 'Christina Berglund',
    contactTitle: 'Order Administrator',
    address: {
      street: 'Berguvsvägen  8',
      city: 'Luleå',
      region: 'NULL',
      postalCode: 'S-958 22',
      country: 'Sweden',
      phone: '0921-12 34 65',
    },
  },
  {
    id: 'BLAUS',
    companyName: 'Blauer See Delikatessen',
    contactName: 'Hanna Moos',
    contactTitle: 'Sales Representative',
    address: {
      street: 'Forsterstr. 57',
      city: 'Mannheim',
      region: 'NULL',
      postalCode: 68306,
      country: 'Germany',
      phone: '0621-08460',
    },
  },
  {
    id: 'BLONP',
    companyName: 'Blondesddsl père et fils',
    contactName: 'Frédérique Citeaux',
    contactTitle: 'Marketing Manager',
    address: {
      street: '24 place Kléber',
      city: 'Strasbourg',
      region: 'NULL',
      postalCode: 67000,
      country: 'France',
      phone: '88.60.15.31',
    },
  },
  {
    id: 'BOLId',
    companyName: 'Bólido Comidas preparadas',
    contactName: 'Martín Sommer',
    contactTitle: 'Owner',
    address: {
      street: '67C Araquil',
      city: 'Madrid',
      region: 'NULL',
      postalCode: 28023,
      country: 'Spain',
      phone: '(91) 555 22 82',
    },
  },
  {
    id: 'BONAP',
    companyName: "Bon app'",
    contactName: 'Laurence Lebihan',
    contactTitle: 'Owner',
    address: {
      street: '12 rue des Bouchers',
      city: 'Marseille',
      region: 'NULL',
      postalCode: 13008,
      country: 'France',
      phone: '91.24.45.40',
    },
  },
  {
    id: 'ANTON',
    companyName: 'Antonio Moreno Taquería',
    contactName: 'Antonio Moreno',
    contactTitle: 'Owner',
    address: {
      street: 'Mataderos  2312',
      city: 'México D.F.',
      region: 'NULL',
      postalCode: 5023,
      country: 'Mexico',
      phone: '(5) 555-3932',
    },
  },
  {
    id: 'ANATR',
    companyName: 'Ana Trujillo Emparedados y helados',
    contactName: 'Ana Trujillo',
    contactTitle: 'Owner',
    address: {
      street: 'Avda. de la Constitución 2222',
      city: 'México D.F.',
      region: 'NULL',
      postalCode: 5021,
      country: 'Mexico',
      phone: '(5) 555-4729',
    },
  },
  {
    id: 'CACTU',
    companyName: 'Cactus Comidas para llevar',
    contactName: 'Patricio Simpson',
    contactTitle: 'Sales Agent',
    address: {
      street: 'Cerrito 333',
      city: 'Buenos Aires',
      region: 'NULL',
      postalCode: 1010,
      country: 'Argentina',
      phone: '(1) 135-5555',
    },
  },
  {
    id: 'BSBEV',
    companyName: "B's Beverages",
    contactName: 'Victoria Ashworth',
    contactTitle: 'Sales Representative',
    address: {
      street: 'Fauntleroy Circus',
      city: 'London',
      region: 'NULL',
      postalCode: 'EC2 5NT',
      country: 'UK',
      phone: '(171) 555-1212',
    },
  },
  {
    id: 'CENTC',
    companyName: 'Centro comercial Moctezuma',
    contactName: 'Francisco Chang',
    contactTitle: 'Marketing Manager',
    address: {
      street: 'Sierras de Granada 9993',
      city: 'México D.F.',
      region: 'NULL',
      postalCode: 5022,
      country: 'Mexico',
      phone: '(5) 555-3392',
    },
  },
  {
    id: 'CHOPS',
    companyName: 'Chop-suey Chinese',
    contactName: 'Yang Wang',
    contactTitle: 'Owner',
    address: {
      street: 'Hauptstr. 29',
      city: 'Bern',
      region: 'NULL',
      postalCode: 3012,
      country: 'Switzerland',
      phone: '0452-076545',
    },
  },
  {
    id: 'COMMI',
    companyName: 'Comércio Mineiro',
    contactName: 'Pedro Afonso',
    contactTitle: 'Sales Associate',
    address: {
      street: '23 Av. dos Lusíadas',
      city: 'Sao Paulo',
      region: 'SP',
      postalCode: '05432-043',
      country: 'Brazil',
      phone: '(11) 555-7647',
    },
  },
  {
    id: 'CONSH',
    companyName: 'Consolidated Holdings',
    contactName: 'Elizabeth Brown',
    contactTitle: 'Sales Representative',
    address: {
      street: 'Berkeley Gardens 12  Brewery',
      city: 'London',
      region: 'NULL',
      postalCode: 'WX1 6LT',
      country: 'UK',
      phone: '(171) 555-2282',
    },
  },
  {
    id: 'ALFKI',
    companyName: 'Alfreds Futterkiste',
    contactName: 'Maria Anders',
    contactTitle: 'Sales Representative',
    address: {
      street: 'Obere Str. 57',
      city: 'Berlin',
      region: 'NULL',
      postalCode: 12209,
      country: 'Germany',
      phone: '030-0074321',
    },
  },
  {
    id: 'BOTTM',
    companyName: 'Bottom-Dollar Markets',
    contactName: 'Elizabeth Lincoln',
    contactTitle: 'Accounting Manager',
    address: {
      street: '23 Tsawassen Blvd.',
      city: 'Tsawassen',
      region: 'BC',
      postalCode: 'T2F 8M4',
      country: 'Canada',
      phone: '(604) 555-4729',
    },
  },
  {
    id: 'DRACD',
    companyName: 'Drachenblut Delikatessen',
    contactName: 'Sven Ottlieb',
    contactTitle: 'Order Administrator',
    address: {
      street: 'Walserweg 21',
      city: 'Aachen',
      region: 'NULL',
      postalCode: 52066,
      country: 'Germany',
      phone: '0241-039123',
    },
  },
  {
    id: 'DUMON',
    companyName: 'Du monde entier',
    contactName: 'Janine Labrune',
    contactTitle: 'Owner',
    address: {
      street: '67 rue des Cinquante Otages',
      city: 'Nantes',
      region: 'NULL',
      postalCode: 44000,
      country: 'France',
      phone: '40.67.88.88',
    },
  },
  {
    id: 'FAMIA',
    companyName: 'Familia Arquibaldo',
    contactName: 'Aria Cruz',
    contactTitle: 'Marketing Assistant',
    address: {
      street: 'Rua Orós 92',
      city: 'Sao Paulo',
      region: 'SP',
      postalCode: '05442-030',
      country: 'Brazil',
      phone: '(11) 555-9857',
    },
  },
  {
    id: 'FISSA',
    companyName: 'FISSA Fabrica Inter. Salchichas S.A.',
    contactName: 'Diego Roel',
    contactTitle: 'Accounting Manager',
    address: {
      street: 'C/ Moralzarzal 86',
      city: 'Madrid',
      region: 'NULL',
      postalCode: 28034,
      country: 'Spain',
      phone: '(91) 555 94 44',
    },
  },
  {
    id: 'FOLIG',
    companyName: 'Folies gourmandes',
    contactName: 'Martine Rancé',
    contactTitle: 'Assistant Sales Agent',
    address: {
      street: '184 chaussée de Tournai',
      city: 'Lille',
      region: 'NULL',
      postalCode: 59000,
      country: 'France',
      phone: '20.16.10.16',
    },
  },
  {
    id: 'FOLKO',
    companyName: 'Folk och fä HB',
    contactName: 'Maria Larsson',
    contactTitle: 'Owner',
    address: {
      street: 'Åkergatan 24',
      city: 'Bräcke',
      region: 'NULL',
      postalCode: 'S-844 67',
      country: 'Sweden',
      phone: '0695-34 67 21',
    },
  },
  {
    id: 'FRANK',
    companyName: 'Frankenversand',
    contactName: 'Peter Franken',
    contactTitle: 'Marketing Manager',
    address: {
      street: 'Berliner Platz 43',
      city: 'München',
      region: 'NULL',
      postalCode: 80805,
      country: 'Germany',
      phone: '089-0877310',
    },
  },
  {
    id: 'FRANR',
    companyName: 'France restauration',
    contactName: 'Carine Schmitt',
    contactTitle: 'Marketing Manager',
    address: {
      street: '54 rue Royale',
      city: 'Nantes',
      region: 'NULL',
      postalCode: 44000,
      country: 'France',
      phone: '40.32.21.21',
    },
  },
  {
    id: 'EASTC',
    companyName: 'Eastern Connection',
    contactName: 'Ann Devon',
    contactTitle: 'Sales Agent',
    address: {
      street: '35 King George',
      city: 'London',
      region: 'NULL',
      postalCode: 'WX3 6FW',
      country: 'UK',
      phone: '(171) 555-0297',
    },
  },
  {
    id: 'ERNSH',
    companyName: 'Ernst Handel',
    contactName: 'Roland Mendel',
    contactTitle: 'Sales Manager',
    address: {
      street: 'Kirchgasse 6',
      city: 'Graz',
      region: 'NULL',
      postalCode: 8010,
      country: 'Austria',
      phone: '7675-3425',
    },
  },
  {
    id: 'FRANS',
    companyName: 'Franchi S.p.A.',
    contactName: 'Paolo Accorti',
    contactTitle: 'Sales Representative',
    address: {
      street: 'Via Monte Bianco 34',
      city: 'Torino',
      region: 'NULL',
      postalCode: 10100,
      country: 'Italy',
      phone: '011-4988260',
    },
  },
  {
    id: 'FURIB',
    companyName: 'Furia Bacalhau e Frutos do Mar',
    contactName: 'Lino Rodriguez',
    contactTitle: 'Sales Manager',
    address: {
      street: 'Jardim das rosas n. 32',
      city: 'Lisboa',
      region: 'NULL',
      postalCode: 1675,
      country: 'Portugal',
      phone: '(1) 354-2534',
    },
  },
  {
    id: 'GALED',
    companyName: 'Galería del gastrónomo',
    contactName: 'Eduardo Saavedra',
    contactTitle: 'Marketing Manager',
    address: {
      street: 'Rambla de Cataluña 23',
      city: 'Barcelona',
      region: 'NULL',
      postalCode: 8022,
      country: 'Spain',
      phone: '(93) 203 4560',
    },
  },
  {
    id: 'GODOS',
    companyName: 'Godos Cocina Típica',
    contactName: 'José Pedro Freyre',
    contactTitle: 'Sales Manager',
    address: {
      street: 'C/ Romero 33',
      city: 'Sevilla',
      region: 'NULL',
      postalCode: 41101,
      country: 'Spain',
      phone: '(95) 555 82 82',
    },
  },
  {
    id: 'GOURL',
    companyName: 'Gourmet Lanchonetes',
    contactName: 'André Fonseca',
    contactTitle: 'Sales Associate',
    address: {
      street: 'Av. Brasil 442',
      city: 'Campinas',
      region: 'SP',
      postalCode: '04876-786',
      country: 'Brazil',
      phone: '(11) 555-9482',
    },
  },
  {
    id: 'HILAA',
    companyName: 'HILARION-Abastos',
    contactName: 'Carlos Hernández',
    contactTitle: 'Sales Representative',
    address: {
      street: 'Carrera 22 con Ave. Carlos Soublette #8-35',
      city: 'San Cristóbal',
      region: 'Táchira',
      postalCode: 5022,
      country: 'Venezuela',
      phone: '(5) 555-1340',
    },
  },
  {
    id: 'HUNGC',
    companyName: 'Hungry Coyote Import Store',
    contactName: 'Yoshi Latimer',
    contactTitle: 'Sales Representative',
    address: {
      street: 'City Center Plaza 516 Main St.',
      city: 'Elgin',
      region: 'OR',
      postalCode: 97827,
      country: 'USA',
      phone: '(503) 555-6874',
    },
  },
  {
    id: 'HUNGO',
    companyName: 'Hungry Owl All-Night Grocers',
    contactName: 'Patricia McKenna',
    contactTitle: 'Sales Associate',
    address: {
      street: '8 Johnstown Road',
      city: 'Cork',
      region: 'Co. Cork',
      postalCode: 'NULL',
      country: 'Ireland',
      phone: '2967 542',
    },
  },
  {
    id: 'ISLAT',
    companyName: 'Island Trading',
    contactName: 'Helen Bennett',
    contactTitle: 'Marketing Manager',
    address: {
      street: 'Garden House Crowther Way',
      city: 'Cowes',
      region: 'Isle of Wight',
      postalCode: 'PO31 7PJ',
      country: 'UK',
      phone: '(198) 555-8888',
    },
  },
  {
    id: 'KOENE',
    companyName: 'Königlich Essen',
    contactName: 'Philip Cramer',
    contactTitle: 'Sales Associate',
    address: {
      street: 'Maubelstr. 90',
      city: 'Brandenburg',
      region: 'NULL',
      postalCode: 14776,
      country: 'Germany',
      phone: '0555-09876',
    },
  },
  {
    id: 'LACOR',
    companyName: "La corne d'abondance",
    contactName: 'Daniel Tonini',
    contactTitle: 'Sales Representative',
    address: {
      street: "67 avenue de l'Europe",
      city: 'Versailles',
      region: 'NULL',
      postalCode: 78000,
      country: 'France',
      phone: '30.59.84.10',
    },
  },
  {
    id: 'GROSR',
    companyName: 'GROSELLA-Restaurante',
    contactName: 'Manuel Pereira',
    contactTitle: 'Owner',
    address: {
      street: '5ª Ave. Los Palos Grandes',
      city: 'Caracas',
      region: 'DF',
      postalCode: 1081,
      country: 'Venezuela',
      phone: '(2) 283-2951',
    },
  },
  {
    id: 'HANAR',
    companyName: 'Hanari Carnes',
    contactName: 'Mario Pontes',
    contactTitle: 'Accounting Manager',
    address: {
      street: 'Rua do Paço 67',
      city: 'Rio de Janeiro',
      region: 'RJ',
      postalCode: '05454-876',
      country: 'Brazil',
      phone: '(21) 555-0091',
    },
  },
  {
    id: 'LAUGB',
    companyName: 'Laughing Bacchus Wine Cellars',
    contactName: 'Yoshi Tannamuri',
    contactTitle: 'Marketing Assistant',
    address: {
      street: '1900 Oak St.',
      city: 'Vancouver',
      region: 'BC',
      postalCode: 'V3F 2K1',
      country: 'Canada',
      phone: '(604) 555-3392',
    },
  },
  {
    id: 'LAZYK',
    companyName: 'Lazy K Kountry Store',
    contactName: 'John Steel',
    contactTitle: 'Marketing Manager',
    address: {
      street: '12 Orchestra Terrace',
      city: 'Walla Walla',
      region: 'WA',
      postalCode: 99362,
      country: 'USA',
      phone: '(509) 555-7969',
    },
  },
  {
    id: 'LEHMS',
    companyName: 'Lehmanns Marktstand',
    contactName: 'Renate Messner',
    contactTitle: 'Sales Representative',
    address: {
      street: 'Magazinweg 7',
      city: 'Frankfurt a.M.',
      region: 'NULL',
      postalCode: 60528,
      country: 'Germany',
      phone: '069-0245984',
    },
  },
  {
    id: 'GREAL',
    companyName: 'Great Lakes Food Market',
    contactName: 'Howard Snyder',
    contactTitle: 'Marketing Manager',
    address: {
      street: '2732 Baker Blvd.',
      city: 'Eugene',
      region: 'OR',
      postalCode: 97403,
      country: 'USA',
      phone: '(503) 555-7555',
    },
  },
  {
    id: 'LAMAI',
    companyName: "La maison d'Asie",
    contactName: 'Annette Roulet',
    contactTitle: 'Sales Manager',
    address: {
      street: '1 rue Alsace-Lorraine',
      city: 'Toulouse',
      region: 'NULL',
      postalCode: 31000,
      country: 'France',
      phone: '61.77.61.10',
    },
  },
  {
    id: 'LETSS',
    companyName: "Let's Stop N Shop",
    contactName: 'Jaime Yorres',
    contactTitle: 'Owner',
    address: {
      street: '87 Polk St. Suite 5',
      city: 'San Francisco',
      region: 'CA',
      postalCode: 94117,
      country: 'USA',
      phone: '(415) 555-5938',
    },
  },
  {
    id: 'MAGAA',
    companyName: 'Magazzini Alimentari Riuniti',
    contactName: 'Giovanni Rovelli',
    contactTitle: 'Marketing Manager',
    address: {
      street: 'Via Ludovico il Moro 22',
      city: 'Bergamo',
      region: 'NULL',
      postalCode: 24100,
      country: 'Italy',
      phone: '035-640230',
    },
  },
  {
    id: 'MAISD',
    companyName: 'Maison Dewey',
    contactName: 'Catherine Dewey',
    contactTitle: 'Sales Agent',
    address: {
      street: 'Rue Joseph-Bens 532',
      city: 'Bruxelles',
      region: 'NULL',
      postalCode: 'B-1180',
      country: 'Belgium',
      phone: '(02) 201 24 67',
    },
  },
  {
    id: 'MEREP',
    companyName: 'Mère Paillarde',
    contactName: 'Jean Fresnière',
    contactTitle: 'Marketing Assistant',
    address: {
      street: '43 rue St. Laurent',
      city: 'Montréal',
      region: 'Québec',
      postalCode: 'H1J 1C3',
      country: 'Canada',
      phone: '(514) 555-8054',
    },
  },
  {
    id: 'MORGK',
    companyName: 'Morgenstern Gesundkost',
    contactName: 'Alexander Feuer',
    contactTitle: 'Marketing Assistant',
    address: {
      street: 'Heerstr. 22',
      city: 'Leipzig',
      region: 'NULL',
      postalCode: 4179,
      country: 'Germany',
      phone: '0342-023176',
    },
  },
  {
    id: 'NORTS',
    companyName: 'North/South',
    contactName: 'Simon Crowther',
    contactTitle: 'Sales Associate',
    address: {
      street: 'South House 300 Queensbridge',
      city: 'London',
      region: 'NULL',
      postalCode: 'SW7 1RZ',
      country: 'UK',
      phone: '(171) 555-7733',
    },
  },
  {
    id: 'OCEAN',
    companyName: 'Océano Atlántico Ltda.',
    contactName: 'Yvonne Moncada',
    contactTitle: 'Sales Agent',
    address: {
      street: 'Ing. Gustavo Moncada 8585 Piso 20-A',
      city: 'Buenos Aires',
      region: 'NULL',
      postalCode: 1010,
      country: 'Argentina',
      phone: '(1) 135-5333',
    },
  },
  {
    id: 'LINOD',
    companyName: 'LINO-Delicateses',
    contactName: 'Felipe Izquierdo',
    contactTitle: 'Owner',
    address: {
      street: 'Ave. 5 de Mayo Porlamar',
      city: 'I. de Margarita',
      region: 'Nueva Esparta',
      postalCode: 4980,
      country: 'Venezuela',
      phone: '(8) 34-56-12',
    },
  },
  {
    id: 'LILAS',
    companyName: 'LILA-Supermercado',
    contactName: 'Carlos González',
    contactTitle: 'Accounting Manager',
    address: {
      street: 'Carrera 52 con Ave. Bolívar #65-98 Llano Largo',
      city: 'Barquisimeto',
      region: 'Lara',
      postalCode: 3508,
      country: 'Venezuela',
      phone: '(9) 331-6954',
    },
  },
  {
    id: 'OLDWO',
    companyName: 'Old World Delicatessen',
    contactName: 'Rene Phillips',
    contactTitle: 'Sales Representative',
    address: {
      street: '2743 Bering St.',
      city: 'Anchorage',
      region: 'AK',
      postalCode: 99508,
      country: 'USA',
      phone: '(907) 555-7584',
    },
  },
  {
    id: 'OTTIK',
    companyName: 'Ottilies Käseladen',
    contactName: 'Henriette Pfalzheim',
    contactTitle: 'Owner',
    address: {
      street: 'Mehrheimerstr. 369',
      city: 'Köln',
      region: 'NULL',
      postalCode: 50739,
      country: 'Germany',
      phone: '0221-0644327',
    },
  },
  {
    id: 'PICCO',
    companyName: 'Piccolo und mehr',
    contactName: 'Georg Pipps',
    contactTitle: 'Sales Manager',
    address: {
      street: 'Geislweg 14',
      city: 'Salzburg',
      region: 'NULL',
      postalCode: 5020,
      country: 'Austria',
      phone: '6562-9722',
    },
  },
  {
    id: 'PARIS',
    companyName: 'Paris spécialités',
    contactName: 'Marie Bertrand',
    contactTitle: 'Owner',
    address: {
      street: '265 boulevard Charonne',
      city: 'Paris',
      region: 'NULL',
      postalCode: 75012,
      country: 'France',
      phone: '(1) 42.34.22.66',
    },
  },
  {
    id: 'PERIC',
    companyName: 'Pericles Comidas clásicas',
    contactName: 'Guillermo Fernández',
    contactTitle: 'Sales Representative',
    address: {
      street: 'Calle Dr. Jorge Cash 321',
      city: 'México D.F.',
      region: 'NULL',
      postalCode: 5033,
      country: 'Mexico',
      phone: '(5) 552-3745',
    },
  },
  {
    id: 'PRINI',
    companyName: 'Princesa Isabel Vinhos',
    contactName: 'Isabel de Castro',
    contactTitle: 'Sales Representative',
    address: {
      street: 'Estrada da saúde n. 58',
      city: 'Lisboa',
      region: 'NULL',
      postalCode: 1756,
      country: 'Portugal',
      phone: '(1) 356-5634',
    },
  },
  {
    id: 'LONEP',
    companyName: 'Lonesome Pine Restaurant',
    contactName: 'Fran Wilson',
    contactTitle: 'Sales Manager',
    address: {
      street: '89 Chiaroscuro Rd.',
      city: 'Portland',
      region: 'OR',
      postalCode: 97219,
      country: 'USA',
      phone: '(503) 555-9573',
    },
  },
  {
    id: 'QUEEN',
    companyName: 'Queen Cozinha',
    contactName: 'Lúcia Carvalho',
    contactTitle: 'Marketing Assistant',
    address: {
      street: 'Alameda dos Canàrios 891',
      city: 'Sao Paulo',
      region: 'SP',
      postalCode: '05487-020',
      country: 'Brazil',
      phone: '(11) 555-1189',
    },
  },
  {
    id: 'RATTC',
    companyName: 'Rattlesnake Canyon Grocery',
    contactName: 'Paula Wilson',
    contactTitle: 'Assistant Sales Representative',
    address: {
      street: '2817 Milton Dr.',
      city: 'Albuquerque',
      region: 'NM',
      postalCode: 87110,
      country: 'USA',
      phone: '(505) 555-5939',
    },
  },
  {
    id: 'REGGC',
    companyName: 'Reggiani Caseifici',
    contactName: 'Maurizio Moroni',
    contactTitle: 'Sales Associate',
    address: {
      street: 'Strada Provinciale 124',
      city: 'Reggio Emilia',
      region: 'NULL',
      postalCode: 42100,
      country: 'Italy',
      phone: '0522-556721',
    },
  },
  {
    id: 'QUEDE',
    companyName: 'Que Delícia',
    contactName: 'Bernardo Batista',
    contactTitle: 'Accounting Manager',
    address: {
      street: 'Rua da Panificadora',
      city: '12Rio de Janeiro',
      region: 'RJ',
      postalCode: '02389-673',
      country: 'Brazil',
      phone: '(21) 555-4252',
    },
  },
  {
    id: 'RANCH',
    companyName: 'Rancho grande',
    contactName: 'Sergio Gutiérrez',
    contactTitle: 'Sales Representative',
    address: {
      street: 'Av. del Libertador 900',
      city: 'Buenos Aires',
      region: 'NULL',
      postalCode: 1010,
      country: 'Argentina',
      phone: '(1) 123-5555',
    },
  },
  {
    id: 'ROMEY',
    companyName: 'Romero y tomillo',
    contactName: 'Alejandra Camino',
    contactTitle: 'Accounting Manager',
    address: {
      street: 'Gran Vía 1',
      city: 'Madrid',
      region: 'NULL',
      postalCode: 28001,
      country: 'Spain',
      phone: '(91) 745 6200',
    },
  },
  {
    id: 'QUICK',
    companyName: 'QUICK-Stop',
    contactName: 'Horst Kloss',
    contactTitle: 'Accounting Manager',
    address: {
      street: 'Taucherstraße 10',
      city: 'Cunewalde',
      region: 'NULL',
      postalCode: 1307,
      country: 'Germany',
      phone: '0372-035188',
    },
  },
  {
    id: 'RICAR',
    companyName: 'Ricardo Adocicados',
    contactName: 'Janete Limeira',
    contactTitle: 'Assistant Sales Agent',
    address: {
      street: 'Av. Copacabana 267',
      city: 'Rio de Janeiro',
      region: 'RJ',
      postalCode: '02389-890',
      country: 'Brazil',
      phone: '(21) 555-3412',
    },
  },
  {
    id: 'RICSU',
    companyName: 'Richter Supermarkt',
    contactName: 'Michael Holz',
    contactTitle: 'Sales Manager',
    address: {
      street: 'Grenzacherweg 237',
      city: 'Genève',
      region: 'NULL',
      postalCode: 1203,
      country: 'Switzerland',
      phone: '0897-034214',
    },
  },
  {
    id: 'SANTG',
    companyName: 'Santé Gourmet',
    contactName: 'Jonas Bergulfsen',
    contactTitle: 'Owner',
    address: {
      street: 'Erling Skakkes gate 78',
      city: 'Stavern',
      region: 'NULL',
      postalCode: 4110,
      country: 'Norway',
      phone: '07-98 92 35',
    },
  },
  {
    id: 'SAVEA',
    companyName: 'Save-a-lot Markets',
    contactName: 'Jose Pavarotti',
    contactTitle: 'Sales Representative',
    address: {
      street: '187 Suffolk Ln.',
      city: 'Boise',
      region: 'Id',
      postalCode: 83720,
      country: 'USA',
      phone: '(208) 555-8097',
    },
  },
  {
    id: 'SEVES',
    companyName: 'Seven Seas Imports',
    contactName: 'Hari Kumar',
    contactTitle: 'Sales Manager',
    address: {
      street: '90 Wadhurst Rd.',
      city: 'London',
      region: 'NULL',
      postalCode: 'OX15 4NB',
      country: 'UK',
      phone: '(171) 555-1717',
    },
  },
  {
    id: 'SIMOB',
    companyName: 'Simons bistro',
    contactName: 'Jytte Petersen',
    contactTitle: 'Owner',
    address: {
      street: 'Vinbæltet 34',
      city: 'Kobenhavn',
      region: 'NULL',
      postalCode: 1734,
      country: 'Denmark',
      phone: '31 12 34 56',
    },
  },
  {
    id: 'SPECD',
    companyName: 'Spécialités du monde',
    contactName: 'Dominique Perrier',
    contactTitle: 'Marketing Manager',
    address: {
      street: '25 rue Lauriston',
      city: 'Paris',
      region: 'NULL',
      postalCode: 75016,
      country: 'France',
      phone: '(1) 47.55.60.10',
    },
  },
  {
    id: 'SPLIR',
    companyName: 'Split Rail Beer & Ale',
    contactName: 'Art Braunschweiger',
    contactTitle: 'Sales Manager',
    address: {
      street: 'P.O. Box 555',
      city: 'Lander',
      region: 'WY',
      postalCode: 82520,
      country: 'USA',
      phone: '(307) 555-4680',
    },
  },
  {
    id: 'SUPRD',
    companyName: 'Suprêmes délices',
    contactName: 'Pascale Cartrain',
    contactTitle: 'Accounting Manager',
    address: {
      street: 'Boulevard Tirou 255',
      city: 'Charleroi',
      region: 'NULL',
      postalCode: 'B-6000',
      country: 'Belgium',
      phone: '(071) 23 67 22 20',
    },
  },
  {
    id: 'THEBI',
    companyName: 'The Big Cheese',
    contactName: 'Liz Nixon',
    contactTitle: 'Marketing Manager',
    address: {
      street: '89 Jefferson Way Suite 2',
      city: 'Portland',
      region: 'OR',
      postalCode: 97201,
      country: 'USA',
      phone: '(503) 555-3612',
    },
  },
  {
    id: 'THECR',
    companyName: 'The Cracker Box',
    contactName: 'Liu Wong',
    contactTitle: 'Marketing Assistant',
    address: {
      street: '55 Grizzly Peak Rd.',
      city: 'Butte',
      region: 'MT',
      postalCode: 59801,
      country: 'USA',
      phone: '(406) 555-5834',
    },
  },
  {
    id: 'TOMSP',
    companyName: 'Toms Spezialitäten',
    contactName: 'Karin Josephs',
    contactTitle: 'Marketing Manager',
    address: {
      street: 'Luisenstr. 48',
      city: 'Münster',
      region: 'NULL',
      postalCode: 44087,
      country: 'Germany',
      phone: '0251-031259',
    },
  },
  {
    id: 'TORTU',
    companyName: 'Tortuga Restaurante',
    contactName: 'Miguel Angel Paolino',
    contactTitle: 'Owner',
    address: {
      street: 'Avda. Azteca 123',
      city: 'México D.F.',
      region: 'NULL',
      postalCode: 5033,
      country: 'Mexico',
      phone: '(5) 555-2933',
    },
  },
  {
    id: 'TRADH',
    companyName: 'Tradição Hipermercados',
    contactName: 'Anabela Domingues',
    contactTitle: 'Sales Representative',
    address: {
      street: 'Av. Inês de Castro 414',
      city: 'Sao Paulo',
      region: 'SP',
      postalCode: '05634-030',
      country: 'Brazil',
      phone: '(11) 555-2167',
    },
  },
  {
    id: 'TRAIH',
    companyName: "Trail's Head Gourmet Provisioners",
    contactName: 'Helvetius Nagy',
    contactTitle: 'Sales Associate',
    address: {
      street: '722 DaVinci Blvd.',
      city: 'Kirkland',
      region: 'WA',
      postalCode: 98034,
      country: 'USA',
      phone: '(206) 555-8257',
    },
  },
  {
    id: 'VAFFE',
    companyName: 'Vaffeljernet',
    contactName: 'Palle Ibsen',
    contactTitle: 'Sales Manager',
    address: {
      street: 'Smagsloget 45',
      city: 'Århus',
      region: 'NULL',
      postalCode: 8200,
      country: 'Denmark',
      phone: '86 21 32 43',
    },
  },
  {
    id: 'VICTE',
    companyName: 'Victuailles en stock',
    contactName: 'Mary Saveley',
    contactTitle: 'Sales Agent',
    address: {
      street: '2 rue du Commerce',
      city: 'Lyon',
      region: 'NULL',
      postalCode: 69004,
      country: 'France',
      phone: '78.32.54.86',
    },
  },
  {
    id: 'VINET',
    companyName: 'Vins et alcools Chevalier',
    contactName: 'Paul Henriot',
    contactTitle: 'Accounting Manager',
    address: {
      street: "59 rue de l'Abbaye",
      city: 'Reims',
      region: 'NULL',
      postalCode: 51100,
      country: 'France',
      phone: '26.47.15.10',
    },
  },
  {
    id: 'WANDK',
    companyName: 'Die Wandernde Kuh',
    contactName: 'Rita Müller',
    contactTitle: 'Sales Representative',
    address: {
      street: 'Adenauerallee 900',
      city: 'Stuttgart',
      region: 'NULL',
      postalCode: 70563,
      country: 'Germany',
      phone: '0711-020361',
    },
  },
  {
    id: 'WARTH',
    companyName: 'Wartian Herkku',
    contactName: 'Pirkko Koskitalo',
    contactTitle: 'Accounting Manager',
    address: {
      street: 'Torikatu 38',
      city: 'Oulu',
      region: 'NULL',
      postalCode: 90110,
      country: 'Finland',
      phone: '981-443655',
    },
  },
  {
    id: 'WELLI',
    companyName: 'Wellington Importadora',
    contactName: 'Paula Parente',
    contactTitle: 'Sales Manager',
    address: {
      street: 'Rua do Mercado 12',
      city: 'Resende',
      region: 'SP',
      postalCode: '08737-363',
      country: 'Brazil',
      phone: '(14) 555-8122',
    },
  },
  {
    id: 'WHITC',
    companyName: 'White Clover Markets',
    contactName: 'Karl Jablonski',
    contactTitle: 'Owner',
    address: {
      street: '305 - 14th Ave. S. Suite 3B',
      city: 'Seattle',
      region: 'WA',
      postalCode: 98128,
      country: 'USA',
      phone: '(206) 555-4112',
    },
  },
  {
    id: 'WILMK',
    companyName: 'Wilman Kala',
    contactName: 'Matti Karttunen',
    contactTitle: 'Owner/Marketing Assistant',
    address: {
      street: 'Keskuskatu 45',
      city: 'Helsinki',
      region: 'NULL',
      postalCode: 21240,
      country: 'Finland',
      phone: '90-224 8858',
    },
  },
  {
    id: 'WOLZA',
    companyName: 'Wolski  Zajazd',
    contactName: 'Zbyszek Piestrzeniewicz',
    contactTitle: 'Owner',
    address: {
      street: 'ul. Filtrowa 68',
      city: 'Warszawa',
      region: 'NULL',
      postalCode: '01-012',
      country: 'Poland',
      phone: '(26) 642-7012',
    },
  },
];

var customersNew = Object.values(customers); // Array yapıldı.

//Tabloya dönüştürüldü.

/////////////////////////////////////////////////////////////////////                        MAIN TABLE
/////////////////////////////////////////////////////////////////////
let fCustomersNew = () => {
  customersNew.forEach(customer => {
    let trCustomers = document.createElement('tr');

    let tdId = document.createElement('td');
    tdId.innerHTML = customer.id;

    let tdCompName = document.createElement('td');
    tdCompName.innerHTML = customer.companyName;

    let tdConName = document.createElement('td');
    tdConName.innerHTML = customer.contactName;

    let tdCity = document.createElement('td');
    tdCity.innerHTML = customer.address.city;

    let tdCountry = document.createElement('td');
    tdCountry.innerHTML = customer.address.country;

    let tdPhone = document.createElement('td');
    tdPhone.innerHTML = customer.address.phone
      .replaceAll('(', ' ')
      .replaceAll(')', ' ')
      .replaceAll('.', ' ')
      .replaceAll('-', ' ')
      .split(' ')
      .join('');

    trCustomers.appendChild(tdId);
    trCustomers.appendChild(tdCompName);
    trCustomers.appendChild(tdConName);
    trCustomers.appendChild(tdCity);
    trCustomers.appendChild(tdCountry);
    trCustomers.appendChild(tdPhone);

    document.getElementById('customers').appendChild(trCustomers);
  });
};

fCustomersNew();
/////////////////////////////////////////////

let tdCount = document.createElement('th');
tdCount.innerHTML = Object.values(customersNew).length;
document.getElementById('buttons').appendChild(tdCount);

/////////////////////////////////////////////////////////////////////                         CUSTOMER A BUTTON
/////////////////////////////////////////////////////////////////////

let thCustomerA = document.createElement('th');
let customerA = document.createElement('button');
customerA.classList.add('btn', 'btn-outline-primary', 'btn-lg');
customerA.innerHTML = 'A ile Başlayan Customer Getir';
customerA.setAttribute('id', 'aCustomer');
thCustomerA.appendChild(customerA);
document.getElementById('buttons').appendChild(thCustomerA);

document.getElementById('aCustomer').addEventListener('click', () => {
  customerA.innerHTML = 'Eski haline dön';
  customerA.removeAttribute('id', 'aCustomer');
  customerA.setAttribute('id', 'filteredCustomer');
  document.getElementById('customers').innerHTML = '';

  let filteredCustomer = customers.filter(x =>
    x.contactName.toLowerCase().startsWith('a')
  );

  filteredCustomer.forEach(item => {
    let trFilteredCustomers = document.createElement('tr');

    let tdFilteredId = document.createElement('td');
    tdFilteredId.innerHTML = item.id;

    let tdFilteredCompName = document.createElement('td');
    tdFilteredCompName.innerHTML = item.companyName;

    let tdFilteredConName = document.createElement('td');
    tdFilteredConName.innerHTML = item.contactName;

    let tdFilteredCity = document.createElement('td');
    tdFilteredCity.innerHTML = item.address.city;

    let tdFilteredCountry = document.createElement('td');
    tdFilteredCountry.innerHTML = item.address.country;

    let tdFilteredPhone = document.createElement('td');
    tdFilteredPhone.innerHTML = item.address.phone
      .replaceAll('(', ' ')
      .replaceAll(')', ' ')
      .replaceAll('.', ' ')
      .replaceAll('-', ' ')
      .split(' ')
      .join('');

    trFilteredCustomers.appendChild(tdFilteredId);
    trFilteredCustomers.appendChild(tdFilteredCompName);
    trFilteredCustomers.appendChild(tdFilteredConName);
    trFilteredCustomers.appendChild(tdFilteredCity);
    trFilteredCustomers.appendChild(tdFilteredCountry);
    trFilteredCustomers.appendChild(tdFilteredPhone);

    document.getElementById('customers').appendChild(trFilteredCustomers);

    tdCount.innerHTML = Object.values(filteredCustomer).length;
  });

  document.getElementById('filteredCustomer').addEventListener('click', () => {
    customerA.innerHTML = 'A ile Başlayan Customer Getir';
    customerA.removeAttribute('id', 'filteredCustomer');
    customerA.setAttribute('id', 'aCustomer');
    document.getElementById('customers').innerHTML = '';

    fCustomersNew();

    tdCount.innerHTML = Object.values(customersNew).length;
  });
});

/////////////////////////////////////////////////////////////////////                         COUNTRY UK BUTTON
/////////////////////////////////////////////////////////////////////

let thCustomerUK = document.createElement('th');
let customerUK = document.createElement('button');
customerUK.classList.add('btn', 'btn-outline-primary', 'btn-lg');
customerUK.innerHTML = 'Country UK Customer Getir';
customerUK.setAttribute('id', 'ukCustomer');
thCustomerUK.appendChild(customerUK);
document.getElementById('buttons').appendChild(thCustomerUK);

document.getElementById('ukCustomer').addEventListener('click', () => {
  customerUK.innerHTML = 'Eski haline dön';
  customerUK.removeAttribute('id', 'ukCustomer');
  customerUK.setAttribute('id', 'filteredUkCustomer');
  document.getElementById('customers').innerHTML = '';

  let filteredUkCustomer = customers.filter(
    x => x.address.country.toUpperCase() === 'UK'
  );

  filteredUkCustomer.forEach(item => {
    let trFilteredUkCustomers = document.createElement('tr');

    let tdFilteredUkId = document.createElement('td');
    tdFilteredUkId.innerHTML = item.id;

    let tdFilteredUkCompName = document.createElement('td');
    tdFilteredUkCompName.innerHTML = item.companyName;

    let tdFilteredUkConName = document.createElement('td');
    tdFilteredUkConName.innerHTML = item.contactName;

    let tdFilteredUkCity = document.createElement('td');
    tdFilteredUkCity.innerHTML = item.address.city;

    let tdFilteredUkCountry = document.createElement('td');
    tdFilteredUkCountry.innerHTML = item.address.country;

    let tdFilteredUkPhone = document.createElement('td');
    tdFilteredUkPhone.innerHTML = item.address.phone
      .replaceAll('(', ' ')
      .replaceAll(')', ' ')
      .replaceAll('.', ' ')
      .replaceAll('-', ' ')
      .split(' ')
      .join('');

    trFilteredUkCustomers.appendChild(tdFilteredUkId);
    trFilteredUkCustomers.appendChild(tdFilteredUkCompName);
    trFilteredUkCustomers.appendChild(tdFilteredUkConName);
    trFilteredUkCustomers.appendChild(tdFilteredUkCity);
    trFilteredUkCustomers.appendChild(tdFilteredUkCountry);
    trFilteredUkCustomers.appendChild(tdFilteredUkPhone);

    document.getElementById('customers').appendChild(trFilteredUkCustomers);

    tdCount.innerHTML = Object.values(filteredUkCustomer).length;
  });

  document
    .getElementById('filteredUkCustomer')
    .addEventListener('click', () => {
      customerUK.innerHTML = 'Country UK Customer Getir';
      customerUK.removeAttribute('id', 'filteredUkCustomer');
      customerUK.setAttribute('id', 'ukCustomer');
      document.getElementById('customers').innerHTML = '';

      fCustomersNew();

      tdCount.innerHTML = Object.values(customersNew).length;
    });
});

/////////////////////////////////////////////////////////////////////                      COMPANY NAME SORT BUTTON
/////////////////////////////////////////////////////////////////////

let thCompanySort = document.createElement('th');
let companySort = document.createElement('button');
companySort.classList.add('btn', 'btn-outline-primary', 'btn-lg');
companySort.innerHTML = 'Company Name Sırala';
companySort.setAttribute('id', 'sortCompany');
thCompanySort.appendChild(companySort);
document.getElementById('buttons').appendChild(thCompanySort);

document.getElementById('sortCompany').addEventListener('click', () => {
  companySort.innerHTML = 'Eski haline dön';
  companySort.removeAttribute('id', 'sortCompany');
  companySort.setAttribute('id', 'normalCompany');
  document.getElementById('customers').innerHTML = '';

  let sortedCompany = customers.sort((x, y) => {
    return x.companyName.localeCompare(y.companyName);
  });

  sortedCompany.forEach(item => {
    let trSortedCompany = document.createElement('tr');

    let tdSortedCompanyId = document.createElement('td');
    tdSortedCompanyId.innerHTML = item.id;

    let tdSortedCompName = document.createElement('td');
    tdSortedCompName.innerHTML = item.companyName;

    let tdSortedCompConName = document.createElement('td');
    tdSortedCompConName.innerHTML = item.contactName;

    let tdSortedCompCity = document.createElement('td');
    tdSortedCompCity.innerHTML = item.address.city;

    let tdSortedCountry = document.createElement('td');
    tdSortedCountry.innerHTML = item.address.country;

    let tdSortedPhone = document.createElement('td');
    tdSortedPhone.innerHTML = item.address.phone
      .replaceAll('(', ' ')
      .replaceAll(')', ' ')
      .replaceAll('.', ' ')
      .replaceAll('-', ' ')
      .split(' ')
      .join('');

    trSortedCompany.appendChild(tdSortedCompanyId);
    trSortedCompany.appendChild(tdSortedCompName);
    trSortedCompany.appendChild(tdSortedCompConName);
    trSortedCompany.appendChild(tdSortedCompCity);
    trSortedCompany.appendChild(tdSortedCountry);
    trSortedCompany.appendChild(tdSortedPhone);

    document.getElementById('customers').appendChild(trSortedCompany);

    tdCount.innerHTML = Object.values(sortedCompany).length;
  });

  document.getElementById('normalCompany').addEventListener('click', () => {
    companySort.innerHTML = 'Company Name Sırala';
    companySort.removeAttribute('id', 'normalCompany');
    companySort.setAttribute('id', 'sortCompany');
    document.getElementById('customers').innerHTML = '';

    fCustomersNew();

    tdCount.innerHTML = Object.values(customersNew).length;
  });
});

/////////////////////////////////////////////////////////////////////                         DUMON BUTTON
/////////////////////////////////////////////////////////////////////

let thFindDumon = document.createElement('th');
let findDumonB = document.createElement('button');
findDumonB.classList.add('btn', 'btn-outline-primary', 'btn-lg');
findDumonB.innerHTML = 'DUMON ID Getir';
findDumonB.setAttribute('id', 'findDumonButton');
thFindDumon.appendChild(findDumonB);
document.getElementById('buttons').appendChild(thFindDumon);

document.getElementById('findDumonButton').addEventListener('click', () => {
  findDumonB.innerHTML = 'Eski haline dön';
  findDumonB.removeAttribute('id', 'findDumonButton');
  findDumonB.setAttribute('id', 'normalDumon');
  document.getElementById('customers').innerHTML = '';

  let findDumonPerson = customers.filter(x => x.id.toUpperCase() === 'DUMON');

  findDumonPerson.forEach(item => {
    let trFindDumon = document.createElement('tr');

    let tdfindDumonId = document.createElement('td');
    tdfindDumonId.innerHTML = item.id;

    let tdfinDumonCompName = document.createElement('td');
    tdfinDumonCompName.innerHTML = item.companyName;

    let tdFindDumonConName = document.createElement('td');
    tdFindDumonConName.innerHTML = item.contactName;

    let tdFindDumonCity = document.createElement('td');
    tdFindDumonCity.innerHTML = item.address.city;

    let tdFindDumonCountry = document.createElement('td');
    tdFindDumonCountry.innerHTML = item.address.country;

    let tdFindDumonPhone = document.createElement('td');
    tdFindDumonPhone.innerHTML = item.address.phone
      .replaceAll('(', ' ')
      .replaceAll(')', ' ')
      .replaceAll('.', ' ')
      .replaceAll('-', ' ')
      .split(' ')
      .join('');

    trFindDumon.appendChild(tdfindDumonId);
    trFindDumon.appendChild(tdfinDumonCompName);
    trFindDumon.appendChild(tdFindDumonConName);
    trFindDumon.appendChild(tdFindDumonCity);
    trFindDumon.appendChild(tdFindDumonCountry);
    trFindDumon.appendChild(tdFindDumonPhone);

    document.getElementById('customers').appendChild(trFindDumon);

    tdCount.innerHTML = Object.values(findDumonPerson).length;
  });

  document.getElementById('normalDumon').addEventListener('click', () => {
    findDumonB.innerHTML = 'DUMON ID Getir';
    findDumonB.removeAttribute('id', 'normalDumon');
    findDumonB.setAttribute('id', 'findDumonButton');
    document.getElementById('customers').innerHTML = '';

    fCustomersNew();

    tdCount.innerHTML = Object.values(customersNew).length;
  });
});

/////////////////////////////////////////////////////////////////////                         1 PHONE BUTTON
/////////////////////////////////////////////////////////////////////

let thFindPhone = document.createElement('th');
let findPhoneB = document.createElement('button');
findPhoneB.classList.add('btn', 'btn-outline-primary', 'btn-lg');
findPhoneB.innerHTML = '1 İle Başlayan Getir';
findPhoneB.setAttribute('id', 'findPhoneButton');
thFindPhone.appendChild(findPhoneB);
document.getElementById('buttons').appendChild(thFindPhone);

document.getElementById('findPhoneButton').addEventListener('click', () => {
  findPhoneB.innerHTML = 'Eski haline dön';
  findPhoneB.removeAttribute('id', 'findPhoneButton');
  findPhoneB.setAttribute('id', 'normalPhone');
  document.getElementById('customers').innerHTML = '';

  let findPhone = customers.filter(x =>
    x.address.phone
      .replaceAll('(', ' ')
      .replaceAll(')', ' ')
      .replaceAll('.', ' ')
      .replaceAll('-', ' ')
      .split(' ')
      .join('')
      .startsWith(1)
  );

  findPhone.forEach(item => {
    let trFindPhone = document.createElement('tr');

    let tdfindPhoneId = document.createElement('td');
    tdfindPhoneId.innerHTML = item.id;

    let tdfindPhoneCompName = document.createElement('td');
    tdfindPhoneCompName.innerHTML = item.companyName;

    let tdFindPhoneConName = document.createElement('td');
    tdFindPhoneConName.innerHTML = item.contactName;

    let tdFindPhoneCity = document.createElement('td');
    tdFindPhoneCity.innerHTML = item.address.city;

    let tdFindPhoneCountry = document.createElement('td');
    tdFindPhoneCountry.innerHTML = item.address.country;

    let tdFindPhone = document.createElement('td');
    tdFindPhone.innerHTML = item.address.phone;

    trFindPhone.appendChild(tdfindPhoneId);
    trFindPhone.appendChild(tdfindPhoneCompName);
    trFindPhone.appendChild(tdFindPhoneConName);
    trFindPhone.appendChild(tdFindPhoneCity);
    trFindPhone.appendChild(tdFindPhoneCountry);
    trFindPhone.appendChild(tdFindPhone);

    document.getElementById('customers').appendChild(trFindPhone);

    tdCount.innerHTML = Object.values(findPhone).length;
  });

  document.getElementById('normalPhone').addEventListener('click', () => {
    findPhoneB.innerHTML = '1 İle Başlayan Getir';
    findPhoneB.removeAttribute('id', 'normalPhone');
    findPhoneB.setAttribute('id', 'findPhoneButton');
    document.getElementById('customers').innerHTML = '';

    fCustomersNew();

    tdCount.innerHTML = Object.values(customersNew).length;
  });
});

/////////////////////////////////////////////////////////////////////                        BUTTONS FINISH
/////////////////////////////////////////////////////////////////////

//  2)  Kaç adet customer var?

console.log(`Kaç adet customer var? : ${customersNew.length}`); //91 Tablonun sol üst köşesine eklendi..

// 3) a ( küçük veya büyük harf) ile başlayan customer ları console a yaz:

let filteredCustomer = customers.filter(x =>
  x.contactName.toLowerCase().startsWith('a')
);

console.log(
  'a ( küçük veya büyük harf) ile başlayan customer ları console a yaz:',
  filteredCustomer
);

//4) Country 'UK' olan customerları console a yaz
let filteredUkCustomer = customers.filter(
  x => x.address.country.toUpperCase() === 'UK'
);

console.log(`Country 'UK' olan customerları console a yaz`, filteredUkCustomer);

//  5) customer ları companyName e göre sırala ( sort )

let sortedCompany = customers.sort((x, y) => {
  return x.companyName.localeCompare(y.companyName);
});

console.log('customer ları companyName e göre sırala ( sort )', sortedCompany);

// 6)  id si "DUMON" olan customer ı console a yaz! tek bir object
let findDumon2 = customers.find(x => x.id.toUpperCase() === 'DUMON');
console.log(
  'id si "DUMON" olan customer ı console a yaz! tek bir object',
  findDumon2
);

// 7) *** Telefon numarası 1 ile başlayanları console a yaz

let phoneFiltered = customers.filter(x =>
  x.address.phone
    .replaceAll('(', ' ')
    .replaceAll(')', ' ')
    .replaceAll('.', ' ')
    .replaceAll('-', ' ')
    .split(' ')
    .join('')
    .startsWith(1)
);

console.log('Telefon numarası 1 ile başlayanları console a yaz', phoneFiltered);

//8) ***** TelfindPhoneBlarını console a aşağıdaki formatta yaz (4065555834)
let phone5 = [];
let phone6 = customers.forEach(item => {
  phone5.push(
    item.address.phone
      .replaceAll('(', ' ')
      .replaceAll(')', ' ')
      .replaceAll('.', ' ')
      .replaceAll('-', ' ')
      .split(' ')
      .join('')
  );
});
console.log(
  '***** Telefon numaralarını console a aşağıdaki formatta yaz (4065555834)',
  phone5
);
