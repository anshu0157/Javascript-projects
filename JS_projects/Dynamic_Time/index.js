let a,date,time;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    a=new Date;
    time=a.toLocaleTimeString();
    date=a.toLocaleDateString(undefined,options);
    document.getElementById("time").innerHTML= date+"<br>"+time;
},1000);
