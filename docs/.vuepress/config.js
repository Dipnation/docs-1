const path = require("path");
const webpack = require("webpack");

module.exports = {
  title: "Docs",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  description: "Pipedream Documentation - Integrate your apps, data and APIs",
  base: "/",
  themeConfig: {
    algolia: {
      apiKey: "1e23962724b59d018bdedc0f5a214ce5",
      indexName: "pipedream"
    },
    logo: "/pipedream.svg",
    nav: [
      {
        text: "Slack",
        link: "https://pipedream.com/community"
      },
      {
        text: "Support",
        link: "/support/"
      },
      {
        text: "pipedream.com",
        link: "https://pipedream.com/"
      }
    ],
    repo: "PipedreamHQ/docs",

    // Optional options for generating "Edit this page" link

    // if your docs are not at the root of the repo:
    docsDir: "docs",
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: "Help us improve this page! Submit an edit on Github",
    sidebar: [
      "/",
      "/support/",
      "/sign-up/",
      {
        title: "Getting Started",
        collapsable: false,
        children: ["/workflows/", "/your-first-workflow/"]
      },
      {
        title: "Workflow Steps",
        collapsable: false,
        children: [
          "/workflows/steps/",
          "/workflows/steps/triggers/",
          "/workflows/steps/code/",
          "/workflows/steps/actions/"
        ]
      },
      {
        title: "Workflow Events",
        collapsable: false,
        children: [
          "/workflows/events/",
          "/workflows/events/inspect/",
          "/workflows/events/replay/",
          "/workflows/events/test/"
        ]
      },
      {
        title: "Connecting to Apps",
        collapsable: false,
        children: ["/connected-accounts/", "/workflows/steps/code/auth/"]
      },
      {
        title: "Error Handling",
        collapsable: false,
        children: ["/workflows/error-handling/global-error-workflow/"]
      },
      {
        title: "Managing Workflows",
        collapsable: false,
        children: [
          "/workflows/fork/",
          "/workflows/managing/",
          "/workflows/settings/",
          "/public-workflows/",
          "/environment-variables/"
        ]
      },
      {
        title: "Destinations",
        collapsable: false,
        children: [
          "/destinations/",
          "/destinations/http/",
          "/destinations/s3/",
          "/destinations/email/",
          "/destinations/snowflake/",
          "/destinations/sql/",
          "/destinations/sse/"
        ]
      },
      {
        title: "Integrations",
        collapsable: false,
        children: ["/apps/discord/"]
      },
      "/pricing/",
      "/limits/",
      "/new-feature-or-bug/",
      "/security/"
    ],
    PIPEDREAM_BASE_URL: "https://pipedream.com",
    PAYLOAD_SIZE_LIMIT: "100kb",
    INSPECTOR_EVENT_LIMIT: "100",
    NODE_VERSION: "10"
  }
};
