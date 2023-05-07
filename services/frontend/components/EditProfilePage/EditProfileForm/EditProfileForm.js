import { FormProvider, useForm } from "react-hook-form";
import AddPhoneField from "../../AddAdvertPage/AddPhone/AddPhoneForm/AddPhoneField/AddPhoneField";
import Text from "../../Elementes/Text/Text";
import CityField from "./Fields/CityField";
import EmailField from "./Fields/EmailField";
import FileField from "./Fields/FileField";
import NameField from "./Fields/NameField";
import PhoneField from "./Fields/PhoneField";
import ResendEmailButtonContainer from "./ResendEmailButton/ResendEmailButtonContainer";

const EditProfileForm = ({onEditProfileSubmit, email, name, city, avatar, phone, isLoading, isSuccess}) => {
    
    const EditProfileForm = useForm({mode: 'onChange', defaultValues: {
        name: name, city, email
    }})
    const {handleSubmit, watch, formState: {isValid, errors}} = EditProfileForm

    const {phoneCode, phoneNumber} = watch()
    return (
        <>
            <form className="edit-profile" onSubmit={handleSubmit(onEditProfileSubmit)}>
                <FormProvider {...EditProfileForm}>
                    <div className="edit-profile__field edit-profile__field--file">
                        <label className="edit-profile__label">
                            <Text content="Profile Photo" />
                        </label>

                        <FileField file={avatar} />
                    </div>

                    <div className="edit-profile__field">
                        <label className="edit-profile__label">
                            <Text content="Your name" />
                        </label>

                        <NameField />
                    </div>

                    <div className="edit-profile__field">
                        <label className="edit-profile__label">
                            <Text content="Location" />
                        </label>

                        <CityField />
                    </div>

                    <div className="edit-profile__field">
                        <label className="edit-profile__label">
                            <Text content="Your email" />
                        </label>

                        <EmailField />
                    </div>
                    
                    <div className="edit-profile__field">
                        <label className="edit-profile__label">
                            <Text content="Your phone" />
                        </label>

                        <PhoneField defaultValue={phone} />
                    </div>
                </FormProvider>

                {
                    isSuccess ? (
                        <div className="edit-form-ask">
                            <p className="ask-text"><Text content="Please confirm the changes by following the link sent to your email" /></p>
                            <ResendEmailButtonContainer />
                        </div>

                    ) : (
                        <button disabled={!isValid || isLoading || !phoneCode || !phoneNumber || phoneNumber.includes('_')} className="reg-btn reg-btn--edit">
                            <Text content="Apply" />
                        </button>
                    )
                }
                
            </form>
        </>
    );
}

export default EditProfileForm;