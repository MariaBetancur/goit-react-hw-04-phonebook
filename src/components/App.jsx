import { useState } from 'react';

import Statistics from './Statistics/statistics';
import FeedbackOptions from './FeedbackOptions/feedbackOptions';
import Section from './Section/section';
import Notification from './Notification/notificaction';
import { Container } from './App.styled';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const state = { good, neutral, bad };

  const leaveFeedback = options => {
    console.log(options);
    if (options === 'good') {
      return setGood(state => state + 1);
    }

    if (options === 'neutral') {
      return setNeutral(state => state + 1);
    }

    if (options === 'bad') {
      return setBad(state => state + 1);
    }
  };

  const countTotalFeedback = () => {
    let total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const positiveFeedback =
      Math.round((good / countTotalFeedback()) * 100) + '%';
    return positiveFeedback;
  };

  return (
    <Container>
      <Section title={'Please leave feedback!'}>
        <FeedbackOptions options={Object.keys(state)} onClick={leaveFeedback} />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message={'No feedback given'} />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positiveFeedback={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </Container>
  );
}

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
