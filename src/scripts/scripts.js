import axios from 'axios';

const req = async () => {
    const response = await axios.get('/api/v1/doc/:id')
    console.log(response)
}