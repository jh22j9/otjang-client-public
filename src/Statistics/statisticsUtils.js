import * as dummy from './dummyData';

export const clothing = dummy.clothing.toJS();
export const shoes = dummy.shoes.toJS();
export const accessories = dummy.accessories.toJS();
export const clothes = clothing.concat(shoes).concat(accessories);

export const totalClothingPrice = getPrice(clothing);
export const totalShoesPrice = getPrice(shoes);
export const totalAccessoriesPrice = getPrice(accessories);
export const totalPrice = getPrice(clothes);

var currentMonth = new Date().getMonth() + 1;
export const currentYear = String(new Date().getFullYear()).split('').splice(2).join('')

if (currentMonth < 10) {
    currentMonth = `0${currentMonth}`
}
export const currentDate = `${currentYear}${currentMonth}`;


export function getPrice(clothesList) {

    var clothesListPrice = 0;

    for (let i = 0; i < clothesList.length; i++) {
        clothesListPrice = clothesListPrice + clothesList[i].price
    }

    return clothesListPrice;
}

export function getMonthlyList(clothesList, buydate) {

    function confirmMonth(clothes) {

        if (clothes.buydate === Number(buydate)) {
            return true;
        }

    }
    return clothesList.filter(confirmMonth)

}
export function getSeasonList(clothesList, season) {

    function getSpringList() {

        return clothesList.filter((clothes) => (clothes.season.spring === true))
    }

    function getSummerList() {

        return clothesList.filter((clothes) => (clothes.season.summer === true))
    }

    function getFallList() {

        return clothesList.filter((clothes) => (clothes.season.fall === true))
    }

    function getWinterList() {

        return clothesList.filter((clothes) => (clothes.season.winter === true))
    }


    if (season === 'spring') {
        return getSpringList();
    }

    else if (season === 'summer') {
        return getSummerList();
    }

    else if (season === 'fall') {
        return getFallList();
    }

    else if (season === 'winter') {
        return getWinterList();
    }

    else {

        console.warn('잘못된 입력입니다!')
    }

}

export function transformBuydate(data) {

    let buydata = String(data.buydate).split('').splice(2);

    if (buydata[0] === '0') {
        buydata.splice(0, 1);
    }

    return (`${buydata.join('')}월`)
}


