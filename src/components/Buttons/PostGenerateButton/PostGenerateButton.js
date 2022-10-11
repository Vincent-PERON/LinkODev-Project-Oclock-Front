import './PostGenerateButton.scss';
import PropTypes from 'prop-types';

function PostGenerateButton({ disabled = false }) {
  return (
    <div className="PostGenerateButton">
      <div className="PostGenerateButton--redline" />
        <button type="submit" className="PostGenerateButton--button" disabled={disabled}>Génère ton post !</button>
      <div className="PostGenerateButton--redline" />
    </div>
  );
}

PostGenerateButton.propTypes = {
  disabled: PropTypes.bool,
};

export default PostGenerateButton;
