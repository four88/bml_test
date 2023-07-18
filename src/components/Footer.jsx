const Footer = ({ datas }) => {
  return (
    <footer className="w-full flex flex-col justify-center mt-[41px] pb-[18px] max-sm:mt-[37px]">
      <h3 className="text-start text-heading-3 font-heading mb-[15px]">
        แหล่งข้อมูล
      </h3>
      <ul className="flex flex-col self-center w-full  text-paragraph font-paragraph text-start pl-[10px]">
        {datas.map((data, index) => {
          return (
            <li key={index} className="flex flex-row">
              <p className="pr-[20px]">•</p>
              <a
                href={data.link}
                className="whitespace-pre-line underline underline-offset-2 w-full hover:text-primary focus:text-secondary active:text-secondary max-sm:whitespace-normal"
                target="_blank"
                rel="noreferrer"
              >
                {data.heading}
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

export default Footer;
