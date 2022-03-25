import { useParams } from "react-router-dom"

export const SearchHistory = () => {

    const {SearchHistory} = useParams();
    console.log(SearchHistory);

    return(
        <div>
            This is the saved search path: {SearchHistory}
        </div>
    )
}