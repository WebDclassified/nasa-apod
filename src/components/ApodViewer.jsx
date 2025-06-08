import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import './ApodViewer.css';

const API_KEY = import.meta.env.VITE_NASA_API_KEY;

export default function ApodViewer() {
  const [data, setData] = useState({});
  const [showExplanation, setShowExplanation] = useState(false);
  const panelRef = useRef();

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
      .then((res) => setData(res.data))
      .catch(console.error);
  }, []);

const handleImageClick = (e) => {
  e.stopPropagation();
  setShowExplanation((prev) => !prev);
};

useEffect(() => {
  function handleClickOutside(e) {
    if (
      showExplanation &&
      panelRef.current &&
      !panelRef.current.contains(e.target) &&
      e.target.tagName !== 'IMG'
    ) {
      setShowExplanation(false);
    }
  }
  document.addEventListener('click', handleClickOutside);
  return () => document.removeEventListener('click', handleClickOutside);
}, [showExplanation]);


  return (
   
    <div className="apod-viewer">
       
      {data.media_type === 'image' ? (
        <img
          src={data.url}
          alt={data.title}
          className="apod-image"
          onClick={handleImageClick}
        />
      ) : (
        <p className="unsupported">Click on the image for more info!</p>
      )}
      
      <div
        ref={panelRef}
        className={`explanation-panel ${showExplanation ? 'show' : ''}`}
      >
        <h2>{data.title}</h2>
        <p>{data.explanation}</p>
        <p className="date">{data.date}</p>
      </div>
    </div>
  );
}
