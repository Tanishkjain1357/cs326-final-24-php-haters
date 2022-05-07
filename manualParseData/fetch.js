// import { readFile, writeFile } from 'fs/promises';

async function getCourses() {
    let url = "./courses.html";
    let response = await fetch(url);
    if (response.ok) {
        let data = await response.text();
        let names = {};
        let lastKnown = 52;
        let i = 0;
        // data = data.replace('\r', '');
        while (data.indexOf('<h2>', lastKnown) != -1) {
            const find = data.indexOf('<h2>', lastKnown);

            const id = data.slice(data.indexOf('id=', find) + 4, data.indexOf('id=', find) + 8).replace("\"", '');
            const end = data.indexOf('</h2>', find + 1);

            const s = data.slice(find + 4, end);
            lastKnown = end + 1;

            let finRes = s.slice(s.indexOf('>') + 1, s.indexOf('</a>', 0)).replace("/(\r\n|\n|\r)/", "").split(' ');
            finRes = finRes.filter(v => v != '').join(' ');

            const instr = data.slice(data.indexOf('Instructor(s):', find) + 15, data.indexOf('</h3>', find + 15));


            const desc = data.slice(data.indexOf('<p>', find) + 3, data.indexOf('credit', find) - 3).replace('\n', '');

            const credits = parseInt(data.slice(data.indexOf('credit', find) - 3, data.indexOf('credit', find)).trim());

            names[id] = {};
            names[id]['name'] = finRes;
            names[id]['instructor'] = instr;
            names[id]['description'] = desc;
            names[id]['credits'] = credits;
        }
        console.log(names)
        // writeFile('courses.json', JSON.stringify(scores), 'utf8');
        document.getElementById('courses').innerHTML = JSON.stringify(names);
        // document.getElementById('data2').innerHTML = JSON.stringify(names);
    } else {
        document.getElementById('courses').innerHTML = '<b> an error occurred</b>'
    }
}

async function getResAreas() {
    let url = "./researchAreas.html";
    let response = await fetch(url);
    if (response.ok) {
        let data = await response.text();
        let names = {};
        let lastKnown = 0;
        let i = 0;
        // data = data.replace('\r', '');
        while (data.indexOf('<h2', lastKnown) != -1) {


            // const find = data.indexOf('<h2>', lastKnown);
            const end = data.indexOf('</a>', lastKnown + 1);

            // const id = data.slice(data.indexOf('id=', find) + 4, data.indexOf('id=', find) + 8).replace("\"", '');
            const area = data.slice(data.lastIndexOf('>', end) + 1, end).replace("\n", '')
            console.log(area);
            // const s = data.slice(find + 4, end);
            lastKnown = end + 1;

            // let finRes = s.slice(s.indexOf('>') + 1, s.indexOf('</a>', 0)).replace("/(\r\n|\n|\r)/", "").split(' ');
            // finRes = finRes.filter(v => v != '').join(' ');

            // const instr = data.slice(data.indexOf('Instructor(s):', find) + 15, data.indexOf('</h3>', find + 15));


            // const desc = data.slice(data.indexOf('<p>', find) + 3, data.indexOf('credit', find) - 3).replace('\n', '');

            // const credits = parseInt(data.slice(data.indexOf('credit', find) - 3, data.indexOf('credit', find)).trim());

            names[area] = {};
            names[area]['name'] = area;
            // names[id]['name'] = area;
            // names[id]['instructor'] = instr;
            // names[id]['description'] = desc;
            // names[id]['credits'] = credits;
        }
        console.log(names)
        // writeFile('courses.json', JSON.stringify(scores), 'utf8');
        document.getElementById('researchAreas').innerHTML = JSON.stringify(names);
        // document.getElementById('data2').innerHTML = JSON.stringify(names);
    } else {
        document.getElementById('researchAreas').innerHTML = '<b> an error occurred</b>'
    }
}

getCourses();
getResAreas();