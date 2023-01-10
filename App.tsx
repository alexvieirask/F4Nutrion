import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native';

import Routes from './app/routes';
import { databaseInit } from '@app/services/database/config';

export default function App() {
    useEffect(()=>{
        databaseInit()
    },[])

    return (
        <NavigationContainer>
            <StatusBar  />
            <Routes  />
        </NavigationContainer>
  );
}