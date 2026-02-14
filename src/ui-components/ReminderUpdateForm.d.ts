/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Reminder } from "../models";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ReminderUpdateFormInputValues = {
    userid?: string;
    title?: string;
    description?: string;
    remindat?: string;
};
export declare type ReminderUpdateFormValidationValues = {
    userid?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    remindat?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ReminderUpdateFormOverridesProps = {
    ReminderUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userid?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    remindat?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ReminderUpdateFormProps = React.PropsWithChildren<{
    overrides?: ReminderUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    reminder?: Reminder;
    onSubmit?: (fields: ReminderUpdateFormInputValues) => ReminderUpdateFormInputValues;
    onSuccess?: (fields: ReminderUpdateFormInputValues) => void;
    onError?: (fields: ReminderUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ReminderUpdateFormInputValues) => ReminderUpdateFormInputValues;
    onValidate?: ReminderUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ReminderUpdateForm(props: ReminderUpdateFormProps): React.ReactElement;
