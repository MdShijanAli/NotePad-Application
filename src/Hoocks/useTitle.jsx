import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - NotePad Application`;
    }, [title])
};

export default useTitle;