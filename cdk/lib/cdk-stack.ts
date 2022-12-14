import * as cdk from "@aws-cdk/core";
import { CfnService } from "@aws-cdk/aws-apprunner";


export class CdkStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new CfnService(this, "CfnService", {
      serviceName: "my-apprunner-app",
      sourceConfiguration: {
        authenticationConfiguration: {
          connectionArn: "arn:aws:apprunner:us-east-1:219841394426:connection/apprunnerGithubConnector/b11d5deb63e043e69f724762beba2a35",
        },
        autoDeploymentsEnabled: true,
        codeRepository: {
          repositoryUrl: "https://github.com/amarkumarsbg/AWS-App-Runner",
          sourceCodeVersion: {
            type: "BRANCH",
            value: "main",
          },
          codeConfiguration: {
            configurationSource: "REPOSITORY",
          },
        },
      },
      healthCheckConfiguration: {
        path: "/health",
      },
    });
  }
}
