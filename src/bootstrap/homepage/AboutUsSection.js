import React from "react";
import AboutUs from '../assets/AboutUs.jpg'

function AboutUsSection() {
  return (
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-2 py-12 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="Hakkımızda"
              src={AboutUs}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <div>
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-800">Hakkımızda</h1> 
              <br className="hidden lg:inline-block"/>
							<h2 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900">Merhaba</h2> 
            </div>
            <p className="mb-8 leading-relaxed">
              Toptan alışverişin merkezi olan <strong>giraffeanalytics.com</strong>'u parakendeciler ile toptancıların güvenilir bir ortamda, hızlı ve doğru ürün üzerinde buluşmalarını sağlamak için alanında uzman kararlı girişimciler ve yazılımcılar ile kurduk.{" "}
              <strong>giraffeanalytics.com</strong>'un temel düşüncesi tüm
              üyelerine en kaliteli ürünleri en uygun fiyatla sunmaktır.{" "}
            </p>
            <p>
              {" "}
              <strong>avapp.com</strong>'un miras aldığı en büyük
              değer üyelerinin memnuniyetidir. 
            </p>
            <br />
            <div className="flex justify-center">
              <a href="/admin">
              <button 
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Yönetim Kadromuz
              </button>
              </a>
              {/* <button className="ml-4 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Hakkımızda
              </button> */}
            </div>
          </div>
        </div>
      </section>
  );
}

export default AboutUsSection;
