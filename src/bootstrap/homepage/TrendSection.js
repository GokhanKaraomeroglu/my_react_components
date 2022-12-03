import React from "react";
import Masa from "../assets/Masa.jpg";
import Pantolon from "../assets/Pantolon.jpg";
import Klavye from "../assets/Klavye.jpg";
import Ayakkabı from "../assets/Ayakkabı.jpg";

function TrendSection() {
	const trends = [
		{
			image: Masa,
			catagory: 'Mobilya',
			name: 'Masa',
			amount: '12.000',
			rate: '4.8',
		},
		{
			image: Pantolon,
			catagory: 'Giyim',
			name: 'Pantolon',
			amount: '11.000',
			rate: '4.9',
		},
		{
			image: Klavye,
			catagory: 'Bilgisayar',
			name: 'Klavye',
			amount: '10.000',
			rate: '5.0',
		},
		{
			image: Ayakkabı,
			catagory: 'Ayakkabı',
			name: 'Spor Ayakkabı',
			amount: '13.000',
			rate: '4.7',
		},
		{
			image: Pantolon,
			catagory: 'Giyim',
			name: 'Pantolon',
			amount: '11.000',
			rate: '4.9',
		},
		{
			image: Masa,
			catagory: 'Mobilya',
			name: 'Masa',
			amount: '12.000',
			rate: '4.8',
		},
		{
			image: Ayakkabı,
			catagory: 'Ayakkabı',
			name: 'Spor Ayakkabı',
			amount: '13.000',
			rate: '4.7',
		},
		{
			image: Klavye,
			catagory: 'Bilgisayar',
			name: 'Klavye',
			amount: '10.000',
			rate: '5.0',
		},
		
		
	]
  return (
    <section className="text-gray-600 bg-gradient-to-b from-cyan-50 to-cyan-300 body-font">
      <div className="flex pt-12  flex-col text-center w-full mb-12">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Haftanın Trend Ürünleri
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Bu haftanın yıldızlı ürünlerine Ulaşın.
        </p>
      </div>
      <div className="container px-5 py-6 mx-auto">
        <div className="flex flex-wrap -m-4">
					{trends.map((item) =>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block shadow-lg shadow-gray-500 relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src={item.image}
              />
            </a>
            <div className="mt-4">
						<h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
						{item.catagory}
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
							{item.name}
              </h2>
              <h3 className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">

                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd"></path>
                </svg>{" "}
                {item.amount} {" "}Ürün
              </h3>
              <p className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                   <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  
                </svg>{" "}
								{item.rate} {" "} oy
              </p>
            </div>
          </div>
					 )}

					{/* <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block shadow-xl shadow-black relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src={Masa}
              />
            </a>
            <div className="mt-4">
						<h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                MOBİLYA
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Masa
              </h2>
              <h3 className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">

                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd"></path>
                </svg>{" "}
                12.000 Ürün
              </h3>
              <p className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                   <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  
                </svg>{" "}
                4.8 oy
              </p>
            </div>
          </div>
					<div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block shadow-xl shadow-black relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src={Masa}
              />
            </a>
            <div className="mt-4">
						<h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                MOBİLYA
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Masa
              </h2>
              <h3 className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">

                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd"></path>
                </svg>{" "}
                12.000 Ürün
              </h3>
              <p className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                   <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  
                </svg>{" "}
                4.8 oy
              </p>
            </div>
          </div>
					<div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block shadow-xl shadow-black relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src={Masa}
              />
            </a>
            <div className="mt-4">
						<h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                MOBİLYA
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Masa
              </h2>
              <h3 className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">

                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd"></path>
                </svg>{" "}
                12.000 Ürün
              </h3>
              <p className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                   <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  
                </svg>{" "}
                4.8 oy
              </p>
            </div>
          </div>
					<div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block shadow-xl shadow-black relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src={Masa}
              />
            </a>
            <div className="mt-4">
						<h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                MOBİLYA
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Masa
              </h2>
              <h3 className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">

                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd"></path>
                </svg>{" "}
                12.000 Ürün
              </h3>
              <p className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                   <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  
                </svg>{" "}
                4.8 oy
              </p>
            </div>
          </div>
					<div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block shadow-xl shadow-black relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src={Masa}
              />
            </a>
            <div className="mt-4">
						<h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                MOBİLYA
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Masa
              </h2>
              <h3 className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">

                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd"></path>
                </svg>{" "}
                12.000 Ürün
              </h3>
              <p className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                   <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  
                </svg>{" "}
                4.8 oy
              </p>
            </div>
          </div>
					<div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block shadow-xl shadow-black relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src={Masa}
              />
            </a>
            <div className="mt-4">
						<h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                MOBİLYA
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                Masa
              </h2>
              <h3 className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">

                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd"></path>
                </svg>{" "}
                12.000 Ürün
              </h3>
              <p className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                   <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  
                </svg>{" "}
                4.8 oy
              </p>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/428x268"
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                The 400 Blows
              </h2>
              <p className="mt-1">$18.40</p>
            </div>
          </div>*/}
        </div> 
      </div>
    </section>
  );
}

export default TrendSection;
