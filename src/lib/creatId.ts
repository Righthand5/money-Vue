//前面保底至少有一个字符串，后面的保低至少有一个0
let id: number = parseInt(window.localStorage.getItem('_idMax') || '0') || 0;

function createId() {
    id++;
    window.localStorage.setItem('_idMax', id.toString());
    return id;

}

export default createId;