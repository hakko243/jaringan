/* =========================
FILE : home.js
VERSI TERBARU
========================= */

/* ELEMENT */

const networkStatus =
document.getElementById(
  "networkStatus"
);

const deviceCount =
document.getElementById(
  "deviceCount"
);

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

const clock =
document.getElementById(
  "clock"
);

/* =========================
CLOCK
========================= */

function updateClock(){

  const now = new Date();

  clock.innerHTML =
  now.toLocaleTimeString();

}

setInterval(updateClock,1000);

updateClock();

/* =========================
NETWORK
========================= */

function updateNetwork(){

  if(navigator.onLine){

    networkStatus.innerHTML =
    "🟢 Online";

    // DEVICE
    const devices =
    Math.floor(Math.random()*10)+1;

    deviceCount.innerHTML =
    devices;

    // PING
    const pingValue =
    Math.floor(Math.random()*40)+1;

    // DOWNLOAD
    const downloadValue =
    (Math.random()*100).toFixed(2);

    // UPLOAD
    const uploadValue =
    (Math.random()*50).toFixed(2);

    ping.innerHTML =
    pingValue;

    download.innerHTML =
    downloadValue;

    upload.innerHTML =
    uploadValue;

  }else{

    networkStatus.innerHTML =
    "🔴 Offline";

    deviceCount.innerHTML =
    0;

    ping.innerHTML =
    "-";

    download.innerHTML =
    "0";

    upload.innerHTML =
    "0";

  }

}

window.addEventListener(
  "online",
  updateNetwork
);

window.addEventListener(
  "offline",
  updateNetwork
);

setInterval(updateNetwork,3000);

updateNetwork();

/* =========================
SIDEBAR
========================= */

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

/* =========================
REALTIME CHART
========================= */

const ctx =
document.getElementById(
  "networkChart"
);

const labels = [];

const realtimeData = [];

const networkChart =
new Chart(ctx,{

  type:"line",

  data:{

    labels:labels,

    datasets:[{

      label:"Mbps",

      data:realtimeData,

      borderColor:"#2563eb",

      backgroundColor:
      "rgba(37,99,235,0.2)",

      tension:0.4,

      fill:true

    }]

  },

  options:{

    responsive:true,

    maintainAspectRatio:false

  }

});

/* UPDATE CHART */

function updateChart(){

  const time =
  new Date()
  .toLocaleTimeString();

  const value =
  Math.floor(Math.random()*100)+1;

  if(labels.length > 10){

    labels.shift();

    realtimeData.shift();

  }

  labels.push(time);

  realtimeData.push(value);

  networkChart.update();

}

setInterval(updateChart,2000);

updateChart();