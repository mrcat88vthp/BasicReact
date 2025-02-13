const getPeople = (count) => {
    return new Promise((resolves, rejects) => {
        const api = `https://api.randomuser.me/?nat=US&results=${count}`;
        const request = new XMLHttpRequest();
        request.open('GET', api);
        request.onload = () => {
            request.status === 200
            ? resolves(JSON.parse(request.response).results)
            : rejects(Error(request.statusText));
        }

        request.onerror = err => rejects(err);
        request.send();
    });
}

getPeople(5)
    .then(members => console.log(members))
    .catch(err => console.error(`getPeople fail: ${err}`));