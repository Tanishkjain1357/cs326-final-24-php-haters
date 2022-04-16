
const curPage = document.getElementById('curPage');
const main = document.getElementById('main');
const calendar = document.getElementById('calendar');
const majorReq = document.getElementById('majorReq');
const clubRSO = document.getElementById('clubRSO');
const research = document.getElementById('research');
const carDev = document.getElementById('carDev');

changePage('./main.html')
main.addEventListener('click', () => {
    changePage('./main.html');
});
calendar.addEventListener('click', () => {
    changePage('./calendar/calendar.html');
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


function changePage(url) {
    fetch(url)
        .then(response => {
            return response.text()
        })
        .then(data => {
            curPage.innerHTML = data;
        });
}