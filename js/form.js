const step0ne = document.querySelector('.stepOne');
const stepTwo = document.querySelector('.stepTwo');
const stepThree = document.querySelector('.stepThree');

const radioBtn = document.querySelectorAll('.step-btn');


const requiredStepTwo = stepTwo.querySelectorAll('[required]')
const requiredStepThree = stepThree.querySelectorAll('[required]')


let StepsEnum = Object.freeze({
    STEP_ONE: "STEP_ONE",
    STEP_TWO: "STEP_TWO",
    STEP_THREE: "STEP_THREE",
})

let currentStep = StepsEnum.STEP_ONE

const getCurrentStep = () => {
    switch (currentStep) {
        case StepsEnum.STEP_ONE:
            return (
                step0ne.classList.add('d-none'),
                stepTwo.classList.remove('d-none'),
                stepThree.classList.add('d-none'),
                    removeRequired(requiredStepTwo),
                    removeRequired(requiredStepThree)
            )
        case StepsEnum.STEP_TWO:
            return (
                step0ne.classList.remove('d-none'),
                stepTwo.classList.remove('d-none'),
                stepThree.classList.add('d-none'),
                returnRequired(requiredStepTwo),
                removeRequired(requiredStepThree)
            )
        case StepsEnum.STEP_THREE:
            return (
                step0ne.classList.remove('d-none'),
                stepTwo.classList.add('d-none'),
                stepThree.classList.remove('d-none'),
                returnRequired(requiredStepThree),
                removeRequired(requiredStepTwo)
            )
    }
}

getCurrentStep();


radioBtn.forEach((el, index) => {
    el.addEventListener('click', () => {
        if (index === 0) {
            currentStep = StepsEnum.STEP_ONE
        }
        if (index === 1) {
            currentStep = StepsEnum.STEP_THREE
        }
        if (index === 2) {
            currentStep = StepsEnum.STEP_TWO
        }
        getCurrentStep();
    })
})


// requiredStepTwo.forEach(i => {
//     document.getElementById(`${i.id}`).required = false;
// })

function removeRequired(step) {
    step.forEach(i => {
        document.getElementById(`${i.id}`).required = false;
    })
}

function returnRequired(step) {
    step.forEach(i => {
        document.getElementById(`${i.id}`).required = true;
    })
}