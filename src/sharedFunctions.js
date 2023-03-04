function ItemSelected(locationName, locationID, isInArray, dispatch) {
    if (isInArray == true) {
        dispatch(removeItem(locationID))
    } else {
        dispatch(addLocation({name: locationName, id: locationID}))
    }
}

function IsItemInArray(locationId) {
    const state = store.getState()
    const isInArray = state.locationStore.initialArray.some(location => location.id == locationId)
    return isInArray
}