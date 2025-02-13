# Actions

Actions are reusable [code](/workflows/steps/code/) steps that integrate your apps, data and APIs. For example, you can send HTTP requests to an external service using the [HTTP action](/destinations/http/), or use actions to send data to Slack, [Amazon S3](/destinations/s3/), and more. You can use thousands of actions across 100+ apps today.

Typically, integrating with these services requires a lot of code to manage connection logic, error handling, etc. Actions handle that for you. You only need to specify the parameters required for the Action — for example, for the [HTTP action](/destinations/http/), what data you want to send and the URL you want to send it to.

**You can also create your own actions that can be shared across your own workflows, or published to all Pipedream users**.

[[toc]]

## Using Existing Actions

- Actions are executed in the order they appear in your workflow.

- You can reference the [`event`](/workflows/events/), [`steps`](/workflows/steps/#step-exports), and [`process.env`](/environment-variables/#referencing-environment-variables-in-code) variables when passing data to an action.

- Action return values and [exports](/workflows/steps/#step-exports) may be referenced in later steps via the `steps` object.

- You can add multiple Actions within a single workflow (for example to send data to multiple S3 buckets _and_ an HTTP endpoint). Actions can be added at any point in your workflow.

Let's use the [Send HTTP Request](/destinations/http/) action to send an HTTP request from a workflow. First, **add a new Action to your workflow by clicking on the + button between any two steps**.

Choose the **Send HTTP Request** action:

<div>
<img alt="Send HTTP request action" width="600" src="./images/send-http-request.png">
</div>

This action has one required parameter: the **URL** where you want to send the HTTP request.

This action defaults to sending an HTTP `POST` request. If you'd like to change the HTTP method, add an HTTP payload, query string parameters or headers, you can click the **add individual property** field above the form fields and select the appropriate parameter:

<div>
<img alt="Adding optional params" width="600" src="./images/http-example.png">
</div>

## Creating your own actions

You can now author and publish your own actions at [https://pipedream.com/actions](https://pipedream.com/actions), accessible from the **Actions** link in the header.

For example, let's say I wanted to publish my own **Send a Slack Message** action, using Slack's `@slack/web-api` npm package instead of the HTTP API.

I'd go to the **Action** header, click **New**, and start writing code:

<div>
<img alt="Send a Slack message" src="./images/send-slack-message.png">
</div>

Actions have a title, a default [step name](/workflows/steps/#step-names), a description, and code.

Actions are just code steps: you can write any Node.js code, [connect apps](https://docs.pipedream.com/connected-accounts/#connecting-accounts), [define params](https://docs.pipedream.com/workflows/steps/#passing-data-to-steps-step-parameters), and more. **Unlike normal code steps, actions can be used across workflows and shared with other users**. This reusability is powerful, and others benefit in huge ways from the actions you share.

### Save vs. Publish

**Saving** an action makes the action available within any workflow in your account. Saving _does not_ make the action available to anyone else.

When you press the **Publish** button, this makes the action available to everyone.

### How actions are associated with apps

If you've linked one or more apps (click the **+** sign to the left of the code), the action will be associated with that app, so when you search for the action when adding a new step, it'll show up under Github, Slack, etc.

Otherwise, if you haven't linked an app to the action, it'll show up under the **Non-app actions**:

### Versioning

Actions are versioned: each time you publish a change, it increments the minor version number (actions have semantic versions of the form `[major].[minor]`).

For example, publishing an action for the first time cuts a `0.1` version of that action. All users will have access to verison `0.1` of your action.

If you want to make a change, you can edit and save your action, and those changes will be available only to your account. Once you're ready to ship the new version, click **Publish** again. Now,

- Any workflows that are using version `0.1` of the action will continue using that version.
- Any time a user searches for your action in a _new_ step, they'll see the most recent version of the action (`0.2`).

You can change the version in any manner you'd like before publishing that new version. For example, you can increment the major version of the action if you're introducing a breaking change.

<Footer />
