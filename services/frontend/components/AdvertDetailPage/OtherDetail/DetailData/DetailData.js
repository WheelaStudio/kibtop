import { useRouter } from "next/router";
import { useCurrency } from "../../../../locales/hooks/useCurrency";
import Text from "../../../Elementes/Text/Text";

const DetailData = ({title, cost, currency, description, square, isMonth}) => {
    const cur = useCurrency()
    const {query: {category}} = useRouter()
    const isSquare = category === 'realty'

    

    const isMounthed = (category === 'work') || (category === 'realty' && isMonth)
    return (
        <>
            <div className="detail-name">
                <h3 className="title">{title} 
                    {isSquare && <span className="title square">{square} <Text content="m²" /></span>}
                </h3>

                <p className="detail-cost">
                    {cur.currency}{cur.countCurrencyPrice(cost, currency)}
                    {' '}
                    {
                        !!isMounthed && <span className="detail-tag-text"><Text content="per month" /></span>
                    }
                </p>
            </div>
            
            <article className="detail-article">
                <h3 className="detail-title">
                    <Text content="description" />
                </h3>

                <div className="detail-text">
                    {
                        description.split('\n').map((text, index) => <p key={index}>{text}</p>)
                    }
                </div>
            </article>
                
            
        </>
    );
}

export default DetailData;