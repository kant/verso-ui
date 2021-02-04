"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavComponent = void 0;
const react_1 = __importDefault(require("react"));
const index_1 = require("./index");
exports.default = {
    title: 'Components/Molecules/Nav',
    component: index_1.Nav,
    parameters: {
        docs: {
            description: {
                component: 'The `<Nav>` component represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents. Common examples of navigation sections are menus, tables of contents, and indexes.'
            }
        }
    }
};
const NavTemplate = (args) => react_1.default.createElement(index_1.Nav, Object.assign({}, args));
exports.NavComponent = NavTemplate.bind({});
exports.NavComponent.args = {
    pages: [
        {
            pageName: 'Prints',
            pathName: '/prints'
        },
        {
            pageName: 'About',
            pathName: '/about'
        },
        {
            pageName: 'Contact',
            pathName: '/contact'
        }
    ]
};
