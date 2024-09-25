import { useTranslation } from 'react-i18next'
import { useState } from 'react'

export default function TransBtn() {
  const { t, i18n } = useTranslation()
  const [currentLanguage, setCurrentLanguage] = useState('en')

  return (
    <button
      className="btn btn-primary me-2"
      onClick={() => {
        setCurrentLanguage(currentLanguage === "en" ? "vi" : "en")
        i18n.changeLanguage(currentLanguage === "en" ? "vi" : "en")
      }}
    >
      Change language EN - VI
    </button>
  )
}
