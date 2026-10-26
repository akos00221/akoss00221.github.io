
import {
    VASZON_SZELESSEG,
    VASZON_MAGASSAG,
    VESZELY_TAVOLSAG,
    SZINEK,
    idoFormazas,
    csomopontKereses,
    elKereses
} from './state.js';

const BETUTIPUS = '"Courier New"';

function win98DobozRajzolas(ctx, x, y, szelesseg, magassag, hatterSzin = '#c0c0c0') {
    ctx.save();
    ctx.fillStyle = hatterSzin;
    ctx.fillRect(x, y, szelesseg, magassag);

    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x, y + magassag);
    ctx.lineTo(x, y);
    ctx.lineTo(x + szelesseg, y);
    ctx.stroke();

    ctx.strokeStyle = '#404040';
    ctx.beginPath();
    ctx.moveTo(x, y + magassag);
    ctx.lineTo(x + szelesseg, y + magassag);
    ctx.lineTo(x + szelesseg, y);
    ctx.stroke();
    ctx.restore();
}

function hatterRajzolasa(ctx) {
    ctx.save();
    ctx.fillStyle = '#f4f4f0';
    ctx.fillRect(0, 0, VASZON_SZELESSEG, VASZON_MAGASSAG);

    ctx.strokeStyle = '#e2e2dc';
    ctx.lineWidth = 1;
    for (let x = 0; x <= VASZON_SZELESSEG; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, VASZON_MAGASSAG);
        ctx.stroke();
    }
    for (let y = 0; y <= VASZON_MAGASSAG; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(VASZON_SZELESSEG, y);
        ctx.stroke();
    }
    ctx.restore();
}

function sinekRajzolasa(ctx, allapot) {
    ctx.save();
    for (const el of allapot.elek) {
        const p1 = csomopontKereses(allapot, el.honnan);
        const p2 = csomopontKereses(allapot, el.hova);
        if (!p1 || !p2) {
            continue;
        }

        const foglalt = allapot.vonatok.some((v) => v.aktiv && v.aktualisElId === el.id);

        ctx.strokeStyle = foglalt ? '#cc0000' : '#555555';
        ctx.lineWidth = 7;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();

        ctx.strokeStyle = foglalt ? '#ffaaaa' : '#cccccc';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
    }
    ctx.restore();
}

function allomasokRajzolasa(ctx, allapot) {
    for (const p of allapot.csomopontok) {
        if (p.tipus === 'belepes') {
            ctx.save();
            ctx.translate(p.x, p.y);

            win98DobozRajzolas(ctx, -48, -14, 34, 28, '#c0c0c0');

            ctx.fillStyle = '#000080';
            ctx.font = `bold 12px ${BETUTIPUS}`;
            ctx.textAlign = 'center';
            ctx.fillText(`${p.felirat}.`, -31, 4);

            ctx.fillStyle = '#000000';
            ctx.beginPath();
            ctx.moveTo(-10, -6);
            ctx.lineTo(0, 0);
            ctx.lineTo(-10, 6);
            ctx.closePath();
            ctx.fill();

            ctx.restore();
        } else if (p.tipus === 'peron') {
            const szinAdat = SZINEK[p.szin] || SZINEK.PIROS;
            ctx.save();
            ctx.translate(p.x, p.y);

            win98DobozRajzolas(ctx, -82, -36, 108, 24, '#c0c0c0');

            ctx.fillStyle = szinAdat.hex;
            ctx.fillRect(-79, -33, 18, 18);
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 1;
            ctx.strokeRect(-79, -33, 18, 18);

            ctx.fillStyle = '#000000';
            ctx.font = `bold 11px ${BETUTIPUS}`;
            ctx.textAlign = 'left';
            ctx.fillText(`${p.felirat} (${szinAdat.nev})`, -56, -20);

            ctx.strokeStyle = '#cc0000';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(20, -8);
            ctx.lineTo(25, -8);
            ctx.lineTo(25, 8);
            ctx.lineTo(20, 8);
            ctx.stroke();

            ctx.restore();
        } else if (p.tipus === 'vaganyveg') {
            ctx.save();
            ctx.translate(p.x, p.y);

            ctx.strokeStyle = '#cc0000';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(-8, -8);
            ctx.lineTo(8, 8);
            ctx.moveTo(8, -8);
            ctx.lineTo(-8, 8);
            ctx.stroke();

            ctx.fillStyle = '#cc0000';
            ctx.font = `bold 11px ${BETUTIPUS}`;
            ctx.textAlign = 'center';
            ctx.fillText(p.felirat, 0, 22);

            ctx.restore();
        }
    }
}

function valtokRajzolasa(ctx, allapot) {
    for (const valto of allapot.valtok) {
        const aktivEl = elKereses(allapot, valto.agak[valto.aktivAg]);
        const celPont = aktivEl ? csomopontKereses(allapot, aktivEl.hova) : null;

        let iranySzog = 0;
        if (celPont) {
            iranySzog = Math.atan2(celPont.y - valto.y, celPont.x - valto.x);

            ctx.save();
            ctx.strokeStyle = '#000080';
            ctx.lineWidth = 7;
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(valto.x, valto.y);
            ctx.lineTo(
                valto.x + Math.cos(iranySzog) * 44,
                valto.y + Math.sin(iranySzog) * 44
            );
            ctx.stroke();
            ctx.restore();
        }

        ctx.save();
        ctx.translate(valto.x, valto.y);

        ctx.fillStyle = '#c0c0c0';
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(0, 0, 16, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(0, 0, 13, 0, Math.PI * 2);
        ctx.stroke();

        ctx.save();
        ctx.rotate(iranySzog);
        ctx.strokeStyle = '#000080';
        ctx.fillStyle = '#000080';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(-8, 0);
        ctx.lineTo(6, 0);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(11, 0);
        ctx.lineTo(4, -5);
        ctx.lineTo(4, 5);
        ctx.closePath();
        ctx.fill();
        ctx.restore();

        win98DobozRajzolas(ctx, -15, -34, 30, 15, '#ffffe1');
        ctx.fillStyle = '#000000';
        ctx.font = `bold 11px ${BETUTIPUS}`;
        ctx.textAlign = 'center';
        ctx.fillText(valto.id, 0, -23);

        ctx.restore();
    }
}

function jelzokRajzolasa(ctx, allapot) {
    for (const j of allapot.jelzok) {
        ctx.save();

        ctx.strokeStyle = '#404040';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(j.sinX, j.sinY);
        ctx.lineTo(j.x, j.y);
        ctx.stroke();

        ctx.translate(j.x, j.y);

        win98DobozRajzolas(ctx, -18, -10, 36, 20, '#c0c0c0');

        const pirosAktiv = j.allapot === 'piros';
        const zoldAktiv = j.allapot === 'zold';

        ctx.beginPath();
        ctx.arc(-7, 0, 5.5, 0, Math.PI * 2);
        ctx.fillStyle = pirosAktiv ? '#ee0000' : '#663333';
        ctx.fill();
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(7, 0, 5.5, 0, Math.PI * 2);
        ctx.fillStyle = zoldAktiv ? '#00bb00' : '#335533';
        ctx.fill();
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.fillStyle = '#000000';
        ctx.font = `bold 11px ${BETUTIPUS}`;
        ctx.textAlign = 'center';
        const cimkeY = j.y < j.sinY ? -14 : 21;
        ctx.fillText(j.id, 0, cimkeY);

        ctx.restore();
    }
}

function vonatokRajzolasa(ctx, allapot, idoMs) {
    const villogas = Math.floor(idoMs / 250) % 2 === 0;

    for (const vonat of allapot.vonatok) {
        if (!vonat.aktiv) {
            continue;
        }

        const szinAdat = SZINEK[vonat.celSzin] || SZINEK.PIROS;

        if (vonat.utkozesVeszely) {
            ctx.save();
            ctx.translate(vonat.x, vonat.y);
            ctx.strokeStyle = villogas ? '#dd0000' : '#ff8800';
            ctx.fillStyle = 'rgba(255, 0, 0, 0.08)';
            ctx.lineWidth = 2;
            ctx.setLineDash([5, 4]);
            ctx.beginPath();
            ctx.arc(0, 0, VESZELY_TAVOLSAG / 2, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            ctx.restore();
        }

        ctx.save();
        ctx.translate(vonat.x, vonat.y);
        ctx.rotate(vonat.szog);

        ctx.fillStyle = szinAdat.hex;
        ctx.fillRect(-20, -7, 40, 14);

        if (vonat.tilosnalVar) {
            ctx.strokeStyle = '#cc0000';
            ctx.lineWidth = 3;
            ctx.strokeRect(-22, -9, 44, 18);
        } else {
            ctx.strokeStyle = '#000000';
            ctx.lineWidth = 1.5;
            ctx.strokeRect(-20, -7, 40, 14);
        }

        ctx.restore();

        ctx.save();
        ctx.translate(vonat.x, vonat.y);
        ctx.textAlign = 'center';

        win98DobozRajzolas(ctx, -20, -25, 40, 15, '#ffffff');
        ctx.fillStyle = '#000000';
        ctx.font = `bold 11px ${BETUTIPUS}`;
        ctx.fillText(vonat.id, 0, -14);

        if (vonat.veszfek) {
            win98DobozRajzolas(ctx, -32, -42, 64, 15, '#ffffaa');
            ctx.fillStyle = '#993300';
            ctx.font = `bold 10.5px ${BETUTIPUS}`;
            ctx.fillText('FÉK [STOP]', 0, -31);
        } else if (vonat.tilosnalVar) {
            win98DobozRajzolas(ctx, -25, -42, 50, 15, '#ffdddd');
            ctx.fillStyle = '#cc0000';
            ctx.font = `bold 10.5px ${BETUTIPUS}`;
            ctx.fillText('TILOS', 0, -31);
        }

        ctx.restore();
    }
}

function menetrendDobozRajzolasa(ctx, allapot) {
    ctx.save();
    const dobozX = 12;
    const dobozY = 10;
    const dobozSzelesseg = 285;
    const sorMagassag = 15;
    const dobozMagassag = 28 + allapot.menetrend.length * sorMagassag;

    win98DobozRajzolas(ctx, dobozX, dobozY, dobozSzelesseg, dobozMagassag, '#c0c0c0');

    ctx.fillStyle = '#000080';
    ctx.fillRect(dobozX + 3, dobozY + 3, dobozSzelesseg - 6, 16);
    ctx.fillStyle = '#ffffff';
    ctx.font = `bold 11px ${BETUTIPUS}`;
    ctx.fillText('Menetrend', dobozX + 8, dobozY + 15);

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(dobozX + 4, dobozY + 21, dobozSzelesseg - 8, dobozMagassag - 25);

    ctx.font = `11px ${BETUTIPUS}`;
    for (let i = 0; i < allapot.menetrend.length; i += 1) {
        const m = allapot.menetrend[i];
        const y = dobozY + 33 + i * sorMagassag;
        const szin = SZINEK[m.celSzin];

        let allapotSzoveg = `Indul: ${idoFormazas(m.indulasIdo)}`;
        if (m.befejezett) {
            allapotSzoveg = 'Beérkezett';
        } else if (m.elindult) {
            allapotSzoveg = 'Úton';
        }

        ctx.fillStyle = '#000000';
        ctx.fillText(`${m.id} (${m.tipus})`, dobozX + 8, y);

        ctx.fillStyle = '#000080';
        ctx.fillText(`Cél: ${szin.nev}`, dobozX + 105, y);

        ctx.fillStyle = m.befejezett ? '#007700' : '#444444';
        ctx.fillText(allapotSzoveg, dobozX + 195, y);
    }

    ctx.restore();
}

function robbanasRajzolasa(ctx, allapot) {
    if (!allapot.robbanasHely) {
        return;
    }
    ctx.save();
    ctx.translate(allapot.robbanasHely.x, allapot.robbanasHely.y);

    ctx.fillStyle = '#dd0000';
    ctx.beginPath();
    ctx.arc(0, 0, 26, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#ffcc00';
    ctx.beginPath();
    ctx.arc(0, 0, 14, 0, Math.PI * 2);
    ctx.fill();

    win98DobozRajzolas(ctx, -70, -44, 140, 18, '#ffffe1');
    ctx.fillStyle = '#cc0000';
    ctx.font = `bold 11px ${BETUTIPUS}`;
    ctx.textAlign = 'center';
    ctx.fillText('ROBBANÁS / ÜTKÖZÉS!', 0, -31);

    ctx.restore();
}

export function vaszonRajzolas(ctx, allapot, idoMs = 0) {
    if (!ctx || !allapot) {
        return;
    }

    try {
        hatterRajzolasa(ctx);
        sinekRajzolasa(ctx, allapot);
        allomasokRajzolasa(ctx, allapot);
        valtokRajzolasa(ctx, allapot);
        jelzokRajzolasa(ctx, allapot);
        vonatokRajzolasa(ctx, allapot, idoMs);
        robbanasRajzolasa(ctx, allapot);
        menetrendDobozRajzolasa(ctx, allapot);
    } catch (hiba) {
        console.error('Hiba a vászon rajzolásakor:', hiba);
    }
}

export function kijelzoFrissites(elemek, allapot) {
    if (!elemek || !allapot) {
        return;
    }

    elemek.kijelzoNev.textContent = allapot.jatekosNev;
    elemek.kijelzoPalya.textContent = `${allapot.palyaNev} (${allapot.nehezseg})`;
    elemek.kijelzoIdo.textContent = idoFormazas(allapot.elteltIdo);
    elemek.kijelzoForgalom.textContent = `${allapot.celbaErtSzam} / ${allapot.osszesVonat}`;
    elemek.kijelzoHibak.textContent = String(allapot.hibaSzam);
    elemek.allapotUzenet.textContent = allapot.uzenet;

    elemek.szunetGomb.textContent = allapot.statusz === 'szunet' ? 'Folytatás' : 'Szünet';
}

export function ranglistaRajzolas(tablazatTorzs, lista) {
    if (!tablazatTorzs) {
        return;
    }

    if (!Array.isArray(lista) || lista.length === 0) {
        tablazatTorzs.innerHTML = `
            <tr>
                <td colspan="5" style="text-align:center; color:#555555; padding:10px;">
                    Még nincs eredmény ezen a pályán.
                </td>
            </tr>
        `;
        return;
    }

    tablazatTorzs.innerHTML = lista
        .map(
            (sor, index) => `
            <tr>
                <td>${index + 1}.</td>
                <td>${sor.nev}</td>
                <td>${idoFormazas(sor.ido)}</td>
                <td>${sor.hibak}</td>
                <td>${sor.datum}</td>
            </tr>
        `
        )
        .join('');
}

export function modalMegjelenites(elemek, allapot) {
    if (!elemek || !allapot) {
        return;
    }

    if (allapot.statusz === 'gyozelem') {
        elemek.modalCim.textContent = 'Műszak teljesítve!';
    } else {
        elemek.modalCim.textContent = 'Vasúti baleset — Game Over';
    }

    elemek.modalSzoveg.textContent = allapot.vegeredmenySzoveg;
    elemek.modalNev.textContent = allapot.jatekosNev;
    elemek.modalIdo.textContent = idoFormazas(allapot.elteltIdo);
    elemek.modalCelbaert.textContent = `${allapot.celbaErtSzam} / ${allapot.osszesVonat}`;
    elemek.modalHibak.textContent = String(allapot.hibaSzam);

    elemek.eredmenyModal.classList.remove('rejtett');
}
