import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import Routes from './app/routes';

export default function App() {
  return (
      <NavigationContainer>
          <StatusBar style="auto" />
          <Routes  />
      </NavigationContainer>
  );
}