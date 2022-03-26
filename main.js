
const allMenuItems = document.getElementById('personalMenu');

const createMenuItem = s => {
    const p = document.createElement('div');
    p.setAttribute('class', 'grid-item-b');
    // p.setAttribute('id', 'box');
    p.textContent = s;
    // p.addEventListener('click', () => printMe(i, j));
    // console.log(p)
    return p
}
// console.log(allMenuItems)
allMenuItems.setAttribute('class', "personalMenu")
allMenuItems.appendChild(createMenuItem("Calendar"));
allMenuItems.appendChild(createMenuItem("Major Requirements"));
allMenuItems.appendChild(createMenuItem("Clubs/RSOs"));
allMenuItems.appendChild(createMenuItem("Research"));
allMenuItems.appendChild(createMenuItem("Career Development"));