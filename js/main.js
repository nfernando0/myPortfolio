  const scriptURL = 'https://script.google.com/macros/s/AKfycbykf85hP39XikW9cxZuV54RdmRYUTOe1hzUGVrbJfmSAUD6KRZ0wijIGwlG12qHWjJj/exec'
  const form = document.forms['submit-to-google-sheet']
//   const btnKirim = document.querySelector('.btn-kirim')
  const myAlert = document.querySelector('.myAlert');

  form.addEventListener('submit', e => {
    e.preventDefault()

    // alert.classList.toggle('d-none');

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        myAlert.classList.toggle('.d-none')
        console.log('Success!', response)})
      .catch(error => console.error('Error!', error.message))
  })