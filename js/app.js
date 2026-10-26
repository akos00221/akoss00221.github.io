
import {
    VASZON_SZELESSEG,
    VASZON_MAGASSAG,
    KATTINTAS_SUGAR,
    PALYAK,
    tavolsagSzamitas,
    idoFormazas,
    ujJatekAllapot,
    allapotFrissites,
    valtoAllitas,
    jelzoAllitas,
    vonatVeszfek,
    allapotMenteseSzovegge,
    allapotBetolteseSzovegbol
} from './state.js';

import {
    vaszonRajzolas,
    kijelzoFrissites,
    ranglistaRajzolas,
    modalMegjelenites
} from './render.js';

const MENTES_KULCS = 'vasut_szimulator_mentes';
const RANGLISTA_KULCS = 'vasut_szimulator_ranglista';

const elemek = {
    fomenuKepernyo: document.querySelector('#fomenu-kepernyo'),
    jatekKepernyo: document.querySelector('#jatek-kepernyo'),
    jatekosNevInput: document.querySelector('#jatekos-nev-input'),
    nevHibaUzenet: document.querySelector('#nev-hiba-uzenet'),
    inditasGomb: document.querySelector('#inditas-gomb'),
    palyaLenyiloGomb: document.querySelector('#palya-lenyilo-gomb'),
    kivalasztottPalyaSzoveg: document.querySelector('#kivalasztott-palya-szoveg'),
    lenyiloNyil: document.querySelector('#lenyilo-nyil'),
    palyaLista: document.querySelector('#palya-lista'),
    palyaElemek: document.querySelectorAll('.palya-elem'),
    betoltesGomb: document.querySelector('#betoltes-gomb'),
    mentesInfoSzoveg: document.querySelector('#mentes-info-szoveg'),
    ranglistaFulek: document.querySelector('#ranglista-fulek'),
    fulGombok: document.querySelectorAll('.ful-gomb'),
    ranglistaTorzs: document.querySelector('#ranglista-torzs'),
    kijelzoNev: document.querySelector('#kijelzo-nev'),
    kijelzoPalya: document.querySelector('#kijelzo-palya'),
    kijelzoIdo: document.querySelector('#kijelzo-ido'),
    kijelzoForgalom: document.querySelector('#kijelzo-forgalom'),
    kijelzoHibak: document.querySelector('#kijelzo-hibak'),
    szunetGomb: document.querySelector('#szunet-gomb'),
    ujrainditasGomb: document.querySelector('#ujrainditas-gomb'),
    mentesGomb: document.querySelector('#mentes-gomb'),
    fomenuGomb: document.querySelector('#fomenu-gomb'),
    vaszon: document.querySelector('#vasut-vaszon'),
    allapotUzenet: document.querySelector('#allapot-uzenet'),
    eredmenyModal: document.querySelector('#eredmeny-modal'),
    modalCim: document.querySelector('#modal-cim'),
    modalSzoveg: document.querySelector('#modal-szoveg'),
    modalNev: document.querySelector('#modal-nev'),
    modalIdo: document.querySelector('#modal-ido'),
    modalCelbaert: document.querySelector('#modal-celbaert'),
    modalHibak: document.querySelector('#modal-hibak'),
    modalUjraGomb: document.querySelector('#modal-ujra-gomb'),
    modalFomenuGomb: document.querySelector('#modal-fomenu-gomb')
};

const ctx = elemek.vaszon.getContext('2d');

let kivalasztottSzint = 1;
let aktivRanglistaSzint = 1;
let aktualisAllapot = null;
let animacioAzonosito = null;
let elozoIdobelyeg = null;
let eredmenyRogzitve = false;

function palyaValasztoFrissitese(szintId) {
    const palya = PALYAK[szintId];
    if (!palya) {
        return;
    }
    kivalasztottSzint = szintId;
    elemek.kivalasztottPalyaSzoveg.textContent = `${palya.azonosito}. szint: ${palya.nehezseg}`;

    elemek.palyaElemek.forEach((gomb) => {
        const gombSzint = Number(gomb.dataset.szint);
        gomb.classList.toggle('aktiv-palya', gombSzint === kivalasztottSzint);
    });
}

function ranglistaBetoltese() {
    try {
        const nyers = localStorage.getItem(RANGLISTA_KULCS);
        if (!nyers) {
            return { 1: [], 2: [], 3: [] };
        }
        const adat = JSON.parse(nyers);
        return {
            1: Array.isArray(adat[1]) ? adat[1] : [],
            2: Array.isArray(adat[2]) ? adat[2] : [],
            3: Array.isArray(adat[3]) ? adat[3] : []
        };
    } catch (hiba) {
        console.error('Hiba a ranglista olvasásakor:', hiba);
        return { 1: [], 2: [], 3: [] };
    }
}

function eredmenyMenteseRanglistaba(szintId, nev, ido, hibak) {
    try {
        const listak = ranglistaBetoltese();
        const aktualisLista = listak[szintId] || [];

        aktualisLista.push({
            nev: String(nev || 'Játékos'),
            ido: Math.floor(Number(ido) || 0),
            hibak: Number(hibak) || 0,
            datum: new Date().toLocaleDateString('hu-HU')
        });

        aktualisLista.sort((a, b) => {
            if (a.hibak !== b.hibak) {
                return a.hibak - b.hibak;
            }
            return a.ido - b.ido;
        });

        listak[szintId] = aktualisLista.slice(0, 10);
        localStorage.setItem(RANGLISTA_KULCS, JSON.stringify(listak));
        ranglistaMegjelenitesFrissites();
    } catch (hiba) {
        console.error('Hiba a ranglista mentésekor:', hiba);
    }
}

function ranglistaMegjelenitesFrissites() {
    const listak = ranglistaBetoltese();
    ranglistaRajzolas(elemek.ranglistaTorzs, listak[aktivRanglistaSzint] || []);
}

function mentettJatekEllenorzese() {
    try {
        const mentett = localStorage.getItem(MENTES_KULCS);
        if (!mentett) {
            elemek.betoltesGomb.disabled = true;
            elemek.mentesInfoSzoveg.textContent = 'Nincs mentett játékállás.';
            return;
        }
        const adat = JSON.parse(mentett);
        elemek.betoltesGomb.disabled = false;
        elemek.mentesInfoSzoveg.textContent = `Mentés: ${adat.jatekosNev} (${adat.szintId}. szint, ${idoFormazas(adat.elteltIdo)})`;
    } catch (hiba) {
        console.error('Mentés ellenőrzési hiba:', hiba);
        elemek.betoltesGomb.disabled = true;
        elemek.mentesInfoSzoveg.textContent = 'Hibás mentett adat.';
    }
}

function kepernyoValtas(celKepernyo) {
    if (celKepernyo === 'jatek') {
        elemek.fomenuKepernyo.classList.add('rejtett');
        elemek.jatekKepernyo.classList.remove('rejtett');
    } else {
        elemek.jatekKepernyo.classList.add('rejtett');
        elemek.eredmenyModal.classList.add('rejtett');
        elemek.fomenuKepernyo.classList.remove('rejtett');
        mentettJatekEllenorzese();
        ranglistaMegjelenitesFrissites();
    }
}

function jatekCiklus(idobelyegMs) {
    if (!aktualisAllapot) {
        return;
    }

    if (elozoIdobelyeg === null) {
        elozoIdobelyeg = idobelyegMs;
    }

    const dtMasodperc = (idobelyegMs - elozoIdobelyeg) / 1000;
    elozoIdobelyeg = idobelyegMs;

    if (aktualisAllapot.statusz === 'fut') {
        allapotFrissites(aktualisAllapot, dtMasodperc);
    }

    vaszonRajzolas(ctx, aktualisAllapot, idobelyegMs);
    kijelzoFrissites(elemek, aktualisAllapot);

    if (
        !eredmenyRogzitve &&
        (aktualisAllapot.statusz === 'gyozelem' || aktualisAllapot.statusz === 'vereseg')
    ) {
        eredmenyRogzitve = true;
        if (aktualisAllapot.statusz === 'gyozelem') {
            eredmenyMenteseRanglistaba(
                aktualisAllapot.szintId,
                aktualisAllapot.jatekosNev,
                aktualisAllapot.elteltIdo,
                aktualisAllapot.hibaSzam
            );
        }
        modalMegjelenites(elemek, aktualisAllapot);
    }

    animacioAzonosito = requestAnimationFrame(jatekCiklus);
}

function szimulacioInditasa(allapotObjektum) {
    if (animacioAzonosito !== null) {
        cancelAnimationFrame(animacioAzonosito);
        animacioAzonosito = null;
    }

    aktualisAllapot = allapotObjektum;
    elozoIdobelyeg = null;
    eredmenyRogzitve = false;

    elemek.eredmenyModal.classList.add('rejtett');
    kepernyoValtas('jatek');
    kijelzoFrissites(elemek, aktualisAllapot);
    vaszonRajzolas(ctx, aktualisAllapot, 0);

    animacioAzonosito = requestAnimationFrame(jatekCiklus);
}

function vaszonKoordinataSzamitas(esemeny) {
    const teglalap = elemek.vaszon.getBoundingClientRect();
    const aranyX = VASZON_SZELESSEG / teglalap.width;
    const aranyY = VASZON_MAGASSAG / teglalap.height;
    return {
        x: (esemeny.clientX - teglalap.left) * aranyX,
        y: (esemeny.clientY - teglalap.top) * aranyY
    };
}

function vaszonBalKattintas(esemeny) {
    if (!aktualisAllapot || aktualisAllapot.statusz !== 'fut') {
        return;
    }

    const poz = vaszonKoordinataSzamitas(esemeny);

    for (const valto of aktualisAllapot.valtok) {
        if (tavolsagSzamitas(poz.x, poz.y, valto.x, valto.y) <= KATTINTAS_SUGAR) {
            valtoAllitas(aktualisAllapot, valto.id);
            kijelzoFrissites(elemek, aktualisAllapot);
            return;
        }
    }

    for (const jelzo of aktualisAllapot.jelzok) {
        const tavLampa = tavolsagSzamitas(poz.x, poz.y, jelzo.x, jelzo.y);
        const tavSin = tavolsagSzamitas(poz.x, poz.y, jelzo.sinX, jelzo.sinY);
        if (tavLampa <= KATTINTAS_SUGAR || tavSin <= KATTINTAS_SUGAR) {
            jelzoAllitas(aktualisAllapot, jelzo.id);
            kijelzoFrissites(elemek, aktualisAllapot);
            return;
        }
    }
}

function vaszonJobbKattintas(esemeny) {
    esemeny.preventDefault();

    if (!aktualisAllapot || aktualisAllapot.statusz !== 'fut') {
        return;
    }

    const poz = vaszonKoordinataSzamitas(esemeny);

    for (const vonat of aktualisAllapot.vonatok) {
        if (!vonat.aktiv) {
            continue;
        }
        if (tavolsagSzamitas(poz.x, poz.y, vonat.x, vonat.y) <= KATTINTAS_SUGAR) {
            vonatVeszfek(aktualisAllapot, vonat.id);
            kijelzoFrissites(elemek, aktualisAllapot);
            return;
        }
    }
}

function esemenyekRegisztralasa() {
    elemek.jatekosNevInput.addEventListener('input', () => {
        if (elemek.jatekosNevInput.value.trim().length > 0) {
            elemek.nevHibaUzenet.classList.add('rejtett');
        }
    });

    elemek.palyaLenyiloGomb.addEventListener('click', () => {
        const zarva = elemek.palyaLista.classList.toggle('rejtett');
        elemek.lenyiloNyil.textContent = zarva ? '▼' : '▲';
    });

    elemek.palyaLista.addEventListener('click', (esemeny) => {
        const gomb = esemeny.target.closest('.palya-elem');
        if (!gomb) {
            return;
        }
        const szint = Number(gomb.dataset.szint);
        if (PALYAK[szint]) {
            palyaValasztoFrissitese(szint);
        }
    });

    elemek.ranglistaFulek.addEventListener('click', (esemeny) => {
        const ful = esemeny.target.closest('.ful-gomb');
        if (!ful) {
            return;
        }
        const szint = Number(ful.dataset.rangSzint);
        if (!szint) {
            return;
        }
        aktivRanglistaSzint = szint;
        elemek.fulGombok.forEach((g) => {
            g.classList.toggle('aktiv-ful', Number(g.dataset.rangSzint) === aktivRanglistaSzint);
        });
        ranglistaMegjelenitesFrissites();
    });

    elemek.inditasGomb.addEventListener('click', () => {
        const nev = elemek.jatekosNevInput.value.trim();
        if (!nev) {
            elemek.nevHibaUzenet.classList.remove('rejtett');
            elemek.jatekosNevInput.focus();
            return;
        }
        elemek.nevHibaUzenet.classList.add('rejtett');
        const ujAllapot = ujJatekAllapot(nev, kivalasztottSzint);
        szimulacioInditasa(ujAllapot);
    });

    elemek.betoltesGomb.addEventListener('click', () => {
        try {
            const mentett = localStorage.getItem(MENTES_KULCS);
            if (!mentett) {
                return;
            }
            const betoltottAllapot = allapotBetolteseSzovegbol(mentett);
            elemek.jatekosNevInput.value = betoltottAllapot.jatekosNev;
            palyaValasztoFrissitese(betoltottAllapot.szintId);
            szimulacioInditasa(betoltottAllapot);
        } catch (hiba) {
            console.error('Betöltési hiba:', hiba);
            elemek.mentesInfoSzoveg.textContent = 'Nem sikerült betölteni a mentést!';
        }
    });

    elemek.szunetGomb.addEventListener('click', () => {
        if (!aktualisAllapot) {
            return;
        }
        if (aktualisAllapot.statusz === 'fut') {
            aktualisAllapot.statusz = 'szunet';
            aktualisAllapot.uzenet = 'Játék szüneteltetve.';
        } else if (aktualisAllapot.statusz === 'szunet') {
            aktualisAllapot.statusz = 'fut';
            elozoIdobelyeg = null;
            aktualisAllapot.uzenet = 'Játék folytatva.';
        }
        kijelzoFrissites(elemek, aktualisAllapot);
    });

    elemek.ujrainditasGomb.addEventListener('click', () => {
        if (!aktualisAllapot) {
            return;
        }
        const ujra = ujJatekAllapot(aktualisAllapot.jatekosNev, aktualisAllapot.szintId);
        szimulacioInditasa(ujra);
    });

    elemek.mentesGomb.addEventListener('click', () => {
        if (!aktualisAllapot) {
            return;
        }
        try {
            const json = allapotMenteseSzovegge(aktualisAllapot);
            localStorage.setItem(MENTES_KULCS, json);
            aktualisAllapot.uzenet = 'Játékállás sikeresen elmentve!';
            kijelzoFrissites(elemek, aktualisAllapot);
        } catch (hiba) {
            console.error('Mentési hiba:', hiba);
            aktualisAllapot.uzenet = 'Hiba történt a mentéskor!';
            kijelzoFrissites(elemek, aktualisAllapot);
        }
    });

    elemek.fomenuGomb.addEventListener('click', () => {
        if (animacioAzonosito !== null) {
            cancelAnimationFrame(animacioAzonosito);
            animacioAzonosito = null;
        }
        aktualisAllapot = null;
        kepernyoValtas('fomenu');
    });

    elemek.modalUjraGomb.addEventListener('click', () => {
        if (!aktualisAllapot) {
            return;
        }
        const ujra = ujJatekAllapot(aktualisAllapot.jatekosNev, aktualisAllapot.szintId);
        szimulacioInditasa(ujra);
    });

    elemek.modalFomenuGomb.addEventListener('click', () => {
        if (animacioAzonosito !== null) {
            cancelAnimationFrame(animacioAzonosito);
            animacioAzonosito = null;
        }
        aktualisAllapot = null;
        kepernyoValtas('fomenu');
    });

    elemek.vaszon.addEventListener('click', vaszonBalKattintas);
    elemek.vaszon.addEventListener('contextmenu', vaszonJobbKattintas);
}

function inditas() {
    try {
        esemenyekRegisztralasa();
        palyaValasztoFrissitese(1);
        mentettJatekEllenorzese();
        ranglistaMegjelenitesFrissites();
    } catch (hiba) {
        console.error('Hiba az alkalmazás indításakor:', hiba);
    }
}

inditas();
