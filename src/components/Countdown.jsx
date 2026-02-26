import { useCountdown } from '../hooks/useCountdown';
import { Card } from 'pixel-retroui';


export function Countdown() {
  const time = useCountdown('2026-03-18T00:00:00');

  const padNumber = (num) => String(num).padStart(2, '0');

  return (
    
      <div className="flex flex-wrap gap-2 md:gap-4 py-12 px-3 md:px-8 countdown-box w-fit h-fit relative">
        <Card 
        bg="#101136a8"
        textColor="white"
        borderColor="white"
        shadowColor="black"
        className="flex flex-col items-center min-w-fit">
          <span className="text-primary text-4xl md:text-3xl lg:text-4xl font-black tabular-nums">
            {padNumber(time.days)}
          </span>
          <span className="text-secondary text-[10px] md:text-sm font-bold uppercase tracking-widest mt-1">Days</span>
        </Card>
        <div className="w-px h-12 bg-primary/20 self-center hidden md:block"></div>

        <Card 
        bg="#101136a8"
        textColor="white"
        borderColor="white"
        shadowColor="black"
        className="flex flex-col items-center min-w-fit">
          <span className="text-secondary text-4xl md:text-3xl lg:text-4xl font-black tabular-nums">
            {padNumber(time.hours)}
          </span>
          <span className="text-primary text-[9px] md:text-sm font-bold uppercase tracking-widest mt-1">Hours</span>
        </Card>
        <div className="w-px h-12 bg-secondary/20 self-center hidden md:block"></div>

        <Card 
        bg="#101136a8"
        textColor="white"
        borderColor="white"
        shadowColor="black"
        className="flex flex-col items-center min-w-fit">
          <span className="text-primary text-4xl md:text-3xl lg:text-4xl font-black tabular-nums">
            {padNumber(time.minutes)}
          </span>
          <span className="text-secondary text-[9px] md:text-sm font-bold uppercase tracking-widest mt-1">Mins</span>
        </Card>
        <div className="w-px h-12 bg-primary/20 self-center hidden md:block"></div>

        <Card 
        bg="#101136a8"
        textColor="white"
        borderColor="white"
        shadowColor="black"
        className="flex flex-col items-center min-w-fit">
          <span className="text-secondary text-4xl md:text-3xl lg:text-4xl font-black tabular-nums">
            {padNumber(time.seconds)}
          </span>
          <span className="text-primary text-[9px] md:text-sm font-bold uppercase tracking-widest mt-1">Secs</span>
        </Card>

      </div>
  );
}

