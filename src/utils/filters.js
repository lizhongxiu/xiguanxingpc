export function zhDatetime(t) {
  if (t == "" || t == null || t == undefined) {
    return "";
  } else {
    var d = new Date(t);
    var Y = d.getFullYear();
    var M = d.getMonth() + 1;
    var D = d.getDate();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    M = M > 9 ? M : "0" + M;
    D = D > 9 ? D : "0" + D;
    h = h > 9 ? h : "0" + h;
    m = m > 9 ? m : "0" + m;
    s = s > 9 ? s : "0" + s;
    return Y + "-" + M + "-" + D + " " + h + ":" + m + ":" + s;
  }
}
export function zhDatetime1(t) {
  if (t == "" || t == null || t == undefined) {
    return "";
  } else {
    var d = new Date(t);
    var Y = d.getFullYear();
    var M = d.getMonth() + 1;
    var D = d.getDate();
    var h = d.getHours();
    var m = d.getMinutes();
    M = M > 9 ? M : "0" + M;
    D = D > 9 ? D : "0" + D;
    h = h > 9 ? h : "0" + h;
    m = m > 9 ? m : "0" + m;
    return Y + "/" + M + "/" + D + " " + h + ":" + m;
  }
}
export function zhDate(t) {
  if (t == "" || t == null || t == undefined) {
    return "";
  } else {
    var d = new Date(t);
    var Y = d.getFullYear();
    var M = d.getMonth() + 1;
    var D = d.getDate();
    M = M > 9 ? M : "0" + M;
    D = D > 9 ? D : "0" + D;
    return Y + "-" + M + "-" + D;
  }
}
export function zhDate1(t) {
  if (t == "" || t == null || t == undefined) {
    return "";
  } else {
    var d = new Date(t);
    var Y = d.getFullYear();
    var M = d.getMonth() + 1;
    var D = d.getDate();
    M = M > 9 ? M : "0" + M;
    D = D > 9 ? D : "0" + D;
    return Y + "年" + M + "月" + D + "日";
  }
}
export function zhDate2(t) {
  if (t == "" || t == null || t == undefined) {
    return "";
  } else {
    var d = new Date(t);
    var Y = d.getFullYear();
    var M = d.getMonth() + 1;
    var D = d.getDate();
    M = M > 9 ? M : "0" + M;
    D = D > 9 ? D : "0" + D;
    return Y + "/" + M + "/" + D;
  }
}
export function zhDate3(t) {
  if (t == "" || t == null || t == undefined) {
    return "";
  } else {
    var d = new Date(t);
    var Y = d.getFullYear();
    return Y;
  }
}
export function zhDate4(t) {
  if (t == "" || t == null || t == undefined) {
    return "";
  } else {
    var d = new Date(t);
    var M = d.getMonth() + 1;
    var D = d.getDate();
    M = M > 9 ? M : "0" + M;
    D = D > 9 ? D : "0" + D;
    return M + "/" + D;
  }
}

// 状态
export function statusM(val) {
  if (val == 0) {
    return "启用";
  } else if (val == 1) {
    return "冻结";
  }
}

// 保留两位小数
export function smallNum(val) {
  return val ? val.toFixed(2) : "0.00";
}
