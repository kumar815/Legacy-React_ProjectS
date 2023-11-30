

let initialState = {
    user:{
        name : '',
        email :'',
        password :'',
        designation:'',
        terms:false
    }
}
export const reducer =(state=initialState,action) =>{
    switch(action.type){
        case userActions.REGIster_USER:
            return{
                user:action.payload.user
            }
            default:return state;
    }
}