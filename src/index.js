import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router';
import CardApp from './CardApp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { authLogic } from './service/authLogic';


// const authLogic = new AuthLogic(firebaseApp)

// const FileInput = props => {
//   <ImageFileInput {...props} imageUploader={ImageUploader} />
// }

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(
  <>
    <BrowserRouter>
      <CardApp FileInput={null} authLogic={authLogic} />
    </BrowserRouter>
  </>
);