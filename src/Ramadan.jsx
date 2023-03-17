import React, { useState, useEffect } from 'react';
import Countdown from './Countdown';

const Ramadan = ({ name, day, month }) => {
  // useState Hooks
  const [state, setState] = useState({
    seconds: 0,
    hours: 0,
    minutes: 0,
    days: 0,
    isItRday: false,
  });

  if (name === undefined || day === undefined || month === undefined) {
    // This is if not enough params are provided
    name = 'Sanusi'; // Name of the Person
    month = 3; // Month of the Ramadan
    day = 23; // Day of the Ramadan
  }

  // get current time
  const currentTime = new Date();
  // get current year
  const currentYear = currentTime.getFullYear();

  // Getting the Ramadan in Data Object
  // WE subtract 1 from momnth ; Months start from 0 in Date Object
  // Ramadan Boolean
  const isItRday =
    currentTime.getDate() === day && currentTime.getMonth() === month - 1;

  useEffect(() => {
    setInterval(() => {
      const countdown = () => {
        // Getting the Current Date
        const dateAtm = new Date();

        // if the Ramadan has passed
        // then set the Ramadan countdown for next year
        let ramadanDay = new Date(currentYear, month - 1, day);
        if (dateAtm > ramadanDay) {
          ramadanDay = new Date(currentYear + 1, month - 1, day);
        } else if (dateAtm.getFullYear() === ramadanDay.getFullYear() + 1) {
          ramadanDay = new Date(currentYear, month - 1, day);
        }

        // Getitng Current Time
        const currentTime = dateAtm.getTime();
        // Getting Ramadans Time
        const ramadanTime = ramadanDay.getTime();

        // Time remaining for the Ramadan
        const timeRemaining = ramadanTime - currentTime;

        let seconds = Math.floor(timeRemaining / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);

        seconds %= 60;
        minutes %= 60;
        hours %= 24;

        // Setting States
        setState((prevState) => ({
          ...prevState,
          seconds,
          minutes,
          hours,
          days,
          isItRday,
        }));
        // console.log(`${days}:${hours}:${minutes}:${seconds} , ${isItRday}`);
      };
      if (!isItRday) {
        countdown();
      } else {
        setState((prevState) => ({
          ...prevState,
          isItRday: true,
        }));
      }
    }, 1000);
  }, [currentYear, day, isItRday, month]);

  let ramadan = new Date(currentYear, month - 1, day);
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  let monthRday = monthNames[ramadan.getMonth()];

  return (
    <div className='page'>
      <Countdown countdownData={state} name={name} />
      {!isItRday && (
        <>
          <div className='ramadanDate'>
            Ramadan Start On:<br/> Thursday {day} {monthRday}, {currentYear}
            <h2 className='wish'>01-RAMADAN-1444</h2>
          </div>
          <div>
            <h2 className='wish'>Wishing All Muslim Ummah Ramadan Mubarak</h2>
            <footer>&copy; 2023 Sanusi Abdulkadir<br/>Software Engineer (React developer)</footer>
          </div>
        </>
      )}
    </div>
  );
};

export default Ramadan;
