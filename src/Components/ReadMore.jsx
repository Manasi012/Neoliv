import React, { useState } from "react";

const ReadMore = ({ text, maxLength }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  const truncatedText = isTruncated ? text.slice(0, maxLength) : text;

  return (
    <div>
      <p>{truncatedText}</p>
      {text.length > maxLength && (
        <button
          onClick={toggleTruncate}
          className="text-white font-medium cursor-pointer underline focus:outline-none"
        >
          {isTruncated ? "Read More" : "Read Less"}
        </button>
      )}
    </div>
  );
};

const App = () => {
  const longText =
    "With a singular vision to create India’s Foremost Residential Real Estate Platform in the vast opportunity that real estate investment and development offers, Mohit is the mind, body, and soul behind the formation of NeoLiv. A leader with an impeccable ability to effectively envision and execute “Large-scale” business, Mohit has deep expertise in capital management, project development, and property management over the past two decades. During his highly successful career at Godrej Properties Limited (GPL) which spanned nearly 12 years, he was instrumental in adding 90+ new projects spanning 150 Mn sq ft. Mohit is known to have transformed the company from a relatively unknown player to a market leader as sales grew a stunning 30x during this period.Under his astute leadership, GPL’s market capitalization grew from USD 1.5 Bn to USD 6.2 Bn (34% CAGR; vs. 18% for peer groups), and the company added USD 1.5 Bn in new deals (9x vs. previous 5 years). In the same duration, GPL saw a +75% improvement in Net Promoter Scores, from -20% in FY18 to +55% in FY22, while multifamily sales grew +30% CAGR (2017-2022) vs. a +11% industry average. As CEO of Godrej Properties, Mohit established the company as the number one player in the national market, with a pan-India dominance in each of the four major cities (Delhi-NCR, Mumbai, Bangalore, and Pune). Godrej Properties Limited was also recognized as the Best Business of Godrej Group in 2018, 2019, and 2022 under Mohit’s tenure as CEO. Mohit was recognized by the Economic Times among its 40 Under Forty” in 2017, while WCRC Leaders Asia acknowledged him as “India’s Most Trusted CEO” in 2018. Mohit joined Godrej Properties Limited (GPL) in 2010 as the Business Development Head and has been instrumental in the company’s growth since then. In 2012 Mohit was given additional charge of P&L for the NCR region and within 2 years, GPL emerged as the largest developer in Gurgaon by sales. Mohit was appointed to GPL’s Board of Directors as an Executive Director in 2015 and became CEO & MD in April 2017. Prior to GPL, Mohit had enriching stints at Unilever, A.T. Kearney, Unitech, and Redevco. Mohit is a Mechanical Engineer and has an MBA from the Indian Institute of Management (IIM), Kolkata.";

  return (
    <div className="mt-8 leading-7">
      <ReadMore text={longText} maxLength={360} />
    </div>
  );
};

export default App;
