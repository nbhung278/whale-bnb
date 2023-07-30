import axios, { AxiosRequestConfig } from "axios";
export const uploadAvatar = async (data: object) => {
	const configs: AxiosRequestConfig = {
		url: `/user/uploadAvatar`,
		method: "post",
		headers: {
			//   'content-type': 'application/vnd.api+json',
			Authorization: `Bearer `,
		},
		data,
	};

	const response = await axios(configs);
	return response;
};
