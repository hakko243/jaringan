/* =========================
FILE : history.js
VERSI TERBARU
========================= */

/* NAVBAR TOGGLE */

const dashboardToggle =
document.getElementById(
  "dashboardToggle"
);

const navbarMenu =
document.getElementById(
  "navbarMenu"
);

dashboardToggle.addEventListener(
  "click",
  ()=>{

    navbarMenu.classList.toggle(
      "show"
    );

  }
);

/* ELEMENT */

const historyTable =
document.getElementById(
  "historyTable"
);

const totalTest =
document.getElementById(
  "totalTest"
);

const avgDownload =
document.getElementById(
  "avgDownload"
);

const avgUpload =
document.getElementById(
  "avgUpload"
);

const avgPing =
document.getElementById(
  "avgPing"
);

/* DATA */

let historyData = [];

let currentPage = 1;

const rowsPerPage = 10;

/* GENERATE DATA */

function generateRealtimeData(){

  const now =
  new Date();

  const date =
  now.toLocaleDateString(
    "id-ID"
  );

  const download =
  (Math.random()*100)
  .toFixed(2);

  const upload =
  (Math.random()*50)
  .toFixed(2);

  const ping =
  Math.floor(
    Math.random()*20
  ) + 5;

  historyData.unshift({

    date:date,

    server:"Wifi Local",

    download:
    `${download} Mbps`,

    upload:
    `${upload} Mbps`,

    ping:
    `${ping} ms`,

    device:"1 Device",

    status:"Sukses"

  });

  updateSummary();

  loadHistory();

  createPagination();

}

/* SUMMARY */

function updateSummary(){

  totalTest.innerHTML =
  historyData.length;

  let totalD = 0;
  let totalU = 0;
  let totalP = 0;

  historyData.forEach(
    (item)=>{

      totalD +=
      parseFloat(item.download);

      totalU +=
      parseFloat(item.upload);

      totalP +=
      parseFloat(item.ping);

    }
  );

  avgDownload.innerHTML =
  (
    totalD /
    historyData.length
  ).toFixed(2);

  avgUpload.innerHTML =
  (
    totalU /
    historyData.length
  ).toFixed(2);

  avgPing.innerHTML =
  Math.floor(
    totalP /
    historyData.length
  );

}

/* LOAD TABLE */

function loadHistory(){

  historyTable.innerHTML =
  "";

  const start =
  (currentPage - 1)
  * rowsPerPage;

  const end =
  start + rowsPerPage;

  const data =
  historyData.slice(
    start,
    end
  );

  data.forEach(
    (item)=>{

      historyTable.innerHTML +=

      `
      <tr>

        <td>${item.date}</td>

        <td>
          <i class="fa-solid fa-server"></i>
          ${item.server}
        </td>

        <td style="color:#14b8a6;">
          <i class="fa-solid fa-download"></i>
          ${item.download}
        </td>

        <td style="color:#8b5cf6;">
          <i class="fa-solid fa-upload"></i>
          ${item.upload}
        </td>

        <td style="color:#3b82f6;">
          <i class="fa-solid fa-tower-broadcast"></i>
          ${item.ping}
        </td>

        <td>
          <i class="fa-solid fa-desktop"></i>
          ${item.device}
        </td>

        <td>
          <span class="status">
            ${item.status}
          </span>
        </td>

      </tr>
      `;

    }
  );

}

/* PAGINATION */

function createPagination(){

  const pagination =
  document.querySelector(
    ".pagination"
  );

  pagination.innerHTML =
  "";

  const totalPages =
  Math.ceil(
    historyData.length /
    rowsPerPage
  );

  for(
    let i = 1;
    i <= totalPages;
    i++
  ){

    const btn =
    document.createElement(
      "button"
    );

    btn.innerText = i;

    if(
      i === currentPage
    ){

      btn.classList.add(
        "active-page"
      );

    }

    btn.onclick = ()=>{

      currentPage = i;

      loadHistory();

      createPagination();

    };

    pagination.appendChild(
      btn
    );

  }

}

/* REALTIME */

generateRealtimeData();

setInterval(
  generateRealtimeData,
  5000
);