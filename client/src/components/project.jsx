import React from 'react';
import ListComponent from './listComponent';  // Assuming ListComponent is in the same directory
import photo10 from '../assets/photo10.jpg'
import photo11 from '../assets/photo11.jpg'
import photo12 from '../assets/photo12.jpg'

const data = [
     { 
          imagePath: photo10, 
          title: 'Title 01',
          text: 'This is the first item'
     },
     { imagePath: photo11, title: 'Title 02', text: 'This is the second item' },
     { imagePath: photo12, title: 'Title 03', text: 'This is the third item' },
];

export default function Project() {
     return (
          <>
               <h2>My Projects</h2>
               <ListComponent items={data} />
          </>
     );
}
