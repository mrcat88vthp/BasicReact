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

const userLogs = userName => message => console.log(`${userName} -> ${message}`);

const log = userLogs('Mr Cat');

log('Tải 20 người từ API randomuser.me');
getPeople(20).then(
    members => log(`Đã load thành công ${members.length} người`),
    error => log('Lỗi tải người dùng: ' + error)
);