import React from 'react';

const About = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between space-y-6 lg:space-y-0 lg:space-x-12">
          <div className="lg:w-1/2">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="Developers at work"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl text-gray-800 font-bold mb-4 lg:mb-6">
              Empowering Passionate Developers with React
            </h2>
            <p className="text-gray-700 leading-relaxed">
              React development thrives on the passion and dedication of its community. We believe in
              fostering a culture of collaboration and innovation.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum omnis voluptatem accusantium
              nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat
              expedita consequatur! Officiis id consequatur atque doloremque!
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores
              nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
