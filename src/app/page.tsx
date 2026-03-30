import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/weather?latitude=55.75222&longitude=37.61556&city=Москва');
}
