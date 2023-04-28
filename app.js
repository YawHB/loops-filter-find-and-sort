"use strict";

window.addEventListener("load", initApp);

// ========== Global Variables ========== //

const names = [
  "Peter",
  "Magdalena",
  "Frederikke",
  "Oskar",
  "Rasmus",
  "Sofie",
  "Anders",
  "Birgitte",
];

const years = [2003, 2032, 1990, 1966, 1998, 1989, 1975, 2023, 1933];

const teachers = [
  {
    name: "Magdalena Maria Otap",
    mail: "mago@kea.dk",
    phone: "77880000",
    title: "Lecturer",
    age: 36,
    image: "https://share.cederdorff.com/images/mago.jpg",
  },
  {
    name: "Birgitte Jensen",
    mail: "birgitte@mail.dk",
    phone: "77226010",
    title: "Senior Lecturer",
    age: 49,
    image:
      "https://www.eaaa.dk/media/u4gorzsd/birgitte-kirk-iversen2.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921541630000&format=webp",
  },
  {
    name: "Dan Nielsen",
    mail: "dan@mail.dk",
    phone: "77226027",
    title: "Lecturer",
    age: 36,
    image:
      "https://www.eaaa.dk/media/bdojel41/dan-okkels-brendstrup.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921559630000&format=webp",
  },
  {
    name: "Rasmus Cederdorff",
    mail: "race@kea.dk",
    phone: "72286318",
    title: "Senior Lecturer",
    age: 33,
    image: "https://share.cederdorff.com/images/race.jpg",
  },
  {
    name: "Martin Hansen",
    mail: "martin@mail.dk",
    phone: "77886620",
    title: "Lecturer",
    age: 34,
    image:
      "https://www.eaaa.dk/media/oayjq02h/martin-n%C3%B8hr.jpg?anchor=center&mode=crop&width=800&height=450&rnd=132792921658800000&format=webp",
  },
  {
    name: "Peter Lind",
    mail: "petl@kea.dk",
    phone: "77886699",
    title: "Senior Lecturer",
    age: 46,
    image: "https://share.cederdorff.com/images/petl.jpg",
  },
];

const teacher = {
  name: "Peter Lind",
  mail: "petl@kea.dk",
  phone: "77886699",
  title: "Senior Lecturer",
  age: 46,
  image: "https://share.cederdorff.com/images/petl.jpg",
};

const nbaStars = [
  {
    name: "Michael Jordan",
    team: "Chicago Bulls",
    yearsActive: "1984-1993, 1995-1998, 2001-2003",
    championships: 6,
    position: "Shooting Guard",
    height: "6'6\"",
    weight: 216,
  },
  {
    name: "Kobe Bryant",
    team: "Los Angeles Lakers",
    yearsActive: "1996-2016",
    championships: 5,
    position: "Shooting Guard",
    height: "6'6\"",
    weight: 212,
  },
  {
    name: "Shaquille O'Neal",
    team: "Los Angeles Lakers",
    yearsActive: "1992-2011",
    championships: 4,
    position: "Center",
    height: "7'1\"",
    weight: 325,
  },
  {
    name: "Tim Duncan",
    team: "San Antonio Spurs",
    yearsActive: "1997-2016",
    championships: 5,
    position: "Power Forward / Center",
    height: "6'11\"",
    weight: 250,
  },
  {
    name: "LeBron James",
    team: "Cleveland Cavaliers, Miami Heat, Los Angeles Lakers",
    yearsActive: "2003-present",
    championships: 4,
    position: "Small Forward",
    height: "6'9\"",
    weight: 250,
  },
  {
    name: "Hakeem Olajuwon",
    team: "Houston Rockets",
    yearsActive: "1984-2002",
    championships: 2,
    position: "Center",
    height: "7'0\"",
    weight: 255,
  },
  {
    name: "Larry Bird",
    team: "Boston Celtics",
    yearsActive: "1979-1992",
    championships: 3,
    position: "Small Forward",
    height: "6'9\"",
    weight: 220,
  },
  {
    name: "Magic Johnson",
    team: "Los Angeles Lakers",
    yearsActive: "1979-1991, 1996",
    championships: 5,
    position: "Point Guard",
    height: "6'9\"",
    weight: 215,
  },
  {
    name: "Karl Malone",
    team: "Utah Jazz, Los Angeles Lakers",
    yearsActive: "1985-2004",
    championships: 0,
    position: "Power Forward",
    height: "6'9\"",
    weight: 250,
  },
  {
    name: "Kevin Garnett",
    team: "Minnesota Timberwolves, Boston Celtics",
    yearsActive: "1995-2016",
    championships: 1,
    position: "Power Forward / Center",
    height: "6'11\"",
    weight: 240,
  },
];

// ========== initApp ========== //

function initApp() {
  //   logNumbers();
  //   teachersOver40();
  //   searchTeachersByName("lind");
  // forInTeacher();
  // forInSearch("ras");
  // lastFive();
  //   whileTeachersLength();
  // whileTeacherIsLecturer();
  //   whileSearchByName("m");
}

// ========== forEach ========== //

// ========== for loop ========== //
function lastFive() {
  for (let i = years.length - 1; i >= years.length - 5; i--) {
    console.log(years[i]);
  }
}

function logNumbers() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log("____________________________");
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
  console.log("____________________________");
  for (let i = 10; i >= 0; i--) {
    if (i > 0) {
      console.log(i);
    } else if (i === 0) {
      console.log(`${i} READY FOR LIFTOFF`);
    }
  }
  console.log("____________________________");
  for (let i = 1; i <= 19; i += 2) {
    console.log(i);
  }
  console.log("____________________________");
  for (let i = 1; i <= 16777216; i *= 2) {
    console.log(i);
  }
  console.log("____________________________");
  for (let i = 111; i < 138; i += 3) {
    console.log(i);
  }
  console.log("____________________________");
  for (let i = 100; i >= 0; i = i - 10) {
    console.log(i);
  }
}

// ========== for of loop ========== //
function teachersOver40() {
  const over40 = [];
  for (const teacher of teachers) {
    if (teacher.age >= 40) {
      over40.push(teacher);
    }
  }
  console.log(over40);
}

function searchTeachersByName(searchValue) {
  searchValue = searchValue.toLowerCase();
  const result = [];
  for (const teacher of teachers) {
    const name = teacher.name.toLowerCase();
    if (name.includes(searchValue)) {
      result.push(teacher.name);
    }
  }
  console.log(result);
}

// ========== for in loop ========== //
function forInTeacher() {
  for (const key in teacher) {
    const value = teacher[key];
    console.log(`${key}: ${value}`);
  }
}

function forInSearch(searchValue1) {
  searchValue1 = searchValue1.toLowerCase();
  for (let key in teachers) {
    const teacher = teachers[key];
    const teacherName = teacher.name.toLowerCase();
    if (teacherName.includes(searchValue1)) {
      console.log(teacher.name);
    }
  }
}

// ========== while loops ========== //

function whileTeachersLength() {
  let i = 0;

  while (i < teachers.length) {
    const teacher = teachers[i];
    console.log(teacher);
    i++;
  }
}

function whileTeacherIsLecturer() {
  let i = 0;

  while (i < teachers.length) {
    const teacher = teachers[i];
    if (teacher.title === "Lecturer") {
      console.log(teacher);
    }
    i++;
  }
}

function whileSearchByName(searchValue) {
  searchValue = searchValue.toLowerCase();
  const result = [];
  let i = 0;
  while (i < teachers.length) {
    const teacher = teachers[i];
    const teacherName = teacher.name.toLowerCase();

    if (teacherName.includes(searchValue)) {
      result.push(teacher.name);
    }
    i++;
  }
  console.log(result);
}

// ========== Filter items: array.filter(...) ========== //

// ========== Sorting: array.sort() ========== //

// console.log("the array length of names is: " + names.length);
// console.log("The last index is: " + names.length - 1);

// My own practice =================
nbaRings();
function nbaRings() {
  const mostRings = [];
  for (const player of nbaStars) {
    const rings = player.championships;
    if (rings > 3) {
      mostRings.push(player);
      // console.log(player.name);
    }
  }
  // console.log(mostRings);
}

const nameSorted = names.sort();
console.log(nameSorted);

const yearsSorted = years.sort();
console.log(yearsSorted);

const teacherNameSorted = teachers.sort(sortTeacherNames);
console.log(teacherNameSorted);

function sortTeacherNames(obj1, obj2) {
  return obj1.name.localeCompare(obj2.name);
}

const teacherAgeSorted = teachers.sort(sortTeacherAge);
console.log("age sorted");
console.log(teacherAgeSorted);

function sortTeacherAge(obj1, obj2) {
  return obj1.age - obj2.age;
}
