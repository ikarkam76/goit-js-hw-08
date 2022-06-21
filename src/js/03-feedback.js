import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const formEmail = document.querySelector('.feedback-form input');
const formMessage = document.querySelector('.feedback-form textarea');
const STORAGE_DATA_KEY = 'feedback-form-state';
const formData = {};


populateFormInput();

feedbackForm.addEventListener('input', throttle(onFormInput, 500));
feedbackForm.addEventListener('submit', onFormSubmit);

function onFormInput(evt) {
  formData [evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_DATA_KEY, JSON.stringify(formData));
};


function populateFormInput() {
  const savedFormInput = JSON.parse(localStorage.getItem(STORAGE_DATA_KEY));
  if (savedFormInput) {
    if (savedFormInput.email) {
        formData.email = savedFormInput.email;
        formEmail.value = savedFormInput.email;
    };
    if (savedFormInput.message) {
        formData.message = savedFormInput.message;
        formMessage.value = savedFormInput.message;
    };
  } 
};


function onFormSubmit(evt) {
  evt.preventDefault();
  const formDataSubmit = JSON.parse(localStorage.getItem(STORAGE_DATA_KEY));

  if (formDataSubmit) {
    if (!formDataSubmit.email) {
      return alert('enter your email!')
    }
    if (!formDataSubmit.message) {
      return alert('enter your message!')
    }
    console.log(formDataSubmit);
    localStorage.removeItem(STORAGE_DATA_KEY);
    evt.target.reset();
  }
};
