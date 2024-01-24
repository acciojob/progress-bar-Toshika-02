//your JS code here. If required.
let currentStep = 1;
const totalSteps = 5;

function updateProgressBar() {
    for (let i = 1; i <= totalSteps; i++) {
        const circle = document.getElementById(`circle-${i}`);
        if (i < currentStep) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    }

    document.getElementById('prev').disabled = currentStep === 1;
    document.getElementById('next').disabled = currentStep === totalSteps;
}

function nextStep() {
    if (currentStep < totalSteps) {
        currentStep++;
        updateProgressBar();
    }
}

function prevStep() {
    if (currentStep > 1) {
        currentStep--;
        updateProgressBar();
    }
}

updateProgressBar();

