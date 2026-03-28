export type AmplifyDependentResourcesAttributes = {
  "api": {
    "demoreminderapp": {
      "GraphQLAPIEndpointOutput": "string",
      "GraphQLAPIIdOutput": "string"
    }
  },
  "auth": {
    "reminderappuserpool": {
      "AppClientID": "string",
      "AppClientIDWeb": "string",
      "UserPoolArn": "string",
      "UserPoolId": "string",
      "UserPoolName": "string"
    }
  },
  "custom": {
    "ReminderStateMachine": {
      "StateMachineArn": "string"
    }
  },
  "function": {
    "reminderStreamsTriggerLambdaFun2SendEvent2StepFuntion": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    },
    "reminderappuserpoolPostConfirmation": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    },
    "sendReminderEventfromStepFuntion": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    }
  }
}