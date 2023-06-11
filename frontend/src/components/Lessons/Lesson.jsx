import React from 'react';


const Lesson = (props) => {

    
    return (
        <div>
          
            <div>Lesson: {props.data.title}</div>
            <div>Instructor: {props.data.instructor}</div>
            <div>Date: {props.data.date}</div>
            <button>click here</button>
        </div>
    );
  };
  
  export default Lesson;