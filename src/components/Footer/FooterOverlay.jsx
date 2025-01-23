import styles from "../../style";
import { logo } from "../../assets";
import { footerLinks, socialMedia } from "../../constants/data";

const Footer = () => (
  <section className={`${styles.flexCenter} flex-col px-5 md:px-24 py-5 `}>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal w-full justi text-center text-purple-300 text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2025 Enoch Promise.
      </p>
      <p className="font-poppins font-normal w-full justi text-center text-purple-300 text-[18px] leading-[27px] text-white">
       @defi_prince. 
      </p>

      {/* <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div> */}
    </div>
  </section>
);

export default Footer;

          {/* <br/> All Rights Reserved. */}