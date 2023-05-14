const amountConversion = (value) => {
  //     const [integer,decimal] = value.split('.')
  // if(decimal.length > 2) {

  // }
  //   return value;
  // 网友提供的方法，本人个性化处理中
  if (value === 0) {
    return parseFloat(value).toFixed(2);
  }
  if (value != "") {
    var num = "";
    value += ""; //转化成字符串
    value = parseFloat(value.replace(/,/g, "")).toFixed(2); //若需要其他小数精度，可将2改成变量
    if (value.indexOf(".") == -1) {
      num = value.replace(/\d{1,3}(?=(\d{3})+$)/g, function (s) {
        return s + ",";
      });
    } else {
      num = value.replace(/(\d)(?=(\d{3})+\.)/g, function (s) {
        return s + ",";
      });
    }
  } else {
    num = "";
  }
  return num;
};
export default amountConversion;
