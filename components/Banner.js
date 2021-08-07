import Image from "next/image";
function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] 
    lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://links.papareact.com/0fm"
        layout="fill"
        objectFit="cover"
      />

      <div className="absolute top-1/2 w-full text-center">
        <p>Not sure where to go? Perfect.</p>
        <button className="text-purple-500  px-8 py-4 
        bg-white rounded-full shadow-md my-3 hover:shadow-xl active:scale-90 transition duration-150">I'm flexible</button>
      </div>
    </div>
  );
}

export default Banner;
