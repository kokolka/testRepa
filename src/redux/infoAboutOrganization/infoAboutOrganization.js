
const SET_INFO_PAGE = 'SET_INFO_PAGE';

let initialState = {
    pageInfo: {
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
    }
}

const infoAboutOrganization = (state = initialState, action) => {
    switch (action.type) {
        case SET_INFO_PAGE:
            return {
                ...state,
                pageInfo: action.payload
            }
        default:
            return state;
    }
}

export const setInfoPage = (payload) => ({ type: SET_INFO_PAGE, payload })

export default infoAboutOrganization;