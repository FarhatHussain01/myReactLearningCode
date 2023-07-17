'use client'
import React, { useReducer } from 'react';
import MoreReducerExample from '@/app/components/MoreReducerExample'

const reducer = (state, action) => {
  if (action.type === 'ride') {
    return { money: state.money + 10 };
  } else if (action.type === 'fuel') {
    return { money: state.money - 20 };
  } else {
    return state;
  }
};

const Page = () => {
  const initialValue = { money: 100 };
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <>
      <div className='flex flex-col items-center justify-center h-[600px] bg-emerald-300 '>
        <h1 className='font-bold mb-3 text-3xl text-white'>Wallet: {state.money}</h1>
        <div>
          <button onClick={() => dispatch({ type: 'ride' })} className='p-3 rounded-md bg-[#af7422] mr-2'>
            A new Customer!
          </button>
          <button onClick={() => dispatch({ type: 'fuel' })} className='p-3 rounded-md bg-[#af7422]'>
            Refill the Tank!
          </button>
        </div>
      </div>
      <MoreReducerExample/>
    </>
  );
};

export default Page;
