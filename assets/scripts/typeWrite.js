function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const text = [
  "Help Good People",
  "Make Customers Happy",
  "Support Good Governance",
  "Validate Your Idea",
  "Promote Brands and Success"
];
const el = document.getElementById('typewriter');

let sleepTime = 70;
let textIndex = 0;

const writeLoop = async () => {
  while (true) {
    let currentText = text[textIndex];

    for (let i = 0; i < currentText.length; i++) {
      el.innerText = currentText.substring(0, i + 1);
      await sleep(sleepTime);
    }
    
    await sleep(sleepTime * 10);
    
    for (let i = currentText.length; i > 0; i--) {
      el.innerText = currentText.substring(0, i - 1);
      await sleep(sleepTime);
    }
    
    await sleep(sleepTime * 5);

    if (textIndex === text.length - 1) {
      textIndex = 0;
    } else {
      textIndex++;
    }
  }
};

writeLoop();

// biar ketip-ketip indikatornya
function ketipKetip() {
  var cursor = document.getElementById("cursor");
  var isVisible = true;

  setInterval(function() {
    isVisible = !isVisible;
    cursor.style.visibility = isVisible ? "visible" : "hidden";
  }, 600);
}

ketipKetip();