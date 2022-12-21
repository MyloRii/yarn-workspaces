import got from 'got';

export const {data}: any = await got.post('https://httpbin.org/anything', {
	json: {
		hello: 'world'
	}
}).json();
