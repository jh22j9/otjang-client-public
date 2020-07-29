import { Map, List } from 'immutable';

/* 
THINK

필요한 DATA 
type, category, buydate, price, season 

랜덤으로 
*/
export const clothing = List([
    Map({
        item_id: 18,
        image: null,
        type: Map({
            typeValue: null,
            top: true,
            bottom: false,
            outer: false,
            dress: false
        }),
        category: Map({ categoryValue: 'clothing', clothing: false, Shoes: false, Accessories: false }),
        buydate: 2001,
        price: 10000,
        brand: null,
        storage: null,
        season: Map({
            seasonArray: List(['sp', null, null, null]),
            spring: true, summer: false, fall: false, winter: false
        })
    }),
    Map({
        item_id: 18,
        image: null,
        type: Map({
            typeValue: null,
            top: true,
            bottom: false,
            outer: false,
            dress: false
        }),
        category: Map({ categoryValue: 'clothing', clothing: false, Shoes: false, Accessories: false }),
        buydate: 2002,
        price: 20000,
        brand: null,
        storage: null,
        season: Map({
            seasonArray: List(['sp', null, null, null]),
            spring: true, summer: false, fall: false, winter: false
        })
    }),
    Map({
        item_id: 18,
        image: null,
        type: Map({
            typeValue: null,
            top: true,
            bottom: false,
            outer: false,
            dress: false
        }),
        category: Map({ categoryValue: 'clothing', clothing: false, Shoes: false, Accessories: false }),
        buydate: 2003,
        price: 30000,
        brand: null,
        storage: null,
        season: Map({
            seasonArray: List(['sp', null, null, null]),
            spring: true, summer: false, fall: false, winter: false
        })
    }),
    Map({
        item_id: 18,
        image: null,
        type: Map({
            typeValue: null,
            top: true,
            bottom: false,
            outer: false,
            dress: false
        }),
        category: Map({ categoryValue: 'clothing', clothing: false, Shoes: false, Accessories: false }),
        buydate: 2004,
        price: 40000,
        brand: null,
        storage: null,
        season: Map({
            seasonArray: List(['sp', null, null, null]),
            spring: true, summer: false, fall: false, winter: false
        })
    }),
    Map({
        item_id: 18,
        image: null,
        type: Map({
            typeValue: null,
            top: true,
            bottom: false,
            outer: false,
            dress: false
        }),
        category: Map({ categoryValue: 'clothing', clothing: false, Shoes: false, Accessories: false }),
        buydate: 2005,
        price: 50000,
        brand: null,
        storage: null,
        season: Map({
            seasonArray: List(['sp', null, null, null]),
            spring: true, summer: false, fall: false, winter: false
        })
    }),
    Map({
        item_id: 18,
        image: null,
        type: Map({
            typeValue: null,
            top: false,
            bottom: false,
            outer: true,
            dress: false
        }),
        category: Map({ categoryValue: 'clothing', clothing: false, Shoes: false, Accessories: false }),
        buydate: 2006,
        price: 60000,
        brand: null,
        storage: null,
        season: Map({
            seasonArray: List([null, 'sm', null, null]),
            spring: false, summer: true, fall: false, winter: false
        })
    }),
    Map({
        item_id: 18,
        image: null,
        type: Map({
            typeValue: null,
            top: false,
            bottom: false,
            outer: true,
            dress: false
        }),
        category: Map({ categoryValue: 'clothing', clothing: false, Shoes: false, Accessories: false }),
        buydate: 2007,
        price: 70000,
        brand: null,
        storage: null,
        season: Map({
            seasonArray: List([null, 'sm', null, null]),
            spring: false, summer: true, fall: false, winter: false
        })
    }),
    Map({
        item_id: 18,
        image: null,
        type: Map({
            typeValue: null,
            top: false,
            bottom: false,
            outer: true,
            dress: false
        }),
        category: Map({ categoryValue: 'clothing', clothing: false, Shoes: false, Accessories: false }),
        buydate: 2008,
        price: 80000,
        brand: null,
        storage: null,
        season: Map({
            seasonArray: List([null, 'sm', null, null]),
            spring: false, summer: true, fall: false, winter: false
        })
    }),
    Map({
        item_id: 18,
        image: null,
        type: Map({
            typeValue: null,
            top: false,
            bottom: false,
            outer: false,
            dress: true
        }),
        category: Map({ categoryValue: 'clothing', clothing: false, Shoes: false, Accessories: false }),
        buydate: 2009,
        price: 90000,
        brand: null,
        storage: null,
        season: Map({
            seasonArray: List([null, 'sm', null, null]),
            spring: false, summer: true, fall: false, winter: false
        })
    }),
    Map({
        item_id: 18,
        image: null,
        type: Map({
            typeValue: null,
            top: false,
            bottom: false,
            outer: true,
            dress: false
        }),
        category: Map({ categoryValue: 'clothing', clothing: false, Shoes: false, Accessories: false }),
        buydate: 2010,
        price: 100000,
        brand: null,
        storage: null,
        season: Map({
            seasonArray: List([null, 'sm', null, null]),
            spring: false, summer: true, fall: false, winter: false
        })
    }),
    Map({
        item_id: 18,
        image: null,
        type: Map({
            typeValue: null,
            top: false,
            bottom: true,
            outer: false,
            dress: false
        }),
        category: Map({ categoryValue: 'clothing', clothing: false, Shoes: false, Accessories: false }),
        buydate: 2011,
        price: 110000,
        brand: null,
        storage: null,
        season: Map({
            seasonArray: List([null, 'sm', null, null]),
            spring: false, summer: true, fall: false, winter: false
        })
    }),
    Map({
        item_id: 18,
        image: null,
        type: Map({
            typeValue: null,
            top: false,
            bottom: true,
            outer: false,
            dress: false
        }),
        category: Map({ categoryValue: 'clothing', clothing: false, Shoes: false, Accessories: false }),
        buydate: 2012,
        price: 120000,
        brand: null,
        storage: null,
        season: Map({
            seasonArray: List([null, 'sm', null, null]),
            spring: false, summer: true, fall: false, winter: false
        })
    }),
])
export const shoes = List([
    Map({
        item_id: 18,
        image: null,
        type: Map({
            typeValue: null,
            sneakers: true,
            leather: false,
            other: false
        }),
        category: Map({ categoryValue: 'shoes', clothing: false, Shoes: false, Accessories: false }),
        buydate: 2001,
        price: 20000,
        brand: null,
        storage: null,
        season: Map({
            seasonArray: List([null, 'sm', null, null]),
            spring: false, summer: true, fall: false, winter: false
        })
    }),
    Map({
        item_id: 18,
        image: null,
        type: Map({
            typeValue: null,
            sneakers: true,
            leather: false,
            other: false
        }),
        category: Map({ categoryValue: 'shoes', clothing: false, Shoes: false, Accessories: false }),
        buydate: 2002,
        price: 30000,
        brand: null,
        storage: null,
        season: Map({
            seasonArray: List([null, null, 'f', null]),
            spring: false, summer: false, fall: true, winter: false
        })
    }),
    Map({
        item_id: 18,
        image: null,
        type: Map({
            typeValue: null,
            sneakers: true,
            leather: false,
            other: false
        }),
        category: Map({ categoryValue: 'shoes', clothing: false, Shoes: false, Accessories: false }),
        buydate: 2002,
        price: 30000,
        brand: null,
        storage: null,
        season: Map({
            seasonArray: List([null, null, 'f', null]),
            spring: false, summer: false, fall: true, winter: false
        })
    }),
    Map({
        item_id: 18,
        image: null,
        type: Map({
            typeValue: null,
            sneakers: true,
            leather: false,
            other: false
        }),
        category: Map({ categoryValue: 'shoes', clothing: false, Shoes: false, Accessories: false }),
        buydate: 2003,
        price: 40000,
        brand: null,
        storage: null,
        season: Map({
            seasonArray: List([null, null, 'f', null]),
            spring: false, summer: false, fall: true, winter: false
        })
    }),
    Map({
        item_id: 18,
        image: null,
        type: Map({
            typeValue: null,
            sneakers: false,
            leather: false,
            other: true
        }),
        category: Map({ categoryValue: 'shoes', clothing: false, Shoes: false, Accessories: false }),
        buydate: 2004,
        price: 50000,
        brand: null,
        storage: null,
        season: Map({
            seasonArray: List([null, null, 'f', null]),
            spring: false, summer: false, fall: true, winter: false
        })
    }),
    Map({
        item_id: 18,
        image: null,
        type: Map({
            typeValue: null,
            sneakers: false,
            leather: false,
            other: true
        }),
        category: Map({ categoryValue: 'shoes', clothing: false, Shoes: false, Accessories: false }),
        buydate: 2005,
        price: 60000,
        brand: null,
        storage: null,
        season: Map({
            seasonArray: List([null, null, 'f', null]),
            spring: false, summer: false, fall: true, winter: false
        })
    }),
    Map({
        item_id: 18,
        image: null,
        type: Map({
            typeValue: null,
            sneakers: false,
            leather: false,
            other: true
        }),
        category: Map({ categoryValue: 'shoes', clothing: false, Shoes: false, Accessories: false }),
        buydate: 2006,
        price: 70000,
        brand: null,
        storage: null,
        season: Map({
            seasonArray: List([null, null, 'f', null]),
            spring: false, summer: false, fall: true, winter: false
        })
    }),
    Map({
        item_id: 18,
        image: null,
        type: Map({
            typeValue: null,
            sneakers: false,
            leather: false,
            other: true
        }),
        category: Map({ categoryValue: 'shoes', clothing: false, Shoes: false, Accessories: false }),
        buydate: 2007,
        price: 80000,
        brand: null,
        storage: null,
        season: Map({
            seasonArray: List([null, null, 'f', null]),
            spring: false, summer: false, fall: true, winter: false
        })
    }),
    Map({
        item_id: 18,
        image: null,
        type: Map({
            typeValue: null,
            sneakers: false,
            leather: true,
            other: false
        }),
        category: Map({ categoryValue: 'shoes', clothing: false, Shoes: false, Accessories: false }),
        buydate: 2008,
        price: 90000,
        brand: null,
        storage: null,
        season: Map({
            seasonArray: List([null, null, 'f', null]),
            spring: false, summer: false, fall: true, winter: false
        })
    }),
    Map({
        item_id: 18,
        image: null,
        type: Map({
            typeValue: null,
            sneakers: false,
            leather: true,
            other: false
        }),
        category: Map({ categoryValue: 'shoes', clothing: false, Shoes: false, Accessories: false }),
        buydate: 2009,
        price: 100000,
        brand: null,
        storage: null,
        season: Map({
            seasonArray: List([null, null, 'f', null]),
            spring: false, summer: false, fall: true, winter: false
        })
    }),
    Map({
        item_id: 18,
        image: null,
        type: Map({
            typeValue: null,
            sneakers: false,
            leather: true,
            other: false
        }),
        category: Map({ categoryValue: 'shoes', clothing: false, Shoes: false, Accessories: false }),
        buydate: 2010,
        price: 110000,
        brand: null,
        storage: null,
        season: Map({
            seasonArray: List([null, null, 'f', null]),
            spring: false, summer: false, fall: true, winter: false
        })
    }),
    Map({
        item_id: 18,
        image: null,
        type: Map({
            typeValue: null,
            sneakers: false,
            leather: true,
            other: false
        }),
        category: Map({ categoryValue: 'shoes', clothing: false, Shoes: false, Accessories: false }),
        buydate: 2011,
        price: 120000,
        brand: null,
        storage: null,
        season: Map({
            seasonArray: List([null, null, 'f', null]),
            spring: false, summer: false, fall: true, winter: false
        })
    }),
    Map({
        item_id: 18,
        image: null,
        type: Map({
            typeValue: null,
            sneakers: false,
            leather: true,
            other: false
        }),
        category: Map({ categoryValue: 'shoes', clothing: false, Shoes: false, Accessories: false }),
        buydate: 2012,
        price: 130000,
        brand: null,
        storage: null,
        season: Map({
            seasonArray: List([null, null, null, 'w']),
            spring: false, summer: false, fall: false, winter: true
        })
    }),
])
export const accessories = List([
    Map({
        item_id: 18,
        image: null,
        type: Map({
            typeValue: null,
            bag: true,
            head: false,
            other: false,
        }),
        category: Map({ categoryValue: 'accessories', clothing: false, Shoes: false, Accessories: false }),
        buydate: 2001,
        price: 30000,
        brand: null,
        storage: null,
        season: Map({
            seasonArray: List([null, null, null, 'w']),
            spring: false, summer: false, fall: false, winter: true
        })
    }),
    Map({
        item_id: 18,
        image: null,
        type: Map({
            typeValue: null,
            bag: true,
            head: false,
            other: false,
        }),
        category: Map({ categoryValue: 'accessories', clothing: false, Shoes: false, Accessories: false }),
        buydate: 2002,
        price: 50000,
        brand: null,
        storage: null,
        season: Map({
            seasonArray: List([null, null, null, 'w']),
            spring: false, summer: false, fall: false, winter: true
        })
    }),
    Map({
        item_id: 18,
        image: null,
        type: Map({
            typeValue: null,
            bag: true,
            head: false,
            other: false,
        }),
        category: Map({ categoryValue: 'accessories', clothing: false, Shoes: false, Accessories: false }),
        buydate: 2003,
        price: 70000,
        brand: null,
        storage: null,
        season: Map({
            seasonArray: List([null, null, null, 'w']),
            spring: false, summer: false, fall: false, winter: true
        })
    }),
    Map({
        item_id: 18,
        image: null,
        type: Map({
            typeValue: null,
            bag: true,
            head: false,
            other: false,
        }),
        category: Map({ categoryValue: 'accessories', clothing: false, Shoes: false, Accessories: false }),
        buydate: 2004,
        price: 90000,
        brand: null,
        storage: null,
        season: Map({
            seasonArray: List([null, null, null, 'w']),
            spring: false, summer: false, fall: false, winter: true
        })
    }),
    Map({
        item_id: 18,
        image: null,
        type: Map({
            typeValue: null,
            bag: false,
            head: true,
            other: false,
        }),
        category: Map({ categoryValue: 'accessories', clothing: false, Shoes: false, Accessories: false }),
        buydate: 2005,
        price: 110000,
        brand: null,
        storage: null,
        season: Map({
            seasonArray: List([null, null, null, 'w']),
            spring: false, summer: false, fall: false, winter: true
        })
    }),
    Map({
        item_id: 18,
        image: null,
        type: Map({
            typeValue: null,
            bag: false,
            head: true,
            other: false,
        }),
        category: Map({ categoryValue: 'accessories', clothing: false, Shoes: false, Accessories: false }),
        buydate: 2006,
        price: 130000,
        brand: null,
        storage: null,
        season: Map({
            seasonArray: List([null, null, null, 'w']),
            spring: false, summer: false, fall: false, winter: true
        })
    }),
    Map({
        item_id: 18,
        image: null,
        type: Map({
            typeValue: null,
            bag: false,
            head: true,
            other: false,
        }),
        category: Map({ categoryValue: 'accessories', clothing: false, Shoes: false, Accessories: false }),
        buydate: 2007,
        price: 150000,
        brand: null,
        storage: null,
        season: Map({
            seasonArray: List([null, null, null, 'w']),
            spring: false, summer: false, fall: false, winter: true
        })
    }),
    Map({
        item_id: 18,
        image: null,
        type: Map({
            typeValue: null,
            bag: false,
            head: true,
            other: false,
        }),
        category: Map({ categoryValue: 'accessories', clothing: false, Shoes: false, Accessories: false }),
        buydate: 2008,
        price: 170000,
        brand: null,
        storage: null,
        season: Map({
            seasonArray: List([null, 'sm', 'f', null]),
            spring: false, summer: true, fall: true, winter: false
        })
    }),

    Map({
        item_id: 18,
        image: null,
        type: Map({
            typeValue: null,
            bag: false,
            head: false,
            other: true,
        }),
        category: Map({ categoryValue: 'accessories', clothing: false, Shoes: false, Accessories: false }),
        buydate: 2009,
        price: 190000,
        brand: null,
        storage: null,
        season: Map({
            seasonArray: List([null, 'sm', 'f', null]),
            spring: false, summer: true, fall: true, winter: false
        })
    }),
    Map({
        item_id: 18,
        image: null,
        type: Map({
            typeValue: null,
            bag: false,
            head: false,
            other: true,
        }),
        category: Map({ categoryValue: 'accessories', clothing: false, Shoes: false, Accessories: false }),
        buydate: 2010,
        price: 210000,
        brand: null,
        storage: null,
        season: Map({
            seasonArray: List([null, 'sm', 'f', null]),
            spring: false, summer: true, fall: true, winter: false
        })
    }),
    Map({
        item_id: 18,
        image: null,
        type: Map({
            typeValue: null,
            bag: false,
            head: false,
            other: true,
        }),
        category: Map({ categoryValue: 'accessories', clothing: false, Shoes: false, Accessories: false }),
        buydate: 2011,
        price: 230000,
        brand: null,
        storage: null,
        season: Map({
            seasonArray: List([null, 'sm', 'f', null]),
            spring: false, summer: true, fall: true, winter: false
        })
    }),
    Map({
        item_id: 18,
        image: null,
        type: Map({
            typeValue: null,
            bag: false,
            head: false,
            other: true,
        }),
        category: Map({ categoryValue: 'accessories', clothing: false, Shoes: false, Accessories: false }),
        buydate: 2012,
        price: 250000,
        brand: null,
        storage: null,
        season: Map({
            seasonArray: List([null, 'sm', 'f', null]),
            spring: false, summer: true, fall: true, winter: false
        })
    }),
    Map({
        item_id: 18,
        image: null,
        type: Map({
            typeValue: null,
            bag: false,
            head: false,
            other: true,
        }),
        category: Map({ categoryValue: 'accessories', clothing: false, Shoes: false, Accessories: false }),
        buydate: 2011,
        price: 230000,
        brand: null,
        storage: null,
        season: Map({
            seasonArray: List([null, 'sm', 'f', null]),
            spring: false, summer: true, fall: true, winter: false
        })
    }),
    Map({
        item_id: 18,
        image: null,
        type: Map({
            typeValue: null,
            bag: false,
            head: false,
            other: true,
        }),
        category: Map({ categoryValue: 'accessories', clothing: false, Shoes: false, Accessories: false }),
        buydate: 2012,
        price: 250000,
        brand: null,
        storage: null,
        season: Map({
            seasonArray: List([null, 'sm', 'f', null]),
            spring: false, summer: true, fall: true, winter: false
        })
    }),
])

