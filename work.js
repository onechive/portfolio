const projectData = {
  2025: [
    { id: "Tanzania", genre: "Logo / Motion", img: "img/2025_Tanzania_Main.png" },
    { id: "mg2025", genre: "Motion Graphics", img: "img/2025_KW_WD_MAIN.png" },
    { id: "motion3d_1_2025", genre: "3D Motion", img: "img/2025_KW_3D_1_MAIN.png" },
    { id: "ar2025", genre: "3D / AR", img: "img/2025_KW_3D_2_MAIN.png" },
    { id: "interaction2025", genre: "3D Interaction", img: "img/2025_KW_CD_MAIN.png" },
    { id: "typo2025", genre: "Typography Design", img: "img/2025_KW_VC_MAIN.png" },
    { id: "projmap2025", genre: "Projection Mapping", img: "img/2025_KW_ID_MAIN.jpg" },
  ],
  2020: [
    { id: "vr2020", genre: "VR/AR", img: "img/vr2020.jpg" },
    { id: "ui2020", genre: "UX/UI", img: "img/ui2020.jpg" },
  ],
  2021: [
    { id: "design3d", genre: "3D Design", img: "img/3d2021.jpg" },
    { id: "motion2021", genre: "Motion", img: "img/motion2021.jpg" },
  ],
  2022: [
    { id: "gameart2022", genre: "Game Art", img: "img/game2022.jpg" },
    { id: "concept2022", genre: "Concept", img: "img/concept2022.jpg" },
  ],
  2023: [
    { id: "poster2023", genre: "Poster", img: "img/poster2023.jpg" },
    { id: "type2023", genre: "Typography", img: "img/type2023.jpg" },
  ],
  2024: [
    { id: "logo2024", genre: "Logo", img: "img/2024_Lily_Logo_Main.jpg" },
    { id: "cd1_2024", genre: "Content Design", img: "img/2024_KW_CD_1_MAIN.png" },
    { id: "unity2024", genre: "Unity", img: "img/2024_KW_UD_1_MAIN.png" },
    { id: "vr2024", genre: "360 VR", img: "img/2024_KW_VR_MAIN.jpg" },
    { id: "xr2024", genre: "XR", img: "img/2024_KW_XR_MAIN.png" },
    { id: "cd2_2024", genre: "Content Design", img: "img/2024_KW_CD_MAIN.png" },
    { id: "motion2024", genre: "3D Motion", img: "img/2024_KW_3D_MAIN.png" },
    { id: "web2024", genre: "Website", img: "img/2024_KW_WS_MAIN.png" },
  ],
};

const gallery = document.getElementById("gallery");
const yearItems = document.querySelectorAll("#year-list li");
const yearTitle = document.getElementById("current-year");

function renderGallery(year) {
  gallery.innerHTML = "";

  const projects = projectData[year];
  if (!projects) return;

  projects.forEach((item) => {
    const box = document.createElement("div");
    box.classList.add("work-box");

  box.innerHTML = `
  <a href="WorkSide.html?id=${item.id}">
    <span class="genre-tag">${item.genre}</span>
    <img src="${item.img}" alt="${item.genre}" class="thumbnail">
  </a>`;


    gallery.appendChild(box);
  });
}

document.getElementById("year-toggle").addEventListener("click", () => {
  document.getElementById("year-list").classList.toggle("show");
});

yearItems.forEach((item) => {
  item.addEventListener("click", () => {
    const selectedYear = item.textContent.trim();
    yearTitle.textContent = selectedYear;
    renderGallery(selectedYear);
    document.getElementById("year-list").classList.remove("show");
  });
});

renderGallery("2025");


