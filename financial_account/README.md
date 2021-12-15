# Financial account microservice

Developed with:
- NodeJS
- MongoDB

The endpoints are protected, so a token (from user module) is necessary. 
Endpoints available:

### `POST - localhost:3001/account`

Protected endpoint used to create a bank account for a user.
Example request:

```json
{
  "nome_usuario": "julio_bitencourt",
  "nome_banco": "Nubank",
  "tipo_conta": "POUPANCA",
  "nome_titular": "Julio Henrique Bitencourt",
  "limite_cartao": 9368.5
}
```

Example response:

```json
{
    "output": "New account created for user julio_bitencourt",
    "payload": {
        "nome_usuario": "julio_bitencourt",
        "nome_banco": "Nubank",
        "tipo_conta": "POUPANCA",
        "nome_titular": "Julio Henrique Bitencourt",
        "limite_cartao": 9368.5,
        "_id": "61b900e125a423bed85bdf8a",
        "__v": 0
    }
}
```

### `PUT - localhost:3000/account/:id`

Endpoint to change the user's password.
Example request:

http://localhost:3001/account/61b900e125a423bed85bdf8a
```json
{
  "nome_usuario": "julio_bitencourt",
  "nome_banco": "Nubank",
  "tipo_conta": "SALARIO",
  "nome_titular": "Julio Henrique Bitencourt",
  "limite_cartao": 5640
}
```

Example response:

```json
{
    "output": "Account updated for user julio_bitencourt"
}
```

Created by Julio Henrique Bitencourt - RM 340931