const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
   e.preventDefault();

     const formElemebnt = e.currentTarget.elements;
   const mail = formElemebnt.email.value;
   const password = formElemebnt.password.value;

 if (mail === '' || password === '') {
         alert('пустая строка');
      } else {
         
    const formData =  {
      mail,password
    };
    console.log(formData);
    e.currentTarget.reset();
    
     };

   // const formData = new FormData(e.currentTarget);
   // // console.log(formData);
   // formData.forEach((value, name) => {
   //    if (value === '') {
   //       alert('пуста строка');
   //    } else {
   //       // const formData = { value, name };
   //       // return formData;
   //       console.log({ value, name});
   //       // console.log(value);
   //       e.currentTarget.reset(formData);
   //    };
       
   // });

 // console.dir(e.currentTarget.elements.email.value);
  
 
};


