import { useState, useRef, useEffect, SetStateAction } from "react"
import {
    useMapsLibrary
} from "@vis.gl/react-google-maps"

import { Input } from "../ui/input"

interface PlaceAutocompleteProps {
    onPlaceSelect: (place: google.maps.places.PlaceResult) => void
    onEventChange?: SetStateAction<string>
    className?: string
}

const PlaceAutocomplete = ({ onPlaceSelect, onEventChange, className }: PlaceAutocompleteProps) => { // eslint-disable-line
    const [placeAutocomplete, setPlaceAutocomplete] = useState<google.maps.places.Autocomplete | null>(null)
    const inputRef = useRef<HTMLInputElement>(null)
    const places = useMapsLibrary("places")

    useEffect(() => {
        if (!places || !inputRef.current) return

        const options = {
            fields: ['geometry', 'name', 'formatted_address', "address_components"]
        }

        setPlaceAutocomplete(new places.Autocomplete(inputRef.current, options))
    }, [places])

    useEffect(() => {
        if (!placeAutocomplete) return

        placeAutocomplete.addListener("place_changed", () => {
            onPlaceSelect(placeAutocomplete.getPlace())
        })
    }, [onPlaceSelect, placeAutocomplete])
    return (
        <div className={className ? className : ""}>
            <Input ref={inputRef} placeholder="Enter a location"></Input>
        </div>
    )
}

export default PlaceAutocomplete