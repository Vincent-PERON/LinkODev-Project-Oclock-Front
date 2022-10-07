import errorPicture from 'src/assets/Images/404.png'; 

import './Error.scss';

function Error() {
  return (
    <div className="Error">
        <img className="Error-picture" src={errorPicture} alt="404-error" />

    </div>


  );
}

export default Error;
