import axios from "axios";

export { axios }

const BASE_URL = '' // LIVE
// const BASE_URL = 'http://localhost:5000/' // DEMO

/**
 * ==================================================================
 * Debug Network request
 * ==================================================================
 */
// XMLHttpRequest = GLOBAL.originalXMLHttpRequest ? GLOBAL.originalXMLHttpRequest : GLOBAL.XMLHttpRequest;

export var API = axios.create({
    /**
     * ==================================================================
     * Axios Config
     * ==================================================================
     */

    baseURL: BASE_URL,
    timeout: 5000,
});

const logResponse = async (fetchAPI) => {
    /**
     * ==================================================================
     * Response Log/Time/Error
     * ==================================================================
     */

    try {
        let start = (new Date()).getTime()
        let response = await fetchAPI
        console.log(`==============\nAPI Response: ${(new Date()).getTime() - start} millisec\n==============`, response)
        return response
    } catch (error) {
        return { data: null }
    }
}

export const API_Get = (URL, Data = {}, Config = {}) => {
    /**
     * ==================================================================
     * GET Request/Payload
     * ==================================================================
     */

    // // declare our cancel object to hold the cancel func. 
    // // this has to be an object to exploit JS passing objects by reference and not value
    // let cancel = { exec: null }

    // Config = {
    //     ...Config,
    //     // CancelToken takes a func that has the cancel function for it's param
    //     // we'll set it to a prop on our cancel object that we passed in. Then we'll
    //     // call this function where/when we need to cancel this request
    //     // cancelToken: axios.CancelToken(c => (cancel.exec = c))
    // }

    // setTimeout(() => {
    //     if (!results.ok) {
    //         // if the timeout fires, and our results didn't come back
    //         // then we'll call the cancel func set by CancelToken
    //         cancel.exec()
    //     }
    // }, 5000)
    console.log('==============\nAPI Request\n==============', { URL, Data, Config })
    return logResponse(API.get(URL, Data, Config))
}

export const API_Post = (URL, Data = {}, Config = {}) => {
    /**
     * ==================================================================
     * POST Request/Payload
     * ==================================================================
     */

    console.log('==============\nAPI Request\n==============', { URL, Data, Config })
    return logResponse(API.post(URL, Data, Config))
}

export const API_Delete = (URL, Config = {}) => {
    /**
     * ==================================================================
     * DELETE Request
     * ==================================================================
     */

    console.log('==============\nAPI Request\n==============', { URL, Config })
    return logResponse(API.delete(URL, Config))
}
