/* =========================================
FILE : server.js
========================================= */

/* DASHBOARD */

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

/* REALTIME SERVER */

const pingValue =
document.getElementById(
  "pingValue"
);

const serverLoad =
document.getElementById(
  "serverLoad"
);

const progressBar =
document.getElementById(
  "progressBar"
);

function updateServer(){

  if(navigator.onLine){

    const ping =
    Math.floor(
      Math.random()*20
    ) + 5;

    const load =
    Math.floor(
      Math.random()*60
    ) + 20;

    pingValue.innerHTML =
    ping + " ms";

    serverLoad.innerHTML =
    load + "%";

    progressBar.style.width =
    load + "%";

  }else{

    pingValue.innerHTML =
    "-";

    serverLoad.innerHTML =
    "0%";

    progressBar.style.width =
    "0%";

  }

}

setInterval(
  updateServer,
  3000
);

updateServer();