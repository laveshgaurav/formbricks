import { Languages } from "lucide-react";
import { useRef, useState } from "react";

import useClickOutside from "@formbricks/lib/useClickOutside";
import { TSurvey } from "@formbricks/types/surveys";

import { getLanguageLabel } from "../../../ee/multiLanguage/lib/isoLanguages";
import { Button } from "../../Button";

interface LanguageDropdownProps {
  survey: TSurvey;
  setLanguage: (language: string) => void;
}

export const LanguageDropdown = ({ survey, setLanguage }: LanguageDropdownProps) => {
  const [showLanguageSelect, setShowLanguageSelect] = useState(false);
  const languageDropdownRef = useRef(null);

  useClickOutside(languageDropdownRef, () => setShowLanguageSelect(false));

  return (
    survey.languages.length > 1 && (
      <div className="relative">
        {showLanguageSelect && (
          <div
            className="absolute top-12 z-30 w-fit rounded-lg border bg-slate-900 p-1 text-sm text-white"
            ref={languageDropdownRef}>
            {survey.languages.map((surveyLanguage) => (
              <div
                key={surveyLanguage.language.code}
                className="rounded-md p-2 hover:cursor-pointer hover:bg-slate-700"
                onClick={() => {
                  setLanguage(surveyLanguage.language.code);
                  setShowLanguageSelect(false);
                }}>
                {getLanguageLabel(surveyLanguage.language.code)}
              </div>
            ))}
          </div>
        )}
        <Button
          variant="secondary"
          title="Select Language"
          aria-label="Select Language"
          onClick={() => setShowLanguageSelect(!showLanguageSelect)}>
          <Languages className="h-5 w-5" />
        </Button>
      </div>
    )
  );
};
