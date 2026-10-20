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
    place: 'Lainela Puhkeküla, Estland',
    cta: 'Zusagen & Antworten',
    laurinAlt: 'Laurin als kleiner Junge mit blonden Locken',
    dianaAlt: 'Diana als kleines Mädchen mit Locken und einer Blume',
    photoAlt: 'Ostseeufer bei Käsmu mit Gras und Findlingen im Wasser',
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
        w: 820,
        h: 615,
        alt: 'Laurin und Diana lachend auf einer Aussichtsplattform über dem Hamburger Hafen',
        title: 'First Date',
        text: 'Ein kleiner Einblick in unser erstes richtiges Date – bei dem Laurin mir die Reeperbahn gezeigt hat.',
      },
      {
        img: 'us/tromso.webp',
        w: 461,
        h: 615,
        alt: 'Laurin und Diana im Schnee über dem Fjord bei Tromsø, Diana zeigt ihren Ring',
        title: 'Official us',
        text: 'Eine Überraschungsreise in den hohen Norden nach Tromsø – wo wir uns einen großen Schritt näher Richtung gemeinsame Familie bewegt haben.',
      },
    ],
  },

  location: {
    heading: 'Location',
    sub: 'Lainela Puhkeküla',
    address: ['Lainela tn 1, Käsmu küla', 'Lääne-Virumaa, Estland'],
    rooms: 'Wir haben die Zimmer bereits im Voraus aufgeteilt, damit der Check-in schnell und unkompliziert läuft.',
    rows: [
      { label: 'Check-in', value: '14:00 Uhr' },
      { label: 'Check-out', value: '11:00 Uhr' },
    ],
    confirm: '1 oder 2 Tage bestätigen',
    foodLabel: 'Essen',
    food: 'Das Essen am Hochzeitstag sowie das Frühstück am 11. übernehmen wir. Danach bitten wir euch, euch selbst zu versorgen. Es gibt einen Grillplatz und einen Laden in der Nähe. Das Restaurant ist am 11. geöffnet, am Montag, den 12., jedoch geschlossen.',
    cta: 'Route öffnen',
    photoAlt: 'Luftbild von Käsmu mit Hafen, Häusern im Grünen und Steinen im Meer',
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
    slip1Title: 'Samstag, 10.07.',
    items: [
      { time: '14:00', what: 'Einchecken & Zimmer beziehen', note: 'Wir haben die Zimmer bereits für alle vorab eingeteilt. Kommt einfach an und holt eure Schlüssel am Eingang ab.' },
      { time: '16:00', what: 'Trauung', note: 'Bitte seid 15–20 Minuten vor Beginn da!' },
      { time: '16:30', what: 'Welcome Area', note: 'Ein paar Aktivitäten sowie Snacks und Getränke stehen für euch bereit.' },
      { time: '17:15', what: 'Gemeinsame Fotos', note: 'Unser Host gibt euch Bescheid, wann ihr dran seid – so bekommt jeder ein Foto mit uns.' },
      { time: '18:00', what: 'Abendessen', note: 'Es gibt ein Buffet, bei dem jeder etwas für sich findet.' },
      { time: '20:00', what: 'Programm', note: 'Wir haben einen tollen Host, der Deutsch, Russisch und Estnisch spricht. Er sorgt dafür, dass wir alle auf derselben Wellenlänge sind!' },
      { time: '21:00', what: 'Tortenzeit', note: 'Wir gehen nach draußen für ein paar Fotos und holen uns danach ein Stück Torte!' },
      { time: '21:30', what: 'Party', note: 'Jetzt wird’s wild – habt Spaß!' },
    ],
    final: { what: 'Gute Nacht!', time: '03:00', note: 'Schlaft gut und macht euch bereit für das Frühstück am nächsten Morgen.' },
    slip2Title: 'Sonntag, 11.07.',
    items2: [
      { what: 'Frühstück', value: 'übernehmen wir' },
      { what: 'Sauna, Tennis & Padel', value: 'stehen bereit' },
      { what: 'Schwimmen', value: 'direkt am Meer' },
    ],
    final2: { what: 'Check-out', time: '11:00' },
  },

  pack: {
    heading: 'Was solltet ihr einpacken?',
    dressTitle: 'Dresscode',
    dress: 'Wir würden uns freuen, wenn ihr Farben aus der Natur wählt – verschiedene Grüntöne, Braun, Blau, Beige und andere Naturfarben.',
    shoesTitle: 'Schuhwerk',
    shoes: 'Da wir mitten in der Natur feiern, empfehlen wir besonders den Ladies, auf geeignetes Schuhwerk zu achten – dünne oder hohe Absätze könnten etwas schwierig werden. Aber natürlich gilt: Wenn ihr trotzdem mit High Heels kommen möchtet, go for it! 👠',
    stayTitle: 'Für alle, die 2 Tage bleiben',
    stayItems: ['Badesachen', 'Handtuch', 'Sportsachen', 'Bequeme Schuhe', 'Etwas für den Abend'],
    gearTitle: 'Vor Ort',
    gear: 'Paddle- und Tennis-Ausrüstung wird vor Ort bereitgestellt.',
    photoAlt: 'Große Findlinge im ruhigen Wasser bei Käsmu in der Abendsonne',
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
    heading: 'Was ihr in Estland sehen solltet',
    intro:
      'Estland hat viel zu bieten, besonders im Sommer – wenn die Sonne kaum schlafen geht und es hoffentlich so richtig warm wird. ☀️',
    groupA: 'Tallinn',
    groupB: 'Etwas weiter weg',
    mapLabel: 'Auf der Karte öffnen',
    a: [
      { name: 'Old Town', q: 'Tallinn Old Town', img: 'town-hall-square-tallinn-july-2022', text: 'Mittelalterliche Gassen, versteckte Innenhöfe, alte Stadtmauern und gemütliche Cafés. Und schaut genau hin – vielleicht entdeckt ihr einige Ähnlichkeiten zu Lübeck.' },
      { name: 'Telliskivi Creative City', q: 'Telliskivi Creative City', img: 'telliskivi-creative-city', text: 'Street Art, kleine Läden, coole Bars, Restaurants und ein leicht alternativer Vibe. Perfekt, um ohne richtigen Plan herumzuschlendern.' },
      { name: 'Pirita Beach', q: 'Pirita Beach Tallinn', img: 'pirita-beach-7759546582', text: 'Ja, Estland hat Strände! Holt euch ein Eis, spaziert an der Ostsee entlang oder genießt einfach die Sonne und tut so, als wärt ihr am Mittelmeer. 🏖️' },
      { name: 'Kadriorg Palace & Park', q: 'Kadriorg Palace', img: 'palacio-de-kadriorg-tallinn-estonia-2012-08', text: 'Ein wunderschönes Schloss, schöne Gärten und der perfekte Ort für einen entspannten Sommerspaziergang.' },
      { name: 'Põhjala Brewery & Tap Room', q: 'Põhjala Brewery Tap Room', img: 'pohjala-brewery-tap-room-6-marke-saaremets', text: 'Für die Bierliebhaber: estnisches Craft Beer mit 24 Bieren vom Fass. When in Estonia … 🍻' },
      { name: 'Sauna & Sea', q: 'sea sauna Tallinn', img: 'leil-in-an-estonian-smoke-sauna', text: 'Probiert eine richtige estnische Sauna und springt danach direkt in die Ostsee. In Tallinn gibt es sogar Saunen direkt am Wasser. 🔥🌊' },
      { name: 'Olde Hansa', q: 'Olde Hansa Tallinn', img: 'olde-hansa-2006-01', text: 'Lust auf eine Zeitreise ins Mittelalter, ohne Tallinn zu verlassen? Dann seid ihr hier richtig. Mittelalterliches Essen, Kerzen, Kostüme und eine sehr dramatische Atmosphäre. Und geht nicht, ohne die gerösteten Mandeln probiert zu haben! 🐻 Wer etwas wirklich Ungewöhnliches probieren möchte, findet hier sogar Bärenfleisch.' },
      { name: 'Kali', q: '', img: '', text: 'Ein sehr estnisches Getränk – irgendwo zwischen Brot, Bier und Limo, aber ohne Alkohol. Klingt komisch. Schmeckt überraschend gut. Am besten kalt.' },
      { name: 'The Supermarket Ice Cream Mission', q: '', img: '', text: 'Geht in irgendeinen Supermarkt, öffnet die Tiefkühltruhe und macht euch bereit für eine wichtige Entscheidung. Estland nimmt Eis sehr ernst. Probiert ein paar verschiedene – am besten mehr als einmal. 😌' },
    ],
    b: [
      { name: 'Rummu Prison', q: 'Rummu quarry', img: 'rummu-quarry', text: 'Ein verlassenes sowjetisches Gefängnis, teilweise von einem leuchtend türkisen See verschluckt. Ihr könnt schwimmen, Stand-up-Paddeln oder die seltsame Landschaft rund um die Ruinen erkunden.' },
      { name: 'Bog Swimming at Soomaa', q: 'Soomaa National Park', img: 'riisa-raba-varahommikul', text: 'Eines der estnischsten Erlebnisse überhaupt: Schwimmen im Moor. Bei Sonnenaufgang noch schöner. Ja, wirklich. 🫧' },
      { name: 'Haapsalu', q: 'Haapsalu Castle', img: 'haapsalu-linnus-2022-aasta-suvel', text: 'Eine kleine Stadt am Meer mit einer Burg mitten im Zentrum. Spaziert über die Promenade, erkundet die kleinen Gassen und esst unterwegs etwas Lokales.' },
    ],
  },

  tallinn: {
    word: 'Tallinn',
    heading: 'Was, Wo & Wie?',
    photoAlt: 'Tallinner Altstadt mit Kirchtürmen im Morgennebel',
    bars: [
      { label: 'Wo in Tallinn schlafen', lines: ['Am besten in der Nähe von Kesklinn oder Kadriorg. Es ist direkt in der Stadt und Tallinn ist sehr gut zu Fuß erreichbar, sodass ihr eigentlich überall ganz einfach hinkommt.'] },
      { label: 'Wo frühstücken', lines: ['LouLou, NOP (vegan)'] },
      { label: 'Wo Kaffee trinken', lines: ['Brick, Röst, Katherinenthal, Karjase Sai, Pulla Bakery'] },
      { label: 'Wo essen', lines: ['Bruxx, Mimosa Bar, Sardiinid, Rataskaevu 16'] },
      { label: 'Wo etwas trinken', lines: ['Sigmund Freud, Sipsip Bar, Whisper Sister'] },
      { label: 'Wie kommt man herum', lines: ['Es gibt öffentliche Verkehrsmittel. Außerdem ist Carsharing mit Bolt ziemlich günstig – ca. 0,16 € pro Minute. Vom Flughafen kommt ihr direkt mit der Straßenbahn in die Stadt.'] },
      { label: 'Tickets', lines: ['Die öffentlichen Verkehrsmittel sind einfach zu nutzen – ihr könnt direkt in Bus und Straßenbahn kontaktlos bezahlen.'] },
      { label: 'Parken im Stadtzentrum', lines: ['Paadi tn 4, 10151 Tallinn – ca. 4 € pro Tag. Auf der anderen Seite des Zentrums gibt es Parkplätze für ca. 5–6 € / 24 h.'] },
    ],
    practicalHeading: 'Praktische Infos',
    practical: [
      { label: 'Ein paar Regeln', lines: ['Alkohol wird in Estland von 10–22 Uhr verkauft (Bars ausgenommen). Alkohol in der Öffentlichkeit zu trinken ist nicht erlaubt.'] },
      { label: 'Polizei', lines: ['Die Polizei ist etwas strenger als in Deutschland – also lieber keine Straße bei Rot überqueren, besonders wenn die Polizei zuschaut. 😄'] },
      { label: 'Trinkgeld', lines: ['Trinkgeld ist nicht verpflichtend, aber ca. 10 % sind üblich, wenn ihr mit dem Service zufrieden wart.'] },
    ],
  },

  rsvp: {
    heading: 'Zusagen & Antworten',
    line: 'Diese lockigen Kids sind schon ganz aufgeregt!',
    contactHeading: 'Kontakt',
    attend: {
      label: 'Kannst du dabei sein?',
      yes: 'Ja, ich bin dabei!',
      no: 'Nein, ich kann leider nicht dabei sein.',
    },
    names: { label: 'Wie heißen die Personen, die teilnehmen?', placeholder: 'Vor- und Nachnamen', labelNo: 'Wie heißt du?' },
    stay: {
      label: 'Wie lange bleibst du?',
      hint: 'Die Übernachtung vom 10. auf den 11.07. übernehmen wir.',
      one: '10.–11.07. (eine Nacht)',
      two: '10.–12.07. (zwei Nächte)',
    },
    food: {
      label: 'Essensvorlieben',
      hint: 'Bei bestimmten Allergien bitte unter „Anderes“ angeben.',
      none: 'Keine besonderen Wünsche',
      veggie: 'Vegetarisch',
      other: 'Anderes',
      otherPlaceholder: 'z. B. Allergien',
    },
    transfer: {
      label: 'Brauchst du Hilfe bei der Anreise zur Location?',
      hint: 'Wir prüfen aktuell die Möglichkeiten für einen gemeinsamen Transfer. Falls du Unterstützung bei der Anreise brauchst, gib uns bitte Bescheid, damit wir besser planen können. Ob wir einen Bus organisieren können und zu welchen Kosten, steht noch nicht fest.',
      yes: 'Ja',
      no: 'Nein',
    },
    submit: 'Antwort senden 💌',
    sending: 'Wird gesendet …',
    thanksYes: { title: 'Danke!', text: 'Eure Antwort ist angekommen.' },
    thanksNo: { title: 'Danke!', text: 'Deine Antwort ist angekommen.' },
    again: 'Weitere Antwort senden',
    error: 'Das hat leider nicht geklappt. Versuch es noch einmal oder nutze',
    errorLink: 'das Formular direkt',
  },

  footer: {
    kidsAlt: 'Gemaltes Bild: zwei lockige Kinder mit Blumenstrauß und einer kleinen Katze zwischen weißen Lilien',
    line: 'Diese lockigen Kids sind schon ganz aufgeregt!',
    date: '10-07-2027 · Lainela Puhkeküla, Estland',
    creditsLabel: 'Fotos von Estland',
    creditsVia: 'via Wikimedia Commons',
  },
};

export type Dict = typeof de;
export default de;
