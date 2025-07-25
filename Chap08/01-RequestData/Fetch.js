//Cách 1: ko async/await
fetch('https://api.github.com/users/mrcat88vthp')
.then(res => res.json())
.then(data => console.log('Dữ liệu JSON:', data))
.catch(err => console.error('Lỗi khi fetch:', err));

//Cách 2: Có async/await
async function Get_GitHub() {
    try {
        const res = await fetch('https://api.github.com/users/mrcat88vthp');
        const userData = await res.json();
        console.log('Dữ liệu JSON:',userData);
    }
    catch(error){
        console.error('Lỗi hàm fetch:',error);
    }
}

Get_GitHub();


//Fetch - Method: Post
const user = {
    UserID: 3,
    UserName: "Mạnh",
    Age: 7
};

async function AddUser() {
    try{
        const res = await fetch('http://localhost:5155/api/Users/Add-User', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        const resData = await res.json();
        console.log('Phản hồi:', resData);
    }
    catch(error){
        console.error('Lỗi thêm mới user:',error);
    }    
}

AddUser();
