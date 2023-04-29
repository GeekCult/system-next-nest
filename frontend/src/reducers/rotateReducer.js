export default function rotateAction(state, action) {
    
    switch (action.type) {
        
        case "id": {
            return {
                ...state,
                id: action.payload
            };
        }
        case "firstname":{
            return {
                ...state,
                firstname: action.payload
            };
        }
        case "lastname":{
            return {
                ...state,
                lastname: action.payload
            };
        }
        default:
            return state;
    }
  
  
};