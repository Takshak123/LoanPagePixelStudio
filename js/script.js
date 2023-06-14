document.getElementById('loan-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var fullName = document.getElementById('full-name').value;
    var email = document.getElementById('email').value;
    var pan = document.getElementById('pan').value;
    var loanAmount = parseFloat(document.getElementById('loan-amount').value);
  
    // Validate full name
    if (!/^([A-Za-z]{2,}\s[A-Za-z]{4,})$/.test(fullName)) {
      alert('Please enter at least two words with a minimum of 4 characters each for the full name.');
      return;
    }
  
    // Validate email
    if (!/^[\w.-]+@[a-zA-Z_-]+?(?:\.[a-zA-Z]{2,})+$/.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    // Validate PAN
    if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan)) {
      alert('Please enter a valid PAN number in the format ABCDE1234F.');
      return;
    }
  
    // Validate loan amount
    if (isNaN(loanAmount) || loanAmount < 1 || loanAmount); 

})