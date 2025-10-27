import React from 'react';
import { Card, Button, Switch, Text } from 'react-native-paper';

export function CardTask({ task, onDelete, onCheck }) {
  return (
    <Card style={{ marginVertical: 5, padding: 8, backgroundColor: '#f4f4f9', borderRadius: 8 }}>
      <Card.Content style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ flex: 1, fontSize: 18, color: '#333' }}>{task.description}</Text>

        <Switch
          value={!!task.done}
          onValueChange={() => onCheck(task)}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={task.done ? '#f5dd4b' : undefined}
        />

        <Button
          mode="contained"
          onPress={() => onDelete(task.objectId)}
          buttonColor="#ff4444"
          textColor="#ffffff"
          style={{ marginLeft: 8 }}
        >
          X
        </Button>
      </Card.Content>
    </Card>
  );
}

