
import axios from 'axios';

const API_URL= 'http://localhost:3000'

export const  uplodeFile= async(data) =>
{
try {
 let response =  await axios.post(`${API_URL}/uplode`,data);

 return response.data;
    
} catch (error) {
    console.error("Error while Calling the api", error.message);
}
}