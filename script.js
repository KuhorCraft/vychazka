// Data pro jednotlivá zastavení s rozšiřujícími texty
const stationsData = [
    {
        number: 1,
        title: "Zastavení 1: Radičova – Vila Tomia Okamury",
        text: [
            "Tato stavba představuje novodobou architektonickou kontroverzi i unikát. Autorem návrhu je světoznámý švýcarský architekt Christian Kerez, pro něhož je typické hledání nových konstrukčních principů a forem.",
            "Design objektu je tvořen shlukem 39 kruhových betono-cihlových tubusů různých průměrů a výšek, které vytvářejí nepravidelnou prostorovou kompozici. Uvnitř se nacházejí tři samostatné mezonetové byty.",
            "Schvalovací a povolovací proces trval řadu let. Příslušné úřady i sousedé zpočátku stavbu odmítali kvůli neobvyklému tvaru a měřítku vůči okolní zástavbě. Dnes vila patří k nejdiskutovanějším moderním soukromým rezidencím v Praze."
        ],
        photos: ["media/tomio1.jpg", "media/tomio2.jpg", "media/tomio3.jpg"] // Zde přidejte cesty k fotkám, např.: ["foto1_1.jpg", "foto1_2.jpg"]
    },
    {
        number: 2,
        title: "Zastavení 2: Památková zóna Tejnka",
        text: [
            "Tejnka byla původně samostatná venkovská osada Břevnova, která historicky vznikla kolem poplužního dvora patřícího Břevnovskému klášteru. V roce 2003 byla tato oblast prohlášena Městskou památkovou zónou.",
            "Oblast si dodnes zachovala svůj typický venkovský charakter s původním historickým rastrem uliček, malebnými domky, bývalými hospodářskými usedlostmi a drobnými zahradami.",
            "Název Tejnka je odvozen od starších vinic a dvorců. V blízkém okolí se nacházely známé usedlosti jako Liborka nebo Závěrka."
        ],
        photos: ["media/tejnka1.jpg", "media/tejnka2.jpg", "media/tejnka3.jpg", "media/tejnka4.jpg"] // Zde přidejte cesty k fotkám, např.: ["foto2_1.jpg", "foto2_2.jpg"]
    },
    {
        number: 3,
        title: "Zastavení 3: Břevnovské Plivátko (Park Smiřického)",
        text: [
            "Park Smiřického (známý také jako Břevnovské Plivátko) se nachází v Praze-Břevnově na Strahově v prostoru mezi ulicemi Diskařská, Maratónská a Smiřického.",
            "Původně zde po několik desetiletí fungovalo dětské brouzdaliště. Protože bylo malé a mělo jen velmi malou hloubku vody, místní obyvatelé mu začali říkat „Plivátko“. Svému původnímu účelu přestalo sloužit v polovině 80. let 20. století a místo dlouho chátralo."
        ],
        photos: ["media/plivatko2.png", "media/plivatko1.png"] // Zde přidejte cesty k fotkám, např.: ["foto3_1.jpg", "foto3_2.jpg"]
    },
    {
        number: 4,
        title: "Zastavení 4: Park Královka",
        text: [
            "Park Královka slouží jako klidová zóna Břevnova. Nachází se zde udržovaná zelená oáza s dětskými hřišti a malým rybníčkem situovaným u Malovanky.",
            "Historický název místa odkazuje na dřívější pole a usedlosti spojené s Královskou oborou a panovnickým majetkem. Místo tvoří přirozenou přechodovou hranici mezi obytnou částí Břevnova a hradčanským návrším."
        ],
        photos: ["media/kralovka1.png", "media/kralovka2.png", "media/kralovka3.png", "media/kralovka4.png"] // Zde přidejte cesty k fotkám, např.: ["foto4_1.jpg", "foto4_2.jpg"]
    },
    {
        number: 5,
        title: "Zastavení 5: Tramvajové točny (Královka & Dlabačov)",
        text: [
            "Tato dvě rozsáhlá tramvajová obratiště byla vybudována pro Všesokolský slet roku 1948 a následně sloužila pro zvládnutí náporu návštěvníků během Československých spartakiád na Strahovském stadionu.",
            "Smyčka Dlabačov dokázala pojmout a deponovat desítky tramvají současně, aby zajistila plynulý odvoz tisíců cvičenců i diváků zpět směrem do centra města.",
            "Pro snadnější orientaci davů se používalo barevné rozlišení smyček – Královka byla označena modrou barvou a Dlabačov červenou.",
            "V současnosti má Dlabačov nové využití: funguje zde komunitní bistro umístěné v odstavené historické tramvaji T3, konají se tu kulturní akce a je zde konečná stanice historické linky 42."
        ],
        photos: ["media/tocna1.png", "media/tocna2.png", "media/tocna3.png", "media/tocna4.png"] // Zde přidejte cesty k fotkám, např.: ["foto5_1.jpg", "foto5_2.jpg"]
    },
    {
        number: 6,
        title: "Zastavení 6: Pohořelec",
        text: [
            "Název Pohořelec odkazuje na rozsáhlé požáry, které toto místo v minulosti opakovaně postihly, například při vyplenění Hradčan roku 1091 nebo v období husitských válek.",
            "Jednalo se o významný trhový prostor situovaný před hradbami Pražského hradu a před branami Břevnovského i Strahovského kláštera.",
            "Právě zde navíc stával dům, ve kterém na počátku 17. století žil a pozoroval oblohu slavný astronom Johannes Kepler společně s Tychonem Brahe. Dnes na jeho místě stojí Gymnázium Jana Keplera a významné astronomy připomíná bronzové sousoší přímo na náměstí.",
            "Z místa se otevírá přímý výhled na barokní průčelí Strahovského kláštera, který byl založen již v roce 1140."
        ],
        photos: ["media/pohorelec1.png", "media/pohorelec2.jpg", "media/pohorelec3.png", "media/pohorelec4.png"] // Zde přidejte cesty k fotkám, např.: ["foto6_1.jpg", "foto6_2.jpg"]
    },
    {
        number: 7,
        title: "Zastavení 7: Loretánské náměstí",
        text: [
            "Dominantou náměstí je Černínský palác, který disponuje nejdelší souvislou barokní fasádou v Praze (přes 150 metrů). V současnosti je sídlem Ministerstva zahraničních věcí ČR a v roce 1948 zde došlo k tragickému úmrtí Jana Masaryka.",
            "Naproti stojí Pražská Loreta, barokní poutní areál se slavným Loretánským pokladem obsahujícím Diamantovou monstranci zdobenou 6 222 diamanty. Největší atrakcí je však Loretánská zvonkohra, která hraje každou celou hodinu již od roku 1695.",
            "Z technického hlediska jde o unikátní historický hodinový a hrací stroj, který sestrojil pražský hodinář Petr Neustädter. Tvoří ho soubor 27 zvonů odlých v nizozemském Leeuwardenu zvonařem Claudim Fremym. Mechanismus funguje na principu mosazného hracího válce s nastavitelnými kolíky (podobně jako v hrací skříňce), které přes táhla ovládají jednotlivá kladívka narážející na zvony zvenčí. Zajímavostí je, že zvony jsou upevněny napevno a nehoupou se. Válcový mechanismus lze navíc odpojit a na zvonkohru hrát manuálně pomocí klaviatury a pedálů, což se využívá při svátečních koncertech."
        ],
        photos: ["media/loreta1.png", "media/loreta2.png", "media/loreta3.png", "media/loreta4.png"] // Zde přidejte cesty k fotkám, např.: ["foto7_1.jpg", "foto7_2.jpg"]
    },
    {
        number: 8,
        title: "Zastavení 8: Cíl – hOST Restaurant",
        text: [
            "Loretánská ulice je součástí historické Královské cesty, která propojovala Pohořelec a Loretánské náměstí s Hradčanským náměstím.",
            "Cíl vycházky se nachází v historickém domě v Loretánské ulici č.p. 179/15, jen pár kroků od Hradčanského náměstí."
        ],
        photos: []
    }
];

// Prvky z HTML
const gridView = document.getElementById("grid-view");
const detailView = document.getElementById("detail-view");
const backBtn = document.getElementById("back-btn");

const detailTitle = document.getElementById("detail-title");
const detailContent = document.getElementById("detail-content");
const detailGallery = document.getElementById("detail-gallery");
const photosHeading = document.getElementById("photos-heading");

const modal = document.getElementById("fullscreen-modal");
const modalImg = document.getElementById("modal-img");
const closeModal = document.getElementById("close-modal");

// 1. Vygeneruje tlačítka pro titulní stránku
function initButtons() {
    gridView.innerHTML = "";
    stationsData.forEach(station => {
        const btn = document.createElement("button");
        btn.className = "station-btn";
        btn.textContent = station.number;
        btn.addEventListener("click", () => openDetail(station));
        gridView.appendChild(btn);
    });
}

// 2. Otevře detail stanoviště
function openDetail(station) {
    detailTitle.textContent = station.title;
    
    // Vygeneruje text
    detailContent.innerHTML = "";
    station.text.forEach(paragraph => {
        const p = document.createElement("p");
        p.textContent = paragraph;
        detailContent.appendChild(p);
    });

    // Vygeneruje fotky (pokud jsou zadané)
    detailGallery.innerHTML = "";
    if (station.photos && station.photos.length > 0) {
        photosHeading.classList.remove("hidden");
        station.photos.forEach(photoSrc => {
            const img = document.createElement("img");
            img.src = photoSrc;
            img.alt = station.title;
            img.addEventListener("click", () => openFullscreen(photoSrc));
            detailGallery.appendChild(img);
        });
    } else {
        photosHeading.classList.add("hidden");
    }

    // Přepne zobrazení
    gridView.classList.add("hidden");
    detailView.classList.remove("hidden");
    window.scrollTo(0, 0);
}

// 3. Tlačítko zpět
backBtn.addEventListener("click", () => {
    detailView.classList.add("hidden");
    gridView.classList.remove("hidden");
    window.scrollTo(0, 0);
});

// 4. Modal na fotky
function openFullscreen(src) {
    modalImg.src = src;
    modal.classList.remove("hidden");
}

closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.add("hidden");
    }
});

// Spuštění
initButtons();