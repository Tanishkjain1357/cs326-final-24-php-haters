// const calendarFile = 'calendar.json';
// const majorReqFile = 'mReq.json';
// const clubrsoFile = 'crso.json';


function wCalendar() {
    const evName = document.getElementById('evName');
    const date = document.getElementById('date');
    const time = document.getElementById('time');
    evName.addEventListener('keyup', (e) => {
        console.log(evName.value);
    });
    time.addEventListener('change', (e) => {
        console.log(time.value);
    });
    date.addEventListener('change', (e) => {
        console.log(date.value);
    });
    const add = document.getElementById('add');
    add.addEventListener('click', () => {
        eventAdd(evName.value, date.value, time.value);
    });
    const events = document.getElementById('events');
}

function wMajorReq() {
    const major = document.getElementById('major');
    const year = document.getElementById('year');
    const credits = document.getElementById('credits');
    major.addEventListener('keyup', (e) => {
        console.log(major.value);
    });
    year.addEventListener('keyup', (e) => {
        console.log(year.value);
    });
    credits.addEventListener('keyup', (e) => {
        console.log(credits.value);
    });
    const search = document.getElementById('search');
    search.addEventListener('click', () => {
        majorCheck(major.value, year.value, credits.value);
    });
}
function cRso() {
    const club = document.getElementById('club');
    club.addEventListener('keyup', (e) => {
        console.log(club.value);
    });
    const search = document.getElementById('search');
    search.addEventListener('click', () => {
        crsoSearch(club.value);
    });
}

function resProf() {
    const res = document.getElementById('research');
    const prof = document.getElementById('professor');
    const search = document.getElementById('search');
    search.addEventListener('click', () => {
        researchSearch(res.value, prof.value);
    });
}

function careerDev() {
    const car = document.getElementById('career');
    const search = document.getElementById('search');
    search.addEventListener('click', () => {
        cDevSearch(car.value);
    });
}


async function eventAdd(name, date, time) {
    const response = await fetch(`/createEvent`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name, date: date, time: time }),
    });
    const data = await response.json();
    console.log(data);
    return data;
}

async function majorCheck(major, year, credits) {
    const response = await fetch(`/majorReq`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ major: major, year: year, credits: credits }),
    });
    const data = await response.json();
    console.log(data);
    return data;
}

async function crsoSearch(club) {
    const response = await fetch(`/clubRSO`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ club: club }),
    });
    const data = await response.json();
    console.log(data);
    return data;
}

async function researchSearch(interest, professor) {
    const response = await fetch(`/clubRSO`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ interest: interest, professor: professor }),
    });
    const data = await response.json();
    console.log(data);
    return data;
}

async function cDevSearch(career) {
    const response = await fetch(`/carDev`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ career: career }),
    });
    const data = await response.json();
    console.log(data);
    return data;
}

export { wCalendar, wMajorReq, cRso, resProf, careerDev }