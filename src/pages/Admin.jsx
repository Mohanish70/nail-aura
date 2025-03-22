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
    addProduct({ id: Date.now(), name, image, desc });
    setName('');
    setImage('');
    setDesc('');
  };

  return (
    <div>
      <h2>Admin Panel: Add Nail Design</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        <input placeholder="Image URL" value={image} onChange={e => setImage(e.target.value)} />
        <textarea placeholder="Description" value={desc} onChange={e => setDesc(e.target.value)} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
