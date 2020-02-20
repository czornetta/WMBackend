
const cliente={};

function get(req){
    return 'get cliente';
}

function add(req){
    return req.body;
}

function upd(req){
    return 'upd cliente';
}

function del(req){
    return 'del cliente';
}

cliente.get = get;
cliente.add = add;
cliente.upd = upd;
cliente.del = del;

module.exports = cliente;