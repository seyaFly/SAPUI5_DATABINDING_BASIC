This data-binding demos for developer to under stand the data-bings in the ui5 project development

## Table Of Content


<!-- MarkdownTOC -->
- [Table Of Content](#table-of-content)
- [Data binding](#data-binding)
  - [1. data model binding with JSON instance](#1-data-model-binding-with-json-instance)
  - [2. data model binding with JSON File](#2-data-model-binding-with-json-file)
  - [3. data model binding with Component Configuration](#3-data-model-binding-with-component-configuration)
  - [4. data model binding regarding the odata service](#4-data-model-binding-regarding-the-odata-service)
- [reference](#reference)
<!-- MarkdownTOC -->

## Data binding 

After we go through the walkthrough demos , then we populate  one idea how we could binding the datamodels 

here I give the four examples how we could binding the data models durning our development. 


More databinidng delteails , kinldy refer to： [UI5-data-binding](https://ui5.sap.com/#/topic/e5310932a71f42daa41f3a6143efca9c)

![data-binding](/img/databinding.png)

### 1. data model binding with JSON instance
   
   we can directly use json instance in the view 

   Example code:

   ``` JavaScript

    var oProduct = this._productInstance();
    var oModel = new JSONModel(oProduct);
    this.getView().setModel(oModel, "product");

   ```

###  2. data model binding with JSON File

   if we stored a JSON file in the project , we could direct assign the path and set to mode 

   example code: 

   ``` JavaScript

      var oPath = sap.ui.require.toUrl("onem/seya/databinding/model/products.json");
      var oModel = new JSONModel(oPath);
      this.getView().setModel(oModel, "product")

   ```

###  3. data model binding with Component Configuration

  In the component level , we could also add the model directly  

  exmpale code in the manifest.json

  ```Json

  "sap.ui5": {
        ...  
    "models": {
         ...
      "productPreload": {
                "type": "sap.ui.model.json.JSONModel",
                "uri": "model/products.json",
                "preload": true
            },
    ...

  ```

### 4. data model binding regarding the odata service

here is the steps which we could setup the odata models:

**step1** :  Install the dependency  [ux-ui5-tools](https://github.com/theplenkov-npm/fiori-tools#fiori-tools-proxy-cdn-bootstrap-sapui5-from-cdn)  , ：  ``` npm install @sap/ux-ui5-tooling --save-dev ```

**step2** : config the fiori-ui-proxy in ui5.yaml

example code : 

```Yaml
server:
  customMiddleware:
    - name: fiori-tools-proxy
      afterMiddleware: compression
      configuration:
        backend:
          - path: /V2/Northwind
            url: https://services.odata.org
```

**step3** : Define the data source :

  ```Json

  "sap.app": {
     ...
     "dataSources": {
            "northwind": {
                "uri": "/V2/Northwind/Northwind.svc",
                "type": "OData",
                "settings": {
                    "odataVersion": "2.0"
                }
            }
        }
    ...

  ```

**step4**: Define the Model in the manefest.json


  ```Json

  "sap.ui5": {
        ...  
    "models": {
         ...
        "productOdata": {
            "dataSource": "northwind",
            "preload": true
        }
    ...

  ```

## reference 
ui5-tools  :  [ux-ui5-tooling](https://www.npmjs.com/package/@sap/ux-ui5-tooling) 

easy-ui5 :  [UI5-tooling](https://sap.github.io/ui5-tooling/)

generator-ui5 : [ui5-project-generator](https://github.com/SAP/generator-easy-ui5)

proxy : [custom-server-middleware-proxy-extension](http://www.sapspot.com/ui5-tooling-custom-server-middleware-proxy-extension/)