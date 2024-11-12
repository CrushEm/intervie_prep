import React from "react";

export enum Variants {
    primary = "primary",
    secondary = "secondary",
    outline = "outline"
}

interface ButtonProps {
    label: string,
    variant: Variants,
    //onclick: (value:T) => React.ReactNode,
    onclick: (val: string) => void;
    value?: string ; // Value to be passed to the onClick handler
    disabled?: boolean,
}

function Button({ label, variant, value, onclick, disabled = false }: ButtonProps) {

    const style =
        variant === Variants.primary ? primaryStyles
        : variant === Variants.secondary ? secondaryStyles
        : outlineStyles;

    return (
        <input
            type="button"
            value={label}
            onClick={()=>onclick( "return value - " + value)}
            disabled={disabled}
            style={{
                ...style,
                cursor: disabled ? "not-allowed" : style.cursor,
                opacity: disabled ? 0.6 : 1,
            }}
        />
    );
}
export default Button;

const buttonStyles: React.CSSProperties = {
    color: "white",
    padding: "8px 16px",
    cursor: "pointer",
};

const primaryStyles: React.CSSProperties = {
    ...buttonStyles,
    border: "1px solid white",
    backgroundColor: "#007bff",
};

const secondaryStyles: React.CSSProperties = {
    ...buttonStyles,
    border: "1px solid #6c757d",
    backgroundColor: "#6c757d",
};

const outlineStyles: React.CSSProperties = {
    ...buttonStyles,
    border: "1px solid #007bff",
    backgroundColor: "transparent",
    color: "#007bff",
};
