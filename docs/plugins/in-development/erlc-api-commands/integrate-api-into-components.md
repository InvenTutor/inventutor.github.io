# Integrate API Into Components
*Easily integrate the ER:LC API into your components and plugins.*

:::danger Warning
This is an [⭐ InvenTutor Pro](https://app.gitbook.com/s/6H1YA21Oj3zO6OvS8OBs/about-inventutor-pro) feature.
:::

To use the ER:LC API externally by utilizing the ER:LC API Commands plugin, use the **8BiToe's ER:LC Global Variables System** (8ERLCGVS).

:::warning Disclaimer
Using this system requires intermediate knowledge of string manipulation!
:::

***

## Perks of using 8ERLCGVS

* **Easier to understand** - Using this system should be easier than learning how to use APIs and formatting their results. Many endpoint results cannot be natively retrieved on Inventor, and this system returns data in a consistent easily-extractable format.
* **Quick Implementation** - When creating your own plugins/components that aren't ER:LC focused, you don't have to waste time learning how to use the API. You can quickly integrate ER:LC features into your plugins/components.
* **Respects rate-limits** - By using 8ERLCGVS, you don't have to worry about rate-limits. The plugin waits until the rate-limit expires, and then executes your actions.
* **Retrieving last data when rate-limited** - When attempting to load data while you are being rate-limited, you will be instead returned the last cached data. All data has an Unix timestamp.

TL:DR - You will save time and headaches :)

***

## Usage Examples

#### Automatic Game Messages
* Every 15 Minutes Trigger
* Send ER:LC API Request (/command, :h Hello!)

#### Custom Moderation Integration
* Slash Command Trigger
* Get Row (Custom database with Discord User ID and Roblox name)
* Send ER:LC API Request (/command, :ban RobloxName)
* Ban Server Member
* Text Reply

***

:::note
A "Check if ER:LC Server API Key is Valid" Custom Block will be made sometime later for integration convenience.
:::

:::warning Warning for Plugin Creators
Inventor Library moderators may deny your plugin if it entirely depends on this system. Please make your plugins work without this system, or make your own.
:::

***

## Custom Blocks

View all available Components on the [Components](/components/erlc-api-commands-plugin-examples.md) page.

***

## How to Send a Request

Use the "Send ER:LC API Request" Custom Block to add a Request to the Request Queue.

Use the `uuid tracking` Output Variable if you need to track your request.

*Players Example:* ![Players Example](/plugins/erlc-api-cmds/players.avif)

*Run a Command Example:* ![Run a Command Example](/plugins/erlc-api-cmds/cmd.avif)

***

## How to Read the Response

:::danger Warning
The plugin checks for Global Variables **every minute**! (Due to "Global Variable Created" not being a trigger.)

You need to make your systems in a way that check the result every minute instead of immediately expecting a response.

Bump [this suggestion](https://forum.inventor.gg/t/global-variable-created-trigger/4767?u=8bitoe) if you want the "Global Variable Created" trigger added.
:::

Use the "Receive ER:LC API Response" Custom Block to read the responses of a request.

![Receive ER:LC API Response](/plugins/erlc-api-cmds/receive.avif)

### Reply Examples:

#### Server Status

#### Players

#### Join Logs

#### Queue

#### Kill Logs

#### Command Logs

#### Moderator Call Logs

#### Bans

#### Vehicles

#### Run a Command


:::note
Reply examples will be added later.
:::

Returned data is separated by Newlines and `|||`. Use string blocks to retrieve these values.

Each separate string is JSON encoded. Use this example to parse the value correctly:

![Parse Example](/plugins/erlc-api-cmds/parse.avif)
