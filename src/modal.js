document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelectorAll(".bap");

  const modal = /*html*/ `
    <div id="partnerModal" class="partner-modal fixed inset-0 bg-black/15 bg-opacity-40 flex justify-center items-center z-50">
    <div data-node-type="commerce-cart-container" role="dialog" class="w-commerce-commercecartcontainer card-details bg-white p-6 rounded-lg shadow-lg max-w-xl w-full">
    <div class="w-commerce-commercecartheader cart-title flex justify-between items-center mb-4">
      <h1 class="partner-title text-3xl font-semibold">
        Become a <span class="partner-highlight text-gradient">Partner</span>
      </h1>
      <a id="closePartnerModal" class="w-commerce-commercecartcloselink closse-button w-inline-block cursor-pointer" onclick="document.getElementById('partnerModal')?.remove()">
        <svg class="cart-closer" width="16px" height="16px" viewBox="0 0 16 16">
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g fill-rule="nonzero" fill="#333333">
              <polygon points="6.23223305 8 0.616116524 13.6161165 2.38388348 15.3838835 8 9.76776695 13.6161165 15.3838835 15.3838835 13.6161165 9.76776695 8 15.3838835 2.38388348 13.6161165 0.616116524 8 6.23223305 2.38388348 0.616116524 0.616116524 2.38388348 6.23223305 8"></polygon>
            </g>
          </g>
        </svg>
      </a>
    </div>
    <div class="w-commerce-commercecartformwrapper cart-form-wrap">
      <div class="w-commerce-commercecartemptystate cart-empty">
        <div aria-label="This cart is empty" aria-live="polite">
          <section class="partner-form-section">
            <div class="partner-form-container">
              <p class="partner-subtitle text-lg mb-6">
                Join us and unlock exclusive benefits! Fill out the form below, and our team will get in touch with you.
              </p>
              
              <form id="partnerForm" class="partner-form">
                <div class="form-row flex space-x-4 mb-4">
                  <input type="text" id="firstName" name="firstName" placeholder="First Name" required class="p-3 border border-gray-300 rounded-md w-full" />
                  <input type="text" id="lastName" name="lastName" placeholder="Last Name" required class="p-3 border border-gray-300 rounded-md w-full" />
                </div>
                <div class="form-row mb-4">
                  <input type="tel" id="number" name="number" placeholder="Number" required class="p-3 border border-gray-300 rounded-md w-full" />
                </div>
                <div class="form-row mb-4">
                  <input type="email" id="email" name="email" placeholder="Email Address" required class="p-3 border border-gray-300 rounded-md w-full" />
                </div>
                 <div class="form-row mb-4">
                  <label for="Product Category" class="investment-label block text-sm mb-2">Product Category*</label>
                  <select id="productCategory" name="Product category" required class="p-3 border border-gray-300 rounded-md w-full">
                    <option value="">Select Product Category</option>
                    <option value="Appliance">Appliance</option>
                    <option value="Mobility">Mobility</option>
                    <option value="Battery(BaaS)">Battery(BaaS)</option>
                  </select>
                </div>
                <div class="form-row mb-4">
                  <label for="location" class="investment-label block text-sm mb-2">Location *</label>
                  <select id="investment" name="investment" required class="p-3 border border-gray-300 rounded-md w-full">
                   <option value="">Select State</option>
  <option value="andhra-pradesh">Andhra Pradesh</option>
  <option value="arunachal-pradesh">Arunachal Pradesh</option>
  <option value="assam">Assam</option>
  <option value="bihar">Bihar</option>
  <option value="chhattisgarh">Chhattisgarh</option>
  <option value="goa">Goa</option>
  <option value="gujarat">Gujarat</option>
  <option value="haryana">Haryana</option>
  <option value="himachal-pradesh">Himachal Pradesh</option>
  <option value="jharkhand">Jharkhand</option>
  <option value="karnataka">Karnataka</option>
  <option value="kerala">Kerala</option>
  <option value="madhya-pradesh">Madhya Pradesh</option>
  <option value="maharashtra">Maharashtra</option>
  <option value="manipur">Manipur</option>
  <option value="meghalaya">Meghalaya</option>
  <option value="mizoram">Mizoram</option>
  <option value="nagaland">Nagaland</option>
  <option value="odisha">Odisha</option>
  <option value="punjab">Punjab</option>
  <option value="rajasthan">Rajasthan</option>
  <option value="sikkim">Sikkim</option>
  <option value="tamil-nadu">Tamil Nadu</option>
  <option value="telangana">Telangana</option>
  <option value="tripura">Tripura</option>
  <option value="uttar-pradesh">Uttar Pradesh</option>
  <option value="uttarakhand">Uttarakhand</option>
  <option value="west-bengal">West Bengal</option>
  <option value="andaman-nicobar">Andaman and Nicobar Islands</option>
  <option value="chandigarh">Chandigarh</option>
  <option value="dadra-nagar-haveli">Dadra and Nagar Haveli and Daman & Diu</option>
  <option value="delhi">Delhi</option>
  <option value="jammu-kashmir">Jammu and Kashmir</option>
  <option value="ladakh">Ladakh</option>
  <option value="lakshadweep">Lakshadweep</option>
  <option value="puducherry">Puducherry</option>
                  </select>
                </div>
                <input type="hidden" name="_subject" value="New submission!">
                <input type="hidden" name="_captcha" value="false">
                <div class="form-row mb-4">
                  <label for="investment" class="investment-label block text-sm mb-2">Optimal Investment *</label>
                  <select id="investment" name="investment" required class="p-3 border border-gray-300 rounded-md w-full">
                    <option value="">Select Investment</option>
                    <option value="5-20">5 Lakhs - 20 Lakhs</option>
                    <option value="20-50">20 Lakhs - 50 Lakhs</option>
                    <option value="50-100000">50 Lakhs - 1 Lakh</option>
                    <option value="100000+">1 Lakh+</option>
                  </select>
                </div>
                <button type="submit" id="modal-submit-btn"
                class="w-full min-h-10 bg-gradient-to-r from-primary to-secondary text-white font-semibold py-2 rounded-md shadow-md hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-primary flex justify-center">
                <span class="modal-btn-text">Submit</span>
                <span class="modal-loading-spinner hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="loading-spinner animate-spin lucide lucide-loader-circle-icon lucide-loader-circle">
                  <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                </svg>
                </span>
              </button>
              </form>

              <script>
                document
  .getElementById("partnerForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const form = e.target;
    const submitBtn = document.querySelector("#modal-submit-btn");
    const spinner = document.querySelector(".modal-loading-spinner");
    const btnText = submitBtn.querySelector(".modal-btn-text");

    // Show loading state
    submitBtn.disabled = true;
    spinner.style.display = "inline-block";
    btnText.style.display = "none";

    // Create FormData object (alternative to JSON)
    const formData = {
      name: form.name.value + " " + form.lastname.value,
      email: form.email.value,
      phone: form.mobileno.value,
      product_category: form.productcategory.value,
      state: form.state.value,
      investment: form.investment.value,
    };

    try {
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
        form.reset();
      } else {
        throw new Error(result.message || "Failed to send message");
      }
    } catch (error) {
      console.log("Form submission error:", error);
    } finally {
      // Reset button state
      submitBtn.disabled = false;
      spinner.style.display = "none";
      btnText.style.display = "block";
      form.reset();
    }
  });
              </script>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</div>
`;

  button.forEach((btn) => {
    btn.addEventListener("click", function () {
      document.body.insertAdjacentHTML("beforeend", modal);
    });
  });

});

// https://script.google.com/macros/s/AKfycbyRZ2wwObDPtaQikax0Y0_9G3UgrpsAemf1-yvifLznW07yRCrxwK_jnBjkUONJPUpz/exec
// AKfycbyRZ2wwObDPtaQikax0Y0_9G3UgrpsAemf1-yvifLznW07yRCrxwK_jnBjkUONJPUpz
