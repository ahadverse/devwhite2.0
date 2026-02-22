import style from "./toheader.module.css";

const TopHeader = () => {
  return (
    <div className={style.header}>
      <h1 className='sm:text-xl font-semibold text-white text-base'>
        &quot;Tech Pioneers, Global Engineers.&quot;
      </h1>
      {/* <div className="flex justify-between items-center sm:w-[1200px] h-[40px] m-auto ">
        <div>
          <ul className="flex items-center gap-10">
            <li className="flex items-center gap-1  text-white hover:text-sky-400 cursor-pointer">
              <BiSolidPhoneCall /> +1 (845) 244-1680
            </li>
            <li className="flex items-center gap-1 text-white hover:text-sky-400 cursor-pointer">
              {" "}
              <BiSolidPhoneCall /> +88 01710-179900
            </li>
            <li className="flex items-center gap-1 text-white hover:text-sky-400 cursor-pointer">
              {" "}
              <MdEmail /> support@devwhite.com
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <BsFacebook className="text-2xl text-white hover:text-sky-400 cursor-pointer" />
          <AiFillInstagram className="text-3xl text-white  hover:text-sky-400 cursor-pointer" />
          <AiFillLinkedin className="text-3xl text-white  hover:text-sky-400 cursor-pointer" />
          <FaXTwitter className="text-3xl text-white  hover:text-sky-400 cursor-pointer" />
        </div>
      </div> */}
    </div>
  );
};

export default TopHeader;
