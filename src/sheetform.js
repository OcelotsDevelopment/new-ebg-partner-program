document
  .getElementById("contactForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const form = e.target;
    const submitBtn = document.querySelector("#submit-btn");
    const spinner = document.querySelector(".loading-spinner");
    const btnText = submitBtn.querySelector(".btn-text");
    // const messageDiv = document.getElementById('message');

    // Show loading state
    submitBtn.disabled = true;
    spinner.style.display = "inline-block";
    btnText.style.display = "none";
    // messageDiv.style.display = 'none';

    // Create FormData object (alternative to JSON)
    const formData = {
      name: `${form.name.value} ${form.lastname.value}`,
      email: form.email.value,
      phone: form.mobileno.value,
      product_category: form.productcategory.value,
      state: form.state.value,
      investment: form.investment.value,
    };
    // console.log(form.investment.value);

    // for (const value of formData.values()) {
    //   console.log(value);
    // }

    try {
      // Replace with your Google Apps Script URL
      // "https://script.google.com/macros/s/AKfycbw-CYr1Of6r0as-izzdOVKNFCQED_Upd8C2eNVcOveAGAbh0qLjwKGo-m0_HW0DeRJKyw/exec",
      let response= await fetch("https://partner-network.theebg.com/submit-to-zoho.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log(
        response,
        "responseresponseresponseresponseresponseresponseresponse"
      );

      const result = await response.json();

      if (result.status === "success") {
        // Show success message
        // messageDiv.textContent = '✅ Thank you! Your message has been sent successfully.';
        // messageDiv.className = 'message success';
        // messageDiv.style.display = 'block';

        // Reset form
        form.reset();
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      // Show error message
      // messageDiv.textContent = '❌ Sorry, there was an error sending your message. Please try again.';
      // messageDiv.className = 'message error';
      // messageDiv.style.display = 'block';
      console.log("Form submission error:", error);
    } finally {
      // Reset button state
      submitBtn.disabled = false;
      spinner.style.display = "none";
      btnText.style.display = "block";
      // btnText.textContent = 'Send Message';
      form.reset();
    }
  });

// name
// lastname
// mobileno
// email
// productcategory
// state
// investment
