import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [madeGoal, setMadeGoal] = useState([]);

  function startAddGoalsHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalsHandler() {
    setModalIsVisible(false);
  }

  function addGoalsHandler(enteredGoalText) {
    setMadeGoal((currentMadeGoal) => [
      ...currentMadeGoal,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalsHandler();
  }

  function removeGoalHandler(id) {
    setMadeGoal((currentMadeGoal) => {
      return currentMadeGoal.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.appContainer}>
        <View style={styles.mainButton}>
          <Button
            title="Add New Goal"
            color="#FC7777"
            onPress={startAddGoalsHandler}
          />
        </View>

        {modalIsVisible && (
          <GoalInput
            onAddGoal={addGoalsHandler}
            onCancel={endAddGoalsHandler}
          />
        )}

        <FlatList
          data={madeGoal}
          renderItem={(goalData) => {
            return (
              <GoalItem
                text={goalData.item.text}
                id={goalData.item.id}
                onDeleteItem={removeGoalHandler}
              />
            );
          }}
          keyExtractor={(goal, index) => {
            return goal.id;
          }}
          asalwaysBounceVertical={false}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 100,
    marginRight: 8,
    marginLeft: 8,
    marginBottom: 100,
  },

  mainButton: {
    paddingBottom: 20,
    borderWidth: 2,
    borderColor: "transparent",
    borderBottomColor: "#cccccc",
  },
});
