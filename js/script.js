let clientReviews = [
  document.querySelector(".clientReviews>div:nth-child(2)"),
  document.querySelector(".clientReviews>div:nth-child(3)"),
  document.querySelector(".clientReviews>div:nth-child(4)"),
];
let descTitle = document.querySelector(".descReviews>.title");

let gotoLeft = document.querySelector(".toLeftCard");
let gotoRight = document.querySelector(".toRightCard");
let isMiddleWrite = false;

console.log(clientReviews);

gotoLeft.onclick = gotoLeftCard;
gotoRight.onclick = gotoRightCard;

function checkMiddleCard() {
  if (!clientReviews[1].classList.contains("toWrite")) {
    descTitle.innerText = "What our clients are thinking";
    isMiddleWrite = false;
    toggleFocus();
  } else {
    descTitle.innerText = "Let us know what you think.";
    isMiddleWrite = true;
    toggleFocus();
  }
}

function toggleFocus() {
  if (isMiddleWrite == true) {
    clientReviews[1].classList.toggle("focused");
  }
}

function refreshElems() {
  clientReviews = [
    document.querySelector(".clientReviews>div:nth-child(2)"),
    document.querySelector(".clientReviews>div:nth-child(3)"),
    document.querySelector(".clientReviews>div:nth-child(4)"),
  ];
  checkMiddleCard();
}

function gotoLeftCard() {
  toggleFocus();
  let temp = clientReviews[2];
  clientReviews[2].outerHTML = clientReviews[1].outerHTML;
  clientReviews[1].outerHTML = clientReviews[0].outerHTML;
  clientReviews[0].outerHTML = temp.outerHTML;
  refreshElems();
}
function gotoRightCard() {
  toggleFocus();
  let temp = clientReviews[0];
  clientReviews[0].outerHTML = clientReviews[1].outerHTML;
  clientReviews[1].outerHTML = clientReviews[2].outerHTML;
  clientReviews[2].outerHTML = temp.outerHTML;
  refreshElems();
}
