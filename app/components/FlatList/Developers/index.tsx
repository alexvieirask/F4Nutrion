import { FlatList, Dimensions } from "react-native"
import developers from "./developers.json"
import { DeveloperItem } from "./Item";

const FlatListDevelopers = () : JSX.Element => {
    const { width } = Dimensions.get("window");
    const center_position = developers.map((y, posX) => posX * (width * 0.8) + posX * 40);
    return (
        <FlatList
            data={developers}
            keyExtractor={(developer) => developer.id.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item: dev }) => <DeveloperItem developer = {dev} />}
            horizontal
            snapToOffsets={center_position}
            snapToAlignment={"start"}
            scrollEventThrottle={16}
            decelerationRate="fast"
        />
    )

}

export { FlatListDevelopers }