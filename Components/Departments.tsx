import { TouchableOpacity, StyleSheet, Text } from "react-native";
import colors from "../assets/colors";

const Departments = (props: any) => {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{props.children}</Text>
        </TouchableOpacity>
    )
};

export default Departments;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        // width: 90,
        // height: 40,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        borderWidth: 1,
        padding: 3,
        borderColor: colors.primpary_color.blue,
    },
    buttonText: {
        color: colors.primpary_color.blue,
        fontWeight: 'bold',
        padding: 5,
    },
})