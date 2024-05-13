import { Container, VStack, Heading, Input, Button, List, ListItem, ListIcon, IconButton } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';
import { useState } from 'react';

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading mb={4}>Todo App</Heading>
        <Input
          placeholder="Add a new task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          size="md"
          width="100%"
        />
        <Button onClick={handleAddTodo} colorScheme="blue" px={8}>
          Add Task
        </Button>
        <List spacing={3} width="100%">
          {todos.map((todo, index) => (
            <ListItem key={index} display="flex" justifyContent="space-between" alignItems="center">
              {todo}
              <IconButton
                aria-label="Delete task"
                icon={<FaTrash />}
                onClick={() => handleDeleteTodo(index)}
                colorScheme="red"
              />
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;