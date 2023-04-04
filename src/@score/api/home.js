import request from '@/utils/request'

const api = {
    whseFabricChangeAction: 'whseFabricChangeAction/view'
}

export default api

export function getData(parameter){
    return request({
        url: api.whseFabricChangeAction,
        method: 'get',
        params: parameter
    })  
}