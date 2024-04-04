import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'

function ImageView() {
  return (
    <div className="mx-16 my-4 flex justify-center">
      <div className="relative">
        <img
          src={img1}
          alt="img1"
          className="w-[700px] h-[500px] object-cover object-left"
        />
      </div>
      <div className="relative">
        <img
          src={img2}
          alt="img1"
          className="w-[700px] h-[550px]  object-cover object-left rounded-3xl"
        />
      </div>
      <div className="relative">
        <img
          src={img3}
          alt="img1"
          className="w-[600px] h-[550px] rounded-3xl object-cover object-left"
        />
      </div>
    </div>
  )
}

export default ImageView
