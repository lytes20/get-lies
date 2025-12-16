async function fetchLies() {
  const response = await fetch("src/data/lies.json");
  const data = await response.json();
  return data.lies;
}

function displayLie(lie, lieParagraph) {
  lieParagraph.innerHTML = ""; // Clear the element first

  function typeWriter(i = 0) {
    const speed = 50;
    if (i < lie.length) {
      lieParagraph.innerHTML += lie.charAt(i);
      setTimeout(() => typeWriter(i + 1), speed);
    }
  }
  typeWriter();
}

async function main() {
  const lies = await fetchLies();

  const lieParagraph = document.getElementById("lie");
  const nextLieBtn = document.getElementById("nextLieBtn");

  let currentIndex = Math.floor(Math.random() * lies.length);

  // Display the first lie
  displayLie(lies[currentIndex].lie, lieParagraph);

  // Add click event listener to the button
  nextLieBtn.addEventListener("click", () => {
    window.location.reload();
  });
}

main();
