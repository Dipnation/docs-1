# Edit and Manage

[[toc]]

## Editing Title and Description

When you create a workflow, you can edit the **Title** and **Description** near the top. We also present some helpful information — the workflow's author, the current version, and visibility state of the code and data, and when the workflow was last updated:

<div>
<img alt="Pipeline title and description" src="./images/pipeline.png">
</div>

## Workflows are public, your data is private

**All workflow steps are public. The data you send to a workflow, or logs you generate, are private**.

Please see our [docs on public workflows](/public-workflows/) for more information.

## Forking public workflows

We hope that the workflows you write are helpful for many other people. If you've written a workflow to send all Stripe transaction data to a Redshift data warehouse, someone else will probably want to use your workflow to solve that same use case.

If you've used [Github](https://github.com/), you can think of the workflow as a unique, public repository. It's code that anyone can view and fork for their own use.

On Pipedream, anyone can find a public workflow, [fork it](/workflows/fork/), and run it, modifying any of the steps within the workflow to make it work for their use case.

## Saving and Running your Workflow

When you edit the code in the workflow and save those changes, we deploy a new version:

<div>
<img alt="Workflow version" src="./images/pipeline-version.png">
</div>

All events sent to the trigger will run against the most recent version of the workflow.

Code and action steps of Pipedream workflows are executed in the order they appear. These steps can be interleaved — we impose no order besides the "trigger must come first" rule noted above.

## Sharing Workflows

Since [workflows are public](/public-workflows/), you can simply copy the pipedream.com URL to your pipeline and share it with anyone:

<div>
<img alt="Workflow URL" src="./images/workflow-url.png">
</div>

You can also add collaborators to your workflow under your workflow's [Settings](/workflows/settings/). Collaborators can edit the code and see its events and execution details.

## Deactivating Workflows

Workflows can be deactivated by switching the toggle in the top-left corner of any workflow. By defaut, this toggle is green, which means your workflow is active:

<div>
<img alt="Active workflow" width="200" src="./images/active.png">
</div>

Clicking the toggle deactivates your workflow:

<div>
<img alt="Inactive workflow" width="220" src="./images/inactive.png">
</div>

**Deactivating a workflow has a different impact for different [triggers](/workflows/steps/triggers/)**. For instance, deactivating a workflow with an [HTTP trigger](/workflows/steps/triggers/#http) disables the associated endpoint from receiving HTTP requests (those endpoints will respond with a 404 HTTP status code). Disabling a workflow with a Cron Scheduler trigger will disable the cron job.

By default, inactive workflows are displayed on the list of workflows on the homepage. Active workflows appear with a green vertical bar to their left, inactive workflows with a grey bar. You can remove inactive workflows from the homepage by toggling the **Show inactive** checkbox at the top of that page.

## Archiving Workflows

Since running workflows is [free](/pricing/), we encourage you to create as many as you want to test new ideas and understand how the product works. After you create a workflow, you may no longer need it. **We support archiving workflows to remove them from your list of workflows on your homepage**.

You can archive any workflow by clicking on the ellipsis in the top-right corner of your workflow and selecting **Archive this workflow**:

<div>
<img alt="Archive workflow" width="300" src="./images/archive-workflow.png">
</div>

Archived workflows do not appear in the list of workflows on your homepage by default.

## Keyboard Shortcuts

We provide a few keyboard shortcuts to simplify workflow development:

| Operation |     Shortcut(s)     |
| --------- | :-----------------: |
| Save      | ⌘ + S or `Ctrl` + S |
| Deploy    | ⌘ + D or `Ctrl` + D |

## More resources

Read more about each of the components of a Pipedream workflow below:

- [Sources](/workflows/steps/triggers/)
- [The Inspector](/workflows/events/inspect/)
- [Code](/workflows/steps/code/)
- [Destinations](/destinations/)
- [SQL](/destinations/sql/)

<Footer />
