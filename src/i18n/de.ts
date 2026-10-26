// Deutsch – die Hauptsprache. ru.ts und et.ts folgen exakt dieser Struktur.
// Texte 1:1 aus der Einladung von Diana & Laurin.

const de = {
  lang: 'de',
  meta: {
    title: 'Laurin & Diana · 10-07-2027',
    description: 'Diese Kids heiraten! Laurin & Diana, 10-07-2027, Lainela Puhkeküla, Estland.',
  },
  nav: { home: 'Zur Einladung', languages: 'Sprache' },

  hero: {
    kicker: 'Diese Kids heiraten!',
    names: 'Laurin & Diana',
    surname: 'Herbst',
    date: '10-07-2027',
    place: 'Lainela Puhkeküla, Estonia',
    cta: 'Zusagen & Antworten',
    laurinAlt: 'Laurin als kleiner Junge mit blonden Locken',
    dianaAlt: 'Diana als kleines Mädchen mit Locken und einer Blume',
    photoAlt: 'Hohe grüne Sommerwiese',
    countdown: {
      before: 'Noch',
      forms: { one: 'Tag', other: 'Tage' } as Record<string, string>,
      today: 'Heute ist es so weit!',
      past: 'Danke, dass ihr dabei wart!',
    },
    tabs: [
      { id: 'tag', label: 'Ablauf' },
      { id: 'location', label: 'Location' },
      { id: 'einpacken', label: 'Einpacken' },
      { id: 'estland', label: 'Estland' },
      { id: 'antworten', label: 'Antworten' },
    ],
  },

  story: {
    label: 'Unsere Geschichte',
    tiles: [
      {
        img: 'us/hamburg.webp',
        w: 1640,
        h: 1230,
        alt: 'Laurin und Diana lachend auf einer Aussichtsplattform über dem Hamburger Hafen',
        title: 'First Date',
        text: 'Ein kleiner Einblick in unser erstes richtiges Date – bei dem Laurin mir die Reeperbahn gezeigt hat.',
      },
      {
        img: 'us/tromso.webp',
        w: 1280,
        h: 1600,
        alt: 'Laurin und Diana im Schnee über dem Fjord bei Tromsø, Diana zeigt ihren Ring',
        title: 'Official us',
        text: 'Eine Überraschungsreise in den hohen Norden nach Tromsø – wo wir uns einen großen Schritt näher Richtung gemeinsame Familie bewegt haben.',
      },
    ],
  },

  location: {
    heading: 'Location',
    sub: 'Lainela Puhkeküla',
    rooms: 'Wir haben die Zimmer bereits im Voraus aufgeteilt, damit der Check-in schnell und unkompliziert läuft.',
    rows: [
      { label: 'Check-in', value: '14:00 Uhr' },
      { label: 'Check-out', value: '11:00 Uhr' },
    ],
    confirm: '1 oder 2 Tage bestätigen',
    foodLabel: 'Essen',
    food: 'Das Essen am Hochzeitstag sowie das Frühstück am 11. übernehmen wir. Danach bitten wir euch, euch selbst zu versorgen. Es gibt einen Grillplatz und einen Laden in der Nähe. Das Restaurant ist am 11. geöffnet, am Montag, den 12., jedoch geschlossen.',
  },

  day: {
    heading: 'Hochzeitstag',
    intro:
      'Wir möchten euren Tag so entspannt und sorgenfrei wie möglich machen. Schaut einfach in den Ablauf, damit ihr immer wisst, was gerade passiert. Und das Wichtigste: Habt Spaß!',
    day1Heading: 'Day 1',
    day1: 'Der erste Tag ist unser großer Hochzeitstag – wir feiern die Liebe und dass aus zwei Menschen eine neue Familie wird!',
    day2Heading: 'Day 2',
    day2:
      'Der Tag danach: Sauna, Tennis & Padel stehen bereit – und direkt am Meer können wir auch schwimmen gehen. Also einfach entspannen, spielen und den Tag nach der Hochzeit ganz gemütlich genießen.',
    items: [
      { time: '2:00 PM', what: 'Einchecken & Zimmer beziehen', note: 'Wir haben die Zimmer bereits für alle vorab eingeteilt. Kommt einfach an und holt eure Schlüssel am Eingang ab.' },
      { time: '4:00 PM', what: 'Trauung', note: 'Bitte seid 15–20 Minuten vor Beginn da!' },
      { time: '4:30 PM', what: 'Welcome Area', note: 'Ein paar Aktivitäten sowie Snacks und Getränke stehen für euch bereit.' },
      { time: '5:15 PM', what: 'Gemeinsame Fotos', note: 'Unser Host gibt euch Bescheid, wann ihr dran seid – so bekommt jeder ein Foto mit uns.' },
      { time: '6:00 PM', what: 'Abendessen', note: 'Es gibt ein Buffet, bei dem jeder etwas für sich findet.' },
      { time: '8:00 PM', what: 'Programm', note: 'Wir haben einen tollen Host, der Deutsch, Russisch und Estnisch spricht. Er sorgt dafür, dass wir alle auf derselben Wellenlänge sind!' },
      { time: '9:00 PM', what: 'Tortenzeit', note: 'Wir gehen nach draußen für ein paar Fotos und holen uns danach ein Stück Torte!' },
      { time: '9:30 PM', what: 'Party', note: 'Jetzt wird’s wild – habt Spaß!' },
    ],
    final: { what: 'Gute Nacht!', time: '3:00 AM', note: 'Schlaft gut und macht euch bereit für das Frühstück am nächsten Morgen.' },
  },

  pack: {
    heading: 'Was solltet ihr einpacken?',
    dressTitle: 'Dresscode',
    dress: "Wir würden uns freuen, wenn ihr Farben aus der Natur wählt – verschiedene Grün-, Braun-, Blau- und Beigetöne sowie sanfte Pastellfarben, wie zarte Rosa-, Flieder- oder Gelbtöne. Hauptsache, die Farben sind natürlich und harmonisch.",
    shoesTitle: 'Schuhwerk',
    shoes: 'Da wir mitten in der Natur feiern, empfehlen wir besonders den Ladies, auf geeignetes Schuhwerk zu achten – dünne oder hohe Absätze könnten etwas schwierig werden. Aber natürlich gilt: Wenn ihr trotzdem mit High Heels kommen möchtet, go for it! 👠',
    heartTitle: "Von Herzen:",
    heart: ["Das größte Geschenk für uns ist, diesen besonderen Tag mit euch zu teilen und gemeinsam Erinnerungen zu schaffen, die uns für immer bleiben. 🤍", "Wenn ihr uns zusätzlich eine Freude machen möchtet, freuen wir uns sehr über einen kleinen Beitrag zu unserem gemeinsamen Leben.", "Da wir alles aus Estland zurück nach Deutschland bringen müssen, bitten wir euch, auf Blumen, Deko und größere Geschenke zu verzichten. So können wir ganz unbeschwert feiern und müssen uns keine Gedanken darüber machen, wie wir all die schönen Dinge nach Hause bekommen. 🫶", "Danke, dass ihr Teil unserer Geschichte seid und diesen Tag mit so viel Liebe füllt! ✨"],
    photoAlt: 'Diana und Laurin umarmen sich auf einer Holztreppe vor dem Meer im Sonnenuntergang',
  },

  faq: {
    heading: 'Häufig gestellte Fragen',
    photoAlt: 'Diana und Laurin umarmen sich auf einer Holztreppe vor dem Meer im Sonnenuntergang',
    topics: [
      {
        title: 'Flüge',
        paras: [
          'Bitte bucht eure Flüge selbst. Wir empfehlen AirBaltic, LOT oder Finnair. Wir fliegen meistens mit AirBaltic – dort gibt es immer wieder Aktionen wie Cherry Sales, bei denen man gute Angebote finden kann.',
          'Von einigen Flughäfen fliegen auch Ryanair oder Wizz Air nach Tallinn. Von Hamburg aus bekommen wir mit AirBaltic oft Tickets für unter 160 € (hin & zurück).',
        ],
      },
      {
        title: 'Unterkunft',
        paras: [
          'Wir übernehmen die Übernachtung von Samstag auf Sonntag (10.–11.07.2027).',
          'Wer möchte, kann gerne noch von Sonntag auf Montag (11.–12.07.) bei uns vor Ort bleiben. Die Übernachtung ist auf eigene Kosten, wir holen dafür aber noch ein Angebot von der Location ein.',
          'Leider ist es nicht möglich, bereits am Tag davor bei uns vor Ort zu übernachten. Wir würden euch daher empfehlen, die Nacht davor in Tallinn zu verbringen und am 12.07. wieder nach Tallinn zu fahren und von dort aus noch andere Teile Estlands zu entdecken. Dafür haben wir euch auch eine kleine „Wo & was entdecken?“-Liste zusammengestellt.',
        ],
      },
      {
        title: 'Transportation',
        paras: [
          'Wir prüfen gerade, ob wir einen Bus organisieren können. Dafür müssen wir wissen, wie viele von euch Interesse haben – bitte gebt uns am Ende der Website kurz Bescheid. 🚌',
          'Es gibt auch lokale Busse in die Gegend – meldet euch dafür gerne bei Diana. Mietwagen sind ebenfalls eine günstige Option.',
        ],
      },
    ],
  },

  estonia: {
    heading: "Was ihr in Estland sehen?",
    intro: "Estland hat einiges zu bieten, besonders im Sommer – wenn die Sonne kaum schlafen geht und wir hoffentlich auch richtig sommerliche Temperaturen bekommen.",
    groupA: "Tallinn",
    groupB: "🌿 Ein bisschen weiter weg",
    mapLabel: "Auf der Karte öffnen",
    a: [
      { e: "🏰", name: "Altstadt", q: "Tallinn Old Town", img: "oldtown", text: "Mittelalterliche Gassen, versteckte Innenhöfe, alte Stadtmauern und gemütliche Cafés. Und schaut genau hin – vielleicht entdeckt ihr einige Ähnlichkeiten mit Lübeck!" },
      { e: "🌊", name: "Pirita-Strand", q: "Pirita Beach Tallinn", img: "pirita", text: "Ja, Estland hat auch Strände! Schnappt euch ein Eis, spaziert an der Ostsee entlang oder genießt einfach die Sonne und tut so, als wärt ihr am Mittelmeer." },
      { e: "🎨", name: "Telliskivi Kreativzentrum", q: "Telliskivi Creative City", img: "telliskivi", text: "Street Art, kleine Läden, coole Bars, Restaurants und eine leicht alternative Atmosphäre. Perfekt, um einfach herumzuschlendern und sich treiben zu lassen – ganz ohne Plan." },
      { e: "🌳", name: "Schloss & Park Kadriorg", q: "Kadriorg Palace", img: "kadriorg", text: "Ein wunderschönes Schloss, herrliche Gärten und der perfekte Ort für einen entspannten Sommerspaziergang." },
      { e: "🍺", name: "Põhjala Brauerei & Tap Room", q: "Põhjala Brewery Tap Room", img: "pohjala", text: "Für alle Bierliebhaber: Estnisches Craft Beer mit 24 Biersorten vom Fass. Wenn man schon mal in Estland ist …" },
      { e: "🧖", name: "Sauna & Meer – IGLUPARK", q: "Iglupark Tallinn", img: "sauna", text: "Probiert eine typisch estnische Sauna und springt danach direkt in die Ostsee. In Tallinn gibt es sogar Saunen direkt am Wasser!" },
      { e: "🍽️", name: "Olde Hansa", q: "Olde Hansa Tallinn", img: "oldehansa", text: "Lust auf eine kleine Zeitreise ins Mittelalter, ohne Tallinn zu verlassen? Dann seid ihr hier genau richtig! Mittelalterliche Speisen, Kerzenlicht, Kostüme und eine ziemlich dramatische Atmosphäre. Und probiert unbedingt die gebrannten Mandeln! 🐻 Wenn ihr wirklich etwas Ungewöhnliches probieren möchtet, könnt ihr hier sogar Bärenfleisch finden." },
      { e: "🍦", name: "Die Eiscreme-Mission im Supermarkt", q: "", img: "icecream", text: "Geht in irgendeinen Supermarkt, öffnet das Tiefkühlfach und stellt euch einer wichtigen Entscheidung. In Estland nimmt man Eis sehr ernst. Probiert euch durch verschiedene Sorten – am besten auch mehr als einmal." },
    ],
    b: [
      { e: "🏚️", name: "Gefängnis Rummu", q: "Rummu quarry", img: "rummu", text: "Ein verlassenes Gefängnis aus Sowjetzeiten, das teilweise in einem türkisblauen See versunken ist. Hier könnt ihr schwimmen, Stand-up-Paddling ausprobieren oder die ungewöhnliche Landschaft rund um die Ruinen erkunden." },
      { e: "🏰", name: "Haapsalu", q: "Haapsalu Castle", img: "haapsalu", text: "Ein kleines Küstenstädtchen mit einer Burg mitten im Zentrum. Schlendert entlang der Promenade, erkundet die kleinen Gassen und kehrt für etwas typisch Estnisches ein." },
      { e: "🎶", name: "Festival – I Land Sound", q: "I Land Sound Festival Saaremaa", img: "festival", text: "Vom 15. bis 17. Juli findet auf der Insel Saaremaa das I Land Sound Festival statt. Freut euch auf Musik, Kunst und eine besondere Atmosphäre mitten in der estnischen Natur!" },
      { e: "🌿", name: "Moorwanderung & Schwimmen im Viru-Moor", q: "Viru raba", img: "moor", text: "Ein echtes Naturerlebnis direkt vor den Toren Tallinns! Wandert über Holzstege durch die wunderschöne Moorlandschaft und springt ins dunkle Moorwasser. Besonders magisch bei Sonnenaufgang. Ja, wirklich!" },
    ],
  },

  tallinn: {
    word: 'Tallinn',
    heading: "Was, Wo, Wie?",
    photoAlt: 'Illustrierte Karte von Tallinn',
    bars: [
      { label: 'Wo in Tallinn schlafen', lines: ['Am besten in der Nähe von Kesklinn oder Kadriorg. Es ist direkt in der Stadt und Tallinn ist sehr gut zu Fuß erreichbar, sodass ihr eigentlich überall ganz einfach hinkommt.'] },
      { label: 'Wo frühstücken', lines: ["LouLou, NOP (vegan), Päris, Grenka"] },
      { label: 'Wo Kaffee trinken', lines: ['Brick, Röst, Katherinenthal, Karjase Sai, Pulla Bakery'] },
      { label: 'Wo essen', lines: ['Bruxx, Mimosa Bar, Sardiinid, Rataskaevu 16'] },
      { label: 'Wo etwas trinken', lines: ['Sigmund Freud, Sipsip Bar, Whisper Sister'] },
      { label: 'Wie kommt man herum', lines: ["Es gibt öffentliche Verkehrsmittel. Außerdem ist Carsharing mit Bolt ziemlich günstig – ca. 0,16 € pro Minute. Vom Flughafen kommt ihr direkt mit der Straßenbahn in die Stadt."] },
      { label: 'Tickets', lines: ["Die öffentlichen Verkehrsmittel sind einfach zu nutzen – ihr könnt direkt in Bus und Straßenbahn kontaktlos bezahlen."] },
      { label: 'Parken im Stadtzentrum', lines: ['Paadi tn 4, 10151 Tallinn – ca. 4 € pro Tag. Auf der anderen Seite des Zentrums gibt es Parkplätze für ca. 5–6 € / 24 h.'] },
    ],
    practicalHeading: 'Praktische Infos',
    practical: [
      { label: 'Ein paar Regeln', lines: ['Alkohol wird in Estland von 10–22 Uhr verkauft (Bars ausgenommen). Alkohol in der Öffentlichkeit zu trinken ist nicht erlaubt.'] },
      { label: 'Polizei', lines: ["Die Polizei ist etwas strenger als in Deutschland – also lieber keine Straße bei Rot überqueren, besonders wenn die Polizei zuschaut. 😄"] },
      { label: 'Trinkgeld', lines: ['Trinkgeld ist nicht verpflichtend, aber ca. 10 % sind üblich, wenn ihr mit dem Service zufrieden wart.'] },
    ],
  },

  rsvp: {
    heading: 'Zusagen & Antworten',
    line: 'Diese beiden Kids haben schon immer von diesem Tag geträumt – und ihr seid ein Teil dieses Traums.',
    contactHeading: 'Kontakt',
    note: 'Bitte antwortet im Formular. Dort bleiben Namen, Übernachtung, Essen und Anreise gespeichert.',
    cta: 'Zum Antwortformular',
  },

  footer: {
    kidsAlt: 'Gemaltes Bild: zwei lockige Kinder mit Blumenstrauß und einer kleinen Katze zwischen weißen Lilien',
    line: 'Diese beiden Kids haben schon immer von diesem Tag geträumt – und ihr seid ein Teil dieses Traums.',
    date: '10-07-2027 · Lainela Puhkeküla, Estonia',
    creditsLabel: 'Hintergrundfoto',
    creditsVia: 'via Wikimedia Commons',
  },
};

export type Dict = typeof de;
export default de;
