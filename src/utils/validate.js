export const validateArr = {
  // 手机号验证
  phone: {
    reg: /^[1][3,4,5,6,7,8,9][0-9]{9}$/,
    title: "请输入有效的手机号码"
  },
  just: {
    reg: /^[1-9]\d{0,9}$/,
    title: "请输入正整数,1-99999999"
  },
  integer: {
    reg: /^[1-9]\d*$/,
    title: "请输入整数"
  },
  numInteger: {
    reg: /^[0-9]\d*$/,
    title: "请输入整数"
  }
};
export function validate(type) {
  const item = validateArr[type];
  return (rule, value, callback) => {
    if (item.reg.test(value) === false) {
      callback(new Error(item.title));
    } else {
      callback();
    }
  };
}
