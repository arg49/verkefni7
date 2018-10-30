/**
 * Verkefni 7 – Reikniæfingarforrit
 *
 * Forrit sem æfir hraða í að reikna einföld dæmi
 */

// fasti sem segir til um hve marga leiki eigi að spila
const GAMES_TO_PLAY = 10;

/**
 * Birtir upplýsingar um leik og eftir að notandi samþykkir spilar fyrsta leik
 * með kalli í play().
 * Eftir leik er notanda boðið að spila annan leik, ef ekki hættir forrit.
 */
function start() {
  let spila = true;
  alert('Markmiðið er að svara eins mörgum af 10 dæmum rétt eins hratt og mögulegt er.');
  do {
    play();
    spila = confirm('Spila annan leik?');
  } while (spila === true);
}

/**
 * Spilar einn leik. Heldur utan um hvenær leikur byrjaði, hvenær endar og
 * fjölda réttra svara. Eftir leik eru birtar upplýsingar um niðurstöðu:
 *   Þú svaraðir X af 10 dæmum rétt á Y sekúndum
 *   Meðalrétt svör á sekúndu eru Z
 * Þar sem Y og Z hafa tvo aukastafi.
 *
 * Ef notandi ýtir á "Cancel" í leik eru skilaboðin "Hætt í leik." birt og engar
 * upplsýingar um niðurstöður.
 *
 */
function play() {
  var timiS = new Date().getTime();
  var rett = 0;
  for (i = 0; i < GAMES_TO_PLAY; i++) {
    const svar =ask();
    if (svar === 1) {
      rett++;
    } else if (svar === null) {
      alert('Hætt í leik.')
      return;
    }
  }
  var timiE = new Date().getTime();
  var TIMI = ((timiE - timiS)/1000).toFixed(2);
  var medal = (TIMI/rett).toFixed(2);
  alert('Þú svaraðir '+rett+' af '+GAMES_TO_PLAY+' dæmum rétt á '+TIMI+' sekúndum.\nMeðalrétt svör á sekúndu eru '+medal);
}

/**
 * Spyr einnar spurningar og skilar upplýsingum um svar (mögulega með því að
 * nota true, false og null ef notandi hættir). Birtir notanda propmpt til að
 * svara í og túlkar svarið yfir í tölu.
 *
 * Mögulegar spurningar eru:
 * - `+` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `-` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `*` dæmi þar sem báðar tölur geta verið á bilinu `[1, 10]`
 * - `/` dæmi þar sem fyrri tala er á bilinu `[2, 10]` og seinni talan er fyrri
 *   talan sinnum tala á bilinu `[2, 10]` þ.a. svarið verði alltaf heiltala
 *
 * Sniðugt væri að færa það að búa til spurningu í nýtt fall sem ask() kallar í.
 */

function ask() {
  const randomsp = randomNumber(1, 20);
  if (randomsp < 6) {
    const fyrri = randomNumber(1, 100);
    const seinni = randomNumber(1, 100);
    const input = prompt('Hvað er '+fyrri+'+'+seinni+'?');
    const parsedinput = parseInt(input);
    if (parsedinput === fyrri+seinni) {
      return 1;
    } else if (input === null) {
      return null;
    }
    return 0;
  }
  if (randomsp > 5 && randomsp < 11) {
    const fyrri = randomNumber(1, 100);
    const seinni = randomNumber(1, 100);
    const input = prompt('Hvað er '+fyrri+'-'+seinni+'?');
    const parsedinput = parseInt(input);
    if (parsedinput === fyrri-seinni) {
      return 1;
    } else if (input === null) {
      return null;
    }
    return 0;
  }
  if (randomsp > 10 && randomsp < 16) {
    const fyrri = randomNumber(1, 10);
    const seinni = randomNumber(1, 10);
    const input = prompt('Hvað er '+fyrri+'*'+seinni+'?');
    const parsedinput = parseInt(input);
    if (parsedinput === fyrri*seinni) {
      return 1;
    } else if (input === null) {
      return null;
    }
    return 0;
  }
  if (randomsp > 15 && randomsp < 21) {
    const fyrri = randomNumber(2, 10);
    const seinni = (randomNumber(2, 10)*fyrri);
    const input = prompt('Hvað er '+seinni+'/'+fyrri+'?');
    const parsedinput = parseInt(input);
    if (parsedinput === seinni/fyrri) {
      return 1;
    } else if (input === null) {
      return null;
    }
    return 0;
  }

}

/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Byrjar leik
  start();