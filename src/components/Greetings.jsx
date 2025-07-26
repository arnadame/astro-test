import { useState } from 'preact/hooks';

export default function Greeting({messages}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];
  
  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div class="flex flex-col items-center">
      <h3 class="text-xl py-5">{greeting}! Thank you for visiting!</h3>
      {/* <button >
        New Greeting
      </button> */}
      <button onClick={() => setGreeting(randomMessage())} type="button" class="text-gray-900 cursor-pointer bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600">New Greeting</button>

    </div>
  );
}