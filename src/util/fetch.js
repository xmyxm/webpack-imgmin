
import 'whatwg-fetch'

export default function (url, param) {
    return new Promise(function (resolve) {
        fetch(url, {
            method: 'POST',
            headers: { "Content-Type": "application/json; charset=utf-8" },
            body: JSON.stringify(param)
        }).then(response => {
            if (response.ok) {
                response.json().then(
                    json => resolve(json)
                )
            } else {
                console.log('redux fetch 拉取数据失败', response.status);
                resolve({code: response.status})
            }
        }).catch(error => {
            console.log('redux fetch 拉取数据报错', error)
            resolve({code: 500})
        })
    })
}
