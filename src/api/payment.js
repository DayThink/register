import request from './pay'

export function login() {
  return request({
    url: '/openuser/getMpUserList',
    method: 'post'
  })
}

export function up(appId) {
  return request({
    url: '/openuser/setAppId',
    method: 'post',
    data: {
      appId
    }
  })
}

export function payCard(type, time) {
  return request({
    url: '/wxpay/orderUrl',
    method: 'post',
    data: {
      type,
      time
    }
  })
}

export function payMessage(orderId) {
  return request({
    url: '/pay/getPayResult',
    method: 'post',
    data: {
      orderId
    }
  })
}
