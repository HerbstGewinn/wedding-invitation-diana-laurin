import type { Dict } from './de';

const et: Dict = {
  lang: 'et',
  meta: {
    title: 'Laurin & Diana · 10-07-2027',
    description: 'Need lapsed abielluvad! Laurin & Diana, 10-07-2027, Lainela puhkeküla, Eesti.',
  },
  nav: { home: 'Kutse juurde', languages: 'Keel' },

  hero: {
    kicker: 'Need lapsed abielluvad!',
    names: 'Laurin & Diana',
    surname: 'Herbst',
    date: '10-07-2027',
    place: 'Lainela puhkeküla, Eesti',
    cta: 'Kinnita ja vasta',
    laurinAlt: 'Laurin väikese poisina, heledate lokkidega',
    dianaAlt: 'Diana väikese tüdrukuna, lokkide ja lillega',
    photoAlt: 'Kõrge roheline suvine heinamaa',
    countdown: {
      before: 'Veel',
      forms: { one: 'päev', other: 'päeva' },
      today: 'Täna on see päev!',
      past: 'Aitäh, et olite meiega!',
    },
    tabs: [
      { id: 'tag', label: 'Kava' },
      { id: 'location', label: 'Asukoht' },
      { id: 'einpacken', label: 'Kaasa' },
      { id: 'estland', label: 'Eesti' },
      { id: 'antworten', label: 'Vastus' },
    ],
  },

  story: {
    label: 'Meie lugu',
    tiles: [
      {
        img: 'us/hamburg.webp',
        w: 1640,
        h: 1230,
        alt: 'Laurin ja Diana naeravad vaateplatvormil Hamburgi sadama kohal',
        title: 'Esimene kohting',
        text: 'Väike pilguheit meie esimesele päris kohtingule – kui Laurin näitas mulle Reeperbahni.',
      },
      {
        img: 'us/tromso.webp',
        w: 1280,
        h: 1600,
        alt: 'Laurin ja Diana lumes fjordi kohal Tromsø lähedal, Diana näitab sõrmust',
        title: 'Ametlikult meie',
        text: 'Üllatusreis kaugele põhja, Tromsøsse – kus astusime suure sammu ühise pere poole.',
      },
    ],
  },

  location: {
    heading: 'Asukoht',
    sub: 'Lainela puhkeküla',
    rooms: 'Oleme toad juba ette ära jaganud, et sisseregistreerimine läheks kiiresti ja lihtsalt.',
    rows: [
      { label: 'Sisseregistreerimine', value: '14.00' },
      { label: 'Väljaregistreerimine', value: '11.00' },
    ],
    confirm: 'Kinnita 1 või 2 päeva',
    foodLabel: 'Söök',
    food: 'Pulmapäeva söök ja 11. kuupäeva hommikusöök on meie poolt. Pärast seda palume teil ise toidu eest hoolitseda. Lähedal on grillimiskoht ja pood. Restoran on 11. kuupäeval avatud, kuid esmaspäeval, 12. kuupäeval, suletud.',
  },

  day: {
    heading: 'Pulmapäev',
    intro:
      'Soovime, et teie päev oleks võimalikult rahulik ja muretu. Vaadake lihtsalt kava, et teaksite alati, mis parasjagu toimub. Ja kõige tähtsam: nautige!',
    day1Heading: '1. päev',
    day1: 'Esimene päev on meie suur pulmapäev – tähistame armastust ja seda, et kahest inimesest saab uus pere!',
    day2Heading: '2. päev',
    day2:
      'Järgmine päev: saun, tennis ja padel on valmis – ja otse mere ääres saame ka ujumas käia. Lihtsalt puhkame, mängime ja naudime pulmajärgset päeva täiesti rahulikult.',
    items: [
      { time: '14.00', what: 'Sisseregistreerimine', note: 'Oleme toad kõigile juba ette ära jaotanud. Tulge lihtsalt kohale ja võtke võtmed sissepääsu juurest.' },
      { time: '16.00', what: 'Laulatus', note: 'Palun olge kohal 15–20 minutit enne algust!' },
      { time: '16.30', what: 'Tervitusala', note: 'Teid ootavad mõned tegevused ning suupisted ja joogid.' },
      { time: '17.15', what: 'Ühised fotod', note: 'Õhtujuht annab teada, millal on teie kord – nii saab igaüks meiega pildi.' },
      { time: '18.00', what: 'Õhtusöök', note: 'Puhvetlaud, kust igaüks leiab midagi endale.' },
      { time: '20.00', what: 'Programm', note: 'Meil on suurepärane õhtujuht, kes räägib saksa, vene ja eesti keelt. Tema hoolitseb selle eest, et oleksime kõik ühel lainel!' },
      { time: '21.00', what: 'Tordiaeg', note: 'Läheme õue paar pilti tegema ja võtame siis igaüks tükikese torti!' },
      { time: '21.30', what: 'Pidu', note: 'Nüüd läheb lõbusaks – nautige!' },
    ],
    final: { what: 'Head ööd!', time: '03.00', note: 'Magage hästi ja olge valmis järgmise hommiku hommikusöögiks.' },
  },

  pack: {
    heading: 'Mida kaasa võtta?',
    dressTitle: 'Riietus',
    dress: 'Meil oleks hea meel, kui valiksite looduse värvid – erinevad rohelised toonid, pruun, sinine, beež ja muud looduslikud värvid.',
    shoesTitle: 'Jalanõud',
    shoes: 'Kuna peame pidu keset loodust, soovitame eriti daamidel valida sobivad jalanõud – peenikeste või kõrgete kontsadega võib olla veidi keeruline. Aga loomulikult: kui soovite siiski kontsakingadega tulla, siis julgelt! 👠',
    stayTitle: '🧳 Neile, kes jäävad kaheks päevaks',
    stayItems: ['🩱 Ujumisriided', '🏖️ Rätik', '🎾 Spordiriided', '👟 Mugavad jalanõud', '🧥 Midagi õhtuks'],
    gearTitle: 'Kohapeal',
    gear: 'Padeli- ja tennisevarustus on kohapeal olemas.',
    photoAlt: 'Diana ja Laurin embavad puittrepil mere ääres päikeseloojangul',
  },

  faq: {
    heading: 'Korduma kippuvad küsimused',
    photoAlt: 'Diana ja Laurin embavad puittrepil mere ääres päikeseloojangul',
    topics: [
      {
        title: 'Lennud',
        paras: [
          'Palun broneerige lennud ise. Soovitame AirBalticut, LOTi või Finnairi. Meie lendame enamasti AirBalticuga – seal on sageli kampaaniaid, näiteks Cherry Sales, kus leiab häid pakkumisi.',
          'Mõnest lennujaamast lendavad Tallinna ka Ryanair või Wizz Air. Hamburgist saame AirBalticuga sageli pileteid alla 160 € (edasi-tagasi).',
        ],
      },
      {
        title: 'Majutus',
        paras: [
          'Meie maksame öö laupäevast pühapäevani (10.–11.07.2027).',
          'Kes soovib, võib meiega kohapeal jääda ka ööks pühapäevast esmaspäevani (11.–12.07.). See öö on omal kulul, kuid küsime selleks veel majutuskohast pakkumise.',
          'Kahjuks ei ole võimalik juba eelmisel ööl kohapeal ööbida. Seetõttu soovitame veeta eelneva öö Tallinnas ning 12.07. Tallinnasse tagasi sõita ja sealt veel teisi Eesti paiku avastada. Selleks oleme teile koostanud ka väikese „Mida ja kus avastada?“ nimekirja.',
        ],
      },
      {
        title: 'Transport',
        paras: [
          'Uurime praegu, kas saame korraldada bussi. Selleks peame teadma, kui paljudel teist on huvi – palun andke meile lehe lõpus teada. 🚌',
          'Piirkonda sõidavad ka kohalikud bussid – selle kohta võite julgelt Dianalt küsida. Ka rendiauto on soodne variant.',
        ],
      },
    ],
  },

  estonia: {
    heading: 'Mida Eestis näha',
    intro:
      'Eestil on palju pakkuda, eriti suvel – kui päike peaaegu magama ei lähegi ja loodetavasti on ka päriselt soe. ☀️',
    groupA: '🌆 Tallinn',
    groupB: '🌿 Veidi kaugemal',
    mapLabel: 'Ava kaardil',
    a: [
      { e: '🏰', name: 'Old Town', q: 'Tallinn Old Town', img: 'oldtown', text: 'Keskaegsed tänavad, peidetud hoovid, vanad linnamüürid ja hubased kohvikud. Ja vaadake hoolega – võib-olla märkate üsna palju sarnasusi Lübeckiga.' },
      { e: '🎨', name: 'Telliskivi Creative City', q: 'Telliskivi Creative City', img: 'telliskivi', text: 'Tänavakunst, väikesed poed, lahedad baarid, restoranid ja kergelt alternatiivne õhkkond. Ideaalne, et ilma kindla plaanita ringi jalutada.' },
      { e: '🌊', name: 'Pirita Beach', q: 'Pirita Beach Tallinn', img: 'pirita', text: 'Jah, Eestis on randu! Võtke jäätist, jalutage mööda Läänemere randa või lihtsalt nautige päikest ja kujutage ette, et olete Vahemere ääres. 🏖️' },
      { e: '🌳', name: 'Kadriorg Palace & Park', q: 'Kadriorg Palace', img: 'kadriorg', text: 'Kaunis loss, toredad aiad ja ideaalne koht rahulikuks suvejalutuskäiguks.' },
      { e: '🍺', name: 'Põhjala Brewery & Tap Room', q: 'Põhjala Brewery Tap Room', img: '', text: 'Õllesõpradele: Eesti käsitööõlu ja 24 õlut kraanist. When in Estonia … 🍻' },
      { e: '🧖', name: 'Sauna & Sea', q: 'sea sauna Tallinn', img: 'sauna', text: 'Proovige õiget Eesti sauna ja hüpake siis otse Läänemerre. Tallinnas on isegi saunu otse vee ääres. 🔥🌊' },
      { e: '🍽️', name: 'Olde Hansa', q: 'Olde Hansa Tallinn', img: 'oldehansa', text: 'Tahaksite rännata keskaega ilma Tallinnast lahkumata? Siis olete õiges kohas. Keskaegne toit, küünlad, kostüümid ja väga dramaatiline õhkkond. Ja ärge lahkuge enne, kui olete proovinud nende röstitud mandleid! 🐻 Kui tahate proovida midagi tõeliselt ebatavalist, leiate siit isegi karuliha.' },
      { e: '🥤', name: 'Kali', q: '', img: '', text: 'Väga eestilik jook – kuskil leiva, õlle ja limonaadi vahepeal, aga ilma alkoholita. Kõlab veidralt. Maitseb üllatavalt hästi. Kõige parem külmalt.' },
      { e: '🍦', name: 'The Supermarket Ice Cream Mission', q: '', img: 'icecream', text: 'Minge ükskõik millisesse supermarketisse, avage sügavkülmik ja valmistuge tähtsaks otsuseks. Eestis võetakse jäätist väga tõsiselt. Proovige mitut erinevat – soovitavalt rohkem kui korra. 😌' },
    ],
    b: [
      { e: '🏚️', name: 'Rummu Prison', q: 'Rummu quarry', img: 'rummu', text: 'Mahajäetud nõukogude vangla, mille on osaliselt endasse neelanud erk türkiissinine järv. Võite ujuda, SUP-lauaga sõita või avastada varemete ümber olevat veidrat maastikku.' },
      { e: '🌿', name: 'Bog Swimming at Soomaa', q: 'Soomaa National Park', img: 'soomaa', text: 'Üks kõige eestilikumaid elamusi: rabas ujumine. Päikesetõusul veel parem. Jah, päriselt. 🫧' },
      { e: '🏰', name: 'Haapsalu', q: 'Haapsalu Castle', img: 'haapsalu', text: 'Väike mereäärne linn, mille keskel on linnus. Jalutage promenaadil, avastage väikesi tänavaid ja peatuge, et midagi kohalikku süüa.' },
    ],
  },

  tallinn: {
    word: 'Tallinn',
    heading: 'Mis, kus ja kuidas?',
    photoAlt: 'Tallinna illustreeritud kaart',
    bars: [
      { label: 'Kus Tallinnas ööbida', lines: ['Kõige parem Kesklinna või Kadrioru lähedal. See on otse linnas ja Tallinnas saab väga hästi jalgsi liikuda, nii et jõuate tegelikult igale poole lihtsalt.'] },
      { label: 'Kus hommikust süüa', lines: ['LouLou, NOP (vegan)'] },
      { label: 'Kus kohvi juua', lines: ['Brick, Röst, Katherinenthal, Karjase Sai, Pulla Bakery'] },
      { label: 'Kus süüa', lines: ['Bruxx, Mimosa Bar, Sardiinid, Rataskaevu 16'] },
      { label: 'Kus midagi juua', lines: ['Sigmund Freud, Sipsip Bar, Whisper Sister'] },
      { label: 'Kuidas liikuda', lines: ['Ühistransport on olemas. Lisaks on Bolti autojagamine üsna soodne – umbes 0,16 € minut. Lennujaamast saate trammiga otse linna.'] },
      { label: 'Piletid', lines: ['Ühistransporti on lihtne kasutada – saate bussis ja trammis otse kontaktivabalt maksta.'] },
      { label: 'Parkimine kesklinnas', lines: ['Paadi tn 4, 10151 Tallinn – umbes 4 € päevas. Teisel pool kesklinna on parklad umbes 5–6 € / 24 h.'] },
    ],
    practicalHeading: 'Praktiline info',
    practical: [
      { label: 'Mõned reeglid', lines: ['Alkoholi müüakse Eestis kella 10–22 (baarid välja arvatud). Avalikus kohas alkoholi joomine ei ole lubatud.'] },
      { label: 'Politsei', lines: ['Politsei on veidi rangem kui Saksamaal – nii et parem ärge ületage teed punase tulega, eriti kui politsei vaatab. 😄'] },
      { label: 'Jootraha', lines: ['Jootraha ei ole kohustuslik, aga umbes 10 % on tavaline, kui olite teenindusega rahul.'] },
    ],
  },

  rsvp: {
    heading: 'Kinnita ja vasta',
    line: 'Need kaks last on alati sellest päevast unistanud – ja teie olete osa sellest unenäost.',
    contactHeading: 'Kontakt',
    attend: {
      label: 'Kas saad tulla?',
      yes: 'Jah, tulen!',
      no: 'Kahjuks ma ei saa tulla.',
    },
    names: { label: 'Kuidas on osalejate nimed?', placeholder: 'Ees- ja perekonnanimi', labelNo: 'Mis on sinu nimi?' },
    stay: {
      label: 'Kui kauaks jääd?',
      hint: 'Öö 10. vastu 11.07. on meie poolt.',
      one: '10.–11.07. (üks öö)',
      two: '10.–12.07. (kaks ööd)',
    },
    food: {
      label: 'Toidueelistused',
      hint: 'Allergiate korral palun märgi need „Muu“ alla.',
      none: 'Erisoove pole',
      veggie: 'Taimetoit',
      other: 'Muu',
      otherPlaceholder: 'nt allergiad',
    },
    transfer: {
      label: 'Kas vajad abi asukohta jõudmisel?',
      hint: 'Uurime praegu ühise transfeeri võimalusi. Kui vajad abi kohale jõudmisel, anna meile palun teada, et saaksime paremini planeerida. Kas saame bussi korraldada ja mis see maksab, pole veel selge.',
      yes: 'Jah',
      no: 'Ei',
    },
    submit: 'Saada vastus 💌',
    sending: 'Saadan …',
    thanksYes: { title: 'Aitäh!', text: 'Teie vastus jõudis kohale.' },
    thanksNo: { title: 'Aitäh!', text: 'Sinu vastus jõudis kohale.' },
    again: 'Saada veel üks vastus',
    error: 'Kahjuks ei õnnestunud. Proovi uuesti või kasuta',
    errorLink: 'vormi otse',
  },

  footer: {
    kidsAlt: 'Maalitud pilt: kaks lokkis last lillekimbu ja kassipojaga valgete liiliate vahel',
    line: 'Need kaks last on alati sellest päevast unistanud – ja teie olete osa sellest unenäost.',
    date: '10-07-2027 · Lainela puhkeküla, Eesti',
    creditsLabel: 'Taustafoto',
    creditsVia: 'Wikimedia Commonsi kaudu',
  },
};

export default et;
