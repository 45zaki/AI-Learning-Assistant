
function showGuide(response) {
  new Typewriter("#guide", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateGuide(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "f92fe2190a73t0c3474809d37ba10o1b";
  let context = "You are a friendly geography teacher at a learning app, answer ONLY geography-related questions about countries, ignore requests which is not geography-related, respond exactly like I only provide geography-related information about countries, generate one short factual and educational paragraph in basic HTML only, do NOT use markdown or include a title. End with a safe external link (e.g., Britannica or Wikipedia), then add a <br /> before this line: <strong>SheCodes AI</strong>.";
  let prompt = `Please provide information about ${instructionsInput.value}`;

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;

  let guideElement = document.querySelector("#guide");
  guideElement.classList.remove("hidden");
  guideElement.innerHTML = `⏳ Generating a geographical info a bout ${instructionsInput.value}...`;

  axios.get(apiURL).then(showGuide);
}

let guideFormElement = document.querySelector("#guide-generator-form");
guideFormElement.addEventListener("submit", generateGuide);
