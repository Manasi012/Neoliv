import React, { useState } from "react";

const Partners_mobile = () => {
  const [tooltip, setTooltip] = useState(null);

  const handleImageClick = (index) => {
    setTooltip(index);
  };

  const handleCloseTooltip = (event) => {
    event.stopPropagation();
    setTooltip(null);
  };

  const images = [
    { src: "https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilwg3w9u8Harshwardhan%20Prasad_11zon.png", name: "Harshwardhan Prasad", Description: "Partner" },
    { src: "https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilwg3xy0rSIDDHARTH%20KOLTE_11zon.png", name: "Siddharth Kolte", Description: "Partner" },
    { src: "https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilwg3ycbcCHANDAN%20KAR_11zon.png", name: "Chandan Kar", Description: "Partner" },
    { src: "https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilwg3yqteBHASKER%20JAIN_11zon.png", name: "Bhasker Jain", Description: "Partner" },
    { src: "https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilwg3zkyaSIDDHARTH%20JAIN_11zon.png", name: "Siddharth Jain", Description: "Partner" },
    { src: "https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilwg3zc4bTEJ%20INGLE_11zon.png", name: "Tej Ingle", Description: "Partner" },
    { src: "https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilwivmrn9Hariprakash.png", name: "Hariprakash Pandey", Description: "Partner" },
    { src: "https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilwivmwrsViral.png", name: "Viral Vora", Description: "Partner" },
   
  ];

  const tabContents = [
    {
      name: "Harshwardhan Prasad",
      about: "Has successfully secured projects with development potential exceeding over 26 Mn sq. ft. In NCR and Pune. He has held leadership positions with some of the biggest Indian developers.",
      progress: [
        { year: "2008", company: "MBA", completed: true },
        { year: "2011", company: "Godrej", completed: true },
        { year: "2019", company: "DLF", completed: true },
        { year: "2022", company: "Tribeca", completed: true },
        { year: "2023", company: "NeoLiv", completed: true },
      ],
    },
    
    {
      name: "Siddharth Kolte",
      about:
        "Launched 3 new brands and 43 new projects, with a cumulative sales of 59 Mn sq.ft. Held leadership positions with Indian and International developers. His passion for cricket is unwavering, he thrives on travel adventures, and finds Inspiration in the pages of marketing books.",
      progress: [
        { year: "1997", company: "MBA", completed: true },
        { year: "2000", company: "Exam Bank", completed: true },
        { year: "2001", company: "JP Morgan Stanley", completed: true },
        { year: "2003", company: "BNP PAribas", completed: true },
        {
          year: "2005",
          company: "Independent Financial Consultant",
          completed: true,
        },
        {
          year: "2009",
          company: "Vilasrao Deskhmukh Foundation",
          completed: true,
        },
        { year: "2013", company: "Sugee Group", completed: true },
        { year: "2015", company: "Transcon Developers", completed: true },
        { year: "2021", company: "Rustomjee Group", completed: true },
        { year: "2023", company: "NeoLiv", completed: true },
      ],
    },
    {
      name: "Chandan Kar",
      about: "Successfully launched more than 40 Mn sq.ft. Held leadership positions with Godrej. Passionate about sustainable development.",
      progress: [
        { year: "2003", company: "MBA", completed: true },
        { year: "2006", company: "Essar Holding", completed: true },
        { year: "2008", company: "Unitech", completed: true },
        { year: "2010", company: "Ireo", completed: true },
        { year: "2012", company: "Experion Holding", completed: true },
        { year: "2014", company: "Godrej", completed: true },
        { year: "2018", company: "Emaar", completed: true },
        { year: "2021", company: "Country Garden", completed: true },
        { year: "2023", company: "NeoLiv", completed: true },
      ],
    },
    {
      name: "Bhasker Jain",
      about: "Has over 25 years of experience in fund raising, new business development and operations management with extensive knowledge of financial markets.",
      progress: [
        { year: "2008", company: "MBA", completed: true },
        { year: "2011", company: "Godrej", completed: true },
        { year: "2019", company: "DLF", completed: true },
        { year: "2022", company: "Tribeca", completed: true },
        { year: "2023", company: "NeoLiv", completed: true },
      ],
    },
    {
      name: "Siddharth Jain",
      about: "Won ET 30under30 future business leaders in 2019. Has secured 15 projects across MMR, NCR and Pune with ~20 Mn sq. ft. of development potential. He finds fulfillment in sports, treasures moments with family, and seeks excitement in discovering new destinations.",
      progress: [
        { year: "2011", company: "Future First", completed: true },
        { year: "2014", company: "MBA", completed: true },
        { year: "2016", company: "Godrej", completed: true },
        { year: "2022", company: "Macro Tech (LODHA)", completed: true },
        { year: "2023", company: "NeoLiv", completed: true },
      ],
    },
    {
      name: "Tej Ingle",
      about: "Has over 15 years of experience with focus on real estate investment and private equity deals. Passionate about sports and exploring new travel destinations.",
      progress: [
        { year: "1997", company: "Architect Reza Kabul", completed: true },
        { year: "1999", company: "Gayatri Construction", completed: true },
        { year: "2001", company: "B Methalia", completed: true },
        { year: "2003", company: "Dalal Mott Macdonald ", completed: true },
        { year: "2005", company: "Mahindra Gesco Ltd ", completed: true },
        { year: "2007", company: "Peninsula Land Ltd ", completed: true },
        { year: "2008", company: "Godrej", completed: true },
        { year: "2015", company: "Raymond Realty", completed: true },
        { year: "2023", company: "NeoLiv", completed: true },
      ],
    },
    {
      name: "Hariprakash Pandey",
      about: "Has over 22 years of experience in Mumbai real estate industry as business leader with focus on fund raising, financial business planning and investor relations.​",
      progress: [
        { year: "2008", company: "MBA", completed: true },
        { year: "2011", company: "Godrej", completed: true },
        { year: "2019", company: "DLF", completed: true },
        { year: "2022", company: "Tribeca", completed: true },
        { year: "2023", company: "NeoLiv", completed: true },
      ],
    },
    {
      name: "Viral P Vora",
      about: "Has extensive experience of more than 32 years as a retainer legal, advocate and independent contractor. He is on the Rolls of Solicitors in England & Wales, presently non-practising. He is an enthusiastic reader who finds joy in immersing himself in books and he seeks excitement through exploring new destinations and discovering new experiences.",
      progress: [
        { year: "1997", company: "Large Government Contractor", completed: true },
        { year: "2001", company: "Independent Contractor", completed: true },
        { year: "2005", company: "DLF", completed: true },
        { year: "2006", company: "Raheja Universal Ltd", completed: true },
        { year: "2008", company: "Independent Practice With Real Estate LLP", completed: true },
        { year: "2023", company: "NeoLiv", completed: true },
      ],
    },
   
  ];

  return (
    <div className="container mx-auto p-4 md:hidden">
      <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-8 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="flex flex-col items-center relative"
            onClick={() => handleImageClick(index)}
            style={{ transition: "box-shadow 0.3s" }}
          >
            <img src={image.src} alt={image.name} className="w-full h-auto" />
            <h3 className="text-center mt-2 font-medium">{image.name}</h3>
            <p className="text-center">{image.Description}</p>
            {tooltip === index && (
              <div className="fixed top-0 left-1/2 md:w-[78%] w-96 transform z-50 h-screen pb-2 md:pb-24 -translate-x-1/2 bg-white border shadow-lg border-blue-950 p-8 rounded-lg">
                <button
                  onClick={handleCloseTooltip}
                  className="absolute top-2 right-7 text-4xl font-bold"
                >
                  &times;
                </button>
                <div className="text-left mb-4 scrollbar" id="style-8">
                  <div className="force-overflow">
                    {/* <p className="text-xl mb-3 font-semibold">About</p> */}
                    <h4 className="mb-2 font-bold text-lg">
                      {tabContents[index]?.name}
                    </h4>
                    <p className="text-md font-medium">
                      {tabContents[index]?.about}
                    </p>
                    <p className="text-lg font-semibold pt-5">Journey</p>
                    <div className="v-progress font-medium">
                      <ul>
                        {tabContents[index]?.progress.map(
                          (progressItem, progressIndex) => (
                            <li
                              key={progressIndex}
                              className={`v-progress-item ${
                                progressItem.completed ? "completed" : ""
                              }`}
                            >
                              {progressItem.year} {progressItem.company}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners_mobile;
