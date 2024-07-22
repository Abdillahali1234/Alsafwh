// import { Box, Text } from '@mantine/core';
// import React, { useState, useEffect } from 'react';

// type CountdownTimerProps = {
//   initialSeconds: number;
// };

// const CountdownTimer: React.FC<CountdownTimerProps> = ({ initialSeconds }) => {
//   const [seconds, setSeconds] = useState<number>(initialSeconds);

//   useEffect(() => {
//     const countdown = setInterval(() => {
//       if (seconds > 0) {
//         setSeconds((prevSeconds) => prevSeconds - 1);
//       }
//     }, 1000);

//     // Clean up interval on component unmount
//     return () => clearInterval(countdown);
//   }, [seconds]);

//   // Formatting function to display time in HH:MM:SS format
//   const formatTime = (timeInSeconds: number): string => {
//     const hours = Math.floor(timeInSeconds / 3600);
//     const minutes = Math.floor((timeInSeconds % 3600) / 60);
//     const seconds = timeInSeconds % 60;

//     return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
//   };

//   return (
//     <Box>
//       <Text c={"rgba(34, 166, 241, 1)"} fw={700} fz={18}>
//         الوقت المتبقى: {formatTime(seconds)}  دقيقة 
//         </Text>
//       {/* <Text c={"rgba(34, 166, 241, 1)"} fw={700} fz={18} >{formatTime(seconds)}</Text> */}
//     </Box>
//   );
// };

// export default CountdownTimer;


import { Box, Text } from '@mantine/core';
import React, { useState, useEffect } from 'react';

const formatTime = (timeInSeconds: number): string => {
   const hours = Math.floor(timeInSeconds / 3600);
   const minutes = Math.floor((timeInSeconds%3600) / 60);
   const seconds = timeInSeconds % 60;
   
   
   if(!hours)
    {
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} دقيقة`
    }else{
      
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ساعة `;
    }
  };
  
  type CountdownTimerProps = {
    initialMinutes: number;
  };
  
  const CountdownTimer: React.FC<CountdownTimerProps> = ({ initialMinutes }) => {
    const [totalSeconds, setTotalSeconds] = useState<number>(initialMinutes * 60);
    
    
    // Formatting function to display time in MM:SS format
    useEffect(() => {
      const countdown = setInterval(() => {
        if (totalSeconds > 0) {
          setTotalSeconds((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
    
      // Clean up interval on component unmount
      return () => clearInterval(countdown);
    }, [totalSeconds]);
    
    return (
      <Box>
       <Text c={"rgba(34, 166, 241, 1)"} fw={700} fz={18}>
         الوقت المتبقى: {formatTime(totalSeconds)}   
         </Text>
       {/* <Text c={"rgba(34, 166, 241, 1)"} fw={700} fz={18} >{formatTime(seconds)}</Text> */}
     </Box>
  );
};

export default CountdownTimer;
