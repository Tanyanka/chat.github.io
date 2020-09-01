import axios, { AxiosResponse, AxiosError } from "axios";

/**
 *
 * @param endpoint - endpoint w/o first slash
 * @param params
 * @returns {Promise<any>}
 */

type TRequest = (a: string, b?: {}) => Promise<any>;

export const get: TRequest = (endpoint, params) => {

    const url = process.env.NODE_ENV === 'production' ? `${window.location.href}${endpoint}` : endpoint;
    return new Promise((resolve, reject) => {
        axios({
            method: "get",
            url: `${window.location.href}${endpoint}`,
            params,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            }
        })
            .then((res: AxiosResponse) => {
                    const data = res.data;
                    resolve(data);
                }
            )
            .catch(
                (err: AxiosError) => {
                    reject({
                        type: "ServerRequestError",
                        page: endpoint,
                        message: err.message
                    });
                }
            )
    })
}