import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native';
import Routes from './app/routes';

export default function App() {
  return (
      <NavigationContainer>
          <StatusBar />
          <Routes  />
      </NavigationContainer>
  );
}