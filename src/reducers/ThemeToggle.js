const ThemeReducer = (state ={dark:false} , action) =>{
    switch(action.type){
        case 'Theme_Mode':
            return {
                dark:!state.dark
            }
        default:
            return state;

    }
}
export default ThemeReducer;