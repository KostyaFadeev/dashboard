import { inter } from '@/app/ui/fonts';

export default function BoundaryLogo() {
  return (
    <div className={`${inter.className} flex flex-row items-center text-white`}>
      <p className="text-5xl font-medium">Boundary</p>
    </div>
  );
}
