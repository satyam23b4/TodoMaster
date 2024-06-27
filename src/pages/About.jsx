import React from 'react';

const About = () => {
  return (
    <div className='bg-slate-900 my-5 rounded-md mx-3 py-2 justify-center flex-grow px-5 min-h-[80vh] md:container md:mx-auto md:w-[40%]'>
      <div className='flex justify-center items-center py-3 text-2xl mb-5 font-light'>
        About Us
      </div>
      <p className='text-center'>
        This is the About Us page. Learn more about TodoMaster and our mission.
      </p>
    </div>
  );
}

export default About;
