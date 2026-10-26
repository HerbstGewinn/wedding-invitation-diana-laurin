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
    dress: "Meil oleks hea meel, kui valiksite looduse värvid – erinevad rohelised, pruunid, sinised ja beežid toonid ning pehmed pastelltoonid, nagu õrn roosa, lilla või kollane. Peaasi, et värvid oleksid looduslikud ja harmoonilised.",
    shoesTitle: 'Jalanõud',
    shoes: 'Kuna peame pidu keset loodust, soovitame eriti daamidel valida sobivad jalanõud – peenikeste või kõrgete kontsadega võib olla veidi keeruline. Aga loomulikult: kui soovite siiski kontsakingadega tulla, siis julgelt! 👠',
    heartTitle: "Südamest:",
    heart: ["Suurim kingitus meile on jagada seda erilist päeva teiega ja luua koos mälestusi, mis jäävad meiega igaveseks. 🤍", "Kui soovite meile lisaks rõõmu valmistada, oleme väga tänulikud väikese panuse eest meie ühisesse ellu.", "Kuna peame kõik Eestist tagasi Saksamaale viima, palume teil loobuda lilledest, dekoratsioonidest ja suurematest kingitustest. Nii saame muretult pidu pidada ega pea muretsema, kuidas kõik need ilusad asjad koju saada. 🫶", "Aitäh, et olete osa meie loost ja täidate selle päeva nii suure armastusega! ✨"],
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
    heading: "Mida Eestis näha?",
    intro: "Eestil on palju pakkuda, eriti suvel – kui päike peaaegu magama ei lähegi ja loodetavasti saame ka päris suviseid temperatuure.",
    groupA: "Tallinn",
    groupB: "🌿 Veidi kaugemal",
    mapLabel: "Ava kaardil",
    a: [
      { e: "🏰", name: "Vanalinn", q: "Tallinn Old Town", img: "oldtown", text: "Keskaegsed tänavad, peidetud hoovid, vanad linnamüürid ja hubased kohvikud. Ja vaadake hoolega – võib-olla märkate mõningaid sarnasusi Lübeckiga!" },
      { e: "🌊", name: "Pirita rand", q: "Pirita Beach Tallinn", img: "pirita", text: "Jah, Eestis on ka randu! Võtke jäätis, jalutage mööda Läänemere randa või nautige lihtsalt päikest ja kujutage ette, et olete Vahemere ääres." },
      { e: "🎨", name: "Telliskivi Loomelinnak", q: "Telliskivi Creative City", img: "telliskivi", text: "Tänavakunst, väikesed poed, lahedad baarid, restoranid ja kergelt alternatiivne õhkkond. Ideaalne, et lihtsalt ringi jalutada ja end voolul kanda lasta – täiesti ilma plaanita." },
      { e: "🌳", name: "Kadrioru loss ja park", q: "Kadriorg Palace", img: "kadriorg", text: "Kaunis loss, imelised aiad ja ideaalne koht rahulikuks suvejalutuskäiguks." },
      { e: "🍺", name: "Põhjala pruulikoda & Tap Room", q: "Põhjala Brewery Tap Room", img: "pohjala", text: "Kõigile õllesõpradele: Eesti käsitööõlu ja 24 õlut kraanist. Kui juba Eestis olla …" },
      { e: "🧖", name: "Saun ja meri – IGLUPARK", q: "Iglupark Tallinn", img: "sauna", text: "Proovige ehtsat Eesti sauna ja hüpake siis otse Läänemerre. Tallinnas on isegi saunu otse vee ääres!" },
      { e: "🍽️", name: "Olde Hansa", q: "Olde Hansa Tallinn", img: "oldehansa", text: "Tahate teha väikese ajarännaku keskaega ilma Tallinnast lahkumata? Siis olete täpselt õiges kohas! Keskaegsed toidud, küünlavalgus, kostüümid ja üsna dramaatiline õhkkond. Ja proovige kindlasti röstitud mandleid! 🐻 Kui tahate proovida midagi tõeliselt ebatavalist, leiate siit isegi karuliha." },
      { e: "🍦", name: "Jäätisemissioon supermarketis", q: "", img: "icecream", text: "Minge ükskõik millisesse supermarketisse, avage sügavkülmik ja tehke tähtis otsus. Eestis võetakse jäätist väga tõsiselt. Proovige erinevaid maitseid – soovitavalt rohkem kui korra." },
    ],
    b: [
      { e: "🏚️", name: "Rummu vangla", q: "Rummu quarry", img: "rummu", text: "Mahajäetud nõukogudeaegne vangla, mis on osaliselt vajunud türkiissinisesse järve. Siin saab ujuda, proovida SUP-lauaga sõitmist või avastada varemete ümbruse ebatavalist maastikku." },
      { e: "🏰", name: "Haapsalu", q: "Haapsalu Castle", img: "haapsalu", text: "Väike mereäärne linnake, mille keskel on linnus. Jalutage mööda promenaadi, avastage väikesi tänavaid ja peatuge, et süüa midagi tüüpiliselt eestilikku." },
      { e: "🎶", name: "Festival – I Land Sound", q: "I Land Sound Festival Saaremaa", img: "festival", text: "15.–17. juulini toimub Saaremaal I Land Soundi festival. Oodata on muusikat, kunsti ja erilist õhkkonda keset Eesti loodust!" },
      { e: "🌿", name: "Rabamatk ja ujumine Viru rabas", q: "Viru raba", img: "moor", text: "Tõeline loodusseiklus otse Tallinna väravate taga! Jalutage laudteel läbi kauni rabamaastiku ja hüpake tumedasse rabavette. Eriti maagiline päikesetõusul. Jah, päriselt!" },
    ],
  },

  tallinn: {
    word: 'Tallinn',
    heading: "Mis, kus ja kuidas?",
    photoAlt: 'Tallinna illustreeritud kaart',
    bars: [
      { label: 'Kus Tallinnas ööbida', lines: ['Kõige parem Kesklinna või Kadrioru lähedal. See on otse linnas ja Tallinnas saab väga hästi jalgsi liikuda, nii et jõuate tegelikult igale poole lihtsalt.'] },
      { label: 'Kus hommikust süüa', lines: ["LouLou, NOP (vegan), Päris, Grenka"] },
      { label: 'Kus kohvi juua', lines: ['Brick, Röst, Katherinenthal, Karjase Sai, Pulla Bakery'] },
      { label: 'Kus süüa', lines: ['Bruxx, Mimosa Bar, Sardiinid, Rataskaevu 16'] },
      { label: 'Kus midagi juua', lines: ['Sigmund Freud, Sipsip Bar, Whisper Sister'] },
      { label: 'Kuidas liikuda', lines: ["Ühistransport on olemas. Lisaks on Bolti autojagamine üsna soodne – umbes 0,16 € minut. Lennujaamast saate trammiga otse linna."] },
      { label: 'Piletid', lines: ["Ühistransporti on lihtne kasutada – bussis ja trammis saate maksta otse kontaktivabalt."] },
      { label: 'Parkimine kesklinnas', lines: ['Paadi tn 4, 10151 Tallinn – umbes 4 € päevas. Teisel pool kesklinna on parklad umbes 5–6 € / 24 h.'] },
    ],
    practicalHeading: 'Praktiline info',
    practical: [
      { label: 'Mõned reeglid', lines: ['Alkoholi müüakse Eestis kella 10–22 (baarid välja arvatud). Avalikus kohas alkoholi joomine ei ole lubatud.'] },
      { label: 'Politsei', lines: ["Politsei on veidi rangem kui Saksamaal – nii et parem ärge ületage teed punase tulega, eriti kui politsei vaatab. 😄"] },
      { label: 'Jootraha', lines: ['Jootraha ei ole kohustuslik, aga umbes 10 % on tavaline, kui olite teenindusega rahul.'] },
    ],
  },

  rsvp: {
    heading: 'Kinnita ja vasta',
    line: 'Need kaks last on alati sellest päevast unistanud – ja teie olete osa sellest unenäost.',
    contactHeading: 'Kontakt',
    note: 'Palun vasta vormis. Sinna jäävad nimed, ööbimine, toit ja kohalejõudmine.',
    cta: 'Vasta vormis',
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
