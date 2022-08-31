import {ButtonHTMLAttributes, DetailedHTMLProps, ReactNode} from "react";

export interface PProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
  size?:'s'|'m'|'l';
    children:ReactNode;
}