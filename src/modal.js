document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelectorAll(".bap");
    let closeModal;

    const modal = /*html*/`
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
              <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
              <script>
                emailjs.init({
                  publicKey: "YOUR_PUBLIC_KEY",
                });
              </script>
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
                  <label for="investment" class="investment-label block text-sm mb-2">Optimal Investment *</label>
                  <select id="investment" name="investment" required class="p-3 border border-gray-300 rounded-md w-full">
                    <option value="">Select Investment</option>
                    <option value="10-25">10 Lakhs - 25 Lakhs</option>
                    <option value="25-50">25 Lakhs - 50 Lakhs</option>
                    <option value="50-100">50 Lakhs - 1 Crore</option>
                    <option value="100+">1 Crore+</option>
                  </select>
                </div>
                <button type="submit" class="partner-submit bg-primary-blue text-white py-3 px-6 rounded-md w-full mt-4 hover:bg-primary-blue-dark">
                  Submit
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</div>`;


    button.forEach((btn) => {
        btn.addEventListener("click", function () {
            document.body.insertAdjacentHTML("beforeend", modal);
            console.log("1 2 string is here");
            closeModal = document.getElementById("closePartnerModal");
            console.log(closeModal, "2 string is here");
            
        });
    });

    if (closeModal) {
        closeModal.addEventListener("click", function () {
            const modal = document.getElementById("partnerModal");
            if (modal) {
                modal.remove();
            }
        });
    }
});