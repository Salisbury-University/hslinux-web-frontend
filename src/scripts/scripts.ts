import axios from 'axios';

const req = async () => {
    const response = await axios.get('/api/vi/doc/:id')
    console.log(response)
}

export default req;