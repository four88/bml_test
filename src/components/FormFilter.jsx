import { useState } from "react";
import SelectIcon from "../assets/icon.svg";

const FormFilter = ({
  data,
  selectedDistrict,
  setSelectedDistrict,
  startYear,
  setStartYear,
  endYear,
  setEndYear,
}) => {
  const handleOnChangeDistrict = (evt) => {
    setSelectedDistrict(evt.target.value);
  };

  const handleOnChangeStartYear = (evt) => {
    setStartYear(evt.target.value);
  };

  const handleOnChangeEndYear = (evt) => {
    setEndYear(evt.target.value);
  };

  const years = [2550, 2551, 2552, 2553, 2554, 2555, 2556, 2557, 2558, 2559];

  return (
    <form className="w-full mt-[51px] max-sm:mt-[35px]">
      <h3 className="text-left text-heading-3 font-heading mb-[23px] max-sm:mb-[21px]">
        การเติบโต
      </h3>
      <div className="flex flex-row justify-between max-sm:flex-col max-sm:gap-[13px]">
        {/* district input */}
        <div className="flex flex-row w-full">
          <label
            htmlFor="district"
            className="text-paragraph font-paragraph mr-6 max-sm:w-[50px] max-sm:text-start max-sm:mr-0"
          >
            เขต
          </label>
          <div className="flex flex-row w-[139.7px] h-[23px] relative max-sm:w-[230px]">
            <select
              name="district"
              className="appearance-none text-paragraph text-dark font-paragraph w-full h-full rounded-md px-2 focus:ring-1"
              id="district"
              value={selectedDistrict}
              onChange={handleOnChangeDistrict}
            >
              {data &&
                data.map((i) => {
                  return (
                    <option value={i.name} key={i.dcode}>
                      {i.name}
                    </option>
                  );
                })}
            </select>
            <img src={SelectIcon} alt="icon" className="absolute right-0" />
          </div>
        </div>

        {/* seperate section for responsive */}
        <div className="flex flex-row gap-[26px] max-sm:gap-[20px] max-sm:w-full">
          {/* start year */}
          <div className="flex flex-row">
            <label
              htmlFor="startYear"
              className="text-paragraph font-paragraph mr-6 max-sm:w-[50px] max-sm:text-start max-sm:mr-0"
            >
              ตั้งแต่
            </label>
            <div className="flex flex-row w-[90px] h-[23px] relative">
              <select
                name="startYear"
                className="appearance-none text-paragraph text-dark font-paragraph w-full h-full rounded-md px-2"
                id="startYear"
                value={startYear}
                onChange={handleOnChangeStartYear}
              >
                {years &&
                  years.map((i, index) => {
                    if (i < endYear) {
                      return (
                        <option value={i} key={index}>
                          พ.ศ. {i}
                        </option>
                      );
                    }
                    return null;
                  })}
              </select>
              <img src={SelectIcon} alt="icon" className="absolute right-0" />
            </div>
          </div>

          {/* end year */}
          <div className="flex flex-row">
            <label
              htmlFor="endYear"
              className="text-paragraph font-paragraph mr-6 max-sm:w-[30px] max-sm:text-start max-sm:mr-0"
            >
              ถึง
            </label>
            <div className="flex flex-row w-[90px] h-[23px] relative">
              <select
                name="endYear"
                className="appearance-none text-paragraph text-dark font-paragraph w-full h-full rounded-md px-2"
                id="endYear"
                value={endYear}
                onChange={handleOnChangeEndYear}
              >
                {years &&
                  years.map((i, index) => {
                    if (i > startYear) {
                      return (
                        <option value={i} key={index}>
                          พ.ศ. {i}
                        </option>
                      );
                    }
                    return null;
                  })}
              </select>
              <img src={SelectIcon} alt="icon" className="absolute right-0" />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormFilter;
