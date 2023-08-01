import PropTypes from 'prop-types';
import { Sections } from './section.styled';

const Section = ({ title, children }) => {
  return (
    <Sections>
      <h2>{title}</h2>
      {children}
    </Sections>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
