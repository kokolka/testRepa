import img1 from '../../assets/image/ForPage/Безымянный.png';
import img2 from '../../assets/image/ForPage/Безымянный1.png';
import img3 from '../../assets/image/ForPage/эко1.jpg';


const SET_INFO_PAGE = 'SET_INFO_PAGE';
const DELETE_IMG_FROM_PAGE = 'DELETE_IMG_FROM_PAGE';

let initialState = {
    pageData: {
        12: {
            "id": "12",
            "contactId": "16",
            "name": "ООО Фирма «Перспективные захоронения»",
            "shortName": "Перспективные захоронения",
            "businessEntity": "ООО",
            "contract": {
                "no": "12345",
                "issue_date": "2015-03-12T00:00:00Z"
            },
            "type": [
                "agent",
                "contractor"
            ],
            "status": "active",
            "photos": [
                {
                    "name": "0b8fc462dcabf7610a91.jpg",
                    "filepath": "http://135.181.35.61:2112/0b8fc462dcabf7610a91.jpg",
                    "thumbpath": "http://135.181.35.61:2112/0b8fc462dcabf7610a91_160x160.jpg"
                }
            ],
            "createdAt": "2020-11-21T08:03:00Z",
            "updatedAt": "2020-11-23T09:30:00Z"
        },
        13: {
            "id": "13",
            "contactId": "17",
            "name": "ИП «Неперспективные захоронения»",
            "shortName": "Неперспективные захоронения",
            "businessEntity": "ИП",
            "contract": {
                "no": "12645",
                "issue_date": "2019-03-12T00:00:00Z"
            },
            "type": [
                "contractor"
            ],
            "status": "active",
            "photos": [
                {
                    "name": "0b8fc462dcabf7610a91.jpg",
                    "filepath": "http://135.181.35.61:2112/0b8fc462dcabf7610a91.jpg",
                    "thumbpath": "http://135.181.35.61:2112/0b8fc462dcabf7610a91_160x160.jpg"
                }
            ],
            "createdAt": "2020-11-21T08:03:00Z",
            "updatedAt": "2020-11-23T09:30:00Z"
        }
    },
    photoById:{
        12:[
            {img: img1, id: 1, date: '2022-06-24'},
            {img: img2, id: 2, date: '2022-06-24'}
        ],
        13:[
            {img: img3, id: 1, date: '2022-06-24'}
        ]
    }
}

const infoAboutOrganization = (state = initialState, action) => {
    switch (action.type) {
        case SET_INFO_PAGE:
            return {
                ...state,
                ...state.pageData,
                [action.id]: action.payload
            }
        case DELETE_IMG_FROM_PAGE:
            return{
                ...state,
                ...state.photoById,
                [action.id]: [...state.photoById[action.id].filter(el => el.id != action.id)]
            }
        default:
            return state;
    }
}

export const setInfoPage = (id, payload) => ({ type: SET_INFO_PAGE, id, payload });
export const deleteImgFromPage = (id) => ({type: DELETE_IMG_FROM_PAGE, id})

export default infoAboutOrganization;