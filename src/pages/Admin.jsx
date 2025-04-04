// src/pages/Admin.jsx
import React, { useContext, useState } from 'react';
import { ProductContext } from '../context/ProductContext';

export default function Admin() {
  const { addProduct } = useContext(ProductContext);
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !image || !desc) {
      alert('Please fill all fields');
      return;
    }
    if (!image.match(/\.(jpeg|jpg|gif|png)$/)) {
      alert('Please enter a valid image URL');
      return;
    }
    if (desc.length < 10) {
      alert('Description should be at least 10 characters long');
      return;
    }
    if (name.length < 3) {
      alert('Name should be at least 3 characters long');
      return;
    }
    
    addProduct({ id: Date.now(), name, image, desc });
    setName('');
    setImage('');
    setDesc('');
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <h2>Admin Panel: Add Nail Design</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        <br />
        <br />
        <label htmlFor="image">Image URL</label>
        <br />
        <br />
        <input type="text" id="image" name="image" value={image} onChange={e => setImage(e.target.value)} />
        <br />
        <br />
        <label htmlFor="desc">Description</label>
        <br />    
        <br />  
        <textarea id="desc" name="desc" value={desc} onChange={e => setDesc(e.target.value)} />
        <br />  
        <br />
        <input placeholder="Image URL" value={image} onChange={e => setImage(e.target.value)} />
        <textarea placeholder="Description" value={desc} onChange={e => setDesc(e.target.value)} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
