import { useRouter } from "next/router";
import SubIconSelect from "../Selectors/SubIconSelect";
import {
    short,
    tea,
    hammer,
    brush,
    stroller,
    pot,
    camera,
    headphones,
    grass,
    lamp,
    computer
} from "./icons.module.scss"

const IconsRouter = ({nextStep}) => {
    const {query: {category}} = useRouter()

    return (
        <>
            {
                category === 'services' ? <>
                    <SubIconSelect icons={[
                        {value: 'Cleaning', text: 'Cleaning', backgroundColor: '#FFDFDC', color: '#996560', img: 'clean', classStyle: ''},
                        {value: 'Business', text: 'Business', backgroundColor: '#FFFCBB', color: '#868451', img: 'bag', classStyle: ''},
                        {value: 'Domestic services', text: 'Domestic', backgroundColor: '#E4FFF9', color: '#59847A', img: 'hammer', classStyle: hammer},
                        {value: 'Beauty | Health', text: 'Beauty', backgroundColor: '#E5F0FF', color: '#51719C', img: 'brush', classStyle: brush},
                    ]} typeText={'Service type'} {...{nextStep}} />
                </> :
                category === 'children' ? <>
                    <SubIconSelect icons={[
                        {value: "Baby clothing", text: 'Clothing', backgroundColor: '#FFECFA', color: '#946F8A', img: 'shorts', classStyle: ''},
                        {value: "Baby shoes", text: 'Shoes', backgroundColor: '#EADDFF', color: '#7D6A9C', img: 'shoes', classStyle: ''},
                        {value: 'Baby stroller', text: 'Transport', backgroundColor: '#F1EBE5', color: '#8F8C88', img: 'stroller', classStyle: stroller},
                        {value: "Baby toys | Furniture", text: 'Furniture', backgroundColor: '#F0F6F4', color: '#7A9C91', img: 'pot', classStyle: pot},
                    ]} typeText={'Goods type'} {...{nextStep}} />
                </> :
                category === 'electronics' ? <>
                    <SubIconSelect icons={[
                        {value: 'Phones | Accessories', text: 'Phones', backgroundColor: '#DDE3EB', color: '#6A819F', img: 'phone', classStyle: ''},
                        {value: 'Computers | Games', text: 'Computers', backgroundColor: '#D7E0FD', color: '#5E6D9F', img: 'computer', classStyle: computer},
                        {value: 'Video | Audio | TV | Photo', text: 'TV / Photo', backgroundColor: '#F7F7F2', color: '#787878', img: 'camera', classStyle: camera},
                        {value: 'Other equipment', text: 'Other', backgroundColor: '#F6EAEB', color: '#BC8A8E', img: 'headphones', classStyle: headphones},
                    ]} typeText={'Goods type'} {...{nextStep}} />
                </> :
                category === 'house_garden' ? <>
                    <SubIconSelect icons={[
                        {value: 'Furniture', text: 'Furniture', backgroundColor: '#F1EBE5', color: '#83715F', img: 'armchair', classStyle: ''},
                        {value: 'Food | Drinks', text: 'Food / Drinks', backgroundColor: '#FFF6D7', color: '#877431', img: 'tea', classStyle: tea},
                        {value: 'Garden', text: 'Garden', backgroundColor: '#E8FFE3', color: '#758771', img: 'grass', classStyle: grass},
                        {value: 'Interior items', text: 'Interior', backgroundColor: '#DDE3EB', color: '#6A819F', img: 'lamp', classStyle: lamp},
                    ]} typeText={'Goods type'} {...{nextStep}} />
                </>  :
                category === 'fashion' ? <>
                    <SubIconSelect icons={[
                        {value: "Women's clothing", text: 'Clothing', backgroundColor: '#FAEBEA', color: '#A97976', img: 'dress', classStyle: ''},
                        {value: "Women's shoes", text: 'Shoes', backgroundColor: '#E8D5D5', color: '#897878', img: 'heels', classStyle: ''},
                        {value: "Men's clothing", text: "Men's clothing", backgroundColor: '#E5F0FF', color: '#727B86', img: 'short', classStyle: short},
                        {value: 'Accessories', text: 'Accessories', backgroundColor: '#DDE3EB', color: '#6A819F', img: 'glasses', classStyle: ''},
                    ]} typeText={'Goods type'} {...{nextStep}} />
                </> : ''
            }
        </>
    );
}

export default IconsRouter;