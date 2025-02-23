import { Inter, Roboto_Mono } from 'next/font/google';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
});

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-red-500 p-4 rounded-lg">
        <h1 className="text-4xl font-bold text-white">Hello World</h1>
        <p className="text-white mt-2">
          If you see this in white text on a red background, Tailwind is
          working!
        </p>
      </div>
    </div>
  );
}
