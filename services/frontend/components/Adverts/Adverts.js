import Advert from "./Advert/Advert";

const Adverts = ({adverts}) => {
    let vipAdverts = [];
    let usefulAdverts = [];
    const sortedAdverts = [...adverts].sort((a, b) => b.lifts - a.lifts);
    let lastLiftIndex = 0;

    // Находим индекс последнего объявления с лифтом
    for (let i = sortedAdverts.length - 1; i >= 0; i--) {
        if (sortedAdverts[i].lifts > 0) {
            lastLiftIndex = i;
            break;
        }
    }

    // Вставляем объявления с лифтами перед первым VIP объявлением (если оно есть)
    usefulAdverts.forEach((advert, index) => {
        if (advert.lifts > 0) {
            const liftIndex = Math.min(index + lastLiftIndex + 1, sortedAdverts.length);
            sortedAdverts.splice(liftIndex, 0, advert);
            lastLiftIndex++;
        }
    });

    // Разделяем объявления на VIP и обычные
    sortedAdverts.forEach((advert) => {
        if (advert.vip > 0) {
            vipAdverts.push(advert);
        } else {
            usefulAdverts.push(advert);
        }
    });


    return (
        <>
            <div className="adverts-table">
                {vipAdverts.map((advert) => (
                    <Advert
                        key={`${advert.category}_${advert.advertId}`}
                        {...advert}
                        VIPadverts={true}
                    />
                ))}
                {usefulAdverts.map((advert) => (
                    <Advert
                        key={`${advert.category}_${advert.advertId}`}
                        {...advert}
                    />
                ))}
            </div>
        </>
    );
}

export default Adverts;