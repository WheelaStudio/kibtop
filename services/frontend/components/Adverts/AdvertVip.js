import Advert from "./Advert/Advert";

const AdvertsVip = ({ adverts }) => {
    if (!adverts || adverts.length === 0) {
        return null; // если нет объявлений, возвращаем null
    }

    const sortedAdverts = [...adverts].sort((a, b) => b.lifts - a.lifts);

    sortedAdverts.forEach((advert, index) => {
        if (advert.lifts > 0) {
            const liftIndex = Math.min(index + advert.lifts, sortedAdverts.length - 1);
            sortedAdverts.splice(liftIndex, 0, sortedAdverts.splice(index, 1)[0]);
        }
    });

    const vipAdverts = sortedAdverts.filter(advert => advert.vip > 0);

    if (!vipAdverts.length) {
        return null; // если нет VIP объявлений, возвращаем null
    }

    return (
        <div className="adverts-table">
            {vipAdverts.map(advert => (
                <Advert
                    key={`${advert.category}_${advert.advertId}`}
                    {...advert}
                    VIPadverts={"advert--table_vip"}
                />
            ))}
        </div>
    );
};

export default AdvertsVip;
