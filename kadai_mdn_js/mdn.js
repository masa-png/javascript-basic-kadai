// "2024月1月6日"
const date = new Date();

//年
const year = date.getFullYear();
//月
const month = date.getMonth() + 1;
//日
const nowDate = date.getDate();

console.log(
  year.toString() + "年" + month.toString() + "月" + nowDate.toString() + "日"
);
