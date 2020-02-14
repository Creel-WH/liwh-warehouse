import request from "@/config/request";


export function getLine() {
    return request({
      url: '/users/look',
      method: 'Post',
      // params: query
    })
}
