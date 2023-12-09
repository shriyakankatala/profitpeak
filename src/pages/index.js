
import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, { useState, useEffect } from 'react';
import Rectangle from '../../components/rectangle';
import Divider from '../../components/divider';
import PPImage from '../../components/PP.png';
//import ImageButton from '../../components/imageButton';
import Dropdown from '../../components/dropdown';
import HoursBox from '../../components/hoursbox';
import SignUp from '../../components/signUp';
import ProductionBox from '../../components/productionbox';
import UnlockPrice from '../../components/unlockprice';
import 'bootstrap/dist/css/bootstrap.min.css';
import DragDrop from '../../components/dragdrop';
//import '../../styles/globals.css';


const uploadData = [
  {
    id: 1,
    name: 'Upload Pictures Here'
  }
];



export default function Home() {

  const [timeInvestment, setTimeInvestment] = useState('');
  const [hours, setHours] = useState('');
  const [productionCost, setProductionCost] = useState('');

  const handleTimeInvestmentChange = (e) => setTimeInvestment(e.target.value);
  const handleHoursChange = (e) => setHours(e.target.value);
  const handleProductionCostChange = (e) => setProductionCost(e.target.value);
  


/*{"result":{"message":{"role":"assistant","content":"The image shows a scenic 
natural landscape featuring a wooden boardwalk extending through a lush"},
"finish_details":{"type":"max_tokens"},"index":0}} 


<div>{JSON.stringify(data)}</div> 

const desiredData = data?.result?.message?.content;  
*/




return (
  <div className="m-1">
    <style jsx global>
      {`
        body {
          background-color: ##ffffff;
          font-family: 'Times New Roman', Times, serif;
        }
      `}
    </style>

    <div className='pb-8'> 
      <div className='flex items-center'>
        <Image src={PPImage} alt="Logo" width={110} height={110} layout="fixed" className="mr-4 border-0" />
        <h1 className='text-3xl ml-0.2 mt-0.2'>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <SignUp /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </h1>
      </div>
      <Divider />
    </div>
    <h5 class = "text-center">To unlock your product's perfect price, share details below!</h5>

    <div className="App">
      <DragDrop />
    </div>
    <div className="col d-flex justify-content-center">
      <div className="p-0">
      <br />
        <div className="m-2">Time Investment:&nbsp;</div>
        <div className="m-2"> <HoursBox /></div>
        <div className="m-2">Production Cost:&nbsp; </div>
        <div className="m-2"> <ProductionBox /> </div>
        <div className="m-2"> <Dropdown /> </div>
        <div className='m-2'>
        <UnlockPrice style={{ fontSize: '10px', border: '2px solid #000', padding: '10px' }} />
        </div>
      </div>
    </div>

    {/* const userInput = desiredData + 'It took ' + inputValue + ' hours to make with an hourly rate of $15 and costed $' + inputValue + '. My profit margin is ' + selectedOption + '%. How much should I price this product at?' */}

    {/* <functionWithButton /> */}
    <div style={{ margin: '0', padding: '0' }}>
      <div>
        {uploadsData => (
          <UploadTile key={uploads.id} name={uploads.name} />
        )}
      </div>
    </div>
  </div>
);
}
