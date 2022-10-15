export let date = new Date();
let day = date.getDate();
export let hour = date.getHours();
export let minuts = date.getMinutes();
// console.log(minuts);

export let firstShift = hour > 7 && hour <= 18 && minuts <= 59 ? true : false;
console.log(firstShift);

export let dates;
dates = firstShift ? day : hour >= 0 && hour < 7 ? day - 1 : day;
console.log(dates);

let d = dates % 2 == 0 ? true : false;

export function changeShiftKrug(k) {
  return k.map((el, i) => {
    if (i % 2 == 0 && d == true) {
      return el + "";
    }
    if (i % 2 == 0 && d == false) {
      return (el -= 1);
    }
  });
}
export function changeShiftSinc(s) {
  return s.map((el, i) => {
    if (i % 2 == 0 && d == true) {
      return el;
    } else if (i % 2 == 0 && d == false) {
      return (el += 1) + "";
    }
  });
}
export function changeShiftGek(s) {
  return s.map((el, i) => {
    if (i % 2 == 0 && d == true) {
      return (el += 2);
    }
    if (i % 2 == 0 && d == false) {
      return (el -= 1) + "";
    }
  });
}
export function changeShiftLus(s) {
  return s.map((el, i) => {
    if (i % 2 == 0 && d == true) {
      return (el += 2) + "";
    }
    if (i % 2 == 0 && d == false) {
      return (el += 1);
    }
  });
}
export function dayOrNight(name) {
  let str;
  let num;
  name === Number(name) ? (num = name) : (str = name);

  if (firstShift == true && name === dates) {
    return name;
  } else if (!firstShift && name == dates && name === str) {
    return name;
  }
}
let initialState = [
  {
    id: 1,
    secondShift: "Вторая смена",
    shift: "На смене",
    name: "Виталий",
    lastName: "Синькевич",
    p: "Паша Лысенко",
    k: "Стас Круглый",
    g: "Серега Гекало",
    firstShift: function () {
      return `${this.shift} ${this.name}   ${this.lastName} `;
    },
  },
  // {
  //   secondShift: "ервая смена",
  //   shift: "На смене",
  //   name: "Виталий",
  //   lastName: "Синькевич",
  //   firstShift: function () {
  //     return `${this.shift} ${this.name}     ${this.lastName} `;
  //   },
  // },
];
let S = 0;
console.log(firstShift);

export function Result(k, g, p, s, state = initialState) {
  // console.log(k);
  // console.log(g);
  // console.log(p);
  console.log(s);

  if (firstShift && s === dates) {
    return state.map((el) => {
      return el.shift() + el.lastName;
    });
  }
  if (!firstShift && s == dates) {
    return state.map((el) => {
      return `${el.firstShift()}`;
    });
  }
  if (firstShift && k === dates) {
    return state.map((el) => {
      if (el.id == 1) {
        return `${el.shift} ${el.k}`;
      }
    });
  }
  if (!firstShift && k == dates) {
    return state.map((el) => {
      if (el.id == 1) {
        return `${el.shift} ${el.k}`;
      }
    });
  }
  if (firstShift && p === dates) {
    return state.map((el) => {
      if (el.id == 1) {
        return `${el.shift} ${el.p}`;
      }
    });
  }
  if (!firstShift && p == dates) {
    return state.map((el) => {
      if (el.id == 1) {
        return `${el.shift} ${el.p}`;
      }
    });
  }
  if (firstShift && g === dates) {
    return state.map((el) => {
      if (el.id == 1) {
        return `${el.shift} ${el.g}`;
      }
    });
  }
  if (!firstShift && g == dates) {
    return state.map((el) => {
      if (el.id == 1) {
        return `${el.shift} ${el.g}`;
      }
    });
  }
}
