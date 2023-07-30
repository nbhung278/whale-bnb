import axios, { AxiosRequestConfig } from "axios";
export const signupApi = async (data: object) => {
	const configs: AxiosRequestConfig = {
		url: `/auth/signup`,
		method: "post",
		// headers: {
		//   //   'content-type': 'application/vnd.api+json',
		//   Authorization: `Bearer `
		// },
		data,
	};

	const response = await axios(configs);
	return response;
};

export const loginApi = async (data: object) => {
	const configs: AxiosRequestConfig = {
		url: `/auth/login`,
		method: "post",
		// headers: {
		//   //   'content-type': 'application/vnd.api+json',
		//   Authorization: `Bearer `
		// },
		data,
	};

	const response = await axios(configs);
	return response;
};
