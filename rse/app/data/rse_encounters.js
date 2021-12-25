/* Minidex - Encounters data - Gen III RSE */
const R=1<<0;
const S=1<<1;
const E=1<<2;
const RS=R|S;
const RE=R|E;
const SE=S|E;

const LOCATIONS=[
{
	name:['Littleroot Town','Bourg-en-Vol','Wurzelheim','Albanova','Villa Raíz',,'未白镇'],encounters:[
		[152,E,'gift'],
		[155,E,'gift'],
		[158,E,'gift']
	]
},{
	name:['Route 101',,,'Percorso 101','Ruta 101',,'101号道路'],encounters:[
		[261,RS,'grass',10],
		[261,E,'grass',45],
		[263,RS,'grass',45],
		[263,E,'grass',10],
		[265,,'grass',45],
		[252,,'starter'],
		[255,,'starter'],
		[258,,'starter']
	]
},{
	name:['Route 103',,,'Percorso 103','Ruta 103',,'103号道路'],encounters:[
		[261,RS,'grass',30],
		[261,E,'grass',60],
		[263,RS,'grass',60],
		[263,E,'grass',20],
		[278,RS,'grass',10],
		[278,E,'grass',20],
		[72,,'surf',60],
		[278,,'surf',35],
		[279,,'surf',5],
		[72,,'fish_old',30],
		[129,,'fish_old',70],
		[72,,'fish_good',20],
		[129,,'fish_good',60],
		[320,,'fish_good',20],
		[319,,'fish_super',40],
		[320,,'fish_super',60]
	]
},{
	name:['Altering Cave','Grotte Métamo','Wandelhöhle','Grotta Mutevole','Cueva Cambiante',,'变化洞窟'],encounters:[
		[41,E,'walk',100],
		[179,E,'event'],
		[190,E,'event'],
		[204,E,'event'],
		[213,E,'event'],
		[216,E,'event'],
		[228,E,'event'],
		[234,E,'event'],
		[235,E,'event']
	]
},{
	name:['Route 102',,,'Percorso 102','Ruta 102',,'102号道路'],encounters:[
		[261,RS,'grass',15],
		[261,E,'grass',30],
		[263,RS,'grass',30],
		[263,E,'grass',15],
		[265,,'grass',30],
		[270,SE,'grass',20],
		[273,R,'grass',20],
		[273,E,'grass',1],
		[280,,'grass',4],
		[283,RS,'grass',1],
		[118,E,'surf',1],
		[183,,'surf',99],
		[283,RS,'surf',1],
		[118,,'fish_old',30],
		[129,,'fish_old',70],
		[118,,'fish_good',20],
		[129,,'fish_good',60],
		[341,,'fish_good',20],
		[341,,'fish_super',100],
		[283,RS,'swarm',50],
		[273,E,'swarm',50]
	]
},{
	name:['Petalburg City','Clémenti-ville','Blütenburg City','Petalipoli','Ciudad Petalia',,'橙华市'],encounters:[
		[183,,'surf',100],
		[118,,'fish_old',30],
		[129,,'fish_old',70],
		[118,,'fish_good',20],
		[129,,'fish_good',60],
		[341,,'fish_good',20],
		[341,,'fish_super',100]
	]
},{
	name:['Route 104',,,'Percorso 104','Ruta 104',,'104号道路'],encounters:[
		[183,E,'grass',20],
		[261,E,'grass',40],
		[263,RS,'grass',50],
		[265,RS,'grass',30],
		[265,E,'grass',20],
		[276,,'grass',10],
		[278,,'grass',10],
		[278,,'surf',95],
		[279,,'surf',5],
		[129,,'fish_old',100],
		[129,,'fish_good',100],
		[129,,'fish_super',100]
	]
},{
	name:['Petalburg Woods','Bois Clémenti','Blütenburgwald','Bosco Petalo','Bosque Petalia',,'橙华森林'],encounters:[
		[261,E,'grass',30],
		[263,RS,'grass',30],
		[265,,'grass',25],
		[266,,'grass',10],
		[268,,'grass',10],
		[276,,'grass',5],
		[285,,'grass',15],
		[287,,'grass',5]
	]
},{
	name:['Rustboro City','Mérouville','Metarost City','Ferrugipoli','Ciudad Férrica',,'卡那兹市'],encounters:[
		[345,,'revive_fossil'],
		[347,,'revive_fossil'],
		[296,RS,['trade',287]],
		[273,E,['trade',280]]
	]
},{
	name:['Route 116',,,'Percorso 116','Ruta 116',,'116号道路'],encounters:[
		[63,E,'grass',10],
		[261,E,'grass',28],
		[263,RS,'grass',28],
		[276,,'grass',20],
		[290,,'grass',20],
		[293,RS,'grass',30],
		[293,E,'grass',20],
		[300,,'grass',2],
		[300,,'swarm',50]
	]
},{
	name:['Rusturf Tunnel','Tunnel Mérazon','Metaflurtunnel','Tunnel Menferro','Túnel Fervergal',,'卡绿隧道'],encounters:[
		[293,,'cave',100]
	]
},{
	name:['Route 105',,,'Percorso 105','Ruta 105',,'105号道路'],encounters:[
		[72,,'surf',60],
		[278,,'surf',35],
		[279,,'surf',5],
		[72,,'fish_old',30],
		[129,,'fish_old',70],
		[72,,'fish_good',20],
		[129,,'fish_good',60],
		[320,,'fish_good',20],
		[320,,'fish_super',100]
	]
},{
	name:['Island Cave','Grotte Island','Inselhöhle','Grotta Insulare','Cueva Insular',,'小岛横穴'],encounters:[
		[378,,'interact']
	]
},{
	name:['Route 106',,,'Percorso 106','Ruta 106',,'106号道路'],encounters:[
		[72,,'surf',60],
		[278,,'surf',35],
		[279,,'surf',5],
		[72,,'fish_old',30],
		[129,,'fish_old',70],
		[72,,'fish_good',20],
		[129,,'fish_good',60],
		[320,,'fish_good',20],
		[320,,'fish_super',100]
	]
},{
	name:['Dewford Town','Village Myokara','Faustauhaven','Bluruvia','Pueblo Azuliza',,'武斗镇'],encounters:[
		[72,,'surf',60],
		[278,,'surf',35],
		[279,,'surf',5],
		[72,,'fish_old',30],
		[129,,'fish_old',70],
		[72,,'fish_good',20],
		[129,,'fish_good',60],
		[320,,'fish_good',20],
		[320,,'fish_super',100]
	]
},{
	name:['Granite Cave','Grotte Granite','Granithöhle','Grotta Pietrosa','Cueva Granito',,'石之洞窟'],encounters:[
		[41,,'cave',30],
		[63,,'cave',10],
		{group:'1f',encounters:[
			[74,,'cave',10],
			[296,,'cave',50]
		]},
		{group:['Steven\'s room',,,,'Sala de Máximo',,'大吾的房间'],encounters:[
			[296,,'cave',50],
			[304,,'cave',10]
		]},
		{group:'b1f',encounters:[
			[296,,'cave',10],
			[302,SE,'cave',10],
			[303,R,'cave',10],
			[304,,'cave',40]
		]},
		{group:'b2f',encounters:[
			[302,SE,'cave',20],
			[303,R,'cave',20],
			[304,,'cave',40],
			[74,,'rock_smash',70],
			[299,,'rock_smash',30]
		]}
	]
},{
	name:['Route 107',,,'Percorso 107','Ruta 107',,'107号道路'],encounters:[
		[72,,'surf',60],
		[278,,'surf',35],
		[279,,'surf',5],
		[72,,'fish_old',30],
		[129,,'fish_old',70],
		[72,,'fish_good',20],
		[129,,'fish_good',60],
		[320,,'fish_good',20],
		[320,,'fish_super',100]
	]
},{
	name:['Route 108',,,'Percorso 108','Ruta 108',,'108号道路'],encounters:[
		[72,,'surf',60],
		[278,,'surf',35],
		[279,,'surf',5],
		[72,,'fish_old',30],
		[129,,'fish_old',70],
		[72,,'fish_good',20],
		[129,,'fish_good',60],
		[320,,'fish_good',20],
		[320,,'fish_super',100]
	]
},{
	name:['Route 109',,,'Percorso 109','Ruta 109',,'109号道路'],encounters:[
		[72,,'surf',60],
		[278,,'surf',35],
		[279,,'surf',5],
		[72,,'fish_old',30],
		[129,,'fish_old',70],
		[72,,'fish_good',20],
		[129,,'fish_good',60],
		[320,,'fish_good',20],
		[320,,'fish_super',100]
	]
},{
	name:['Slateport City','Poivressel','Graphitport City','Porto Selcepoli','Ciudad Portual',,'凯那市'],encounters:[
		[72,,'surf',60],
		[278,,'surf',35],
		[279,,'surf',5],
		[72,,'fish_old',30],
		[129,,'fish_old',70],
		[72,,'fish_good',20],
		[129,,'fish_good',60],
		[320,,'fish_good',20],
		[320,,'fish_super',100]
	]
},{
	name:['Route 110',,,'Percorso 110','Ruta 110',,'110号道路'],encounters:[
		[43,,'grass',10],
		[263,RS,'grass',20],
		[261,E,'grass',20],
		[278,,'grass',8],
		[309,,'grass',30],
		[311,RE,'grass',2],
		[311,S,'grass',15],
		[312,RE,'grass',15],
		[312,S,'grass',2],
		[316,,'grass',15],
		[72,,'surf',60],
		[278,,'surf',35],
		[279,,'surf',5],
		[72,,'fish_old',30],
		[129,,'fish_old',70],
		[72,,'fish_good',20],
		[129,,'fish_good',60],
		[320,,'fish_good',20],
		[320,,'fish_super',100]
	]
},{
	name:['New Mauville','New Lavandia','Neu Malvenfroh','Ciclanova','Malvalanova',,'新紫堇'],encounters:[
		[100,,'interact'],
		{group:'entrance',encounters:[
			[81,,'walk',50],
			[100,,'walk',50]
		]},
		{group:'basement',encounters:[
			[81,,'walk',49],
			[82,,'walk',1],
			[100,,'walk',49],
			[101,,'walk',1]
		]}
	]
},{
	name:['Route 117',,,'Percorso 117','Ruta 117',,'117号道路'],encounters:[
		[43,RS,'grass',10],
		[43,E,'grass',40],
		[183,,'grass',10],
		[261,E,'grass',30],
		[263,RS,'grass',30],
		[273,E,'grass',1],
		[283,RS,'grass',1],
		[313,RE,'grass',1],
		[313,S,'grass',18],
		[314,RE,'grass',18],
		[314,S,'grass',1],
		[315,RS,'grass',30],
		[118,E,'surf',1],
		[183,,'surf',99],
		[283,RS,'surf',1],
		[118,,'fish_old',30],
		[129,,'fish_old',70],
		[118,,'fish_good',20],
		[129,,'fish_good',60],
		[341,,'fish_good',20],
		[341,,'fish_super',100],
		[283,RS,'swarm',50],
		[273,E,'swarm',50]
	]
},{
	name:['Route 111',,,'Percorso 111','Ruta 111',,'111号道路'],encounters:[
		[27,,'deep_sand',35],
		[328,,'deep_sand',35],
		[331,RS,'deep_sand',20],
		[331,E,'deep_sand',6],
		[343,RS,'deep_sand',10],
		[343,E,'deep_sand',24],
		[74,,'rock_smash',100],
		[118,E,'surf',1],
		[183,,'surf',99],
		[283,RS,'surf',1],
		[118,,'fish_old',30],
		[129,,'fish_old',70],
		[118,,'fish_good',20],
		[129,,'fish_good',60],
		[339,,'fish_good',20],
		[339,,'fish_super',100]
	]
},{
	name:['Mirage Tower','Tour Mirage','Wunderturm','Torre Miraggio','Torre Espejismo',,'幻影之塔'],encounters:[
		[27,E,'walk',50],
		[328,E,'walk',50]
	]
},{
	name:['Desert Ruins','Ruines Désert','Wüstenruine','Rovine Sabbiose','Ruinas Desierto',,'沙漠遗迹'],encounters:[
		[377,,'interact']
	]
},{
	name:['Route 112',,,'Percorso 112','Ruta 112',,'112号道路'],encounters:[
		[66,RS,'grass',25],
		[183,E,'grass',25],
		[322,,'grass',75]
	]
},{
	name:['Fiery Path','Chemin Ardent','Feuriger Pfad','Cammino Ardente','Senda Ígnea',,'热焰小径'],encounters:[
		[66,,'cave',15],
		[88,RE,'cave',2],
		[88,S,'cave',25],
		[109,RE,'cave',25],
		[109,S,'cave',2],
		[218,,'cave',10],
		[322,,'cave',30],
		[324,,'cave',18]
	]
},{
	name:['Route 113',,,'Percorso 113','Ruta 113',,'113号道路'],encounters:[
		[27,RS,'grass',25],
		[218,E,'grass',25],
		[227,,'grass',5],
		[327,,'grass',70]
	]
},{
	name:['Route 114',,,'Percorso 114','Ruta 114',,'114号道路'],encounters:[
		[270,SE,'grass',30],
		[271,S,'grass',10],
		[271,E,'grass',20],
		[273,R,'grass',30],
		[274,R,'grass',10],
		[274,E,'grass',1],
		[283,RS,'grass',1],
		[333,,'grass',40],
		[335,R,'grass',19],
		[336,S,'grass',19],
		[336,E,'grass',9],
		[74,,'rock_smash',100],
		[118,E,'surf',1],
		[183,,'surf',99],
		[283,RS,'surf',1],
		[118,,'fish_old',30],
		[129,,'fish_old',70],
		[118,,'fish_good',20],
		[129,,'fish_good',60],
		[339,,'fish_good',20],
		[339,,'fish_super',100],
		[283,RS,'swarm',50],
		[274,E,'swarm',50]
	]
},{
	name:['Meteor Falls','Site Météore','Meteorfälle','Cascate Meteora','Cascada Meteoro',,'流星瀑布'],encounters:[
		[337,S,'surf',10],
		[338,RE,'surf',10],
		[118,,'fish_old',30],
		[129,,'fish_old',70],
		[118,,'fish_good',20],
		[129,,'fish_good',60],
		[339,,'fish_good',20],
		{group:['1F Entrance',,,,'P1 Entrada',,'1F 入口'],encounters:[
			[41,,'cave',80],
			[337,S,'cave',20],
			[338,RE,'cave',20],
			[41,,'surf',90],
			[339,,'fish_super',100]
		]},
		{group:'b1f',encounters:[
			[42,,'surf',90],
			[339,,'fish_super',80],
			[340,,'fish_super',20]
		]},
		{group:['1F Back/B1F Entrance',,,,'P1 Trasera/S1 Entrada',,'1F 返回点/B1F 入口'],encounters:[
			[42,,'cave',65],
			[337,S,'cave',35],
			[338,RE,'cave',35]
		]},
		{group:['B1F Back',,,,'S1 Trasera',,'B1F 返回点'],encounters:[
			[42,,'cave',50],
			[337,S,'cave',25],
			[338,RE,'cave',25],
			[371,,'cave',25]
		]},
		{group:['Steven\'s cave',,,,'Cueva de Máximo',,'大吾的洞窟'],encounters:[
			[42,E,'cave',65],
			[338,E,'cave',35]
		]}
	]
},{
	name:['Jagged Pass','Sentier Sinuroc','Steilpass','Passo Selvaggio','Desfiladero',,'凹凸山道'],encounters:[
		[66,,'grass',25],
		[322,,'grass',55],
		[325,,'grass',20]
	]
},{
	name:['Lavaridge Town','Vermilava','Bad Lavastadt','Cuordilava','Pueblo Lavacalda',,'釜炎镇'],encounters:[
		[360,,'gift_egg']
	]
},{
	name:['Route 115',,,'Percorso 115','Ruta 115',,'115号道路'],encounters:[
		[39,,'grass',10],
		[276,,'grass',40],
		[277,,'grass',10],
		[278,,'grass',10],
		[333,,'grass',30],
		[72,,'surf',60],
		[278,,'surf',35],
		[279,,'surf',5],
		[72,,'fish_old',30],
		[129,,'fish_old',70],
		[72,,'fish_good',20],
		[129,,'fish_good',60],
		[320,,'fish_good',20],
		[320,,'fish_super',100]
	]
},{
	name:['Abandoned Ship','Épave','Schiffswrack','Vecchia Nave','Nao Abandonada',,'弃船'],encounters:[
		[72,,'surf',99],
		[73,,'surf',1],
		[72,,'fish_old',30],
		[129,,'fish_old',70],
		[72,,'fish_good',40],
		[129,,'fish_good',60],
		[72,,'fish_super',80],
		[73,,'fish_super',20]
	]
},{
	name:['Route 118',,,'Percorso 118','Ruta 118',,'118号道路'],encounters:[
		[263,,'grass',30],
		[264,,'grass',10],
		[278,,'grass',19],
		[309,,'grass',30],
		[310,,'grass',10],
		[352,,'grass',1],
		[72,,'surf',60],
		[278,,'surf',35],
		[279,,'surf',5],
		[72,,'fish_old',30],
		[129,,'fish_old',70],
		[72,,'fish_good',20],
		[129,,'fish_good',60],
		[318,,'fish_good',20],
		[318,,'fish_super',60],
		[319,,'fish_super',40]
	]
},{
	name:['Terra Cave','Grotte Terra','Terrahöhle','Grotta Terra','Cueva Terrena',,'陆之窟'],encounters:[
		[383,E,'interact']
	]
},{
	name:['Route 119',,,'Percorso 119','Ruta 119',,'119号道路'],encounters:[
		[43,,'grass_tall',30],
		[263,,'grass_tall',30],
		[264,,'grass_tall',30],
		[352,,'grass_tall',1],
		[357,,'grass_tall',9],
		[72,,'surf',60],
		[278,,'surf',35],
		[279,,'surf',5],
		[72,,'fish_old',30],
		[129,,'fish_old',70],
		[72,,'fish_good',20],
		[129,,'fish_good',60],
		[318,,'fish_good',20],
		[318,,'fish_super',100],
		[349,,['fish_old','feebas_tile'],50],
		[349,,['fish_good','feebas_tile'],50],
		[349,,['fish_super','feebas_tile'],50],
		[352,,'interact']
	]
},{
	name:['Weather Institute','Centre Météo','Klima-Institut','Istituto Meteo','Instituto Meteorológico',,'天气研究所'],encounters:[
		[351,,'gift']
	]
},{
	name:['Fortree City','Cimetronelle','Baumhausen City','Forestopoli','Ciudad Arborada',,'天气研究所'],encounters:[
		[300,RS,['trade',25]],
		[311,E,['trade',313]]
	]
},{
	name:['Route 120',,,'Percorso 120','Ruta 120',,'120号道路'],encounters:[
		[43,,'grass_tall',25],
		[183,,'grass_tall',15],
		[261,E,'grass_tall',20],
		[262,E,'grass_tall',30],
		[263,RS,'grass_tall',20],
		[264,RS,'grass_tall',30],
		[273,E,'grass_tall',1],
		[283,RS,'grass_tall',1],
		[352,,'grass_tall',1],
		[359,,'grass_tall',8],
		[118,E,'surf',1],
		[183,,'surf',99],
		[283,RS,'surf',1],
		[118,,'fish_old',30],
		[129,,'fish_old',70],
		[118,,'fish_good',20],
		[129,,'fish_good',60],
		[339,,'fish_good',20],
		[339,,'fish_super',100],
		[352,,'interact'],
		[283,RS,'swarm',50],
		[273,E,'swarm',50]
	]
},{
	name:['Ancient Tomb','Tombeau Antique','Grabmal','Tomba Antica','Tumba Antigua',,'古代坟墓'],encounters:[
		[379,,'interact']
	]
},{
	name:['Route 121',,,'Percorso 121','Ruta 121',,'121号道路'],encounters:[
		[43,,'grass',15],
		[44,,'grass',5],
		[261,E,'grass',20],
		[262,E,'grass',20],
		[263,RS,'grass',20],
		[264,RS,'grass',20],
		[278,,'grass',9],
		[352,,'grass',1],
		[353,SE,'grass',30],
		[355,R,'grass',30],
		[72,,'surf',60],
		[278,,'surf',35],
		[279,,'surf',5],
		[72,,'fish_old',30],
		[129,,'fish_old',70],
		[72,,'fish_good',20],
		[129,,'fish_good',60],
		[320,,'fish_good',20],
		[320,,'fish_super',100]
	]
},{
	name:['Safari Zone','Parc Safari','Safari-Zone','Zona Safari','Zona Safari',,'狩猎地带'],encounters:[
		{group:['Area 1',,,,'Área 1',,'区域1'],encounters:[
			[25,,'grass',5],
			[43,,'grass',40],
			[44,,'grass',5],
			[84,,'grass',10],
			[177,,'grass',10],
			[203,,'grass',20],
			[202,,'grass',10]
		]},
		{group:['Area 2',,,,'Área 2',,'区域2'],encounters:[
			[25,,'grass',5],
			[43,,'grass',40],
			[44,,'grass',5],
			[84,,'grass',10],
			[177,,'grass',10],
			[203,,'grass',20],
			[202,,'grass',10],
			[54,,'surf',100],
			[118,,'fish_old',30],
			[129,,'fish_old',70],
			[118,,'fish_good',40],
			[129,,'fish_good',60],
			[118,,'fish_super',80],
			[119,,'fish_super',20]
		]},
		{group:['Area 3',,,,'Área 3',,'区域3'],encounters:[
			[43,,'grass',30],
			[44,,'grass',15],
			[84,,'grass',15],
			[85,,'grass',5],
			[111,,'grass',30],
			[127,,'grass',5],
			[54,,'surf',95],
			[55,,'surf',5],
			[118,,'fish_old',30],
			[129,,'fish_old',70],
			[118,,'fish_good',40],
			[129,,'fish_good',60],
			[118,,'fish_super',80],
			[119,,'fish_super',20]
		]},
		{group:['Area 4',,,,'Área 4',,'区域4'],encounters:[
			[43,,'grass',30],
			[44,,'grass',15],
			[177,,'grass',15],
			[178,,'grass',5],
			[214,,'grass',5],
			[231,,'grass',30],
			[74,,'rock_smash',100]
		]},
		{group:['Area 5',,,,'Área 5',,'区域5'],encounters:[
			[163,E,'grass',5],
			[167,E,'grass',10],
			[179,E,'grass',30],
			[190,E,'grass',10],
			[191,E,'grass',30],
			[207,E,'grass',5],
			[209,E,'grass',5],
			[234,E,'grass',5],
			[183,E,'surf',39],
			[194,E,'surf',60],
			[195,E,'surf',1],
			[118,E,'fish_old',30],
			[129,E,'fish_old',70],
			[118,E,'fish_good',20],
			[129,E,'fish_good',60],
			[223,E,'fish_good',20],
			[118,E,'fish_super',40],
			[223,E,'fish_super',59],
			[224,E,'fish_super',1]
		]},
		{group:['Area 6',,,,'Área 6',,'区域6'],encounters:[
			[163,E,'grass',5],
			[165,E,'grass',10],
			[190,E,'grass',30],
			[191,E,'grass',10],
			[204,E,'grass',5],
			[216,E,'grass',30],
			[228,E,'grass',5],
			[241,E,'grass',5],
			[213,E,'rock_smash',100]
		]}
	]
},{
	name:['Lilycove City','Nénucrique','Seegrasulb','Porto Alghepoli','Ciudad Calagua',,'水静市'],encounters:[
		[72,,'surf',60],
		[278,,'surf',35],
		[279,,'surf',5],
		[72,,'fish_old',30],
		[129,,'fish_old',70],
		[72,,'fish_good',20],
		[129,,'fish_good',60],
		[320,,'fish_good',20],
		[120,,'fish_super',15],
		[320,,'fish_super',85]
	]
},{
	name:['Route 122',,,'Percorso 122','Ruta 122',,'122号水路'],encounters:[
		[72,,'surf',60],
		[278,,'surf',35],
		[279,,'surf',5],
		[72,,'fish_old',30],
		[129,,'fish_old',70],
		[72,,'fish_good',20],
		[129,,'fish_good',60],
		[320,,'fish_good',20],
		[319,,'fish_super',40],
		[320,,'fish_super',60]
	]
},{
	name:['Mt. Pyre','Mont Mémoria','Pyroberg','Monte Pira','Monte Pírico',,'送神山'],encounters:[
		{group:['1F-3F',,,,'P1-P3'],encounters:[
			[353,SE,'walk',100],
			[355,R,'walk',100]
		]},
		{group:['4F-6F',,,,'P4-P6'],encounters:[
			[353,R,'walk',10],
			[353,SE,'walk',90],
			[355,R,'walk',90],
			[355,SE,'walk',10]
		]},
		{group:'exterior',encounters:[
			[37,RS,'grass',20],
			[37,E,'grass',30],
			[278,,'grass',10],
			[307,RS,'grass',30],
			[355,R,'grass',40],
			[353,S,'grass',40],
			[353,E,'grass',60]
		]},
		{group:'summit',encounters:[
			[353,R,'grass',13],
			[353,SE,'grass',85],
			[355,R,'grass',85],
			[355,SE,'grass',13],
			[358,,'grass',2]
		]}
	]
},{
	name:['Route 123',,,'Percorso 123','Ruta 123',,'123号道路'],encounters:[
		[43,,'grass',15],
		[44,,'grass',5],
		[261,E,'grass',20],
		[262,E,'grass',20],
		[263,RS,'grass',20],
		[264,RS,'grass',20],
		[278,,'grass',9],
		[352,,'grass',1],
		[353,SE,'grass',30],
		[355,R,'grass',30],
		[72,,'surf',60],
		[278,,'surf',35],
		[279,,'surf',5],
		[72,,'fish_old',30],
		[129,,'fish_old',70],
		[72,,'fish_good',20],
		[129,,'fish_good',60],
		[320,,'fish_good',20],
		[320,,'fish_super',100]
	]
},{
	name:['Team Aqua Hideout','Planque Aqua','Team Aquas Versteck','Rifugio Idro','Guarida Aqua',,'海洋队本部'],encounters:[
		[101,SE,'interact']
	]
},{
	name:['Team Magma Hideout','Planque Magma','Team Magmas Versteck','Rifugio Magma','Guarida Magma',,'熔岩队本部'],encounters:[
		[74,E,'cave',55],
		[75,E,'cave',15],
		[324,E,'cave',30],
		[101,R,'interact']
	]
},{
	name:['Route 124',,,'Percorso 124','Ruta 124',,'124号水路'],encounters:[
		[72,,'surf',60],
		[278,,'surf',35],
		[279,,'surf',5],
		[72,,'fish_old',30],
		[129,,'fish_old',70],
		[72,,'fish_good',20],
		[129,,'fish_good',60],
		[320,,'fish_good',20],
		[319,,'fish_super',40],
		[320,,'fish_super',60],
		[170,,'dive',30],
		[366,,'dive',65],
		[369,,'dive',5]
	]
},{
	name:['Mossdeep City','Algatia','Moosbach City','Verdeazzupoli','Ciudad Algaria',,'绿岭市'],encounters:[
		[72,,'surf',60],
		[278,,'surf',35],
		[279,,'surf',5],
		[72,,'fish_old',30],
		[129,,'fish_old',70],
		[72,,'fish_good',20],
		[129,,'fish_good',60],
		[320,,'fish_good',20],
		[319,,'fish_super',40],
		[320,,'fish_super',60],
		[374,,'gift']
	]
},{
	name:['Route 125',,,'Percorso 125','Ruta 125',,'125号水路'],encounters:[
		[72,,'surf',60],
		[278,,'surf',35],
		[279,,'surf',5],
		[72,,'fish_old',30],
		[129,,'fish_old',70],
		[72,,'fish_good',20],
		[129,,'fish_good',60],
		[320,,'fish_good',20],
		[319,,'fish_super',40],
		[320,,'fish_super',60]
	]
},{
	name:['Shoal Cave','Grotte Tréfonds','Küstenhöhle','Grotta Ondosa','Cueva Cardumen',,'浅滩洞穴'],encounters:[
		[42,,'cave',5],
		{group:['Main cave',,,,'Cueva principal',,'主洞穴'],encounters:[
			[41,,'cave',45],
			[363,,'cave',50],
			[72,,'surf',60],
			[41,,'surf',30],
			[363,,'surf',10],
			[72,,'fish_old',30],
			[129,,'fish_old',70],
			[72,,'fish_good',20],
			[129,,'fish_good',60],
			[320,,'fish_good',20],
			[320,,'fish_super',100]
		]},
		{group:['Ice room',,,,'Sala helada',,'冰之房间'],encounters:[
			[41,,'cave',40],
			[361,,'cave',10],
			[363,,'cave',45]
		]}
	]
},{
	name:['Route 127',,,'Percorso 127','Ruta 127',,'127号水路'],encounters:[
		[72,,'surf',60],
		[278,,'surf',35],
		[279,,'surf',5],
		[72,,'fish_old',30],
		[129,,'fish_old',70],
		[72,,'fish_good',20],
		[129,,'fish_good',60],
		[320,,'fish_good',20],
		[319,,'fish_super',40],
		[320,,'fish_super',60]
	]
},{
	name:['Route 128',,,'Percorso 128','Ruta 128',,'128号水路'],encounters:[
		[72,,'surf',60],
		[278,,'surf',35],
		[279,,'surf',5],
		[72,,'fish_old',30],
		[129,,'fish_old',70],
		[129,,'fish_good',60],
		[320,,'fish_good',20],
		[370,,'fish_good',20],
		[222,,'fish_super',15],
		[320,,'fish_super',45],
		[370,,'fish_super',40]
	]
},{
	name:['Seafloor Cavern','Caverne Fondmer','Tiefseehöhle','Antro Abissale','Caverna Abisal',,'海底洞窟'],encounters:[
		[41,,'cave',90],
		[42,,'cave',10],
		[41,,'surf',35],
		[42,,'surf',5],
		[72,,'surf',60],
		[72,,'fish_old',30],
		[129,,'fish_old',70],
		[72,,'fish_good',20],
		[129,,'fish_good',60],
		[320,,'fish_good',20],
		[320,,'fish_super',100]
	]
},{
	name:['Route 126',,,'Percorso 126','Ruta 126',,'126号水路'],encounters:[
		[72,,'surf',60],
		[278,,'surf',35],
		[279,,'surf',5],
		[72,,'fish_old',30],
		[129,,'fish_old',70],
		[72,,'fish_good',20],
		[129,,'fish_good',60],
		[320,,'fish_good',20],
		[319,,'fish_super',40],
		[320,,'fish_super',60],
		[170,,'dive',30],
		[366,,'dive',65],
		[369,,'dive',5]
	]
},{
	name:['Sootopolis City','Atalanopolis','Xeneroville','Ceneride','Arrecípolis',,'琉璃市'],encounters:[
		[129,,'surf',100],
		[72,,'fish_old',30],
		[129,,'fish_old',70],
		[129,,'fish_good',100],
		[129,,'fish_super',80],
		[130,,'fish_super',20]
	]
},{
	name:['Cave of Origin','Grotte Origine','Urzeithöhle','Grotta dei Tempi','Cueva Ancestral',,'觉醒祠堂'],encounters:[
		[42,,'cave',10],
		[382,S,'interact'],
		[383,R,'interact'],
		{group:'entrance',encounters:[
			[41,,'cave',90],
		]},
		{group:['1F-B3F',,,,'P1-S3'],encounters:[
			[41,,'cave',60],
			[302,SE,'cave',30],
			[303,R,'cave',30]
		]}
	]
},{
	name:['Route 129',,,'Percorso 129','Ruta 129',,'129号水路'],encounters:[
		[72,,'surf',60],
		[278,,'surf',35],
		[279,,'surf',4],
		[321,,'surf',1],
		[72,,'fish_old',30],
		[129,,'fish_old',70],
		[72,,'fish_good',20],
		[129,,'fish_good',60],
		[320,,'fish_good',20],
		[319,,'fish_super',40],
		[320,,'fish_super',60]
	]
},{
	name:['Marine Cave','Grotte Marine','Ozeanhöhle','Grotta Mare','Cueva Marina',,'海之窟'],encounters:[
		[382,E,'interact']
	]
},{
	name:['Route 130',,,'Percorso 130','Ruta 130',,'130号水路'],encounters:[
		{group:['Mirage Island','Ile Mirage','Wundereiland','Isola Miraggio','Isla Espejismo',,'幻之岛'], encounters:[
			[360,,'grass',100]
		]},
		[72,,'surf',60],
		[278,,'surf',35],
		[279,,'surf',5],
		[72,,'fish_old',30],
		[129,,'fish_old',70],
		[72,,'fish_good',20],
		[129,,'fish_good',60],
		[320,,'fish_good',20],
		[319,,'fish_super',40],
		[320,,'fish_super',60]
	]
},{
	name:['Route 131',,,'Percorso 131','Ruta 131',,'131号水路'],encounters:[
		[72,,'surf',60],
		[278,,'surf',35],
		[279,,'surf',5],
		[72,,'fish_old',30],
		[129,,'fish_old',70],
		[72,,'fish_good',20],
		[129,,'fish_good',60],
		[320,,'fish_good',20],
		[319,,'fish_super',40],
		[320,,'fish_super',60]
	]
},{
	name:['Sky Pillar','Pilier Céleste','Himmelturm','Torre dei Cieli','Pilar Celeste',,'天空之柱'],encounters:[
		[42,,'walk',30],
		[354,SE,'walk',15],
		[356,R,'walk',15],
		[384,,'interact'],
		{group:'1f',encounters:[
			[303,,'walk',30],
			[344,,'walk',25]
		]},
		{group:'3f',encounters:[
			[302,SE,'walk',30],
			[303,R,'walk',30],
			[344,,'walk',25]
		]},
		{group:'5f',encounters:[
			[302,SE,'walk',30],
			[303,R,'walk',30],
			[334,,'walk',6],
			[344,,'walk',19]
		]}
	]
},{
	name:['Pacifidlog Town','Pacifiville','Floßbrunn','Orocea','Pueblo Oromar',,'暮水镇'],encounters:[
		[72,,'surf',60],
		[278,,'surf',35],
		[279,,'surf',5],
		[72,,'fish_old',30],
		[129,,'fish_old',70],
		[72,,'fish_good',20],
		[129,,'fish_good',60],
		[320,,'fish_good',20],
		[319,,'fish_super',40],
		[320,,'fish_super',60],
		[116,E,['trade',371]],
		[222,RS,['trade',182]]
	]
},{
	name:['Route 132',,,'Percorso 132','Ruta 132',,'132号水路'],encounters:[
		[72,,'surf',60],
		[278,,'surf',35],
		[279,,'surf',5],
		[72,,'fish_old',30],
		[129,,'fish_old',70],
		[72,,'fish_good',20],
		[129,,'fish_good',60],
		[320,,'fish_good',20],
		[116,,'fish_super',15],
		[319,,'fish_super',40],
		[320,,'fish_super',45]
	]
},{
	name:['Route 133',,,'Percorso 133','Ruta 133',,'133号水路'],encounters:[
		[72,,'surf',60],
		[278,,'surf',35],
		[279,,'surf',5],
		[72,,'fish_old',30],
		[129,,'fish_old',70],
		[72,,'fish_good',20],
		[129,,'fish_good',60],
		[320,,'fish_good',20],
		[116,,'fish_super',15],
		[319,,'fish_super',40],
		[320,,'fish_super',45]
	]
},{
	name:['Route 134',,,'Percorso 134','Ruta 134',,'134号水路'],encounters:[
		[72,,'surf',60],
		[278,,'surf',35],
		[279,,'surf',5],
		[72,,'fish_old',30],
		[129,,'fish_old',70],
		[72,,'fish_good',20],
		[129,,'fish_good',60],
		[320,,'fish_good',20],
		[116,,'fish_super',15],
		[319,,'fish_super',40],
		[320,,'fish_super',45]
	]
},{
	name:['Ever Grande City','Eternara','Prachtopolis City','Iridopoli','Ciudad Colosalia',,'彩幽市'],encounters:[
		[72,,'surf',60],
		[278,,'surf',35],
		[279,,'surf',5],
		[72,,'fish_old',30],
		[129,,'fish_old',70],
		[129,,'fish_good',60],
		[320,,'fish_good',20],
		[370,,'fish_good',20],
		[222,,'fish_super',15],
		[320,,'fish_super',45],
		[370,,'fish_super',40]
	]
},{
	name:['Victory Road','Route Victoire','Siegesstraße','Via Vittoria','Calle Victoria',,'冠軍之路'],encounters:[
		{group:'1f',encounters:[
			[41,,'cave',10],
			[42,,'cave',25],
			[293,,'cave',5],
			[294,,'cave',10],
			[296,,'cave',10],
			[297,,'cave',25],
			[304,,'cave',5],
			[305,,'cave',10]
		]},
		{group:'b1f',encounters:[
			[42,,'cave',35],
			[297,,'cave',35],
			[303,E,'cave',5],
			[305,RS,'cave',15],
			[305,E,'cave',25],
			[307,RS,'cave',5],
			[308,RS,'cave',10],
			[74,,'rock_smash',30],
			[75,,'rock_smash',70]
		]},
		{group:'b2f',encounters:[
			[42,,'cave',35],
			[302,SE,'cave',35],
			[303,R,'cave',35],
			[303,E,'cave',5],
			[305,RS,'cave',15],
			[305,E,'cave',25],
			[308,RS,'cave',15],
			[42,,'surf',100],
			[118,,'fish_old',30],
			[129,,'fish_old',70],
			[118,,'fish_good',20],
			[129,,'fish_good',60],
			[339,,'fish_good',20],
			[339,,'fish_super',80],
			[340,,'fish_super',20]
		]}
	]
},{
	name:['Desert Underpass','Tunnel Désert','Wüstentunnel','Galleria Deserto','Gruta Desértica',,'沙漠的地下道'],encounters:[
		[132,E,'cave',50],
		[293,E,'cave',34],
		[294,E,'cave',16]
	]
},{
	name:['Southern Island','Île du Sud','Insel im Süden','Isola Remota','Isla del Sur',,'南方孤岛'],encounters:[
		[380,RE,'event'],
		[381,SE,'event']
	]
},{
	name:['Battle Frontier','Zone de Combat','Kampfzone','Parco Lotta','Frente Batalla',,'对战开拓区'],encounters:[
		[52,E,['trade',300]],
		[185,E,'interact']
	]
},{
	name:['Battle Pike','Reptile de Combat','Kampfipitis','Serpe Lotta','Sierpe Batalla',,'对战管道'],encounters:[
		[336,E,'walk',26],
		[350,E,'walk',26],
		{group:['Room 1-280',,,,'Salas 1-280'],encounters:[
			[356,E,'walk',48]
		]},
		{group:['Room 281-560',,,,'Salas 281-560'],encounters:[
			[101,E,'walk',48]
		]},
		{group:['Room 561-840',,,,'Salas 561-840'],encounters:[
			[286,E,'walk',48]
		]},
		{group:['Room 841+',,,,'Salas 841+'],encounters:[
			[202,E,'walk',48]
		]}
	]
},{
	name:['Artisan Cave','Grotte Atelier','Höhlenatelier','Grotta Artistica','Cueva Taller',,'工匠之穴'],encounters:[
		[235,E,'cave',100]
	]
},{
	name:['Hoenn',,,,,,'豐緣'],encounters:[
		[380,S,'roaming'],
		[381,R,'roaming']
	]
},{
	name:['Faraway Island','Île Lointaine','Ferneiland','Isola Suprema','Isla Suprema',,'边境的小岛'],encounters:[
		[151,E,'event']
	]
},{
	name:['Birth Island','Île Aurore','Entstehungsinsel','Isola Materna','Isla Origen',,'诞生之岛'],encounters:[
		[alternateForm(386,3),E,'event']
	]
},{
	name:['Navel Rock','Roc Nombri','Nabelfels','Monte Cordone','Roca Ombligo',,'肚脐岩'],encounters:[
		[249,E,'event'],
		[250,E,'event']
	]
},{
	name:['Pokémon Channel'],encounters:[
		[385,,'gift']
	]
},{
	name:['Pokémon Box: Ruby &amp; Sapphire'],encounters:[
		[333,,'gift_egg'],
		[263,,'gift_egg'],
		[300,,'gift_egg'],
		[172,,'gift_egg']
	]
}
];