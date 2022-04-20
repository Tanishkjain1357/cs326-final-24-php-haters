import * as work from './workings.js'
const curPage = document.getElementById('curPage');
const main = document.getElementById('main');
const calendar = document.getElementById('calendar');
const majorReq = document.getElementById('majorReq');
const clubRSO = document.getElementById('clubRSO');
const research = document.getElementById('research');
const carDev = document.getElementById('carDev');
const signUp = document.getElementById('signUp');

changePage('./main.html')
main.addEventListener('click', () => {
    changePage('./main.html');
});
calendar.addEventListener('click', () => {
    changePage('./calendar.html');
});
majorReq.addEventListener('click', () => {
    changePage('./mainReq/mReq.html');
});
clubRSO.addEventListener('click', () => {
    changePage("./clubRSO/clubRso.html");
});
research.addEventListener('click', () => {
    changePage("./research/research.html");
});
carDev.addEventListener('click', () => {
    changePage("./careerDev/careerDev.html");
});
signUp.addEventListener('click', () => {
    changePage("./signUp/signup.html");
});

function runner(url) {
    if (url === './calendar.html') {
        return work.wCalendar();
    } else if (url === './mainReq/mReq.html') {
        return work.wMajorReq();
    } else if (url === "./clubRSO/clubRso.html") {
        return work.cRso();
    } else if (url === "./research/research.html") {
        return work.resProf();
    } else if (url === "./careerDev/careerDev.html") {
        return work.careerDev();
    } else if (url === "./signUp/signup.html") {
        return work.signLogIn();
    }
}

function changePage(url) {
    fetch(url)
        .then(response => {
            return response.text()
        })
        .then(data => {
            curPage.innerHTML = data;
            runner(url);
        });
}

