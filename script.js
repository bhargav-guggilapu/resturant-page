const video = document.getElementById("video");
const videoControl = document.getElementById("video-control");
const cardAdder = document.querySelector(".card-container");
const cardAdder3 = document.querySelector(".card-container3");

videoControl.addEventListener("click", () => {
  if (videoControl.classList.contains("active")) {
    video.play();
    videoControl.classList.remove("active");
    videoControl.style.opacity = "0";
  } else {
    video.pause();
    videoControl.classList.add("active");
    videoControl.style.opacity = "1";
  }
});

const cards = [
  {
    url: "./images/img10.png",
    cost: 190,
    name: "Home made pizza",
  },
  {
    url: "./images/img9.png",
    cost: 123,
    name: "Home made pizza",
  },
  {
    url: "./images/img8.png",
    cost: 190,
    name: "Home made pizza",
  },
  {
    url: "./images/img7.png",
    cost: 190,
    name: "Home made pizza",
  },
  {
    url: "./images/img6.png",
    cost: 19,
    name: "Home made pizza",
  },
  {
    url: "./images/img5.png",
    cost: 190,
    name: "Home made pizza",
  },
  {
    url: "./images/img4.png",
    cost: 190,
    name: "Home made pizza",
  },
  {
    url: "./images/img3.png",
    cost: 190,
    name: "Home made pizza",
  },
  {
    url: "./images/img2.png",
    cost: 19,
    name: "Home made pizza",
  },
  {
    url: "./images/img1.png",
    cost: 190,
    name: "Home made pizza",
  },
  {
    url: "./images/img10.png",
    cost: 190,
    name: "Home made pizza",
  },
  {
    url: "./images/img9.png",
    cost: 190,
    name: "Home made pizza",
  },
];

const sliderCards = [
  {
    url: "./images/img10.png",
    cost: 190,
    name: "Home made pizza",
  },
  {
    url: "./images/img2.png",
    cost: 184,
    name: "Tandoori Chicken",
  },
  {
    url: "./images/img1.png",
    cost: 116,
    name: "Chilli Chicken",
  },
];

cards.forEach((card) => {
  const code = codeTemp(card);

  cardAdder.innerHTML += code;
});

function codeTemp(card) {
  return `<div style="margin-bottom: 50px; margin-right: 40px">
  <img src="${card.url}" class="card-img" />
  <div
    style="
      background-color: white;
      margin-top: -3px;
      padding: 15px;
      font-size: 16px;
    "
  >
    <div style="display: flex; justify-content: space-between">
      <span>${card.name}</span>
      <span>$${card.cost}</span>
    </div>
    <div style="display: flex; justify-content: space-between">
      <div style="font-size: 12px; margin-top: 20px">
        <span
          style="
            background-color: #f2f2f2;
            padding: 5px;
            border-radius: 3px;
            margin-right: 10px;
          "
          ><i class="fa-solid fa-star"></i> <span>4.7</span></span
        >
        <span
          style="
            background-color: rgb(162, 162, 162);
            padding: 5px 3px;
            border-radius: 5px;
          "
          ><span
            style="
              background-color: #f2f2f2;
              border-radius: 3px;
              padding: 5px;
            "
            ><span>50-79</span> <span>min</span></span
          ></span
        >
      </div>
      <i
        class="fa-solid fa-plus"
        style="
          margin-top: 12px;
          background-color: #f3ba00;
          color: white;
          padding: 3px;
          border-radius: 3px;
        "
      ></i>
    </div>
  </div>
</div>`;
}

sliderCards.forEach((card) => {
  const code = codeTemp(card);

  cardAdder3.innerHTML += code;
});

const modal = document.querySelector("#cart-modal");
const modalBtn = document.querySelector("#cart");
const closeBtn = document.querySelector("#close");

const requestModal = document.querySelector("#request-modal");
const requestBtn = document.querySelector("#request");
const closeRequestBtn = document.querySelectorAll(".close-request");

// Events
modalBtn.addEventListener("click", () => {
  modal.style.display = "block";
  document.querySelector(".scrollabe").addEventListener("wheel", scrollFunc);
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  document.querySelector(".scrollabe").removeEventListener("wheel", scrollFunc);
});

requestBtn.addEventListener("click", () => {
  requestModal.style.display = "block";
  document.querySelector(".scrollabe").addEventListener("wheel", scrollFunc);
});

closeRequestBtn.forEach((ele) => {
  ele.addEventListener("click", () => {
    requestModal.style.display = "none";
    document
      .querySelector(".scrollabe")
      .removeEventListener("wheel", scrollFunc);
  });
});

function scrollFunc(e) {
  e.preventDefault();
  e.stopPropagation();
  return false;
}
