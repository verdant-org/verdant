import React, { FormEvent, useCallback, useState } from 'react';
import { useMapsLibrary } from '@vis.gl/react-google-maps';
import { useAutocompleteSuggestions } from '@/hooks/use-autocomplete';
import { Input } from '@/components/ui/input';

interface Props {
  onPlaceSelect: (place: google.maps.places.Place | null) => void;
  className?: string;
}

export const PlaceAutocomplete = ({onPlaceSelect, className}: Props) => {
  const places = useMapsLibrary('places');

  const [inputValue, setInputValue] = useState<string>('');
  const {suggestions, resetSession} = useAutocompleteSuggestions(inputValue, {
    includedPrimaryTypes: ['administrative_area_level_2'],

  });

  const handleInput = useCallback((event: FormEvent<HTMLInputElement>) => {
    console.log((event.target as HTMLInputElement).value)
    setInputValue((event.target as HTMLInputElement).value);
  }, []);

  const handleSuggestionClick = useCallback(
    async (suggestion: google.maps.places.AutocompleteSuggestion) => {
      if (!places) return;
      if (!suggestion.placePrediction) return;

      const place = suggestion.placePrediction.toPlace();

      await place.fetchFields({
        fields: [
          'viewport',
          'location',
          'svgIconMaskURI',
          'iconBackgroundColor',
        ]
      });

      setInputValue(place.formattedAddress as string); ;

      // calling fetchFields invalidates the session-token, so we now have to call
      // resetSession() so a new one gets created for further search
      resetSession();

      onPlaceSelect(place);
    },
    [places, onPlaceSelect]
  );

  return (
    <div className="w-full">
      <Input
        value={inputValue}
        onInput={event => handleInput(event)}
        placeholder="Enter a County"
        className={`w-full ${className ? className : ""} `}
      />

      {suggestions.length > 0 && (
        <ul className="bg-background p-2 rounded-lg mt-8">
          {suggestions.map((suggestion, index) => {
            return (
              <li
                key={index}
                className="border-b border-b-primary pb-2 cursor-pointer"
                onClick={() => handleSuggestionClick(suggestion)}>
                {suggestion.placePrediction?.text.text}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};