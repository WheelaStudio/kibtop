import { useRouter } from "next/router";
import { BASE_URL } from "../../services/Instance";

const OpenGraph = ({title="Kibtop", img="/img/kibtop.png", type="website"}) => {
    // const {asPath} = useRouter()
    // const url = `${BASE_URL}${asPath}`
    
    return (
        <>
            <meta property="og:title" content={title} />
<meta property="og:description" content={title} />
            <meta property="og:type" content={type} />
            <meta property="og:url" content="/" />
            <meta property="og:image" content={img} />
        </>
    );
}

export default OpenGraph;