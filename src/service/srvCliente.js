
const cliente={};

function get(req){
    return 'get cliente';
}

function add(req){
    const requerimiento = {...req.body, registro:"insertado"};
    
    return requerimiento;
}

function upd(req){
    const {requerimiento} = req.body;
    const {id} = req.params;
    let resultado = {};

    if (requerimiento){
        resultado = {
            id : id,
            requerimiento : requerimiento,
            registro : "Actualizado"
        };
    } else {
        resultado = {
            estadoError : 500,
            error : 'No se encontró Requerimiento'
        }; 
    }
    
    return resultado;
}

function del(req){
    const {requerimiento} = req.body;
    const {id} = req.params;

    const resultado = {
        id : id,
        requerimiento : requerimiento,
        registro : "Borrado"
    };
    return resultado;
}

cliente.get = get;
cliente.add = add;
cliente.upd = upd;
cliente.del = del;

module.exports = cliente;