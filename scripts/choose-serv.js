$(document).ready(function () {
  $(".donate-serv").on("click", function () {
    $(".donate-serv").removeClass("active").addClass("inactive"); // Все кнопки неактивные
    $(this).removeClass("inactive").addClass("active"); // Кликнутая кнопка становится активной
  });
});

document.querySelectorAll(".donate-choose-nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    // Убираем активность у всех ссылок
    document
      .querySelectorAll(".donate-choose-nav a")
      .forEach((item) => item.removeAttribute("data-active"));

    // Добавляем активность текущей
    this.setAttribute("data-active", "true");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const previewDiv = document.getElementById("preview-content");
  const privilegeItems = document.querySelectorAll(".privilege-item");

  const donations = {
    fly: {
      name: "FLY",
      price: "35 ₽",
      image: "../public/images/mine.png",
      commands: [
        { cmd: "/back", desc: "вернуться на место смерти" },
        { cmd: "/donatelist", desc: "посмотреть список донатеров" },
        { cmd: "/skin", desc: "поставить скин игрока" },
        { cmd: "/donchat", desc: "чат донатеров" },
        { cmd: "/near", desc: "игроки вблизи" },
        { cmd: "/fly", desc: "режим полёта" },
        { cmd: "/flylist", desc: "список игроков в режиме полёта" },
      ],
      regions: ["5 привата по 40000 блоков"],
      prefixes: ["[FLY]"],
      additional: ["Остается после вайпа"],
    },
    vip: {
      name: "VIP",
      price: "69 ₽",
      image: "../public/images/mine.png",
      commands: [
        { cmd: "/back", desc: "вернуться на место смерти" },
        { cmd: "/donatelist", desc: "посмотреть список донатеров" },
        { cmd: "/skin", desc: "поставить скин игрока" },
        { cmd: "/donchat", desc: "чат донатеров" },
        { cmd: "/near", desc: "игроки вблизи" },
        { cmd: "/fly", desc: "режим полёта" },
        { cmd: "/flylist", desc: "список игроков в режиме полёта" },
      ],
      regions: ["7 приватoв по 60000 блоков"],
      prefixes: ["[FLY]"],
      additional: ["Остается после вайпа"],
    },
    gold: {
      name: "GOLD",
      price: "150 ₽",
      image: "../public/images/mine.png",
      commands: [
        { cmd: "/back", desc: "вернуться на место смерти" },
        { cmd: "/donatelist", desc: "посмотреть список донатеров" },
        { cmd: "/skin", desc: "поставить скин игрока" },
        { cmd: "/donchat", desc: "чат донатеров" },
        { cmd: "/near", desc: "игроки вблизи" },
        { cmd: "/fly", desc: "режим полёта" },
        { cmd: "/flylist", desc: "список игроков в режиме полёта" },
      ],
      regions: ["5 привата по 40000 блоков"],
      prefixes: ["[FLY]"],
      additional: ["Остается после вайпа"],
    },
    ultra: {
      name: "ULTRA",
      price: "240 ₽",
      image: "../public/images/mine.png",
      commands: [
        { cmd: "/back", desc: "вернуться на место смерти" },
        { cmd: "/donatelist", desc: "посмотреть список донатеров" },
        { cmd: "/skin", desc: "поставить скин игрока" },
        { cmd: "/donchat", desc: "чат донатеров" },
        { cmd: "/near", desc: "игроки вблизи" },
        { cmd: "/fly", desc: "режим полёта" },
        { cmd: "/flylist", desc: "список игроков в режиме полёта" },
      ],
      regions: ["5 привата по 40000 блоков"],
      prefixes: ["[FLY]"],
      additional: ["Остается после вайпа"],
    },
    legenda: {
      name: "LEGENDA",
      price: "349 ₽",
      image: "../public/images/mine.png",
      commands: [
        { cmd: "/back", desc: "вернуться на место смерти" },
        { cmd: "/donatelist", desc: "посмотреть список донатеров" },
        { cmd: "/skin", desc: "поставить скин игрока" },
        { cmd: "/donchat", desc: "чат донатеров" },
        { cmd: "/near", desc: "игроки вблизи" },
        { cmd: "/fly", desc: "режим полёта" },
        { cmd: "/flylist", desc: "список игроков в режиме полёта" },
      ],
      regions: ["5 привата по 40000 блоков"],
      prefixes: ["[FLY]"],
      additional: ["Остается после вайпа"],
    },
  };

  function updatePreview(donationId) {
    const donation = donations[donationId];
    if (donation) {
      previewDiv.innerHTML = `
              <div class="donate-header">
                  <img src="${donation.image}" alt="${donation.name}">
                  <div class="donate-title">
                      <h2>${donation.name}</h2>
                      <span>${donation.price}</span>
                  </div>
              </div>
              <div class="donate-details">
                  <div class="commands">
                      <h3>КОМАНДЫ</h3>
                      <ul>
                          ${donation.commands
                            .map(
                              (cmd) => `
                              <li><span class="cmd">${cmd.cmd}</span> <span class="cmd-desc">- ${cmd.desc}</span></li>
                          `
                            )
                            .join("")}
                      </ul>
                  </div>
                  <div class="regions-prefixes">
                      <div class="regions">
                          <h3>РЕГИОНЫ</h3>
                          <p>${donation.regions.join(", ")}</p>
                      </div>
                      <div class="prefixes">
                          <h3>ПРЕФИКС</h3>
                          <p class="prefix-value">${donation.prefixes.join(
                            ", "
                          )}</p>
                      </div>
                  </div>
                  <div class="additional">
                      <h3>СОДЕРЖИМОЕ</h3>
                      <p>${donation.additional.join(", ")}</p>
                  </div>
                <button class="buy-button" onclick="buyDonation('${donationId}')">КУПИТЬ ЗА ${donation.price}</button>
              </div>
          `;
    }
  }

  function buyDonation(donationId) {
    alert(`Buying ${donationId}...`);
  }

  privilegeItems.forEach((item) => {
    item.addEventListener("click", function () {
      const donationId = this.id;
      updatePreview(donationId);
      privilegeItems.forEach((i) => i.classList.remove("active2"));
      this.classList.add("active2");
    });
  });

  updatePreview("fly");
});
