
const logger = (state: any) => (next: any) => (action: any) => {
    console.group(action.type)
    console.info('Previus State', state.getState())
    let result = next(action)
    console.log('next state', state.getState())
    console.groupEnd()
    return result

}

export default logger;