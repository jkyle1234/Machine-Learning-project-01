let net;

const inputButton = document.getElementById("imageFile");
const fileButton = document.getElementById("imageButton");
const imgLocation = document.getElementById("imgUpload");


fileButton.addEventListener("click",function() {
  inputButton.click();
});

function loadImage(event){
  imgLocation.src = URL.createObjectURL(event.target.files[0]);
}

async function classifyImage(){
  console.log("Classify in progress...");
  const result = await net.classify(imgLocation);
  console.log("Classification completed");
  document.getElementById('result').innerText = `
    Prediction: \n${result[0].className}\n
    Probability: \n${result[0].probability}\n
  `
}


async function app() {
  // load the model
  console.log('Loading mobilenet...');
  net = await mobilenet.load();
  console.log('Sucessfully loaded model');
  document.getElementById('classify').addEventListener("click", classifyImage);
}

app();