
// // function storeInput() {
// //     // Initialize an empty array
// //     const inputArray = [];
  
// //     // Get the input elements
// //     const input1 = document.getElementById("fname");
// //     const input2 = document.getElementById("pass");
// //     const input3 = document.getElementById("male");
  
// //     // Get the values of the input elements
// //     const value1 = input1.value;
// //     const value2 = input2.value;
// //     const value3 = input3.value;
  
// //     // Add the values to the array
// //     inputArray.push(value1, value2, value3);
  
// //     // Print the array to the console
// //     console.log(inputArray);
// //   }



// window.onload = function(){



// document.getElementById('form').addEventListener('submit', function(event) {
   
//     event.preventDefault();
//     const inputArray = [];
  
//     // Get the input elements
//     const input1 = document.getElementById("fname");
//     const input2 = document.getElementById("pass");
//     const input3 = document.getElementById("male");
  
//     // Get the values of the input elements
//     const value1 = input1.value;
//     const value2 = input2.value;
//     const value3 = input3.value;
  
//     // Add the values to the array
//     inputArray.push(value1, value2, value3);
  
//     // Print the array to the console
//     console.log(inputArray);


//     class Patient {
//         constructor(fullName, password, birthday, gender, chronicDiseases, imageUrl, phone) {
//             this.fullName = fullName;
//             this.password = password;
//             this.birthday = birthday;
//             this.gender = gender;
//             this.chronicDiseases = chronicDiseases;
//             this.imageUrl = imageUrl;
//             this.phone = phone;
//         }
//     }

//     // function render() {
//     //     // Get form data
//     //     const form = document.getElementById('form');
//     //     const fullName = form.fname.value;
//     //     const password = form.pass.value;
//     //     const gender = form.gender.value;
//     //     const birthday = form.birthday.value;
//     //     const phone = form.phone.value;
//     //     const imageUrl = form.image_url.value;
    
//     //     // Get chronic diseases
//     //     const chronicSelect = form.chronic;
//     //     const chronicDiseases = Array.from(chronicSelect.selectedOptions).map(option => option.value);
    
//     //     // Create patient object
//     //     const patient = new Patient(fullName, password, birthday, gender, chronicDiseases, imageUrl, phone);
    
//     //     // Get existing patients from local storage
//     //     let patients = JSON.parse(localStorage.getItem('patients')) || [];
    
//     //     // Add new patient to the array
//     //     patients.push(patient);
    
//     //     // Save updated patients array to local storage
//     //     localStorage.setItem('patients', JSON.stringify(patients));
    
//     //     // Render patient cards
//     //     displayPatients();
    
//     //     // Prevent form submission
//     //     return false;
//     // }
    
//     // function displayPatients() {
//     //     const mainSection = document.getElementById('main-section');
//     //     mainSection.innerHTML = '';
    
//     //     const patients = JSON.parse(localStorage.getItem('patients')) || [];
    
//     //     patients.forEach(patient => {
//     //         const card = document.createElement('div');
//     //         card.className = 'card';
    
//     //         card.innerHTML = `
//     //             <img src="${patient.imageUrl}" alt="${patient.fullName}">
//     //             <h2>${patient.fullName}</h2>
//     //             <p><strong>Date of Birth:</strong> ${patient.birthday}</p>
//     //             <p><strong>Gender:</strong> ${patient.gender}</p>
//     //             <p><strong>Chronic Diseases:</strong> ${patient.chronicDiseases.join(', ')}</p>
//     //             <p><strong>Phone:</strong> ${patient.phone}</p>
//     //         `;
    
//     //         // mainSection.appendChild(card);
//     //     });
//     // }
    
//     // Initialize patient cards display on page load
//     // window.onload = displayPatients;





// })
// // function render() {
// //         // Get form data
// //         const form = document.getElementById('form');
// //         const fullName = form.fname.value;
// //         const password = form.pass.value;
// //         const gender = form.gender.value;
// //         const birthday = form.birthday.value;
// //         const phone = form.phone.value;
// //         const imageUrl = form.image_url.value;
    
// //         // Get chronic diseases
// //         const chronicSelect = form.chronic;
// //         const chronicDiseases = Array.from(chronicSelect.selectedOptions).map(option => option.value);
    
// //         // Create patient object
// //         const patient = new Patient(fullName, password, birthday, gender, chronicDiseases, imageUrl, phone);
    
// //         // Get existing patients from local storage
// //         let patients = JSON.parse(localStorage.getItem('patients')) || [];
    
// //         // Add new patient to the array
// //         patients.push(patient);
    
// //         // Save updated patients array to local storage
// //         localStorage.setItem('patients', JSON.stringify(patients));
    
// //         // Render patient cards
// //         displayPatients();
    
// //         // Prevent form submission
// //         return false;
// //     }
    
// //     function displayPatients() {
// //         const mainSection = document.getElementById('main-section');
// //         mainSection.innerHTML = '';
    
// //         const patients = JSON.parse(localStorage.getItem('patients')) || [];
    
// //         patients.forEach(patient => {
// //             const card = document.createElement('div');
// //             card.className = 'card';
    
// //             card.innerHTML = `
// //                 <img src="${patient.imageUrl}" alt="${patient.fullName}">
// //                 <h2>${patient.fullName}</h2>
// //                 <p><strong>Date of Birth:</strong> ${patient.birthday}</p>
// //                 <p><strong>Gender:</strong> ${patient.gender}</p>
// //                 <p><strong>Chronic Diseases:</strong> ${patient.chronicDiseases.join(', ')}</p>
// //                 <p><strong>Phone:</strong> ${patient.phone}</p>
// //             `;
    
// //             // mainSection.appendChild(card);
// //         });
// //     }


// }
// function render() {
//     // Get form data
//     const form = document.getElementById('form');
//     const fullName = form.fname.value;
//     const password = form.pass.value;
//     const gender = form.gender.value;
//     const birthday = form.birthday.value;
//     const phone = form.phone.value;
    

//     // Get chronic diseases
//     const chronicSelect = form.chronic;
//     const chronicDiseases = Array.from(chronicSelect.selectedOptions).map(option => option.value);

//     // Create patient object
//     const patient = new Patient(fullName, password, birthday, gender, chronicDiseases, imageUrl, phone);

//     // Get existing patients from local storage
//     let patients = JSON.parse(localStorage.getItem('patients')) || [];

//     // Add new patient to the array
//     patients.push(patient);

//     // Save updated patients array to local storage
//     localStorage.setItem('patients', JSON.stringify(patients));

//     // Render patient cards
//     displayPatients();

//     // Prevent form submission
//     return false;
// }

// function displayPatients() {
//     const mainSection = document.getElementById('main-section');
//     mainSection.innerHTML = '';

//     const patients = JSON.parse(localStorage.getItem('patients')) || [];

//     patients.forEach(patient => {
//         const card = document.createElement('div');
//         card.className = 'card';

//         card.innerHTML = `
//             <img src="${patient.imageUrl}" alt="${patient.fullName}">
//             <h2>${patient.fullName}</h2>
//             <p><strong>Date of Birth:</strong> ${patient.birthday}</p>
//             <p><strong>Gender:</strong> ${patient.gender}</p>
//             <p><strong>Chronic Diseases:</strong> ${patient.chronicDiseases.join(', ')}</p>
//             <p><strong>Phone:</strong> ${patient.phone}</p>
//         `;

//         // mainSection.appendChild(card);
//     });
// }
let patients = [];

function render() {
  // Prevent form submission
  event.preventDefault();

  // Get the form data
  const formData = new FormData(document.getElementById('form'));

  // Create a new patient object
  const patient = {
    fname: formData.get('fname'),
    password: formData.get('password'),
    gender: formData.get('gender'),
    birthday: formData.get('birthday'),
    phone: formData.get('phone'),
    diseases: formData.get('diseases'),
    image: '2.png'
  };4

  const errorMessages = validateFormData(patient);

  if (errorMessages.length > 0) {
    displayErrorMessages(errorMessages);
    return false;
  }

  // Add the patient to the array
  patients.push(patient);
  

  // Save the patients to local storage
  localStorage.setItem('patients', JSON.stringify(patients));

  // Display the patient data in a card
  displayPatientCard(patient);
  

  // Reset the form
  document.getElementById('form').reset();

  return false;
}

function validateFormData(patient) {
    const errorMessages = [];
  
    // Validate username
    if (patient.fname.trim().indexOf(' ')!== -1) {
      errorMessages.push('Username cannot contain spaces');
    }
  // Validate password
  if (patient.password.length < 8) {
    errorMessages.push('Password must be at least 8 characters long');
  }
  if (!/[A-Z]/.test(patient.password)) {
    errorMessages.push('Password must contain at least one uppercase letter');
  }
  if (!/[0-9]/.test(patient.password)) {
    errorMessages.push('Password must contain at least one number');
  }
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(patient.password)) {
    errorMessages.push('Password must contain at least one special character');
  }
  const birthdayRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!birthdayRegex.test(patient.birthday)) {
    errorMessages.push('Birthday must be in YYYY-MM-DD format');
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(patient.email)) {
    errorMessages.push('Invalid email address');
  }

  const phoneRegex = /^07\d{9}$/;
  if (!phoneRegex.test(patient.phone)) {
    errorMessages.push('Phone number must be 10 digits long and start with 07');
  }

  return errorMessages;
}
function displayErrorMessages(errorMessages) {
    const errorContainer = document.getElementById('error-container');
    errorContainer.innerHTML = '';
  
    errorMessages.forEach((message) => {
      const errorElement = document.createElement('p');
      errorElement.textContent = message;
      errorElement.style.color = 'red';
      errorContainer.appendChild(errorElement);
    });
  }

function displayPatientCard(patient) {
    const card = document.createElement('div');
    card.className = 'card';
    const img = document.createElement('img');
    img.src = patient.image; 
  
    img.className = 'card-image';
    card.appendChild(img);
  
    const h2 = document.createElement('h2');
    h2.textContent = patient.fname;
    card.appendChild(h2);
  
    const pGender = document.createElement('p');
    pGender.textContent = 'Gender: '+ patient.gender;
    card.appendChild(pGender);
  
    const pBirthday = document.createElement('p');
    pBirthday.textContent = 'Birthday: '+ patient.birthday;
    card.appendChild(pBirthday);
  
    const pPhone = document.createElement('p');
    pPhone.textContent = 'Phone: ' +patient.phone;
    card.appendChild(pPhone);
  
    const pDiseases = document.createElement('p');
    pDiseases.textContent = 'Chronic diseases: '+ patient.diseases;
    card.appendChild(pDiseases);
  
    const cardContainer = document.getElementById('card-container');
    cardContainer.appendChild(card);
  }