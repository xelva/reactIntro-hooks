import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ text, language }) => {
    const [debounce, setDebounce] = useState('')
    const [translation, setTranslation] = useState('')

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebounce(text)
        }, 1000);

        return () => {
            clearTimeout(timerId)
        };

    }, [text])


    useEffect(() => {
        const translationResult = async () => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: debounce,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            })
            setTranslation(data.data.translations[0].translatedText);
        }
        translationResult();
    }, [debounce, language])

  

    return (
        <div>
            {translation}
        </div>     
    )

}

export default Convert;