
# Blog-App

This Project For Blog Application Where You can create  blogs and Follow other authors for their upcoming blogs...


## Acknowledgements

 - [Inspire By](https://medium.com/)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [Design](https://in.pinterest.com/)


## API Reference

#### Get all items

```http
  GET /api/blogs
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### Create User

```http
  Post /create
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| Title | `string` | **Required**. Your API key |
| blog | `string` | **Required**. Your API key |

#### Save Blog

```http
  Post /saveblog
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| id | `string` | **Required**. Blog_Id  |






![Logo](https://www.imghippo.com/i/uWIn1263Qk.png)
## Color Reference

| Color             | RGB                                                               |
| ----------------- | ------------------------------------------------------------------ |
| --primary-color | #242424 |
| --secondary-color | #7b7181|
| --btn-font |#fff |
| --background |#fff |
| --border |rgb(238, 230, 230) |


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`SECRET_KEY`

`API_KEY`

`API_SECRET`

`CLOUD_NAME`

`PORT`
## Documentation

[Documentation](https://linktodocumentation)


## 🛠 Skills
Javascript, HTML, CSS, React, MongoDB, Express, Node JS,


## Run Locally

Clone the project

```bash
  git clone https://github.com/Bhavik0927/Blog-App.git
```

Go to the project directory

```bash
  cd Personal
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```
Start the frontend

```bash
  npm run dev
```

## Roadmap

- Additional browser support

- Add more integrations


## Tech Stack

**Client:** React, Redux, React-Router-DOM

**Server:** Node, Express 

**Database:** MongoDB Atlase

Also used Cloudinary


## Usage/Examples

```javascript
import Component from 'my-project'

function App() {
  return <Component />
}
```

