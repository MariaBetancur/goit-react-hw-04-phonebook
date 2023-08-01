import React from 'react';
import PropTypes from 'prop-types';
import { BottonList, FeedbackBotton } from './feedbackOptions.styled';

const FeedbackOptions = ({ options, onClick }) => (
  <div>
    <BottonList>
      {options.map((option, index) => {
        return (
          <li key={index}>
            <FeedbackBotton onClick={() => onClick(option)}>
              {option}
            </FeedbackBotton>
          </li>
        );
      })}
    </BottonList>
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
};
export default FeedbackOptions;
