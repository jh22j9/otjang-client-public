import { createAction, handleActions } from 'redux-actions';
import { Map, List, fromJS } from 'immutable';
import axios from 'axios';
const CREATE_CLOTHES = 'wardrobe/CREATE_CLOTHES';
const REMOVE_CLOTHES = 'wardrobe/REMOVE_CLOTHES';
const SET_CLOTHES = 'wardrobe/SET_CLOTHES';
const SET_TEMPORARY_CLOTHING = 'wardrobe/SET_TEMPORARY_CLOTHING';
// 서버
const ADD_ITEM = 'wardrobe/POST_ADDITEM';
const UPDATE_ITEM = 'wardrobe/POST_UPDATEITEM';
const REMOVE_ITEM = 'wardrobe/POST_DELETEITEM';
const GET_CLOTHES = 'wardrobe/GET_CLOTHES'

const dog1 = null
const dog2 = null
const dog3 = null


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
        Map({
            item_id: null,
            image: dog1,

            category: Map({
                ...categoryObject,
                categoryValue: 'clothing',
            }),
            type: Map(typeObject),
            buydate: null,
            price: null,
            brand: null,
            storage: null,
            season: Map(seasonObject),
            isLoading: false,
        }),
    ]),
    shoes: List([
        Map({
            item_id: null,
            image: dog2,
            category: Map({
                ...categoryObject,
                categoryValue: 'shoes',
            }),
            type: Map(typeObject),
            buydate: null,
            price: null,
            brand: null,
            storage: null,
            season: Map(seasonObject),
            isLoading: false,
        }),
    ]),
    accessories: List([
        Map({
            item_id: null,
            image: dog3,
            category: Map({
                ...categoryObject,
                categoryValue: 'accessories',
            }),
            type: Map(typeObject),
            buydate: null,
            price: null,
            brand: null,
            storage: null,
            season: Map(seasonObject),
            isLoading: false,
        }),
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

// 액션 생성자
// 해당 액션상성자가 어떤 parameter 를 받아야 하는지 주석으로 적음 
function AddItemInServer(sendingClothingToServer) {


    /* 
    BUG AXIOS 에서 자동으로 JSON 으로 변환하며 이미 문자열로 된 TOKEN 에 "" 을 한번 더 붙여서 
    서버에서 토큰을 확인하지 못함. 
    AsyncStorage 에서 get 한 이후 데이터를 JSON.parse() 하여 해결함 

    
    */
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
    return axios.post(url, data, config)
        .then((res) => (res))
        .catch((err) => { console.warn(err) });
}

function updateItemInServer(sendingClothingToServer) {

    const item = sendingClothingToServer.item.toJS();
    const id = item.item_id;

    const url = `http://15.165.197.67:5000/item/${id}`
    const token = sendingClothingToServer.token;

    /* 
       TODO: DATA 형식 문제로 수정이 안되고 있음 확인바람 
       */

    /* THINK
     item.season.seasonArray 에 NULL 이 있다면 제거해라 
    */

    const noNullValueSeason = item.season.seasonArray.filter((season) => (season !== null))
    const data = {
        season: noNullValueSeason, image: item.image, type: item.type.typeValue,
        category: item.category.categoryValue, buydate: item.buydate, price: item.price,
        brand: item.brand, storage: item.storage,
    }

    const config = { headers: { token: token } }
    return axios.patch(url, data, config).then((res) => (res))
        .catch((err) => { console.warn(err) });
}

function deleteItemInServer(deletingClothingToServer) {

    const item = deletingClothingToServer.item.toJS();
    const id = item.item_id;
    const url = `http://15.165.197.67:5000/item/${id}`
    const token = deletingClothingToServer.token;


    const config = { headers: { token: token } }
    return axios.delete(url, config).then((res) => (res))
        .catch((err) => { console.warn(err) });
}


function getItemsFromServer(token) {

    const url = 'http://15.165.197.67:5000/info';
    const config = { headers: { token: token } }
    return axios.get(url, config).then((res) => (res))
        .catch((err) => { console.warn(err) });
}

export const createClothes = createAction(CREATE_CLOTHES);
export const removeClothes = createAction(REMOVE_CLOTHES);
export const setClothes = createAction(SET_CLOTHES); // {index:4,clothes:{item_id:43,image:'sfsdf',type:null....}}
export const setTemporaryClothing = createAction(SET_TEMPORARY_CLOTHING) // {item_id:43,image:'sfsdf',type:null....}}


// sendingClothingToServer={token:AsyncStorage.getItem('TOKEN'),item:temporaryClothing}
export const createClothesToServer = (sendingClothingToServer) => ({

    type: ADD_ITEM,
    async payload() {
        const { data } = await AddItemInServer(sendingClothingToServer);
        const id = data['item_id']
        return sendingClothingToServer.item.set('item_id', id);
    }
})
// sendingClothingToServer={token:AsyncStorage.getItem('TOKEN'),item:temporaryClothing}
export const updateClothesToServer = (sendingClothingToServer) => ({

    type: UPDATE_ITEM,
    async payload() {

        await updateItemInServer(sendingClothingToServer);
        return sendingClothingToServer;
    }
})
// sendingClothingToServer={index:index,token:AsyncStorage.getItem('TOKEN'),item:temporaryClothing}
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

    // THINK: 의류에 대한 정보를 등록한 후 저장하기 버튼을 누르면 서버에 post 요청을 보내고
    // 이후 응답으로 받은 id 를 받아서 argument 로 넘긴다.
    // newClothing -> ID 가 있는 상태 
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


// 우리의 액션타입에는 접두사가 들어가있기 때문에 그냥 CREATE: 를 하면 안되고, [CREATE]: 로 해주어야합니다.
export default handleActions({

    /* 
    THINK 
    
    서버 관련된 처리를 REDUX 전에 처리해야 함 추가,수정,삭제 전부 
    */
    [CREATE_CLOTHES]: (state, action) => {

        return addItemInClient(state, action)

        // THINK: 의류에 대한 정보를 등록한 후 저장하기 버튼을 누르면 서버에 post 요청을 보내고
        // 이후 응답으로 받은 id 를 받아서 argument 로 넘긴다.
        // newClothing -> ID 가 있는 상태 
        /* 
        TODO: 
        newClothing 에서 CATEGORY 를 확인하여 해당 CATEGORY 키에 PUSH 한다. 
 
        1> payload 에 category 를 같이 보낸다. 
 
        2> 
        */
        /* ex> createClothes({item_id:45,image:dfds,type:top,category:clothes....}) 
            argument 로 설정한 값이 payload key 안에 들어간다. 
            action.payload = {item_id:45,image:dfds,type:top,category:clothes....}
         */

    },
    /* THINK
    
    삭제할려면 POP 이 아니라 특정 INDEX 에 있는 항목을 삭제해야 함 
    
    CLOTHES 각 객체가 가지고 있는 ITEM_ID 를 가지고 전체 CLOTHES 배열에서 검색하여 
    해당 객체의 배열 내 INDEX 를 찾고 SPLICE 로 해당 객체를 배열에서 제거한다. 
    
     */
    [REMOVE_CLOTHES]: (state, action) => {


        return deleteItemInClient(state, action);
    },

    /* THINK

수정하려면  특정 INDEX 에 있는 항목을 수정해야 함 
의류들은 신발, 악세서리, 티셔츠 등으로 나눠져 관리 되기 때문에 
INDEX 를 argument 로 보내는 건 의미가 없음 
CLOTHES 각 객체가 가지고 있는 ITEM_ID 를 가지고 전체 CLOTHES 배열에서 검색하여 
해당 객체의 배열 내 INDEX 를 찾고 SPLICE 로 해당 객체를 배열에서 제거한다. 

 */
    [SET_CLOTHES]: (state, action) => {

        /* THINK: payload= {index:3,clothes:{item_id:43,image:'sfsdf',type:null....}} 
            의류정보가 담긴 객체로 덮어 씌움  
        */

        return updateItemInClient(state, action);
    },

    [SET_TEMPORARY_CLOTHING]: (state, action) => {

        // payload = {item_id:43,image:'sfsdf',type:null....}
        const temporaryClothing = action.payload;
        return state.set('temporaryClothing', temporaryClothing)

    },
    [`${GET_CLOTHES}_PENDING`]: (state, action) => {
        return state

    },
    [`${GET_CLOTHES}_FULFILLED`]: (state, action) => {



        const clothes = action.payload.data.data;
        /* 
        THINK 
        카테고리에 따라 분류한 것을 양식을 변경한 후 state 의 카테고리 배열에 덮어씌운다.  

        */

        function checkSeason(clothesObject) {

            var seasonObject = {
                seasonArray: [null, null, null, null],
                spring: false, summer: false, fall: false, winter: false
            }
            /* 
            THINK 1이면 해당 계절 TRUE 로 변경하고 SEASON ARR 해당 위치에 값 추가 
            아니면 그대로 NULL, FALSE 로 놔둠 

            */

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

            // TODO : 서버에서 받은 데이터의 형식을 클라이언트에서 관리하는 형식으로 변경
            //  clothes-> ARRAY 

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

                // 카테고리,type 확인한 후 해당 카테고리 ,type 를 true 로 변경 

                clientClothingObject.category[`${clothes[i].category}`] = true;
                clientClothingObject.type[`${clothes[i].type}`] = true;
                clientClothingObject.season = checkSeason(clothes[i]);

                // season 0 -> false season 1 -> true 
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
        // TODO, BUG : 서버로부터 계절을 받아서 분배하지 못하고 있다. 


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
        /* 
        BUG 
        
        PENDING 일때 기존 STATE 를 그대로 리턴해야함 
        
        { state } 로 리턴하고 있었음.. 
        */
        return state

    },
    [`${UPDATE_ITEM}_FULFILLED`]: (state, action) => {

        return updateItemInClient(state, action);

    },

    [`${UPDATE_ITEM}_REJECTED`]: (state, action) => {
        return state
    },

    [`${REMOVE_ITEM}_PENDING`]: (state, action) => {
        /* 
        BUG 
        
        PENDING 일때 기존 STATE 를 그대로 리턴해야함 
        
        { state } 로 리턴하고 있었음.. 
        */
        return state

    },
    [`${REMOVE_ITEM}_FULFILLED`]: (state, action) => {


        return deleteItemInClient(state, action);

    },

    [`${REMOVE_ITEM}_REJECTED`]: (state, action) => {
        return state
    },
}, initialState);



