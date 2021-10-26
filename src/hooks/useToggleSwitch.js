import { useState } from "react";

const useToggleSwitch = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = () => {
        setValue(!value);
    };

    return {
        onChange: handleChange
    }
}

export { useToggleSwitch };