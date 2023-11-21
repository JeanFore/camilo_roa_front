import Layout from '../layout';
 // Asumiendo que tienes un layout diferente para el dashboard
import '../styles/globals.css';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import DashboardLayout from '../dashboardlayout';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  console.log("router",router);
  // Determina si la página es parte del dashboard
  const isDashboard = router.pathname.startsWith('/dashboard');
  console.log("dash",isDashboard);
  if (isDashboard) {
    return (
      <DashboardLayout>
        <Component {...pageProps} />
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <Component {...pageProps} />
    </DashboardLayout>
  );
}

export default MyApp;
