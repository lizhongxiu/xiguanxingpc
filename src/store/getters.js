/*
 * @Author: p_fy
 * @LastEditors: l_hc
 * @Date: 2019-07-25 15:22:06
 * @LastEditTime: 2019-09-30 14:15:49
 * @Version: 1.0
 * @Description: 描述:配置用户信息
 * @Company: 济南广域软件
 * @Copyright: Copyright (c) Jnwat Soft
 * @Remarks: 备注
 */
const getters = {
  token: state => state.user.token,
  name: state => state.user.name,
  userInfo: state => state.user.userInfo
};
export default getters;
