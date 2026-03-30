import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/weather?latitude=55.02381&longitude=36.7422');
}
