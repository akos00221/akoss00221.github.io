
export const VASZON_SZELESSEG = 1080;
export const VASZON_MAGASSAG = 580;

export const VESZELY_TAVOLSAG = 75;
export const UTKOZES_TAVOLSAG = 28;
export const JELZO_MEGALLAS_TAV = 30;
export const KATTINTAS_SUGAR = 25;

export const SZINEK = {
    PIROS: { kod: 'PIROS', nev: 'Piros', hex: '#ff3333' },
    KEK: { kod: 'KEK', nev: 'Kék', hex: '#00ccff' },
    ZOLD: { kod: 'ZOLD', nev: 'Zöld', hex: '#22ee44' },
    SARGA: { kod: 'SARGA', nev: 'Narancs', hex: '#ff9900' }
};

export const PALYAK = {
    1: {
        azonosito: 1,
        nev: '1. szint: Kitérő vágány jelzőkkel',
        nehezseg: 'Könnyű',
        csomopontok: [
            { id: 'B1', x: 70, y: 290, tipus: 'belepes', felirat: '1' },
            { id: 'J1_PONT', x: 200, y: 290, tipus: 'jelzo_pont', felirat: 'J1' },
            { id: 'V1', x: 330, y: 290, tipus: 'valto', felirat: 'V1' },
            { id: 'F1', x: 440, y: 190, tipus: 'utvonal', felirat: '' },
            { id: 'J2_PONT', x: 580, y: 190, tipus: 'jelzo_pont', felirat: 'J2' },
            { id: 'K1', x: 440, y: 390, tipus: 'utvonal', felirat: '' },
            { id: 'J3_PONT', x: 580, y: 390, tipus: 'jelzo_pont', felirat: 'J3' },
            { id: 'M1', x: 700, y: 290, tipus: 'utvonal', felirat: '' },
            { id: 'V2', x: 810, y: 290, tipus: 'valto', felirat: 'V2' },
            { id: 'P1', x: 1000, y: 190, tipus: 'peron', felirat: '1. PERON', szin: 'PIROS', sorszam: 1 },
            { id: 'P2', x: 1000, y: 390, tipus: 'peron', felirat: '2. PERON', szin: 'KEK', sorszam: 2 },
            { id: 'C1', x: 960, y: 290, tipus: 'vaganyveg', felirat: 'VÁGÁNYVÉG' }
        ],
        elek: [
            { id: 'e1', honnan: 'B1', hova: 'J1_PONT' },
            { id: 'e2', honnan: 'J1_PONT', hova: 'V1' },
            { id: 'e3', honnan: 'V1', hova: 'F1' },
            { id: 'e4', honnan: 'F1', hova: 'J2_PONT' },
            { id: 'e5', honnan: 'J2_PONT', hova: 'M1' },
            { id: 'e6', honnan: 'V1', hova: 'K1' },
            { id: 'e7', honnan: 'K1', hova: 'J3_PONT' },
            { id: 'e8', honnan: 'J3_PONT', hova: 'M1' },
            { id: 'e9', honnan: 'M1', hova: 'V2' },
            { id: 'e10', honnan: 'V2', hova: 'P1' },
            { id: 'e11', honnan: 'V2', hova: 'P2' },
            { id: 'e12', honnan: 'V2', hova: 'C1' }
        ],
        valtok: [
            { id: 'V1', csomopontId: 'V1', agak: ['e3', 'e6'], aktivAg: 0 },
            { id: 'V2', csomopontId: 'V2', agak: ['e10', 'e11', 'e12'], aktivAg: 0 }
        ],
        jelzok: [
            { id: 'J1', csomopontId: 'J1_PONT', eltolasY: -26, allapot: 'zold' },
            { id: 'J2', csomopontId: 'J2_PONT', eltolasY: -26, allapot: 'zold' },
            { id: 'J3', csomopontId: 'J3_PONT', eltolasY: 26, allapot: 'piros' }
        ],
        menetrend: [
            { id: '1A01', tipus: 'Személy', belepesId: 'B1', indulasIdo: 1, sebesseg: 72, celSzin: 'PIROS' },
            { id: '1B02', tipus: 'Teher', belepesId: 'B1', indulasIdo: 9, sebesseg: 62, celSzin: 'KEK' },
            { id: '1C03', tipus: 'Gyors', belepesId: 'B1', indulasIdo: 18, sebesseg: 78, celSzin: 'PIROS' },
            { id: '1D04', tipus: 'Személy', belepesId: 'B1', indulasIdo: 27, sebesseg: 68, celSzin: 'KEK' }
        ]
    },

    2: {
        azonosito: 2,
        nev: '2. szint: Rendező-pályaudvar',
        nehezseg: 'Közepes',
        csomopontok: [
            { id: 'B1', x: 70, y: 190, tipus: 'belepes', felirat: '1' },
            { id: 'B2', x: 70, y: 390, tipus: 'belepes', felirat: '2' },
            { id: 'J1_PONT', x: 195, y: 190, tipus: 'jelzo_pont', felirat: 'J1' },
            { id: 'J2_PONT', x: 195, y: 390, tipus: 'jelzo_pont', felirat: 'J2' },
            { id: 'V1', x: 320, y: 190, tipus: 'valto', felirat: 'V1' },
            { id: 'V2', x: 320, y: 390, tipus: 'valto', felirat: 'V2' },
            { id: 'M_FELSO', x: 520, y: 190, tipus: 'utvonal', felirat: '' },
            { id: 'M_ALSO', x: 520, y: 390, tipus: 'utvonal', felirat: '' },
            { id: 'J3_PONT', x: 645, y: 190, tipus: 'jelzo_pont', felirat: 'J3' },
            { id: 'J4_PONT', x: 645, y: 390, tipus: 'jelzo_pont', felirat: 'J4' },
            { id: 'V3', x: 770, y: 190, tipus: 'valto', felirat: 'V3' },
            { id: 'P1', x: 1000, y: 120, tipus: 'peron', felirat: '1. PERON', szin: 'PIROS', sorszam: 1 },
            { id: 'P2', x: 1000, y: 265, tipus: 'peron', felirat: '2. PERON', szin: 'KEK', sorszam: 2 },
            { id: 'P3', x: 1000, y: 410, tipus: 'peron', felirat: '3. PERON', szin: 'ZOLD', sorszam: 3 },
            { id: 'C1', x: 460, y: 505, tipus: 'vaganyveg', felirat: 'VÁGÁNYVÉG' }
        ],
        elek: [
            { id: 'e1', honnan: 'B1', hova: 'J1_PONT' },
            { id: 'e2', honnan: 'J1_PONT', hova: 'V1' },
            { id: 'e3', honnan: 'B2', hova: 'J2_PONT' },
            { id: 'e4', honnan: 'J2_PONT', hova: 'V2' },
            { id: 'e5', honnan: 'V1', hova: 'M_FELSO' },
            { id: 'e6', honnan: 'V1', hova: 'M_ALSO' },
            { id: 'e7', honnan: 'V2', hova: 'M_ALSO' },
            { id: 'e8', honnan: 'V2', hova: 'M_FELSO' },
            { id: 'e9', honnan: 'V2', hova: 'C1' },
            { id: 'e10', honnan: 'M_FELSO', hova: 'J3_PONT' },
            { id: 'e11', honnan: 'J3_PONT', hova: 'V3' },
            { id: 'e12', honnan: 'V3', hova: 'P1' },
            { id: 'e13', honnan: 'V3', hova: 'P2' },
            { id: 'e14', honnan: 'M_ALSO', hova: 'J4_PONT' },
            { id: 'e15', honnan: 'J4_PONT', hova: 'P3' }
        ],
        valtok: [
            { id: 'V1', csomopontId: 'V1', agak: ['e5', 'e6'], aktivAg: 0 },
            { id: 'V2', csomopontId: 'V2', agak: ['e7', 'e8', 'e9'], aktivAg: 0 },
            { id: 'V3', csomopontId: 'V3', agak: ['e12', 'e13'], aktivAg: 0 }
        ],
        jelzok: [
            { id: 'J1', csomopontId: 'J1_PONT', eltolasY: -26, allapot: 'zold' },
            { id: 'J2', csomopontId: 'J2_PONT', eltolasY: 26, allapot: 'zold' },
            { id: 'J3', csomopontId: 'J3_PONT', eltolasY: -26, allapot: 'zold' },
            { id: 'J4', csomopontId: 'J4_PONT', eltolasY: 26, allapot: 'zold' }
        ],
        menetrend: [
            { id: '2A01', tipus: 'Személy', belepesId: 'B1', indulasIdo: 1, sebesseg: 68, celSzin: 'PIROS' },
            { id: '2B02', tipus: 'Teher', belepesId: 'B2', indulasIdo: 5.5, sebesseg: 52, celSzin: 'ZOLD' },
            { id: '2C03', tipus: 'Gyors', belepesId: 'B2', indulasIdo: 11.5, sebesseg: 82, celSzin: 'KEK' },
            { id: '2D04', tipus: 'Személy', belepesId: 'B1', indulasIdo: 17.5, sebesseg: 66, celSzin: 'ZOLD' },
            { id: '2E05', tipus: 'Gyors', belepesId: 'B1', indulasIdo: 24, sebesseg: 86, celSzin: 'KEK' }
        ]
    },

    3: {
        azonosito: 3,
        nev: '3. szint: Fejpályaudvari csúcsforgalom',
        nehezseg: 'Nehéz',
        csomopontok: [
            { id: 'B1', x: 70, y: 180, tipus: 'belepes', felirat: '1' },
            { id: 'B2', x: 70, y: 400, tipus: 'belepes', felirat: '2' },
            { id: 'J1_PONT', x: 190, y: 180, tipus: 'jelzo_pont', felirat: 'J1' },
            { id: 'J2_PONT', x: 190, y: 400, tipus: 'jelzo_pont', felirat: 'J2' },
            { id: 'V1', x: 315, y: 180, tipus: 'valto', felirat: 'V1' },
            { id: 'V2', x: 315, y: 400, tipus: 'valto', felirat: 'V2' },
            { id: 'M_FELSO', x: 510, y: 180, tipus: 'utvonal', felirat: '' },
            { id: 'M_ALSO', x: 510, y: 400, tipus: 'utvonal', felirat: '' },
            { id: 'J3_PONT', x: 630, y: 180, tipus: 'jelzo_pont', felirat: 'J3' },
            { id: 'J4_PONT', x: 630, y: 400, tipus: 'jelzo_pont', felirat: 'J4' },
            { id: 'V3', x: 750, y: 180, tipus: 'valto', felirat: 'V3' },
            { id: 'V4', x: 750, y: 400, tipus: 'valto', felirat: 'V4' },
            { id: 'J5_PONT', x: 875, y: 240, tipus: 'jelzo_pont', felirat: 'J5' },
            { id: 'P1', x: 1000, y: 105, tipus: 'peron', felirat: '1. PERON', szin: 'PIROS', sorszam: 1 },
            { id: 'P2', x: 1000, y: 240, tipus: 'peron', felirat: '2. PERON', szin: 'KEK', sorszam: 2 },
            { id: 'P3', x: 1000, y: 355, tipus: 'peron', felirat: '3. PERON', szin: 'ZOLD', sorszam: 3 },
            { id: 'P4', x: 1000, y: 480, tipus: 'peron', felirat: '4. PERON', szin: 'SARGA', sorszam: 4 },
            { id: 'C1', x: 450, y: 515, tipus: 'vaganyveg', felirat: 'VÁGÁNYVÉG' }
        ],
        elek: [
            { id: 'e1', honnan: 'B1', hova: 'J1_PONT' },
            { id: 'e2', honnan: 'J1_PONT', hova: 'V1' },
            { id: 'e3', honnan: 'B2', hova: 'J2_PONT' },
            { id: 'e4', honnan: 'J2_PONT', hova: 'V2' },
            { id: 'e5', honnan: 'V1', hova: 'M_FELSO' },
            { id: 'e6', honnan: 'V1', hova: 'M_ALSO' },
            { id: 'e7', honnan: 'V2', hova: 'M_ALSO' },
            { id: 'e8', honnan: 'V2', hova: 'M_FELSO' },
            { id: 'e9', honnan: 'V2', hova: 'C1' },
            { id: 'e10', honnan: 'M_FELSO', hova: 'J3_PONT' },
            { id: 'e11', honnan: 'J3_PONT', hova: 'V3' },
            { id: 'e12', honnan: 'M_ALSO', hova: 'J4_PONT' },
            { id: 'e13', honnan: 'J4_PONT', hova: 'V4' },
            { id: 'e14', honnan: 'V3', hova: 'P1' },
            { id: 'e15', honnan: 'V3', hova: 'J5_PONT' },
            { id: 'e16', honnan: 'J5_PONT', hova: 'P2' },
            { id: 'e17', honnan: 'V4', hova: 'P3' },
            { id: 'e18', honnan: 'V4', hova: 'P4' }
        ],
        valtok: [
            { id: 'V1', csomopontId: 'V1', agak: ['e5', 'e6'], aktivAg: 0 },
            { id: 'V2', csomopontId: 'V2', agak: ['e7', 'e8', 'e9'], aktivAg: 0 },
            { id: 'V3', csomopontId: 'V3', agak: ['e14', 'e15'], aktivAg: 0 },
            { id: 'V4', csomopontId: 'V4', agak: ['e17', 'e18'], aktivAg: 0 }
        ],
        jelzok: [
            { id: 'J1', csomopontId: 'J1_PONT', eltolasY: -26, allapot: 'zold' },
            { id: 'J2', csomopontId: 'J2_PONT', eltolasY: 26, allapot: 'zold' },
            { id: 'J3', csomopontId: 'J3_PONT', eltolasY: -26, allapot: 'zold' },
            { id: 'J4', csomopontId: 'J4_PONT', eltolasY: 26, allapot: 'zold' },
            { id: 'J5', csomopontId: 'J5_PONT', eltolasY: -26, allapot: 'zold' }
        ],
        menetrend: [
            { id: '3A01', tipus: 'Személy', belepesId: 'B1', indulasIdo: 1, sebesseg: 74, celSzin: 'PIROS' },
            { id: '3B02', tipus: 'Teher', belepesId: 'B2', indulasIdo: 4.5, sebesseg: 56, celSzin: 'ZOLD' },
            { id: '3C03', tipus: 'Gyors', belepesId: 'B1', indulasIdo: 9.5, sebesseg: 84, celSzin: 'SARGA' },
            { id: '3D04', tipus: 'Személy', belepesId: 'B2', indulasIdo: 15, sebesseg: 68, celSzin: 'KEK' },
            { id: '3E05', tipus: 'Gyors', belepesId: 'B1', indulasIdo: 21, sebesseg: 88, celSzin: 'KEK' },
            { id: '3F06', tipus: 'Teher', belepesId: 'B2', indulasIdo: 26.5, sebesseg: 60, celSzin: 'PIROS' }
        ]
    }
};

export function tavolsagSzamitas(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
}

export function pozicioInterpolalas(kezdoPont, vegPont, t) {
    const arany = Math.max(0, Math.min(1, t));
    const x = kezdoPont.x + (vegPont.x - kezdoPont.x) * arany;
    const y = kezdoPont.y + (vegPont.y - kezdoPont.y) * arany;
    const szog = Math.atan2(vegPont.y - kezdoPont.y, vegPont.x - kezdoPont.x);
    return { x, y, szog };
}

export function idoFormazas(masodperc) {
    const egesz = Math.max(0, Math.floor(Number(masodperc) || 0));
    const perc = Math.floor(egesz / 60);
    const mp = egesz % 60;
    return `${String(perc).padStart(2, '0')}:${String(mp).padStart(2, '0')}`;
}

export function csomopontKereses(allapot, csomopontId) {
    return allapot.csomopontok.find((p) => p.id === csomopontId) || null;
}

export function elKereses(allapot, elId) {
    return allapot.elek.find((e) => e.id === elId) || null;
}

export function ujJatekAllapot(jatekosNev, szintId) {
    try {
        const sablon = PALYAK[szintId] || PALYAK[1];

        const csomopontok = sablon.csomopontok.map((p) => ({ ...p }));
        const elek = sablon.elek.map((e) => {
            const p1 = csomopontok.find((p) => p.id === e.honnan);
            const p2 = csomopontok.find((p) => p.id === e.hova);
            const hossz = tavolsagSzamitas(p1.x, p1.y, p2.x, p2.y);
            return { ...e, hossz };
        });

        const valtok = sablon.valtok.map((v) => {
            const p = csomopontok.find((cs) => cs.id === v.csomopontId);
            return {
                id: v.id,
                csomopontId: v.csomopontId,
                x: p.x,
                y: p.y,
                agak: [...v.agak],
                aktivAg: v.aktivAg
            };
        });

        const jelzok = sablon.jelzok.map((j) => {
            const p = csomopontok.find((cs) => cs.id === j.csomopontId);
            return {
                id: j.id,
                csomopontId: j.csomopontId,
                sinX: p.x,
                sinY: p.y,
                x: p.x,
                y: p.y + j.eltolasY,
                allapot: j.allapot
            };
        });

        const menetrend = sablon.menetrend.map((m) => ({
            ...m,
            elindult: false,
            befejezett: false
        }));

        return {
            jatekosNev: String(jatekosNev || 'Diszpécser').trim(),
            szintId: sablon.azonosito,
            palyaNev: sablon.nev,
            nehezseg: sablon.nehezseg,
            elteltIdo: 0,
            statusz: 'fut',
            csomopontok,
            elek,
            valtok,
            jelzok,
            menetrend,
            vonatok: [],
            robbanasHely: null,
            celbaErtSzam: 0,
            hibaSzam: 0,
            osszesVonat: menetrend.length,
            uzenet: 'Szolgálat megkezdve. Figyeld a érkező vonatokat!',
            vegeredmenySzoveg: ''
        };
    } catch (hiba) {
        console.error('Hiba az állapot létrehozásakor:', hiba);
        throw hiba;
    }
}

export function valtoAllitas(allapot, valtoId) {
    const valto = allapot.valtok.find((v) => v.id === valtoId);
    if (!valto) {
        return false;
    }
    valto.aktivAg = (valto.aktivAg + 1) % valto.agak.length;
    allapot.uzenet = `Váltó átállítva: ${valto.id} (${valto.aktivAg + 1}. irány)`;
    return true;
}

export function jelzoAllitas(allapot, jelzoId) {
    const jelzo = allapot.jelzok.find((j) => j.id === jelzoId);
    if (!jelzo) {
        return false;
    }
    jelzo.allapot = jelzo.allapot === 'zold' ? 'piros' : 'zold';
    const szoveg = jelzo.allapot === 'zold' ? 'SZABAD (zöld)' : 'TILOS (piros)';
    allapot.uzenet = `Jelző [${jelzo.id}] átkapcsolva: ${szoveg}`;
    return true;
}

export function vonatVeszfek(allapot, vonatId) {
    const vonat = allapot.vonatok.find((v) => v.id === vonatId && v.aktiv);
    if (!vonat) {
        return false;
    }
    vonat.veszfek = !vonat.veszfek;
    allapot.uzenet = vonat.veszfek
        ? `Vonat [${vonat.id}] lefékezve (STOP)!`
        : `Vonat [${vonat.id}] fék feloldva, továbbhalad.`;
    return true;
}

function kovetkezoElKivalasztasa(allapot, csomopont) {
    if (!csomopont) {
        return null;
    }
    if (csomopont.tipus === 'valto') {
        const valto = allapot.valtok.find((v) => v.csomopontId === csomopont.id);
        if (!valto) {
            return null;
        }
        return elKereses(allapot, valto.agak[valto.aktivAg]);
    }
    return allapot.elek.find((e) => e.honnan === csomopont.id) || null;
}

function vonatokInditasa(allapot) {
    for (const tetel of allapot.menetrend) {
        if (!tetel.elindult && allapot.elteltIdo >= tetel.indulasIdo) {
            const belepoPont = csomopontKereses(allapot, tetel.belepesId);
            const elsoEl = kovetkezoElKivalasztasa(allapot, belepoPont);
            if (!belepoPont || !elsoEl) {
                continue;
            }

            const foglalt = allapot.vonatok.some(
                (v) => v.aktiv && tavolsagSzamitas(v.x, v.y, belepoPont.x, belepoPont.y) < 60
            );
            if (foglalt) {
                continue;
            }

            const celPont = csomopontKereses(allapot, elsoEl.hova);
            const kezdoPoz = pozicioInterpolalas(belepoPont, celPont, 0);

            tetel.elindult = true;
            allapot.vonatok.push({
                id: tetel.id,
                tipus: tetel.tipus,
                celSzin: tetel.celSzin,
                sebesseg: tetel.sebesseg,
                aktualisElId: elsoEl.id,
                megtettUt: 0,
                x: kezdoPoz.x,
                y: kezdoPoz.y,
                szog: kezdoPoz.szog,
                veszfek: false,
                tilosnalVar: false,
                utkozesVeszely: false,
                aktiv: true
            });

            allapot.uzenet = `Új szerelvény lépett a pályára: ${tetel.id} (Cél: ${SZINEK[tetel.celSzin].nev})`;
        }
    }
}

function csomopontElerese(allapot, vonat, elertPont) {
    const menetrendElem = allapot.menetrend.find((m) => m.id === vonat.id);

    if (elertPont.tipus === 'peron') {
        vonat.aktiv = false;
        if (menetrendElem) {
            menetrendElem.befejezett = true;
        }

        if (elertPont.szin === vonat.celSzin) {
            allapot.celbaErtSzam += 1;
            allapot.uzenet = `Vonat [${vonat.id}] sikeresen beérkezett ide: ${elertPont.felirat}`;
        } else {
            allapot.hibaSzam += 1;
            allapot.uzenet = `HIBA: Vonat [${vonat.id}] rossz peronra futott (${elertPont.felirat})!`;
        }
        return;
    }

    if (elertPont.tipus === 'vaganyveg') {
        vonat.aktiv = false;
        if (menetrendElem) {
            menetrendElem.befejezett = true;
        }
        allapot.hibaSzam += 1;
        allapot.uzenet = `KISIKLÁS: Vonat [${vonat.id}] nyitott vágányvégre futott!`;
        return;
    }

    const kovetkezoEl = kovetkezoElKivalasztasa(allapot, elertPont);
    if (!kovetkezoEl) {
        vonat.aktiv = false;
        if (menetrendElem) {
            menetrendElem.befejezett = true;
        }
        allapot.hibaSzam += 1;
        allapot.uzenet = `KISIKLÁS: Vonat [${vonat.id}] helytelen váltóállás miatt kisiklott!`;
        return;
    }

    vonat.aktualisElId = kovetkezoEl.id;
    vonat.megtettUt = 0;
    const ujCelPont = csomopontKereses(allapot, kovetkezoEl.hova);
    const poz = pozicioInterpolalas(elertPont, ujCelPont, 0);
    vonat.x = poz.x;
    vonat.y = poz.y;
    vonat.szog = poz.szog;
}

function utkozesVizsgalat(allapot) {
    const aktivVonatok = allapot.vonatok.filter((v) => v.aktiv);

    for (const v of aktivVonatok) {
        v.utkozesVeszely = false;
    }

    for (let i = 0; i < aktivVonatok.length; i += 1) {
        for (let j = i + 1; j < aktivVonatok.length; j += 1) {
            const v1 = aktivVonatok[i];
            const v2 = aktivVonatok[j];
            const tav = tavolsagSzamitas(v1.x, v1.y, v2.x, v2.y);

            if (tav < UTKOZES_TAVOLSAG) {
                v1.aktiv = false;
                v2.aktiv = false;
                allapot.robbanasHely = {
                    x: (v1.x + v2.x) / 2,
                    y: (v1.y + v2.y) / 2
                };
                allapot.statusz = 'vereseg';
                allapot.uzenet = `KATASZTRÓFA: ${v1.id} és ${v2.id} összeütközött!`;
                allapot.vegeredmenySzoveg = `A(z) ${v1.id} és ${v2.id} szerelvények összeütköztek a nyílt vonalon!`;
                return;
            }

            if (tav < VESZELY_TAVOLSAG) {
                v1.utkozesVeszely = true;
                v2.utkozesVeszely = true;
            }
        }
    }
}

export function allapotFrissites(allapot, dtMasodperc) {
    if (!allapot || allapot.statusz !== 'fut') {
        return;
    }

    const dt = Math.min(Math.max(dtMasodperc, 0), 0.1);
    allapot.elteltIdo += dt;

    vonatokInditasa(allapot);

    for (const vonat of allapot.vonatok) {
        if (!vonat.aktiv) {
            continue;
        }

        const el = elKereses(allapot, vonat.aktualisElId);
        if (!el) {
            continue;
        }

        const kezdoPont = csomopontKereses(allapot, el.honnan);
        const vegPont = csomopontKereses(allapot, el.hova);

        const jelzo = allapot.jelzok.find((j) => j.csomopontId === vegPont.id);
        const megalloTav = Math.max(0, el.hossz - JELZO_MEGALLAS_TAV);

        if (jelzo && jelzo.allapot === 'piros' && vonat.megtettUt >= megalloTav - 4) {
            vonat.megtettUt = megalloTav;
            vonat.tilosnalVar = true;
            const poz = pozicioInterpolalas(kezdoPont, vegPont, vonat.megtettUt / el.hossz);
            vonat.x = poz.x;
            vonat.y = poz.y;
            vonat.szog = poz.szog;
            continue;
        } else {
            vonat.tilosnalVar = false;
        }

        if (vonat.veszfek) {
            continue;
        }

        vonat.megtettUt += vonat.sebesseg * dt;

        if (vonat.megtettUt >= el.hossz) {
            csomopontElerese(allapot, vonat, vegPont);
        } else {
            const arany = el.hossz > 0 ? vonat.megtettUt / el.hossz : 0;
            const poz = pozicioInterpolalas(kezdoPont, vegPont, arany);
            vonat.x = poz.x;
            vonat.y = poz.y;
            vonat.szog = poz.szog;
        }
    }

    utkozesVizsgalat(allapot);

    if (allapot.statusz === 'fut') {
        const feldolgozott = allapot.celbaErtSzam + allapot.hibaSzam;
        const vanAktiv = allapot.vonatok.some((v) => v.aktiv);

        if (feldolgozott >= allapot.osszesVonat && !vanAktiv) {
            allapot.statusz = 'gyozelem';
            if (allapot.hibaSzam === 0) {
                allapot.vegeredmenySzoveg = 'Sikeres műszak! Minden vonat hibátlanul a megfelelő peronra érkezett.';
            } else {
                allapot.vegeredmenySzoveg = `A műszak véget ért (${allapot.hibaSzam} hibával). Az eredmény bekerült a ranglistába.`;
            }
        }
    }
}

export function allapotMenteseSzovegge(allapot) {
    try {
        const mentendo = {
            jatekosNev: allapot.jatekosNev,
            szintId: allapot.szintId,
            elteltIdo: allapot.elteltIdo,
            valtok: allapot.valtok.map((v) => ({ id: v.id, aktivAg: v.aktivAg })),
            jelzok: allapot.jelzok.map((j) => ({ id: j.id, allapot: j.allapot })),
            vonatok: allapot.vonatok.map((v) => ({ ...v })),
            menetrend: allapot.menetrend.map((m) => ({
                id: m.id,
                elindult: m.elindult,
                befejezett: m.befejezett
            })),
            celbaErtSzam: allapot.celbaErtSzam,
            hibaSzam: allapot.hibaSzam
        };
        return JSON.stringify(mentendo);
    } catch (hiba) {
        console.error('Mentési hiba:', hiba);
        throw hiba;
    }
}

export function allapotBetolteseSzovegbol(jsonSzoveg) {
    try {
        const adat = JSON.parse(jsonSzoveg);
        if (!adat || !adat.szintId || !PALYAK[adat.szintId]) {
            throw new Error('Hibás mentett adat!');
        }

        const uj = ujJatekAllapot(adat.jatekosNev, adat.szintId);
        uj.elteltIdo = Number(adat.elteltIdo) || 0;
        uj.celbaErtSzam = Number(adat.celbaErtSzam) || 0;
        uj.hibaSzam = Number(adat.hibaSzam) || 0;

        if (Array.isArray(adat.valtok)) {
            for (const mentettValto of adat.valtok) {
                const v = uj.valtok.find((elem) => elem.id === mentettValto.id);
                if (v) {
                    v.aktivAg = mentettValto.aktivAg % v.agak.length;
                }
            }
        }

        if (Array.isArray(adat.jelzok)) {
            for (const mentettJelzo of adat.jelzok) {
                const j = uj.jelzok.find((elem) => elem.id === mentettJelzo.id);
                if (j) {
                    j.allapot = mentettJelzo.allapot === 'piros' ? 'piros' : 'zold';
                }
            }
        }

        if (Array.isArray(adat.menetrend)) {
            for (const mentettMenet of adat.menetrend) {
                const m = uj.menetrend.find((elem) => elem.id === mentettMenet.id);
                if (m) {
                    m.elindult = Boolean(mentettMenet.elindult);
                    m.befejezett = Boolean(mentettMenet.befejezett);
                }
            }
        }

        if (Array.isArray(adat.vonatok)) {
            uj.vonatok = adat.vonatok.map((v) => ({ ...v }));
        }

        uj.uzenet = 'Mentett játékállás sikeresen betöltve!';
        return uj;
    } catch (hiba) {
        console.error('Betöltési hiba:', hiba);
        throw hiba;
    }
}
