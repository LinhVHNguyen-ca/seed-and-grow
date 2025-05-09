
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

  const shuffledImages = images.sort(() => 0.5 - Math.random());
  const image1 = shuffledImages[0];
  const image2 = shuffledImages[1];
  const prompt = prompts[Math.floor(Math.random() * prompts.length)];

  const showTwo = Math.random() > 0.5;

  let output = `<div><img src="${image1.url}" alt="${image1.title}"><p><strong>${image1.title}</strong></p>`;
  if (showTwo) {
    output += `<img src="${image2.url}" alt="${image2.title}"><p><strong>${image2.title}</strong></p>`;
  }
  output += `<p><strong>Prompt:</strong> ${prompt}</p></div>`;

  seedDiv.innerHTML = output;
  seedDiv.setAttribute("data-copy", `${image1.title} ${image1.url}` + (showTwo ? `\n${image2.title} ${image2.url}` : "") + `\nPrompt: ${prompt}`);
}

function copySeed() {
  const text = document.getElementById("seedDisplay").getAttribute("data-copy");
  navigator.clipboard.writeText(text).then(() => alert("Seed copied to clipboard!"));
}
