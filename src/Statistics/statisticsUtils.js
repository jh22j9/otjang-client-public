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


export function getAnnualPurchaseData() {

    var monthlyPriceSum = [];


    for (let i = 1; i <= 12; i++) {

        let monthlyPriceObject = { buydate: null, price: null }
        if (i < 10) {
            monthlyPriceObject.buydate = Number(`${currentYear}0${i}`);
            monthlyPriceObject.price = getMonthlyPrice(clothes, Number(`${currentYear}0${i}`));
            monthlyPriceSum.push(monthlyPriceObject)
        }

        else {
            monthlyPriceObject.buydate = Number(`${currentYear}${i}`);
            monthlyPriceObject.price = getMonthlyPrice(clothes, Number(`${currentYear}${i}`));
            monthlyPriceSum.push(monthlyPriceObject)
        }
    }


    return monthlyPriceSum;

}
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

export function getMonthlyPrice(clothesList, buydate) {
    /* 
        THINK 
        특정달에 해당하는 항목의 전체 금액을 리턴한다. 
    */
    return getPrice(getMonthlyList(clothesList, buydate))


}

export function getSeasonList(clothesList, season) {


    return clothesList.filter((clothes) => (clothes.season[`${season}`] === true))

}



export function getTypeList(clothesList, type) {

    return clothesList.filter((clothes) => (clothes.type[`${type}`] === true))

}






export function transformBuydate(data) {

    let buydata = String(data.buydate).split('').splice(2);

    if (buydata[0] === '0') {
        buydata.splice(0, 1);
    }

    return (`${buydata.join('')}월`)
}


