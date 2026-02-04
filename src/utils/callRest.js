import axios from 'axios'

const callRest = async function (url, method, headers, payload = "") {
    if (!url || !method) {
        throw new Error("Error occurred while calling rest! Required fields [url, method]")
    }

    console.log(`url: ${url}, method: ${method}`)

    try {
        const result = await axios({
            method,
            url,
            data: payload,
            headers: headers
        })
    
        console.log(result.data);
    
        return result.data;
    } catch(e) {
        console.log(e);
    }

}

export default callRest;