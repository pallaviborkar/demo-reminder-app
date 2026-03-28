/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getReminder = /* GraphQL */ `
  query GetReminder($id: ID!) {
    getReminder(id: $id) {
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
export const listReminders = /* GraphQL */ `
  query ListReminders(
    $id: ID
    $filter: ModelReminderFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listReminders(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const remindersByUserIdAndRemindAt = /* GraphQL */ `
  query RemindersByUserIdAndRemindAt(
    $userId: String!
    $remindAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelReminderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    remindersByUserIdAndRemindAt(
      userId: $userId
      remindAt: $remindAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
