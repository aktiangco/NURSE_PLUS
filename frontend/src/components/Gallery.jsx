import React from 'react';
import Lesson from './lessons/Lesson';
import Calendar from './MyCalendar'


const lessonPost = require('../lessons')

const Gallery = () => {
    return (
        <div>
        <h1>Lesson page</h1>
        <Calendar />
        <br />
        <div>
            {
                lessonPost.lessons.map((data, i) => {
                    return (
                        
                        <Lesson data={data} key={i} />
                    )
                })
            }
            </div>
        </div>
    );
  };
  
  export default Gallery;