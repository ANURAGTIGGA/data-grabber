import customers from '../data/customers.js';

export default function fetchData(query) {
    let result;
    if(query) {
        result = customers.filter((item)=>{
            return item[query.key] === query.value
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