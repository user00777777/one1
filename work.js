import {
  changeShiftLus,
  changeShiftKrug,
  changeShiftSinc,
  changeShiftGek,
  dayOrNight,
  dates,
  firstShift,
  Result,
} from "./work2.js";

let arEven = [];
let arOdd = [];
let sincevich = [];
let kruglui = [];
let gekalo = [];
let lusenko = [];
let odd;
for (let i = 1; i <= 30; i++) {
  odd = i % 2 == 0 ? true : false;
  if (i % 2 == 0) {
    arEven.push(i);
  } else if (i % 2 == 1) {
    arOdd.push(i);
  }
}

sincevich = changeShiftSinc(arEven);
gekalo = changeShiftGek(arEven);
kruglui = changeShiftKrug(arEven);
lusenko = changeShiftLus(arEven);

function deleteUndefind(sin) {
  return sin.filter((el) => el != undefined);
}
let Kruglui = deleteUndefind(kruglui);
let Sincevich = deleteUndefind(sincevich);
let Gekalo = deleteUndefind(gekalo);
let Lusenko = deleteUndefind(lusenko);

// console.log(Kruglui);
// console.log(Sincevich);
// console.log(Gekalo);

// console.log(Lusenko);
// let dates = 13;
function fArr(k) {
  let x;
  k.filter((el) => {
    if (el == dates) {
      return (x = el);
    }
  });
  return x;
}
console.log();

let krug = fArr(Kruglui);
let sin = fArr(Sincevich);
let paha = fArr(Lusenko);
let gek = fArr(Gekalo);

// console.log(dayOrNight(krug));
// console.log(dayOrNight(gek));
// console.log(dayOrNight(sin));
// console.log(dayOrNight(paha));
let Krug = dayOrNight(krug);
let Gek = dayOrNight(gek);
let Paha = dayOrNight(paha);
let Sin = dayOrNight(sin);
document.querySelector(".count").innerHTML = Result(Krug, Gek, Paha, Sin);
