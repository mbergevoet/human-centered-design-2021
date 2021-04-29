# Human Centered Design @cmda-minor-web 2021

# Opdracht

## Ontwerpen een oplossing voor Darice

Voor Darice gaat er enorm veel nuance verloren tijdens het kijken naar een film of een documentaire. Bij veel films worden closed captions aangeboden, maar die zijn zo neutraal als maar kan. Hoe zou je closed captions kunnen ontwerpen zodat alle spanning en sensatie uit het geluid niet verloren gaat?

- [Opdracht - Ontwerpen met en voor echte mensen](course/Opdracht.md)

## Leerdoelen

- _Leren hoe je (design) principles in een ontwerp kan toepassen._
- _User needs begrijpen en gebruiken in je ontwerp._
- _Leren hoe je moet testen en de resultaten gebruiken voor het verbeteren van je ontwerp._

# Over Darice

Darice de Cuba is op latere leeftijd doof geworden. Ze werd ziek en gebruikte medicijnen die het gehoor aantasten. Ze is nu 39 jaar oud en werd op 26 jarige leeftijd doof. Dit betekend dat ze geen gebarentaal kan maar een schrijftolk(of doventolk) heeft om haar te helpen met het gebrijpen van mensen. Ze is zelf ook ontwerper en developer en weet daarom veel van standaarden en design principles. Dat is wel erg voor mij als CMD student maar toch ook weer lastig juist omdat ze zo goed weet wat ze wil. 

# Prototype

[Live prototype](https://mbergevoet.github.io/human-centered-design-2021/)

# Mijn oplossing voor de case

Als oplossing voor het probleem dat Darice heeft heb ik een uitgebreidere ervaring neer gezet met closed captions dan dat nu het geval is.

![foto een](https://i.imgur.com/Wp2lcYw.png)

Op de foto hierboven is te zien hoe mijn oplossing er nu uit ziet. Ook kan het zien op de link waar mijn prototype staat. 

Ten eerste heb ik elk personage een eigen kleur gegeven. Dit was eigenlijk een inzicht dat ik gebruikt heb uit de podcast casus. Mede studenten hadden daar ook geëxperimenteerd met verschillende sprekers elk een eigen kleur te geven. Daar reageerde Darice heel positief op omdat het makkelijk onderscheid maken bij het lezen als ze scanned aan het lezen is. Voor mij leek dit ook een logische stap omdat er soms dialoog gezegd wordt terwijl het personage dat het zegd niet in beeld is. Daarom voeg ik voor elk personage de naam en een kleur toe aan de tekst zodat het extra duidelijk is voor Darice. 

Als tweede laat ik sommige woorden dik drukken. Dit heeft als doel nadruk leggen op bepaalde woorden of zinsdelen die personages zeggen. Ik heb dit persoonlijk getest met Darice en ze vond het op bepaalde momenten wel en niet werken. Dit kwam omdat ik in mijn test een fragment uit Friends had gebruikt, wat de favoriete serie is van Darice. Ze heeft de hele serie nog gezien voor ze doof werd en wist daarom hoe het door mij geselecteerde dialoog zou moeten klinken. Dus op sommige momenten vond ze dat ik overdreef met de nadruk en op andere momenten vond ze het wel gepast. Daarom dat ik in mijn uiteindelijk prototype wat selectiever ben geweest op wat ik benadruk en wat niet. 

Als derde heb ik gelet op de lengte van en de grootte van de captions. Darice gaf bij de derde test aan dat ze het onprettig vond om te lange zinnen te lezen. Ze vind grote tekst wel fijn maar dat is dus alleen bij een podcast transcript. Bij closed captions vind ze het minder fijn als ze te lang zijn omdat ze anders helemaal van links in het beeld naar rechts in het beeld moet lezen en dat vind ze al gauw vermoeiend worden. Vandaar dat de captions nu kleiner zijn dan in die test om haar een aangenaamere lees ervaring te geven.

Ten vierde heb ik aan de rechterkant van het scherm een apparte plek voor geluids captions gemaakt. Dit is handig voor muziek of een sarcastische toon die iemand kan hebben maar ook voor simpele geluiden die anders verloren zouden gaan in de vertaling naar simpele ondertiteling. Deze staat expres aan de rechter kant omdat Darice in de derde test had aangegeven dat boven aan het scherm niet goed werkt om dat ze anders steeds ophoog en om laag moest kijken wat er voor zorgt dat je dingen kunt missen zowel op het beeld als in de tekst. De geluids captions staan nu rechts omdat voor mij de meest logische plek leek omdat je ogen daar eindigen als je een zin van links naar rechts leest natuurlijk. Ik had nog kunnen testen met links of rechts maar Darice heeft in de derde test niet aangegeven dat ze zich stoorde aan het feit dat het rechts was.

Ten vijfde heb ik een equilizer toegevoegd rechts onder in het beeld. In het prototype werkt deze niet met het daadwerkelijk geluid van de video maar dat is wel de bedoeling voor als het echt uitgewerkt zou worden. Maar de reden dat hij er zit is omdat ik samen met de studenten die ook de captions opdracht deden al het idee had om een equilizer uit te proberen omdat het geluid visualiseerd. Vincent heeft dat uiteindelijk als eerste getest en Darice was er heel enthousisast over. Het geeft haar net even dat extra stukje beleving dat ze nu nog mist als ze een film of serie kijkt. Wel wil ze geen gekke ronde equilizer maar een normale, kleine met lijntjes. Daarom heb ik die ook toegevoegd aan mijn prototype.

En als zesde ik heb geprobeerd om sarcasme over de brengen op verschillende manieren. Door tekst een kleur of cursive font te geven in de tests heb ik geprobeerd dat over te brengen. Maar volgens Darice werken die oplossingen niet zo goed. Ze raadde daarom aan om het in de geluids captions te zetten als een scarcastische toon met sterretjes. * Sarcastic tone *.

# Tech achter de captions in het prototype

Voor de captions heb ik het format WebVTT gebruikt. Dit is een tekst bestand waarin je kunt zetten welke ondertiteling wanneer in beeld moet komen. Dit plaats je in een `<track>` tag binnen een `<video>` tag zodat ze over de video worden geplaatst. De captions worden dan ook door de video player herkent en kunnen ze aan of uit gezet worden. Ook bied het wat stylings opties zoals de tekst links of rechts uitlijn en hoe groot de tekst moet zijn. Ook kun je specifieke onderdelen van een zin appart stylen door een soort HTML tag om die tekst te plaatsen. Zo heb ik dat gebruikt in mijn prototype om de personages een apparte kleur te geven. Je kunt ook in CSS de captions nog stijlen wat ik heb gedaan om de tekst grootte te veranderen. 

# Reflectie op het vak en de casus

## Wat anders zou doen volgende keer

Als ik de volgende keer nog een soortgelijke opdracht ga doen, ga ik zeker meer testen met interactieve prototypes. Ik vond het erg jammer nu bij deze keer dat ik bij twee van de drie testen met statische A/B achtige testen heb laten zien aan Darice. Dit heeft me zeker inzichten opgebracht maar ik denk ook dat dat komt omdat het nu specifiek over Darice haar probleem ging, namelijk het verbeteren van de closed captions. Maar daar mee wil je aangeven dat dat per situatie en casus weer anders is en het de volgende keer wel belangrijker is om met interactieve prototypes te testen.

Ik kan voor de volgende keer ook wat meer denken over out of the box dingen. Ik heb vijr nauwkeurig gevolgd wat Darice aanradde en weg halen wat ze niet fijn vond. Maar ik denk dat ik misschien nog interessante dingen had gevonden als ik nog meer gekke dingen had gedaan om misschien wel echt iets heel goed te vinden.

## Wat ik heb geleerd

Ik heb geleerd hoe ik kan testen met een doof persoon. Aan de ene kant viel het me mee hoe afhankelijk Darice is van haar typtolk en merk je ook soms nauwelijks dat ze doof is. Maar andere momenten merk je het weer meer omdat je perongeluk door elkaar heen gaat praten omdat ze op dat moment niet kijkt naar o de typtolk iets aan het schrijven is. Daarom heb ik na de eerste test, toen ik dat merkte, zo goed mogelijk geprobeerd binnen het prototype een tekstje te zetten met wat ze ko9n verwachten en wat ik graag van haar wilde weten. Dit bespaarde de typtolk denk ik wat werk en zorgt er voor dat Darice zelf ook meer alleen kan. 

Ik heb geleerd dat zelf een persoon die goed weet wat ze wil dat toch niet altijd weet. Zoals ik al in de inleiding zei weet ze veel van ontwerp en standaarden af maar gelukkig heb ik een klein dingetje gevonden wat ze zelf niet verwachtte, de equilizer. Dus gekke en out of the box dingen kunnen juist heel goed werken.

## Hoe vond ik het vak
Ik vond het erg leuk om een oplossing te vinden voor problemen die ik zelf helemaal niet ervaar. Het is heel uniek om een kijkje te mogen nemen in het leven van iemand met een fysieke beperking. En ik vond het ook weer eens leuk om te itereren en te testen om tot een oplossing te komen zoals in het eerste en tweede jaar vooral gewend was.  

# Test verslagen

[Test verslag 1](https://github.com/mbergevoet/human-centered-design-2021/wiki/Test-verslag-Darice-1)
[Test verslag 2](https://github.com/mbergevoet/human-centered-design-2021/wiki/Test-verslag-Darice-2)
[Test verslag 3](https://github.com/mbergevoet/human-centered-design-2021/wiki/Test-verslag-Darice-3)

# License

[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)

> This repository uses [MIT](https://github.com/mbergevoet/iCOV-redesign/blob/master/LICENSE) license. © Merlijn Bergevoet 2021

<!-- links naar testverslagen -->

