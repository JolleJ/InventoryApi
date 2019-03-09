# InventoryApi

https://serverless.com/blog/serverless-express-rest-api/

https://5bpht0gsk7.execute-api.us-east-1.amazonaws.com/dev/status

BASE URL: https://5bpht0gsk7.execute-api.us-east-1.amazonaws.com/dev/¨

Api-key="jolleisthebest" 

API CALLS:

/availability

Response:
  -json data

/availaility/{id}

Response:
  -Specific json data

/increase, Requirement: json {id, amount}

Response:
  -200ok

/decrease, Requirement: json {id, amount}

Response:
  -200ok

/createProduct Requirement: json {price, amount}

Response:
  -201 Added


Inventory:
  - Product Id
  - Price
  - Availability

Functions:
  - Add product
    - Product id
    + Price
    + Availability

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


DB 