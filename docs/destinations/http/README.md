# HTTP

HTTP Destinations allow you to send data to another HTTP endpoint URL outside of Pipedream. This can be an endpoint you own and operate, or a URL tied to a service you use (for example, a [Slack Incoming Webhook](https://api.slack.com/incoming-webhooks)).

[[toc]]

## Adding an HTTP Destination

### Using the Send HTTP Request action

First, add a new Action to your workflow by clicking on the + button between any two steps.

Choose the **Send HTTP Request** action and add the **URL** and **Payload**.

This action defaults to sending an HTTP `POST` request with the desired payload to the specified URL. If you'd like to change the HTTP method, add Basic auth, query string parameters or headers, you can click the sections below the Payload field.

### Using `$send.http()`

You can send data to an HTTP Destination in [Node.js code steps](/workflows/steps/code/), too, using the `$send.http()` function. **This allows you to send data to destinations programmatically, if you need more control than Actions afford**.

Let's use `$send.http()` to send an HTTP POST request like we did in the Action example above. [Add a new Action](/workflows/steps/actions/#adding-a-new-action), then search for "**Code**":

<div>
<img alt="Code action" width="300" src="./images/new-code-step.png">
</div>

[Create an endpoint URL on RequestBin](https://requestbin.com), adding the code below to your code step, with the URL you created:

```javascript
$send.http({
  method: "POST",
  url: "[YOUR URL HERE]",
  data: {
    name: "Luke Skywalker"
  }
});
```

`$send.http()` accepts an object with all of the following properties:

```javascript
$send.http({
  method, // Required, HTTP method, a string, e.g. POST, GET
  url, // Required, the URL to send the HTTP request to
  data, // HTTP payload
  headers, // An object containing custom headers, e.g. { "Content-Type": "application/json" }
  params, // An object containing query string parameters as key-value pairs
  auth // An object that contains a username and password property, for HTTP basic auth
});
```

Again, it's important to remember that **Destination delivery is asynchronous**. If you iterate over an array of values and send an HTTP request for each:

```javascript
const names = ["Luke", "Han", "Leia", "Obi Wan"];
names.forEach(name => {
  $send.http({
    method: "POST",
    url: "[YOUR URL HERE]",
    data: {
      name
    }
  });
});
```

you won't have to `await` the execution of the HTTP requests in your workflow. We'll collect every `$send.http()` call and defer those HTTP requests, sending them after your workflow finishes.

## HTTP Destination Delivery

HTTP Destination delivery is handled asynchronously, separate from the execution of a workflow. However, we deliver the specified payload to HTTP destinations for every event sent to your workflow.

Generally, this means it should only take a few seconds for us to send the event to the destination you specify. In some cases, delivery will take longer. You can always review how many destinations we've delivered a given event to by examining the [**Dest** column in the Inspector](/workflows/events/inspect/#dest-destinations).

## HTTP Request and Response

You can see both the data that was sent in the HTTP request, and the HTTP response that was issued, below the Code or Action cell in which the Destination was used. If the Action or Code step you're using issues multiple HTTP requests, we'll show the request and response data for each.

## Retries

Currently, Pipedream will not retry any failed request. If your HTTP destination endpoint is down, or returns an error response, we'll display that response in the observability associated with the Destination in the relevant Code or Action cell.

## IP ranges for HTTP requests

Pipedream utilizes Amazon Web Services (AWS) infrastructure for the HTTP Destination. HTTP requests sent using the HTTP Destination will come from the `us-east-1` region of AWS. Amazon publishes the [IPv4 and IPv6 ranges](https://docs.aws.amazon.com/general/latest/gr/aws-ip-ranges.html) for all of their services.

If you need to restrict your destination endpoint to a smaller range of IP addresses, please [reach out](/support/) to our team.

## Acceptable Use

Do not use Pipedream to send HTTP requests to a service you do not own or operate. We take abuse of the service seriously and will terminate workflows or accounts found to be in violation of our [Acceptable Use policy](https://pipedream.com/terms#b-acceptable-use). If you have any questions about this policy or anything else, please [reach out](/support/).

<Footer />
