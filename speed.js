/* =========================================
FILE : speed.js
VERSI TERBARU
========================================= */

/* DASHBOARD MENU */

function toggleMenu(){

  const menu =
  document.getElementById(
    "navbarMenu"
  );

  if(
    menu.style.display === "flex"
  ){

    menu.style.display =
    "none";

  }else{

    menu.style.display =
    "flex";

  }

}

/* SPEED TEST */

const ping =
document.getElementById(
  "ping"
);

const download =
document.getElementById(
  "download"
);

const upload =
document.getElementById(
  "upload"
);

const downloadSpeed =
document.getElementById(
  "downloadSpeed"
);

const networkStatus =
document.getElementById(
  "networkStatus"
);

const deviceConnected =
document.getElementById(
  "deviceConnected"
);

const testTime =
document.getElementById(
  "testTime"
);

/* START TEST */

function startSpeedTest(){

  if(!navigator.onLine){

    networkStatus.innerHTML =
    "Offline";

    ping.innerHTML = 0;
    download.innerHTML = 0;
    upload.innerHTML = 0;
    downloadSpeed.innerHTML = 0;

    deviceConnected.innerHTML =
    "0 Perangkat";

    return;
  }

  networkStatus.innerHTML =
  "Online";

  let speed = 0;

  const interval =
  setInterval(()=>{

    speed +=
    Math.random()*15;

    if(speed >= 100){

      clearInterval(interval);

      speed = 100;
    }

    const pingValue =
    Math.floor(
      Math.random()*20
    ) + 5;

    const uploadValue =
    (
      Math.random()*50
    ).toFixed(2);

    downloadSpeed.innerHTML =
    speed.toFixed(2);

    download.innerHTML =
    speed.toFixed(2);

    upload.innerHTML =
    uploadValue;

    ping.innerHTML =
    pingValue;

    deviceConnected.innerHTML =
    Math.floor(
      Math.random()*10
    ) + 1 +
    " Perangkat";

    testTime.innerHTML =
    new Date()
    .toLocaleString(
      "id-ID"
    );

    updateChart(
      speed.toFixed(2)
    );

  },1000);

}

/* CHART */

const ctx =
document.getElementById(
  "speedChart"
);

const speedChart =
new Chart(ctx,{

  type:"line",

  data:{
    labels:[],

    datasets:[{

      label:"Mbps",

      data:[],

      borderColor:"#2563eb",

      backgroundColor:
      "rgba(37,99,235,0.1)",

      tension:0.4,

      fill:true

    }]

  },

  options:{
    responsive:true
  }

});

function updateChart(speed){

  const now =
  new Date()
  .toLocaleTimeString();

  if(
    speedChart.data.labels.length > 10
  ){

    speedChart.data.labels.shift();

    speedChart.data.datasets[0]
    .data.shift();

  }

  speedChart.data.labels.push(
    now
  );

  speedChart.data.datasets[0]
  .data.push(speed);

  speedChart.update();

}