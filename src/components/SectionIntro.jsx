const SectionIntro = ({ title }) => {
  return (
    <div className="text-center text-balance mt-20">
      <h1 className="text-[30px] md:text-[40px] font-Inter font-bold">{title.heading}</h1>
      <p className="text-paragraph-text">{title.paragraph}</p>
    </div>
  );
};

export default SectionIntro;
