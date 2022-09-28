import { useState } from 'react';
import PropTypes from 'prop-types';

function ReadMoreReadLess({ limit, children, className }) {
  const text = children;
  const [isReadMoreShown, setReadMoreShown] = useState(false);
  const toggleBtn = () => {
    setReadMoreShown((prevState) => !prevState);
  };

  return (
    <div className="read-more-read-less">
      <section className={className}>
        {isReadMoreShown ? text : text.substr(0, limit)}
        <button className="btn" type="button" onClick={toggleBtn}> {isReadMoreShown ? 'Read Less' : '...Read More'}
        </button>
      </section>
    </div>
  );
}

ReadMoreReadLess.propTypes = {
  limit: PropTypes.number.isRequired,
  children: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default ReadMoreReadLess;
