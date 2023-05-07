const CurrencyText = ({text, currency}) => {
    return (
        <>
            <p className="button-text button-text--mobile"><span style={{fontWeight: 600}}>{currency}</span>{text}</p>
        </>
    );
}

export default CurrencyText;