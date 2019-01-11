# InventoryApi

https://serverless.com/blog/serverless-express-rest-api/


Inventory:
  - Product Id
  - Price
  - Availability

Functions:
  - Get Availability
    - Product id 
    + Price
    + Availability

  - Increase Availability
    - Product Id
    - Amount to be increased
    + new amount

  - Decrease Availability
    - Product Id
    - Amount to be decreased
    + new amount

Security:
  - API key for increase and decrease availability
