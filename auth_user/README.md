# User microservice

Developed with:
- NodeJS
- MongoDB

Endpoints available:

### `POST - localhost:3000/user`

Endpoint used to register a new user. 
Example request:

```json
{
  "nomeusuario": "julio_bitencourt",
  "nomecompleto": "Julio Henrique Bitencourt",
  "email": "julio.henrique.b@gmail.com",
  "telefone": "4899999999",
  "senha": "Teste123"
}
```

Example response:

```json
{
    "output": "New user created",
    "payload": {
        "_id": "61b7ea46cd0e193ad26c1157",
        "nomeusuario": "julio_bitencourt",
        "nomecompleto": "Julio Henrique Bitencourt",
        "email": "julio.henrique.b@gmail.com",
        "telefone": "4899999999",
        "senha": "$2b$10$q.OK.CiLCkGQ8czktOZOZebYcU1Ug/Axo1dKIDbDFtfQ7P6lF/5ja",
        "datacadastro": "2021-12-14T00:50:14.293Z",
        "__v": 0
    }
}
```

### `PUT - localhost:3000/user/password`

Endpoint to change the user's password.
Example request:

```json
{
  "nomeusuario": "julio_bitencourt",
  "senha": "Teste1234"
}
```

Example response:

```json
{
    "output": "Password updated",
    "payload": {
        "_id": "61b7ea46cd0e193ad26c1157",
        "nomeusuario": "julio_bitencourt",
        "nomecompleto": "Julio Henrique Bitencourt",
        "email": "julio.henrique.b@gmail.com",
        "telefone": "4899999999",
        "senha": "Teste1234",
        "datacadastro": "2021-12-14T00:50:14.293Z",
        "__v": 0
    }
}
```

### `POST - localhost:3000/auth`

Endpoint to authenticate a given user.
Example request:

```json
{
  "nomeusuario": "julio_bitencourt",
  "senha": "Teste1234"
}
```

Example response:

```json
{
    "output": "Authenticated",
    "payload": {
        "_id": "61b7ea46cd0e193ad26c1157",
        "nomeusuario": "julio_bitencourt",
        "nomecompleto": "Julio Henrique Bitencourt",
        "email": "julio.henrique.b@gmail.com",
        "telefone": "4899999999",
        "senha": "$2b$10$uXW.An4y8.JbZR7Mk2FjNOCYkB6Tppm/PeY02lD35vSBbbsjCPatK",
        "datacadastro": "2021-12-14T00:50:14.293Z",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjdlYTQ2Y2QwZTE5M2FkMjZjMTE1NyIsInVzZXIiOiJqdWxpb19iaXRlbmNvdXJ0IiwiaWF0IjoxNjM5NTAxNDE4LCJleHAiOjE2Mzk5MzM0MTh9.fvwfGMiu427F0M9xQdZtu5YsIUaXK32FpyKSRvhCBhM"
}
```

Created by Julio Henrique Bitencourt - RM 340931