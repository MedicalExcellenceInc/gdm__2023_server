/**
 * (passed)
 * 생년월일로 만 나이 산출함.
 * @param {*} birthday : yyyymmdd형태의 생년월일(기본 문진에서 입력받음)
 */
export const calculateAge = (args) => {
    const birthday = args.replace('.', '');
    const date = new Date();
    const year = date.getFullYear();
    const month = (date.getMonth() + 1);
    const day = date.getDate();

    let strMonth = '';
    let strDay = '';
    if(month < 10) strMonth = '0' + month ;
    else strMonth = month.toString();

    if(day < 10) strDay = '0' + day;
    else strDay = day.toString();

    const monthDay = strMonth + strDay

    const birthdayYear = birthday.substring(0,4);
    const birthdayMonthDay = birthday.substring(4,8);

    return Number(monthDay) < birthdayMonthDay ? Number(year - birthdayYear -1) : Number(year - birthdayYear);
};