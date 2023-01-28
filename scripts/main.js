const button = document.querySelector("#largeButton");
const buttonClicks = {
  DOMModel: document.querySelector("#buttonClicks"),
  totalClicks: 0,
};
const cpsContainer = document.querySelector("#clicksPerSecond");
let cps = +document.querySelector("#clicksPerSecond").textContent.split(" ")[0];

const buildings = {
  cursors: 0,
};

const buildingsCPS = {
  cursors: 1,
};

function buyBuilding(building) {
  buildings[building] += 1;
  cps += buildingsCPS[building];
  cpsContainer.textContent = `${cps} clicks per second`;
}

function registerCps(cps) {
  click(cps);
}

function click(n) {
  buttonClicks.totalClicks += n;
  buttonClicks.DOMModel.textContent = `${Math.round(
    buttonClicks.totalClicks
  )} clicks`;
}

button.addEventListener("click", () => {
  click(1);
});

setInterval(() => {
  registerCps(cps / 100);
}, 10);

const buildingsSideBar = Array.from(
  document.querySelector("#buildings").children
);

buildingsSideBar.forEach((building) => {
  building.addEventListener("click", () => {
    if (buttonClicks.totalClicks >= +building.children[2].textContent.split("_")[0]) {
    buyBuilding(building.getAttribute("data-name"));
    buildings[building]++;
    building.children[1].textContent++;
    building.children[2].textContent = `${Math.round(building.children[2].textContent.split("_")[0] * 1.15)}_clicks`;
    } 
});
});
