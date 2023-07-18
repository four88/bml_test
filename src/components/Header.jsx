const Header = () => {
  return (
    <header className="w-full flex flex-col text-left">
      <h1 className="text-heading-1 font-heading w-full">
        สถิติประชากรกรุงเทพฯ พ.ศ. 2550 - 2559
      </h1>
      <h3 className="text-heading-3 font-heading w-full mt-[26px] mb-[13px] max-sm:mt-[21px]">
        ลักษณะพื้นที่
      </h3>
      <p className="text-paragraph font-paragraph">
        กรุงเทพฯ เป็นจังหวัดที่มีประชากรมากที่สุดในประเทศไทย
        หากรวมประชากรแฝงที่ไม่ปรากฏในทะเบียนและคนที่
        เดินทางมาทำงานในตอนกลางวันด้วยแล้ว
        คาดว่าจะสูงถึงเกือบเท่าตัวของประชากรที่ปรากฏในทะเบียน เราจึง
        เรียกกรุงเทพฯ ว่าเป็น
        <a
          href="https://en.wikipedia.org/wiki/Megacity"
          target="_blank"
          className="underline underline-offset-2 hover:text-primary focus:text-secondary active:text-secondary"
          rel="noreferrer"
        >
          “อภิมหานคร (megacity)”
        </a>
        คือมีประชากรตั้งแต่ 10 ล้านคนขึ้นไป
        <br />
        <br />
        อัตราเพิ่มของประชากรกรุงเทพฯ อยู่ระดับเกือบ 1% และเริ่มลดลงในปี 2559
        ดังแสดงในแผนภูมิต่อไปนี้
      </p>
    </header>
  );
};

export default Header;
