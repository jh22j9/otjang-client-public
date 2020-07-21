import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

const CREATE_CLOTHES = 'clothesReducer/CREATE_CLOTHES';
const REMOVE_CLOTHES = 'clothesReducer/REMOVE_CLOTHES';
const SET_CLOTHES = 'clothesReducer/SET_CLOTHES';

const initialState = Map({
    user: Map({ email: null, password: null }),
    clothes: List([
        Map({
            item_id: null,
            image: null,
            type: List([]),
            category: null,
            buydate: null,
            price: null,
            brand: null,
            storage: null,
            season: Map({})
        })
    ])
})

// 액션 생성자
// 해당 액션상성자가 어떤 parameter 를 받아야 하는지 주석으로 적음 
export const createClothes = createAction(CREATE_CLOTHES);
export const removeClothes = createAction(REMOVE_CLOTHES);
export const setClothes = createAction(SET_CLOTHES); // {index:4,clothes:{item_id:43,image:'sfsdf',type:null....}}

// 우리의 액션타입에는 접두사가 들어가있기 때문에 그냥 CREATE: 를 하면 안되고, [CREATE]: 로 해주어야합니다.

export default handleActions({


    [CREATE_CLOTHES]: (state, action) => {
        const clothes = state.get('clothes');
        console.log('CREATE_CLOTHES', clothes);
        // THINK: 의류에 대한 정보를 등록한 후 저장하기 버튼을 누르면 서버에 post 요청을 보내고
        // 이후 응답으로 받은 id 를 받아서 argument 로 넘긴다.

        /* ex> createClothes({item_id:45,image:dfds,type:top,category:clothes....}) 
            argument 로 설정한 값이 payload key 안에 들어간다. 
            action.payload = {item_id:45,image:dfds,type:top,category:clothes....}
         */
        return state.set('counters', clothes.push(
            Map({
                item_id: action.payload.item_id,
                image: action.payload.image,
                type: action.payload.type,
                category: action.payload.category,
                buydate: action.payload.buydate,
                price: action.payload.price,
                brand: action.payload.brand,
                storage: action.payload.storage,
                season: action.payload.season
            })
        ))
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

        return state.set('clothes', clothes.update(index, (cloth) => clothesObject));
    }
}, initialState);



