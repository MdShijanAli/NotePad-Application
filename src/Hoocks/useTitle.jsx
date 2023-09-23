// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - NotePad Application`;
    }, [title])
};

export default useTitle;