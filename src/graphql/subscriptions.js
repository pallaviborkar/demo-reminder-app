/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateReminder = /* GraphQL */ `
  subscription OnCreateReminder(
    $filter: ModelSubscriptionReminderFilterInput
    $userId: String
  ) {
    onCreateReminder(filter: $filter, userId: $userId) {
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
export const onUpdateReminder = /* GraphQL */ `
  subscription OnUpdateReminder(
    $filter: ModelSubscriptionReminderFilterInput
    $userId: String
  ) {
    onUpdateReminder(filter: $filter, userId: $userId) {
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
export const onDeleteReminder = /* GraphQL */ `
  subscription OnDeleteReminder(
    $filter: ModelSubscriptionReminderFilterInput
    $userId: String
  ) {
    onDeleteReminder(filter: $filter, userId: $userId) {
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
