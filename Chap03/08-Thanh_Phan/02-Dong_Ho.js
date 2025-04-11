//Chạy hàm logClockTime mỗi giây
setInterval(logClockTime, 1000);

//Hàm logClockTime
function logClockTime() {
    //Lấy thời gian theo định dạng giờ:phút:giây AM/PM
    let time = getClockTime();

    //Xóa màn hình console và ghi ra thời gian hiện tại.
    console.clear();
    console.log(time);
}

//Hàm getClockTime
function getClockTime() {   
    //Lấy thời gian hiện tại
    let date = new Date();
    let time = '';

    //Định dạng giờ
    time = {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
        ampm: 'AM'
    };

    //Xử lý giờ
    if (time.hours == 12){
        time.ampm = 'PM';
    }
    else if (time.hours > 12){
        time.ampm = 'PM';
        time.hours -= 12;
    }

    //Định dạng giờ, phút và giây
    time.hours < 10 ? time.hours = '0' + time.hours : time.hours;
    time.minutes < 10 ? time.minutes = '0' + time.minutes : time.minutes;
    time.seconds < 10 ? time.seconds = '0' + time.seconds : time.seconds;

    //Kết quả trả về
    return `${time.hours}:${time.minutes}:${time.seconds} ${time.ampm}`;
}



