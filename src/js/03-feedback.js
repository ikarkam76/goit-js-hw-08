import throttle from 'lodash.throttle';

const STORAGE_DATA_KEY = 'feedback-form-state';
const formData = {};

const feedbackForm = document.querySelector('.feedback-form');
const formEmail = document.querySelector('.feedback-form input');
const formMessage = document.querySelector('.feedback-form textarea');

feedbackForm.addEventListener('input', throttle(onFormInput, 500));
feedbackForm.addEventListener('submit', onFormSubmit);

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_DATA_KEY, JSON.stringify(formData));
   console.log(JSON.stringify(formData));
}

populateFormInput();

function populateFormInput() {
  const savedFormInput = JSON.parse(localStorage.getItem(STORAGE_DATA_KEY));
  if (savedFormInput) {
    if (savedFormInput.email) {
        formEmail.value = savedFormInput.email;
    }
    if (savedFormInput.message) {
        formMessage.value = savedFormInput.message;
    }
  } 
} 


function onFormSubmit(evt) {
  evt.preventDefault();

  evt.currentTarget.reset();

}
