import React from 'react'
import partners_neoliv from "../Assets/imgs/partners_neoliv.jpg"
import Shadow from "../Assets/imgs/Shadow.png"
import Insignia from "./Insignia"
import {useState} from 'react'

const Partners = () => {

    const [hoveredImage, setHoveredImage] = useState(null);

    const images = [
        {
          src: 'https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilwg3w9u8Harshwardhan%20Prasad_11zon.png',
          name: 'Harshwardhan Prasad',
          Description :'Partner'
        },
        {
          src: 'https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilwg3w9u8Harshwardhan%20Prasad_11zon.png',
          name: 'Hariprakash',
          Description :'Partner'
        },
        {
          src: 'https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilwg3w9u8Harshwardhan%20Prasad_11zon.png',
          name: 'Viral P Vora',
          Description :'Partner'
        },
        {
          src: 'https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilwg3xy0rSIDDHARTH%20KOLTE_11zon.png',
          name: 'Siddharth Kolte',
          Description :'Partner'
        },
        {
          src: 'https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilwg3ycbcCHANDAN%20KAR_11zon.png',
          name: 'Chandan Kar',
          Description :'Partner'
        },
        {
          src: 'https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilwg3yqteBHASKER%20JAIN_11zon.png',
          name: 'Bhasker Jain',
          Description :'Partner'
        },
        {
          src: 'https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilwg3zc4bTEJ%20INGLE_11zon.png',
          name: 'Tej Ingle',
          Description :'Partner'
        },
        {
          src: 'https://cdn.propstory.com/magicpages/NAME/16iwl4kl6ilwg3zkyaSIDDHARTH%20JAIN_11zon.png',
          name: 'Siddharth Jain',
          Description :'Partner'
        }
      ];


    const tabContents = [
        //Harshwardhan
        {
            about: "Has successfully secured projects with development potential exceeding over 26 Mn sq. ft. In NCR and Pune. He has held leadership positions with some of the biggest Indian developers.",
            progress: [
              { year: "2008", company: "MBA", completed: true },
              { year: "2011", company: "Godrej", completed: true },
              { year: "2019", company: "DLF", completed: true },
              { year: "2022", company: "Tribeca", completed: false },
              { year: "2023", company: "NeoLiv", completed: false },
            ]
          },

          //Haripraksh
          {
            about: "Haripraksh",
            progress: [
              { year: "2008", company: "MBA", completed: true },
              { year: "2011", company: "Godrej", completed: true },
              { year: "2019", company: "DLF", completed: true },
              { year: "2022", company: "Tribeca", completed: false },
              { year: "2023", company: "NeoLiv", completed: false },
            ]
          },

          //Viral
          {
            about: "Has extensive experience of more than 32 years as a retainer legal, advocate and independent contractor. He is on the Rolls of Solicitors in England & Wales, presently non-practising. He is an enthusiastic reader who finds joy in immersing himself in books and he seeks excitement through exploring new destinations and discovering new experiences.",
            progress: [
              { year: "1997", company: "Large Government Contractor", completed: true },
              { year: "2001", company: "Independent Contractor", completed: true },
              { year: "2005", company: "DLF", completed: true },
              { year: "2006", company: "Raheja Universal Limited", completed: false },
              { year: "2008", company: "Independent Practice With Real Estate LLP", completed: false },
            ]
          },

          //Sidsharth Kolte
          {
            about: "Has extensive experience of more than 32 years as a retainer legal, advocate and independent contractor. He is on the Rolls of Solicitors in England & Wales, presently non-practising. He is an enthusiastic reader who finds joy in immersing himself in books and he seeks excitement through exploring new destinations and discovering new experiences.",
            progress: [
              { year: "1997", company: "MBA", completed: true },
              { year: "2000", company: "Exam Bank", completed: true },
              { year: "2001", company: "JP Morgan Stanley", completed: true },
              { year: "2003", company: "BNP PAribas", completed: true },
              { year: "2005", company: "Independent Financial Consultant", completed: true },
              { year: "2009", company: "Vilasrao Deskhmukh Foundation", completed: true },
              { year: "2013", company: "Sughee Group", completed: true },
              { year: "2015", company: "Transcon Developers", completed: true },
              { year: "2021", company: "Rustomjee Group", completed: true },
              { year: "2023", company: "NeoLiv", completed: true },
            ]
          },

           //chandan kar
           {
            about: "Has managed sales of 30+ projects across asset classes with a sale value of USD 1.5 Bn+. In his last role as CBO, he was managing P&L of USD 250 Mn. He cherishes Ghazals and classical music, and exploring historical and cul- tural places fuels his wanderlust.",
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
            ]
          },

          //Bhaskar
          {
            about: "Has managed sales of 30+ projects across asset classes with a sale value of USD 1.5 Bn+. In his last role as CBO, he was managing P&L of USD 250 Mn. He cherishes Ghazals and classical music, and exploring historical and cul- tural places fuels his wanderlust.",
            progress: [
              { year: "2006", company: "MBA", completed: true },
              { year: "2009", company: "Godrej", completed: true },
              { year: "2017", company: "The Wadiya Group", completed: true },
              { year: "2023", company: "NeoLiv", completed: true },
            ]
          },

          //tej
          {
            about: "Has managed sales of 30+ projects across asset classes with a sale value of USD 1.5 Bn+. In his last role as CBO, he was managing P&L of USD 250 Mn. He cherishes Ghazals and classical music, and exploring historical and cul- tural places fuels his wanderlust.",
            progress: [
                { year: "1997", company: "Architect Reza Kabul", completed: true },
                { year: "1999", company: "Gayatri Construction", completed: true },
                { year: "2001", company: "B Methalia", completed: true },
                { year: "2003", company: "Dalal Mott Macdonald", completed: true },
                { year: "2005", company: "Mahindra Gesco LTD", completed: true },
                { year: "2007", company: "Peninsula Land LTD", completed: true },
                { year: "2008", company: "Godrej", completed: true },
                { year: "2015", company: "Raymond Reality", completed: true },
                { year: "2023", company: "NeoLiv", completed: true },
            ]
          },

          //siddharth jain
          {
            about: "Has managed sales of 30+ projects across asset classes with a sale value of USD 1.5 Bn+. In his last role as CBO, he was managing P&L of USD 250 Mn. He cherishes Ghazals and classical music, and exploring historical and cul- tural places fuels his wanderlust.",
            progress: [
                { year: "2011", company: "Future First", completed: true },
                { year: "2014", company: "MBA", completed: true },
                { year: "2016", company: "Godrej", completed: true },
                { year: "2022", company: "Macro Tech (LODHA)", completed: true },
                { year: "2023", company: "NeoLiv", completed: true },
            ]
          },    
      ];


  return (
<>
<div className="text-center md:mt-5 my-5 aos-init aos-animate relative z-50" data-aos="zoom-out" data-aos-delay="800" data-aos-duration="1000">
  <h4 className="md:text-3xl text-4xl text-blue-950 font-medium pb-10">Partners</h4>
</div>







<div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 md:mx-32 mx-auto gap-5 relative justify-center">
  {images.map((item, index) => (
    <div
      key={index}
      className={`w-52 md:w-60 relative md:mb-10 mb-5 ${index % 2 === 1 ? 'mr-0' : ''} ${index % 4 === 3 ? 'lg:mr-0' : ''}`}
      onMouseEnter={() => setHoveredImage(index)}
      onMouseLeave={() => setHoveredImage(null)}
      style={{ transition: 'box-shadow 0.3s', opacity: hoveredImage !== null && hoveredImage !== index ? '0.2' : '1' }}
    >
      <img src={item.src} alt={`Image ${index + 1}`} className="w-full h-full rounded-full" style={{ boxShadow: hoveredImage === index ? '0px 0px 3px 2px rgba(0,0,0,0.5)' : 'none' }} />
      {hoveredImage === index && (
        <div className='container'>
          <div className="tooltip-container z-30">
            <div className={`tooltip-content mt-12 me-28 absolute left-0 p-8 md:h-80 pb-24 bg-white border ${hoveredImage === index ? 'mobile-about-full-width' : '700px'}`} style={{ left:'0%', transform: 'translateX(-20%)', position: 'absolute'}}>
              <div className="text-left mb-4">
                <p className="text-lg font-semibold">About</p>
                <p className={`text-sm pe-12 ${hoveredImage === index ? 'w-full' : ''}`}>{tabContents[index]?.about}</p>
              </div>
              <p className="text-lg font-semibold">Journey</p>
             <div className='me-20'>
             <div className='flex justify-center'>
                <div className="line-container">
                  <div className="progress-line mt-2">
                    {tabContents[index]?.progress.map((progressItem, progressIndex) => (
                      <div className="status" key={progressIndex}>
                        <div className={`dot ${progressItem.completed ? 'completed' : ''} ${progressIndex === tabContents[index].progress.length - 1 ? 'current' : ''}`}></div>
                        <p className="text-[10px]">{progressItem.year}</p>
                        <p className="text-[10px] font-medium">{progressItem.company}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
             </div>
            </div>
          </div>
        </div>
      )}
      <div className="text-center mt-4">
        <p className="font-medium">{item.name}</p>
        <p className="font-light">{item.Description}</p>
      </div>
    </div>
  ))}
</div>









<div className="relative" data-aos="fade-up" data-aos-delay="1800" data-aos-duration="1000">
  {/* <img src={Shadow} alt="" className="md:-mt-[57rem] relative -mt-[16rem] w-full z-0" /> */}
  {/* <Insignia /> */}
</div>
</>
  )
}





<div className="container mx-auto p-4 md:hidden">
      <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-8 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`flex flex-col items-center ${
              hoveredImage === index ? "" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            style={{ transition: 'box-shadow 0.3s', opacity: hoveredImage !== null && hoveredImage !== index ? '0.2' : '1' }}
          >
            <img src={image.src} alt={image.name} className="w-full h-auto" />
            <h3 className="text-center mt-2 font-medium">{image.name}</h3>
            <p className="text-center">{image.Description}</p>
            {tooltip === index && (
              <div
                className="fixed md:top-2/4 top-1/4 left-1/2 md:w-[78%] w-96 transform z-50 h-auto pb-2 md:pb-24 -translate-x-1/2 bg-white border shadow-lg border-blue-950 p-8 rounded-lg"
              >
                <button
                  onClick={handleCloseTooltip}
                  className="absolute top-2 right-7 text-4xl font-bold"
                >
                  &times;
                </button>
                <div className="text-left mb-4">
                  <p className="text-xl mb-3 font-semibold">About</p>
                  <p
                    className={`text-md font-medium ${
                      hoveredImage === index ? "w-full" : ""
                    }`}
                  >
                    {tabContents[index]?.about}
                  </p>
                  <p className="text-lg font-semibold pt-5">Journey</p>
                  <div className="line-container">
                    <div className="md:progress-line mt-2">
                      {tabContents[index]?.progress.map((progressItem, progressIndex) => (
                        <div className="status" key={progressIndex}>
                          <div className={`dot ${progressItem.completed ? 'completed' : ''} ${progressIndex === tabContents[index].progress.length - 1 ? 'current' : ''}`}></div>
                          <p className="text-[14px] ml-3 -mt-3 font-medium">{progressItem.year}</p>
                          <p className="text-[16px] ml-3 -mt-3 font-medium md:pe-0 pe-2">{progressItem.company + ' '}</p> {/* Add space after company */}
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
    

export default Partners






