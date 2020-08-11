import { createAction, handleActions } from 'redux-actions';
import { Map, List, fromJS } from 'immutable';
import axios from 'axios';
const CREATE_CLOTHES = 'wardrobe/CREATE_CLOTHES';
const REMOVE_CLOTHES = 'wardrobe/REMOVE_CLOTHES';
const SET_CLOTHES = 'wardrobe/SET_CLOTHES';
const SET_TEMPORARY_CLOTHING = 'wardrobe/SET_TEMPORARY_CLOTHING';
// 서버
const ADD_ITEM = 'wardrobe/ADD_ITEM';
const UPDATE_ITEM = 'wardrobe/UPDATE_ITEM';
const REMOVE_ITEM = 'wardrobe/DELETE_ITEM';
const GET_CLOTHES = 'wardrobe/GET_CLOTHES'

const typeObject = {
    typeValue: null,
    top: false,
    bottom: false,
    outer: false,
    dress: false,

    sneakers: false,
    leather: false,
    sandals: false,
    boots: false,

    bag: false,
    head: false,
    jewelry: false,
    other: false,
}

const seasonObject = {
    seasonArray: List([null, null, null, null]),
    spring: false,
    summer: false,
    fall: false,
    winter: false
}

const categoryObject = {
    categoryValue: null,
    clothing: false,
    shoes: false,
    accessories: false
}

export const initialState = Map({
    clothing: List([

    ]),
    shoes: List([

    ]),
    accessories: List([

    ]),
    temporaryClothing: Map({
        item_id: null,
        image: null,
        category: Map(categoryObject),
        type: Map(typeObject),
        buydate: null,
        price: null,
        brand: null,
        storage: null,
        season: Map(seasonObject),
        isLoading: false,
    })

})

function AddItemInServer(sendingClothingToServer) {

    const url = 'http://15.165.197.67:5000/item'
    const token = sendingClothingToServer.token;
    const item = sendingClothingToServer.item.toJS();

    const noNullValueSeason = item.season.seasonArray.filter((season) => (season !== null))
    const data = {
        season: noNullValueSeason, image: item.image, type: item.type.typeValue,
        category: item.category.categoryValue, buydate: item.buydate, price: item.price,
        brand: item.brand, storage: item.storage,
    }
    const config = { headers: { token: token } }
    try {
        return axios.post(url, data, config)
            .then((res) => (res))
            .catch((err) => { console.warn(err) });
    } catch (error) {
        console.log(error)
    }

}

function updateItemInServer(sendingClothingToServer) {

    const item = sendingClothingToServer.item.toJS();
    const id = item.item_id;

    const url = `http://15.165.197.67:5000/item/${id}`
    const token = sendingClothingToServer.token;

    const noNullValueSeason = item.season.seasonArray.filter((season) => (season !== null))
    const data = {
        season: noNullValueSeason, image: item.image, type: item.type.typeValue,
        category: item.category.categoryValue, buydate: item.buydate, price: item.price,
        brand: item.brand, storage: item.storage,
    }

    const config = { headers: { token: token } }
    try {
        return axios.patch(url, data, config).then((res) => (res))
            .catch((err) => { console.log(err) });
    } catch (error) {
        console.log(error);
    }

}

function deleteItemInServer(deletingClothingToServer) {

    const item = deletingClothingToServer.item.toJS();
    const id = item.item_id;
    const url = `http://15.165.197.67:5000/item/${id}`
    const token = deletingClothingToServer.token;


    const config = { headers: { token: token } }

    try {
        return axios.delete(url, config).then((res) => (res))
            .catch((err) => { console.log(err) });
    } catch (error) {
        console.log(error);
    }

}


function getItemsFromServer(token) {

    const url = 'http://15.165.197.67:5000/info';
    const config = { headers: { token: token } }
    try {
        return axios.get(url, config).then((res) => (res))
            .catch((err) => { console.log(err) });
    } catch (error) {
        console.log(error)
    }

}

export const createClothes = createAction(CREATE_CLOTHES);
export const removeClothes = createAction(REMOVE_CLOTHES);
export const setClothes = createAction(SET_CLOTHES); // {index:4,clothes:{item_id:43,image:'sfsdf',type:null....}}
export const setTemporaryClothing = createAction(SET_TEMPORARY_CLOTHING) // {item_id:43,image:'sfsdf',type:null....}}


export const createClothesToServer = (sendingClothingToServer) => ({

    type: ADD_ITEM,
    async payload() {
        const { data } = await AddItemInServer(sendingClothingToServer);
        const id = data['item_id']
        return sendingClothingToServer.item.set('item_id', id);
    }
})
export const updateClothesToServer = (sendingClothingToServer) => ({

    type: UPDATE_ITEM,
    async payload() {

        await updateItemInServer(sendingClothingToServer);
        return sendingClothingToServer;
    }
})
export const removeClothesToServer = (deletingClothingToServer) => ({

    type: REMOVE_ITEM,
    async payload() {

        await deleteItemInServer(deletingClothingToServer);
        return deletingClothingToServer;
    }
})

export const getClothesFromServer = (token) => ({

    type: GET_CLOTHES,
    async payload() {

        return await getItemsFromServer(token);
    }

})


function addItemInClient(state, action) {

    const clothing = state.get('clothing');
    const shoes = state.get('shoes');
    const accessories = state.get('accessories');

    const newClothing = action.payload;
    const category = newClothing.get('category').get('categoryValue');


    if (category === 'clothing') {
        return state.set('clothing', clothing.push(newClothing))
    }

    else if (category === 'shoes') {
        return state.set('shoes', shoes.push(newClothing))
    }

    else if (category === 'accessories') {
        return state.set('accessories', accessories.push(newClothing))
    }

}

function updateItemInClient(state, action) {

    const index = action.payload.index;
    const item = action.payload.item;
    const originCategory = action.payload.category;
    const clothing = state.get('clothing');
    const shoes = state.get('shoes');
    const accessories = state.get('accessories');

    const category = item.get('category').get('categoryValue');

    if (originCategory !== category) {
        var originCategoryData = state.get(`${originCategory}`);
        var removedOriginCategoryState = state.set(`${originCategory}`, originCategoryData.splice(index, 1))
    }

    if (category === 'clothing') {

        if (originCategory !== category) {
            return removedOriginCategoryState.set('clothing', clothing.push(item));
        }

        else {
            return state.set('clothing', clothing.set(index, item))
        }
    }

    else if (category === 'shoes') {

        if (originCategory !== category) {
            return removedOriginCategoryState.set('shoes', shoes.push(item));
        }

        else {
            return state.set('shoes', shoes.set(index, item))
        }

    }

    else if (category === 'accessories') {

        if (originCategory !== category) {
            return removedOriginCategoryState.set('accessories', accessories.push(item));
        }

        else {
            return state.set('accessories', accessories.set(index, item))
        }
    }
}

function deleteItemInClient(state, action) {

    const index = action.payload.index;
    const item = action.payload.item;
    const clothing = state.get('clothing');
    const shoes = state.get('shoes');
    const accessories = state.get('accessories');
    const category = item.get('category').get('categoryValue');
    if (category === 'clothing') {
        return state.set('clothing', clothing.splice(index, 1))
    }

    else if (category === 'shoes') {
        return state.set('shoes', shoes.splice(index, 1))
    }

    else if (category === 'accessories') {
        return state.set('accessories', accessories.splice(index, 1))
    }
}


export default handleActions({

    [CREATE_CLOTHES]: (state, action) => {

        return addItemInClient(state, action)


    },
    [REMOVE_CLOTHES]: (state, action) => {


        return deleteItemInClient(state, action);
    },

    [SET_CLOTHES]: (state, action) => {


        return updateItemInClient(state, action);
    },

    [SET_TEMPORARY_CLOTHING]: (state, action) => {

        const temporaryClothing = action.payload;
        return state.set('temporaryClothing', temporaryClothing)

    },
    [`${GET_CLOTHES}_PENDING`]: (state, action) => {
        return state

    },
    [`${GET_CLOTHES}_FULFILLED`]: (state, action) => {

        var clothes;
        try {
            if (action.payload) {
                clothes = action.payload.data.data;
            }
            else {
                return state
                clothes = null;
            }
        } catch (error) {
            console.log(error);
        }


        function checkSeason(clothesObject) {

            var seasonObject = {
                seasonArray: [null, null, null, null],
                spring: false, summer: false, fall: false, winter: false
            }

            if (clothesObject.sp === 1) {
                seasonObject.seasonArray[0] = 'sp';
                seasonObject.spring = true;

            }

            if (clothesObject.sm === 1) {
                seasonObject.seasonArray[1] = 'sm';
                seasonObject.summer = true;
            }

            if (clothesObject.f === 1) {
                seasonObject.seasonArray[2] = 'f';
                seasonObject.fall = true;
            }

            if (clothesObject.w === 1) {
                seasonObject.seasonArray[3] = 'w';
                seasonObject.winter = true;
            }
            return seasonObject;

        }

        function changeClothesForm(clothes) {


            var clientClothingArray = [];

            for (let i = 0; i < clothes.length; i++) {

                let clientClothingObject = {
                    item_id: clothes[i].ItemId,
                    image: clothes[i].image,
                    type: { typeValue: clothes[i].type, top: false, bottom: false, socks: false },
                    category: { categoryValue: clothes[i].category, clothing: false, Shoes: false, Accessories: false },
                    buydate: clothes[i].buydate,
                    price: clothes[i].price,
                    brand: clothes[i].brand,
                    storage: clothes[i].storage,
                    season: {
                        seasonArray: [null, null, null, null],
                        spring: false, summer: false, fall: false, winter: false
                    }
                }

                clientClothingObject.category[`${clothes[i].category}`] = true;
                clientClothingObject.type[`${clothes[i].type}`] = true;
                clientClothingObject.season = checkSeason(clothes[i]);


                clientClothingArray.push(clientClothingObject);
            }
            return clientClothingArray;
        }

        const clothingFromServer = clothes.filter((cloth) => (cloth.category === 'clothing'))
        const shoesFromServer = clothes.filter((cloth) => (cloth.category === 'shoes'))
        const accessoriesFromServer = clothes.filter((cloth) => (cloth.category === 'accessories'))
        const clothingInClient = fromJS(changeClothesForm(clothingFromServer))
        const shoesInClient = fromJS(changeClothesForm(shoesFromServer))
        const accessoriesInClient = fromJS(changeClothesForm(accessoriesFromServer))



        return state.set('clothing', clothingInClient).set('shoes', shoesInClient).set('accessories', accessoriesInClient)
    },

    [`${GET_CLOTHES}_REJECTED`]: (state, action) => {
        return state
    },


    [`${ADD_ITEM}_PENDING`]: (state, action) => {


        return state

    },
    [`${ADD_ITEM}_FULFILLED`]: (state, action) => {

        return addItemInClient(state, action);
    },

    [`${ADD_ITEM}_REJECTED`]: (state, action) => {
        return state
    },


    [`${UPDATE_ITEM}_PENDING`]: (state, action) => {

        return state

    },
    [`${UPDATE_ITEM}_FULFILLED`]: (state, action) => {

        return updateItemInClient(state, action);

    },

    [`${UPDATE_ITEM}_REJECTED`]: (state, action) => {
        return state
    },

    [`${REMOVE_ITEM}_PENDING`]: (state, action) => {
        return state

    },
    [`${REMOVE_ITEM}_FULFILLED`]: (state, action) => {


        return deleteItemInClient(state, action);

    },

    [`${REMOVE_ITEM}_REJECTED`]: (state, action) => {
        return state
    },
}, initialState);



