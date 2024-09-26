import {PostConfirmationConfirmSignUpTriggerEvent} from "aws-lambda";

export const handler = async (event: PostConfirmationConfirmSignUpTriggerEvent) => {
    console.log("event received : ", event);
    return "Hello from my first function!";
};