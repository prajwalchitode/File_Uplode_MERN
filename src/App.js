import logo from './logo.svg';
import './App.css';
import {useEffect, useRef, useState} from 'react'
import {uplodeFile} from './services/api.js'



function App() {
const logo = 'https://images.pexels.com/photos/3512848/pexels-photo-3512848.jpeg?auto=compress&cs=tinysrgb&w=600'

const [file, setFile] = useState('');
const [result, setResult] = useState('');

const fileInputRef = useRef();
useEffect(() => {
  const getImage = async () => {
    if (file) {
      const data = new FormData();
      data.append("name", file.name);
      data.append("file", file);

      const response = await uplodeFile(data);
      setResult(response.path);
    }
  }
  getImage();
}, [file])

const onUploadClick = () => {
  fileInputRef.current.click();
}

  return (
    <div className="container">
      <img src={logo} alt="" />

      <div className="wr"> 
      
      <h1>Simple File Sharing </h1>
      <p>Uplode and share the uplode link</p>

      <button onClick={() => onUploadClick()}>Uplode</button>
      <input type="file" 
      ref={fileInputRef}
      style={{display: 'none'}}
      onChange={(e)=> setFile(e.target.files[0])}
      />

      <a href={result} target="_blank">{result}</a>
      </div>
    </div>
  );
}

export default App;
