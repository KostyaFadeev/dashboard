import { Metadata } from 'next';

import BoundaryLogo from '@/app/ui/boundary-logo';
import LoginForm from '@/app/ui/login-form';

export const metadata: Metadata = {
  title: 'Вход | Регистрация',
};

const LoginPage = () => {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-center rounded-lg bg-blue-700 p-3 md:h-36">
          <div className="w-auto text-white mx-auto">
            <BoundaryLogo />
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
};

LoginPage.getLayout = false;

export default LoginPage;
