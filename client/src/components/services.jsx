import React from 'react';
import ListComponent from './listComponent';  // Assuming ListComponent is in the same directory
import photo08 from '../assets/photo08.jpg'
import photo09 from '../assets/photo09.jpg'

const data = [
     { imagePath: photo08, text: 'This is the first Service Offered' },
     { imagePath: photo09, text: 'This is the second Service Offered' },
];

export default function Services() {
     return (
          <>
               <h2>My Services</h2>
               <ListComponent items={data} />
          </>
     );
}
