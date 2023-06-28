import { FooterDataContent, FooterDataMedia, FooterDataSubscribe } from "@/utils/Footer";
import Image from "next/image";

const Footer = () => {
  const { src, alt, width, height } = FooterDataMedia?.logo;
  const { name, description, placeholder, buttonText } = FooterDataSubscribe
  return (
    <footer className="footer lg:px-24 px-12 lg:py-10 py-6 grid lg:grid-cols-12 grid-cols-2 gap-16 bg-white text-base-content">
      <div className="lg:col-span-4 col-span-2">
        <div className="flex lg:justify-start justify-center w-full">
          <Image src={src} alt={alt} width={width} height={height}/>
        </div>
        <p className="my-8 w-full text-center lg:text-left"> {FooterDataMedia.description} </p>
        <div className="flex gap-4 lg:justify-start justify-center w-full">
        {
          FooterDataMedia?.socialMedia.map((item) => (
            <Image key={item?.id} src={item?.src} alt={item?.alt} width={item?.width} height={item?.height}/>
          ))
        }
        </div>
      </div>
      {
        FooterDataContent.map((footer) => {
          const { title, contentList } = footer;
          return (
            <div className="lg:col-span-2">
              <span className="text-lg text-black font-bold mb-4">{title}</span>
              {
                contentList.map((content) => (
                  <a className="link link-hover font-medium">{content}</a>
                ))
              }
            </div>
          );
        })
      }
      <div className="lg:col-span-4 col-span-2">
        <span className="text-lg text-black font-bold text-center lg:text-left w-full">
          {name}
        </span>
        <p className="mt-2 w-full text-center lg:text-left">{description}</p>
        <div className="relative mt-6 w-full">
          <input type="text" placeholder={placeholder} className="input input-bordered w-full lg:px-10 px-4 lg:py-8 py-2 border-2 rounded-full text-xs md:text-sm"/>
          <button className="btn-primary text-xs md:text-sm absolute lg:top-3 top-2 right-2 rounded-full lg:px-6 p-2 lg:py-3 text-white">{buttonText}</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
