import { Text, View, StyleSheet } from "react-native";
import Title from "../components/title";

const GameScreen = () => {
    return (
        <View style={styles.screen}>
            <Title content={"Opponent's Guess"} />
            <View>
                <Text>Higher or Lower?</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12,
    },
});

export default GameScreen;
