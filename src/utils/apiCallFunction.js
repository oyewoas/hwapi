import Axios from 'axios';

const makeApiCall = async (url) => {
    try {
        const response = await Axios.get(url);
        return response
    } catch (error) {
        return error
    }

}

export default makeApiCall;