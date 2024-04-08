function Detail() {
  return (
    <div className="flex my-32 justify-center items-center ">
      <div className="md:flex md:mx-32 mx-12 ">
        <div className="md:w-1/2 md:border-r md:border-gray-700/40">
          <div className="text-[#002e87] lg:text-9xl md:text-7xl text-5xl font-bold pt-10">401%</div>
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
    </div>
  );
}

export default Detail;
