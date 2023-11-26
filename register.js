 // Set the value of "Value of Return" from local storage
 document.getElementById('returnValue').value = localStorage.getItem('joinedCardData')
 ? JSON.parse(localStorage.getItem('joinedCardData')).Return
 : '';

// Function to submit the form (You can modify this function to send data to Google Sheets)
function submitForm() {
    var formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        age: document.getElementById('age').value,
        returnValue: document.getElementById('returnValue').value
    };
    
  
    // var url = 'https://script.google.com/macros/s/AKfycbxOisK1VIIcgC3NkQL6W8HdhgWbraDnmY41W645Oe4Y4nkNhISIWqMoQjYTcHqSufL5/exec'; 
    var url ='https://script.google.com/macros/s/AKfycbzQdODaDz6bGq_wHan59-0UP-e2mKN07NHAy0C55fXUNft1zo38EAlWPgPXL_IDYWW4/exec';
  
    fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*'
      },
      body: new URLSearchParams(formData)
    }).then(response => {
      console.log('Form submitted successfully');
      console.log(formData);
      alert("Submitted");
      
      // Handle success, e.g., show a confirmation message
    }).catch(error => {
      console.error('Error submitting form:', error);
      // Handle error, e.g., show an error message
    });
  }
  