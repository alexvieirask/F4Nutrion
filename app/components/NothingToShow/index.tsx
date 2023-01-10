import { useState, useEffect } from 'react';
import { Text, Animated } from 'react-native'
import { styles } from './styles-nothingToShow'

interface Props{
    label: string,
}

const NothingToShow = ({ label } : Props) : JSX.Element => {
    const [opacity ] = useState<any>(new Animated.Value(0));
    styles.container = {...styles.container, opacity:opacity}
   
    function animatedLoopShowAndHide() {
        Animated.loop(
          Animated.sequence([
            Animated.timing(opacity, {
              toValue: 1,
              duration: 1500,
              useNativeDriver: true,
            }),
            Animated.timing(opacity, {
              toValue: 0,
              duration: 1500,
              useNativeDriver: true,
            }),
          ])
        ).start();
      }
    
      useEffect(() => {
        animatedLoopShowAndHide();
      }, []);


    return(
        <Animated.View style={styles.container}>
            <Text style={styles.title}>No registered {label}.</Text>
        </Animated.View>
    )
}

export { NothingToShow }