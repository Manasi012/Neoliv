import React, { useState } from "react";
import partners_neoliv from "../Assets/imgs/partners_neoliv.jpg";
import Shadow from "../Assets/imgs/Shadow.png";
import Insignia from "./Insignia";
import Partners_mobile from "./Partners_mobile";

const Partners = () => {
  const [tooltip, setTooltip] = useState(null);

  const handleMouseEnter = (index) => {
    setTooltip(index);
  };

  const handleMouseLeave = () => {
    setTooltip(null);
  };

  const handleCloseTooltip = (event) => {
    event.stopPropagation(); // Stop event propagation
    setTooltip(null);
  };

  const images = [
    {
      src: "https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilwg3w9u8Harshwardhan%20Prasad_11zon.png",
      name: "Harshwardhan Prasad",
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
      src: "https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilwg3zc4bTEJ%20INGLE_11zon.png",
      name: "Tej Ingle",
      Description: "Partner",
    },
    {
      src: "https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilwg3zkyaSIDDHARTH%20JAIN_11zon.png",
      name: "Siddharth Jain",
      Description: "Partner",
    },
  ];

  const tabContents = [
    //Harshwardhan
    {
      about:
        "Has successfully secured projects with development potential exceeding over 26 Mn sq. ft. In NCR and Pune. He has held leadership positions with some of the biggest Indian developers.",
      progress: [
        { year: "2008", company: "MBA", completed: true },
        { year: "2011", company: "Godrej", completed: true },
        { year: "2019", company: "DLF", completed: true },
        { year: "2022", company: "Tribeca", completed: false },
        { year: "2023", company: "NeoLiv", completed: false },
      ],
    },

    //HaripraPandeyksh
    {
      about:
        "Has over 22 years of experience in Mumbai real estate industry as business leader with focus on fund raising, financial business planning and investor relations.​",
      progress: [
        { year: "2008", company: "MBA", completed: true },
        { year: "2011", company: "Godrej", completed: true },
        { year: "2019", company: "DLF", completed: true },
        { year: "2022", company: "Tribeca", completed: false },
        { year: "2023", company: "NeoLiv", completed: false },
      ],
    },

    //Viral
    {
      about:
        "Has extensive experience of more than 32 years as a retainer legal, advocate and independent contractor. He is on the Rolls of Solicitors in England & Wales, presently non-practising. He is an enthusiastic reader who finds joy in immersing himself in books and he seeks excitement through exploring new destinations and discovering new experiences.",
      progress: [
        {
          year: "1997",
          company: "Large Government Contractor",
          completed: true,
        },
        { year: "2001", company: "Independent Contractor", completed: true },
        { year: "2005", company: "DLF", completed: true },
        { year: "2006", company: "Raheja Universal Limited", completed: false },
        {
          year: "2008",
          company: "Independent Practice With Real Estate LLP",
          completed: false,
        },
      ],
    },

    //Sidsharth Kolte
    {
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
        { year: "2013", company: "Sughee Group", completed: true },
        { year: "2015", company: "Transcon Developers", completed: true },
        { year: "2021", company: "Rustomjee Group", completed: true },
        { year: "2023", company: "NeoLiv", completed: true },
      ],
    },

    //chandan kar
    {
      about:
        "Has managed sales of 30+ projects across asset classes with a sale value of USD 1.5 Bn+. In his last role as CBO, he was managing P&L of USD 250 Mn. He cherishes Ghazals and classical music, and exploring historical and cul- tural places fuels his wanderlust.",
      progress: [
        { year: "2003", company: "MBA", completed: true },
        { year: "2006", company: "Essar Holding", completed: true },
        { year: "2008", company: "Unitech", completed: true },
        { year: "2010", company: "Ireo", completed: true },
        { year: "2012", company: "Experian Holding", completed: true },
        { year: "2014", company: "Godrej", completed: true },
        { year: "2018", company: "Emaar", completed: true },
        { year: "2021", company: "Country Garden", completed: true },
        { year: "2023", company: "NeoLiv", completed: true },
      ],
    },

    //Bhaskar
    {
      about:
        "Has managed sales of 30+ projects across asset classes with a sale value of USD 1.5 Bn+. In his last role as CBO, he was managing P&L of USD 250 Mn. He cherishes Ghazals and classical music, and exploring historical and cul- tural places fuels his wanderlust.",
      progress: [
        { year: "2006", company: "MBA", completed: true },
        { year: "2009", company: "Godrej", completed: true },
        { year: "2017", company: "The Wadhwa Group", completed: true },
        { year: "2023", company: "NeoLiv", completed: true },
      ],
    },

    //tej
    {
      about:
        "Has successfully designed 48 Mn sq. ft. of high quality residential, township, retail, commercial developments. He enjoys sketching, indulges in voracious reading, and loves immersing himself in movies and cricket matches.",
      progress: [
        { year: "1997", company: "Architect Reza Kabul", completed: true },
        { year: "1999", company: "Gayatri Construction", completed: true },
        { year: "2001", company: "B Methalia", completed: true },
        { year: "2003", company: "Dalal Mott Macdonald ", completed: true },
        { year: "2005", company: "Mahindra Gesco LTD ", completed: true },
        { year: "2007", company: "Peninsula Land LTD ", completed: true },
        { year: "2008", company: "Godrej", completed: true },
        { year: "2015", company: "Raymond Reality", completed: true },
        { year: "2023", company: "NeoLiv", completed: true },
      ],
    },

    //siddharth jain
    {
      about:
        "Won ET 30under30 future business leaders in 2019. Has secured 15 projects across MMR, NCR and Pune with ~20 Mn sq. ft. of development potential. He finds fulfillment in sports, treasures moments with family, and seeks excitement in discovering new destinations.",
      progress: [
        { year: "2011", company: "Future First", completed: true },
        { year: "2014", company: "MBA", completed: true },
        { year: "2016", company: "Godrej", completed: true },
        { year: "2022", company: "Macro Tech (LODHA)", completed: true },
        { year: "2023", company: "NeoLiv", completed: true },
      ],
    },
  ];

  return (
    <>
      <div
        className="text-center md:mt-5 my-5 aos-init aos-animate relative z-50"
        data-aos="zoom-out"
        data-aos-delay="800"
        data-aos-duration="1000"
      >
        <h4 className="md:text-3xl text-4xl text-blue-950 font-medium pb-10">
          Partners
        </h4>
      </div>

     <div className="container mx-auto p-4 md:block hidden">
  <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-8 mx-5">
    {images.map((item, index) => (
      <div 
        key={index}
        className={`flex flex-col items-center relative`}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
        style={{
          transition: "box-shadow 0.8s",
        }}
      >
        <img
          src={item.src} 
          data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000"
          alt={`Image ${index + 1}`}
          className="w-full h-full rounded-full"
          style={{
            boxShadow:
              tooltip === index
                ? "0px 0px 3px 2px rgba(0,0,0,0.5)"
                : "none",
          }}
        />
        {tooltip === index && (
          <>
            <div className="fixed inset-0 bg-black opacity-50 z-30"></div>
            <div className="fixed md:top-2/4 mt-0 left-1/2 md:w-[78%] w-96 transform z-40 md:h-80 h-auto pb-2 md:pb-24 -translate-x-1/2 bg-white border shadow-lg border-blue-950 p-8 rounded-lg">
              <button
                onClick={handleCloseTooltip}
                className="absolute top-2 right-7 text-4xl font-bold"
              >
                &times;
              </button>

              <div className="text-left mb-4">
                <p className="text-lg font-semibold">About</p>
                <p className={`text-md`}>{tabContents[index]?.about}</p>
                <p className="text-lg font-semibold pt-5">Journey</p>
                <div className="line-container">
                  <div className="progress-line mt-2">
                    {tabContents[index]?.progress.map(
                      (progressItem, progressIndex) => (
                        <div className="status" key={progressIndex}>
                          <div
                            className={`dot ${
                              progressItem.completed ? "completed" : ""
                            } ${
                              progressIndex ===
                              tabContents[index].progress.length - 1
                                ? "current"
                                : ""
                            }`}
                          ></div>
                          <p className="text-[12px]">{progressItem.year}</p>
                          <p className="text-[14px] font-medium md:pe-0 pe-2">
                            {progressItem.company + " "}
                          </p>{" "}
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        <div className="text-center mt-5">
          <p className="font-bold text-[13px]">{item.name}</p>
          <p className="font-medium pt-2">{item.Description}</p>
        </div>
      </div>
    ))}
  </div>
</div>

      <div className="md:hidden">
        <Partners_mobile />
      </div>

      <div
        className="relative"
        data-aos="fade-up"
        data-aos-delay="1800"
        data-aos-duration="1000"
      >
        {/* <img src={Shadow} alt="" className="md:-mt-[57rem] relative -mt-[16rem] w-full z-0" /> */}
        {/* <Insignia /> */}
      </div>
    </>
  );
};

export default Partners;
