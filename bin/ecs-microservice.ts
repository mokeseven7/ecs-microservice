#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { EcsCdkStack } from '../lib/ecs-cdk-stack';

const app = new cdk.App();


const env = {
  region: app.node.tryGetContext('region') || process.env.AWS_REGION || process.env.CDK_DEFAULT_REGION,
  account: app.node.tryGetContext('account') || process.env.AWS_ACCOUNT || process.env.CDK_DEFAULT_ACCOUNT,
  stackName: app.node.tryGetContext('stackName') || process.env.CDK_DEFAULT_STACKNAME || 'EcsMicroService'
};

new EcsCdkStack(app, env.stackName, { env });
