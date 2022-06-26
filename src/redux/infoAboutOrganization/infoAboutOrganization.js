import img1 from '../../assets/image/ForPage/Безымянный.png';
import img2 from '../../assets/image/ForPage/Безымянный1.png';
import img3 from '../../assets/image/ForPage/эко1.jpg';

const SET_INFO_PAGE = 'SET_INFO_PAGE';
const DELETE_IMG_FROM_PAGE = 'DELETE_IMG_FROM_PAGE';
const SET_GENERAL_INFO = 'SET_GENERAL_INFO';
const SET_NAME = 'SET_NAME';
const ADD_PHOTO = 'ADD_PHOTO';
const DELETE_PAGE = 'DELETE_PAGE';

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
            "name": "ИП Фирма «Неперспективные захоронения»",
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
    photoById: {
        12: [
            { img: img1, id: 1, date: '2022-06-24' },
            { img: img2, id: 2, date: '2022-06-24' }
        ],
        13: [
            { img: img3, id: 1, date: '2022-06-24' }
        ]
    }
}

const infoAboutOrganization = (state = initialState, action) => {
    switch (action.type) {
        case SET_INFO_PAGE: {
            return {
                ...state,
                pageData: { ...state.pageData, [action.id]: action.payload },
            }
        }
        case DELETE_IMG_FROM_PAGE: {
            let copyState = {
                ...state,
                photoById: { ...state.photoById }
            };
            copyState.photoById[action.UserId] = [...state.photoById[action.UserId]];
            copyState.photoById[action.UserId] = state.photoById[action.UserId].map(el => {
                return { img: el.img, id: el.id, date: el.date }
            });
            //выше глубокое копирование
            copyState.photoById[action.UserId] = copyState.photoById[action.UserId]
                .filter(el =>
                    el.id != action.photoId
                );
            return copyState;
        }
        case SET_GENERAL_INFO: {
            let copyState = {
                ...state,
                pageData: { ...state.pageData }
            };
            copyState.pageData[action.UserId] = {...state.pageData[action.UserId]};
            copyState.pageData[action.UserId].contract = {...state.pageData[action.UserId].contract};
            copyState.pageData[action.UserId].type = [...state.pageData[action.UserId].type]; //возможно ненужно
            //выше глубокое копирование
            copyState.pageData[action.UserId].shortName = action.newShortName; //установливаю нового короткого имени
            copyState.pageData[action.UserId].businessEntity = action.newBusinessEntity; //устнавливаю тип юр лица
            copyState.pageData[action.UserId].name = `${action.newBusinessEntity} ${action.newShortName}`; //устанавливаю полное имя компании
            copyState.pageData[action.UserId].contract.no = action.newСontractNo; //устнавливаю договор
            copyState.pageData[action.UserId].contract.issue_date = action.newDate; //устнавливаю дата договора
            copyState.pageData[action.UserId].type = action.newType; //устнавливаю типа услуг
            return copyState
        }
        case SET_NAME: {
            let copyState = {
                ...state,
                pageData: { ...state.pageData }
            };
            copyState.pageData[action.UserId] = {...state.pageData[action.UserId]};
            
            copyState.pageData[action.UserId].shortName = action.newName; //изменение короткого имени фирмы
            copyState.pageData[action.UserId].name = `${copyState.pageData[action.UserId].businessEntity} ${action.newName}`; //устанавливаю полное имя компании
            return copyState;
        }
        case ADD_PHOTO: {
            let newElement = {
                img: action.img, 
                id: action.id, 
                date: action.date 
            }

            let copyState = {
                ...state,
                photoById: { ...state.photoById }
            };
            copyState.photoById[action.UserId] = [...state.photoById[action.UserId], newElement ]
            return copyState;
        }
        case DELETE_PAGE: {
            debugger
            let newPage = Object.keys(state.pageData).map((el) => {
                if(el !== action.UserId){
                    return {...state.pageData[el]};
                }
            })
            let newPhotoById = Object.keys(state.photoById).map((el) => {
                if(el !== action.UserId){
                    return {...state.photoById[el]};
                }
            })
            debugger
            let copyState ={
                ...state,
                pageData: {newPage},
                photoById: {newPhotoById}
            };
        }
        default: return state;
    }
}

export const setInfoPage = (id, payload) => ({ type: SET_INFO_PAGE, id, payload });//добавление нового агента
export const deleteImgFromPage = (UserId, photoId) => ({ type: DELETE_IMG_FROM_PAGE, UserId, photoId }); //удаление фотографии со страницы
export const setGeneralInfo = (UserId, newShortName, newBusinessEntity, newСontractNo, newDate, newType) => 
({ type: SET_GENERAL_INFO, UserId, newShortName, newBusinessEntity, newСontractNo, newDate, newType }); //удаление фотографии со страницы
export const setName = (UserId, newName) => ({ type: SET_NAME, UserId, newName });//изменение имени фирмы
export const addPhoto = (UserId, img, id, date) => ({ type: ADD_PHOTO, UserId, img, id, date });//добавление изображения
export const deletePage = (UserId) => ({ type: DELETE_PAGE, UserId});//удаление страницы

export default infoAboutOrganization;