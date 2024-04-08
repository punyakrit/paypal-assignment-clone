import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

function ImageView() {
  return (
    <div className="mx-16 my-4 flex justify-center items-center -space-x-20 md:-space-x-32 lg:-space-x-56">
      <div className=" ">
        <img
          src={img1}
          alt="img1"
          className="w-[600px] lg:h-[500px] md:h-[300px] h-[180px] object-cover object-left rounded-3xl "
        />
      </div>
      <div className="">
        <img
          src={img2}
          alt="img2"
          className="w-[600px] lg:h-[550px] md:h-[350px] h-[200px] object-cover object-left rounded-3xl"
        />
      </div>
      <div className="">
        <img
          src={img3}
          alt="img3"
          className="w-[600px] lg:h-[600px] md:h-[400px] h-[230px] object-cover object-left rounded-3xl"
        />
      </div>
    </div>
  );
}

export default ImageView;
