import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { useTranslation } from "react-i18next";
import { hide, show } from '../../redux/reducers/sentenceReducer';

const Test = () => {
    const dispatch=useDispatch()
    const sentence = useSelector((state: RootState) => state.sentence.value);
    const{t}=useTranslation();
  return (
    <div>
    
    <p>{sentence}</p>
    <button onClick={() => dispatch(show())}>{t("show")}</button>
    <button onClick={() => dispatch(hide())}>{t("hide")}</button>
   
  </div>
  )
}

export default Test