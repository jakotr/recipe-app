import axios from 'axios';


export const fetchData = async (query) => {
    const data = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_APP_KEY}`);

    return data;
}