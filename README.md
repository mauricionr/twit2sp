## Twit's about sharepoint saved in a sharepoint list

1. Register twitter app to get  consumer_key, consumer_secret, access_token, access_token_secret
2. Register the add-in in the site you want to read's appregnew.aspx page. http://tenant.sharepoint.com/_layouts/appregnew.aspx
3. Go to the appinv page in your admin site and grant the permissions http://tenant-admin.sharepoint.com/_layouts/appinv.aspx
 ```xml
 <AppPermissionRequests AllowAppOnlyPolicy="true">
    <AppPermissionRequest Scope="http://sharepoint/content/sitecollection" Right="FullControl" />
    <AppPermissionRequest Scope="http://sharepoint/social/tenant" Right="FullControl" />
    <AppPermissionRequest Scope="http://sharepoint/search" Right="QueryAsUserIgnoreAppPrincipal" />
  </AppPermissionRequests>
```

4. Go back to the site you want to read and register the below permissions in that site's http://tenant.sharepoint.com/_layouts/appinv.aspx: **appinv.aspx**
  ```xml
  <AppPermissionRequests AllowAppOnlyPolicy="true" >
    <AppPermissionRequest Scope="http://sharepoint/content/sitecollection" Right="FullControl" />
  </AppPermissionRequests>
  ```
5. fork this repo
6. clone them
7. Install dependencies with `npm install`
8. Copy and paste the `config.sample.js`  and change to `config.js` after that add the necessary info to work with bot services
9. Start dev with `npm run dev`


Obs: if you don't have one sharepoint dev tenant check out this [link](https://profile.microsoft.com/RegSysProfileCenter/wizardnp.aspx?wizid=14b845d0-938c-45af-b061-f798fbb4d170&lcid=1033)