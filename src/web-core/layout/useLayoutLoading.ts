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
    let timer: any = null;
    const showLoading = () => {
      timer = setTimeout(() => setLoading(true), 200);
    };
    const hideLoading = () => {
      clearTimeout(timer);
      setLoading(false);
    };
    router.events.on('routeChangeStart', showLoading);
    router.events.on('routeChangeComplete', hideLoading);
    router.events.on('routeChangeError', hideLoading);
    return () => {
      clearTimeout(timer);
      router.events.off('routeChangeStart', showLoading);
      router.events.off('routeChangeComplete', hideLoading);
      router.events.off('routeChangeError', hideLoading);
    }
  }, [])
  return loading;
}