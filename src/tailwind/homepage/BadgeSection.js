import React from "react";

function BadgeSection() {
  return (
    <div className="px-4 py-16 mx-auto bg-gradient-to-b from-cyan-300 to-white sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-lg sm:item-center sm:text-center sm:mx-auto">
        <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-12 h-12"
            viewBox="0 0 24 24"
          >
            <path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path>
          </svg>
        </div>
        <h2 className="mb-6 pt-12 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          <span className="relative inline-block">
            {/* <svg
									viewBox="0 0 52 24"
									fill="currentColor"
									className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-32 lg:-mt-10 sm:block"
								>
									<defs>
										<pattern
											id="6b0188f3-b7a1-4e9b-b95e-cad916bb3042"
											x="0"
											y="0"
											width=".135"
											height=".30"
										>
											<circle cx="1" cy="1" r=".7" />
										</pattern>
									</defs>
									<rect
										fill="url(#6b0188f3-b7a1-4e9b-b95e-cad916bb3042)"
										width="52"
										height="24"
									/>
								</svg> */}
            <span className="relative">giraffeanalytics.com'a</span>
          </span>{" "}
          heryerden ulaşın!
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Nerede olursanız olun işinizi takip etmenin kolaylığını yaşayın.
          Tatilde bile ucuza alın ucuza satın.
        </p>
        <hr className="my-8 border-gray-300" />
        <div className="flex items-center mb-3 sm:justify-center">
          <a href="/" className="mr-3 transition duration-300 hover:shadow-lg">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1000px-Download_on_the_App_Store_Badge.svg.png"
              className="object-cover object-top w-32 mx-auto"
              alt=""
            />
          </a>
          <a href="/" className="transition duration-300 hover:shadow-lg">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1000px-Google_Play_Store_badge_EN.svg.png"
              className="object-cover object-top w-32 mx-auto"
              alt=""
            />
          </a>
        </div>
        <p className="max-w-xs text-xs text-gray-600 sm:text-sm sm:max-w-sm sm:mx-auto">
						giraffeanalytics.com kullanan dünya çapında milyonlarca insanın parçası olun.
        </p>
      </div>
    </div>
  );
}
export default BadgeSection;
