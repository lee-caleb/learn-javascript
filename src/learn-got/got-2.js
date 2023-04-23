import got from 'got';

const options = {
	prefixUrl: 'https://httpbin.org',
	headers: {
		Authorization: 'Token 1234567890',
        'User-Agent': 'Test',
	},
    
};

const client = got.extend(options);

export default client;

let r = client.get('get').then(response => {
    console.log('then: ', response.body);
    //=> '<!doctype html> ...'
    return response;
}).catch(
    error => {
        console.log('catch', error.response.body);
        //=> 'Internal server error ...'
    }
)

console.log(r.body);