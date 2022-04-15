import { useEffect, useState } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import Title from "../components/title";
import NumberContainer from "../components/NumberContainer";

import PrimaryButton from "../components/PrimaryButton";

const generateRandomBetween = (min, max, exclude) => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currenGuess, setCurrentGuess] = useState(initialGuess);

    useEffect(() => {
        if (currenGuess === userNumber) {
            onGameOver();
        }
    }, [currenGuess, userNumber, onGameOver]);

    const nextGuessHandler = (direction) => {
        if (
            (direction === "lower" && currenGuess < userNumber) ||
            (direction === "higher" && currenGuess > userNumber)
        ) {
            Alert.alert("Dont't lie", "You know that this is wrong...", [
                { text: "Sorry!", style: "cancel" },
            ]);
            return;
        }

        if (direction === "lower") {
            maxBoundary = currenGuess;
        } else {
            minBoundary = currenGuess + 1;
        }

        const newRndNumber = generateRandomBetween(
            minBoundary,
            maxBoundary,
            currenGuess
        );

        setCurrentGuess(newRndNumber);
    };

    return (
        <View style={styles.screen}>
            <Title content={"Opponent's Guess"} />
            <NumberContainer>{currenGuess}</NumberContainer>
            <View>
                <Text>Higher or Lower?</Text>
                <View>
                    <PrimaryButton onPress={() => nextGuessHandler("higher")}>
                        +
                    </PrimaryButton>
                    <PrimaryButton onPress={() => nextGuessHandler("lower")}>
                        -
                    </PrimaryButton>
                </View>
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
