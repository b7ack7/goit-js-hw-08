import throttle from 'lodash.throttle'
const feedbackForm = localStorage.getItem("feedback-form-state");
let formData = {};
const savedValues = localStorage.getItem(feedbackForm);
const savedDataObject = JSON.parse(savedValues);

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form  input'),
  textarea: document.querySelector('.feedback-form  textarea'),
};

refs.form.addEventListener('input', throttle(storageFormData, 500));
refs.form.addEventListener('submit', onFormSubmit);

reloadPage();

function storageFormData(e) {
  formData[e.target.name] = e.target.value.trim();
  localStorage.setItem(feedbackForm, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();

  const savedDatas = JSON.parse(localStorage.getItem(feedbackForm));
  console.log(savedDatas);

  e.currentTarget.reset();
  localStorage.removeItem(feedbackForm);
  formData = {};
}

function reloadPage() {
  if (savedValues) {
    refs.input.value = savedDataObject.email || '';
    refs.textarea.value = savedDataObject.message || '';
  }
}