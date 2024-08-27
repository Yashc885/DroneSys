'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const withAuthAdmin = (WrappedComponent) => {
  return (props) => {
    const { push } = useRouter();

    useEffect(() => {
      const key = localStorage.getItem('key');
      if (key !== 'success') {
        push('/superuser'); // Redirect to your preferred page if the key is not present
      }
    }, [push]);

    const key = localStorage.getItem('key');

    return key === 'success' ? <WrappedComponent {...props} /> : null;
  };
};

export default withAuthAdmin;
