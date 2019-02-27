# InventoryApi

https://serverless.com/blog/serverless-express-rest-api/

https://5bpht0gsk7.execute-api.us-east-1.amazonaws.com/dev/status

BASE URL https://5bpht0gsk7.execute-api.us-east-1.amazonaws.com/dev/
Api-key: jolleisthebest

GET /availability</br>
    Return json string with:</br>
    -id</br>
    -price</br>
    
    
POST /decrease, Expect Api-key header.</br>
Takes json string with:</br>
    -id</br>
    -amount</br>
    
POST /increase, Expect Api-key header.</br>
Takes json string with:</br>
    -id</br>
    -amount</br>

    


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
