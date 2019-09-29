import React from 'react';

// create context with no upfront defaultValue
// without having to do undefined check all the time
// prettier-ignore
function createCtx<A>(): readonly [
  () => A,
  React.ProviderExoticComponent<React.ProviderProps<A | undefined>>,
  ] {
  const ctx = React.createContext<A | undefined>(undefined);
  function useCtx(): A {
    const c = React.useContext(ctx);
    if (!c) throw new Error('useCtx must be inside a Provider with a value');
    return c;
  }
  return [useCtx, ctx.Provider] as const; // make TypeScript infer a tuple, not an array of union types
}
export default createCtx;
