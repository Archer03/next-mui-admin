import { useRouter } from "next/router";
import { useEffect, useState } from "react";

/**
 * 路由切換 loading
 * @returns 
 */
export default function () {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const showLoading = () => setLoading(true);
    const hideLoading = () => setLoading(false);
    router.events.on('routeChangeStart', showLoading);
    router.events.on('routeChangeComplete', hideLoading);
    router.events.on('routeChangeError', hideLoading);
    return () => {
      router.events.off('routeChangeStart', showLoading);
      router.events.off('routeChangeComplete', hideLoading);
      router.events.off('routeChangeError', hideLoading);
    }
  }, [])
  return loading;
}