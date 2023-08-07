import customers from '../data/customers.js';

export default function fetchData(query) {
    let result;
    if(query) {
        result = customers.filter((item)=>{
            let res = ''
            const list = query.key.split('.')
            list.forEach((key)=>{
                res = res ? res[key] : item[key]
            })
            return res === query.value
        })
    } else {
        result = customers
    }

    // mimicking an async behaviour
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(result);
        },1500)
    })
}