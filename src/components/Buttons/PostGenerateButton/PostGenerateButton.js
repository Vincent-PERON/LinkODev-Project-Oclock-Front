import './PostGenerateButton.scss';
import PropTypes from 'prop-types';

function PostGenerateButton({ disabled = false }) {
  return (
    <div className="PostGenerateButton">
      <button type="submit" className="PostGenerateButton--button" disabled={disabled}>Génère ton post !</button>
    </div>
  );
}

PostGenerateButton.propTypes = {
  disabled: PropTypes.bool,
};

export default PostGenerateButton;
