//we will set our middleware logging 
const logging = (store) => (next) => (action) => {
    //we will use console.group and we will console our type of actions and our updated state by using state.getState() method
    console.group(action.type)
        console.log('The action: ',action)
        const ReturnTheResult = next(action)
        console.log('The new state: ' , store.getState())
    console.groupEnd()
    return ReturnTheResult

}
export default logging