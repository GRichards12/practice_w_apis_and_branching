import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';

const App = () => {
    
    const [comic, setComic] = useState({});
    const [error, setError] = useState(null);
    let comicNum = Math.ceil(Math.random()*2630);
    console.log(comicNum);
    let comicID = 'https://xkcd.com/'+String(comicNum)+'/info.0.json';
    useEffect(() => {
  
        const fetchData = async () => { try{
        const response = await fetch(comicID ,);
        console.log(response);
        if(!response.ok){
        throw new Error(response.statusText);
        }
        const data = await response.json();
        setComic(data);
        console.log(data);
        } catch(error) {
        console.log(error);
        setError('Could not fetch the data');
        }
      };
     fetchData();
     // eslint-disable-next-line
      },[]);

    return(
    <div className="App">
        {error && <p>{error}</p>}
        {/* {comic.map((xkcd)=>( */}
        <div key={comic.num}>
            <div className="header">
            <h1>{comic.safe_title}</h1>
            </div>
            <img src={comic.img} alt={comic.alt} />
            </div>
    </div>
    )}

export default App;
