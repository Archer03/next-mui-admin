import { useEffect } from "react"
import { useOktaAuth } from '@okta/okta-react';

export default function () {
  const { oktaAuth } = useOktaAuth();
  useEffect(() => {
    oktaAuth.signInWithRedirect();
  }, [])
  return <>okta</>
}