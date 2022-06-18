import throttle from 'lodash.throttle';

const STORAGE_DATA_KEY = 'feedback-form-state';
const formData = {};

const feedbackForm = document.querySelector('.feedback-form');
const formEmail = document.querySelector('.feedback-form input');
const formMessage = document.querySelector('.feedback-form textarea');

populateFormInput();

feedbackForm.addEventListener('input', throttle(onFormInput, 500));
feedbackForm.addEventListener('submit', onFormSubmit);

function onFormInput(evt) {
    formData[evt.target.name] = evt.target.value;
    localFormData = JSON.stringify(formData);
    localStorage.setItem(STORAGE_DATA_KEY, localFormData);
}

function onFormSubmit(evt) {
    evt.preventDefault();
    const submitFormData = JSON.parse(localStorage.getItem(STORAGE_DATA_KEY));
    console.log(submitFormData);

    localStorage.removeItem(STORAGE_DATA_KEY);
    evt.target.reset();
}

function populateFormInput() {
   
    if (STORAGE_DATA_KEY !== 0) {
      const savedFormInput = JSON.parse(localStorage.getItem(STORAGE_DATA_KEY));
      formEmail.value = savedFormInput.email;
      formMessage.value = savedFormInput.message;
    } else {
      formEmail.value = '';
      formMessage.value = '';
    }
    
}

