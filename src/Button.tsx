import React from "react";

export interface ButtonProps {
  accessibilityLabel?: string;
  ariaControls?: string;
  ariaExpanded?: boolean;
  ariaPressed?: boolean;
  className?: string;
  disabled?: boolean;
  id?: string;
  loading?: boolean;
  onBlur?(): void;
  onClick?(): void;
  onFocus?(): void;
  onKeyDown?(event: React.KeyboardEvent<HTMLButtonElement>): void;
  onKeyPress?(event: React.KeyboardEvent<HTMLButtonElement>): void;
  onKeyUp?(event: React.KeyboardEvent<HTMLButtonElement>): void;
  type?: "button" | "submit" | "reset";
}

export const Button: React.FC<ButtonProps> = props => {
  const isDisabled = props.disabled || props.loading;

  return (
    <button
      id={props.id}
      className={props.className}
      disabled={isDisabled}
      onBlur={props.onBlur}
      onClick={props.onClick}
      onFocus={props.onFocus}
      onKeyDown={props.onKeyDown}
      onKeyPress={props.onKeyPress}
      onKeyUp={props.onKeyUp}
      type={props.type}
      aria-label={props.accessibilityLabel}
      aria-controls={props.ariaControls}
      aria-expanded={props.ariaExpanded}
      aria-pressed={props.ariaPressed}
      role={props.loading ? "alert" : undefined}
      aria-busy={props.loading ? true : undefined}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  type: "button"
};
