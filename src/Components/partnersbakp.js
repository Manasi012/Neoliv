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
      src: "https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilwg3zc4bTEJ%20INGLE_11zon.png",
      name: "Tej Ingle",
      Description: "Partner",
    },
    {
      src: "https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilwg3zkyaSIDDHARTH%20JAIN_11zon.png",
      name: "Siddharth Jain",
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
    //Harshwardhan
    {
      name: "Harshwardan Prasad",
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


    //Sidsharth Kolte
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

    //chandan kar
    {
      name: "Chandan Kar",
      about:
        "Has managed sales of 30+ projects across asset classes with a sale value of USD 1.5 Bn+. In his last role as CBO, he was managing P&L of USD 250 Mn. He cherishes Ghazals and classical music, and exploring historical and cul- tural places fuels his wanderlust.",
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

    //Bhaskar
    {
      name: "Bhaskar Jain",
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
      name: "Tej Ingle",
      about:
        "Has successfully designed 48 Mn sq. ft. of high quality residential, township, retail, commercial developments. He enjoys sketching, indulges in voracious reading, and loves immersing himself in movies and cricket matches.",
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

    //siddharth jain
    {
      name: "Siddharth Jain",
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
    
    //HaripraPandeyksh
    {
      name: "Hariprakash Pandey",
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
      name: "Viral P Vora",
      about: "Has extensive experience of more than 32 years as a retainer legal, advocate and independent contractor. He is on the Rolls of Solicitors in England & Wales, presently non-practising. He is an enthusiastic reader who finds joy in immersing himself in books and he seeks excitement through exploring new destinations and discovering new experiences.",
      progress: [
        { year: "1997", company: "Large Government Contractor", completed: true },
        { year: "2001", company: "Independent Contractor", completed: true },
        { year: "2005", company: "DLF", completed: true },
        { year: "2006", company: "Raheja Universal Limited", completed: true },
        { year: "2008", company: "Independent Practice With Real Estate LLP", completed: true },
        { year: "2023", company: "NeoLiv", completed: true },
      ],
    },
  ];

  return (
    <>
      <div className="text-center md:my-2 md:mt-0 mt-12 relative">
        <h4 className="md:text-3xl text-4xl text-blue-950 font-medium pb-10">
          Partners
        </h4>
      </div>

      <div className="container mx-auto p-4 md:block hidden">
  <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-8 mx-5">
    {images.map((item, index) => (
      <div
        key={index}
        className="flex flex-col items-center relative"
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={handleMouseLeave}
        style={{
          marginBottom: "20px",
          transition: "box-shadow 0.3s",
          opacity: tooltip !== null && tooltip !== index ? 0.5 : 1,
        }}
      >
        <img
          src={item.src}
          alt={`Image ${index + 1}`}
          className="w-36 h-auto rounded-full"
          style={{
            boxShadow:
              tooltip === index
                ? "0px 0px 5px 2px rgba(0,0,0,0.5)"
                : "none",
            transition: "box-shadow 0.3s",
          }}
        />
        <div className="text-center mt-5">
          <p className="font-bold text-[13px]">{item.name}</p>
          <p className="font-medium text-sm pt-1">{item.Description}</p>
        </div>
        {tooltip === index && (
          <div
            className="fixed block top-80 left-1/2 transform -translate-x-1/2 mt-10 bg-indigo-100 border-blue-950 p-8 py-15 rounded-lg z-40 shadow-lg"
            style={{
              boxShadow:
                "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
              width: "95%",
              height: "48%",
            }}
          >
            <div className="text-left mb-4">
              {/* <p className="text-lg font-semibold">About</p> */}
              <p className={`text-md py-3 font-bold`}>
                {tabContents[index]?.name}
              </p>
              <p className={`text-md`}>{tabContents[index]?.about}</p>
              <p className="text-lg font-semibold pt-5">Journey</p>
              <div className="line-container">
                <div className="progress-line mt-2">
                  {tabContents[index]?.progress.map((progressItem, progressIndex) => (
                    <div className="status" key={progressIndex}>
                      <div
                        className={`dot ${
                          progressItem.completed ? "completed" : ""
                        } ${progressIndex === tabContents[index].progress.length - 1 ? "current" : ""}`}
                      ></div>
                      <p className="text-[12px]">{progressItem.year}</p>
                      <p className="text-[14px] font-medium md:pe-0 pe-2">
                        {progressItem.company + " "}
                      </p>
                      {progressIndex !== tabContents[index].progress.length - 1 && (
                        <div className="line"></div>
                      )}
                    </div>
                  ))}
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
