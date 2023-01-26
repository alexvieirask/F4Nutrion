import { Text, SafeAreaView, View } from "react-native";
import { styles } from "./styles-about";
import { SeparatorLine } from "@app/components/Separator/Line";
import { FlatListDevelopers } from "@app/components/FlatList/Developers";
import { PAGES } from "@app/services/mocks";

export default function About() : JSX.Element{
    const { title, subtitle, paragraph } = PAGES.ABOUT

    return(
        <SafeAreaView style={styles.safeAreaView}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.container}>
                <View>
                    <Text style={styles.paragraph}>{paragraph}</Text>
                </View>
                <SeparatorLine  />
                <View>
                    <Text style={styles.subtitle}>{subtitle}</Text>
                    <FlatListDevelopers />
                </View>
            </View>
        </SafeAreaView>
    )
}