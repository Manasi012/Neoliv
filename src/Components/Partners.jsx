import React, { useState } from "react";
import Partners_mobile from "./Partners_mobile";

const Partners = () => {
  const [tooltip, setTooltip] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [clicked, setClicked] = useState(false);

  const handleImageClick = (index) => {
    setTooltip(index);
    setClicked(true);
  };

  const handleCloseTooltip = (event) => {
    event.stopPropagation();
    setTooltip(null);
    setClicked(false);
  };

  const images = [
    {
      src: "https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilwg3w9u8Harshwardhan%20Prasad_11zon.png",
      name: "Harshwardhan Prasad",
      Description: "Partner",
    },
    {
      src: "https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilwg3xy0rSIDDHARTH%20KOLTE_11zon.png",
      name: "Siddharth Kolte",
      Description: "Partner",
    },
    {
      src: "https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilwg3ycbcCHANDAN%20KAR_11zon.png",
      name: "Chandan Kar",
      Description: "Partner",
    },
    {
      src: "https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilwg3yqteBHASKER%20JAIN_11zon.png",
      name: "Bhasker Jain",
      Description: "Partner",
    },
    {
      src: "https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilwg3zkyaSIDDHARTH%20JAIN_11zon.png",
      name: "Siddharth Jain",
      Description: "Partner",
    },
    {
      src: "https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilwg3zc4bTEJ%20INGLE_11zon.png",
      name: "Tej Ingle",
      Description: "Partner",
    },
    {
      src: "https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilwivmrn9Hariprakash.png",
      name: "Hariprakash Pandey",
      Description: "Partner",
    },
    {
      src: "https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilwivmwrsViral.png",
      name: "Viral Vora",
      Description: "Partner",
    },
  ];

  const tabContents = [
    {
      name: "Harshwardhan Prasad",
      about: `Has successfully secured 15 projects in NCR with ~25 Mn Sqft of development potential. Held leadership positions with Indian developers.`,
      abouthobby:
        " He finds his yin-yang in playing tennis and enjoying delicious food.",
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
      about: `Has 24+ years of experience in fundraising, land acquisition, Indian & International real estate policy making.`,
      abouthobby:
        "He relishes playing badminton, finds joy in music, and cherishes quality time spent with his family.",
      progress: [
        { year: "1997", company: "MBA", completed: true },
        { year: "2000", company: "Exim Bank", completed: true },
        { year: "2001", company: "JM Morgan Stanley", completed: true },
        { year: "2003", company: "BNP Paribas", completed: true },
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
      about:
        "Launched 3 new brands and 43 new projects, with a cumulative sales of 59 Mn Sqft. Held leadership positions with Indian and International developers.",
      abouthobby:
        "His passion for cricket is unwavering, he thrives on travel adventures, and finds inspiration in the pages of marketing books.",
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
      about:
        "Has managed sales of 30+ projects across asset classes with a sale value of USD 1.5 Bn+. In his last role as CBO, was managing P&L of USD 250 Mn.",
      abouthobby:
        "He cherishes Ghazals and classical music, and exploring historical and cultural places fuels his wanderlust.",
      progress: [
        { year: "2006", company: "MBA", completed: true },
        { year: "2009", company: "Godrej", completed: true },
        { year: "2016", company: "The Wadhwa Group", completed: true },
        // { year: "2022", company: "Tribeca", completed: true },
        { year: "2023", company: "NeoLiv", completed: true },
      ],
    },
    {
      name: "Siddharth Jain",
      about:
        "Won ET 30under30 future business leaders in 2019. Has secured 15 projects across MMR, NCR and Pune with ~20 Mn Sqft of development potential.",
      abouthobby:
        "He finds fulfillment in sports, treasures moments with family, and seeks excitement in discovering new destinations.",
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
      about:
        "Has successfully designed 48 Mn Sq ft of high quality residential, township, retail, commercial developments.",
      abouthobby:
        "He enjoys sketching, indulges in voracious reading, and loves immersing himself in movies and cricket matches.",
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
      about:
        "Proven track record of 22 years in fund raise, financial business planning, risk management, compliance, taxation.​",
      abouthobby:
        "Hari likes playing sports and reading books. He is also a coach on finance and investment strategies.",
      progress: [
        { year: "2000", company: "Goldstar Jewellery", completed: true },
        { year: "2003", company: "ICS Group ", completed: true },
        { year: "2005", company: "HDIL", completed: true },
        { year: "2014", company: "Runwal", completed: true },
        { year: "2024", company: "NeoLiv", completed: true },
      ],
    },
    {
      name: "Viral P Vora",
      about:
        "Has experience of 32+ years as a retainer legal and advocate. He is on the Rolls of Solicitors in England & Wales, presently non-practising.",
      abouthobby:
        "He is an enthusiastic reader who finds joy in immersing himself in books and he seeks excitement through exploring new destinations and discovering new experiences.",
      progress: [
        {
          year: "1997",
          company: "Strategic Consultant with STATE PWD, MES, CCW AIR etc",
          completed: true,
        },
        // { year: "2001", company: "Independent Contractor", completed: true },
        { year: "2005", company: "DLF", completed: true },
        { year: "2006", company: "Raheja Universal Ltd", completed: true },
        {
          year: "2008",
          company: "VPV Legal",
          completed: true,
        },
        { year: "2023", company: "NeoLiv", completed: true },
      ],
    },
  ];

  return (
    <>
      <div
        className={`text-center  md:mt-0 mt-12 relative ${
          clicked ? "fixed top-0 left-0 h-full w-full bg-white z-50" : ""
        }`}
      >
        <h4 className="md:text-3xl text-4xl text-blue-950 font-medium pb-5">
          Partners
        </h4>
      </div>

      <div
        className={`mx-auto p-4 hidden md:block ${
          clicked ? "fixed top-0 left-0 h-full w-screen z-50 bg-white" : ""
        }`}
      >
        <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-8 gap-0 mx-20">
          {images.map((image, index) => (
            <div
              key={index}
              className={`flex flex-col items-center relative transition duration-300 ${
                hoveredIndex === null
                  ? ""
                  : hoveredIndex === index
                  ? "opacity-100"
                  : "opacity-50"
              }`}
              onClick={() => handleImageClick(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={image.src}
                alt={image.name}
                className="w-36 h-auto cursor-pointer rounded-full mb-2"
              />
              <h3 className="text-center mt-2 font-bold text-[12px]">
                {image.name}
              </h3>

              {tooltip === index && (
                <div className="fixed tab_fixed bottom-0 left-1/2 md:w-[98%] mb-5 transform z-50 h-[450px]  py-8 px-32 -translate-x-1/2 bg_light border shadow-lg border-blue-950 rounded-lg">
                  <button
                    onClick={handleCloseTooltip}
                    className="absolute top-8 right-16 text-5xl font-bold"
                  >
                    &times;
                  </button>

                  <div className="flex tablet_fixed justify-start items-center gap-10">
                    <div>
                      <img
                        src={image.src}
                        alt={image.name}
                        className="w-48 h-auto rounded-full border-4 border-indigo-800 mx-auto mb-4"
                      />
                      <h4 className="mb-4 font-bold text-sm text-center">
                        {tabContents[index]?.name}
                      </h4>
                    </div>
                    <div className="space-y-2">
                      <h6 className="text-lg font-medium leading-7">
                        {tabContents[index]?.about}
                      </h6>
                      <h6 className="text-lg font-medium italic leading-7">
                        {tabContents[index]?.abouthobby}
                      </h6>
                    </div>
                  </div>
                  <h6 className="text-lg font-semibold pt-5 md:pt-8">
                    Journey
                  </h6>
                  <div className="v-progress font-medium">
                    <div className="line-container">
                      <div className="progress-line mt-2">
                        {tabContents[index]?.progress.map(
                          (progressItem, progressIndex) => (
                            <div className="status z" key={progressIndex}>
                              <div
                                className={`dot ${
                                  progressItem.completed ? "completed" : ""
                                } ${
                                  progressIndex ===
                                  tabContents[index].progress.length - 1
                                    ? "current last"
                                    : ""
                                }`}
                              ></div>
                              <p className="text-[13px]  font-semibold">
                                {progressItem.year}
                              </p>
                              <p className="text-[14px] font-semibold md:pe-0 ">
                                {progressItem.company + " "}
                              </p>
                              {progressIndex !==
                                tabContents[index].progress.length - 1 && (
                                <div
                                  className={`line ${
                                    progressIndex ===
                                    tabContents[index].progress.length - 2
                                      ? "last-line"
                                      : ""
                                  }`}
                                ></div>
                              )}
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="md:hidden">
        <Partners_mobile />
      </div>
    </>
  );
};

export default Partners;
