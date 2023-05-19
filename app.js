function currentTime(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var session = 'AM';

    if(hours === 0){
        hours = 12;
    }
    if(hours > 12){
        hours = hours - 12;
        session = 'PM';
    }

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
    document.getElementById('session').innerText = session;

    if(session === 'AM' && hours <= 06){
        document.getElementById('container').style.backgroundImage = "url('https://source.unsplash.com/1600x900/?midnight')";
    }
    else if(session === 'AM' && hours <= 12){
        document.getElementById('container').style.backgroundImage = "url('https://source.unsplash.com/1600x900/?morning')";
    }
    else if(session === 'PM' && hours <= 6){
        document.getElementById('container').style.backgroundImage = "url('https://source.unsplash.com/1600x900/?afternoon')";
    }
    else if(session === 'PM' && hours <= 7){
        document.getElementById('container').style.backgroundImage = "url('https://source.unsplash.com/1600x900/?dusk')";
    }
    else if(session === 'PM' && hours <= 12){
        document.getElementById('container').style.backgroundImage = "url('https://source.unsplash.com/1600x900/?night')";
    }
    setInterval(currentTime, 1000);
}


currentTime();

