import { useState, useEffect } from "react";
import Header from "./components/Header";
import FormFilter from "./components/FormFilter";
import "./App.css";
import Papa from "papaparse";
import Bar from "./components/Bar";
import Footer from "./components/Footer";

function App() {
  // data state from csv file
  const [data, setData] = useState([]);

  // form state
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [startYear, setStartYear] = useState(2550);
  const [endYear, setEndYear] = useState(2559);
  // result state for table showing
  const [resultShow, setResultShow] = useState({});

  const footerData = [
    {
      heading: `สำนักบริหารการทะเบียน กรมการปกครอง กระทรวงมหาดไทย, จำนวนประชากร, สำนักบริหารการทะเบียน 
      กรมการปกครอง กระทรวงมหาดไทย, Editor. 2564: กรุงเทพฯ`,
      link: "https://stat.bora.dopa.go.th/stat/statnew/statMONTH/statmonth/",
    },
    {
      heading: `สำนักงานสถิติแห่งชาติ, การสำรวจภาวะเศรษฐกิจและสังคมของครัวเรือน พ.ศ. 2563 
      สำนักงานสถิติแห่งชาติ, Editor. 2563: กรุงเทพฯ`,
      link: "http://www.nso.go.th/",
    },
    {
      heading: `สำนักดัชนีเศรษฐกิจการค้า กระทรวงพาณิชย์, ข้อมูลดัชนีราคาผู้บริโภคทั่วไป, สำนักดัชนีเศรษฐกิจการค้า 
      กระทรวงพาณิชย์, Editor. 2563: กรุงเทพฯ`,
      link: "http://www.price.moc.go.th/",
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/bkk_population_growth.csv");
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder("utf-8");
      const csv = decoder.decode(result.value);
      const results = Papa.parse(csv, { header: true, dynamicTyping: true });
      setData(results.data);

      if (results.data.length > 0) {
        setSelectedDistrict(results.data[0].name);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedDistrict && startYear && endYear) {
      const filteredData = data.filter((d) => d.name === selectedDistrict);
      if (filteredData.length > 0) {
        let result = {};
        let maxRate = Number.NEGATIVE_INFINITY;
        let minRate = Number.POSITIVE_INFINITY;
        for (let year = startYear; year <= endYear; year++) {
          if (filteredData[0][year]) {
            let rate = parseFloat(parseFloat(filteredData[0][year]).toFixed(2));
            result[year] = rate;
            maxRate = Math.max(maxRate, rate);
            minRate = Math.min(minRate, rate);
          }
        }

        setResultShow({
          data: result,
          maxRate,
          minRate,
        });
      }
    }
  }, [selectedDistrict, startYear, endYear, data]);

  return (
    <main className="max-w-[640px] max-sm:max-w-[280px]">
      <Header />
      <FormFilter
        data={data}
        setSelectedDistrict={setSelectedDistrict}
        selectedDistrict={selectedDistrict}
        startYear={startYear}
        setStartYear={setStartYear}
        endYear={endYear}
        setEndYear={setEndYear}
      />

      {/* table start here */}
      <table className="w-full mt-[32px]">
        <tr className="w-[600px]">
          <th></th>
          <th className=" mb-[8px] flex flex-row justify-between text-[8px]">
            <p className="font-paragraph">{resultShow.minRate}%</p>
            <p className="font-paragraph"> {resultShow.maxRate}%</p>
          </th>
        </tr>
        {Object.entries(resultShow.data || {}).map(([year, rate], index) => {
          // calculate width and position based on min and max rates
          const totalRange = resultShow.maxRate - resultShow.minRate;
          const relativeValue =
            parseFloat(rate).toFixed(2) - resultShow.minRate;

          let barWidth = Math.abs((relativeValue / totalRange) * 100);
          barWidth = Math.max(barWidth, 0);

          // zero position is a starting point
          let zeroPosition;
          console.log(resultShow);

          if (resultShow.maxRate <= 0) {
            // start from right side of the bar to the left
            zeroPosition = 100;
          } else if (resultShow.minRate >= 0) {
            // start from left side of the bar to the right
            zeroPosition = 0;
          } else {
            // start at zero value
            zeroPosition = Math.abs((resultShow.minRate / totalRange) * 100);
          }

          return (
            <Bar
              year={year}
              zeroPosition={zeroPosition}
              barWidth={barWidth}
              key={index}
            />
          );
        })}
      </table>
      {/* table end here */}
      <Footer datas={footerData} />
    </main>
  );
}

export default App;
