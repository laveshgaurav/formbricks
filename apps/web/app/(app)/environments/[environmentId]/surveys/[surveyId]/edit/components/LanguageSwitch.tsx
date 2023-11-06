import { Button } from "@formbricks/ui/Button";
import { LanguageIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Switch } from "@formbricks/ui/Switch";
export default function LanguageSwitch({ languages, setI18n }) {
  const [translationsEnabled, setTranslationsEnabled] = useState(false);
  const [showLanguageToggle, setshowLanguageToggle] = useState(false);
  const [selectedLanguages, setSelectedLanguages] = useState(languages);

  const toggleLanguage = (language) => {
    if (selectedLanguages.includes(language)) {
      setSelectedLanguages(selectedLanguages.filter((lang) => lang !== language));
    } else {
      setSelectedLanguages([...selectedLanguages, language]);
    }
  };

  return (
    <div className="z-10 mt-16 flex h-14 w-full items-end justify-end px-6">
      {translationsEnabled ? (
        <div>
          <div
            className="flex cursor-pointer items-center space-x-2 rounded-lg border bg-white p-2 px-4"
            onClick={() => {
              setshowLanguageToggle(!showLanguageToggle);
            }}>
            <span>Select Language</span>
            <span>
              <ChevronDownIcon className="h-4 w-4" />
            </span>
          </div>
          {showLanguageToggle && (
            <div className="absolute z-[15] mt-2 space-y-4 rounded-md border bg-white p-4">
              {languages?.map((language) => {
                return (
                  <div className="flex items-center">
                    <Switch
                      id={`switch-${language}`}
                      value={language}
                      className="mr-4"
                      checked={selectedLanguages.includes(language)}
                      onClick={() => toggleLanguage(language)}
                    />
                    {language}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ) : (
        <Button
          variant="secondary"
          onClick={() => {
            setTranslationsEnabled(!translationsEnabled);
            setI18n(true);
          }}>
          Add Translation
          <LanguageIcon className="ml-1 h-4 w-4" />
        </Button>
      )}
    </div>
  );
}