# Router

## File structure

- **router.config.js** used to set the router configuration for the application.
  - **key[requested]**: string. Unique ID for each router, can be the component name.
  - **path[requested]**: string. Define the url
  - **auth**: Array | string | Function: Define which role can access the route.
  - **loginRequired**: boolean | Function. Define whether the page needs Login to access.
  - **component**: string. If key is same as the name component then not required.
  - **childs**: Array. children components.
  - **title**: string. Define title in the header for the page.
  - **meta**: Any. any other info wanted to include in the router.
