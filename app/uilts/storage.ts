interface storageParam {
    type?: "sessionStorage" | "localStorage"
}


function Storage(param: storageParam) {
    let storage = {
        type: param.type || "localStorage",
        getItem,
        setItem
    }
    function getItem(key: string) {
        window[storage.type].getItem(key)
    }

    function setItem(key: string, value: string) {
        window[storage.type].setItem(key, value)
    }

    return storage
}

export default Storage