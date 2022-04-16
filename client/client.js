async function createSignup(username, password) {
    const response = await fetch(`/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: username, password: password }),
    });
    const data = await response.json();
    return data;
}

async function createEvent(name, date) {
    const response = await fetch(`/createEvent`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ evName: name, date: date }),
    });
    const data = await response.json();
    return data;
}

async function deleteEvent(name) {
    const response = await fetch(`/deleteEvent`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ evName: name }),
    });
    const data = await response.json();
    return data;
}

async function getMajReq(major) {
    const response = await fetch(`/majorReq`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ major: major }),
    });
    const data = await response.json();
    return data;
}

async function getClubRSO(interest) {
    const response = await fetch(`/clubRSO`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ interest: interest }),
    });
    const data = await response.json();
    return data;
}

async function getResProf(research, prof) {
    const response = await fetch(`/resProf`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ research: research, prof: prof }),
    });
    const data = await response.json();
    return data;
}

async function getCarDev(field) {
    const response = await fetch(`/carDev`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cField: field }),
    });
    const data = await response.json();
    return data;
}

export { createSignup, createEvent, deleteEvent, getCarDev, getMajReq, getClubRSO, getResProf }
