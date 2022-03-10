function CreateObject(arr) {
    dict = {}
    for(let i=0;i<arr.length;i=i+2){
        dict[arr[i]] = arr[i+1]
    }
    return dict
}

module.exports = CreateObject;
