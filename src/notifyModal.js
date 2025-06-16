document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelectorAll(".notify");
  
    const modal = /*html*/ `
      <div id="partnerModal" class="partner-modal fixed inset-0 bg-black/50 bg-opacity-40 flex justify-center items-center z-50 p-2">
      <div data-node-type="commerce-cart-container" role="dialog" class="w-commerce-commercecartcontainer card-details bg-white p-4 rounded-lg shadow-lg max-w-lg w-full mx-auto">
      <div class="w-commerce-commercecartheader cart-title flex justify-between items-center mb-4">
        <h1 class="partner-title text-xl md:text-xl font-semibold text-gray-800 leading-tight">
            Get notified when we launch.Straight to your inbox.
        </h1>
        <a id="closePartnerModal" class="w-commerce-commercecartcloselink closse-button w-inline-block cursor-pointer" onclick="document.getElementById('partnerModal')?.remove()">
          <svg class="cart-closer w-4 h-4" width="16px" height="16px" viewBox="0 0 16 16">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g fill-rule="nonzero" fill="#333333">
                <polygon points="6.23223305 8 0.616116524 13.6161165 2.38388348 15.3838835 8 9.76776695 13.6161165 15.3838835 15.3838835 13.6161165 9.76776695 8 15.3838835 2.38388348 13.6161165 0.616116524 8 6.23223305 2.38388348 0.616116524 0.616116524 2.38388348 6.23223305 8"></polygon>
              </g>
            </g>
          </svg>
        </a>
      </div>
      <div class="w-commerce-commercecartformwrapper cart-form-wrap">
        <div class="flex justify-center mb-6">
            <img src="../assets/notify-me.png" alt="" aria-label="Get notified" class="w-1/2 md:w-1/3 lg:w-1/2 h-auto" />
        </div>
        <form>
            <div class="mb-4">
                <label for="name" class="block text-gray-700 text-base font-medium mb-2">Name</label>
                <input type="text" id="name" name="name" placeholder="Name" class="shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
            </div>
            <div class="mb-4">
                <label for="phone" class="block text-gray-700 text-base font-medium mb-2">Phone No</label>
                <input type="tel" id="phone" name="phone" placeholder="Ph No" class="shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
            </div>
            <div class="mb-6">
                <label for="email" class="block text-gray-700 text-base font-medium mb-2">Email</label>
                <input type="email" id="email" name="email" placeholder="Email" class="shadow-sm appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
            </div>
            <button type="submit" class="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-4 rounded-lg hover:from-blue-600 hover:to-teal-600 focus:outline-none focus:shadow-outline">
                Submit
            </button>
        </form>
      </div>
    </div>
  </div>`;
  
    button.forEach((btn) => {
      btn.addEventListener("click", function () {
        document.body.insertAdjacentHTML("beforeend", modal);
      });
    });
})