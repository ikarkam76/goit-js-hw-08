import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const formInputEmail = document.querySelector('.feedback-form input');
const formInputMessage = document.querySelector('.feedback-form textarea');
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
      formInputEmail.value = savedFormInput.email;
    }
    if (savedFormInput.message) {
      formInputMessage.value = savedFormInput.message;
    }
  } 

  for (const key in savedFormInput) {
    formData[key] = savedFormInput[key];
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
    evt.target.reset();
    localStorage.removeItem(STORAGE_DATA_KEY);
    delete formData.email;
    delete formData.message;
  } else {
    return alert('enter all fields!')
  };
};
