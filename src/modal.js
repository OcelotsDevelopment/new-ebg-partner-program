document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelectorAll(".bap");

  const modal = /*html*/ `
  <div id="partnerModal" class="partner-modal fixed inset-0 bg-black/50 bg-opacity-40 flex justify-center items-center z-50">
  <div data-node-type="commerce-cart-container" role="dialog" class="w-commerce-commercecartcontainer card-details bg-white p-3 md:p-6 rounded-lg shadow-lg max-w-xl w-full mx-4">
      <div class="w-commerce-commercecartheader cart-title flex justify-between items-center mb-4">
          <h1 class="partner-title text-lg md:text-3xl font-semibold">
                    Become a <span class="partner-highlight">Partner</span>
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
              <div aria-label="Partner form" aria-live="polite">
                  <section class="partner-form-section">
                      <div class="partner-form-container">
                          <p class="partner-subtitle text-sm md:text-lg mb-6">
                              Join us and unlock exclusive benefits! Fill out the form below, and our team will get in touch with you.
                          </p>

                          <form action="https://forms.zohopublic.com/ebikegohyd1/form/PartnerNetwork1/formperma/8Q2wNTXY8-9TAyZT-3LCZtTNo-GIyNvyQLGOD8tOZaE/htmlRecords/submit" name="form" id="form" method="POST" accept-charset="UTF-8" enctype="multipart/form-data" class="partner-form overflow-scroll h-[70vh] md:h-auto">

                              <!-- Hidden fields -->
                              <input type="hidden" name="zf_referrer_name" value="">
                              <input type="hidden" name="zf_redirect_url" value="">
                              <input type="hidden" name="zc_gad" value="">

                              <!-- Name Fields -->
                              <div class="form-row flex flex-col md:flex-row gap-4 mb-4">
                                  <div class="w-full">
                                      <input type="text" maxlength="255" name="Name_First" fieldtype="7" placeholder="First Name" required class="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                  </div>
                                  <div class="w-full">
                                      <input type="text" maxlength="255" name="Name_Last" fieldtype="7" placeholder="Last Name" required class="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                  </div>
                              </div>

                              <!-- Phone Field -->
                              <div class="form-row mb-4">
                                  <input type="text" compname="PhoneNumber" name="PhoneNumber_countrycode" phoneformat="1" iscountrycodeenabled="false" maxlength="20" fieldtype="11" id="international_PhoneNumber_countrycode" placeholder="Phone Number" required class="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                              </div>

                              <!-- Email Field -->
                              <div class="form-row mb-4">
                                  <input type="email" maxlength="255" name="Email" fieldtype="9" placeholder="Email Address" required class="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                              </div>

                              <!-- Product Category -->
                              <div class="form-row mb-4">
                                  <label for="productCategory" class="block text-sm font-medium text-gray-700 mb-2">
                                      Product Category <span class="text-red-500">*</span>
                                  </label>
                                  <select name="Dropdown" id="productCategory" required class="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                      <option value="">Select Product Category</option>
                                      <option value="Appliance">Appliance</option>
                                      <option value="Mobility">Mobility</option>
                                      <option value="Battery(Baas)">Battery(BaaS)</option>
                                  </select>
                              </div>

                              <!-- Location -->
                              <div class="form-row mb-4">
                                  <label for="location" class="block text-sm font-medium text-gray-700 mb-2">
                                      Location <span class="text-red-500">*</span>
                                  </label>
                                  <select name="Dropdown1" id="location" required class="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                      <option value="">Select State</option>
                                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                                      <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                      <option value="Assam">Assam</option>
                                      <option value="Bihar">Bihar</option>
                                      <option value="Chhattisgarh">Chhattisgarh</option>
                                      <option value="Goa">Goa</option>
                                      <option value="Gujarat">Gujarat</option>
                                      <option value="Haryana">Haryana</option>
                                      <option value="Himachal Pradesh">Himachal Pradesh</option>
                                      <option value="Jharkhand">Jharkhand</option>
                                      <option value="Karnataka">Karnataka</option>
                                      <option value="Kerala">Kerala</option>
                                      <option value="Madhya Pradesh">Madhya Pradesh</option>
                                      <option value="Maharashtra">Maharashtra</option>
                                      <option value="Manipur">Manipur</option>
                                      <option value="Meghalaya">Meghalaya</option>
                                      <option value="Mizoram">Mizoram</option>
                                      <option value="Nagaland">Nagaland</option>
                                      <option value="Odisha">Odisha</option>
                                      <option value="Punjab">Punjab</option>
                                      <option value="Rajasthan">Rajasthan</option>
                                      <option value="Sikkim">Sikkim</option>
                                      <option value="Tamil Nadu">Tamil Nadu</option>
                                      <option value="Telangana">Telangana</option>
                                      <option value="Tripura">Tripura</option>
                                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                                      <option value="Uttarakhand">Uttarakhand</option>
                                      <option value="West Bengal">West Bengal</option>
                                      <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                                      <option value="Chandigarh">Chandigarh</option>
                                      <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                                      <option value="Delhi">Delhi</option>
                                      <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                                      <option value="Ladakh">Ladakh</option>
                                      <option value="Lakshadweep">Lakshadweep</option>
                                      <option value="Puducherry">Puducherry</option>
                                  </select>
                              </div>

                              <!-- Investment -->
                              <div class="form-row mb-6">
                                  <label for="investment" class="block text-sm font-medium text-gray-700 mb-2">
                                      Optimal Investment <span class="text-red-500">*</span>
                                  </label>
                                  <select name="Dropdown2" id="investment" required class="p-3 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                      <option value="">Select Investment</option>
                                      <option value="5 Lakhs - 20 Lakhs">5 Lakhs - 20 Lakhs</option>
                                      <option value="20 Lakhs - 50 Lakhs">20 Lakhs - 50 Lakhs</option>
                                      <option value="50 Lakhs - 1 Crore">50 Lakhs - 1 Crore</option>
                                      <option value="1 Crore+">1 Crore+</option>
                                  </select>
                              </div>

                              <!-- Submit Button -->
                              <button type="submit" id="submit-btn" class="w-full min-h-10 bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 rounded-md shadow-md hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-center items-center">
                                  <span class="btn-text">Submit</span>
                                  <span class="loading-spinner hidden ml-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                             class="loading-spinner">
                                            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                                        </svg>
                                    </span>
                              </button>
                          </form>
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

      // Add event listener after modal is created
      setTimeout(() => {
        const form = document.getElementById("partnerForm");
        if (form) {
          form.addEventListener("submit", handleFormSubmit);
        }
      }, 100);
    });
  });

  async function handleFormSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const submitBtn = document.querySelector("#modal-submit-btn");
    const spinner = document.querySelector(".modal-loading-spinner");
    const btnText = document.querySelector(".modal-btn-text");

    // Show loading state
    submitBtn.disabled = true;
    spinner.classList.remove("hidden");
    btnText.style.display = "none";

    // Get form data with correct field names
    const formData = {
      name: form.name.value + " " + form.lastname.value,
      email: form.email.value,
      phone: form.mobileno.value,
      product_category: form.productcategory.value,
      state: form.state.value,
      investment: form.investment.value,
    };

    // console.log("Submitting form data:", formData);

    try {
      const response = await fetch(
        "https://partner-network.theebg.com/submit-to-zoho.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      // console.log("Response status:", response.status);

      if (!response.ok) {
        // throw new Error(\`HTTP error! status: \${response.status}\`);
      }
      form.reset();

      const result = await response.json();
      console.log("Result:", result);

      // if (result.status === "success") {
      //   // alert("Form submitted successfully! Our team will contact you soon.");
      //   document.getElementById("partnerModal")?.remove();
      // } else {
      //   throw new Error(result.message || "Failed to submit form");
      // }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      // Reset button state
      submitBtn.disabled = false;
      spinner.classList.add("hidden");
      btnText.style.display = "block";
    }
  }
});

// https://script.google.com/macros/s/AKfycbyRZ2wwObDPtaQikax0Y0_9G3UgrpsAemf1-yvifLznW07yRCrxwK_jnBjkUONJPUpz/exec
// AKfycbyRZ2wwObDPtaQikax0Y0_9G3UgrpsAemf1-yvifLznW07yRCrxwK_jnBjkUONJPUpz


{/* <form id="partnerForm" class="partner-form">
                                      <div class="form-row flex space-x-4 mb-4">
                                          <input type="text" id="firstName" name="name" placeholder="First Name" required class="p-3 border border-gray-300 rounded-md w-full" />
                                          <input type="text" id="lastName" name="lastname" placeholder="Last Name" required class="p-3 border border-gray-300 rounded-md w-full" />
                                      </div>
                                      <div class="form-row mb-4">
                                          <input type="tel" id="number" name="mobileno" placeholder="Number" required class="p-3 border border-gray-300 rounded-md w-full" />
                                      </div>
                                      <div class="form-row mb-4">
                                          <input type="email" id="email" name="email" placeholder="Email Address" required class="p-3 border border-gray-300 rounded-md w-full" />
                                      </div>
                                      <div class="form-row mb-4">
                                          <label for="productCategory" class="investment-label block text-sm mb-2">Product Category*</label>
                                          <select id="productCategory" name="productcategory" required class="p-3 border border-gray-300 rounded-md w-full">
                                              <option value="">Select Product Category</option>
                                              <option value="Appliance">Appliance</option>
                                              <option value="Mobility">Mobility</option>
                                              <option value="Battery(BaaS)">Battery(BaaS)</option>
                                          </select>
                                      </div>
                                      <div class="form-row mb-4">
                                          <label for="state" class="investment-label block text-sm mb-2">Location *</label>
                                          <select id="state" name="state" required class="p-3 border border-gray-300 rounded-md w-full">
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
                                      <div class="form-row mb-4">
                                          <label for="investment" class="investment-label block text-sm mb-2">Optimal Investment *</label>
                                          <select id="investment" name="investment" required class="p-3 border border-gray-300 rounded-md w-full">
                                              <option value="">Select Investment</option>
                                              <option value="5-20">5 Lakhs - 20 Lakhs</option>
                                              <option value="20-50">20 Lakhs - 50 Lakhs</option>
                                              <option value="50-100">50 Lakhs - 1 Crore</option>
                                              <option value="100+">1 Crore+</option>
                                          </select>
                                      </div>
                                      <button type="submit" id="modal-submit-btn"
                                          class="w-full min-h-10 bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 rounded-md shadow-md hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-center items-center">
                                          <span class="modal-btn-text">Submit</span>
                                          <span class="modal-loading-spinner hidden ml-2">
                                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                                                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                  class="loading-spinner">
                                                  <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                                              </svg>
                                          </span>
                                      </button>
                                  </form> */}