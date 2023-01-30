const axios = require('axios');


export const AsyncAxiosPost = async (url, args) => {
    console.log('=================== AsyncAxiosPost START ===================');
    const res = await axios.post(url, args);

    console.log('## AsyncAxiosPost');
    console.log('## api : ' + url);
    console.log('## args : ');
    console.log(args);
    console.log('## res.data : ');
    console.log(res.data);
    console.log('=================== AsyncAxiosPost END ===================');

    return res.data;
}