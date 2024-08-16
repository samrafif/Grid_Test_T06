function generateRandomName() {
  const prefixes = ['Coro', 'Myxo', 'Rhino', 'Strepto', 'Bacillo', 'Staphylo', 'Entero', 'Vibro', 'Salmo', 'Hemo'];
  const infixes = ['vir', 'bact', 'tox', 'phage', 'cocci', 'nemo', 'soma', 'lith', 'cyte', 'zyme'];
  const suffixes = ['itis', 'osis', 'aemia', 'oma', 'philia', 'pathy', 'ia', 'emia', 'gen', 'tide'];

  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const infix = infixes[Math.floor(Math.random() * infixes.length)];
  const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];

  return prefix + infix + suffix;
}

function generateRandomDescription() {
  const symptoms = [
      'fever', 'coughing', 'fatigue', 'nausea', 'headaches',
      'muscle aches', 'vomiting', 'diarrhea', 'shortness of breath', 'rash'
  ];
  const transmissionMethods = [
      'airborne', 'direct contact', 'contaminated water', 'insect bites',
      'foodborne', 'bloodborne', 'sexual contact', 'droplet transmission', 'animal bites', 'soil contamination'
  ];
  const affectedAreas = [
      'respiratory system', 'digestive tract', 'nervous system',
      'circulatory system', 'muscular system', 'skin', 'joints',
      'eyes', 'liver', 'kidneys'
  ];

  const randomSymptoms = symptoms.sort(() => 0.5 - Math.random()).slice(0, 3).join(', ');
  const randomTransmission = transmissionMethods[Math.floor(Math.random() * transmissionMethods.length)];
  const randomAffectedArea = affectedAreas[Math.floor(Math.random() * affectedAreas.length)];

  return `This pathogen primarily affects the <i>${randomAffectedArea}</i>, causing symptoms such as <i>${randomSymptoms}</i>. It is transmitted via <i>${randomTransmission}</i>.`;
}

let mainWrapper = document.getElementById("wrapper");

function add_item(name, price, desc, img_src) {
  let itemWrapperEl = document.createElement("div")
  itemWrapperEl.classList.add("item")
  
  let prodImgEl = document.createElement("img")
  prodImgEl.src = img_src

  let prodNameEl = document.createElement("a")
  prodNameEl.classList.add("prod-name")
  prodNameEl.innerText = name

  let prodPriceEl = document.createElement("b")
  prodPriceEl.classList.add("prod-price")
  prodPriceEl.innerText = price

  let prodDescEl = document.createElement("p")
  prodDescEl.classList.add("prod-desc")
  prodDescEl.innerHTML = desc

  itemWrapperEl.appendChild(prodImgEl)
  itemWrapperEl.appendChild(prodNameEl)
  itemWrapperEl.appendChild(prodPriceEl)
  itemWrapperEl.appendChild(prodDescEl)
  
  return itemWrapperEl
}

const imagesCount = 12
const maxPrice = 1000

function gen_item() {
  let imgIdx = Math.floor(Math.random() * imagesCount)
  let imgName = `images/Mask Group-${imgIdx}.png`

  let pathogenName = generateRandomName()
  let pathogenDesc = generateRandomDescription()
  let pathogenPrice = `${Math.floor(Math.random() * maxPrice)}K`

  let itemWrapperEl = add_item(pathogenName, pathogenPrice, pathogenDesc, imgName)
  mainWrapper.appendChild(itemWrapperEl)
}

for (let index = 0; index < 8; index++) {
  gen_item()
  
}
