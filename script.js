let currentStep = 1;
const totalSteps = 5;

document.getElementById("solution").addEventListener("click", () => {
 
  if (currentStep <= totalSteps) {
    const nextBox = document.querySelector(`.step-${currentStep}`);
 
    if (nextBox) {
      nextBox.classList.remove("hidden");
      nextBox.classList.add("show");

      if (currentStep === 1) {
        renderPieChart();
      }
    }
    currentStep++;
  }
});

document.querySelectorAll(".grid-box").forEach((card) => {
  card.addEventListener("click", (e) => {
    // Prevent click from affecting reveal logic
    e.stopPropagation();

    // Only allow flip if the box is visible
    if (card.classList.contains("show")) {
      card.classList.toggle("flipped");
    }
  });
});


//grafi
const container = document.getElementById("imageSwapContainer");
const images = container.querySelectorAll(".graph-img");

let currentIndex = 0;

container.addEventListener("click", () => {
  images[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % images.length; // cycle between images
  images[currentIndex].classList.add("active");
});


// === Navbar Active Link on Scroll ===
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});




function renderPieChart() {
  const chartCanvas = document.getElementById('costPieChart');
  if (chartCanvas) {
    const ctx = chartCanvas.getContext('2d');
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: [
          'Computo metrico',
          'Smaltimento scarti',
          'Oneri e sicurezza',
          'Collaudi',
          'Autorizzazioni',
          'Cantiere',
          'Imprevisti'
        ],
        datasets: [{
          data: [
            492995,    // Computo metrico
            16266,     // Smaltimento scarti
            73949.25,  // Oneri
            9734.4,    // Collaudi
            4929.95,   // Autorizzazioni
            12324.88,  // Cantiere
            49299.5    // Imprevisti
          ],
          backgroundColor: [
            '#f44336', '#a5d6a7', '#ffeb3b',
            '#4caf50', '#ff9800', '#ffc107', '#9c27b0'
          ],
          borderWidth: 1
        }]
      },
      options: {
        plugins: {
          legend: {
            display: false
          },
          outlabels: {
            text: '%l %p',
            color: 'black',
            stretch: 20,
            lineColor: 'black',
            font: {
              resizable: true,
              minSize: 10,
              maxSize: 14
            }
          }
        }
      }
    });
  }
}
