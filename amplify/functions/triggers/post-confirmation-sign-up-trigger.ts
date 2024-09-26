import {PostConfirmationConfirmSignUpTriggerEvent} from "aws-lambda";

export const handler = async (event: PostConfirmationConfirmSignUpTriggerEvent) => {
    console.log("post confirmation event received : ", event);
    return event;
};