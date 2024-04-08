import company from "../assets/company.png";
import person from "../assets/person.jpg";

function Detail() {
  return (
    <div className="flex my-20 md:my-44 justify-center flex-col items-center ">
      <div className="md:flex md:mx-32 mx-12 ">
        <div className="md:w-1/2 md:border-r md:border-gray-700/40">
          <div className="text-[#002e87] lg:text-9xl md:text-7xl text-5xl font-bold pt-10">
            401%
          </div>
          <div className="lg:text-4xl md:text-2xl mt-6 md:mt-14 md:pr-6 lg:pr-16">
            ROI for the composite merchant, estimated by Forrester with PayPal
            enterprise payment solutions
          </div>
        </div>
        <div className="md:w-1/2 md:mt-16 mt-8 md:ml-16">
          <div className="md:border-b md:border-gray-700/40">
            <div className="text-[#002e87] text-4xl">86%</div>
            <div className="py-4 mb-6">
              of our enterpriseusers indicate that we had a positive impact on
              authorizationrates since adoption
            </div>
          </div>
          <div>
            <div className="text-[#002e87] text-4xl md:mt-10">4bps</div>
            <div className="mt-4">
              In the US, Braintree can help reduce chargeback rate by 4bps
            </div>
          </div>
        </div>
      </div>

      <div className="my-32 md:flex md:px-20 px-12 w-full">
        <div className="md:w-1/2 md:pr-10 flex-col flex justify-center">
          <div className="text-4xl mb-4">
            Offer a range of payment methods worldwide
          </div>
          <div className="mb-4">
            Reach new customers and give them the payment options they prefer so
            you dont miss a sale.
          </div>
          <div className="mb-4">
            Accept credit and debit cards, digital wallets, PayPal, and 20+
            local payment methods. All in single integration
          </div>
          <div className="mt-3 font-semibold text-blue-500 cursor-pointer">
            More about payment methods
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src={company} className="w-[600px]"></img>
        </div>
      </div>

      <div className="md:my-10 my-4 space-y-6 md:space-y-0 md:flex px-12 lg:px-32 md:px-14 lg:space-x-10 md:space-x-5">
        <div>
          <div className="text-xl font-bold">
            Enable multiple commerce scenarios
          </div>
          <div className="mt-4">
            Web. Mobile. App. In Store. Get Paid in the channels where you sell
            today and tomorrow
          </div>
        </div>

        <div>
          <div className="text-xl font-bold">Reach millions of customers</div>
          <div className="mt-4">
            Connect with our expansive network of shoppers around the world who
            love to use PayPal, Venmo and Pay Later.
          </div>
        </div>

        <div>
          <div className="text-xl font-bold">Valut customer payment info</div>
          <div className="mt-4">
            Help Drive conversion and make repeat purchases simple for your
            customers with secure data storage
          </div>
        </div>

        <div>
          <div className="text-xl font-bold">Optimize checkout experience</div>
          <div className="mt-4">
            Controlthe look and feel of your checkout page with drop-in UI,
            hosted fields,and customizable smart payment buttons
          </div>
        </div>
      </div>

      <div className="bg-[#f4f4f4] w-full h-full md:flex px-12 md:px-32 py-14 mt-20">
        <div className="md:w-1/2">
          <img src={person} className="rounded-2xl"></img>
        </div>
        <div className="md:w-1/2  flex flex-col mt-8 md:mt-0 md:pl-14 justify-center">
          <div className="text-3xl">Boost approval rates</div>
          <div className="mt-4">
            Optimize your backend payments setup with granular, clean messaging
            and the right payment rails, so youcan help boost approval chances
            and capture more of your hard-earned revenue.
          </div>
        </div>
      </div>

      <div className="bg-[#f6f5ef] w-full h-full px-12 lg:px-32 py-20 md:flex justify-center space-y-10 md:space-y-0 ">
        <div className="md:w-1/4">
          <div className="font-bold">Keep data Fresh</div>
          <div className="mt-4">
            Use Account Updater to securely make batch and real-time updates for
            Visa, MasterCard and Discover.
          </div>
        </div>

        <div className="md:w-1/4">
          <div className="font-bold">Adopt network tokenization</div>
          <div className="mt-4">
            Boost security and approvals with a partner who has already
            tokenized hundreds of millions of credit cards.
          </div>
        </div>

        <div className="md:w-1/4">
          <div className="font-bold">Retry failed transactions</div>
          <div className="mt-4">
            We strive to optimize approvals right from the start. But if they
            fail, we can retry the transaction on alternative acquiring
            networks.
          </div>
        </div>

        <div className="md:w-1/4">
          <div className="font-bold">Optimize Routing</div>
          <div className="mt-4">
            Route transactions to global acquiring and networks that will yields
            the fastest, most reliable, and least expensive transaction.
          </div>
        </div>
      </div>


        <div>
            
        </div>

    </div>
  );
}

export default Detail;
