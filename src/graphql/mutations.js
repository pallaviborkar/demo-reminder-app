/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createReminder = /* GraphQL */ `
  mutation CreateReminder(
    $input: CreateReminderInput!
    $condition: ModelReminderConditionInput
  ) {
    createReminder(input: $input, condition: $condition) {
      id
      userId
      title
      description
      remindAt
      stepFnExecutionArn
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateReminder = /* GraphQL */ `
  mutation UpdateReminder(
    $input: UpdateReminderInput!
    $condition: ModelReminderConditionInput
  ) {
    updateReminder(input: $input, condition: $condition) {
      id
      userId
      title
      description
      remindAt
      stepFnExecutionArn
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteReminder = /* GraphQL */ `
  mutation DeleteReminder(
    $input: DeleteReminderInput!
    $condition: ModelReminderConditionInput
  ) {
    deleteReminder(input: $input, condition: $condition) {
      id
      userId
      title
      description
      remindAt
      stepFnExecutionArn
      createdAt
      updatedAt
      __typename
    }
  }
`;
