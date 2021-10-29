const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
   e.preventDefault();

   const formData = new FormData(e.currentTarget);
   console.log(formData);
   formData.forEach((value, name) => {
      if (value === '') {
         alert('пуста строка');
      } else {
         // console.log(name);
         // console.log(value);
         e.currentTarget.reset(formData);
      };
       
   });
};


