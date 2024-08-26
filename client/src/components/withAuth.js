// components/withAuth.js
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const { push } = useRouter();

    useEffect(() => {
      const key = localStorage.getItem('key');
      if (key !== 'success') {
        push('/login/vendor'); 
      }
    }, [push]);

    const key = localStorage.getItem('key');

    return key === 'success' ? <WrappedComponent {...props} /> : null;
  };
};

export default withAuth;
