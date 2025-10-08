import { useState } from 'react';
import { Votes, VoteType } from './types/votes';
import CafeInfo from './components/CafeInfo/CafeInfo';
import VoteOptions from './components/VoteOptions/VoteOptions';
import VoteStats from './components/VoteStats/VoteStats';
import Notification from './components/Notification/Notification';

import css from './App.module.css';

const App = () => {
  // Крок 3: Ініціалізація стану
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // Крок 3: Функція для оновлення стану
  const handleVote = (type: VoteType) => {
    setVotes(prevVotes => ({
      ...prevVotes,
      [type]: prevVotes[type] + 1,
    }));
  };
  
  // Крок 3: Функція для скидання стану
  const resetVotes = () => {
    setVotes({ good: 0, neutral: 0, bad: 0 });
  };

  // Крок 6: Обчислення статистики
  const totalVotes = votes.good + votes.neutral + votes.bad;

  const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0;
  
  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions 
        onVote={handleVote} 
        onReset={resetVotes} 
        canReset={totalVotes > 0} // Крок 8: Умовний рендеринг Reset
      />
       {totalVotes > 0 ? (
        <VoteStats 
          votes={votes} 
          totalVotes={totalVotes} 
          positiveRate={positiveRate} 
        />
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default App;
