function calculateTotal() {
    // Get user input values
    const teamName = document.getElementById("teamName").value;
    const numPlayers = parseInt(document.getElementById("players").value);
    const registrationFee = parseFloat(document.getElementById("registrationFee").value);
  
    // Calculate total amount
    const totalAmount = numPlayers * registrationFee;
  
    // Display the payment bill
    const paymentBill = document.getElementById("paymentBill");
    const teamDetails = document.getElementById("teamDetails");
    const totalAmountElement = document.getElementById("totalAmount");
  
    teamDetails.textContent = `Team Name: ${teamName} | Players: ${numPlayers}`;
    totalAmountElement.textContent = `Total Registration Fee: ₹${totalAmount}`;
  
    paymentBill.style.display = "block"; // Show payment bill section
  }
  
  function processPayment() {
    
    window.location.assign("../htmls/payment.html");
    document.getElementById("registrationForm").reset(); // Reset form
    document.getElementById("paymentBill").style.display = "none"; // Hide bill after payment
  }
  