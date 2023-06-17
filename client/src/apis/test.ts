import axios, { AxiosRequestConfig } from "axios";
// import { SERVICE_EASYEDU_URL, TOKEN_EMSO } from 'src/util/config';
// import { USER_EASYEDU_ENDPOINT } from 'src/util/config';

export const getTestApi = async (params: any) => {
	const configs: AxiosRequestConfig = {
		url: `/users`,
		method: "get",
		// headers: {
		//   //   'content-type': 'application/vnd.api+json',
		//   Authorization: `Bearer `
		// },
		params,
	};

	const response = await axios(configs);
	return response;
};
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
