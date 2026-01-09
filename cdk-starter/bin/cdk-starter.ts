#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib/core';
import { CdkStarterStack } from '../lib/cdk-starter-stack';
import { PhotosStack } from '../lib/PhotosStack';

const app = new cdk.App();
new CdkStarterStack(app, 'CdkStarterStack');
new PhotosStack(app, 'PhotosStack');
