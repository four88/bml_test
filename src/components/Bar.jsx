const Bar = ({ year, zeroPosition, barWidth }) => {
  return (
    <tr className="mb-4 h-[11px]">
      <td className="border-light border-r-2 w-[40px] text-[8px] text-start font-paragraph h-full">
        {year}
      </td>
      <td className="w-[600px] relative border-r-2 h-[11px]">
        <div
          className="absolute bg-primary h-[11px]"
          style={{
            bottom: "0%",
            left: `${Math.min(zeroPosition, barWidth)}%`,
            right: `${100 - Math.max(zeroPosition, barWidth)}%`,
          }}
        ></div>
      </td>
    </tr>
  );
};

export default Bar;
