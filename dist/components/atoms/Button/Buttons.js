"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TertiaryButton = exports.SecondaryButton = exports.PrimaryButton = void 0;
/** @jsxRuntime classic */
/** @jsx jsx */
const react_1 = require("@emotion/react");
const theme_1 = require("@aperture-ui/theme");
const Buttons_styles_1 = require("./Buttons.styles");
const PrimaryButton = (props) => {
    const { label, isDisabled } = props;
    const theme = theme_1.defaultTheme;
    return (react_1.jsx("button", { type: "button", css: Buttons_styles_1.primary(theme, isDisabled) }, label));
};
exports.PrimaryButton = PrimaryButton;
const SecondaryButton = (props) => {
    const { label } = props;
    return (react_1.jsx("button", { type: "button", css: Buttons_styles_1.secondary(theme_1.defaultTheme) }, label));
};
exports.SecondaryButton = SecondaryButton;
const TertiaryButton = (props) => {
    const { label } = props;
    return (react_1.jsx("button", { type: "button", css: Buttons_styles_1.tertiary(theme_1.defaultTheme) }, label));
};
exports.TertiaryButton = TertiaryButton;