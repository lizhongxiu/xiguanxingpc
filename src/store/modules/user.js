import { getStorage, setStorage, removeStorage } from "@/utils/auth";

const user = {
  state: {
    token: getStorage("token"),
    name: "",
    userInfo: {}
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_USERINFO: (state, userInfo) => {
      state.userInfo = userInfo;
    }
  },

  actions: {
    // 登录
    Login({ commit }, user) {
      return new Promise((resolve, reject) => {
        let aa = true;
        if (aa) {
          commit("SET_TOKEN", user.token);
          setStorage("token", user.token);
          resolve();
        } else {
          reject();
        }
        //     checkPermission(userInfo).then(res => {
        //       console.log(res)
        //       if (parseInt(res.result) !== 1) {
        //         console.log('没权限')
        //         reject()
        //       }
        //       login(userInfo).then(response => {
        //         const data = response
        //         setToken(data.access_token)
        //         commit('SET_TOKEN', data.access_token)
        //         resolve()
        //       }).catch(error => {
        //         reject(error)
        //       })
        //     }).catch(error => {
        //       reject(error)
        //     })
      });
    },
    // 登出
    LogOut({ commit }) {
      return new Promise(resolve => {
        commit("SET_TOKEN", "");
        removeStorage("token");
        resolve();
      });
    }
  }
};

export default user;

// import utils from "@/utils/utils.js";
//
// export default {
//   namespaced: true, //在module中企业命名空间
//   state: {
//     token: utils.getToken(),
//     username: utils.getSession("USER_NAME"), // 账号名称
//     permission: utils.getSession("PERMISSION"),
//     roleId: utils.getSession("ROLEID") // 角色id
//   },
//
//   mutations: {
//     SET_TOKEN: (state, token) => {
//       state.token = token;
//       utils.setSession("TOKEN", token);
//     },
//     SET_USER_NAME: (state, username) => {
//       state.username = username;
//       utils.setSession("USER_NAME", username);
//     },
//     SET_PERMISSION: (state, permission) => {
//       state.permission = permission;
//       utils.setSession("PERMISSION", permission);
//     },
//     SET_ROLEID: (state, roleId) => {
//       state.roleId = roleId;
//       utils.setSession("ROLEID", roleId);
//     }
//   },
//   actions: {}
// };
