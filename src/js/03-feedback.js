import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const formEmail = document.querySelector('.feedback-form input');
const formMessage = document.querySelector('.feedback-form textarea');
const STORAGE_DATA_KEY = 'feedback-form-state';

populateFormInput();

const formData = {
  email: formEmail.value,
  message: formMessage.value, 
};

feedbackForm.addEventListener('input', throttle(onFormInput, 500));
feedbackForm.addEventListener('submit', onFormSubmit);

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_DATA_KEY, JSON.stringify(formData));
   console.log(formData);
}


function populateFormInput() {
  const savedFormInput = JSON.parse(localStorage.getItem(STORAGE_DATA_KEY));
  if (savedFormInput) {
    if (savedFormInput.email) {
        formEmail.value = savedFormInput.email;
    };
    if (savedFormInput.message) {
        formMessage.value = savedFormInput.message;
    };
  } 
} 


function onFormSubmit(evt) {
  evt.preventDefault();

  // evt.currentTarget.reset();

}
