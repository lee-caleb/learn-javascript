
import got from 'got'


let a = await got.get('https://www.baidu.com/').text()

console.log(a)