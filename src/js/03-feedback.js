import throttle from 'lodash.throttle';


const feedbackForm = document.querySelector('.feedback-form');
const formEmail = document.querySelector('.feedback-form input');
const formMessage = document.querySelector('.feedback-form textarea');
const feedbackFormData = {}

const STORAGE_DATA_KEY = 'feedback-form-state';
const formData = {};

feedbackForm.addEventListener('input', throttle(onFormInput, 500));
feedbackForm.addEventListener('submit', onFormSubmit);

function onFormInput(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_DATA_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
    evt.preventDefault();
    const submitFormData = localStorage.getItem(STORAGE_DATA_KEY);
    const parsedSubmitFormData = JSON.parse(submitFormData);
    console.log(parsedSubmitFormData);

    localStorage.removeItem(STORAGE_DATA_KEY);
    evt.target.reset();
}

populateFormInput();


function populateFormInput() {
    const savedFormInput = localStorage.getItem(STORAGE_DATA_KEY);
    parsedSavedFormInput = JSON.parse(savedFormInput);
    if (parsedSavedFormInput) {
      formEmail.value = parsedSavedFormInput.email;
      formMessage.value = parsedSavedFormInput.message;
    }
    
}

