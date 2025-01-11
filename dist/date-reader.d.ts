import React from 'react';
import 'react-day-picker/dist/style.css';
declare type DateReaderProps = {
    date: Date;
    setDate: (date: Date) => void;
    disabled?: boolean;
    className?: string;
};
export declare function DateReader({ date: fecha, setDate: setFecha, disabled, className }: DateReaderProps): React.JSX.Element;
export {};
