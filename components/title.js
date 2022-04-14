import { Text, StyleSheet } from "react-native";

function Title({ content }) {
    return <Text style={styles.title}>{content}</Text>;
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#ddb52f",
        textAlign: "center",
        borderWidth: 2,
        borderColor: "#ddb52f",
        padding: 12,
    },
});

export default Title;
