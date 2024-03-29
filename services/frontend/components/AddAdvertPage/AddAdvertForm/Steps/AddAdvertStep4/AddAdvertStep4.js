import Link from "next/link";
import { useDispatch } from "react-redux";
import { setAddAdvertFormStep } from "../../../../../store/slices/AddAdvertSlice";
import Text from "../../../../Elementes/Text/Text";
import ServiceSets from "../../Fields/ServiceSets/ServiceSets";
import ServiceSetsGroupContainer from "../../Fields/ServiceSetsGroup/ServiceSetsGroupContainer";
import SubmitButtonContainer from "../../Fields/SubmitButton/SubmitButtonContainer";

const AddAdvertStep4 = () => {
  const dispatch = useDispatch();

  const switchToBack = () => dispatch(setAddAdvertFormStep(3));
  return (
    <>
      <div className="advert-nav">
        <div className="advert-nav__heading">
          <a onClick={switchToBack} className="advert-nav__back">
            <svg
              viewBox="0 0 25 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.916664 5.32245L4.94792 1.24953C5.04475 1.1519 5.15996 1.0744 5.2869 1.02152C5.41384 0.968633 5.54999 0.941406 5.6875 0.941406C5.82501 0.941406 5.96116 0.968633 6.0881 1.02152C6.21504 1.0744 6.33025 1.1519 6.42708 1.24953V1.24953C6.62109 1.4447 6.72999 1.70871 6.72999 1.9839C6.72999 2.2591 6.62109 2.52311 6.42708 2.71828L2.71875 6.45786L23.9583 6.45786C24.2346 6.45786 24.4996 6.56761 24.6949 6.76296C24.8903 6.95831 25 7.22326 25 7.49953V7.49953C25 7.7758 24.8903 8.04075 24.6949 8.2361C24.4996 8.43145 24.2346 8.5412 23.9583 8.5412L2.65625 8.5412L6.42708 12.3016C6.52472 12.3985 6.60221 12.5137 6.65509 12.6406C6.70798 12.7675 6.7352 12.9037 6.7352 13.0412C6.7352 13.1787 6.70798 13.3149 6.65509 13.4418C6.60221 13.5687 6.52472 13.6839 6.42708 13.7808C6.33025 13.8784 6.21504 13.9559 6.0881 14.0088C5.96116 14.0617 5.82501 14.0889 5.6875 14.0889C5.54999 14.0889 5.41384 14.0617 5.2869 14.0088C5.15996 13.9559 5.04475 13.8784 4.94792 13.7808L0.916664 9.73911C0.331454 9.15317 0.00274785 8.35891 0.00274785 7.53078C0.00274785 6.70265 0.331454 5.90839 0.916664 5.32245V5.32245Z"
                fill="#414042"
              />
            </svg>
          </a>

          <h4 className="title title--mobile-add">
            <Text content="Add advert" />
          </h4>
        </div>

        <Link href="/" className="advert-nav__delete">
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21.95 4.16667H18.695C18.4513 2.99105 17.8065 1.93474 16.8693 1.17575C15.9321 0.41676 14.7598 0.00151513 13.55 0L11.45 0C10.2402 0.00151513 9.06788 0.41676 8.13069 1.17575C7.19349 1.93474 6.5487 2.99105 6.305 4.16667H3.05C2.77152 4.16667 2.50445 4.27641 2.30754 4.47176C2.11062 4.66711 2 4.93207 2 5.20833C2 5.4846 2.11062 5.74955 2.30754 5.9449C2.50445 6.14025 2.77152 6.25 3.05 6.25H4.1V19.7917C4.10167 21.1725 4.65533 22.4963 5.63953 23.4727C6.62374 24.4491 7.95813 24.9983 9.35 25H15.65C17.0419 24.9983 18.3763 24.4491 19.3605 23.4727C20.3447 22.4963 20.8983 21.1725 20.9 19.7917V6.25H21.95C22.2285 6.25 22.4955 6.14025 22.6925 5.9449C22.8894 5.74955 23 5.4846 23 5.20833C23 4.93207 22.8894 4.66711 22.6925 4.47176C22.4955 4.27641 22.2285 4.16667 21.95 4.16667ZM11.45 2.08333H13.55C14.2013 2.08412 14.8364 2.28477 15.3682 2.65775C15.9 3.03074 16.3025 3.5578 16.5204 4.16667H8.47955C8.69751 3.5578 9.1 3.03074 9.63181 2.65775C10.1636 2.28477 10.7987 2.08412 11.45 2.08333ZM18.8 19.7917C18.8 20.6205 18.4681 21.4153 17.8774 22.0014C17.2866 22.5874 16.4854 22.9167 15.65 22.9167H9.35C8.51457 22.9167 7.71335 22.5874 7.12261 22.0014C6.53187 21.4153 6.2 20.6205 6.2 19.7917V6.25H18.8V19.7917Z"
              fill="#414042"
            />
            <path
              d="M10 18C10.2652 18 10.5196 17.8946 10.7071 17.7071C10.8946 17.5196 11 17.2652 11 17V11C11 10.7348 10.8946 10.4804 10.7071 10.2929C10.5196 10.1054 10.2652 10 10 10C9.73478 10 9.48043 10.1054 9.29289 10.2929C9.10536 10.4804 9 10.7348 9 11V17C9 17.2652 9.10536 17.5196 9.29289 17.7071C9.48043 17.8946 9.73478 18 10 18Z"
              fill="#414042"
            />
            <path
              d="M15 18C15.2652 18 15.5196 17.8946 15.7071 17.7071C15.8946 17.5196 16 17.2652 16 17V11C16 10.7348 15.8946 10.4804 15.7071 10.2929C15.5196 10.1054 15.2652 10 15 10C14.7348 10 14.4804 10.1054 14.2929 10.2929C14.1054 10.4804 14 10.7348 14 11V17C14 17.2652 14.1054 17.5196 14.2929 17.7071C14.4804 17.8946 14.7348 18 15 18Z"
              fill="#414042"
            />
          </svg>
        </Link>
      </div>

      <div className="service-mob">
        <article className="service-mob__article">
          <img
            src="/img/add_advert/promote.png"
            alt=""
            className="service-mob__img"
          />
          <div className="service-mob__desc">
            <h4 className="title promote-title">
              <Text content="Promote your products" />
            </h4>
            <p className="service-mob__text">
              <Text content={"Sell much faster and more profitably!"} />
            </p>
          </div>
        </article>

        <div className="advert-form__field">
          <label className="advert-form__label">
            <Text content="Service sets" />
          </label>

          <ServiceSets requiredFields={[]} />
        </div>
        {/* 
                <div className="total">
                    <div className="advert-form__field">
                        <label className="advert-form__label">
                            <Text content="Service sets" />
                        </label>

                        <ServiceSetsGroupContainer requiredFields={[]} />
                    </div>
                </div> */}
      </div>

      <div className="total">
        <SubmitButtonContainer requiredFields={[]} />
      </div>

      <p className="step-text">
        <Text content="step" /> 3 <Text content="of" /> 3
      </p>
    </>
  );
};

export default AddAdvertStep4;
