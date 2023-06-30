import { useDispatch, useSelector } from "react-redux";
import { addUserPhoneThunk } from "../../../../store/slices/AddAdvertSlice";
import AddPhoneForm from "./AddPhoneForm";

const AddPhoneFormContainer = () => {
    const {isPhoneLoading, isPhoneSuccess} = useSelector(state => state.addAdvert)
    const dispatch = useDispatch()
    const onPhoneSubmit = data => {
        const {phoneNumber, phoneCode} = data
        const phone = `+${phoneCode}${phoneNumber}`
        dispatch(addUserPhoneThunk(phone))
    }
    return <AddPhoneForm {...{onPhoneSubmit, isLoading: isPhoneLoading}} />;
}

export default AddPhoneFormContainer;