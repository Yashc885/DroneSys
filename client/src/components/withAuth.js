// components/withAuth.js
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Import from next/navigation

const withAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter(); // Use useRouter correctly

    useEffect(() => {
      const key = localStorage.getItem('key');
      if (key !== 'success') {
        router.push('/login/vendor'); // Redirect to your preferred page if the key is not present
      }
    }, [router]);

    const key = localStorage.getItem('key');

    return key === 'success' ? <WrappedComponent {...props} /> : null;
  };
};

export default withAuth;
