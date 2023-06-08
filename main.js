function handleCardOne() {
  const alertCard = document.querySelector(".alertBox1Card");
  const alertBtn = document.querySelector(".alertBox1Btn");
  const card = document.querySelector(".card1");
  const btn = document.querySelector(".btnCard1");

  card.addEventListener("click", () => {
    alertCard.textContent = "Clicked to Card One";
  });

  btn.addEventListener("click", () => {
    alertBtn.textContent = "Clicked to Button One";
  });
}

function handleCardTwo() {
  const alertCard = document.querySelector(".alertBox2Card");
  const alertBtn = document.querySelector(".alertBox2Btn");
  const card = document.querySelector(".card2");
  const btn = document.querySelector(".btnCard2");

  card.addEventListener("click", () => {
    alertCard.textContent = "Clicked to Card Two";
  });

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    alertBtn.textContent = "Clicked to Button Two";
  });
}

function handleCardThree() {
  const alertCard = document.querySelector(".alertBox3Card");
  const alertBtn = document.querySelector(".alertBox3Btn");
  const card = document.querySelector(".card3");
  const btn = document.querySelector(".btnCard3");

  card.addEventListener("click", (e) => {
    if (btn && btn.contains(e.target)) {
      console.log("parent ignore click");
      return;
    }

    alertCard.textContent = "Clicked to Card Three";
  });

  btn.addEventListener("click", (e) => {
    alertBtn.textContent = "Clicked to Button Three";
  });
}

(() => {
  handleCardOne();
  handleCardTwo();
  handleCardThree();
})();
