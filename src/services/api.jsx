import axios from 'axios';

export const postData = async (data) => {
    try {
        const response = await axios.post('http://localhost:3000/formData', data);
        console.log(response.data);
    } catch (error) {
        console.error('Error:', error);
    }
};
