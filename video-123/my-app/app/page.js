import Image from "next/image";

export default function Home() {
  return (
     <div className="container my-5 size-80 bg-red-300 relative">
      <Image width={500} height={500} unoptimized={true} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/500px-Image_created_with_a_mobile_phone.png"
 className="mx-auto object-cover" alt="" />
     </div>
  );
}