import axios from "taro-axios"
/**
 * 获取微信用户电话号码
 * @param {code}
 */
export const getuserphonenumber= (params: {code: string}) => {
    return axios({
      url: 'https://api.weixin.qq.com/wxa/business/getuserphonenumber',
      method: 'post',
      params,
    })
  }
