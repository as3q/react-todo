import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredGoal) {
    setEnteredGoalText(enteredGoal);
  }

  function addGoalsHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal animationType={"slide"}>
      <View style={styles.inputContainer}>
        <Image
          style={styles.imageContainer}
          source={require("../assets/icons/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter Goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />

        <View style={styles.button}>
          <Button title="Add" color={"#FF7676"} onPress={addGoalsHandler} />
        </View>

        <View style={styles.button}>
          <Button title="Cancel" color={"#DDDDDD"} onPress={props.onCancel} />
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 280,
  },

  textInput: {
    width: "40%",
    paddingLeft: 8,
    marginBottom: 10,
    borderWidth: 2,
    paddingVertical: 3,
    borderColor: "#cccccc",
    fontSize: 14,
  },

  button: {
    flexDirection: "column",
    paddingVertical: 3,
    width: "20%",
  },

  imageContainer: {
    width: 100,
    height: 100,
    padding: 10,
    marginBottom: 50,
  },
});
