import React from 'react'
import ParalaxPic from '../assets/Paralax1.jpg'

function ParalaxSection(props) {
	return (
		<body>
    {/* <div class="p-10 bg-sky-200">
        <h3 class="text-xl text-center font-light">Ayaklarınız değil parmaklarınız gezsin.</h3>
    </div> */}

    <div class="w-full h-96 bg-fixed bg-cover bg-center flex justify-center items-center"
        // style={{backgroundImage: "url('https://www.kindacode.com/wp-content/uploads/2022/05/orange-background.jpeg')"}}>
        style={{backgroundImage: `url(${props.pic})`}}>
        <h1 class="text-white opacity-80 drop-shadow-md text-4xl italic font-bold">giraffeanalytics.com</h1>
    </div>

    {/* <div class="p-10 bg-sky-200">
        <h3 class="text-xl text-center font-light">Ürünlerinizin doğru adresi.</h3>
    </div> */}
</body>
	)
}

export default ParalaxSection