import { Text, SafeAreaView, View } from "react-native";
import { styles } from "./styles-about";
import { SeparatorLine } from "@app/components/Separator/Line";
import { FlatListDevelopers } from "@app/components/FlatList/Developers";

export default function About() : JSX.Element{
    return(
        <SafeAreaView style={styles.safeAreaView}>
            <Text style={styles.title}>F4Nutrion</Text>
            <View style={styles.container}>
                <View>
                    <Text style={styles.paragraph}>
                        Who we are? Where we came from? And what are we doing? We have the answer!
                        We are four developers that came from the Federal Intitute Catarinense, with an idea.
                        Direcly for you nutritionist, that lives with the messy notes and prescription of your
                        own. We bring the solution for you! The F4Nutrion, the ideal app for nutritionists that
                        look for, besides an easy way to make your notes, a more simple method of creating a diet.
                        The F4Nutrion allow you to make notes about each patient in a organized way, besides os creating
                        andcalculing a diet in a simple way, in one place.
                    </Text>
                </View>
                
                <SeparatorLine  />

                <View>
                    <Text style={styles.subtitle}>Developers</Text>
                    <FlatListDevelopers />
                </View>

            </View>
            
        </SafeAreaView>
    )
}