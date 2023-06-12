import React from 'react';

const NewPost = () => {

    // Todo useState, handleChange, handleSubmit
  return (
    <div>
      <h1>New Posts</h1>
      <form>
        <div>
            <label htmlFor="title">Title:</label>
            <input 
            type="text" 
            id="title" 
            name="title"
            required />

            <label htmlFor="instructor">Instructor:</label>
            <input 
            type="text" 
            id="instructor" 
            name="instructor"
            required />

            <label htmlFor="description">Description:</label><br />
            <textarea 
            id="description" 
            name="description" 
            required>
            </textarea>

            <label htmlFor="length">Length:</label>
            <input 
            type="text" 
            id="length" 
            name="length" 
            required />

            <label htmlFor="skills_testing">Skills Testing:</label>
            <input 
            type="text" 
            id="skills_testing" 
            name="skills_testing" 
            required />

            <label htmlFor="price">Price:</label>
            <input 
            type="text" 
            id="price" 
            name="price" 
            required />

            <label htmlFor="certification">Certification:</label>
            <input 
            type="text" 
            id="certification" 
            name="certification" 
            required /><br /><br />

            <label htmlFor="date">Date:</label>
            <input 
            type="date" 
            id="date" 
            name="date" 
            required />
        <button type="submit">Create</button>
        </div>
      </form>
    </div>
  );
};

export default NewPost;