import React from 'react';
import { maskJs } from 'mask-js';

function useCombinedRefs(...refs) {
  const targetRef = React.useRef();

  React.useEffect(() => {
    refs.forEach((ref) => {
      if (!ref) return;

      if (typeof ref === 'function') {
        ref(targetRef.current);
      } else {
        ref.current = targetRef.current;
      }
    });
  }, [refs]);

  return targetRef;
}

export const InputMask = React.forwardRef((props, ref) => {
  const innerRef = React.useRef(null);
  const combinedRef = useCombinedRefs(ref, innerRef);
  const [input, setInput] = React.useState('');

  return (
    <input
      {...props}
      ref={combinedRef}
      value={input}
      onChange={(event) => {
        setInput(maskJs(props.mask, event.target.value.replace(/[^0-9]/g, '')));
      }}
    />
  );
});

export const CurrencyMask = React.forwardRef((props, ref) => {
  const innerRef = React.useRef(null);
  const combinedRef = useCombinedRefs(ref, innerRef);
  const [input, setInput] = React.useState('');

  const handleCurrency = (value) => {
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d)(\d{2})$/, '$1,$2');
    value = value.replace(/(?=(\d{3})+(\D))\B/g, '.');

    return value;
  };

  return (
    <input
      {...props}
      ref={combinedRef}
      value={input}
      onChange={(event) => {
        setInput(handleCurrency(event.currentTarget.value));
      }}
    />
  );
});
