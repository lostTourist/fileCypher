let st = {
    selectedAddress: undefined,
}

export function GetGlobalState() {
    return st;
}

export function UpdateSelectedAddressInState(selectedAddress) {
    st.selectedAddress = selectedAddress;
    return st;
}