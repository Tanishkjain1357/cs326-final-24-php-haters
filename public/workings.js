function wCalendar() {
    const evName = document.getElementById("evName");
    const date = document.getElementById("date");
    const time = document.getElementById("time");
    evName.addEventListener("keyup", (e) => {
        console.log(evName.value);
    });
    time.addEventListener("change", (e) => {
        console.log(time.value);
    });
    date.addEventListener("change", (e) => {
        console.log(date.value);
    });
    const add = document.getElementById("add");
    add.addEventListener("click", () => {
        eventAdd(evName.value, date.value, time.value);
    });
    const events = document.getElementById("events");
}

async function getCourses() {
    const response = await fetch(`/majorReq`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    const data = await response.json();
    console.log(data);
    return data;
}

async function getResearch() {
    const response = await fetch(`/resProf`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    const data = await response.json();
    console.log(data);
    return data;
}

async function wMajorReq() {
    const c = await getCourses();
    console.log(c)
    document.getElementById('Courses').innerHTML = testDisplay(["name", "description", "instructor", "credits"], c);
    const major = document.getElementById("major");
    const year = document.getElementById("year");
    const credits = document.getElementById("credits");
    major.addEventListener("keyup", (e) => {
        console.log(major.value);
    });
    year.addEventListener("change", (e) => {
        console.log(year.value);
    });
    credits.addEventListener("change", (e) => {
        console.log(credits.value);
    });
    const search = document.getElementById("search");
    search.addEventListener("click", () => {
        majorCheck(major.value, year.value, credits.value);
    });
}
function cRso() {
    const club = document.getElementById("club");
    club.addEventListener("keyup", (e) => {
        console.log(club.value);
    });
    const search = document.getElementById("search");
    search.addEventListener("click", () => {
        crsoSearch(club.value);
    });
}

async function resProf() {
    const c = await getResearch();
    console.log(c)
    document.getElementById('allResearch').innerHTML = testDisplay(["name", "faculty", "description"], c);
    const res = document.getElementById("interest");
    const prof = document.getElementById("professor");
    const search = document.getElementById("search");
    search.addEventListener("click", () => {
        researchSearch(res.value, prof.value);
    });
}

function careerDev() {
    const car = document.getElementById("career");
    const search = document.getElementById("search");
    search.addEventListener("click", () => {
        cDevSearch(car.value);
    });
}

function signLogIn() {
    const un = document.getElementById("username");
    const pwd = document.getElementById("password");
    const sbut = document.getElementById("signup");
    sbut.addEventListener("click", () => {
        addSignUp(un.value, pwd.value);
    });
}

async function eventAdd(name, date, time) {
    const response = await fetch(`/createEvent`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ evName: name, date: date, time: time }),
    });
    const data = await response.text();
    console.log(data);
    return data;
}

async function majorCheck(major, year, credits) {
    const response = await fetch(`/majorReq`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ major: major, year: year, credits: credits }),
    });
    const data = await response.json();
    console.log(data);
    return data;
}

async function crsoSearch(name) {
    const response = await fetch(`/clubRSO`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name }),
    });
    const data = await response.json();
    console.log(data);
    return data;
}

async function researchSearch(research, professor) {
    const response = await fetch(`/resProf`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ research: research, prof: professor }),
    });
    const data = await response.json();
    console.log(data);
    return data;
}

async function cDevSearch(career) {
    const response = await fetch(`/carDev`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ cField: career }),
    });
    const data = await response.json();
    console.log(data);
    return data;
}

async function addSignUp(username, password) {
    const response = await fetch(`/signUp`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username, password: password }),
    });
    const data = await response.json();
    console.log(data);
    return data;
}

function testDisplay(elems, vals) {
    console.log(vals);
    const blah = document.createElement("table");
    const bod = document.createElement("tbody");
    const head = document.createElement("tr");
    elems.forEach((x) => {
        const n = document.createElement("th");
        n.textContent = x;
        head.appendChild(n);
    });
    bod.appendChild(head);
    vals.forEach((x) => {
        const row = document.createElement("tr");
        elems.forEach((y) => {
            const n = document.createElement("td");
            n.textContent = x[y];
            row.appendChild(n);
        });
        bod.appendChild(row);
    });
    blah.appendChild(bod);
    return blah.innerHTML;
}

export { wCalendar, wMajorReq, cRso, resProf, careerDev, signLogIn };
