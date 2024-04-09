import paypal from "../assets/paypal.png";
import us from "../assets/us.jpg";

function Footer() {
  return (
    <div className="py-20 w-screen">
      <div className="xl:px-32 lg:px-20 px-12 text-sm text-gray-400 space-y-4 pb-6">
        <div>
          1 For the purpose of this study, Forrester aggregated data from four
          enterprise merchants to create a single composite merchant with $500
          million in revenue processed yearly. Individual results will vary.
        </div>
        <div>
          2 Forrester, Commissioned by PayPal, December 2021. Forrester
          constructed a Total Economic Impact™ framework for those organizations
          considering an investment in the PayPal's enterprise payment platform,
          powered by Braintree.
        </div>
        <div>
          3 B2B International, commissioned by PayPal, Nov-Dec 2021, B2B
          International surveyed amongst 504 mid-market and large enterprises in
          US, UK, and DE during November/December 2021. LE defined as merchants
          with annual revenue 100M; Mid-market defined as merchants with annual
          revenue between 20M-100M. Base N: Enterprise Braintree Users = 51
        </div>
        <div>
          4 Major global payments network and PayPal internal data analysis from
          transactions over a 12-month period from Q4 2020-Q3 2021 in 8 markets
          (US, UK, DE, AU, FR, IT, ES, CA) across 12 verticals. Does not include
          transactions from domestic schemes (e.g. Cartes Bancaires, EFTPOS).
        </div>
      </div>

      <div className=" xl:px-20 px-12 mt-14 overflow-x-scroll">
        <div>
          <img src={paypal} className="w-40"></img>
        </div>
        <div className="flex justify-between border-b py-4">
          <div className="flex xl:space-x-5 space-x-3 xl:text-sm text-xs font-bold text-[#002e87]">
            <div>Help</div>
            <div>Contact</div>
            <div>Fees</div>
            <div>Security</div>
            <div>Apps</div>
            <div>Shop</div>
            <div>Enterprise</div>
            <div>Partners</div>
            <div>Feedback</div>
          </div>
          <div><img src={us} className="w-10"></img></div>
        </div>

        <div className="flex justify-between pt-6">
          <div className="flex xl:space-x-5 space-x-3 xl:text-sm text-xs font-bold text-[#002e87]">
            <div>About</div>
            <div>Newsroom</div>
            <div>Jobs</div>
            <div>Investor Relations</div>
            <div>Value in Action</div>
            <div>Public Policy</div>
            <div>Sitemap</div>
          </div>

          <div className="hidden  lg:flex xl:space-x-5 space-x-3 xl:text-sm text-xs font-bold text-[#002e87]">
            <span className="text-gray-400 font-normal">&copy; 1999-2022</span>
            <div>Accessibility</div>
            <div>Privacy</div>
            <div>Cookies</div>
            <div> Legal</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
