export const REGISTER_USER = 'REGISTAR_USER';

export const RegisterUser = (user) =>{
return{
    type:REGISTER_USER,
    payload:{user:user}
}
}