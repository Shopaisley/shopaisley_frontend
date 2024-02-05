// LanguageSwitcher.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: any) => {
    i18n.changeLanguage(language);
  };

  const languageOptions = [
    { value: 'en', label: 'En' },
    { value: 'es', label: 'Es' },
    { value: 'fr', label: 'Fr' },
    
    // Add more languages as needed
  ];

  return (
    <div>
      <select onChange={(e) => changeLanguage(e.target.value)} value={i18n.language}>
        {languageOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
