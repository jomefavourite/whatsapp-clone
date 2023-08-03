import Header from 'components/Header';
import { Slot } from 'expo-router';

import './global.css';

export default function HomeLayout() {
  return (
    <>
      <Header />
      <Slot />
      {/* <Footer /> */}
    </>
  );
}
