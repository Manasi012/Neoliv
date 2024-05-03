import React from 'react';
import MohitImg from '../../Assets/imgs/Mohit_mob.png';
import Group1 from '../../Assets/imgs/Group1.png';
import Group2 from '../../Assets/imgs/Group2.png';
import Group3 from '../../Assets/imgs/Group3.png';
import Group4 from '../../Assets/imgs/Group4.png';


const Founder_responsive = () => {
  return (
    <div className='px-10' style={{ textAlign: 'center' }}>
      <img src={MohitImg} alt="MohitImg" style={{ display: 'block', margin: 'auto' }}/>
      <img src={Group1} alt="Group1" style={{ display: 'block', margin: 'auto' }} className='pb-9 w-96'/>
      <img src={Group2} alt="Group2" style={{ display: 'block', margin: 'auto' }} className='pb-9 w-96'/>
      <img src={Group3} alt="Group3" style={{ display: 'block', margin: 'auto' }} className='pb-9 w-96'/>
      <img src={Group4} alt="Group4" style={{ display: 'block', margin: 'auto' }} className='pb-9 w-96'/>
    </div>
  )
}

export default Founder_responsive
