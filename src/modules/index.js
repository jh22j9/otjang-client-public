import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

const CREATE_CLOTHES = 'clothesReducer/CREATE_CLOTHES';
const REMOVE_CLOTHES = 'clothesReducer/REMOVE_CLOTHES';
const SET_CLOTHES = 'clothesReducer/SET_CLOTHES';
const SET_TEMPORARY_CLOTHING = 'clothesReducer/SET_TEMPORARY_CLOTHING';


const initialState = Map({
    user: Map({ email: null, password: null }),
    clothes: List([
        Map({
            item_id: null,
            image: null,
            type: Map({ typeValue: null, top: false, bottom: false, socks: false }),
            category: Map({ categoryValue: null, clothing: false, Shoes: false, Accessories: false }),
            buydate: null,
            price: null,
            brand: null,
            storage: null,
            season: Map({
                seasonArray: List([null, null, null, null]),
                spring: false, summer: false, fall: false, winter: false
            })
        })
    ]),
    temporaryClothing: Map({
        item_id: null,
        image: null,
        type: Map({ typeValue: null, top: false, bottom: false, socks: false }),
        category: Map({ categoryValue: null, clothing: false, Shoes: false, Accessories: false }),
        buydate: null,
        price: null,
        brand: null,
        storage: null,
        season: Map({
            seasonArray: List([null, null, null, null]),
            spring: false, summer: false, fall: false, winter: false
        })
    })

    /*   THINK: 
    
    cloth : Map({}) 으로 따로 추가, 수정할 의류 객체를 따로 지정함 
  
    type, 카테고리, 계절 선택할 때마다 cloth 에 반영 
  
    저장버튼을 누르면 AddItems 의 index 로 clothes List 에 반영 
  
    안하면 cloth 를 초기화 시킨다. 

    TODO: 

    > initialState 에 cloth 객체 추가 (O)

    > cloth 를 변경시킬 action type, createAction, handleActions 에 추가 (O)

    > mapState mapDispatch 로 additems 에 반영한다. (O)

    > Gallery.js 변경 (O)

    > TypeList.js 변경 (O)

    > Season.js 변경 (O)

    > CF + 버튼을 누르거나, 이미지 카드 터치했을 때 cloth 객체를 초기화 시킨다. 
    
    */
})

// 액션 생성자
// 해당 액션상성자가 어떤 parameter 를 받아야 하는지 주석으로 적음 
export const createClothes = createAction(CREATE_CLOTHES);
export const removeClothes = createAction(REMOVE_CLOTHES);
export const setClothes = createAction(SET_CLOTHES); // {index:4,clothes:{item_id:43,image:'sfsdf',type:null....}}
export const setTemporaryClothing = createAction(SET_TEMPORARY_CLOTHING) // {item_id:43,image:'sfsdf',type:null....}}


// 우리의 액션타입에는 접두사가 들어가있기 때문에 그냥 CREATE: 를 하면 안되고, [CREATE]: 로 해주어야합니다.

export default handleActions({


    [CREATE_CLOTHES]: (state, action) => {
        const clothes = state.get('clothes');
        console.log('CREATE_CLOTHES', clothes);
        // THINK: 의류에 대한 정보를 등록한 후 저장하기 버튼을 누르면 서버에 post 요청을 보내고
        // 이후 응답으로 받은 id 를 받아서 argument 로 넘긴다.
        const newClothing = action.payload;
        /* ex> createClothes({item_id:45,image:dfds,type:top,category:clothes....}) 
            argument 로 설정한 값이 payload key 안에 들어간다. 
            action.payload = {item_id:45,image:dfds,type:top,category:clothes....}
         */

        return state.set('clothes', clothes.push(newClothing))
    },

    [REMOVE_CLOTHES]: (state, action) => {

        console.log('REMOVE_CLOTHES', clothes);
        const clothes = state.get('clothes');
        return state.set('clothes', clothes.pop());
    },

    [SET_CLOTHES]: (state, action) => {

        /* THINK: payload= {index:3,clothes:{item_id:43,image:'sfsdf',type:null....}} 
            의류정보가 담긴 객체로 덮어 씌움  
        */
        const clothes = state.get('clothes');
        console.log('SET_CLOTHES', clothes);
        console.log('action.payload', action.payload)
        const clothesObject = action.payload.clothes;
        const index = action.payload.index;

        return state.set('clothes', clothes.set(index, clothesObject));
    },

    [SET_TEMPORARY_CLOTHING]: (state, action) => {

        // payload = {item_id:43,image:'sfsdf',type:null....}
        const temporaryClothing = action.payload;
        console.log('temporaryClothing', temporaryClothing)
        return state.set('temporaryClothing', temporaryClothing)

    }
}, initialState);



