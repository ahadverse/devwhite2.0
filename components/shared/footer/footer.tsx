"use client";
import Link from "next/link";
import style from "./footer.module.css";
import {
  AiFillMail,
  AiFillPhone,
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { MdArrowRightAlt } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { BsTwitter } from "react-icons/bs";
import AnimatedGrid from "@/components/animatedgrid/animatedgrid";

const Footer: React.FC = () => {
  const pathname = usePathname();

  const products = [
    { label: "Dokan Multivendor", href: "/products/dokan-multivendor" },
    { label: "WP User Frontend Pro", href: "/products/wp-user-frontend-pro" },
    { label: "Happy Addons", href: "/products/happy-addons" },
    {
      label: "WP Project Manager Pro",
      href: "/products/wp-project-manager-pro",
    },
    { label: "weMail", href: "/products/wemail" },
    { label: "WP ERP", href: "/products/wp-erp" },
    { label: "Appsero", href: "/products/appsero" },
    { label: "wePOS", href: "/products/wepos" },
  ];

  const services = [
    { label: "Web Development", href: "/services/web-development" },
    { label: "Mobile App Development", href: "/services/app-development" },
    { label: "UI/UX Design", href: "/services/ui-ux-design" },
    { label: "Cloud & DevOps", href: "/services/cloud-devops" },
    { label: "WordPress Development", href: "/services/wordpress-development" },
    { label: "SaaS Development", href: "/services/saas-development" },
    { label: "Digital Marketing", href: "/services/digital-marketing" },
    { label: "IT Consulting", href: "/services/it-consulting" },
  ];

  return (
    <div
      className={`${pathname === "/" ? "bg-[#f8fafc]" : "bg-blue-100"} relative`}
    >
      {/* footer  */}
      <AnimatedGrid />

      <img
        className='w-full hidden sm:block'
        src='/footer-bg.webp'
        alt='footer background'
      />
      <img
        className='w-full block sm:hidden'
        src='/footbg.png'
        alt='footer background mobile'
      />
      <div className={`${style.bgImg} text-white`}>
        <div className='flex sm:flex-row py-20 flex-col items-start gap-16 p-4 sm:w-[1200px] w-full m-auto'>
          {/* Logo & Social */}
          <div className='basis-1/4 md:basis-1/3'>
            <div className='mb-5'>
              <img
                className='w-[200px] m-auto sm:m-0 sm:w-full'
                src='/logo.png'
                alt='DevWhite logo'
              />
            </div>
            <p>
              &quot;DevWhite Limited will help you grow your business in any
              case. We have 100+ services that can change your business standard
              well.&quot;
            </p>
            <div className='flex mt-5 items-center gap-3'>
              <AiFillFacebook className='text-3xl text-white hover:text-amber-400 cursor-pointer' />
              <AiFillInstagram className='text-3xl text-white hover:text-amber-400 cursor-pointer' />
              <AiFillLinkedin className='text-3xl text-white hover:text-amber-400 cursor-pointer' />
              <BsTwitter className='text-3xl text-white hover:text-amber-400 cursor-pointer' />
            </div>
          </div>

          {/* Address */}
          <div className='py-4 ml-3 sm:ml-0'>
            <h2 className='text-xl mb-1 font-bold'>ADDRESS</h2>
            <hr className='mb-3' />
            <div className='flex gap-2 items-start mb-2'>
              <FaLocationDot className='mt-1' />
              <Link href=''>
                128 City Road, London, United Kingdom, EC1V 2NX
              </Link>
            </div>
            <div className='flex gap-2 items-center mb-3'>
              <AiFillMail />
              <a href='mailto:support@devwhite.com'>support@devwhite.com</a>
            </div>
            <div className='flex gap-2 items-start mb-3'>
              <FaLocationDot className='text-xl mt-1' />
              <Link href=''>
                House#752, Road#10, Ecb Chottor, Dhaka Cantonment, Dhaka-1206
              </Link>
            </div>
            <div className='flex gap-2 items-center mb-3'>
              <AiFillMail />
              <a href='mailto:contact@devwhite.com'>contact@devwhite.com</a>
            </div>
            <div className='flex gap-2 items-center'>
              <AiFillPhone />
              <a href='tel:+8801640210124'>+88 01640-210124</a>
            </div>
          </div>

          {/* Products */}
          <div className='basis-1/4 md:basis-1/3 p-4'>
            <h2 className='text-xl mb-1 font-bold'>PRODUCTS</h2>
            <hr className='mb-3' />
            {products.map(({ label, href }) => (
              <div key={label} className='mb-2'>
                <Link
                  href={href}
                  className='flex items-center gap-2 hover:text-amber-400 transition-colors'
                >
                  <MdArrowRightAlt /> {label}
                </Link>
              </div>
            ))}
          </div>

          {/* Services */}
          <div className='basis-1/4 md:basis-1/3 p-4'>
            <h2 className='text-xl mb-1 font-bold'>SERVICES</h2>
            <hr className='mb-3' />
            {services.map(({ label, href }) => (
              <div key={label} className='mb-2'>
                <Link
                  href={href}
                  className='flex items-center gap-2 hover:text-amber-400 transition-colors'
                >
                  <MdArrowRightAlt /> {label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
