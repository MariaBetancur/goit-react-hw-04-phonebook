import React from 'react';
import PropTypes from 'prop-types';
import { StatisticsList } from './statistics.styled';

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <StatisticsList>
      <li>
        <p>Good:{good}</p>
      </li>
      <li>
        <p>Neutral:{neutral}</p>
      </li>

      <li>
        <p>Bad:{bad}</p>
      </li>

      <li>
        <p>Total:{total}</p>
      </li>

      <li>
        <p>Positive feedback:{positiveFeedback}</p>
      </li>
    </StatisticsList>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.string,
};

export default Statistics;
