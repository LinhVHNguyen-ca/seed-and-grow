
const images = [
  {
    title: "Bronze Seated Cat – Unknown Artist",
    url: "https://dbi5a5cdy48wt.cloudfront.net/loris/co11/ago.6533.jp2/full/680,/0/default.jpg"
  },
  {
    title: "A woman with a spade – Vincent van Gogh",
    url: "https://dbi5a5cdy48wt.cloudfront.net/loris/co6/24785.jp2/full/680,/0/default.jpg"
  }
];

const prompts = [
  "What is the dominant sensory experience in this world—scent, touch, sound?",
  "Who or what is considered ‘trash’ in this world? What is valued?",
  "Describe a ritual or tradition that connects these images.",
  "Invent a myth that explains their origin.",
  "What law or taboo might exist in this world?"
];

function generateSeed() {
  const seedDiv = document.getElementById("seedDisplay");
  seedDiv.innerHTML = "";

  // Pick first random image
  const image1Index = Math.floor(Math.random() * images.length);
  const image1 = images[image1Index];

  // Decide whether to show a second image
  const showTwo = Math.random() > 0.5;
  let image2 = null;

  if (showTwo) {
    // Pick a different image for image2
    let image2Index;
    do {
      image2Index = Math.floor(Math.random() * images.length);
    } while (image2Index === image1Index); // ensures different image
    image2 = images[image2Index];
  }

  const prompt = prompts[Math.floor(Math.random() * prompts.length)];

  let output = `<div><img src="${image1.url}" alt="${image1.title}"><p><strong>${image1.title}</strong></p>`;
  if (showTwo && image2) {
    output += `<img src="${image2.url}" alt="${image2.title}"><p><strong>${image2.title}</strong></p>`;
  }
  output += `<p><strong>Prompt:</strong> ${prompt}</p></div>`;

  const copyText = image1.title + " " + image1.url +
    (showTwo && image2 ? `\n${image2.title} ${image2.url}` : "") +
    `\nPrompt: ${prompt}`;

  seedDiv.innerHTML = output;
  seedDiv.setAttribute("data-copy", copyText);
}


function copySeed() {
  const text = document.getElementById("seedDisplay").getAttribute("data-copy");
  navigator.clipboard.writeText(text).then(() => alert("Seed copied to clipboard!"));
}
