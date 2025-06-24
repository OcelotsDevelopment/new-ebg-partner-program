document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelectorAll(".bap");
  let closeModal;

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
                <input type="hidden" name="_subject" value="New submission!">
                <input type="hidden" name="_captcha" value="false">
                <div class="form-row mb-4">
                  <label for="investment" class="investment-label block text-sm mb-2">Optimal Investment *</label>
                  <select id="investment" name="investment" required class="p-3 border border-gray-300 rounded-md w-full">
                    <option value="">Select Investment</option>
                    <option value="10-25">10 Lakhs - 25 Lakhs</option>
                    <option value="25-50">25 Lakhs - 50 Lakhs</option>
                    <option value="50-100">50 Lakhs - 1 Crore</option>
                    <option value="100+">1 Crore+</option>
                  </select>
                </div>
                <button type="submit" class="bap mt-4 inline-block px-5 py-2 rounded-md font-semibold bg-gradient-to-r from-primary to-secondary text-white cursor-pointer">
                  Submit
                </button>
              </form>

              <script>

const form = document.getElementById('partnerForm');
if (form) {
  form.addEventListener('submit', submitForm);
}

async function submitForm(e) {
  e.preventDefault(); // Prevent default form submission
  console.log("Soejjjjjjjjjjjj")
  const form = e.target;
  const submitBtn = form.querySelector('.submit-btn');
  const messageDiv = document.getElementById('submitMessage');

  // Get FormData directly
  const formData = new FormData(form);

  // Show loading state
  submitBtn.textContent = 'Submitting...';
  submitBtn.disabled = true;
  messageDiv.classList.add('hidden');

  try {
    const response = await fetch("https://formsubmit.co/vishnuv@ocelots.in", {
      method: "POST",
      body: formData
      // Do NOT set Content-Type — browser sets it automatically when using FormData
    });

    if (response.ok) {
      messageDiv.textContent = 'Thank you! Your application has been submitted successfully.';
      messageDiv.className = 'mt-4 text-center text-green-600 font-medium';
      messageDiv.classList.remove('hidden');
      form.reset();
      setTimeout(() => {
        document.getElementById('partnerModal')?.remove();
      }, 2000);
    } else {
      throw new Error('Submission failed');
    }

  } catch (error) {
    console.error('Error submitting form:', error);
    messageDiv.textContent = 'Sorry, there was an error submitting your application. Please try again.';
    messageDiv.className = 'mt-4 text-center text-red-600 font-medium';
    messageDiv.classList.remove('hidden');
  } finally {
    submitBtn.textContent = 'Submit';
    submitBtn.disabled = false;
  }
}

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

  async function submitForm(e) {
    e.pr;
    const response = await fetch("https://formsubmit.co/vishnuv@ocelots.in", {
      method: "POST",
      body: JSON.stringify({ username: "example" }),
    });
  }
});

// https://script.google.com/macros/s/AKfycbyRZ2wwObDPtaQikax0Y0_9G3UgrpsAemf1-yvifLznW07yRCrxwK_jnBjkUONJPUpz/exec
// AKfycbyRZ2wwObDPtaQikax0Y0_9G3UgrpsAemf1-yvifLznW07yRCrxwK_jnBjkUONJPUpz
